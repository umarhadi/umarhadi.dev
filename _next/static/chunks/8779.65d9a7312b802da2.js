"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8779],{28779:function(e,i,t){t.r(i),t.d(i,{default:function(){return f}});var n=t(11527);var r=t(74965).ZP.div.withConfig({componentId:"sc-16d5cff3-0"})`
  #vimjs-canvas {
    image-rendering: pixelated;
  }

  #vimjs-container {
    height: 100%;
    width: 100%;
  }

  #vimjs-file {
    display: none;
  }

  #vimjs-font-test {
    position: absolute;
    visibility: hidden;
  }
`,a=t(67398),o=t(92588),s=t(74479),l=t(15455),c=t(82296),u=t(50959),d=t(95063),m=t(63270),p=t(55872).Buffer;var f=e=>{let{id:i}=e;const{closeWithTransition:t,processes:{[i]:f}}=(0,l.z)(),{readFile:v,updateFolder:w,writeFile:b}=(0,s.o)(),{prependFileToTitle:h}=(0,o.Z)(i),{libs:$=[],url:g=""}=f||{},[j,x]=(0,u.useState)([]),y=(0,u.useRef)(!1),F=(0,u.useCallback)((async()=>{const e=g||d.$Z,[,...n]=e.split("/");let r="";1===n.length&&(r="/root"),window.VimWrapperModule={},await(0,m.mb)($,!1,!!window.VimWrapperModule);const a=g?await v(e):p.from("");window.VimWrapperModule?.init?.({VIMJS_ALLOW_EXIT:!0,arguments:[`${r}${e}`],containerWindow:document.querySelector("#vimjs-container")?.closest("section"),memoryInitializerPrefixURL:"/Program Files/Vim.js/",postRun:[()=>{y.current=!1}],preRun:[()=>{let e="";[r,...n].forEach(((i,t,r)=>{let{[t+1]:o}=r;o&&t+1!==n.length?(window.VimWrapperModule?.VimModule?.FS_createPath?.(e,o,!0,!0),e+=`/${o}`):e?window.VimWrapperModule?.VimModule?.FS_createDataFile?.(e,i,a,!0,!0):e=i}))}],print:console.info,printErr:console.info,quitCallback:()=>t(i),writeCallback:i=>x((t=>[...t,{buffer:p.from(i),url:e}]))}),h((0,c.basename)(e))}),[t,i,$,h,v,g]);return(0,u.useEffect)((()=>{j.length>0&&([...j].forEach((e=>{let{buffer:i,url:t}=e;b(t,i,!0),w((0,c.dirname)(t),(0,c.basename)(t))})),x([]))}),[w,j,b]),(0,u.useEffect)((()=>(y.current||(y.current=!0,F()),()=>{!y&&window.VimWrapperModule?.VimModule?.asmLibraryArg?._vimjs_prepare_exit()&&window.VimWrapperModule?.VimModule?.exit?.()})),[F]),(0,n.jsxs)(r,{children:[(0,n.jsx)("div",{id:"vimjs-container",...(0,a.Z)({id:i}),children:(0,n.jsx)("canvas",{id:"vimjs-canvas",onContextMenuCapture:m.nK})}),(0,n.jsx)("div",{id:"vimjs-font-test"})]})}},67398:function(e,i,t){var n=t(2832),r=t(45761),a=t(8082),o=t(74479),s=t(15455),l=t(7211),c=t(82296),u=t(50959),d=t(95063),m=t(63270);i.Z=e=>{let{callback:i,directory:t=d.Ll,id:p,onDragLeave:f,onDragOver:v,updatePositions:w}=e;const{url:b}=(0,s.z)(),{iconPositions:h,sortOrders:$,setIconPositions:g}=(0,l.k)(),{mkdirRecursive:j,updateFolder:x,writeFile:y}=(0,o.o)(),F=(0,u.useCallback)((async(e,i,t)=>{if(p)if(i){const n=(0,c.join)(d.Ll,e);await j(d.Ll),await y(n,i,!0)&&(t===a.v.UPDATE_URL&&b(p,n),x(d.Ll,e))}else t===a.v.UPDATE_URL&&b(p,e)}),[p,j,x,b,y]),{openTransferDialog:L}=(0,n.Z)();return{onDragLeave:f,onDragOver:e=>{v?.(e),(0,m.nK)(e)},onDrop:e=>{if(w&&e.target instanceof HTMLElement){const{files:i,text:n}=(0,r.p4)(e);if(0===i.length&&""===n)return;const a={x:e.clientX,y:e.clientY};let o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=i instanceof FileList?[...i].map((e=>e.name)):[...i].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!h[`${t}/${e}`])return e;let i=0,n="";do{i+=1,n=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${i})${(0,c.extname)(e)}`}while(h[n]);return(0,c.basename)(n)})),(0,m.vi)(t,e.target,h,$,a,o,g)}(0,r.WG)(e,i||F,t,L,Boolean(p))}}}},92588:function(e,i,t){var n=t(15455),r=t(86870),a=t(50959),o=t(95063);i.Z=e=>{const{title:i}=(0,n.z)(),[t]=e.split(o.CC),{title:s}=r.Z[t]||{};return{appendFileToTitle:(0,a.useCallback)(((t,n)=>{const r=t?` - ${t}${n?` ${o.xy}`:""}`:"";i(e,`${s}${r}`)}),[e,s,i]),prependFileToTitle:(0,a.useCallback)(((t,n)=>{const r=t?`${n?`${o.xy} `:""}${t} - `:"";i(e,`${r}${s}`)}),[e,s,i])}}}}]);