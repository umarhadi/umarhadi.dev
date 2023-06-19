"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7296],{87296:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(11527);const o=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}),s=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}),a=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}),i=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})});const l="48px",c="32px";var u=n(34256).ZP.div.withConfig({componentId:"sc-3ecd8b5d-0"})`
  background-color: #222;
  display: flex;
  height: 100%;
  padding-bottom: ${c};
  padding-top: ${l};
  position: relative;

  svg {
    fill: #fff;
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${c} ${c};
    overflow: hidden;
    place-content: center;
    place-items: center;
    width: 100%;

    div {
      color: rgb(167, 167, 167);
      font-size: 13px;
      padding: 0 38px;
      text-align: center;
    }

    img {
      display: ${e=>{let{$showImage:t}=e;return t?"block":"none"}};
      max-height: 100%;
      max-width: 100%;
    }
  }

  nav {
    display: flex;
    height: ${l};
    place-content: center;
    place-items: center;
    position: absolute;

    &.top {
      top: 0;
      width: 100%;

      svg {
        height: 16px;
      }
    }

    &.bottom {
      bottom: 0;
      right: 0;

      svg {
        height: 20px;
        margin-top: 2px;
      }
    }

    button {
      height: ${l};
      width: ${l};

      &:disabled {
        pointer-events: none;

        svg {
          fill: rgb(125, 125, 125);
        }
      }

      &:hover {
        background-color: rgba(75, 75, 75, 50%);
      }

      &:active {
        background-color: rgba(100, 100, 100, 50%);
      }
    }
  }
