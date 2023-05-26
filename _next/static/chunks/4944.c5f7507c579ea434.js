"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4944,1494],{84944:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(11527);var i=a(74965).ZP.div.withConfig({componentId:"sc-f808b011-0"})`
  iframe {
    opacity: ${e=>{let{$loaded:t}=e;return t?"100%":"0%"}};
    transition: opacity 0.25s ease-in;
  }

  .loading {
    &::before {
      color: #fff;
      font-weight: 500;
      mix-blend-mode: normal;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 50%);
    }
  }
`,o=a(21494),r=a(54537),s=a(45398),l=a(67435),c=a(57996),f=a(3416),d=a(68584),u=a(50959),p=a(11188),m=a(55872).Buffer;var w=e=>{let{id:t}=e;const{closeWithTransition:a,processes:{[t]:{libs:[w=""]=[],url:g=""}={}}={}}=(0,c.z)(),{createPath:y,exists:b,readFile:h,updateFolder:v,writeFile:k}=(0,l.o)(),{foregroundId:x,setForegroundId:$,setWallpaper:F}=(0,f.k)(),L=(0,u.useRef)(null),[D,T]=(0,u.useState)(!1),[E,_]=(0,u.useState)(),{prependFileToTitle:C}=(0,s.Z)(t),B=(0,u.useCallback)((e=>t=>{const a=(0,d.join)(p.dA,"wallpaper.png");t.toBlob((async t=>{await k(a,m.from(await(t?.arrayBuffer())),!0),F(a,e)}))}),[F,k]),{onDragOver:W,onDrop:H}=(0,r.Z)({id:t});return(0,u.useEffect)((()=>{C("Untitled")}),[C]),(0,u.useEffect)((()=>{x!==t&&L.current?.contentWindow?.addEventListener("click",(()=>$(t)),p.K7)}),[x,t,$]),(0,u.useEffect)((()=>{const{contentWindow:e}=L.current||{};if(D&&e&&!E){const n=e,i=n.systemHooks.showOpenFileDialog,o=n.file_new;_(n),n.file_new=()=>{C("Untitled"),o()},n.systemHooks.setWallpaperTiled=B("tile"),n.systemHooks.setWallpaperCentered=B("center"),n.systemHooks.showOpenFileDialog=async e=>{const{file:t}=await i(e);return C(t.name),{file:t}},n.close=()=>a(t),n.storage_quota_exceeded=()=>{},n.systemHooks.showSaveFileDialog=async e=>{let{defaultFileName:t,getBlob:a}=e;return v(p.Ll,await y(`${t}.png`,p.Ll,m.from(await(await a("image/png")).arrayBuffer())))},n.systemHooks.writeBlobToHandle=async(e,t)=>{await b(e)&&(await k(e,m.from(await t.arrayBuffer()),!0),v((0,d.dirname)(e),(0,d.basename)(e)))},e.addEventListener("dragover",W),e.addEventListener("drop",H)}}),[a,y,b,t,E,D,W,H,C,B,v,k]),(0,u.useEffect)((()=>{E&&g&&h(g).then((e=>{E.open_from_file(new File([e],g),g),C((0,d.basename)(g))}))}),[E,C,h,g]),(0,n.jsxs)(i,{$loaded:D,children:[!D&&(0,n.jsx)(o.default,{className:"loading"}),(0,n.jsx)("iframe",{ref:L,height:"100%",id:"jspaint-iframe",onLoad:()=>T(!0),src:w,title:t,width:"100%",...p.v0})]})}},21494:function(e,t,a){a.r(t);const n=a(74965).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=n},54537:function(e,t,a){var n=a(99987),i=a(21424),o=a(87674),r=a(67435),s=a(57996),l=a(3416),c=a(68584),f=a(50959),d=a(11188),u=a(8798);t.Z=e=>{let{callback:t,directory:a=d.Ll,id:p,onDragLeave:m,onDragOver:w,updatePositions:g}=e;const{url:y}=(0,s.z)(),{iconPositions:b,sortOrders:h,setIconPositions:v}=(0,l.k)(),{mkdirRecursive:k,updateFolder:x,writeFile:$}=(0,r.o)(),F=(0,f.useCallback)((async(e,t,a)=>{if(p)if(t){const n=(0,c.join)(d.Ll,e);await k(d.Ll),await $(n,t,!0)&&(a===o.v.UPDATE_URL&&y(p,n),x(d.Ll,e))}else a===o.v.UPDATE_URL&&y(p,e)}),[p,k,x,y,$]),{openTransferDialog:L}=(0,n.Z)();return{onDragLeave:m,onDragOver:e=>{w?.(e),(0,u.nK)(e)},onDrop:e=>{if(g&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,i.p4)(e);if(0===t.length&&""===n)return;const o={x:e.clientX,y:e.clientY};let r=[];if(n){try{r=JSON.parse(n)}catch{}if(!Array.isArray(r))return;const[e]=r;if(!e)return;if(e.startsWith(a)&&(0,c.basename)(e)===(0,c.relative)(a,e))return;r=r.map((e=>(0,c.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!b[`${a}/${e}`])return e;let t=0,n="";do{t+=1,n=`${a}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[n]);return(0,c.basename)(n)})),(0,u.vi)(a,e.target,b,h,o,r,v)}(0,i.WG)(e,t||F,a,L,Boolean(p))}}}},45398:function(e,t,a){var n=a(57996),i=a(66328),o=a(50959),r=a(11188);t.Z=e=>{const{title:t}=(0,n.z)(),[a]=e.split(r.CC),{title:s}=i.Z[a]||{};return{appendFileToTitle:(0,o.useCallback)(((a,n)=>{const i=a?` - ${a}${n?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,o.useCallback)(((a,n)=>{const i=a?`${n?`${r.xy} `:""}${a} - `:"";t(e,`${i}${s}`)}),[e,s,t])}}}}]);