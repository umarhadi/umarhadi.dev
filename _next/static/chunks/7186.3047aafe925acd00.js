"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7186,4158],{87186:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(11527),o=n(91515),i=n(6444);var a=i.ZP.div.withConfig({componentId:"sc-4b72021-0"})`
  background-position: 2px 5px;
  background-repeat: no-repeat;
  background-size: 16px;
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 5px;
  padding: 0 22px 2px 24px;
  position: relative;
  width: 100%;

  input {
    background-color: rgb(25, 25, 25);
    border-right: 1px solid rgb(21, 21, 21);
    color: #fff;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 6px);
  }

  img {
    left: 2px;
    position: absolute;
    top: 5px;
  }

  #refresh {
    background-color: rgb(25, 25, 25);
    height: 28px;
    margin: 0;
    position: absolute;
    right: 0;
    stroke: rgb(128, 128, 128);
    stroke-width: 3;
    top: 0;
    width: 28px;

    &:hover {
      background-color: rgb(27, 41, 49);
      border: 1px solid rgb(34, 114, 153);
    }

    &:active {
      background-color: rgb(28, 57, 71);
      border: 1px solid rgb(38, 160, 218);
    }
  }
`,s=n(5623),l=n(50959);var c=e=>{const{contextMenu:t}=(0,s.H)();return(0,l.useMemo)((()=>t?.((()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]))),[e,t])},A=n(31266),u=n(32652),d=n(735),p=n(40688),g=n(50010),h=n(71059),f=n(46429);var x=(0,l.forwardRef)(((e,t)=>{let{id:n}=e;const i=t,{url:s,processes:{[n]:{icon:x,url:m=""}}}=(0,u.z)(),b=(0,d.basename)(m)||h.SP,[w,v]=(0,l.useState)(b),{exists:C,updateFolder:k}=(0,A.o)();return(0,l.useEffect)((()=>{i.current&&(w===m?i.current.select():w===b?window.getSelection()?.removeAllRanges():document.activeElement!==i.current&&v(b))}),[w,i,b,m]),(0,r.jsxs)(a,{children:[(0,r.jsx)(g.Z,{alt:b,imgSize:16,src:x}),(0,r.jsx)("input",{ref:i,"aria-label":"Address",enterKeyHint:"go",onBlurCapture:()=>v(b),onChange:e=>{let{target:t}=e;return v(t.value)},onFocusCapture:()=>v(m),onKeyDown:async e=>{let{key:t}=e;if("Enter"===t&&i.current){const{value:e}=i.current;e&&await C(e)&&s(n,e),i.current.blur()}},spellCheck:!1,type:"text",value:w,...c(m)}),(0,r.jsx)(p.Z,{id:"refresh",onClick:()=>k(m),...(0,f.PS)(`Refresh "${b}" (F5)`),children:(0,r.jsx)(o.hY,{})})]})}));var m=i.ZP.div.withConfig({componentId:"sc-22fbf6bc-0"})`
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 0;
  max-width: 148px;
  padding: 0;
  position: relative;
  width: 100%;

  svg {
    fill: rgb(113, 113, 113);
    height: 12px;
    left: 14px;
    pointer-events: none;
    position: absolute;
    stroke: rgb(113, 113, 113);
    stroke-width: 1;
    top: 8px;
  }

  input {
    background-color: rgb(25, 25, 25);
    color: #fff;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    padding-left: 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`,b=n(99602),w=n(10047),v=n(98224);const C=e=>{let{id:t}=e;const[n,i]=(0,l.useState)(""),a=(0,l.useRef)(!1),{open:c,processes:{[t]:{url:A=""}}}=(0,u.z)(),p=(0,l.useRef)(null),g=(0,v.Rx)(n),{contextMenu:h}=(0,s.H)();return(0,l.useEffect)((()=>{if(p.current&&a.current){const e=()=>[...g.filter((e=>{let{ref:t}=e;return t.startsWith(A)})),...g.filter((e=>{let{ref:t}=e;return!t.startsWith(A)}))].slice(0,9).map((e=>{let{ref:t}=e;return{action:()=>{c((0,w.Wd)((0,f.RT)(t))||b.y[0],{url:t}),i(""),p.current&&(p.current.value="",p.current.blur())},icon:(0,w.sK)((0,f.RT)(t)),label:(0,d.basename)(t)}}));h?.(e).onContextMenuCapture(void 0,p.current.getBoundingClientRect())}}),[h,c,g,A]),(0,l.useEffect)((()=>{p.current&&(p.current.value="",i(""))}),[A]),(0,r.jsxs)(m,{children:[(0,r.jsx)(o.ol,{}),(0,r.jsx)("input",{ref:p,"aria-label":"Search box",enterKeyHint:"search",onChange:e=>{let{target:t}=e;a.current=!0,i(t.value)},onFocus:()=>(0,f.Q4)(v.O9),placeholder:"Search",spellCheck:!1,type:"text"})]})};var k=(0,l.memo)(C);var E=i.ZP.nav.withConfig({componentId:"sc-d58ec72-0"})`
  background-color: rgb(25, 25, 25);
  display: flex;
  height: ${e=>{let{theme:t}=e;return t.sizes.fileExplorer.navBarHeight}};
  button {
    height: 16px;
    margin: 13px 9px;
    width: 16px;

    svg {
      color: #fff;
      fill: currentColor;
      height: 16px;
      width: 16px;

      &:hover {
        color: rgb(50, 152, 254);
        transition: fill 0.5s ease;
      }

      &:active {
        color: rgb(54, 116, 178);
        transition: none;
      }
    }

    &[title^="Up"] {
      margin-right: 8px;
      position: relative;
      right: -8px;
    }

    &[title="Recent locations"] {
      left: 56px;
      position: absolute;

      svg {
        stroke: currentColor;
        stroke-width: 3px;
        width: 6px;
      }
    }

    &:disabled {
      svg {
        color: rgb(140, 140, 140);

        &:hover,
        &:active {
          color: rgb(140, 140, 140);
        }
      }
    }
  }
`,S=n(73452),R=n(6900);var B=(0,l.forwardRef)(((e,t)=>{let{hideSearch:n,id:i}=e;const{url:a,processes:{[i]:{url:c=""}}}=(0,u.z)(),A="/"===c?"":(0,d.basename)((0,d.dirname)(c)),{contextMenu:g}=(0,s.H)(),{canGoBack:m,canGoForward:b,history:w,moveHistory:v,position:C}=(0,R.Z)(c,i),{onContextMenuCapture:B}=(0,l.useMemo)((()=>g?.((()=>w.map(((e,t)=>({action:()=>v(t-C),checked:C===t,label:(0,d.basename)(e)||h.SP,primary:C===t})))))),[g,w,v,C]);return(0,r.jsxs)(E,{...(0,S.Z)(i),onDragOver:f.nK,onDrop:f.nK,children:[(0,r.jsx)(p.Z,{disabled:!m,onClick:()=>v(-1),...(0,f.PS)(m?`Back to ${(0,d.basename)(w[C-1])||h.SP}`:"Back"),children:(0,r.jsx)(o.eJ,{})}),(0,r.jsx)(p.Z,{disabled:!b,onClick:()=>v(1),...(0,f.PS)(b?`Forward to ${(0,d.basename)(w[C+1])||h.SP}`:"Forward"),children:(0,r.jsx)(o.OU,{})}),(0,r.jsx)(p.Z,{disabled:1===w.length,onClick:B,...(0,f.PS)("Recent locations"),children:(0,r.jsx)(o.Rk,{})}),(0,r.jsx)(p.Z,{disabled:"/"===c,onClick:()=>a(i,(0,d.dirname)(c)),...(0,f.PS)("/"===c?"Up one level":`Up to "${""===A?h.SP:A}"`),children:(0,r.jsx)(o.Up,{})}),(0,r.jsx)(x,{ref:t,id:i}),!n&&(0,r.jsx)(k,{id:i})]})})),y=n(24158),j=n(85170),z=n(85495);var M=i.ZP.div.withConfig({componentId:"sc-73f6b36b-0"})`
  ${z.Z} {
    column-gap: 2px;
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.fileExplorer.navBarHeight} - ${t.sizes.fileExplorer.statusBarHeight})`}};
    padding-left: 5px;
    padding-right: 5px;
  }

  ${y.default} {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.fileExplorer.navBarHeight} - ${t.sizes.fileExplorer.statusBarHeight})`}};
  }

  ${j.Z} {
    &:hover {
      &::before {
        border-width: 0;
      }
    }

    &::before {
      border-width: 0;
    }
  }