`,d=n(78371),m=n(17904),h=n(18766),f=n(431),v=n(19345),p=n(87730),g=n(50959);const w={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var x=(e,t,n)=>{const[r,o]=(0,g.useState)(),{getScale:s,reset:a,zoomIn:i,zoomOut:l,zoomToPoint:c,zoomWithWheel:u}=r||{},{processes:{[e]:d}}=(0,f.z)(),{closing:x,componentWindow:b,url:T=""}=d||{},{prependFileToTitle:E}=(0,h.Z)(e),k=(0,g.useCallback)((e=>{const{detail:{scale:t=0,x:n=0,y:o=0}={}}=e||{};if(T&&t){const{minScale:e,step:s}=w,a=t<e+s;a&&(n||o)&&window.setTimeout((()=>r?.reset()),50),x||E(a?(0,p.basename)(T):`${(0,p.basename)(T)} (${Math.floor(100*t)}%)`)}}),[x,r,E,T]),z=(0,g.useCallback)((e=>u?.(e,{step:.3})),[u]);return(0,v.Z)(b,a),(0,g.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",k),n.addEventListener("wheel",z)),()=>{t?.removeEventListener("panzoomchange",k),n?.removeEventListener("wheel",z)})),[n,t,k,z]),(0,g.useEffect)((()=>(t&&!r&&o((0,m.Z)(t,w)),()=>r?.destroy())),[t,r]),{reset:a,scale:s?.(),zoomIn:i,zoomOut:l,zoomToPoint:c}},b=n(83609),T=n(56285),E=n(75787),k=n(24370),z=n(90810),L=n(12876),y=n(55872).Buffer;const{maxScale:$,minScale:j}=w;var F=e=>{let{id:t}=e;const{processes:{[t]:l}={},url:c}=(0,f.z)(),{componentWindow:m,closing:v=!1,url:w=""}=l||{},[F,C]=(0,g.useState)({}),[S,Z]=(0,g.useState)(!1),{prependFileToTitle:q}=(0,h.Z)(t),{readFile:P,readdir:R}=(0,T.o)(),M=(0,g.useRef)(null),B=(0,g.useRef)(null),O=(0,g.useRef)(null),{reset:H,scale:I,zoomIn:A,zoomOut:D,zoomToPoint:U}=x(t,B.current,O.current),{fullscreen:W,toggleFullscreen:_}=(0,d.Z)(M.current),K=(0,g.useCallback)((async()=>{let e=await P(w);const t=(0,L.RT)(w);if([".ani",".cur"].includes(t))e=await(async e=>{const t=await(0,L.iQ)(),{parseAni:r}=await n.e(4412).then(n.bind(n,4412));let o=[];try{({images:o}=r(e))}catch{return e}return await Promise.all(o.map((e=>new Promise((n=>{const r=new Image,o=(0,L.YS)(y.from(e));r.addEventListener("load",(()=>{t.addFrame(r),(0,L.EK)(o),n()}),z.K7),r.src=o}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e(y.from(t)))))).render()}))})(e);else if(".jxl"===t)e=(0,L.fv)(await(0,L.dU)(e));else if(".qoi"===t){const{decodeQoi:t}=await n.e(4551).then(n.bind(n,54551));e=t(e)}else z.M0.has(t)&&(e=(await n.e(8759).then(n.t.bind(n,28759,23))).bufferToURI(e).replace("data:image/png;base64,",""));C((t=>{const[n]=Object.keys(t);if(n){if(n===w)return t;H?.()}return{[w]:(0,L.wB)(w,e)}})),q((0,p.basename)(w))}),[q,P,H,w]),N=(0,g.useCallback)((async e=>{let{key:n}=e;switch(n){case"ArrowRight":case"ArrowLeft":{const e=await R((0,p.dirname)(w)),r=e.indexOf((0,p.basename)(w)),o=(n,r)=>{if(-1===n)return;const s=n+(r?1:-1);if(-1===s||s===e.length)return;const a=e[s];z.lM.has((0,p.extname)(a).toLowerCase())?c(t,(0,p.join)((0,p.dirname)(w),a)):o(s,r)};o(r,"ArrowRight"===n);break}}}),[t,R,c,w]);return(0,g.useEffect)((()=>{!w||F[w]||v||K()}),[v,K,F,w]),(0,g.useEffect)((()=>(m?.addEventListener("keydown",N),()=>m?.removeEventListener("keydown",N))),[m,N]),(0,r.jsxs)(u,{ref:M,$showImage:Boolean(F[w]&&!S),onContextMenu:L.nK,...(0,b.Z)({id:t}),children:[(0,r.jsxs)("nav",{className:"top",children:[(0,r.jsx)(k.Z,{disabled:!w||I===$||S,onClick:A,...(0,L.PS)("Zoom in"),children:(0,r.jsx)(a,{})}),(0,r.jsx)(k.Z,{disabled:!w||I===j||S,onClick:D,...(0,L.PS)("Zoom out"),children:(0,r.jsx)(i,{})})]}),(0,r.jsxs)("figure",{ref:O,...(0,E.Z)((e=>{I===j?U?.(2*j,e,{animate:!0}):H?.()})),children:[(0,r.jsx)("img",{ref:B,alt:(0,p.basename)(w,(0,p.extname)(w)),decoding:"async",loading:"eager",onError:()=>Z(!0),onLoad:()=>Z(!1),src:F[w],...z.h7}),S&&(0,r.jsxs)("div",{children:[(0,p.basename)(w),(0,r.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,r.jsx)("nav",{className:"bottom",children:(0,r.jsx)(k.Z,{disabled:!w,onClick:()=>_("show"),...(0,L.PS)("Full-screen"),children:W?(0,r.jsx)(s,{}):(0,r.jsx)(o,{})})})]})}},78371:function(e,t,n){var r=n(50959);t.Z=e=>{const[t,n]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=()=>n((()=>{const{fullscreenElement:e,mozFullScreenElement:t,webkitFullscreenElement:n}=document;return Boolean(e||t||n)})());return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)}),[]),{fullscreen:t,toggleFullscreen:async n=>{if(t){const e=document;try{e.exitFullscreen?await e.exitFullscreen():e.mozCancelFullScreen?await e.mozCancelFullScreen():e.webkitExitFullscreen&&await e.webkitExitFullscreen()}catch{}}else{const t=e||document.documentElement,r={navigationUI:n||"hide"};try{t.requestFullscreen?await t.requestFullscreen(r):t.mozRequestFullScreen?await t.mozRequestFullScreen(r):t.webkitRequestFullscreen&&await t.webkitRequestFullscreen(r)}catch{}}}}}},83609:function(e,t,n){var r=n(18213),o=n(5894),s=n(80968),a=n(56285),i=n(431),l=n(69455),c=n(87730),u=n(50959),d=n(90810),m=n(12876);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:h,onDragLeave:f,onDragOver:v,updatePositions:p}=e;const{url:g}=(0,i.z)(),{iconPositions:w,sortOrders:x,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:T,updateFolder:E,writeFile:k}=(0,a.o)(),z=(0,u.useCallback)((async(e,t,n)=>{if(h)if(t){const r=(0,c.join)(d.Ll,e);await T(d.Ll),await k(r,t,!0)&&(n===s.v.UPDATE_URL&&g(h,r),E(d.Ll,e))}else n===s.v.UPDATE_URL&&g(h,e)}),[h,T,E,g,k]),{openTransferDialog:L}=(0,r.Z)();return{onDragLeave:f,onDragOver:e=>{v?.(e),(0,m.nK)(e)},onDrop:e=>{if(!d.my.has((0,c.extname)(n))){if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,o.p4)(e);if(0===t.length&&""===r)return;const s={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[r]);return(0,c.basename)(r)})),(0,m.vi)(n,e.target,w,x,s,a,b)}(0,o.WG)(e,t||z,n,L,Boolean(h))}}}}},18766:function(e,t,n){var r=n(431),o=n(87121),s=n(50959),a=n(90810);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(a.CC),{title:i}=o.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,r)=>{const o=n?` - ${n}${r?` ${a.xy}`:""}`:"";t(e,`${i}${o}`)}),[e,i,t]),prependFileToTitle:(0,s.useCallback)(((n,r)=>{const o=n?`${r?`${a.xy} `:""}${n} - `:"";t(e,`${o}${i}`)}),[e,i,t])}}},75787:function(e,t,n){var r=n(50959),o=n(90810);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),s=(0,r.useRef)(0),a=(0,r.useCallback)((r=>{const a=()=>{r.stopPropagation(),e(r)},i=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},l=()=>{s.current>=5&&i(),void 0===n.current?(r.target.removeEventListener("pointermove",l),s.current=0):s.current+=1};t?a():void 0===n.current?(n.current=window.setTimeout(i,o.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",l,{passive:!0})):(i(),a())}),[e,t]);return{onClick:a}}},19345:function(e,t,n){var r=n(50959);t.Z=(e,t)=>{const[n,o]=(0,r.useState)();(0,r.useEffect)((()=>{t&&o(new ResizeObserver(t))}),[t]),(0,r.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);