"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{92963:function(e,t,n){var o=n(11527),i=n(13364),a=n(59062),r=n(92866),s=n.n(r),l=n(50959);const c=s()((()=>n.e(2609).then(n.bind(n,52609))),{loadableGenerated:{webpack:()=>[52609]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:r,children:s}=e;const{processes:{[t]:{url:d=""}={}}}=(0,a.z)(),u=(0,l.useRef)(null),[m,p]=(0,l.useState)(!0),f=(0,l.useMemo)((()=>({contain:"strict",visibility:m?"hidden":"visible"})),[m]);return n(t,d,u,p,m),(0,o.jsxs)(o.Fragment,{children:[m&&(0,o.jsx)(c,{}),(0,o.jsx)(r,{ref:u,style:f,...(0,i.Z)({id:t}),children:s})]})}},13:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=n(11527),i=n(92963);var a=n(60396).ZP.div.withConfig({componentId:"sc-7a94dddb-0"})`
  height: 100%;

  [role="application"] {
    border-radius: 0;
    height: 100% !important;

    button:disabled {
      pointer-events: none;
    }

    &[aria-disabled="true"] {
      .tox-editor-header {
        height: 39px;
        overflow: hidden;
        padding: 0;
        position: relative;

        &::before {
          background-color: rgba(255, 255, 255, 80%);
          content: "Click to switch to design mode.";
          cursor: pointer;
          display: flex;
          height: calc(100% - 1px);
          place-content: center;
          place-items: center;
          position: absolute;
          text-shadow: 0 0 25px rgba(0, 0, 0, 80%);
          width: 100%;
          z-index: 1;
        }

        .tox-toolbar-overlord {
          display: none;
        }
      }
    }
  }
