"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{38295:function(e,t,n){var i=n(11527),a=n(67398),s=n(15455),o=n(14304),r=n.n(o),l=n(50959);const c=r()((()=>n.e(4039).then(n.bind(n,34039))),{loadableGenerated:{webpack:()=>[34039]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:o,children:r}=e;const{processes:{[t]:{url:u=""}={}}}=(0,s.z)(),d=(0,l.useRef)(null),[f,p]=(0,l.useState)(!0),h=(0,l.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,u,d,p,f),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(c,{}),(0,i.jsx)(o,{ref:d,style:h,...(0,a.Z)({id:t}),children:r})]})}},60858:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(11527),a=n(38295);var s=n(74965).ZP.div.withConfig({componentId:"sc-aa74e590-0"})`
  height: calc(100% - 30px) !important;
  width: 100% !important;

  canvas {
    height: calc(100% + 12px) !important;
    width: 100% !important;
  }
`,o=n(15455),r=n(50959),l=n(95063),c=n(63270);var u=(e,t,n,i)=>{const{processes:{[e]:{libs:a=[]}={}}={}}=(0,o.z)(),[s,u]=(0,r.useState)();(0,r.useEffect)((()=>{const e=n.current?.querySelector("canvas");e instanceof HTMLCanvasElement&&(window.Module={canvas:e,postRun:()=>i(!1)},u(e))}),[n,i]),(0,r.useEffect)((()=>(s&&setTimeout((()=>{const{height:e,width:t}=n.current?.getBoundingClientRect()||{};e&&t&&(s.style.height=`${e}px`,s.style.width=`${t}px`,(0,c.mb)(a,void 0,!!window.Module.canvas))}),l.jx.WINDOW),()=>{s&&window.Module&&window.Module.SDL2?.audioContext.close()})),[s,n,a])};var d=e=>{let{id:t}=e;return(0,i.jsx)(a.Z,{StyledComponent:s,id:t,useHook:u,children:(0,i.jsx)("canvas",{id:"canvas",onContextMenu:c.nK})})}},67398:function(e,t,n){var i=n(2832),a=n(45761),s=n(8082),o=n(74479),r=n(15455),l=n(7211),c=n(82296),u=n(50959),d=n(95063),f=n(63270);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:h,onDragOver:m,updatePositions:v}=e;const{url:w}=(0,r.z)(),{iconPositions:g,sortOrders:x,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:y,updateFolder:L,writeFile:k}=(0,o.o)(),C=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const i=(0,c.join)(d.Ll,e);await y(d.Ll),await k(i,t,!0)&&(n===s.v.UPDATE_URL&&w(p,i),L(d.Ll,e))}else n===s.v.UPDATE_URL&&w(p,e)}),[p,y,L,w,k]),{openTransferDialog:D}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{m?.(e),(0,f.nK)(e)},onDrop:e=>{if(v&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,a.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let o=[];if(i){try{o=JSON.parse(i)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!g[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(g[i]);return(0,c.basename)(i)})),(0,f.vi)(n,e.target,g,x,s,o,b)}(0,a.WG)(e,t||C,n,D,Boolean(p))}}}}}]);