`,F=n(70239);var U=e=>{let{id:t}=e;const{icon:n,title:o,processes:{[t]:i},url:a}=(0,u.z)(),{componentWindow:s,closing:c,icon:p="",url:g=""}=i||{},{fs:x,rootFs:m}=(0,A.o)(),[b,v]=(0,l.useState)(g),C=(0,l.useRef)(null),k=(0,d.basename)(g),E=Boolean(m?.mntMap[g]&&k),S=(0,l.useCallback)((e=>{e.altKey&&"D"===e.key.toUpperCase()&&((0,f.nK)(e),C?.current?.focus(h.eS))}),[]);return(0,l.useEffect)((()=>{g&&(o(t,k||h.SP),(!p||g!==b||E&&p!==h.iR)&&(E?n(t,"FileSystemAccess"===m?.mntMap[g].getName()?h.iR:h.Wc):x&&(n(t,`/System/Icons/${k?"folder":"pc"}.webp`),(0,w.nR)(x,g).then((e=>{e&&n(t,e)}))),v(g)))}),[b,k,x,p,t,E,m?.mntMap,n,a,o,g]),(0,l.useEffect)((()=>{!s||c||g||(a(t,"/"),n(t,"/System/Icons/pc.webp"))}),[c,t,s,n,a,g]),(0,l.useEffect)((()=>(s?.addEventListener("keydown",S),()=>s?.removeEventListener("keydown",S))),[s,S]),g?(0,r.jsxs)(M,{children:[(0,r.jsx)(B,{ref:C,hideSearch:E,id:t}),(0,r.jsx)(F.Z,{id:t,url:g,view:"icon",showStatusBar:!0})]}):null}},24158:function(e,t,n){n.r(t);const r=n(6444).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=r},73452:function(e,t,n){n.d(t,{Z:function(){return c}});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC";var o=n(361),i=n(5623),a=n(32652),s=n(50959),l=n(71059);var c=e=>{const{contextMenu:t}=(0,i.H)(),{onClose:n,onMaximize:c,onMinimize:A}=(0,o.Z)(e),{processes:{[e]:u}}=(0,a.z)(),{allowResizing:d=!0,maximized:p,minimized:g}=u||{};return(0,s.useMemo)((()=>t?.((()=>{const e=p||g;return[{action:g?A:c,disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},{action:A,disabled:g,icon:g?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},d&&{action:c,disabled:e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},l.Os,{action:n,icon:r,label:"Close"}].filter(Boolean)}))),[d,t,p,g,n,c,A])}},361:function(e,t,n){var r=n(4613),o=n(32652),i=n(64037),a=n(50959);t.Z=e=>{const t=(0,r.Z)(e),{setForegroundId:n,removeFromStack:s}=(0,i.k)(),{closeWithTransition:l,maximize:c,minimize:A}=(0,o.z)();return{onClose:(0,a.useCallback)((()=>{s(e),l(e),n(t)}),[l,e,t,s,n]),onMaximize:()=>c(e),onMinimize:()=>{A(e),n(t)}}}},4613:function(e,t,n){var r=n(32652),o=n(64037);t.Z=e=>{const{stackOrder:t=[]}=(0,o.k)(),{processes:n}=(0,r.z)();return t.find((t=>t!==e&&!n?.[t]?.minimized))||""}},6900:function(e,t,n){var r=n(32652),o=n(50959);t.Z=(e,t)=>{const{url:n}=(0,r.z)(),[i,a]=(0,o.useState)(e),[s,l]=(0,o.useState)((()=>[e])),[c,A]=(0,o.useState)(0),u=(0,o.useCallback)((e=>{const r=c+e;A(r),a(s[r]),n(t,s[r])}),[n,s,t,c]);return(0,o.useEffect)((()=>{e!==i&&(A(c+1),a(e),l([...s.slice(0,c+1),e]))}),[i,s,c,e]),{canGoBack:c>0,canGoForward:c<s.length-1,currentUrl:i,history:s,moveHistory:u,position:c}}},98224:function(e,t,n){n.d(t,{O9:function(){return c},Kk:function(){return p},Rx:function(){return g}});var r=n(31266),o=n(735),i=n(50959),a=JSON.parse('{"I":[".cache",".json",".url"],"K":[".md",".txt",".whtml"]}'),s=n(71059),l=n(46429);const c=["/System/lunr/lunr.min.js"];let A=Object.create(null);const u=async(e,t)=>{if(window.lunr||await(0,l.mb)(c),!t&&!A?.search){const e=await fetch("/.index/search.lunr.json",s.P8);try{A=window.lunr?.Index.load(JSON.parse(await e.text()))}catch{}}const n=t??A;let r=[];try{r=n.search?.(e),0===r?.length&&(r=n.search?.(`${e}*`))}catch{}return r??[]},d=async(e,t)=>{const n=t?._getFs("/")?.fs,r=n?.getOverlayedFileSystems(),i=r?.writable,s=Object.keys(i?._cache?.map??{}).filter((e=>{const t=(0,l.RT)(e);return Boolean(t)&&!a.I.includes(t)})),c=await Promise.all(s.map((async t=>({name:(0,o.basename)(t,(0,o.extname)(t)),path:t,text:a.K.includes((0,l.RT)(t))?(await e(t)).toString():void 0})))),A=window.lunr?.((function(){this.ref("path"),this.field("name"),this.field("text"),c.forEach((e=>this.add(e)))}));return window.lunr?.Index.load(A.toJSON())},p=async(e,t,n)=>{const r=await u(e),o=await d(t,n);return[...r,...await u(e,o)].sort(((e,t)=>t.score-e.score))},g=e=>{const[t,n]=(0,i.useState)([]),{readFile:o,rootFs:a}=(0,r.o)();return(0,i.useEffect)((()=>{(async()=>{e.length>0?(window.lunr||await(0,l.mb)(c),u(e).then(n),d(o,a).then((t=>u(e,t).then((e=>n((t=>[...t,...e].sort(((e,t)=>t.score-e.score))))))))):n([])})()}),[o,a,e]),t}}}]);