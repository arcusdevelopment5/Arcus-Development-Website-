import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync('public/app.js','utf8');
const formCode=source.slice(source.indexOf("  const form = $('#project-form');"),source.indexOf("  const year = $('#year');"));
function harness({reply={ok:true,id:'AD-TEST'},networkError=false,files=[]}={}){
 const values={intent:'home',name:'Test User',area:'Test area',phone:'2310000000',email:'',sqm:'80',timeline:'later',description:'Keep my description',privacy:'on',files,idempotency:'first-request'};
 const listeners={},events=[],status={textContent:'',focus(){}},button={disabled:false};let calls=0,release;
 const elements={kind:{value:''},source:{value:''},idempotency:{value:''}};
 const form={elements,addEventListener:(n,f)=>listeners[n]=f,reset(){for(const key of Object.keys(values))values[key]='';}};
 const $=selector=>selector==='#project-form'?form:selector==='#form-status'?status:selector==='button[type="submit"]'?button:null;
 class Data{constructor(){this.data={...values,idempotency:elements.idempotency.value};}get(k){return this.data[k];}getAll(k){return Array.isArray(this.data[k])?this.data[k]:[];}entries(){return Object.entries(this.data);}}
 const gate=new Promise(resolve=>release=resolve);
 vm.runInNewContext(formCode,{$,$$:()=>[],location:{pathname:'/el/epikoinonia',search:''},URLSearchParams,requestId:()=>Math.random().toString(),FormData:Data,event:(name,params)=>events.push({name,params}),document:{querySelector:()=>null},window:{},fetch:async()=>{calls++;await gate;if(networkError)throw new Error('Network failure');return{ok:reply.ok,json:async()=>reply};}});
 return {values,status,button,events,submit:()=>listeners.submit({preventDefault(){}}),release,get calls(){return calls;}};
}
test('double submit sends once and confirmed success emits one PII-free lead',async()=>{
 const h=harness();const first=h.submit();await h.submit();assert.equal(h.calls,1);assert.equal(h.button.disabled,true);h.release();await first;
 assert.equal(h.events.length,1);assert.equal(h.events[0].name,'generate_lead');assert.deepEqual(Object.keys(h.events[0].params),['project_type']);assert.equal(h.events[0].params.project_type,'home');assert.match(h.status.textContent,/Λάβαμε το αίτημα.*AD-TEST/);assert.equal(h.values.description,'');assert.equal(h.button.disabled,false);
});
test('invalid fields do not submit or emit a lead',async()=>{const h=harness();h.values.phone='bad';await h.submit();assert.equal(h.calls,0);assert.equal(h.events.length,0);assert.equal(h.values.description,'Keep my description');});
test('network and server failures preserve description and emit no lead',async()=>{for(const options of [{networkError:true},{reply:{ok:false,error:'failed'}},{reply:{ok:true}}]){const h=harness(options);h.release();await h.submit();assert.equal(h.events.length,0);assert.equal(h.values.description,'Keep my description');assert.match(h.status.textContent,/Το αίτημα δεν στάλθηκε/);assert.equal(h.button.disabled,false);}});
test('invalid attachments are rejected before sending',async()=>{for(const file of [{type:'text/plain',size:100},{type:'application/pdf',size:9*1024*1024}]){const h=harness({files:[file]});await h.submit();assert.equal(h.calls,0);assert.equal(h.events.length,0);assert.equal(h.values.description,'Keep my description');}});
test('upload failure preserves input, explains limits and emits no lead',async()=>{const h=harness({files:[{type:'application/pdf',size:100}]});await h.submit();assert.equal(h.calls,0);assert.equal(h.events.length,0);assert.match(h.status.textContent,/έως 3 αρχεία JPG, PNG, WebP ή PDF, έως 8 MB/);assert.equal(h.values.description,'Keep my description');});
