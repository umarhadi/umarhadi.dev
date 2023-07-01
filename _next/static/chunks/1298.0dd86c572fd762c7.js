"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1298],{92963:function(e,t,n){var i=n(11527),o=n(13364),s=n(59062),a=n(92866),r=n.n(a),l=n(50959);const c=r()((()=>n.e(2609).then(n.bind(n,52609))),{loadableGenerated:{webpack:()=>[52609]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:a,children:r}=e;const{processes:{[t]:{url:d=""}={}}}=(0,s.z)(),u=(0,l.useRef)(null),[p,g]=(0,l.useState)(!0),h=(0,l.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return n(t,d,u,g,p),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(c,{}),(0,i.jsx)(a,{ref:u,style:h,...(0,o.Z)({id:t}),children:r})]})}},1298:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(11527),o=n(92963);const s={paths:{vs:"/Program Files/MonacoEditor/vs"}},a={".whtml":".html"};var r=n(38819),l=n(80437);const c=e=>{let{relatedTarget:t}=e;if(t instanceof HTMLElement){let e;"actions-container"===t.classList.value?e=t.closest(".monaco-menu-container"):"shadow-root-host"===t.classList.value&&t.shadowRoot instanceof ShadowRoot&&(e=t),e instanceof HTMLElement&&e.closest("section")&&e.closest("section")?.parentNode?.prepend(e)}},d=(e,t)=>{if(!t)return[];const{uri:n}=t.getModel()||{},[i]=n?.path.split("|")||[],o="file"===n?.scheme?i:e||l.$Z;return e&&e!==i?[]:[o,t.getValue()]},u=new Set(["json","javascript","typescript","css","sass","less","html","markdown","xml"]),p=e=>u.has(e.toLowerCase()),g=async(e,t)=>{const i=e.toLowerCase();if("json"===i)try{return JSON.stringify(JSON.parse(t),void 0,2)}catch{return t}return(await n.e(854).then(n.t.bind(n,77192,23))).format(t,await(async e=>"javascript"===e||"typescript"===e?{parser:"babel",plugins:[await n.e(7291).then(n.t.bind(n,85630,23))]}:["css","sass","less"].includes(e)?{parser:e,plugins:[await n.e(5807).then(n.t.bind(n,65807,23))]}:"html"===e?{parser:"html",plugins:[await n.e(1762).then(n.t.bind(n,63273,23))]}:"xml"===e?{parser:"xml",plugins:[await n.e(779).then(n.t.bind(n,779,23))]}:"markdown"===e?{parser:"markdown",plugins:[await n.e(6178).then(n.t.bind(n,66977,23))]}:void 0)(i))};var h=n(60396);var f=h.ZP.footer.withConfig({componentId:"sc-e5795db7-0"})`
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
`,m=n(93246),w=n(97147),b=n(59062),v=n(95654),x=n(50959),y=n(11154),k=n(76022);const C=(0,x.memo)((()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"m13.353 1.146 1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z",fillRule:"evenodd"})})));var L=e=>{let{id:t}=e;const{processes:{[t]:n}}=(0,b.z)(),{editor:o,url:s}=n||{},{updateFolder:a,writeFile:r}=(0,w.o)(),{prependFileToTitle:l}=(0,m.Z)(t),[c,u]=(0,x.useState)(""),[h,L]=(0,x.useState)("Ln 1, Col 1"),[j,$]=(0,x.useState)(1);return(0,x.useEffect)((()=>{const e=()=>{const e=o?.getSelection(),{positionColumn:t=0,positionLineNumber:n=0}=e||{},i=e?o?.getModel()?.getValueInRange(e):"";L(`Ln ${n}, Col ${t}${i?` (${i.length} selected)`:""}`)},t=()=>$(o?.getModel()?.getLineCount()||0);o?.onDidChangeModelContent(t),o?.onDidChangeCursorPosition(e),o?.onDidChangeModel((()=>{const n=o?.getModel(),i=n?.getLanguageId();i&&u(window.monaco?.languages.getLanguages().reduce(((e,t)=>{let{id:n,aliases:o}=t;return n===i&&o?.[0]||e}),i)),t(),e()}))}),[o]),(0,i.jsx)(f,{onContextMenuCapture:k.nK,children:o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ol",{children:(0,i.jsxs)("li",{children:["Lines ",j]})}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{className:"clickable",id:"save",children:(0,i.jsx)(y.Z,{onClick:async()=>{const[e,t]=d(s,o);e&&t&&(await r(e,t,!0),a((0,v.dirname)(e),(0,v.basename)(e)),l((0,v.basename)(e)))},...(0,k.PS)("Save"),children:(0,i.jsx)(C,{})})}),s&&p(c)&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(y.Z,{className:"pretty",onClick:async()=>o?.setValue(await g(c,o.getValue())),...(0,k.PS)(`Pretty print ${(0,v.basename)(s)}`),children:"{ }"})}),h&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(y.Z,{onClick:()=>{try{o?.focus(),o?.getAction("editor.action.gotoLine")?.run()}catch{}},...(0,k.PS)("Go to Line/Column"),children:h})}),""!==c&&(0,i.jsx)("li",{children:c})]})]})})};const j=h.ZP.div.withConfig({componentId:"sc-792c2bb4-0"})`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  width: 100%;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 31px)`}};
  }
`;var $=j,S=n(80376),M=n(95164);var T=(e,t,n,i)=>{const{readFile:o,updateFolder:u,writeFile:p}=(0,w.o)(),{argument:g}=(0,b.z)(),{prependFileToTitle:h}=(0,m.Z)(e),[f,y]=(0,x.useState)(),[C,L]=(0,x.useState)(),j=(0,x.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=`${e}|${t}`,i=C?.editor.getModels();return i?.some((e=>e._associatedResource.path===n))?j(e,t+1):C?.Uri.parse(n)}),[C?.Uri,C?.editor]),$=(0,x.useCallback)((async()=>{const e=C?.editor.createModel((await o(t)).toString(),(e=>{const t=a[e]||e;if(!r._.has(t))return"";const{id:n=""}=window.monaco.languages.getLanguages().find((e=>e.extensions?.includes(t)))||{};return n})((0,k.RT)(t)),j(t));return e?.onDidChangeContent((()=>h((0,v.basename)(t),!0))),e}),[j,C?.editor,h,o,t]),T=(0,x.useCallback)((async()=>{C&&f&&t.startsWith("/")&&((0,M.H3)("define"),f.getModel()?.dispose(),f.setModel(await $()),window.setTimeout((()=>(0,M.wz)("define")),2.5*l.i2)),h((0,v.basename)(t||l.$Z))}),[$,f,C,h,t]);(0,x.useEffect)((()=>{C||((0,M.H3)("define"),S._m.config(s),S._m.init().then((e=>{(0,M.wz)("define"),L(e)})))}),[C]),(0,x.useEffect)((()=>{f?.onKeyDown((async e=>{const{ctrlKey:n,code:i,keyCode:o}=e;if(n&&("KeyS"===i||83===o)){e.preventDefault();const[n,i]=d(t,f);n&&"string"===typeof i&&(await p(n,i,!0),u((0,v.dirname)(n),(0,v.basename)(n)),h((0,v.basename)(n)))}}))}),[f,h,u,t,p]),(0,x.useEffect)((()=>{if(C&&!f&&n.current){const t=C.editor.create(n.current,{automaticLayout:!0,theme:"vs-dark"});n.current?.closest("section")?.addEventListener("focus",(()=>t.focus()),{passive:!0}),n.current?.addEventListener("blur",c,{capture:!0,passive:!0}),y(t),g(e,"editor",t),i(!1)}return()=>{f&&C&&(f.getModel()?.dispose(),f.dispose(),(0,M.wz)("define"))}}),[n,f,e,C,g,i]),(0,x.useEffect)((()=>{C&&f&&t&&T()}),[f,T,C,h,t])};var F=e=>{let{id:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{StyledComponent:$,id:t,useHook:T}),(0,i.jsx)(L,{id:t})]})}},13364:function(e,t,n){var i=n(23862),o=n(38167),s=n(69229),a=n(97147),r=n(59062),l=n(31422),c=n(95654),d=n(50959),u=n(80437),p=n(76022);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:g,onDragLeave:h,onDragOver:f,updatePositions:m}=e;const{url:w}=(0,r.z)(),{iconPositions:b,sortOrders:v,setIconPositions:x}=(0,l.k)(),{mkdirRecursive:y,updateFolder:k,writeFile:C}=(0,a.o)(),L=(0,d.useCallback)((async(e,t,n)=>{if(g)if(t){const i=(0,c.join)(u.Ll,e);await y(u.Ll),await C(i,t,!0)&&(n===s.v.UPDATE_URL&&w(g,i),k(u.Ll,e))}else n===s.v.UPDATE_URL&&w(g,e)}),[g,y,k,w,C]),{openTransferDialog:j}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{f?.(e),(0,p.nK)(e)},onDrop:e=>{if(!u.my.has((0,p.RT)(n))){if(m&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,o.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let a=[];if(i){try{a=JSON.parse(i)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[i]);return(0,c.basename)(i)})),(0,p.vi)(n,e.target,b,v,s,a,x)}(0,o.WG)(e,t||L,n,j,Boolean(g))}}}}},93246:function(e,t,n){var i=n(59062),o=n(5530),s=n(50959),a=n(80437);t.Z=e=>{const{title:t}=(0,i.z)(),[n]=e.split(a.CC),{title:r}=o.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,i)=>{const o=n?` - ${n}${i?` ${a.xy}`:""}`:"";t(e,`${r}${o}`)}),[e,r,t]),prependFileToTitle:(0,s.useCallback)(((n,i,o)=>{const s=n?`${i?`${a.xy} `:""}${n}${o?" ":" - "}`:"";t(e,`${s}${r}`)}),[e,r,t])}}},95164:function(e,t,n){n.d(t,{H3:function(){return a},od:function(){return i},wz:function(){return s}});const i=e=>e.forEach((e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}})),o=(e,t)=>{window.lockedGlobals={...window.lockedGlobals,[e]:t}},s=e=>o(e,!0),a=e=>{Object.getOwnPropertyDescriptor(window,e)||(e=>{let t;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:t,set(n){window.lockedGlobals?.[e]||(t=n)}})})(e),o(e,!1)}}}]);