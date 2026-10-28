import { env } from 'cloudflare:workers';
import { validateInquiry, checkFile } from './inquiry-validation.mjs';
type Runtime = {DB:D1Database; BUCKET:R2Bucket; ADMIN_EMAILS?:string; CRM_WEBHOOK_URL?:string; CRM_WEBHOOK_TOKEN?:string};
export const runtime=()=>env as unknown as Runtime;
export const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export function isAdmin(request:Request){const e=runtime();const email=request.headers.get('oai-authenticated-user-email')?.toLowerCase();return !!request.headers.get('oai-authenticated-user-id')&&!!email&&!!e.ADMIN_EMAILS?.split(',').map(x=>x.trim().toLowerCase()).includes(email);}
export function sameOrigin(request:Request){return request.headers.get('origin')===new URL(request.url).origin;}
async function boundedForm(request:Request){
 const limit=26*1024*1024;if(Number(request.headers.get('content-length')||0)>limit)throw new Error('size');
 const reader=request.body?.getReader();if(!reader)throw new Error('empty');const parts:Uint8Array[]=[];let size=0;
 while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>limit){await reader.cancel();throw new Error('size');}parts.push(value);}
 const body=new Uint8Array(size);let offset=0;for(const part of parts){body.set(part,offset);offset+=part.length;}
 return new Response(body,{headers:{'Content-Type':request.headers.get('content-type')||''}}).formData();
}
export async function submitInquiry(request:Request){
 if(!sameOrigin(request))return json({error:'Μη έγκυρη προέλευση αιτήματος.'},403);
 const e=runtime();if(!e.DB||!e.BUCKET)return json({error:'Η φόρμα δεν είναι διαθέσιμη αυτή τη στιγμή. Κάλεσε στο 2310 445 935.'},503);
 let form:FormData;try{form=await boundedForm(request);}catch{return json({error:'Έλεγξε τα αρχεία σου: έως 3 αρχεία, 8 MB το καθένα.'},413);}
 if(form.get('website'))return json({error:'Η υποβολή δεν ολοκληρώθηκε. Δοκίμασε ξανά.'},400);
 const {clean:c,errors,valid}=validateInquiry(Object.fromEntries(form.entries()));if(!valid)return json({errors,error:'Έλεγξε τα πεδία που σημειώνονται.'},422);
 const files=form.getAll('files').filter((f):f is File=>typeof f!=='string'&&f.size>0);
 if(files.length>3)return json({errors:{files:'Έως 3 αρχεία ανά αίτημα.'}},422);
 try{for(const f of files)if(!await checkFile(f))return json({errors:{files:'Επιτρέπονται JPG, PNG, WebP και PDF, έως 8 MB ανά αρχείο.'}},422);}catch{return json({errors:{files:'Δεν διαβάστηκε το αρχείο. Πρόσθεσέ το ξανά ή στείλε αρχικά το αίτημα χωρίς συνημμένο.'}},422);}
 try{
  const prior=await e.DB.prepare('SELECT id FROM inquiries WHERE idempotency=?').bind(c.idempotency).first<{id:string}>();if(prior)return json({ok:true,id:prior.id});
  const window=new Date().toISOString().slice(0,13);const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode((request.headers.get('cf-connecting-ip')||'local')+'|'+window+'|'+new URL(request.url).hostname));const rateKey=Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,'0')).join('');
  const rate=await e.DB.prepare('INSERT INTO submission_rates (key,window,count) VALUES (?,?,1) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count').bind(rateKey,window).first<{count:number}>();if(rate&&rate.count>8)return json({error:'Έχουν σταλεί αρκετά αιτήματα. Δοκίμασε αργότερα ή επικοινώνησε τηλεφωνικά.'},429);
  const id=crypto.randomUUID();const now=new Date().toISOString();const uploads:{id:string;key:string;name:string;type:string;size:number}[]=[];
  try{
   for(const file of files){const fid=crypto.randomUUID(),key=`inquiries/${id}/${fid}`;await e.BUCKET.put(key,await file.arrayBuffer(),{httpMetadata:{contentType:file.type}});uploads.push({id:fid,key,name:file.name.replace(/[\r\n"<>]/g,'').slice(0,180),type:file.type,size:file.size});}
   const stmts=[e.DB.prepare('INSERT INTO inquiries (id,idempotency,kind,intent,name,phone,email,area,sqm,timeline,description,source,status,created_at,updated_at,crm_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(id,c.idempotency,c.kind,c.intent,c.name,c.phone||null,c.email||null,c.area,c.sqm,c.timeline||null,c.description||null,c.source,'new',now,now,'pending')];
   for(const file of uploads)stmts.push(e.DB.prepare('INSERT INTO inquiry_files (id,inquiry_id,object_key,name,type,size) VALUES (?,?,?,?,?,?)').bind(file.id,id,file.key,file.name,file.type,file.size));
   await e.DB.batch(stmts);
  }catch(error){await Promise.allSettled(uploads.map(f=>e.BUCKET.delete(f.key)));const prior=await e.DB.prepare('SELECT id FROM inquiries WHERE idempotency=?').bind(c.idempotency).first<{id:string}>();if(prior)return json({ok:true,id:prior.id});throw error;}
  // No external delivery is attempted until an approved destination is configured.
  if(e.CRM_WEBHOOK_URL?.startsWith('https://')){
   let status='failed';try{const r=await fetch(e.CRM_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json',...(e.CRM_WEBHOOK_TOKEN?{Authorization:`Bearer ${e.CRM_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({id,...c,createdAt:now,attachments:uploads.map(f=>({id:f.id,name:f.name,type:f.type,size:f.size}))}),signal:AbortSignal.timeout(7000)});if(r.ok)status='delivered';}catch{}
   await e.DB.prepare('UPDATE inquiries SET crm_status=? WHERE id=?').bind(status,id).run();
  }
  await e.DB.prepare('DELETE FROM submission_rates WHERE window < ?').bind(new Date(Date.now()-48*3600000).toISOString().slice(0,13)).run();
  return json({ok:true,id},201);
 }catch{return json({error:'Το αίτημα δεν επιβεβαιώθηκε. Τα στοιχεία παραμένουν στη φόρμα· δοκίμασε ξανά ή κάλεσε στο 2310 445 935.'},503);}
}
