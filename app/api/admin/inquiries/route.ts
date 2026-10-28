import {isAdmin,runtime,json} from '../../../../lib/inquiries-server';
export async function GET(request:Request){
 if(!isAdmin(request))return json({error:'Απαιτείται πρόσβαση διαχειριστή.'},403);
 try{const e=runtime();const rows=await e.DB.prepare('SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 250').all();const files=await e.DB.prepare('SELECT id,inquiry_id,name,type,size FROM inquiry_files').all();return json({inquiries:rows.results,files:files.results,crmConnected:!!e.CRM_WEBHOOK_URL});}catch{return json({error:'Δεν ήταν δυνατή η ανάκτηση αιτημάτων.'},503);}
}
