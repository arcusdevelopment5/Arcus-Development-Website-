import test from 'node:test';
import assert from 'node:assert/strict';
import {validateInquiry,checkFile} from '../lib/inquiry-validation.mjs';
const valid={kind:'project',intent:'home',name:'QA Test',area:'Test district',email:'qa@example.invalid',privacy:'yes',idempotency:'b7a01fac-5244-4076-810d-4e2abcbd545c'};
test('accepts either contact method and optional values',()=>{assert.equal(validateInquiry(valid).valid,true);assert.equal(validateInquiry({...valid,email:'',phone:'+30 2310 000000'}).valid,true)});
test('rejects missing contact, invalid intent, email and dimensions',()=>{assert.ok(validateInquiry({...valid,email:''}).errors.email);assert.ok(validateInquiry({...valid,intent:'other',email:'bad',sqm:'-4'}).errors.intent);assert.ok(validateInquiry({...valid,sqm:'1.5'}).errors.sqm)});
test('requires privacy acknowledgement and idempotency key',()=>{assert.equal(validateInquiry({...valid,privacy:'',idempotency:''}).valid,false)});
test('validates file signatures, not just file extensions or MIME',async()=>{assert.equal(await checkFile(new File(['malicious'],'plan.pdf',{type:'application/pdf'})),false);assert.equal(await checkFile(new File(['%PDF-1.4\n%QA test'],'plan.pdf',{type:'application/pdf'})),true);assert.equal(await checkFile(new File(['<svg/>'],'image.svg',{type:'image/svg+xml'})),false)});
