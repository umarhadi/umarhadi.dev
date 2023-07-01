"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1494],{92963:function(e,t,n){var r=n(11527),a=n(13364),i=n(59062),l=n(92866),o=n.n(l),s=n(50959);const c=o()((()=>n.e(2609).then(n.bind(n,52609))),{loadableGenerated:{webpack:()=>[52609]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:l,children:o}=e;const{processes:{[t]:{url:u=""}={}}}=(0,i.z)(),d=(0,s.useRef)(null),[f,p]=(0,s.useState)(!0),m=(0,s.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,u,d,p,f),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(c,{}),(0,r.jsx)(l,{ref:d,style:m,...(0,a.Z)({id:t}),children:o})]})}},81494:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(11527),a=n(92963);var i=n(60396).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
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
`,l=n(93246),o=n(97147),s=n(59062),c=n(95654),u=n(50959),d=n(76022);var f=(e,t,n,r)=>{const{linkElement:a,processes:{[e]:{libs:i=[]}={}}={}}=(0,s.z)(),[f,p]=(0,u.useState)(),{appendFileToTitle:m}=(0,l.Z)(e),{readFile:h}=(0,o.o)(),b=(0,u.useCallback)((async()=>{n.current?.classList.remove("drop");try{await(f?.load({data:await h(t)}))}catch{}m((0,c.basename)(t,(0,c.extname)(t)))}),[m,n,f,h,t]);(0,u.useEffect)((()=>{(0,d.mb)(i).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},p(window.RufflePlayer.newest().createPlayer()),t||n.current?.classList.add("drop"))}))}),[n,i,t]),(0,u.useEffect)((()=>(n.current&&f&&(n.current.append(f),a(e,"peekElement",f),r(!1)),()=>f?.remove())),[n,e,a,f,r]),(0,u.useEffect)((()=>{n.current&&f&&t&&b()}),[n,b,f,t])};var p=e=>{let{id:t}=e;return(0,r.jsx)(a.Z,{StyledComponent:i,id:t,useHook:f})}},13364:function(e,t,n){var r=n(23862),a=n(38167),i=n(69229),l=n(97147),o=n(59062),s=n(31422),c=n(95654),u=n(50959),d=n(80437),f=n(76022);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:h,updatePositions:b}=e;const{url:y}=(0,o.z)(),{iconPositions:v,sortOrders:w,setIconPositions:g}=(0,s.k)(),{mkdirRecursive:k,updateFolder:$,writeFile:x}=(0,l.o)(),L=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const r=(0,c.join)(d.Ll,e);await k(d.Ll),await x(r,t,!0)&&(n===i.v.UPDATE_URL&&y(p,r),$(d.Ll,e))}else n===i.v.UPDATE_URL&&y(p,e)}),[p,k,$,y,x]),{openTransferDialog:C}=(0,r.Z)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(!d.my.has((0,f.RT)(n))){if(b&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,a.p4)(e);if(0===t.length&&""===r)return;const i={x:e.clientX,y:e.clientY};let l=[];if(r){try{l=JSON.parse(r)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[r]);return(0,c.basename)(r)})),(0,f.vi)(n,e.target,v,w,i,l,g)}(0,a.WG)(e,t||L,n,C,Boolean(p))}}}}},93246:function(e,t,n){var r=n(59062),a=n(5530),i=n(50959),l=n(80437);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(l.CC),{title:o}=a.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)(((n,r)=>{const a=n?` - ${n}${r?` ${l.xy}`:""}`:"";t(e,`${o}${a}`)}),[e,o,t]),prependFileToTitle:(0,i.useCallback)(((n,r,a)=>{const i=n?`${r?`${l.xy} `:""}${n}${a?" ":" - "}`:"";t(e,`${i}${o}`)}),[e,o,t])}}}}]);