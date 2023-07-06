"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7528],{70023:function(e,n,t){var r=t(11527),i=t(9297),a=t(32652),o=t(30952),s=t.n(o),d=t(50959);const l=s()((()=>t.e(4158).then(t.bind(t,24158))),{loadableGenerated:{webpack:()=>[24158]}}),c=e=>{let{id:n,useHook:t,StyledComponent:o,children:s}=e;const{processes:{[n]:{url:c=""}={}}}=(0,a.z)(),u=(0,d.useRef)(null),[f,m]=(0,d.useState)(!0),w=(0,d.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return t({containerRef:u,id:n,loading:f,setLoading:m,url:c}),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(l,{}),(0,r.jsx)(o,{ref:u,style:w,...(0,i.Z)({id:n}),children:s})]})};n.Z=(0,d.memo)(c)},67528:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(11527),i=t(70023);var a=t(6444).ZP.div.withConfig({componentId:"sc-6b668ba8-0"})`
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
`,o=t(32652),s=t(50959),d=t(46429);const l={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var c=e=>{let{containerRef:n,id:t,loading:r,setLoading:i,url:a}=e;const{processes:{[t]:{closing:c=!1,libs:u=[]}={}}={}}=(0,o.z)();(0,s.useEffect)((()=>{(0,d.mb)(u).then((()=>{if(window.eruda&&n.current){const e=n.current.querySelector("div"),t=(0,d.E9)();e&&(window.eruda.init({...l,container:e}),window.eruda.remove("info"),window.eruda.remove("snippets"),t<395&&window.eruda.remove("resources"),t<321&&window.eruda.remove("sources"),window.eruda.show(),i(!1))}}))}),[n,u,i]),(0,s.useEffect)((()=>(window.eruda&&a&&!r&&!c&&window.eruda.show(a),()=>{c&&window.eruda?.destroy()})),[c,r,a])};var u=e=>{let{id:n}=e;return(0,r.jsx)(i.Z,{StyledComponent:a,id:n,useHook:c,children:(0,r.jsx)("div",{})})}},9297:function(e,n,t){var r=t(32026),i=t(62358),a=t(34917),o=t(31266),s=t(32652),d=t(64037),l=t(735),c=t(50959),u=t(71059),f=t(46429);n.Z=e=>{let{callback:n,directory:t=u.Ll,id:m,onDragLeave:w,onDragOver:p,updatePositions:v}=e;const{url:h}=(0,s.z)(),{iconPositions:b,sortOrders:y,setIconPositions:g}=(0,d.k)(),{mkdirRecursive:k,updateFolder:L,writeFile:x}=(0,o.o)(),D=(0,c.useCallback)((async(e,n,t)=>{if(m)if(n){const r=(0,l.join)(u.Ll,e);await k(u.Ll),await x(r,n,!0)&&(t===a.v.UPDATE_URL&&h(m,r),L(u.Ll,e))}else t===a.v.UPDATE_URL&&h(m,e)}),[m,k,L,h,x]),{openTransferDialog:E}=(0,r.Z)();return{onDragLeave:w,onDragOver:e=>{p?.(e),(0,f.nK)(e)},onDrop:e=>{if(!u.my.has((0,f.RT)(t))){if(v&&e.target instanceof HTMLElement){const{files:n,text:r}=(0,i.p4)(e);if(0===n.length&&""===r)return;const a={x:e.clientX,y:e.clientY};let o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(t)&&(0,l.basename)(e)===(0,l.relative)(t,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!b[`${t}/${e}`])return e;let n=0,r="";do{n+=1,r=`${t}/${(0,l.basename)(e,(0,l.extname)(e))} (${n})${(0,l.extname)(e)}`}while(b[r]);return(0,l.basename)(r)})),(0,f.vi)(t,e.target,b,y,a,o,g)}(0,i.WG)(e,n||D,t,E,Boolean(m))}}}}}}]);