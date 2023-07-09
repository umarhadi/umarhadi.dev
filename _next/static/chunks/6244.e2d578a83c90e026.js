"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6244],{66244:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(11527),o=n(50959);const s=(0,o.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}))),a=(0,o.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}))),i=(0,o.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}))),l=(0,o.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})})));const c="48px",u="32px";var d=n(94386).ZP.div.withConfig({componentId:"sc-3ecd8b5d-0"})`
  background-color: #222;
  display: flex;
  height: 100%;
  padding-bottom: ${u};
  padding-top: ${c};
  position: relative;

  svg {
    fill: #fff;
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${u} ${u};
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
    height: ${c};
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
      height: ${c};
      width: ${c};

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
`,m=n(51306),h=n(17904),f=n(8437),v=n(7372),p=n(61349),g=n(5738);const w={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var x=(e,t,n)=>{const[r,s]=(0,o.useState)(),{getScale:a,reset:i,zoomIn:l,zoomOut:c,zoomToPoint:u,zoomWithWheel:d}=r||{},{processes:{[e]:m}}=(0,v.z)(),{closing:x,componentWindow:b,url:T=""}=m||{},{prependFileToTitle:E}=(0,f.Z)(e),k=(0,o.useCallback)((e=>{const{detail:{scale:t=0,x:n=0,y:o=0}={}}=e||{};if(T&&t){const{minScale:e,step:s}=w,a=t<e+s;a&&(n||o)&&window.setTimeout((()=>r?.reset()),50),x||E(a?(0,g.basename)(T):`${(0,g.basename)(T)} (${Math.floor(100*t)}%)`)}}),[x,r,E,T]),z=(0,o.useCallback)((e=>d?.(e,{step:.3})),[d]);return(0,p.Z)(b,i),(0,o.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",k),n.addEventListener("wheel",z)),()=>{t?.removeEventListener("panzoomchange",k),n?.removeEventListener("wheel",z)})),[n,t,k,z]),(0,o.useEffect)((()=>(t&&!r&&s((0,h.Z)(t,w)),()=>r?.destroy())),[t,r]),{reset:i,scale:a?.(),zoomIn:l,zoomOut:c,zoomToPoint:u}},b=n(87373),T=n(46948),E=n(51661),k=n(34414),z=n(93203),y=n(70286),L=n(55872).Buffer;const{maxScale:$,minScale:j}=w;var F=e=>{let{id:t}=e;const{processes:{[t]:c}={},url:u}=(0,v.z)(),{componentWindow:h,closing:p=!1,url:w=""}=c||{},[F,C]=(0,o.useState)({}),[S,Z]=(0,o.useState)(!1),{prependFileToTitle:R}=(0,f.Z)(t),{readFile:q,readdir:P}=(0,T.o)(),M=(0,o.useRef)(null),B=(0,o.useRef)(null),O=(0,o.useRef)(null),{reset:H,scale:I,zoomIn:A,zoomOut:D,zoomToPoint:U}=x(t,B.current,O.current),{fullscreen:W,toggleFullscreen:_}=(0,m.Z)(M.current),K=(0,o.useCallback)((async()=>{let e=await q(w);const t=(0,y.RT)(w);if([".ani",".cur"].includes(t))e=await(async e=>{const t=await(0,y.iQ)(),{parseAni:r}=await n.e(4412).then(n.bind(n,4412));let o=[];try{({images:o}=r(e))}catch{return e}return await Promise.all(o.map((e=>new Promise((n=>{const r=new Image,o=(0,y.YS)(L.from(e));r.addEventListener("load",(()=>{t.addFrame(r),(0,y.EK)(o),n()}),z.K7),r.src=o}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e(L.from(t)))))).render()}))})(e);else if(".jxl"===t)e=(0,y.fv)(await(0,y.dU)(e));else if(".qoi"===t){const{decodeQoi:t}=await n.e(8001).then(n.bind(n,38001));e=t(e)}else z.M0.has(t)&&(e=(await n.e(8759).then(n.t.bind(n,28759,23))).bufferToURI(e).replace("data:image/png;base64,",""));C((t=>{const[n]=Object.keys(t);if(n){if(n===w)return t;H?.()}return{[w]:(0,y.wB)(w,e)}})),R((0,g.basename)(w))}),[R,q,H,w]),N=(0,o.useCallback)((async e=>{let{key:n}=e;switch(n){case"ArrowRight":case"ArrowLeft":{const e=await P((0,g.dirname)(w)),r=e.indexOf((0,g.basename)(w)),o=(n,r)=>{if(-1===n)return;const s=n+(r?1:-1);if(-1===s||s===e.length)return;const a=e[s];z.lM.has((0,y.RT)(a))?u(t,(0,g.join)((0,g.dirname)(w),a)):o(s,r)};o(r,"ArrowRight"===n);break}}}),[t,P,u,w]);return(0,o.useEffect)((()=>{!w||F[w]||p||K()}),[p,K,F,w]),(0,o.useEffect)((()=>(h?.addEventListener("keydown",N),()=>h?.removeEventListener("keydown",N))),[h,N]),(0,r.jsxs)(d,{ref:M,$showImage:Boolean(F[w]&&!S),onContextMenu:y.nK,...(0,b.Z)({id:t}),children:[(0,r.jsxs)("nav",{className:"top",children:[(0,r.jsx)(k.Z,{disabled:!w||I===$||S,onClick:A,...(0,y.PS)("Zoom in"),children:(0,r.jsx)(i,{})}),(0,r.jsx)(k.Z,{disabled:!w||I===j||S,onClick:D,...(0,y.PS)("Zoom out"),children:(0,r.jsx)(l,{})})]}),(0,r.jsxs)("figure",{ref:O,...(0,E.Z)((e=>{I===j?U?.(2*j,e,{animate:!0}):H?.()})),children:[(0,r.jsx)("img",{ref:B,alt:(0,g.basename)(w,(0,g.extname)(w)),decoding:"async",loading:"eager",onError:()=>Z(!0),onLoad:()=>Z(!1),src:F[w],...z.h7}),S&&(0,r.jsxs)("div",{children:[(0,g.basename)(w),(0,r.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,r.jsx)("nav",{className:"bottom",children:(0,r.jsx)(k.Z,{disabled:!w,onClick:()=>_("show"),...(0,y.PS)("Full-screen"),children:W?(0,r.jsx)(a,{}):(0,r.jsx)(s,{})})})]})}},51306:function(e,t,n){var r=n(50959);t.Z=e=>{const[t,n]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=()=>n((()=>{const{fullscreenElement:e,mozFullScreenElement:t,webkitFullscreenElement:n}=document;return Boolean(e||t||n)})());return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)}),[]),{fullscreen:t,toggleFullscreen:async n=>{if(t){const e=document;try{e.exitFullscreen?await e.exitFullscreen():e.mozCancelFullScreen?await e.mozCancelFullScreen():e.webkitExitFullscreen&&await e.webkitExitFullscreen()}catch{}}else{const t=e||document.documentElement,r={navigationUI:n||"hide"};try{t.requestFullscreen?await t.requestFullscreen(r):t.mozRequestFullScreen?await t.mozRequestFullScreen(r):t.webkitRequestFullscreen&&await t.webkitRequestFullscreen(r)}catch{}}}}}},87373:function(e,t,n){var r=n(54660),o=n(39397),s=n(22449),a=n(46948),i=n(7372),l=n(87966),c=n(5738),u=n(50959),d=n(93203),m=n(70286);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:h,onDragLeave:f,onDragOver:v,updatePositions:p}=e;const{url:g}=(0,i.z)(),{iconPositions:w,sortOrders:x,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:T,updateFolder:E,writeFile:k}=(0,a.o)(),z=(0,u.useCallback)((async(e,t,n)=>{if(h)if(t){const r=(0,c.join)(d.Ll,e);await T(d.Ll),await k(r,t,!0)&&(n===s.v.UPDATE_URL&&g(h,r),E(d.Ll,e))}else n===s.v.UPDATE_URL&&g(h,e)}),[h,T,E,g,k]),{openTransferDialog:y}=(0,r.Z)();return{onDragLeave:f,onDragOver:e=>{v?.(e),(0,m.nK)(e)},onDrop:e=>{if(!d.my.has((0,m.RT)(n))){if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,o.p4)(e);if(0===t.length&&""===r)return;const s={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[r]);return(0,c.basename)(r)})),(0,m.vi)(n,e.target,w,x,s,a,b)}(0,o.WG)(e,t||z,n,y,Boolean(h))}}}}},8437:function(e,t,n){var r=n(7372),o=n(50106),s=n(50959),a=n(93203);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(a.CC),{title:i}=o.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,r)=>{const o=n?` - ${n}${r?` ${a.xy}`:""}`:"";t(e,`${i}${o}`)}),[e,i,t]),prependFileToTitle:(0,s.useCallback)(((n,r,o)=>{const s=n?`${r?`${a.xy} `:""}${n}${o?" ":" - "}`:"";t(e,`${s}${i}`)}),[e,i,t])}}},51661:function(e,t,n){var r=n(50959),o=n(93203);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),s=(0,r.useRef)(0),a=(0,r.useCallback)((r=>{const a=()=>{r.stopPropagation(),e(r)},i=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},l=()=>{s.current>=5&&i(),void 0===n.current?(r.target.removeEventListener("pointermove",l),s.current=0):s.current+=1};t?a():void 0===n.current?(n.current=window.setTimeout(i,o.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",l,{passive:!0})):(i(),a())}),[e,t]);return{onClick:a}}},61349:function(e,t,n){var r=n(50959);t.Z=(e,t)=>{const[n,o]=(0,r.useState)();(0,r.useEffect)((()=>{t&&o(new ResizeObserver(t))}),[t]),(0,r.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);