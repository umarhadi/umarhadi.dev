"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7599],{37599:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(11527),i=n(50891),a=n(94386),s=n(93203);var o=a.ZP.textarea.attrs((()=>({autoComplete:"off",enterKeyHint:"done",maxLength:s.Zv,rows:1,spellCheck:!1}))).withConfig({componentId:"sc-fc41a6f3-0"})`
  border: 1px solid rgb(100, 100, 100);
  font-family: inherit;
  font-size: 11.5px;
  margin-bottom: 2px;
  max-width: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.renameWidth}}px;
  min-height: 19px;
  min-width: 30px;
  overflow: hidden;
  padding: ${e=>{let{theme:t}=e;return`1px ${t.sizes.fileEntry.renamePadding}px`}};
  position: relative;
  resize: none;
  text-align: center;
  top: 2px;
  user-select: text;
  white-space: break-spaces;
  z-index: 1;
`,l=n(5738),u=n(50959),f=n(70286);var c=e=>{let{name:t,path:n,renameFile:c}=e;const h=(0,u.useRef)(null),p=()=>c(n,h.current?.value),{formats:x,sizes:m}=(0,a.Fg)(),d=(0,u.useCallback)((e=>{if(e instanceof HTMLTextAreaElement){const{width:t}=(0,i.oc)(e.value,m.fileEntry.fontSize,x.systemFont);e.setAttribute("style","height: 1px"),e.setAttribute("style",`height: ${e.scrollHeight+2}px; width: ${t+22}px`)}}),[x.systemFont,m.fileEntry.fontSize]);return(0,u.useLayoutEffect)((()=>{d(h.current),h.current?.focus(s.eS),h.current?.setSelectionRange(0,t.length-(0,l.extname)(t).length)}),[t,d]),(0,r.jsx)(o,{ref:h,defaultValue:t,onBlurCapture:p,onClick:f.nK,onDragStart:f.nK,onKeyDown:e=>{let{key:t}=e;"Enter"===t&&p()},onKeyUp:e=>{d(e.target),(0,f.nK)(e)}})}}}]);