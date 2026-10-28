import {isAdmin,sameOrigin,runtime,json} from '../../../../lib/inquiries-server';
export async function POST(request:Request){
 if(!isAdmin(request)||!sameOrigin(request))return json({error:'Απαιτείται πρόσβαση διαχειριστή.'},403);
 let body;try{body=await request.json() as Record<string,string>;}catch{return json({error:'Μη έγκυρο αίτημα.'},400);}
 if(!['new','contacted','visit','proposal','won','closed'].includes(body.status))return json({error:'Μη έγκυρη κατάσταση.'},422);
 const result=await runtime().DB.prepare('UPDATE inquiries SET status=?,assigned_to=?,admin_notes=?,updated_at=? WHERE id=?').bind(body.status,String(body.assignedTo||'').slice(0,120),String(body.notes||'').slice(0,2000),new Date().toISOString(),body.id).run();return json({ok:result.meta.changes>0});
}
