"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9731],{99731:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(11527);const s=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}),o=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}),l=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}),i=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})});const a="48px",c="32px";var u=n(74965).ZP.div.withConfig({componentId:"sc-3ecd8b5d-0"})`
  background-color: #222;
  display: flex;
  height: 100%;
  padding-bottom: ${c};
  padding-top: ${a};
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
    height: ${a};
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
      height: ${a};
      width: ${a};

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
`,d=n(34502),m=n(17904),h=n(92588),f=n(15455),v=n(803),p=n(82296),g=n(50959);const b={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var w=(e,t,n)=>{const[r,s]=(0,g.useState)(),{getScale:o,reset:l,zoomIn:i,zoomOut:a,zoomToPoint:c,zoomWithWheel:u}=r||{},{processes:{[e]:d}}=(0,f.z)(),{closing:w,componentWindow:x,url:T=""}=d||{},{prependFileToTitle:E}=(0,h.Z)(e),z=(0,g.useCallback)((e=>{const{detail:{scale:t=0,x:n=0,y:s=0}={}}=e||{};if(T&&t){const{minScale:e,step:o}=b,l=t<e+o;l&&(n||s)&&window.setTimeout((()=>r?.reset()),50),w||E(l?(0,p.basename)(T):`${(0,p.basename)(T)} (${Math.floor(100*t)}%)`)}}),[w,r,E,T]),F=(0,g.useCallback)((e=>u?.(e,{step:.3})),[u]);return(0,v.Z)(x,l),(0,g.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",z),n.addEventListener("wheel",F)),()=>{t?.removeEventListener("panzoomchange",z),n?.removeEventListener("wheel",F)})),[n,t,z,F]),(0,g.useEffect)((()=>(t&&!r&&s((0,m.Z)(t,b)),()=>r?.destroy())),[t,r]),{reset:l,scale:o?.(),zoomIn:i,zoomOut:a,zoomToPoint:c}},x=n(67398),T=n(74479),E=n(64145),z=n(10217),F=n(95063),k=n(63270),L=n(55872).Buffer;const{maxScale:$,minScale:j}=b;var S=e=>{let{id:t}=e;const{processes:{[t]:a}={}}=(0,f.z)(),{closing:c=!1,url:m=""}=a||{},[v,b]=(0,g.useState)({}),[S,y]=(0,g.useState)(!1),{prependFileToTitle:C}=(0,h.Z)(t),{readFile:Z}=(0,T.o)(),q=(0,g.useRef)(null),P=(0,g.useRef)(null),R=(0,g.useRef)(null),{reset:M,scale:B,zoomIn:H,zoomOut:I,zoomToPoint:O}=w(t,P.current,R.current),{fullscreen:D,toggleFullscreen:U}=(0,d.Z)(q.current),_=(0,g.useCallback)((async()=>{let e=await Z(m);const t=(0,k.RT)(m);if([".ani",".cur"].includes(t))e=await(async e=>{const t=await(0,k.iQ)(),{parseAni:r}=await n.e(4412).then(n.bind(n,4412));let s=[];try{({images:s}=r(e))}catch{return e}return await Promise.all(s.map((e=>new Promise((n=>{const r=new Image,s=(0,k.YS)(L.from(e));r.addEventListener("load",(()=>{t.addFrame(r),(0,k.EK)(s),n()}),F.K7),r.src=s}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e(L.from(t)))))).render()}))})(e);else if(".jxl"===t)e=(0,k.fv)(await(0,k.dU)(e));else if(".qoi"===t){const{decodeQoi:t}=await n.e(5337).then(n.bind(n,85337));e=t(e)}else F.M0.has(t)&&(e=(await Promise.all([n.e(6230),n.e(8759)]).then(n.t.bind(n,8759,23))).bufferToURI(e).replace("data:image/png;base64,",""));b((t=>{const[n]=Object.keys(t);if(n){if(n===m)return t;M?.()}return{[m]:(0,k.wB)(m,e)}})),C((0,p.basename)(m))}),[C,Z,M,m]);return(0,g.useEffect)((()=>{!m||v[m]||c||_()}),[c,_,v,m]),(0,r.jsxs)(u,{ref:q,$showImage:Boolean(v[m]&&!S),onContextMenu:k.nK,...(0,x.Z)({id:t}),children:[(0,r.jsxs)("nav",{className:"top",children:[(0,r.jsx)(z.Z,{disabled:!m||B===$||S,onClick:H,...(0,k.PS)("Zoom in"),children:(0,r.jsx)(l,{})}),(0,r.jsx)(z.Z,{disabled:!m||B===j||S,onClick:I,...(0,k.PS)("Zoom out"),children:(0,r.jsx)(i,{})})]}),(0,r.jsxs)("figure",{ref:R,...(0,E.Z)((e=>{B===j?O?.(2*j,e,{animate:!0}):M?.()})),children:[(0,r.jsx)("img",{ref:P,alt:(0,p.basename)(m,(0,p.extname)(m)),decoding:"async",loading:"eager",onError:()=>y(!0),onLoad:()=>y(!1),src:v[m],...F.h7}),S&&(0,r.jsxs)("div",{children:[(0,p.basename)(m),(0,r.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,r.jsx)("nav",{className:"bottom",children:(0,r.jsx)(z.Z,{disabled:!m,onClick:()=>U("show"),...(0,k.PS)("Full-screen"),children:D?(0,r.jsx)(o,{}):(0,r.jsx)(s,{})})})]})}},34502:function(e,t,n){var r=n(50959);t.Z=e=>{const[t,n]=(0,r.useState)(!1),s=()=>{const e=document,t=()=>{e.fullscreenElement||e.fullscreenEnabled||e.mozFullScreenElement||e.mozFullScreenEnabled||e.webkitFullscreenElement||e.webkitFullscreenEnabled||(document.removeEventListener("fullscreenchange",t),n(!1))};(e.fullscreenElement||e.fullscreenEnabled||e.mozFullScreenElement||e.mozFullScreenEnabled||e.webkitFullscreenElement||e.webkitFullscreenEnabled)&&(n(!0),document.addEventListener("fullscreenchange",t))};return{fullscreen:t,toggleFullscreen:n=>{if(t){const e=document;e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitExitFullscreen&&e.webkitExitFullscreen()}else{const t=e||document.documentElement,r={navigationUI:n||"hide"};try{"requestFullscreen"in t?t.requestFullscreen(r).then(s):"mozRequestFullScreen"in t?t.mozRequestFullScreen(r).then(s):"webkitRequestFullscreen"in t&&t.webkitRequestFullscreen(r).then(s)}catch{s()}}}}}},67398:function(e,t,n){var r=n(2832),s=n(45761),o=n(8082),l=n(74479),i=n(15455),a=n(7211),c=n(82296),u=n(50959),d=n(95063),m=n(63270);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:h,onDragLeave:f,onDragOver:v,updatePositions:p}=e;const{url:g}=(0,i.z)(),{iconPositions:b,sortOrders:w,setIconPositions:x}=(0,a.k)(),{mkdirRecursive:T,updateFolder:E,writeFile:z}=(0,l.o)(),F=(0,u.useCallback)((async(e,t,n)=>{if(h)if(t){const r=(0,c.join)(d.Ll,e);await T(d.Ll),await z(r,t,!0)&&(n===o.v.UPDATE_URL&&g(h,r),E(d.Ll,e))}else n===o.v.UPDATE_URL&&g(h,e)}),[h,T,E,g,z]),{openTransferDialog:k}=(0,r.Z)();return{onDragLeave:f,onDragOver:e=>{v?.(e),(0,m.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,s.p4)(e);if(0===t.length&&""===r)return;const o={x:e.clientX,y:e.clientY};let l=[];if(r){try{l=JSON.parse(r)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;l=l.map((e=>(0,c.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[r]);return(0,c.basename)(r)})),(0,m.vi)(n,e.target,b,w,o,l,x)}(0,s.WG)(e,t||F,n,k,Boolean(h))}}}},92588:function(e,t,n){var r=n(15455),s=n(86870),o=n(50959),l=n(95063);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(l.CC),{title:i}=s.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,r)=>{const s=n?` - ${n}${r?` ${l.xy}`:""}`:"";t(e,`${i}${s}`)}),[e,i,t]),prependFileToTitle:(0,o.useCallback)(((n,r)=>{const s=n?`${r?`${l.xy} `:""}${n} - `:"";t(e,`${s}${i}`)}),[e,i,t])}}},64145:function(e,t,n){var r=n(50959),s=n(95063);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),o=(0,r.useRef)(0),l=(0,r.useCallback)((r=>{const l=()=>{r.stopPropagation(),e(r)},i=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},a=()=>{o.current>=5&&i(),void 0===n.current?(r.target.removeEventListener("pointermove",a),o.current=0):o.current+=1};t?l():void 0===n.current?(n.current=window.setTimeout(i,s.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",a,{passive:!0})):(i(),l())}),[e,t]);return{onClick:l}}},803:function(e,t,n){var r=n(50959);t.Z=(e,t)=>{const[n,s]=(0,r.useState)();(0,r.useEffect)((()=>{t&&s(new ResizeObserver(t))}),[t]),(0,r.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);