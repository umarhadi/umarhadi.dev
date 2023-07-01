"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4410],{92963:function(e,t,r){var n=r(11527),o=r(13364),i=r(59062),a=r(92866),l=r.n(a),s=r(50959);const c=l()((()=>r.e(2609).then(r.bind(r,52609))),{loadableGenerated:{webpack:()=>[52609]}});t.Z=e=>{let{id:t,useHook:r,StyledComponent:a,children:l}=e;const{processes:{[t]:{url:d=""}={}}}=(0,i.z)(),b=(0,s.useRef)(null),[g,u]=(0,s.useState)(!0),h=(0,s.useMemo)((()=>({contain:"strict",visibility:g?"hidden":"visible"})),[g]);return r(t,d,b,u,g),(0,n.jsxs)(n.Fragment,{children:[g&&(0,n.jsx)(c,{}),(0,n.jsx)(a,{ref:b,style:h,...(0,o.Z)({id:t}),children:l})]})}},74410:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(11527),o=r(92963),i=r(50959);const a=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z"})}))),l=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 17H0v-2h32v2z"})}))),s=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z"})}))),c=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z"})})));var d=r(60396);var b=d.ZP.nav.withConfig({componentId:"sc-8d1911a-0"})`
  background-color: rgb(50, 54, 57);
  box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
  display: flex;
  height: 40px;
  position: absolute;
  top: ${e=>{let{theme:t}=e;return t.sizes.titleBar.height}}px;
  width: 100%;
  z-index: 1;

  .side-menu {
    display: flex;
    overflow: hidden;
    place-items: center;
    white-space: nowrap;
    width: 100%;

    span {
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:first-child {
      color: #fff;
      font-size: 14px;
      margin-left: 16px;
      place-content: flex-start;
    }

    &:last-child {
      margin-right: 16px;
      place-content: flex-end;
    }
  }

  button {
    border-radius: 50%;
    display: flex;
    font-size: 24px;
    height: 30px;
    place-content: center;
    place-items: center;
    width: 30px;

    &#subtract {
      margin-right: 7px;
    }

    &#add {
      margin-left: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }

    &:hover {
      background-color: rgb(66, 70, 73);
    }

    svg {
      fill: #fff;
      height: 12px;
      stroke: #fff;
      width: 12px;
    }

    &:disabled {
      background-color: initial;

      svg {
        fill: rgb(110, 112, 114);
        stroke: rgb(110, 112, 114);
      }
    }

    &#download {
      svg {
        margin-left: 1px;
        scale: 1.15;
        stroke-width: 1.75;
        transform: scale(1.25, 1);
      }
    }
  }

  ol {
    display: flex;
    flex-direction: row;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;

    li {
      color: #fff;
      display: flex;
      flex-direction: row;
      font-size: 14px;

      input {
        background-color: rgb(25, 27, 28);
        color: #fff;
        height: 20px;
        text-align: center;

        &:disabled {
          color: rgb(110, 112, 114);
        }
      }

      &:not(:last-child)::after {
        background-color: rgb(112, 115, 117);
        content: "";
        margin-left: 20px;
        width: 1px;
      }

      &.pages {
        letter-spacing: 1.5px;
        line-height: 20px;
        padding-right: 10px;
        width: max-content;

        input {
          margin: 0 5px;
          width: 24px;
        }
      }

      &#scale {
        display: flex;
        place-items: center;

        input {
          width: 45px;
        }
      }
    }
  }
