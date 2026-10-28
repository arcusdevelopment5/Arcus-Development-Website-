export function validateInquiry(data){
 const errors={};const clean={};
 const val=(key,max=300)=>String(data[key]??'').trim().slice(0,max);
 clean.kind=val('kind');if(!['project','support'].includes(clean.kind)) errors.kind='Επίλεξε τύπο αιτήματος.';
 clean.intent=val('intent');if(!['home','investment','support'].includes(clean.intent)) errors.intent='Επίλεξε κατοικία ή επένδυση.';
 if(clean.kind==='support') clean.intent='support';
 clean.name=val('name',120);if(clean.name.length<2)errors.name='Συμπλήρωσε το ονοματεπώνυμό σου.';
 clean.email=val('email',200);clean.phone=val('phone',40);
 if(!clean.email&&!clean.phone) errors.email='Συμπλήρωσε email ή τηλέφωνο.';
 if(clean.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email))errors.email='Έλεγξε τη διεύθυνση email.';
 if(clean.phone&&!/^\+?[\d\s().-]{8,25}$/.test(clean.phone))errors.phone='Έλεγξε τον αριθμό τηλεφώνου.';
 clean.area=val('area',160);if(clean.area.length<2)errors.area='Συμπλήρωσε δήμο ή γειτονιά.';
 const sqm=val('sqm');clean.sqm=sqm?Number(sqm):null;if(sqm&&(!Number.isInteger(clean.sqm)||clean.sqm<1||clean.sqm>10000))errors.sqm='Γράψε έγκυρο εμβαδόν σε m².';
 clean.timeline=val('timeline',30);if(clean.timeline&&!['now','1-3','later'].includes(clean.timeline))errors.timeline='Επίλεξε ένα διαθέσιμο χρονοδιάγραμμα.';
 clean.description=val('description',3000);clean.source=val('source',160)||'/el/epikoinonia';if(!clean.source.startsWith('/el'))clean.source='/el/epikoinonia';
 clean.idempotency=val('idempotency',80);if(!/^[a-zA-Z0-9-]{16,80}$/.test(clean.idempotency))errors.form='Ανανέωσε τη σελίδα και προσπάθησε ξανά.';
 if(val('privacy')!=='yes')errors.privacy='Διάβασε την ενημέρωση απορρήτου πριν την υποβολή.';
 return {clean,errors,valid:Object.keys(errors).length===0};
}
export const ALLOWED_FILES={'image/jpeg':['ffd8ff'],'image/png':['89504e470d0a1a0a'],'image/webp':['52494646'],'application/pdf':['255044462d']};
export async function checkFile(file){
 if(!ALLOWED_FILES[file.type]||file.size>8*1024*1024||file.size===0)return false;
 const bytes=new Uint8Array(await file.slice(0,12).arrayBuffer());const hex=Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
 return ALLOWED_FILES[file.type].some(s=>hex.startsWith(s))&&(file.type!=='image/webp'||hex.slice(16,24)==='57454250');
}
