"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4013],{26014:function(e,t,n){var i=n(11527),o=n(83609),r=n(431),s=n(12901),a=n.n(s),l=n(50959);const c=a()((()=>n.e(6022).then(n.bind(n,46022))),{loadableGenerated:{webpack:()=>[46022]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:s,children:a}=e;const{processes:{[t]:{url:d=""}={}}}=(0,r.z)(),u=(0,l.useRef)(null),[f,w]=(0,l.useState)(!0),h=(0,l.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,d,u,w,f),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(c,{}),(0,i.jsx)(s,{ref:u,style:h,...(0,o.Z)({id:t}),children:a})]})}},34013:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(11527),o=n(26014),r=n(34256);var s=r.ZP.div.withConfig({componentId:"sc-1042897f-0"})`
  canvas {
    height: 100%;
    width: 100%;
  }
`,a=n(431),l=n(69455),c=n(50959),d=n(12876);var u=(e,t,n,i)=>{const{processes:{[e]:{libs:o=[]}={}}={}}=(0,a.z)(),{windowStates:{[e]:s}}=(0,l.k)(),{sizes:{titleBar:u}}=(0,r.Fg)(),{size:f}=s||{};(0,c.useEffect)((()=>{(0,d.mb)(o).then((()=>{window.ioq3&&(window.ioq3.viewport=n.current,window.ioq3.elementPointerLock=!0,window.ioq3.callMain([]),i(!1))}))}),[n,o,i]),(0,c.useEffect)((()=>{window.ioq3&&window.ioq3.setCanvasSize((0,d.Vy)(f?.width),(0,d.Vy)(f?.height)-u.height)}),[i,f,u.height]),(0,c.useEffect)((()=>()=>{try{window.ioq3?.exit()}catch{}window.AL?.contexts.forEach((e=>{let{ctx:t}=e;return t.close()}))}),[])};var f=e=>{let{id:t}=e;return(0,i.jsx)(o.Z,{StyledComponent:s,id:t,useHook:u})}},83609:function(e,t,n){var i=n(18213),o=n(5894),r=n(80968),s=n(56285),a=n(431),l=n(69455),c=n(87730),d=n(50959),u=n(90810),f=n(12876);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:w,onDragLeave:h,onDragOver:m,updatePositions:v}=e;const{url:p}=(0,a.z)(),{iconPositions:g,sortOrders:b,setIconPositions:y}=(0,l.k)(),{mkdirRecursive:k,updateFolder:x,writeFile:L}=(0,s.o)(),E=(0,d.useCallback)((async(e,t,n)=>{if(w)if(t){const i=(0,c.join)(u.Ll,e);await k(u.Ll),await L(i,t,!0)&&(n===r.v.UPDATE_URL&&p(w,i),x(u.Ll,e))}else n===r.v.UPDATE_URL&&p(w,e)}),[w,k,x,p,L]),{openTransferDialog:D}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{m?.(e),(0,f.nK)(e)},onDrop:e=>{if(!u.my.has((0,c.extname)(n))){if(v&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,o.p4)(e);if(0===t.length&&""===i)return;const r={x:e.clientX,y:e.clientY};let s=[];if(i){try{s=JSON.parse(i)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;s=s.map((e=>(0,c.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!g[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(g[i]);return(0,c.basename)(i)})),(0,f.vi)(n,e.target,g,b,r,s,y)}(0,o.WG)(e,t||E,n,D,Boolean(w))}}}}}}]);