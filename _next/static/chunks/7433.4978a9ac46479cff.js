"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7433],{41311:function(e,t,n){var i=n(11527),a=n(87373),o=n(7372),s=n(38974),r=n.n(s),l=n(50959);const c=r()((()=>n.e(2817).then(n.bind(n,62817))),{loadableGenerated:{webpack:()=>[62817]}}),d=e=>{let{id:t,useHook:n,StyledComponent:s,children:r}=e;const{processes:{[t]:{url:d=""}={}}}=(0,o.z)(),u=(0,l.useRef)(null),[f,m]=(0,l.useState)(!0),p=(0,l.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n({containerRef:u,id:t,loading:f,setLoading:m,url:d}),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(c,{}),(0,i.jsx)(s,{ref:u,style:p,...(0,a.Z)({id:t}),children:r})]})};t.Z=(0,l.memo)(d)},17433:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(11527),a=n(41311);var o=n(94386).ZP.div.withConfig({componentId:"sc-aa74e590-0"})`
  height: calc(100% - 30px) !important;
  width: 100% !important;

  canvas {
    height: calc(100% + 12px) !important;
    width: 100% !important;
  }
`,s=n(7372),r=n(50959),l=n(93203),c=n(70286);var d=e=>{let{containerRef:t,id:n,setLoading:i}=e;const{processes:{[n]:{libs:a=[]}={}}={}}=(0,s.z)(),[o,d]=(0,r.useState)();(0,r.useEffect)((()=>{const e=t.current?.querySelector("canvas");e instanceof HTMLCanvasElement&&(window.Module={canvas:e,postRun:()=>i(!1)},d(e))}),[t,i]),(0,r.useEffect)((()=>(o&&setTimeout((()=>{const{height:e,width:n}=t.current?.getBoundingClientRect()||{};e&&n&&(o.style.height=`${e}px`,o.style.width=`${n}px`,(0,c.mb)(a,void 0,!!window.Module.canvas))}),l.jx.WINDOW),()=>{o&&window.Module&&window.Module.SDL2?.audioContext.close()})),[o,t,a])};var u=e=>{let{id:t}=e;return(0,i.jsx)(a.Z,{StyledComponent:o,id:t,useHook:d,children:(0,i.jsx)("canvas",{id:"canvas",onContextMenu:c.nK})})}},87373:function(e,t,n){var i=n(54660),a=n(39397),o=n(22449),s=n(46948),r=n(7372),l=n(87966),c=n(5738),d=n(50959),u=n(93203),f=n(70286);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:m,onDragLeave:p,onDragOver:h,updatePositions:v}=e;const{url:g}=(0,r.z)(),{iconPositions:w,sortOrders:x,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:y,updateFolder:L,writeFile:k}=(0,s.o)(),C=(0,d.useCallback)((async(e,t,n)=>{if(m)if(t){const i=(0,c.join)(u.Ll,e);await y(u.Ll),await k(i,t,!0)&&(n===o.v.UPDATE_URL&&g(m,i),L(u.Ll,e))}else n===o.v.UPDATE_URL&&g(m,e)}),[m,y,L,g,k]),{openTransferDialog:D}=(0,i.Z)();return{onDragLeave:p,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(!u.my.has((0,f.RT)(n))){if(v&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,a.p4)(e);if(0===t.length&&""===i)return;const o={x:e.clientX,y:e.clientY};let s=[];if(i){try{s=JSON.parse(i)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;s=s.map((e=>(0,c.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[i]);return(0,c.basename)(i)})),(0,f.vi)(n,e.target,w,x,o,s,b)}(0,a.WG)(e,t||C,n,D,Boolean(m))}}}}}}]);