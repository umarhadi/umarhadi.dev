"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4648],{64648:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(11527),i=n(83969),o=n(14584),s=n(60396),a=n(80437);var c=(0,s.ZP)(o.m.div).withConfig({componentId:"sc-b2b41f69-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.background}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.taskbar.peekBorder}`}};
  border-bottom: 0;
  bottom: ${a.bK}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;
  transform: ${e=>{let{$offsetX:t}=e;return t?`translateX(${t}px)`:void 0}};

  ${i.Z}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.activeForeground}};
    }
  }

  img {
    height: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.height}}px;
    margin: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.margin}}px;
    max-height: ${a.yM}px;
    max-width: ${a.yM}px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button {
    background-color: rgb(40, 40, 40);
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: rgb(252, 246, 247);
      width: 12px;
    }

    &:active {
      background-color: rgb(139, 10, 20);
    }

    &:hover {
      background-color: rgb(194, 22, 36);
    }
  }
`;var l=()=>{const{sizes:{taskbar:e}}=(0,s.Fg)(),t=e.entry.peekImage.height+2*e.entry.peekImage.margin;return{animate:"active",exit:"initial",initial:"initial",transition:{duration:a.Nb.WINDOW,ease:"easeInOut"},variants:{active:{height:t,opacity:1},initial:{height:0,opacity:0}}}},u=n(59062),h=n(50959),d=n(76022);const m=async(e,t,n)=>{if(!t.current)return;const r=()=>window.requestAnimationFrame((()=>m(e,t,n))),i=await(0,d.mZ)();let o;try{o=await(i?.toCanvas(e,{...e.clientWidth>a.yM&&{canvasHeight:Math.round(a.yM/e.clientWidth*e.clientHeight),canvasWidth:a.yM},filter:e=>!(e instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0"}}))}catch{}if(o&&o.width>0&&o.height>0)if((0,d.H5)(o)){const e=new Image,i=o.toDataURL();e.addEventListener("load",(()=>{t.current&&(n(i),window.setTimeout(r,a.i2/15))}),a.K7),e.src=i}else r()};var g=e=>{const{processes:{[e]:t}}=(0,u.z)(),{peekElement:n,componentWindow:r}=t||{},i=(0,h.useRef)(),[o,s]=(0,h.useState)(""),c=(0,h.useRef)(!0);return(0,h.useEffect)((()=>{const e=n||r;return!i.current&&e&&(i.current=window.setTimeout((()=>window.requestAnimationFrame((()=>m(e,c,s)))),document.querySelector(".peekWindow")?0:a.i2/2),c.current=!0),()=>{i.current&&(clearTimeout(i.current),i.current=void 0),c.current=!1}}),[r,n]),o},w=n(10349),p=n(74794),v=n(31422),f=n(11154);var x=e=>{let{id:t}=e;const{minimize:n,processes:{[t]:{minimized:i=!1,title:o=t}={}}}=(0,u.z)(),{setForegroundId:s}=(0,v.k)(),{onClose:m}=(0,w.Z)(t),[x,b]=(0,h.useState)(0),k=g(t),y=l(),z=(0,h.useRef)(null);return(0,h.useLayoutEffect)((()=>{if(k){const{left:e=0,right:t=0}=z.current?.getBoundingClientRect()||{},n=(0,d.E9)();e<0?b(Math.abs(e)):t>n&&b(n-t)}}),[k]),k?(0,r.jsxs)(c,{ref:z,$offsetX:x,className:"peekWindow",onClick:()=>{i&&n(t),s(t)},...y,...a.LL,children:[(0,r.jsx)("img",{alt:o,decoding:"async",loading:"eager",src:k,...a.h7}),(0,r.jsx)(f.Z,{onClick:m,...(0,d.PS)("Close"),children:(0,r.jsx)(p.Tw,{})})]}):null}},74794:function(e,t,n){n.d(t,{J6:function(){return a},Tw:function(){return c},bJ:function(){return s},dO:function(){return o}});var r=n(11527),i=n(50959);const o=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 0h10v1H0z"})}))),s=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})}))),a=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})}))),c=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})})))}}]);