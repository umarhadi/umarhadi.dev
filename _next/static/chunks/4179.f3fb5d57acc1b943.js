"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4179],{26014:function(e,n,t){var r=t(11527),i=t(83609),a=t(431),o=t(12901),s=t.n(o),d=t(50959);const l=s()((()=>t.e(6022).then(t.bind(t,46022))),{loadableGenerated:{webpack:()=>[46022]}});n.Z=e=>{let{id:n,useHook:t,StyledComponent:o,children:s}=e;const{processes:{[n]:{url:c=""}={}}}=(0,a.z)(),u=(0,d.useRef)(null),[f,m]=(0,d.useState)(!0),w=(0,d.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return t(n,c,u,m,f),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(l,{}),(0,r.jsx)(o,{ref:u,style:w,...(0,i.Z)({id:n}),children:s})]})}},94179:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(11527),i=t(26014);var a=t(86692).ZP.div.withConfig({componentId:"sc-6b668ba8-0"})`
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
`,o=t(431),s=t(50959),d=t(12876);const l={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var c=(e,n,t,r,i)=>{const{processes:{[e]:{closing:a=!1,libs:c=[]}={}}={}}=(0,o.z)();(0,s.useEffect)((()=>{(0,d.mb)(c).then((()=>{if(window.eruda&&t.current){const e=t.current.querySelector("div"),n=(0,d.E9)();e&&(window.eruda.init({...l,container:e}),window.eruda.remove("info"),window.eruda.remove("snippets"),n<395&&window.eruda.remove("resources"),n<321&&window.eruda.remove("sources"),window.eruda.show(),r(!1))}}))}),[t,c,r]),(0,s.useEffect)((()=>(window.eruda&&n&&!i&&!a&&window.eruda.show(n),()=>{a&&window.eruda?.destroy()})),[a,i,n])};var u=e=>{let{id:n}=e;return(0,r.jsx)(i.Z,{StyledComponent:a,id:n,useHook:c,children:(0,r.jsx)("div",{})})}},83609:function(e,n,t){var r=t(18213),i=t(5894),a=t(80968),o=t(56285),s=t(431),d=t(69455),l=t(87730),c=t(50959),u=t(90810),f=t(12876);n.Z=e=>{let{callback:n,directory:t=u.Ll,id:m,onDragLeave:w,onDragOver:p,updatePositions:v}=e;const{url:h}=(0,s.z)(),{iconPositions:b,sortOrders:y,setIconPositions:g}=(0,d.k)(),{mkdirRecursive:k,updateFolder:x,writeFile:L}=(0,o.o)(),D=(0,c.useCallback)((async(e,n,t)=>{if(m)if(n){const r=(0,l.join)(u.Ll,e);await k(u.Ll),await L(r,n,!0)&&(t===a.v.UPDATE_URL&&h(m,r),x(u.Ll,e))}else t===a.v.UPDATE_URL&&h(m,e)}),[m,k,x,h,L]),{openTransferDialog:E}=(0,r.Z)();return{onDragLeave:w,onDragOver:e=>{p?.(e),(0,f.nK)(e)},onDrop:e=>{if(!u.my.has((0,l.extname)(t))){if(v&&e.target instanceof HTMLElement){const{files:n,text:r}=(0,i.p4)(e);if(0===n.length&&""===r)return;const a={x:e.clientX,y:e.clientY};let o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(t)&&(0,l.basename)(e)===(0,l.relative)(t,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!b[`${t}/${e}`])return e;let n=0,r="";do{n+=1,r=`${t}/${(0,l.basename)(e,(0,l.extname)(e))} (${n})${(0,l.extname)(e)}`}while(b[r]);return(0,l.basename)(r)})),(0,f.vi)(t,e.target,b,y,a,o,g)}(0,i.WG)(e,n||D,t,E,Boolean(m))}}}}}}]);