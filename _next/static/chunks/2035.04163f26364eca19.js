"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2035],{24855:function(e,t,n){var r=n(11527),a=n(88781),i=n(12809),l=n(58967),o=n.n(l),s=n(50959);const c=o()((()=>n.e(9147).then(n.bind(n,89147))),{loadableGenerated:{webpack:()=>[89147]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:l,children:o}=e;const{processes:{[t]:{url:u=""}={}}}=(0,i.z)(),d=(0,s.useRef)(null),[f,p]=(0,s.useState)(!0),m=(0,s.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,u,d,p,f),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(c,{}),(0,r.jsx)(l,{ref:d,style:m,...(0,a.Z)({id:t}),children:o})]})}},12035:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(11527),a=n(24855);var i=n(34256).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
  height: 100%;
  width: 100%;

  &.drop {
    &::before {
      color: #ffad33;
      content: "Drop SWF/SPL file here";
      display: flex;
      font-size: 16px;
      font-weight: 600;
      height: 100%;
      left: 0;
      place-content: center;
      place-items: center;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  ruffle-player {
    height: 100%;
    width: 100%;
  }
`,l=n(54796),o=n(60966),s=n(12809),c=n(11157),u=n(50959),d=n(92543);var f=(e,t,n,r)=>{const{linkElement:a,processes:{[e]:{libs:i=[]}={}}={}}=(0,s.z)(),[f,p]=(0,u.useState)(),{appendFileToTitle:m}=(0,l.Z)(e),{readFile:h}=(0,o.o)(),b=(0,u.useCallback)((async()=>{n.current?.classList.remove("drop"),await(f?.load({data:await h(t)})),m((0,c.basename)(t,(0,c.extname)(t)))}),[m,n,f,h,t]);(0,u.useEffect)((()=>{(0,d.mb)(i).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},p(window.RufflePlayer.newest().createPlayer()),t||n.current?.classList.add("drop"))}))}),[n,i,t]),(0,u.useEffect)((()=>(n.current&&f&&(n.current.append(f),a(e,"peekElement",f),r(!1)),()=>f?.remove())),[n,e,a,f,r]),(0,u.useEffect)((()=>{n.current&&f&&t&&b()}),[n,b,f,t])};var p=e=>{let{id:t}=e;return(0,r.jsx)(a.Z,{StyledComponent:i,id:t,useHook:f})}},88781:function(e,t,n){var r=n(21967),a=n(51382),i=n(5095),l=n(60966),o=n(12809),s=n(53784),c=n(11157),u=n(50959),d=n(31590),f=n(92543);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:h,updatePositions:b}=e;const{url:v}=(0,o.z)(),{iconPositions:w,sortOrders:y,setIconPositions:g}=(0,s.k)(),{mkdirRecursive:k,updateFolder:$,writeFile:x}=(0,l.o)(),L=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const r=(0,c.join)(d.Ll,e);await k(d.Ll),await x(r,t,!0)&&(n===i.v.UPDATE_URL&&v(p,r),$(d.Ll,e))}else n===i.v.UPDATE_URL&&v(p,e)}),[p,k,$,v,x]),{openTransferDialog:C}=(0,r.Z)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(b&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,a.p4)(e);if(0===t.length&&""===r)return;const i={x:e.clientX,y:e.clientY};let l=[];if(r){try{l=JSON.parse(r)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[r]);return(0,c.basename)(r)})),(0,f.vi)(n,e.target,w,y,i,l,g)}(0,a.WG)(e,t||L,n,C,Boolean(p))}}}},54796:function(e,t,n){var r=n(12809),a=n(96855),i=n(50959),l=n(31590);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(l.CC),{title:o}=a.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)(((n,r)=>{const a=n?` - ${n}${r?` ${l.xy}`:""}`:"";t(e,`${o}${a}`)}),[e,o,t]),prependFileToTitle:(0,i.useCallback)(((n,r)=>{const a=n?`${r?`${l.xy} `:""}${n} - `:"";t(e,`${a}${o}`)}),[e,o,t])}}}}]);