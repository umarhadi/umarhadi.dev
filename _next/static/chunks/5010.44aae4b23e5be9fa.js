"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5010],{5005:function(e,A,r){var t=r(33328);const i=(0,r(74965).ZP)(t.m.li).withConfig({componentId:"sc-93955fe5-0"})`
  display: flex;
  min-width: 0;
  overflow: hidden;
  place-content: center;
  position: relative;
  width: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.maxWidth}};

  &::before {
    background-color: ${e=>{let{$foreground:A,$progress:r,theme:t}=e;return A?r&&r>0&&r<100?t.colors.taskbar.foregroundProgress:t.colors.taskbar.foreground:""}};
    background-image: ${e=>{let{$progress:A,theme:r}=e;return A&&A>0&&A<100?`linear-gradient(to right, ${r.colors.progressBackground} 0% ${A}%, transparent ${A}% 100%)`:""}};
    border-bottom: ${e=>{let{$progress:A,theme:r}=e;return`\n        ${r.sizes.taskbar.entry.borderSize} solid ${A&&A>0&&A<100?r.colors.progress:r.colors.highlight}\n      `}};
    bottom: 0;
    content: "";
    height: ${e=>{let{$foreground:A}=e;return A?"100%":0}};
    margin: ${e=>{let{$foreground:A}=e;return A?"":"0 4px"}};
    position: absolute;
    transition-duration: 0.1s;
    transition-property: ${e=>{let{$foreground:A}=e;return A?"all":"width"}};
    width: ${e=>{let{$foreground:A}=e;return A?"100%":"calc(100% - 8px)"}};
    z-index: -1;
  }

  &:hover {
    &::before {
      background-color: ${e=>{let{$foreground:A,theme:r}=e;return A?r.colors.taskbar.foregroundHover:r.colors.taskbar.hover}};
      height: 100%;
      margin: 0;
      width: 100%;
    }
  }

  &:active {
    &::before {
      background-color: ${e=>{let{$foreground:A,theme:r}=e;return A?r.colors.taskbar.activeForeground:r.colors.taskbar.active}};
    }
  }

  figure {
    align-items: center;
    display: flex;
    margin-bottom: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.borderSize}};
    margin-left: 4px;
    padding: 4px;

    figcaption {
      color: ${e=>{let{theme:A}=e;return A.colors.text}};
      font-size: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.fontSize}};
      margin: 0 4px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    picture {
      height: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.iconSize}};
      position: relative;
      top: 1px;
      width: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.iconSize}};
    }
  }
`;A.Z=i},25010:function(e,A,r){r.r(A),r.d(A,{default:function(){return C}});var t=r(11527),i=r(5005),n=r(74965),o=r(95063);var a=()=>{const{sizes:{taskbar:e}}=(0,n.Fg)();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:o.Nb.WINDOW},variants:{active:{width:e.entry.maxWidth},initial:{width:0}}}},s=r(20168),l=r(80994),g=r(15455),c=r(7211),d=r(99761),u=r(14304),m=r.n(u),h=r(50959),b=r(10217),p=r(78165),f=r(63270);const k=m()((()=>r.e(1858).then(r.bind(r,78759))),{loadableGenerated:{webpack:()=>[78759]}});var C=e=>{let{icon:A,id:r,title:n}=e;const o=(0,l.Z)(r),{foregroundId:u,setForegroundId:m}=(0,c.k)(),C=r===u,{linkElement:z,minimize:E,processes:{[r]:x}}=(0,g.z)(),{minimized:B,progress:$}=x||{},w=(0,h.useCallback)((e=>e&&z(r,"taskbarEntry",e)),[r,z]),[M,Q]=(0,h.useState)(!1),v=()=>Q(!1);return(0,t.jsxs)(i.Z,{$foreground:C,$progress:$,onClick:v,onMouseEnter:()=>Q(!0),onMouseLeave:v,...a(),...(0,s.Z)(r),children:[(0,t.jsx)(d.M,{initial:!1,presenceAffectsLayout:!1,children:M&&(0,t.jsx)(k,{id:r})}),(0,t.jsx)(b.Z,{ref:w,onClick:()=>{(B||C)&&E(r),m(C?o:r)},...(0,f.PS)(n),children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(p.Z,{alt:n,imgSize:16,src:A}),(0,t.jsx)("figcaption",{children:n})]})})]})}},20168:function(e,A,r){r.d(A,{Z:function(){return l}});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC";var i=r(66404),n=r(47927),o=r(15455),a=r(50959),s=r(95063);var l=e=>{const{contextMenu:A}=(0,n.H)(),{onClose:r,onMaximize:l,onMinimize:g}=(0,i.Z)(e),{processes:{[e]:c}}=(0,o.z)(),{allowResizing:d=!0,maximized:u,minimized:m}=c||{};return(0,a.useMemo)((()=>A?.((()=>{const e=u||m;return[{action:m?g:l,disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},{action:g,disabled:m,icon:m?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},d&&{action:l,disabled:e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},s.Os,{action:r,icon:t,label:"Close"}].filter(Boolean)}))),[d,A,u,m,r,l,g])}},66404:function(e,A,r){var t=r(80994),i=r(15455),n=r(7211),o=r(50959);A.Z=e=>{const A=(0,t.Z)(e),{setForegroundId:r,removeFromStack:a}=(0,n.k)(),{closeWithTransition:s,maximize:l,minimize:g}=(0,i.z)();return{onClose:(0,o.useCallback)((()=>{a(e),s(e),r(A)}),[s,e,A,a,r]),onMaximize:()=>l(e),onMinimize:()=>{g(e),r(A)}}}},80994:function(e,A,r){var t=r(15455),i=r(7211);A.Z=e=>{const{stackOrder:A=[]}=(0,i.k)(),{processes:r}=(0,t.z)();return A.find((A=>A!==e&&!r?.[A]?.minimized))||""}}}]);