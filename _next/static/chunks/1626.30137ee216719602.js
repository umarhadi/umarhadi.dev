"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1626],{26014:function(e,t,n){var i=n(11527),o=n(83609),s=n(431),a=n(12901),r=n.n(a),l=n(50959);const c=r()((()=>n.e(6022).then(n.bind(n,46022))),{loadableGenerated:{webpack:()=>[46022]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:a,children:r}=e;const{processes:{[t]:{url:d=""}={}}}=(0,s.z)(),u=(0,l.useRef)(null),[p,g]=(0,l.useState)(!0),h=(0,l.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return n(t,d,u,g,p),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(c,{}),(0,i.jsx)(a,{ref:u,style:h,...(0,o.Z)({id:t}),children:r})]})}},61626:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(11527),o=n(26014);const s={paths:{vs:"/Program Files/MonacoEditor/vs"}},a={".whtml":".html"};var r=n(84797),l=n(90810);const c=(e,t)=>{if(!t)return[];const{uri:n}=t.getModel()||{},[i]=n?.path.split("|")||[],o="file"===n?.scheme?i:e||l.$Z;return e&&e!==i?[]:[o,t.getValue()]},d=new Set(["json","javascript","typescript","css","sass","less","html","markdown","xml"]),u=e=>d.has(e.toLowerCase()),p=async(e,t)=>{const i=e.toLowerCase();if("json"===i)try{return JSON.stringify(JSON.parse(t),void 0,2)}catch{return t}return(await n.e(854).then(n.t.bind(n,77192,23))).format(t,await(async e=>"javascript"===e||"typescript"===e?{parser:"babel",plugins:[await n.e(7291).then(n.t.bind(n,85630,23))]}:["css","sass","less"].includes(e)?{parser:e,plugins:[await n.e(5807).then(n.t.bind(n,65807,23))]}:"html"===e?{parser:"html",plugins:[await n.e(1762).then(n.t.bind(n,63273,23))]}:"xml"===e?{parser:"xml",plugins:[await n.e(779).then(n.t.bind(n,779,23))]}:"markdown"===e?{parser:"markdown",plugins:[await n.e(6178).then(n.t.bind(n,66977,23))]}:void 0)(i))};var g=n(34256);var h=g.ZP.footer.withConfig({componentId:"sc-e5795db7-0"})`
  background-color: rgb(25, 25, 25);
  border-top: 1px solid rgb(19, 19, 19);
  bottom: 0;
  color: rgb(108, 103, 106);
  display: flex;
  font-size: 16px;
  height: 30px;
  place-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;

  ol {
    display: flex;
    place-content: flex-end;
    place-items: center;

    &:first-of-type {
      padding-left: 8px;
    }

    &:last-of-type {
      padding-right: 8px;
    }

    li {
      margin: 0 4px;
      padding: 4px 8px;
      white-space: nowrap;

      button {
        color: inherit;
        font-size: inherit;
        padding: 4px 8px;

        &.pretty {
          position: relative;
          top: -2px;
        }

        svg {
          fill: rgb(108, 103, 106);
          height: 16px;
          width: 16px;
        }
      }

      &:hover {
        background-color: rgb(37, 37, 37);
      }

      &:active {
        background-color: rgb(34, 34, 34);
      }

      &.clickable {
        padding: 0;
      }

      &#save {
        svg {
          margin-top: 4px;
        }
      }
    }
  }
