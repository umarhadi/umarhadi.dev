"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1154],{41154:function(r,n,t){t.r(n),t.d(n,{extractExeIcon:function(){return a}});var e=t(55872).Buffer;const i=1,o=(r,n)=>{let{bitCount:t,colors:e,dataSize:i,height:o,planes:a,width:c}=r;return Uint8Array.from([c,32===t&&o===2*c?c:o,e,0,...new Uint8Array(Uint16Array.from([a]).buffer),...new Uint8Array(Uint16Array.from([t]).buffer),...new Uint8Array(Uint32Array.from([i]).buffer),...new Uint8Array(Uint32Array.from([n]).buffer)])},a=async r=>{const n=await t.e(9556).then(t.bind(t,69556));let a,c;try{({entries:c}=n.NtExecutableResource.from(n.NtExecutable.from(r,{ignoreCert:!0}),!0)),[a]=n.Resource.IconGroupEntry.fromEntries(c)}catch(b){if(b.message.includes("Binary with symbols is not supported now")){const{unarchive:n}=await t.e(2860).then(t.bind(t,12860));try{const{"/.rsrc/ICON/1.ico":t}=await n("data.exe",r)||{};return e.from(t)}catch{}}return}if(!a?.icons)return;let f=6+16*a.icons.length;const u=a.icons.map((r=>{let{iconID:n}=r;return c.find((r=>{let{id:t,type:e}=r;return 3===e&&t===n}))})),s=a.icons.reduce(((r,n,t)=>(f+=t?u[t-1]?.bin.byteLength??0:0,e.concat([r,o(n,f)]))),(y=a.icons.length,Uint8Array.from([0,0,...new Uint8Array(Uint16Array.from([i]).buffer),...new Uint8Array(Uint16Array.from([y]).buffer)])));var y;return e.from(u.reduce(((r,n)=>e.concat([r,e.from(n.bin)])),s))}}}]);