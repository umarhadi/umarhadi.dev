"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3609],{3609:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var o=n(1527);const r=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}),s=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}),a=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}),i=()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})});const l="48px",c="32px";var u=n(4965).ZP.div.withConfig({componentId:"sc-3ecd8b5d-0"})`
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
`,d=n(959);var m=e=>{const[t,n]=(0,d.useState)(!1),o=()=>{const e=()=>{document.fullscreenElement||(document.removeEventListener("fullscreenchange",e),n(!1))};document.fullscreenElement&&(n(!0),document.addEventListener("fullscreenchange",e))};return{fullscreen:t,toggleFullscreen:()=>{t?document.exitFullscreen():e.current?.requestFullscreen({navigationUI:"show"}).then(o)}}},h=n(7904),v=n(2588),f=n(5455),p=n(803),g=n(2296);const x={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var w=(e,t,n)=>{const[o,r]=(0,d.useState)(),{getScale:s,reset:a,zoomIn:i,zoomOut:l,zoomToPoint:c,zoomWithWheel:u}=o||{},{processes:{[e]:m}}=(0,f.z)(),{closing:w,componentWindow:b,url:T=""}=m||{},{prependFileToTitle:L}=(0,v.Z)(e),$=(0,d.useCallback)((e=>{const{detail:{scale:t=0,x:n=0,y:r=0}={}}=e||{};if(T&&t){const{minScale:e,step:s}=x,a=t<e+s;a&&(n||r)&&window.setTimeout((()=>o?.reset()),50),w||L(a?(0,g.basename)(T):`${(0,g.basename)(T)} (${Math.floor(100*t)}%)`)}}),[w,o,L,T]),z=(0,d.useCallback)((e=>u?.(e,{step:.3})),[u]);return(0,p.Z)(b,a),(0,d.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",$),n.addEventListener("wheel",z)),()=>{t?.removeEventListener("panzoomchange",$),n?.removeEventListener("wheel",z)})),[n,t,$,z]),(0,d.useEffect)((()=>(t&&!o&&r((0,h.Z)(t,x)),()=>o?.destroy())),[t,o]),{reset:a,scale:s?.(),zoomIn:i,zoomOut:l,zoomToPoint:c}},b=n(7398),T=n(4479),L=n(4145),$=n(217),z=n(5063),j=n(3270),E=n(5872).Buffer;const{maxScale:k,minScale:y}=x;var C=e=>{let{id:t}=e;const{processes:{[t]:l}={}}=(0,f.z)(),{closing:c=!1,url:h=""}=l||{},[p,x]=(0,d.useState)({}),[C,Z]=(0,d.useState)(!1),{prependFileToTitle:P}=(0,v.Z)(t),{readFile:S}=(0,T.o)(),F=(0,d.useRef)(null),q=(0,d.useRef)(null),M=(0,d.useRef)(null),{reset:B,scale:H,zoomIn:I,zoomOut:O,zoomToPoint:R}=w(t,q.current,M.current),{fullscreen:D,toggleFullscreen:U}=m(F),_=(0,d.useCallback)((async()=>{let e=await S(h);const t=(0,j.RT)(h);if([".ani",".cur"].includes(t))e=await(async e=>{const t=await(0,j.iQ)(),{parseAni:o}=await n.e(4412).then(n.bind(n,4412));let r=[];try{({images:r}=o(e))}catch{return e}return await Promise.all(r.map((e=>new Promise((n=>{const o=new Image,r=(0,j.YS)(E.from(e));o.addEventListener("load",(()=>{t.addFrame(o),(0,j.EK)(r),n()}),z.K7),o.src=r}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e(E.from(t)))))).render()}))})(e);else if(".jxl"===t)e=(0,j.fv)(await(0,j.dU)(e));else if(".qoi"===t){const{decodeQoi:t}=await n.e(5337).then(n.bind(n,5318));e=t(e)}else z.M0.has(t)&&(e=(await Promise.all([n.e(6230),n.e(574)]).then(n.t.bind(n,8759,23))).bufferToURI(e).replace("data:image/png;base64,",""));x((t=>{const[n]=Object.keys(t);if(n){if(n===h)return t;B?.()}return{[h]:(0,j.wB)(h,e)}})),P((0,g.basename)(h))}),[P,S,B,h]);return(0,d.useEffect)((()=>{!h||p[h]||c||_()}),[c,_,p,h]),(0,o.jsxs)(u,{ref:F,$showImage:Boolean(p[h]&&!C),onContextMenu:j.nK,...(0,b.Z)({id:t}),children:[(0,o.jsxs)("nav",{className:"top",children:[(0,o.jsx)($.Z,{disabled:!h||H===k||C,onClick:I,...(0,j.PS)("Zoom in"),children:(0,o.jsx)(a,{})}),(0,o.jsx)($.Z,{disabled:!h||H===y||C,onClick:O,...(0,j.PS)("Zoom out"),children:(0,o.jsx)(i,{})})]}),(0,o.jsxs)("figure",{ref:M,...(0,L.Z)((e=>{H===y?R?.(2*y,e,{animate:!0}):B?.()})),children:[(0,o.jsx)("img",{ref:q,alt:(0,g.basename)(h,(0,g.extname)(h)),decoding:"async",loading:"eager",onError:()=>Z(!0),onLoad:()=>Z(!1),src:p[h],...z.h7}),C&&(0,o.jsxs)("div",{children:[(0,g.basename)(h),(0,o.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,o.jsx)("nav",{className:"bottom",children:(0,o.jsx)($.Z,{disabled:!h,onClick:U,...(0,j.PS)("Full-screen"),children:D?(0,o.jsx)(s,{}):(0,o.jsx)(r,{})})})]})}},7398:function(e,t,n){var o=n(2832),r=n(5761),s=n(8082),a=n(4479),i=n(5455),l=n(7211),c=n(2296),u=n(959),d=n(5063),m=n(3270);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:h,onDragLeave:v,onDragOver:f,updatePositions:p}=e;const{url:g}=(0,i.z)(),{iconPositions:x,sortOrders:w,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:T,updateFolder:L,writeFile:$}=(0,a.o)(),z=(0,u.useCallback)((async(e,t,n)=>{if(h)if(t){const o=(0,c.join)(d.Ll,e);await T(d.Ll),await $(o,t,!0)&&(n===s.v.UPDATE_URL&&g(h,o),L(d.Ll,e))}else n===s.v.UPDATE_URL&&g(h,e)}),[h,T,L,g,$]),{openTransferDialog:j}=(0,o.Z)();return{onDragLeave:v,onDragOver:e=>{f?.(e),(0,m.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,r.p4)(e);if(0===t.length&&""===o)return;const s={x:e.clientX,y:e.clientY};let a=[];if(o){try{a=JSON.parse(o)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!x[`${n}/${e}`])return e;let t=0,o="";do{t+=1,o=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(x[o]);return(0,c.basename)(o)})),(0,m.vi)(n,e.target,x,w,s,a,b)}(0,r.WG)(e,t||z,n,j,Boolean(h))}}}},2588:function(e,t,n){var o=n(5455),r=n(6870),s=n(959),a=n(5063);t.Z=e=>{const{title:t}=(0,o.z)(),[n]=e.split(a.CC),{title:i}=r.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,o)=>{const r=n?` - ${n}${o?` ${a.xy}`:""}`:"";t(e,`${i}${r}`)}),[e,i,t]),prependFileToTitle:(0,s.useCallback)(((n,o)=>{const r=n?`${o?`${a.xy} `:""}${n} - `:"";t(e,`${r}${i}`)}),[e,i,t])}}},4145:function(e,t,n){var o=n(959),r=n(5063);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,o.useRef)(),s=(0,o.useRef)(0),a=(0,o.useCallback)((o=>{const a=()=>{o.stopPropagation(),e(o)},i=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},l=()=>{s.current>=5&&i(),void 0===n.current?(o.target.removeEventListener("pointermove",l),s.current=0):s.current+=1};t?a():void 0===n.current?(n.current=window.setTimeout(i,r.jx.DOUBLE_CLICK),o.target.addEventListener("pointermove",l,{passive:!0})):(i(),a())}),[e,t]);return{onClick:a}}},803:function(e,t,n){var o=n(959);t.Z=(e,t)=>{const[n,r]=(0,o.useState)();(0,o.useEffect)((()=>{t&&r(new ResizeObserver(t))}),[t]),(0,o.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);