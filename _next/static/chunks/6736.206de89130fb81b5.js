"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6736],{41311:function(e,t,n){var i=n(11527),o=n(87373),s=n(7372),a=n(38974),r=n.n(a),l=n(50959);const c=r()((()=>n.e(2817).then(n.bind(n,62817))),{loadableGenerated:{webpack:()=>[62817]}}),d=e=>{let{id:t,useHook:n,StyledComponent:a,children:r}=e;const{processes:{[t]:{url:d=""}={}}}=(0,s.z)(),u=(0,l.useRef)(null),[p,g]=(0,l.useState)(!0),f=(0,l.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return n({containerRef:u,id:t,loading:p,setLoading:g,url:d}),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(c,{}),(0,i.jsx)(a,{ref:u,style:f,...(0,o.Z)({id:t}),children:r})]})};t.Z=(0,l.memo)(d)},6736:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(11527),o=n(41311);const s={paths:{vs:"/Program Files/MonacoEditor/vs"}},a={".whtml":".html"};var r=n(99890),l=n(93203);const c=e=>{let{relatedTarget:t}=e;if(t instanceof HTMLElement){let e;"actions-container"===t.classList.value?e=t.closest(".monaco-menu-container"):"shadow-root-host"===t.classList.value&&t.shadowRoot instanceof ShadowRoot&&(e=t),e instanceof HTMLElement&&e.closest("section")&&e.closest("section")?.parentNode?.prepend(e)}},d=(e,t)=>{if(!t)return[];const{uri:n}=t.getModel()||{},[i]=n?.path.split("|")||[],o="file"===n?.scheme?i:e||l.$Z;return e&&e!==i?[]:[o,t.getValue()]},u=new Set(["json","javascript","typescript","css","sass","less","html","markdown","xml"]),p=e=>u.has(e.toLowerCase()),g=async(e,t)=>{const i=e.toLowerCase();if("json"===i)try{return JSON.stringify(JSON.parse(t),void 0,2)}catch{return t}return(await n.e(854).then(n.t.bind(n,77192,23))).format(t,await(async e=>"javascript"===e||"typescript"===e?{parser:"babel",plugins:[await n.e(7291).then(n.t.bind(n,85630,23))]}:["css","sass","less"].includes(e)?{parser:e,plugins:[await n.e(5807).then(n.t.bind(n,65807,23))]}:"html"===e?{parser:"html",plugins:[await n.e(1762).then(n.t.bind(n,63273,23))]}:"xml"===e?{parser:"xml",plugins:[await n.e(779).then(n.t.bind(n,779,23))]}:"markdown"===e?{parser:"markdown",plugins:[await n.e(6178).then(n.t.bind(n,66977,23))]}:void 0)(i))};var f=n(94386);var h=f.ZP.footer.withConfig({componentId:"sc-e5795db7-0"})`
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
`,m=n(8437),w=n(46948),b=n(7372),v=n(5738),x=n(50959),y=n(34414),k=n(70286);const C=(0,x.memo)((()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"m13.353 1.146 1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z",fillRule:"evenodd"})})));var L=e=>{let{id:t}=e;const{processes:{[t]:n}}=(0,b.z)(),{editor:o,url:s}=n||{},{updateFolder:a,writeFile:r}=(0,w.o)(),{prependFileToTitle:l}=(0,m.Z)(t),[c,u]=(0,x.useState)(""),[f,L]=(0,x.useState)("Ln 1, Col 1"),[j,$]=(0,x.useState)(1);return(0,x.useEffect)((()=>{const e=()=>{const e=o?.getSelection(),{positionColumn:t=0,positionLineNumber:n=0}=e||{},i=e?o?.getModel()?.getValueInRange(e):"";L(`Ln ${n}, Col ${t}${i?` (${i.length} selected)`:""}`)},t=()=>$(o?.getModel()?.getLineCount()||0);o?.onDidChangeModelContent(t),o?.onDidChangeCursorPosition(e),o?.onDidChangeModel((()=>{const n=o?.getModel(),i=n?.getLanguageId();i&&u(window.monaco?.languages.getLanguages().reduce(((e,t)=>{let{id:n,aliases:o}=t;return n===i&&o?.[0]||e}),i)),t(),e()}))}),[o]),(0,i.jsx)(h,{onContextMenuCapture:k.nK,children:o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ol",{children:(0,i.jsxs)("li",{children:["Lines ",j]})}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{className:"clickable",id:"save",children:(0,i.jsx)(y.Z,{onClick:async()=>{const[e,t]=d(s,o);e&&t&&(await r(e,t,!0),a((0,v.dirname)(e),(0,v.basename)(e)),l((0,v.basename)(e)))},...(0,k.PS)("Save"),children:(0,i.jsx)(C,{})})}),s&&p(c)&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(y.Z,{className:"pretty",onClick:async()=>o?.setValue(await g(c,o.getValue())),...(0,k.PS)(`Pretty print ${(0,v.basename)(s)}`),children:"{ }"})}),f&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(y.Z,{onClick:()=>{try{o?.focus(),o?.getAction("editor.action.gotoLine")?.run()}catch{}},...(0,k.PS)("Go to Line/Column"),children:f})}),""!==c&&(0,i.jsx)("li",{children:c})]})]})})};const j=f.ZP.div.withConfig({componentId:"sc-792c2bb4-0"})`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  width: 100%;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 31px)`}};
  }
`;var $=j,S=n(80376),M=n(18167);var T=e=>{let{containerRef:t,id:n,setLoading:i,url:o}=e;const{readFile:u,updateFolder:p,writeFile:g}=(0,w.o)(),{argument:f}=(0,b.z)(),{prependFileToTitle:h}=(0,m.Z)(n),[y,C]=(0,x.useState)(),[L,j]=(0,x.useState)(),$=(0,x.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=`${e}|${t}`,i=L?.editor.getModels();return i?.some((e=>e._associatedResource.path===n))?$(e,t+1):L?.Uri.parse(n)}),[L?.Uri,L?.editor]),T=(0,x.useCallback)((async()=>{const e=L?.editor.createModel((await u(o)).toString(),(e=>{const t=a[e]||e;if(!r._.has(t))return"";const{id:n=""}=window.monaco.languages.getLanguages().find((e=>e.extensions?.includes(t)))||{};return n})((0,k.RT)(o)),$(o));return e?.onDidChangeContent((()=>h((0,v.basename)(o),!0))),e}),[$,L?.editor,h,u,o]),F=(0,x.useCallback)((async()=>{L&&y&&o.startsWith("/")&&((0,M.H3)("define"),y.getModel()?.dispose(),y.setModel(await T()),window.setTimeout((()=>(0,M.wz)("define")),2.5*l.i2)),h((0,v.basename)(o||l.$Z))}),[T,y,L,h,o]);(0,x.useEffect)((()=>{L||((0,M.H3)("define"),S._m.config(s),S._m.init().then((e=>{(0,M.wz)("define"),j(e)})))}),[L]),(0,x.useEffect)((()=>{y?.onKeyDown((async e=>{const{ctrlKey:t,code:n,keyCode:i}=e;if(t&&("KeyS"===n||83===i)){e.preventDefault();const[t,n]=d(o,y);t&&"string"===typeof n&&(await g(t,n,!0),p((0,v.dirname)(t),(0,v.basename)(t)),h((0,v.basename)(t)))}}))}),[y,h,p,o,g]),(0,x.useEffect)((()=>{if(L&&!y&&t.current){const e=L.editor.create(t.current,{automaticLayout:!0,theme:"vs-dark"});t.current?.closest("section")?.addEventListener("focus",(()=>e.focus()),{passive:!0}),t.current?.addEventListener("blur",c,{capture:!0,passive:!0}),C(e),f(n,"editor",e),i(!1)}return()=>{y&&L&&(y.getModel()?.dispose(),y.dispose(),(0,M.wz)("define"))}}),[t,y,n,L,f,i]),(0,x.useEffect)((()=>{L&&y&&o&&F()}),[y,F,L,h,o])};var F=e=>{let{id:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{StyledComponent:$,id:t,useHook:T}),(0,i.jsx)(L,{id:t})]})}},87373:function(e,t,n){var i=n(54660),o=n(39397),s=n(22449),a=n(46948),r=n(7372),l=n(87966),c=n(5738),d=n(50959),u=n(93203),p=n(70286);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:g,onDragLeave:f,onDragOver:h,updatePositions:m}=e;const{url:w}=(0,r.z)(),{iconPositions:b,sortOrders:v,setIconPositions:x}=(0,l.k)(),{mkdirRecursive:y,updateFolder:k,writeFile:C}=(0,a.o)(),L=(0,d.useCallback)((async(e,t,n)=>{if(g)if(t){const i=(0,c.join)(u.Ll,e);await y(u.Ll),await C(i,t,!0)&&(n===s.v.UPDATE_URL&&w(g,i),k(u.Ll,e))}else n===s.v.UPDATE_URL&&w(g,e)}),[g,y,k,w,C]),{openTransferDialog:j}=(0,i.Z)();return{onDragLeave:f,onDragOver:e=>{h?.(e),(0,p.nK)(e)},onDrop:e=>{if(!u.my.has((0,p.RT)(n))){if(m&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,o.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let a=[];if(i){try{a=JSON.parse(i)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[i]);return(0,c.basename)(i)})),(0,p.vi)(n,e.target,b,v,s,a,x)}(0,o.WG)(e,t||L,n,j,Boolean(g))}}}}},8437:function(e,t,n){var i=n(7372),o=n(50106),s=n(50959),a=n(93203);t.Z=e=>{const{title:t}=(0,i.z)(),[n]=e.split(a.CC),{title:r}=o.Z[n]||{};return{appendFileToTitle:(0,s.useCallback)(((n,i)=>{const o=n?` - ${n}${i?` ${a.xy}`:""}`:"";t(e,`${r}${o}`)}),[e,r,t]),prependFileToTitle:(0,s.useCallback)(((n,i,o)=>{const s=n?`${i?`${a.xy} `:""}${n}${o?" ":" - "}`:"";t(e,`${s}${r}`)}),[e,r,t])}}},18167:function(e,t,n){n.d(t,{H3:function(){return a},od:function(){return i},wz:function(){return s}});const i=e=>e.forEach((e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}})),o=(e,t)=>{window.lockedGlobals={...window.lockedGlobals,[e]:t}},s=e=>o(e,!0),a=e=>{Object.getOwnPropertyDescriptor(window,e)||(e=>{let t;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:t,set(n){window.lockedGlobals?.[e]||(t=n)}})})(e),o(e,!1)}}}]);