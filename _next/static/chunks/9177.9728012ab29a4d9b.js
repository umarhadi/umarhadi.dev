"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9177],{39177:function(t,e,r){function n(t){return t[Symbol.asyncIterator]?t[Symbol.asyncIterator]():t[Symbol.iterator]?t[Symbol.iterator]():t.next?t:function(t){let e=[t];return{next:()=>Promise.resolve({done:0===e.length,value:e.pop()}),return:()=>(e=[],{}),[Symbol.asyncIterator](){return this}}}(t)}async function o(t){let e=0;const r=[];await async function(t,e){const r=n(t);for(;;){const{value:t,done:n}=await r.next();if(t&&await e(t),n)break}r.return&&r.return()}(t,(t=>{r.push(t),e+=t.byteLength}));const o=new Uint8Array(e);let a=0;for(const n of r)o.set(n,a),a+=n.byteLength;return o}async function a({onProgress:t,url:e,method:r="GET",headers:n={},body:a}){a&&(a=await o(a));const s=await fetch(e,{method:r,headers:n,body:a}),u=s.body&&s.body.getReader?function(t){if(t[Symbol.asyncIterator])return t;const e=t.getReader();return{next:()=>e.read(),return:()=>(e.releaseLock(),{}),[Symbol.asyncIterator](){return this}}}(s.body):[new Uint8Array(await s.arrayBuffer())];n={};for(const[o,c]of s.headers.entries())n[o]=c;return{url:s.url,method:s.method,statusCode:s.status,statusMessage:s.statusText,body:u,headers:n}}r.r(e),r.d(e,{request:function(){return a}});var s={request:a};e.default=s}}]);