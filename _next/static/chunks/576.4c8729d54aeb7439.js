"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[576],{26014:function(e,t,n){var a=n(11527),r=n(83609),i=n(431),l=n(12901),o=n.n(l),s=n(50959);const c=o()((()=>n.e(6022).then(n.bind(n,46022))),{loadableGenerated:{webpack:()=>[46022]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:l,children:o}=e;const{processes:{[t]:{url:u=""}={}}}=(0,i.z)(),d=(0,s.useRef)(null),[f,p]=(0,s.useState)(!0),m=(0,s.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,u,d,p,f),(0,a.jsxs)(a.Fragment,{children:[f&&(0,a.jsx)(c,{}),(0,a.jsx)(l,{ref:d,style:m,...(0,r.Z)({id:t}),children:o})]})}},20576:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(11527),r=n(26014);var i=n(86692).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
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
`,l=n(18766),o=n(56285),s=n(431),c=n(87730),u=n(50959),d=n(12876);var f=(e,t,n,a)=>{const{linkElement:r,processes:{[e]:{libs:i=[]}={}}={}}=(0,s.z)(),[f,p]=(0,u.useState)(),{appendFileToTitle:m}=(0,l.Z)(e),{readFile:h}=(0,o.o)(),b=(0,u.useCallback)((async()=>{n.current?.classList.remove("drop");try{await(f?.load({data:await h(t)}))}catch{}m((0,c.basename)(t,(0,c.extname)(t)))}),[m,n,f,h,t]);(0,u.useEffect)((()=>{(0,d.mb)(i).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},p(window.RufflePlayer.newest().createPlayer()),t||n.current?.classList.add("drop"))}))}),[n,i,t]),(0,u.useEffect)((()=>(n.current&&f&&(n.current.append(f),r(e,"peekElement",f),a(!1)),()=>f?.remove())),[n,e,r,f,a]),(0,u.useEffect)((()=>{n.current&&f&&t&&b()}),[n,b,f,t])};var p=e=>{let{id:t}=e;return(0,a.jsx)(r.Z,{StyledComponent:i,id:t,useHook:f})}},83609:function(e,t,n){var a=n(18213),r=n(5894),i=n(80968),l=n(56285),o=n(431),s=n(69455),c=n(87730),u=n(50959),d=n(90810),f=n(12876);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:h,updatePositions:b}=e;const{url:y}=(0,o.z)(),{iconPositions:v,sortOrders:w,setIconPositions:g}=(0,s.k)(),{mkdirRecursive:k,updateFolder:$,writeFile:x}=(0,l.o)(),L=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const a=(0,c.join)(d.Ll,e);await k(d.Ll),await x(a,t,!0)&&(n===i.v.UPDATE_URL&&y(p,a),$(d.Ll,e))}else n===i.v.UPDATE_URL&&y(p,e)}),[p,k,$,y,x]),{openTransferDialog:C}=(0,a.Z)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(!d.my.has((0,c.extname)(n))){if(b&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,r.p4)(e);if(0===t.length&&""===a)return;const i={x:e.clientX,y:e.clientY};let l=[];if(a){try{l=JSON.parse(a)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[a]);return(0,c.basename)(a)})),(0,f.vi)(n,e.target,v,w,i,l,g)}(0,r.WG)(e,t||L,n,C,Boolean(p))}}}}},18766:function(e,t,n){var a=n(431),r=n(87121),i=n(50959),l=n(90810);t.Z=e=>{const{title:t}=(0,a.z)(),[n]=e.split(l.CC),{title:o}=r.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)(((n,a)=>{const r=n?` - ${n}${a?` ${l.xy}`:""}`:"";t(e,`${o}${r}`)}),[e,o,t]),prependFileToTitle:(0,i.useCallback)(((n,a,r)=>{const i=n?`${a?`${l.xy} `:""}${n}${r?" ":" - "}`:"";t(e,`${i}${o}`)}),[e,o,t])}}}}]);