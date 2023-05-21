"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7751],{38295:function(e,t,n){var r=n(11527),a=n(67398),i=n(15455),o=n(14304),l=n.n(o),s=n(50959);const c=l()((()=>n.e(4039).then(n.bind(n,34039))),{loadableGenerated:{webpack:()=>[34039]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:o,children:l}=e;const{processes:{[t]:{url:u=""}={}}}=(0,i.z)(),d=(0,s.useRef)(null),[f,p]=(0,s.useState)(!0),h=(0,s.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n(t,u,d,p,f),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(c,{}),(0,r.jsx)(o,{ref:d,style:h,...(0,a.Z)({id:t}),children:l})]})}},37751:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(11527),a=n(38295);var i=n(74965).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
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
`,o=n(92588),l=n(74479),s=n(15455),c=n(82296),u=n(50959),d=n(63270);var f=(e,t,n,r)=>{const{processes:{[e]:{libs:a=[]}={}}={}}=(0,s.z)(),[i,f]=(0,u.useState)(),{appendFileToTitle:p}=(0,o.Z)(e),{readFile:h}=(0,l.o)(),m=(0,u.useCallback)((async()=>{n.current?.classList.remove("drop"),await(i?.load({data:await h(t)})),p((0,c.basename)(t,(0,c.extname)(t)))}),[p,n,i,h,t]);(0,u.useEffect)((()=>{(0,d.mb)(a).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},f(window.RufflePlayer.newest().createPlayer()),t||n.current?.classList.add("drop"))}))}),[n,a,t]),(0,u.useEffect)((()=>(n.current&&i&&(n.current.append(i),r(!1)),()=>i?.remove())),[n,i,r]),(0,u.useEffect)((()=>{n.current&&i&&t&&m()}),[n,m,i,t])};var p=e=>{let{id:t}=e;return(0,r.jsx)(a.Z,{StyledComponent:i,id:t,useHook:f})}},67398:function(e,t,n){var r=n(2832),a=n(45761),i=n(8082),o=n(74479),l=n(15455),s=n(7211),c=n(82296),u=n(50959),d=n(95063),f=n(63270);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:h,onDragOver:m,updatePositions:b}=e;const{url:v}=(0,l.z)(),{iconPositions:w,sortOrders:y,setIconPositions:g}=(0,s.k)(),{mkdirRecursive:$,updateFolder:k,writeFile:x}=(0,o.o)(),L=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const r=(0,c.join)(d.Ll,e);await $(d.Ll),await x(r,t,!0)&&(n===i.v.UPDATE_URL&&v(p,r),k(d.Ll,e))}else n===i.v.UPDATE_URL&&v(p,e)}),[p,$,k,v,x]),{openTransferDialog:C}=(0,r.Z)();return{onDragLeave:h,onDragOver:e=>{m?.(e),(0,f.nK)(e)},onDrop:e=>{if(b&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,a.p4)(e);if(0===t.length&&""===r)return;const i={x:e.clientX,y:e.clientY};let o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[r]);return(0,c.basename)(r)})),(0,f.vi)(n,e.target,w,y,i,o,g)}(0,a.WG)(e,t||L,n,C,Boolean(p))}}}},92588:function(e,t,n){var r=n(15455),a=n(86870),i=n(50959),o=n(95063);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(o.CC),{title:l}=a.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)(((n,r)=>{const a=n?` - ${n}${r?` ${o.xy}`:""}`:"";t(e,`${l}${a}`)}),[e,l,t]),prependFileToTitle:(0,i.useCallback)(((n,r)=>{const a=n?`${r?`${o.xy} `:""}${n} - `:"";t(e,`${a}${l}`)}),[e,l,t])}}}}]);