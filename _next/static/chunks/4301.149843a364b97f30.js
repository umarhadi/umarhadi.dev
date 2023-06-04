"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4301],{44301:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(11527);const o=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}),s=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}),a=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}),i=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})});const l="48px",c="32px";var u=n(79416).ZP.div.withConfig({componentId:"sc-3ecd8b5d-0"})`
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
`,d=n(64482),m=n(17904),h=n(82034),f=n(97057),v=n(10019),p=n(11523),g=n(50959);const w={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var x=(e,t,n)=>{const[r,o]=(0,g.useState)(),{getScale:s,reset:a,zoomIn:i,zoomOut:l,zoomToPoint:c,zoomWithWheel:u}=r||{},{processes:{[e]:d}}=(0,f.z)(),{closing:x,componentWindow:b,url:T=""}=d||{},{prependFileToTitle:z}=(0,h.Z)(e),E=(0,g.useCallback)((e=>{const{detail:{scale:t=0,x:n=0,y:o=0}={}}=e||{};if(T&&t){const{minScale:e,step:s}=w,a=t<e+s;a&&(n||o)&&window.setTimeout((()=>r?.reset()),50),x||z(a?(0,p.basename)(T):`${(0,p.basename)(T)} (${Math.floor(100*t)}%)`)}}),[x,r,z,T]),k=(0,g.useCallback)((e=>u?.(e,{step:.3})),[u]);return(0,v.Z)(b,a),(0,g.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",E),n.addEventListener("wheel",k)),()=>{t?.removeEventListener("panzoomchange",E),n?.removeEventListener("wheel",k)})),[n,t,E,k]),(0,g.useEffect)((()=>(t&&!r&&o((0,m.Z)(t,w)),()=>r?.destroy())),[t,r]),{reset:a,scale:s?.(),zoomIn:i,zoomOut:l,zoomToPoint:c}},b=n(99709),T=n(14762),z=n(68845),E=n(7020),k=n(44558),L=n(46428),$=n(55872).Buffer;const{maxScale:F,minScale:j}=w;var y=e=>{let{id:t}=e;const{processes:{[t]:l}={}}=(0,f.z)(),{closing:c=!1,url:m=""}=l||{},[v,w]=(0,g.useState)({}),[y,S]=(0,g.useState)(!1),{prependFileToTitle:C}=(0,h.Z)(t),{readFile:Z}=(0,T.o)(),q=(0,g.useRef)(null),P=(0,g.useRef)(null),R=(0,g.useRef)(null),{reset:M,scale:B,zoomIn:H,zoomOut:I,zoomToPoint:O}=x(t,P.current,R.current),{fullscreen:D,toggleFullscreen:U}=(0,d.Z)(q.current),_=(0,g.useCallback)((async()=>{let e=await Z(m);const t=(0,L.RT)(m);if([".ani",".cur"].includes(t))e=await(async e=>{const t=await(0,L.iQ)(),{parseAni:r}=await n.e(4412).then(n.bind(n,4412));let o=[];try{({images:o}=r(e))}catch{return e}return await Promise.all(o.map((e=>new Promise((n=>{const r=new Image,o=(0,L.YS)($.from(e));r.addEventListener("load",(()=>{t.addFrame(r),(0,L.EK)(o),n()}),k.K7),r.src=o}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e($.from(t)))))).render()}))})(e);else if(".jxl"===t)e=(0,L.fv)(await(0,L.dU)(e));else if(".qoi"===t){const{decodeQoi:t}=await n.e(9878).then(n.bind(n,29878));e=t(e)}else k.M0.has(t)&&(e=(await Promise.all([n.e(6230),n.e(8759)]).then(n.t.bind(n,8759,23))).bufferToURI(e).replace("data:image/png;base64,",""));w((t=>{const[n]=Object.keys(t);if(n){if(n===m)return t;M?.()}return{[m]:(0,L.wB)(m,e)}})),C((0,p.basename)(m))}),[C,Z,M,m]);return(0,g.useEffect)((()=>{!m||v[m]||c||_()}),[c,_,v,m]),(0,r.jsxs)(u,{ref:q,$showImage:Boolean(v[m]&&!y),onContextMenu:L.nK,...(0,b.Z)({id:t}),children:[(0,r.jsxs)("nav",{className:"top",children:[(0,r.jsx)(E.Z,{disabled:!m||B===F||y,onClick:H,...(0,L.PS)("Zoom in"),children:(0,r.jsx)(a,{})}),(0,r.jsx)(E.Z,{disabled:!m||B===j||y,onClick:I,...(0,L.PS)("Zoom out"),children:(0,r.jsx)(i,{})})]}),(0,r.jsxs)("figure",{ref:R,...(0,z.Z)((e=>{B===j?O?.(2*j,e,{animate:!0}):M?.()})),children:[(0,r.jsx)("img",{ref:P,alt:(0,p.basename)(m,(0,p.extname)(m)),decoding:"async",loading:"eager",onError:()=>S(!0),onLoad:()=>S(!1),src:v[m],...k.h7}),y&&(0,r.jsxs)("div",{children:[(0,p.basename)(m),(0,r.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,r.jsx)("nav",{className:"bottom",children:(0,r.jsx)(E.Z,{disabled:!m,onClick:()=>U("show"),...(0,L.PS)("Full-screen"),children:D?(0,r.jsx)(s,{}):(0,r.jsx)(o,{})})})]})}},64482:function(e,t,n){var r=n(50959);t.Z=e=>{const[t,n]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=()=>n((()=>{const{fullscreenElement:e,mozFullScreenElement:t,webkitFullscreenElement:n}=document;return Boolean(e||t||n)})());return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)}),[]),{fullscreen:t,toggleFullscreen:async n=>{if(t){const e=document;try{e.exitFullscreen?await e.exitFullscreen():e.mozCancelFullScreen?await e.mozCancelFullScreen():e.webkitExitFullscreen&&await e.webkitExitFullscreen()}catch{}}else{const t=e||document.documentElement,r={navigationUI:n||"hide"};try{t.requestFullscreen?await t.requestFullscreen(r):t.mozRequestFullScreen?await t.mozRequestFullScreen(r):t.webkitRequestFullscreen&&await t.webkitRequestFullscreen(r)}catch{}}}}}},99709:function(e,t,n){var r=n(55209),o=n(89826),s=n(93770),a=n(14762),i=n(97057),l=n(6733),c=n(11523),u=n(50959),d=n(44558),m=n(46428);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:h,onDragLeave:f,onDragOver:v,updatePositions:p}=e;const{url:g}=(0,i.z)(),{iconPositions:w,sortOrders:x,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:T,updateFolder:z,writeFile:E}=(0,a.o)(),k=(0,u.useCallback)((async(e,t,n)=>{if(h)if(t){const r=(0,c.join)(d.Ll,e);await T(d.Ll),await E(r,t,!0)&&(n===s.v.UPDATE_URL&&g(h,r),z(d.Ll,e))}else n===s.v.UPDATE_URL&&g(h,e)}),[h,T,z,g,E]),{openTransferDialog:L}=(0,r.Z)();return{onDragLeave:f,onDragOver:e=>{v?.(e),(0,m.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,o.p4)(e);if(0===t.length&&""===r)return;const s={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[r]);return(0,c.basename)(r)})),(0,m.vi)(n,e.target,w,x,s,a,b)}(0,o.WG)(e,t||k,n,L,Boolean(h))}}}},82034:function(e,t,n){var r=n(97057),o=n(67122),s=n(50959),a=n(44558);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(a.CC),{title:i}=o.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,r)=>{const o=n?` - ${n}${r?` ${a.xy}`:""}`:"";t(e,`${i}${o}`)}),[e,i,t]),prependFileToTitle:(0,s.useCallback)(((n,r)=>{const o=n?`${r?`${a.xy} `:""}${n} - `:"";t(e,`${o}${i}`)}),[e,i,t])}}},68845:function(e,t,n){var r=n(50959),o=n(44558);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),s=(0,r.useRef)(0),a=(0,r.useCallback)((r=>{const a=()=>{r.stopPropagation(),e(r)},i=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},l=()=>{s.current>=5&&i(),void 0===n.current?(r.target.removeEventListener("pointermove",l),s.current=0):s.current+=1};t?a():void 0===n.current?(n.current=window.setTimeout(i,o.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",l,{passive:!0})):(i(),a())}),[e,t]);return{onClick:a}}},10019:function(e,t,n){var r=n(50959);t.Z=(e,t)=>{const[n,o]=(0,r.useState)();(0,r.useEffect)((()=>{t&&o(new ResizeObserver(t))}),[t]),(0,r.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);