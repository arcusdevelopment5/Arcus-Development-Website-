import {isAdmin,runtime,json} from '../../../../lib/inquiries-server';
export async function GET(request:Request){
 if(!isAdmin(request))return json({error:'Απαιτείται πρόσβαση διαχειριστή.'},403);
 const id=new URL(request.url).searchParams.get('id');if(!id)return json({error:'Missing file'},400);
 const e=runtime();const f=await e.DB.prepare('SELECT object_key,name,type FROM inquiry_files WHERE id=?').bind(id).first<{object_key:string;name:string;type:string}>();if(!f)return json({error:'Not found'},404);const obj=await e.BUCKET.get(f.object_key);if(!obj)return json({error:'Not found'},404);
 return new Response(obj.body,{headers:{'Content-Type':f.type,'Content-Disposition':`attachment; filename*=UTF-8''${encodeURIComponent(f.name)}`,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
