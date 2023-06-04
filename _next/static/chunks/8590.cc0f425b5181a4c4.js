"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8590],{49908:function(e,n,r){var t=r(11527),i=r(99709),a=r(97057),o=r(33320),s=r.n(o),d=r(50959);const l=s()((()=>r.e(2399).then(r.bind(r,12399))),{loadableGenerated:{webpack:()=>[12399]}});n.Z=e=>{let{id:n,useHook:r,StyledComponent:o,children:s}=e;const{processes:{[n]:{url:c=""}={}}}=(0,a.z)(),u=(0,d.useRef)(null),[f,w]=(0,d.useState)(!0),m=(0,d.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return r(n,c,u,w,f),(0,t.jsxs)(t.Fragment,{children:[f&&(0,t.jsx)(l,{}),(0,t.jsx)(o,{ref:u,style:m,...(0,i.Z)({id:n}),children:s})]})}},58590:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});var t=r(11527),i=r(49908);var a=r(79416).ZP.div.withConfig({componentId:"sc-6b668ba8-0"})`
  .eruda-container {
    position: relative !important;
    z-index: 1 !important;

    .eruda-dev-tools {
      height: 100% !important;
      opacity: 100% !important;

      .eruda-nav-bar-container {
        .eruda-nav-bar {
          overflow: hidden;
        }
      }
    }

    .eruda-entry-btn {
      display: none;
    }
  }
`,o=r(97057),s=r(50959),d=r(46428);const l={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var c=(e,n,r,t,i)=>{const{processes:{[e]:{closing:a=!1,libs:c=[]}={}}={}}=(0,o.z)();(0,s.useEffect)((()=>{(0,d.mb)(c).then((()=>{if(window.eruda&&r.current){const e=r.current.querySelector("div"),n=(0,d.E9)();e&&(window.eruda.init({...l,container:e}),window.eruda.remove("info"),window.eruda.remove("snippets"),n<395&&window.eruda.remove("resources"),n<321&&window.eruda.remove("sources"),window.eruda.show(),t(!1))}}))}),[r,c,t]),(0,s.useEffect)((()=>(window.eruda&&n&&!i&&!a&&window.eruda.show(n),()=>{a&&window.eruda?.destroy()})),[a,i,n])};var u=e=>{let{id:n}=e;return(0,t.jsx)(i.Z,{StyledComponent:a,id:n,useHook:c,children:(0,t.jsx)("div",{})})}},99709:function(e,n,r){var t=r(55209),i=r(89826),a=r(93770),o=r(14762),s=r(97057),d=r(6733),l=r(11523),c=r(50959),u=r(44558),f=r(46428);n.Z=e=>{let{callback:n,directory:r=u.Ll,id:w,onDragLeave:m,onDragOver:p,updatePositions:v}=e;const{url:h}=(0,s.z)(),{iconPositions:b,sortOrders:y,setIconPositions:g}=(0,d.k)(),{mkdirRecursive:k,updateFolder:x,writeFile:L}=(0,o.o)(),D=(0,c.useCallback)((async(e,n,r)=>{if(w)if(n){const t=(0,l.join)(u.Ll,e);await k(u.Ll),await L(t,n,!0)&&(r===a.v.UPDATE_URL&&h(w,t),x(u.Ll,e))}else r===a.v.UPDATE_URL&&h(w,e)}),[w,k,x,h,L]),{openTransferDialog:E}=(0,t.Z)();return{onDragLeave:m,onDragOver:e=>{p?.(e),(0,f.nK)(e)},onDrop:e=>{if(v&&e.target instanceof HTMLElement){const{files:n,text:t}=(0,i.p4)(e);if(0===n.length&&""===t)return;const a={x:e.clientX,y:e.clientY};let o=[];if(t){try{o=JSON.parse(t)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(r)&&(0,l.basename)(e)===(0,l.relative)(r,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!b[`${r}/${e}`])return e;let n=0,t="";do{n+=1,t=`${r}/${(0,l.basename)(e,(0,l.extname)(e))} (${n})${(0,l.extname)(e)}`}while(b[t]);return(0,l.basename)(t)})),(0,f.vi)(r,e.target,b,y,a,o,g)}(0,i.WG)(e,n||D,r,E,Boolean(w))}}}}}]);