`,f=n(18766),m=n(56285),w=n(431),b=n(87730),x=n(50959),v=n(24370),y=n(12876);const k=()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"m13.353 1.146 1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z",fillRule:"evenodd"})});var C=e=>{let{id:t}=e;const{processes:{[t]:n}}=(0,w.z)(),{editor:o,url:s}=n||{},{updateFolder:a,writeFile:r}=(0,m.o)(),{prependFileToTitle:l}=(0,f.Z)(t),[d,g]=(0,x.useState)(""),[C,L]=(0,x.useState)("Ln 1, Col 1"),[j,$]=(0,x.useState)(1);return(0,x.useEffect)((()=>{const e=()=>{const e=o?.getSelection(),{positionColumn:t=0,positionLineNumber:n=0}=e||{},i=e?o?.getModel()?.getValueInRange(e):"";L(`Ln ${n}, Col ${t}${i?` (${i.length} selected)`:""}`)},t=()=>$(o?.getModel()?.getLineCount()||0);o?.onDidChangeModelContent(t),o?.onDidChangeCursorPosition(e),o?.onDidChangeModel((()=>{const n=o?.getModel(),i=n?.getLanguageId();i&&g(window.monaco?.languages.getLanguages().reduce(((e,t)=>{let{id:n,aliases:o}=t;return n===i&&o?.[0]||e}),i)),t(),e()}))}),[o]),(0,i.jsx)(h,{onContextMenuCapture:y.nK,children:o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ol",{children:(0,i.jsxs)("li",{children:["Lines ",j]})}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{className:"clickable",id:"save",children:(0,i.jsx)(v.Z,{onClick:async()=>{const[e,t]=c(s,o);e&&t&&(await r(e,t,!0),a((0,b.dirname)(e),(0,b.basename)(e)),l((0,b.basename)(e)))},...(0,y.PS)("Save"),children:(0,i.jsx)(k,{})})}),s&&u(d)&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(v.Z,{className:"pretty",onClick:async()=>o?.setValue(await p(d,o.getValue())),...(0,y.PS)(`Pretty print ${(0,b.basename)(s)}`),children:"{ }"})}),C&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(v.Z,{onClick:()=>{try{o?.focus(),o?.getAction("editor.action.gotoLine")?.run()}catch{}},...(0,y.PS)("Go to Line/Column"),children:C})}),""!==d&&(0,i.jsx)("li",{children:d})]})]})})};const L=g.ZP.div.attrs({onBlur:e=>{let{relatedTarget:t}=e;if(t instanceof HTMLElement){let e;"actions-container"===t.classList.value?e=t.closest(".monaco-menu-container"):"shadow-root-host"===t.classList.value&&t.shadowRoot instanceof ShadowRoot&&(e=t),e instanceof HTMLElement&&e.closest("section")&&e.closest("section")?.parentNode?.prepend(e)}}}).withConfig({componentId:"sc-7a4b091d-0"})`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  width: 100%;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 31px)`}};
  }
`;var j=L,$=n(80376),S=n(69254);var M=(e,t,n,i)=>{const{readFile:o,updateFolder:d,writeFile:u}=(0,m.o)(),{argument:p}=(0,w.z)(),{prependFileToTitle:g}=(0,f.Z)(e),[h,v]=(0,x.useState)(),[k,C]=(0,x.useState)(),L=(0,x.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=`${e}|${t}`,i=k?.editor.getModels();return i?.some((e=>e._associatedResource.path===n))?L(e,t+1):k?.Uri.parse(n)}),[k?.Uri,k?.editor]),j=(0,x.useCallback)((async()=>{const e=k?.editor.createModel((await o(t)).toString(),(e=>{const t=a[e]||e;if(!r._.has(t))return"";const{id:n=""}=window.monaco.languages.getLanguages().find((e=>e.extensions?.includes(t)))||{};return n})((0,y.RT)(t)),L(t));return e?.onDidChangeContent((()=>g((0,b.basename)(t),!0))),e}),[L,k?.editor,g,o,t]),M=(0,x.useCallback)((async()=>{k&&h&&t.startsWith("/")&&((0,S.H3)("define"),h.getModel()?.dispose(),h.setModel(await j()),window.setTimeout((()=>(0,S.wz)("define")),2.5*l.i2)),g((0,b.basename)(t||l.$Z))}),[j,h,k,g,t]);(0,x.useEffect)((()=>{k||((0,S.H3)("define"),$._m.config(s),$._m.init().then((e=>{(0,S.wz)("define"),C(e)})))}),[k]),(0,x.useEffect)((()=>{h?.onKeyDown((async e=>{const{ctrlKey:n,code:i,keyCode:o}=e;if(n&&("KeyS"===i||83===o)){e.preventDefault();const[n,i]=c(t,h);n&&"string"===typeof i&&(await u(n,i,!0),d((0,b.dirname)(n),(0,b.basename)(n)),g((0,b.basename)(n)))}}))}),[h,g,d,t,u]),(0,x.useEffect)((()=>{if(k&&!h&&n.current){const t=k.editor.create(n.current,{automaticLayout:!0,theme:"vs-dark"});n.current?.closest("section")?.addEventListener("focus",(()=>t.focus()),{passive:!0}),v(t),p(e,"editor",t),i(!1)}return()=>{h&&k&&(h.getModel()?.dispose(),h.dispose(),(0,S.wz)("define"))}}),[n,h,e,k,p,i]),(0,x.useEffect)((()=>{k&&h&&t&&M()}),[h,M,k,g,t])};var F=e=>{let{id:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{StyledComponent:j,id:t,useHook:M}),(0,i.jsx)(C,{id:t})]})}},83609:function(e,t,n){var i=n(18213),o=n(5894),s=n(80968),a=n(56285),r=n(431),l=n(69455),c=n(87730),d=n(50959),u=n(90810),p=n(12876);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:g,onDragLeave:h,onDragOver:f,updatePositions:m}=e;const{url:w}=(0,r.z)(),{iconPositions:b,sortOrders:x,setIconPositions:v}=(0,l.k)(),{mkdirRecursive:y,updateFolder:k,writeFile:C}=(0,a.o)(),L=(0,d.useCallback)((async(e,t,n)=>{if(g)if(t){const i=(0,c.join)(u.Ll,e);await y(u.Ll),await C(i,t,!0)&&(n===s.v.UPDATE_URL&&w(g,i),k(u.Ll,e))}else n===s.v.UPDATE_URL&&w(g,e)}),[g,y,k,w,C]),{openTransferDialog:j}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{f?.(e),(0,p.nK)(e)},onDrop:e=>{if(!u.my.has((0,c.extname)(n))){if(m&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,o.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let a=[];if(i){try{a=JSON.parse(i)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[i]);return(0,c.basename)(i)})),(0,p.vi)(n,e.target,b,x,s,a,v)}(0,o.WG)(e,t||L,n,j,Boolean(g))}}}}},18766:function(e,t,n){var i=n(431),o=n(87121),s=n(50959),a=n(90810);t.Z=e=>{const{title:t}=(0,i.z)(),[n]=e.split(a.CC),{title:r}=o.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,i)=>{const o=n?` - ${n}${i?` ${a.xy}`:""}`:"";t(e,`${r}${o}`)}),[e,r,t]),prependFileToTitle:(0,s.useCallback)(((n,i)=>{const o=n?`${i?`${a.xy} `:""}${n} - `:"";t(e,`${o}${r}`)}),[e,r,t])}}},69254:function(e,t,n){n.d(t,{H3:function(){return a},od:function(){return i},wz:function(){return s}});const i=e=>e.forEach((e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}})),o=(e,t)=>{window.lockedGlobals={...window.lockedGlobals,[e]:t}},s=e=>o(e,!0),a=e=>{Object.getOwnPropertyDescriptor(window,e)||(e=>{let t;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:t,set(n){window.lockedGlobals?.[e]||(t=n)}})})(e),o(e,!1)}}}]);