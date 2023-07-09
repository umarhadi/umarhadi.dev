"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3906],{41311:function(e,t,n){var o=n(11527),i=n(87373),a=n(7372),r=n(38974),s=n.n(r),l=n(50959);const c=s()((()=>n.e(2817).then(n.bind(n,62817))),{loadableGenerated:{webpack:()=>[62817]}}),d=e=>{let{id:t,useHook:n,StyledComponent:r,children:s}=e;const{processes:{[t]:{url:d=""}={}}}=(0,a.z)(),u=(0,l.useRef)(null),[m,p]=(0,l.useState)(!0),f=(0,l.useMemo)((()=>({contain:"strict",visibility:m?"hidden":"visible"})),[m]);return n({containerRef:u,id:t,loading:m,setLoading:p,url:d}),(0,o.jsxs)(o.Fragment,{children:[m&&(0,o.jsx)(c,{}),(0,o.jsx)(r,{ref:u,style:f,...(0,i.Z)({id:t}),children:s})]})};t.Z=(0,l.memo)(d)},93906:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=n(11527),i=n(41311);var a=n(94386).ZP.div.withConfig({componentId:"sc-7a94dddb-0"})`
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
`,r=n(93203);const s={base_url:"/Program Files/TinyMCE/",branding:!1,draggable_modal:!0,image_advtab:!0,plugins:"\n  code help image link lists media\n  preview save searchreplace table wordcount",promotion:!1,suffix:".min",toolbar:"\n  save undo redo | formatselect | bold italic underline | forecolor backcolor |\n  alignleft aligncenter alignright | bullist outdent indent | code | help"},l=`${r.Ll}/New Rich Text Document.whtml`,c=e=>e?.mode.isReadOnly()||!e?.getContent();var d=n(50891),u=n(87373),m=n(8437),p=n(46948),f=n(7372),h=n(87966),b=n(5738),v=n(50959),g=n(70286);var w=e=>{let{containerRef:t,id:o,setLoading:i,url:a}=e;const{open:w,processes:{[o]:{libs:y=[]}={}}={},url:x}=(0,f.z)(),[k,E]=(0,v.useState)(),{prependFileToTitle:L}=(0,m.Z)(o),{readFile:T,stat:$,updateFolder:C,writeFile:D}=(0,p.o)(),{onDragOver:F,onDrop:R}=(0,u.Z)({id:o}),{setForegroundId:S}=(0,h.k)(),W=(0,v.useCallback)((async e=>{const t=new Date((0,d.GA)(e,await $(e))),n=new Intl.DateTimeFormat(r.ZW,{dateStyle:"medium"}).format(t);L(`${(0,b.basename)(e,(0,b.extname)(e))} (${n})`)}),[L,$]),Z=(0,v.useCallback)((()=>{const e=t.current?.querySelector("iframe");e?.contentWindow&&[...e.contentWindow.document.links].forEach((e=>e.addEventListener("click",(t=>{const n=e.dataset.mceHref||"";if(""===(0,b.relative)(n.startsWith("/")?n:`/${n}`,e.pathname)&&k?.mode.isReadOnly()){(0,g.nK)(t);const n=(0,d.Wd)((0,g.RT)(e.pathname));n&&w(n,{url:e.pathname})}}))))}),[t,k?.mode,w]),_=(0,v.useCallback)((async()=>{if(k){const e=await T(a);if(e.length>0&&(e=>{const t=e.editorContainer?.querySelector(".tox-editor-header");t instanceof HTMLDivElement&&t.addEventListener("click",(()=>{t.removeAttribute("title"),e.mode.set("design")}),r.K7),e.mode.set("readonly")})(k),".rtf"===(0,g.RT)(a)){const{RTFJS:t}=await Promise.all([n.e(4234),n.e(4045)]).then(n.bind(n,94045)),o=new t.Document(e),i=await o.render();k.setContent(i.map((e=>e.outerHTML)).join(""))}else k.setContent(e.toString());Z(),W(a),k.iframeElement?.contentDocument&&(k.iframeElement.contentDocument.documentElement.scrollTop=0)}}),[k,Z,T,W,a]);(0,v.useEffect)((()=>{k&&k.options.set("save_onsavecallback",(async()=>{const e={closeButton:!0,text:"Successfully saved.",timeout:5e3,type:"success"},t=a||l;try{await D(".rtf"===(0,g.RT)(t)?t.replace(".rtf",".whtml"):t,k.getContent(),!0),C((0,b.dirname)(t),(0,b.basename)(t)),W(t)}catch{e.text="Error occurred while saving.",e.type="error"}k.notificationManager.open(e)}))}),[k,C,W,a,D]),(0,v.useEffect)((()=>{k||(0,g.mb)(y).then((()=>{window.tinymce&&t.current&&(window.tinymce.remove(),window.tinymce.init({selector:`.${[...t.current.classList].join(".")} div`,setup:e=>{e.on("ExecCommand",(e=>{let{command:t}=e;"mceNewDocument"===t&&(x(o,""),L(""))}))},...s}).then((e=>{let[n]=e;const a=t.current?.querySelector("iframe");a?.contentWindow&&(a.contentWindow.addEventListener("dragover",(e=>{c(n)&&F(e)})),a.contentWindow.addEventListener("drop",(e=>{c(n)&&R(e)})),a.contentWindow.addEventListener("blur",(()=>S((e=>e===o?"":e)))),a.contentWindow.addEventListener("focus",(()=>S(o)))),E(n),i(!1)})))}))}),[t,k,o,y,F,R,L,S,i,x]),(0,v.useEffect)((()=>{a&&k&&_()}),[k,_,T,a]),(0,v.useEffect)((()=>()=>{window.setTimeout((()=>k?.destroy()),0)}),[k])};var y=e=>{let{id:t}=e;return(0,o.jsx)(i.Z,{StyledComponent:a,id:t,useHook:w,children:(0,o.jsx)("div",{})})}},87373:function(e,t,n){var o=n(54660),i=n(39397),a=n(22449),r=n(46948),s=n(7372),l=n(87966),c=n(5738),d=n(50959),u=n(93203),m=n(70286);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:p,onDragLeave:f,onDragOver:h,updatePositions:b}=e;const{url:v}=(0,s.z)(),{iconPositions:g,sortOrders:w,setIconPositions:y}=(0,l.k)(),{mkdirRecursive:x,updateFolder:k,writeFile:E}=(0,r.o)(),L=(0,d.useCallback)((async(e,t,n)=>{if(p)if(t){const o=(0,c.join)(u.Ll,e);await x(u.Ll),await E(o,t,!0)&&(n===a.v.UPDATE_URL&&v(p,o),k(u.Ll,e))}else n===a.v.UPDATE_URL&&v(p,e)}),[p,x,k,v,E]),{openTransferDialog:T}=(0,o.Z)();return{onDragLeave:f,onDragOver:e=>{h?.(e),(0,m.nK)(e)},onDrop:e=>{if(!u.my.has((0,m.RT)(n))){if(b&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,i.p4)(e);if(0===t.length&&""===o)return;const a={x:e.clientX,y:e.clientY};let r=[];if(o){try{r=JSON.parse(o)}catch{}if(!Array.isArray(r))return;const[e]=r;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;r=r.map((e=>(0,c.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!g[`${n}/${e}`])return e;let t=0,o="";do{t+=1,o=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(g[o]);return(0,c.basename)(o)})),(0,m.vi)(n,e.target,g,w,a,r,y)}(0,i.WG)(e,t||L,n,T,Boolean(p))}}}}},8437:function(e,t,n){var o=n(7372),i=n(50106),a=n(50959),r=n(93203);t.Z=e=>{const{title:t}=(0,o.z)(),[n]=e.split(r.CC),{title:s}=i.Z[n]||{};return{appendFileToTitle:(0,a.useCallback)(((n,o)=>{const i=n?` - ${n}${o?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,a.useCallback)(((n,o,i)=>{const a=n?`${o?`${r.xy} `:""}${n}${i?" ":" - "}`:"";t(e,`${a}${s}`)}),[e,s,t])}}}}]);