`,r=n(80437);const s={base_url:"/Program Files/TinyMCE/",branding:!1,draggable_modal:!0,image_advtab:!0,plugins:"\n  code help image link lists media\n  preview save searchreplace table wordcount",promotion:!1,suffix:".min",toolbar:"\n  save undo redo | formatselect | bold italic underline | forecolor backcolor |\n  alignleft aligncenter alignright | bullist outdent indent | code | help"},l=`${r.Ll}/New Rich Text Document.whtml`,c=e=>e?.mode.isReadOnly()||!e?.getContent();var d=n(89933),u=n(13364),m=n(93246),p=n(97147),f=n(59062),h=n(31422),b=n(95654),v=n(50959),w=n(76022);var g=(e,t,o,i)=>{const{open:a,processes:{[e]:{libs:g=[]}={}}={},url:y}=(0,f.z)(),[x,k]=(0,v.useState)(),{prependFileToTitle:E}=(0,m.Z)(e),{readFile:T,stat:$,updateFolder:C,writeFile:L}=(0,p.o)(),{onDragOver:D,onDrop:F}=(0,u.Z)({id:e}),{setForegroundId:R}=(0,h.k)(),S=(0,v.useCallback)((async e=>{const t=new Date((0,d.GA)(e,await $(e))),n=new Intl.DateTimeFormat(r.ZW,{dateStyle:"medium"}).format(t);E(`${(0,b.basename)(e,(0,b.extname)(e))} (${n})`)}),[E,$]),W=(0,v.useCallback)((()=>{const e=o.current?.querySelector("iframe");e?.contentWindow&&[...e.contentWindow.document.links].forEach((e=>e.addEventListener("click",(t=>{const n=e.dataset.mceHref||"";if(""===(0,b.relative)(n.startsWith("/")?n:`/${n}`,e.pathname)&&x?.mode.isReadOnly()){(0,w.nK)(t);const n=(0,d.Wd)((0,w.RT)(e.pathname));n&&a(n,{url:e.pathname})}}))))}),[o,x?.mode,a]),Z=(0,v.useCallback)((async()=>{if(x){const e=await T(t);if(e.length>0&&(e=>{const t=e.editorContainer?.querySelector(".tox-editor-header");t instanceof HTMLDivElement&&t.addEventListener("click",(()=>{t.removeAttribute("title"),e.mode.set("design")}),r.K7),e.mode.set("readonly")})(x),".rtf"===(0,w.RT)(t)){const{RTFJS:t}=await Promise.all([n.e(4234),n.e(4045)]).then(n.bind(n,94045)),o=new t.Document(e),i=await o.render();x.setContent(i.map((e=>e.outerHTML)).join(""))}else x.setContent(e.toString());W(),S(t),x.iframeElement?.contentDocument&&(x.iframeElement.contentDocument.documentElement.scrollTop=0)}}),[x,W,T,S,t]);(0,v.useEffect)((()=>{x&&x.options.set("save_onsavecallback",(async()=>{const e={closeButton:!0,text:"Successfully saved.",timeout:5e3,type:"success"},n=t||l;try{await L(".rtf"===(0,w.RT)(n)?n.replace(".rtf",".whtml"):n,x.getContent(),!0),C((0,b.dirname)(n),(0,b.basename)(n)),S(n)}catch{e.text="Error occurred while saving.",e.type="error"}x.notificationManager.open(e)}))}),[x,C,S,t,L]),(0,v.useEffect)((()=>{x||(0,w.mb)(g).then((()=>{window.tinymce&&o.current&&(window.tinymce.remove(),window.tinymce.init({selector:`.${[...o.current.classList].join(".")} div`,setup:t=>{t.on("ExecCommand",(t=>{let{command:n}=t;"mceNewDocument"===n&&(y(e,""),E(""))}))},...s}).then((t=>{let[n]=t;const a=o.current?.querySelector("iframe");a?.contentWindow&&(a.contentWindow.addEventListener("dragover",(e=>{c(n)&&D(e)})),a.contentWindow.addEventListener("drop",(e=>{c(n)&&F(e)})),a.contentWindow.addEventListener("blur",(()=>R((t=>t===e?"":t)))),a.contentWindow.addEventListener("focus",(()=>R(e)))),k(n),i(!1)})))}))}),[o,x,e,g,D,F,E,R,i,y]),(0,v.useEffect)((()=>{t&&x&&Z()}),[x,Z,T,t]),(0,v.useEffect)((()=>()=>{window.setTimeout((()=>x?.destroy()),0)}),[x])};var y=e=>{let{id:t}=e;return(0,o.jsx)(i.Z,{StyledComponent:a,id:t,useHook:g,children:(0,o.jsx)("div",{})})}},13364:function(e,t,n){var o=n(23862),i=n(38167),a=n(69229),r=n(97147),s=n(59062),l=n(31422),c=n(95654),d=n(50959),u=n(80437),m=n(76022);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:p,onDragLeave:f,onDragOver:h,updatePositions:b}=e;const{url:v}=(0,s.z)(),{iconPositions:w,sortOrders:g,setIconPositions:y}=(0,l.k)(),{mkdirRecursive:x,updateFolder:k,writeFile:E}=(0,r.o)(),T=(0,d.useCallback)((async(e,t,n)=>{if(p)if(t){const o=(0,c.join)(u.Ll,e);await x(u.Ll),await E(o,t,!0)&&(n===a.v.UPDATE_URL&&v(p,o),k(u.Ll,e))}else n===a.v.UPDATE_URL&&v(p,e)}),[p,x,k,v,E]),{openTransferDialog:$}=(0,o.Z)();return{onDragLeave:f,onDragOver:e=>{h?.(e),(0,m.nK)(e)},onDrop:e=>{if(!u.my.has((0,m.RT)(n))){if(b&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,i.p4)(e);if(0===t.length&&""===o)return;const a={x:e.clientX,y:e.clientY};let r=[];if(o){try{r=JSON.parse(o)}catch{}if(!Array.isArray(r))return;const[e]=r;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;r=r.map((e=>(0,c.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,o="";do{t+=1,o=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[o]);return(0,c.basename)(o)})),(0,m.vi)(n,e.target,w,g,a,r,y)}(0,i.WG)(e,t||T,n,$,Boolean(p))}}}}},93246:function(e,t,n){var o=n(59062),i=n(5530),a=n(50959),r=n(80437);t.Z=e=>{const{title:t}=(0,o.z)(),[n]=e.split(r.CC),{title:s}=i.Z[n]||{};return{appendFileToTitle:(0,a.useCallback)(((n,o)=>{const i=n?` - ${n}${o?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,a.useCallback)(((n,o,i)=>{const a=n?`${o?`${r.xy} `:""}${n}${i?" ":" - "}`:"";t(e,`${a}${s}`)}),[e,s,t])}}}}]);