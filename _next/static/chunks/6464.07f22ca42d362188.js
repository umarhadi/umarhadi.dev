"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6464],{49908:function(e,t,i){var n=i(11527),o=i(99709),r=i(97057),a=i(33320),s=i.n(a),l=i(50959);const c=s()((()=>i.e(2399).then(i.bind(i,12399))),{loadableGenerated:{webpack:()=>[12399]}});t.Z=e=>{let{id:t,useHook:i,StyledComponent:a,children:s}=e;const{processes:{[t]:{url:u=""}={}}}=(0,r.z)(),h=(0,l.useRef)(null),[d,p]=(0,l.useState)(!0),f=(0,l.useMemo)((()=>({contain:"strict",visibility:d?"hidden":"visible"})),[d]);return i(t,u,h,p,d),(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(c,{}),(0,n.jsx)(a,{ref:h,style:f,...(0,o.Z)({id:t}),children:s})]})}},86464:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var n=i(11527),o=i(49908);var r=i(79416).ZP.div.withConfig({componentId:"sc-ff609c9c-0"})`
  canvas {
    background-color: #000;
    height: auto !important;
    width: auto !important;
  }

  div {
    font-family: "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    position: relative;
    white-space: pre;
  }
`;const a={autostart:!0,bios:{url:"/Program Files/Virtual x86/bios/seabios.bin"},log_level:0,network_relay_url:"wss://relay.widgetry.org/",vga_bios:{url:"/Program Files/Virtual x86/bios/vgabios.bin"},wasm_path:"/Program Files/Virtual x86/v86.wasm"},s=new Set([160,180,200,320,360,400,720,1200,1440,1722,2880]),l=(e,t)=>".bin"===e?"bzimage":(e=>s.has(e>>10)&&0===(1023&e)||512===e)(t)?"fda":"hda";var c=i(51811),u=i(50959);const h="screen-set-size-graphical",d="screen-set-size-text";var p=(e,t,i)=>{const{updateWindowSize:n}=(0,c.Z)(e);(0,u.useEffect)((()=>{const e=e=>{let[t,i]=e;return n(i,t)},o=e=>{let[,i]=e;const{height:o,width:r}=t.current?.querySelector("span:last-of-type")?.getBoundingClientRect()||{};o&&r&&n(i*o,r)};return i?.add_listener(h,e),i?.add_listener(d,o),()=>{i?.remove_listener(h,e),i?.remove_listener(d,o)}}),[i,t,n])},f=i(82034),m=i(14762),g=i(31506),w=i(97057),b=i(6733),x=i(11523),v=i(44558),y=i(46428),T=i(55872).Buffer;var _=(e,t,i,n,o)=>{const{processes:{[e]:r}}=(0,w.z)(),{foregroundId:s}=(0,b.k)(),{closing:c,libs:h=[]}=r||{},{appendFileToTitle:d}=(0,f.Z)(e),_=(0,u.useRef)(!1),[k,z]=(0,u.useState)({}),{exists:C,mkdirRecursive:$,readFile:L,updateFolder:R,writeFile:S}=(0,m.o)(),E=(0,u.useCallback)((e=>new Promise(((t,i)=>{k[e]?.save_state().then(t).catch(i)}))),[k]),M=(0,u.useCallback)((async(e,t)=>{const i=`${(0,x.basename)(e)}.bin.save`;await C(v.Tl)||(await $(v.Tl),R((0,x.dirname)(v.Tl)));const n=(0,x.join)(v.Tl,i);if(await S(n,T.from(await E(e)),!0)){if(t){const e=(0,x.join)(v.Xo,v.Tl),i=(0,x.join)(v.Xo,`${n}${v.Qy}`);await C(e)||(await $(e),R((0,x.dirname)(v.Tl))),await S(i,t,!0)}try{k[e]?.destroy()}catch{}finally{R(v.Tl,i)}}}),[k,C,$,E,R,S]),F=(0,u.useCallback)((async()=>{const[e]=Object.keys(k);e&&await M(e);const n=t?await L(t):T.from(""),o=(0,y.RT)(t),r=".iso"===o,s=(0,y.YS)(n),c={[r?"cdrom":l(o,n.length)]:{async:!1,size:n.length,url:s,use_parts:!1}},{deviceMemory:u=.25}=navigator,h={boot_order:r?531:561,memory_size:128*u*1024*1024,screen_container:i.current,vga_memory_size:8*u*1024*1024,...c,...a},p=(0,x.join)(v.Tl,`${(0,x.basename)(t)}.bin.save`),f=await C(p)?(0,y.YS)(await L(p)):void 0;f&&(h.initial_state={url:f}),h.filesystem={basefs:URL.createObjectURL(new Blob([JSON.stringify((0,g.uh)())],{type:"application/json"})),baseurl:window.location?.origin??"/"};const m=new window.V86Starter(h);m.add_listener("emulator-loaded",(()=>{_.current?m.destroy():(d((0,x.basename)(t)),(0,y.EK)(s),h.initial_state&&(0,y.EK)(h.initial_state.url),h.filesystem&&(0,y.EK)(h.filesystem.basefs),i.current?.addEventListener("click",m.lock_mouse),z({[t]:m}))}))}),[d,M,i,k,C,L,t]);p(e,i,k[t]),(0,u.useEffect)((()=>{o&&(0,y.mb)(h).then((()=>{window.V86Starter&&n(!1)}))}),[h,o,n]),(0,u.useEffect)((()=>{const t=s===e;Object.values(k).forEach((e=>e?.keyboard_set_status(t)))}),[k,s,e]),(0,u.useEffect)((()=>{!r||c||o||t in k||(z({[t]:void 0}),F());const e=i.current;return()=>{if(t&&c&&!_.current&&(_.current=!0,k[t])){const i=e=>{window.setTimeout((()=>M(t,e)),v.jx.WINDOW)};(async()=>{let i;if(k[t]?.v86.cpu.devices.vga.graphical_mode)i=e?.querySelector("canvas")?.toDataURL("image/png");else if(e instanceof HTMLElement){const t=await(0,y.mZ)();try{i=await(t?.toPng(e,{skipAutoScale:!0}))}catch{}}return i?T.from(i.replace("data:image/png;base64,",""),"base64"):void 0})().then(i).catch(i)}}}),[M,c,i,k,F,o,r,t])};var k=e=>{let{id:t}=e;return(0,n.jsxs)(o.Z,{StyledComponent:r,id:t,useHook:_,children:[(0,n.jsx)("div",{onContextMenuCapture:y.nK}),(0,n.jsx)("canvas",{onContextMenuCapture:y.nK})]})}},99709:function(e,t,i){var n=i(55209),o=i(89826),r=i(93770),a=i(14762),s=i(97057),l=i(6733),c=i(11523),u=i(50959),h=i(44558),d=i(46428);t.Z=e=>{let{callback:t,directory:i=h.Ll,id:p,onDragLeave:f,onDragOver:m,updatePositions:g}=e;const{url:w}=(0,s.z)(),{iconPositions:b,sortOrders:x,setIconPositions:v}=(0,l.k)(),{mkdirRecursive:y,updateFolder:T,writeFile:_}=(0,a.o)(),k=(0,u.useCallback)((async(e,t,i)=>{if(p)if(t){const n=(0,c.join)(h.Ll,e);await y(h.Ll),await _(n,t,!0)&&(i===r.v.UPDATE_URL&&w(p,n),T(h.Ll,e))}else i===r.v.UPDATE_URL&&w(p,e)}),[p,y,T,w,_]),{openTransferDialog:z}=(0,n.Z)();return{onDragLeave:f,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:e=>{if(g&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,o.p4)(e);if(0===t.length&&""===n)return;const r={x:e.clientX,y:e.clientY};let a=[];if(n){try{a=JSON.parse(n)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(i)&&(0,c.basename)(e)===(0,c.relative)(i,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!b[`${i}/${e}`])return e;let t=0,n="";do{t+=1,n=`${i}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[n]);return(0,c.basename)(n)})),(0,d.vi)(i,e.target,b,x,r,a,v)}(0,o.WG)(e,t||k,i,z,Boolean(p))}}}},56961:function(e,t,i){i.d(t,{BS:function(){return a},FC:function(){return o},F_:function(){return n},wV:function(){return r}});const n={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},r=30,a=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${r}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},44586:function(e,t,i){i.d(t,{Rf:function(){return s},b$:function(){return u},hu:function(){return a},ix:function(){return c},mZ:function(){return l}});var n=i(56961),o=i(44558),r=i(46428);const a=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const[a]=e.split(o.CC),s=`${a}${o.CC}`,l=i.find((e=>e.startsWith(s)))||"",{componentWindow:c}=t?.[l]||{},{x:u=0,y:h=0,width:d=0,height:p=0}=c?.getBoundingClientRect()||{},f=u+n+d>(0,r.E9)()||h+n+p>(0,r.sI)();return f||!u&&!h?void 0:{x:u+n,y:h+n}},s=e=>{let{height:t,width:i}=e;const[n,a]=[(0,r.sI)(),(0,r.E9)()];return{x:Math.floor(a/2-(0,r.Vy)(i)/2),y:Math.floor((n-o.bK)/2-(0,r.Vy)(t)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{position:n,size:o}=e||{},{x:a=0,y:s=0}=n||{},{height:c=0,width:u=0}=o||{};return i?a+l.RIGHT>t.x||a+(0,r.Vy)(u)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:a<0||s<0||a+(0,r.Vy)(u)>t.x||s+(0,r.Vy)(c)>t.y},u=(e,t)=>{const i=Number(e.height),a=Number(e.width),[s,l]=[(0,r.sI)(),(0,r.E9)()],c=s-o.bK,u=Math.max(n.wV,Math.min(i,c)),h=Math.max(n.BS,Math.min(a,l));if(!t)return{height:u,width:h};const d=i===u,p=a===h;return d||p?d?p?{height:u,width:h}:{height:Math.round(u/(a/h)),width:h}:{height:u,width:Math.round(h/(i/u))}:i>a?{height:u,width:Math.round(h/(c/u))}:{height:Math.round(u/(l/h)),width:h}}},82034:function(e,t,i){var n=i(97057),o=i(67122),r=i(50959),a=i(44558);t.Z=e=>{const{title:t}=(0,n.z)(),[i]=e.split(a.CC),{title:s}=o.Z[i]||{};return{appendFileToTitle:(0,r.useCallback)(((i,n)=>{const o=i?` - ${i}${n?` ${a.xy}`:""}`:"";t(e,`${s}${o}`)}),[e,s,t]),prependFileToTitle:(0,r.useCallback)(((i,n)=>{const o=i?`${n?`${a.xy} `:""}${i} - `:"";t(e,`${o}${s}`)}),[e,s,t])}}},51811:function(e,t,i){var n=i(44586),o=i(97057),r=i(6733),a=i(50959),s=i(79416);t.Z=e=>{const{setWindowStates:t}=(0,r.k)(),{processes:{[e]:{lockAspectRatio:i=!1,maximized:l=!1}={}}={}}=(0,o.z)(),{sizes:{titleBar:c}}=(0,s.Fg)();return{updateWindowSize:(0,a.useCallback)(((o,r)=>t((t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,n.b$)({height:o+c.height,width:r},i)}})))),[e,i,l,t,c.height])}}}}]);