`,g=r(93246),u=r(97147),h=r(59062),p=r(95654),m=r(80437),x=r(76022);const A=[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5];var v=(e,t,r,n)=>{const{readFile:o}=(0,u.o)(),{argument:a,processes:{[e]:l}={}}=(0,h.z)(),{libs:s=[],scale:c}=l||{},[d,b]=(0,i.useState)([]),v=(0,i.useCallback)((async(t,n)=>{const o=document.createElement("canvas"),i=o.getContext("2d",m.KU),l=await n.getPage(t);let s;if(c)s=l.getViewport({scale:c});else{const t=l.getViewport().viewBox[2],o=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-m.BQ;if(t>=e)return 1;const r=t/e,n=A.findIndex((e=>e>=r));return n>0?A[n-1]:1}(r.current?.clientWidth,t),{info:i}=await n.getMetadata();a(e,"scale",o),i?.Title&&a(e,"subTitle",i.Title),s=l.getViewport({scale:o})}return o.height=s.height,o.width=s.width,await l.render({canvasContext:i,viewport:s}).promise,o}),[a,r,e,c]),{prependFileToTitle:w}=(0,g.Z)(e),f=(0,i.useRef)(!1),k=(0,i.useRef)(null),$=(0,i.useCallback)((async()=>{if(window.pdfjsLib&&t&&r.current&&!f.current){f.current=!0,r.current.scrollTop=0,b([]),n(!0);const i=await window.pdfjsLib.getDocument(await o(t)).promise;a(e,"count",i.numPages),w((0,p.basename)(t)),k.current=new AbortController;for(let e=0;e<i.numPages&&!k.current.signal.aborted;e+=1){const t=await v(e+1,i);0===e&&n(!1),b((e=>[...e,t]))}f.current=!1}}),[a,r,e,w,o,v,n,t]);(0,i.useEffect)((()=>{(0,x.mb)(s).then((()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="/Program Files/PDF.js/pdf.worker.js",$())}))}),[s,$]),(0,i.useEffect)((()=>{if(d.length>0){const t=r.current?.querySelector("#pages");t&&([...t.children].forEach((e=>e.remove())),d.forEach(((n,o)=>{const i=document.createElement("li"),l=new IntersectionObserver((t=>t.forEach((t=>{let{isIntersecting:r}=t;r&&a(e,"page",o+1)}))),{root:r.current,threshold:.4});i.append(n),t.append(i),l.observe(i)})))}}),[a,r,e,d]),(0,i.useEffect)((()=>()=>k.current?.abort()),[])},w=r(11154);var f=e=>{let{id:t}=e;const{readFile:o}=(0,u.o)(),{argument:i,processes:{[t]:d}={}}=(0,h.z)(),{count:g=0,page:v=1,componentWindow:f,scale:k=1,subTitle:$="",url:j=""}=d||{};return(0,n.jsxs)(b,{children:[(0,n.jsx)("div",{className:"side-menu",children:(0,n.jsx)("span",{children:$||(0,p.basename)(j)})}),(0,n.jsxs)("ol",{children:[0!==g&&(0,n.jsxs)("li",{className:"pages",children:[(0,n.jsx)("input",{enterKeyHint:"go",onChange:e=>{let{target:r}=e;const n=Number(r.value);Number.isNaN(n)||n<1||n>g||(i(t,"page",n),f?.querySelectorAll("li")[n-1].scrollIntoView())},value:v})," ","/ ",g]}),(0,n.jsxs)("li",{id:"scale",children:[(0,n.jsx)(w.Z,{disabled:.25===k||0===g,id:"subtract",onClick:()=>i(t,"scale",A[A.indexOf(k)-1]),...(0,x.PS)("Zoom out"),children:(0,n.jsx)(l,{})}),(0,n.jsx)("input",{disabled:0===g,enterKeyHint:"done",onChange:e=>{let{target:r}=e;if(!r.value.endsWith("%")||r.value.length>4||r.value.length<2)return;const n=Number(r.value.replace("%",""))/100;Number.isNaN(n)||n>A[A.length-1]||n<A[0]||i(t,"scale",A[A.findIndex((e=>e>=n))])},value:`${Math.round(100*k)}%`}),(0,n.jsx)(w.Z,{disabled:5===k||0===g,id:"add",onClick:()=>i(t,"scale",A[A.indexOf(k)+1]),...(0,x.PS)("Zoom in"),children:(0,n.jsx)(a,{})})]})]}),(0,n.jsxs)("div",{className:"side-menu",children:[(0,n.jsx)(w.Z,{disabled:0===g,id:"download",onClick:async()=>{const e=document.createElement("a");e.href=(0,x.YS)(await o(j)),e.download=(0,p.basename)(j),e.click()},...(0,x.PS)("Download"),children:(0,n.jsx)(s,{})}),(0,n.jsx)(w.Z,{disabled:0===g,onClick:async()=>{(0,x.G6)()&&(window.InstallTrigger=!0,setTimeout((()=>{delete window.InstallTrigger}),5*m.i2));const{default:e}=await r.e(3021).then(r.t.bind(r,23021,23));e({base64:!0,printable:(await o(j)).toString("base64"),type:"pdf"})},...(0,x.PS)("Print"),children:(0,n.jsx)(c,{})})]})]})},k=r(44619);var $=d.ZP.div.withConfig({componentId:"sc-64beb09a-0"})`
  ${(0,k.Z)(m.BQ)};

  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  top: 40px;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 40px)`}};
  }

  canvas {
    box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
    margin: 4px 4px 0;
  }
`;var j=e=>{let{id:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{StyledComponent:$,id:t,useHook:v,children:(0,n.jsx)("ol",{id:"pages"})}),(0,n.jsx)(f,{id:t})]})}},13364:function(e,t,r){var n=r(23862),o=r(38167),i=r(69229),a=r(97147),l=r(59062),s=r(31422),c=r(95654),d=r(50959),b=r(80437),g=r(76022);t.Z=e=>{let{callback:t,directory:r=b.Ll,id:u,onDragLeave:h,onDragOver:p,updatePositions:m}=e;const{url:x}=(0,l.z)(),{iconPositions:A,sortOrders:v,setIconPositions:w}=(0,s.k)(),{mkdirRecursive:f,updateFolder:k,writeFile:$}=(0,a.o)(),j=(0,d.useCallback)((async(e,t,r)=>{if(u)if(t){const n=(0,c.join)(b.Ll,e);await f(b.Ll),await $(n,t,!0)&&(r===i.v.UPDATE_URL&&x(u,n),k(b.Ll,e))}else r===i.v.UPDATE_URL&&x(u,e)}),[u,f,k,x,$]),{openTransferDialog:y}=(0,n.Z)();return{onDragLeave:h,onDragOver:e=>{p?.(e),(0,g.nK)(e)},onDrop:e=>{if(!b.my.has((0,g.RT)(r))){if(m&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,o.p4)(e);if(0===t.length&&""===n)return;const i={x:e.clientX,y:e.clientY};let a=[];if(n){try{a=JSON.parse(n)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(r)&&(0,c.basename)(e)===(0,c.relative)(r,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!A[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(A[n]);return(0,c.basename)(n)})),(0,g.vi)(r,e.target,A,v,i,a,w)}(0,o.WG)(e,t||j,r,y,Boolean(u))}}}}},93246:function(e,t,r){var n=r(59062),o=r(5530),i=r(50959),a=r(80437);t.Z=e=>{const{title:t}=(0,n.z)(),[r]=e.split(a.CC),{title:l}=o.Z[r]||{};return{appendFileToTitle:(0,i.useCallback)(((r,n)=>{const o=r?` - ${r}${n?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),prependFileToTitle:(0,i.useCallback)(((r,n,o)=>{const i=r?`${n?`${a.xy} `:""}${r}${o?" ":" - "}`:"";t(e,`${i}${l}`)}),[e,l,t])}}},44619:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(60396);const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",s={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${s[c].thumb} ${s[c].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${s[c].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${s[c].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${s[c].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${s[c].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${s[c].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${s[c].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${s[c].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${s[c].buttonHover};
    }

    &:active {
      background-color: ${s[c].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${i});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${l});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${s[c].blendMode};
  }
`}}}]);