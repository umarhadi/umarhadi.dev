(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{67119:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(97106)}])},34502:function(e,t,n){"use strict";var r=n(50959);t.Z=e=>{const[t,n]=(0,r.useState)(!1),o=()=>{const e=document,t=()=>{e.fullscreenElement||e.fullscreenEnabled||e.mozFullScreenElement||e.mozFullScreenEnabled||e.webkitFullscreenElement||e.webkitFullscreenEnabled||(document.removeEventListener("fullscreenchange",t),n(!1))};(e.fullscreenElement||e.fullscreenEnabled||e.mozFullScreenElement||e.mozFullScreenEnabled||e.webkitFullscreenElement||e.webkitFullscreenEnabled)&&(n(!0),document.addEventListener("fullscreenchange",t))};return{fullscreen:t,toggleFullscreen:n=>{if(t){const e=document;e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitExitFullscreen&&e.webkitExitFullscreen()}else{const t=e||document.documentElement,r={navigationUI:n||"hide"};try{"requestFullscreen"in t?t.requestFullscreen(r).then(o):"mozRequestFullScreen"in t?t.mozRequestFullScreen(r).then(o):"webkitRequestFullscreen"in t&&t.webkitRequestFullscreen(r).then(o)}catch{o()}}}}}},71831:function(e,t,n){"use strict";n.d(t,{Wd:function(){return o},vc:function(){return r},xJ:function(){return s}});const r={camera:{far:400,fov:30,near:.1},color:"hsl(111, 10%, 20%)",colorCycleSpeed:10,forceAnimate:!0,hh:52,hue:222,lightness:6,material:{options:{fog:!0,wireframe:!1}},saturation:50,shininess:15,waveHeight:12,waveSpeed:1.25,ww:50},o={gyroControls:!1,mouseControls:!1,mouseEase:!1,touchControls:!1},s=["/System/Vanta.js/three.min.js","/System/Vanta.js/vanta.waves.min.js"]},92701:function(e,t,n){"use strict";var r=n(50959);t.Z=(e,t,n)=>{const o=(0,r.useRef)();return(0,r.useEffect)((()=>(e&&!o.current&&(o.current=e(n),t&&o.current.addEventListener("message",t,{passive:!0}),o.current.postMessage("init")),()=>{o.current?.terminate(),o.current=void 0})),[t,n,e]),o}},97106:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return le}});var r=n(11527),o=n(15455),s=n(99761),i=n(14304),c=n.n(i),a=n(50959);const l=c()((()=>n.e(8258).then(n.bind(n,98258))),{loadableGenerated:{webpack:()=>[98258]}}),u=()=>{const{processes:e={}}=(0,o.z)();return(0,r.jsx)(s.M,{initial:!1,presenceAffectsLayout:!1,children:Object.entries(e).map((e=>{let[t,{closing:n,Component:o,hasWindow:s}]=e;return t&&o&&!n&&(0,r.jsx)(l,{Component:o,hasWindow:s,id:t},t)}))})};var d=(0,a.memo)(u),m=n(74965);var f=m.ZP.main.withConfig({componentId:"sc-92cb1f20-0"})`
  background-color: transparent;
  contain: strict;
  height: ${e=>{let{$height:t}=e;return t?`${t}px`:"100%"}};
  inset: 0;
  overscroll-behavior: none;
  position: fixed;
  width: 100vw;

  #loading-status {
    background-color: #fff;
    border-radius: 10px;
    display: none;
    font-weight: 600;
    left: 50%;
    padding: 15px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  > canvas {
    background-color: inherit;
    height: ${e=>{let{$height:t}=e;return t?`${t}px`:"100%"}};
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`,h=n(36551),p=n(71831),w=n(74479),g=n(7211),v=n(92701),E=n(82296),b=n(95063),x=n(63270);const k=Object.keys(h.YH);let y;var S=(e,t)=>{const{exists:n,lstat:r,readFile:o,readdir:s,updateFolder:i,writeFile:c}=(0,w.o)(),{sessionLoaded:l,setWallpaper:u,wallpaperImage:d,wallpaperFit:f}=(0,g.k)(),{colors:S}=(0,m.Fg)(),[R]=d.split(" "),C="VANTA WIREFRAME"===d,$=(0,v.Z)(h.YH[R],void 0,C?"Wireframe":""),z=(0,a.useRef)(),F=(0,a.useRef)(!1),L=(0,a.useCallback)((async t=>{if(!e.current)return;let r;if("VANTA"===R)r={...p.vc},p.vc.material.options.wireframe=C;else if("MATRIX 3D"===d)r={volumetric:!0};else if("STABLE_DIFFUSION"===R){const e=`${b.sC}/${b.dd}`;await n(e)&&(r={prompts:JSON.parse((await o(e))?.toString()||"[]")})}if(document.documentElement.style.setProperty("background",document.documentElement.style.background.replace(/"(.*)"/,"")),t||(e.current.querySelector(h.$3)?.remove(),window.WallpaperDestroy?.()),!F.current&&void 0!==window.OffscreenCanvas&&$.current){const n={config:r,devicePixelRatio:1};if(t)$.current.postMessage(n);else{const t=(0,x.nS)(e.current);if($.current.postMessage({canvas:t,...n},[t]),$.current.addEventListener("message",(e=>{let{data:t}=e;"[error]"===t.type&&(t.message.includes("getContext")?(F.current=!0,L()):u("SLIDESHOW"))})),"STABLE_DIFFUSION"===R){const t=document.createElement("div");t.id="loading-status",e.current?.append(t),window.WallpaperDestroy=()=>{t.remove(),window.WallpaperDestroy=void 0},$.current.addEventListener("message",(e=>{let{data:n}=e;"[error]"===n.type?u("VANTA"):n.type?t.textContent=n.message||"":n.message||(z.current=window.setTimeout((()=>L(!0)),10*b.qe)),t.style.display=n.message?"block":"none"}))}}}else h.dI[R]?h.dI[R]().then((t=>{let{default:n}=t;return n?.(e.current,r)})):u("VANTA")}),[e,n,o,u,C,d,R,$]),M=(0,a.useCallback)((async e=>(await s(e)).reduce((async(t,n)=>{const o=(0,E.join)(e,n);return[...await t,...(await r(o)).isDirectory()?await M(o):[b.lM.has((0,x.RT)(o))&&!b.GM.has((0,x.RT)(o))?o:""]].filter(Boolean)}),Promise.resolve([]))),[s,r]),P=(0,a.useCallback)((async()=>{const[,t]=document.documentElement.style.background.match(/"(.*?)"/)||[];t?.startsWith("blob:")&&(0,x.EK)(t),e.current?.querySelector(h.$3)?.remove(),e.current?.querySelector(h.vF)?.remove(),window.WallpaperDestroy?.();let r="",s="",a=f;const l="SLIDESHOW"===R;if(l){const e=`${b.sC}/${b.rH}`;await n(e)||(await c(e,JSON.stringify(await n(b.sC)?await M(b.sC):"[]")),i(b.sC,b.rH)),y||=[...new Set(JSON.parse((await o(e))?.toString()||"[]"))];do{r=y[Math.floor(Math.random()*y.length)],r.startsWith("/")&&(r=`${window.location.origin}${r}`)}while(t===r&&y.length>1);a="fill"}else if("APOD"===R){document.documentElement.style.setProperty("background",document.documentElement.style.background.replace(/"(.*)"/,""));const[,e,t]=d.split(" "),[n,,o,,i]=new Intl.DateTimeFormat(b.ZW,{timeZone:"US/Eastern"}).formatToParts(Date.now()).map((e=>{let{value:t}=e;return t}));if(t===`${i}-${n}-${o}`)r=e;else{const{date:e="",hdurl:t="",url:n=""}=await(0,x.AC)("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");if(t||n){if(r=((0,x.E9)()>1024?t:n)||n,a="fit",(0,x.yk)(r)){const e=`https://i.ytimg.com/vi/${(0,x.Ld)(r)}`;r=`${e}/maxresdefault.jpg`,s=`${e}/hqdefault.jpg`}else t&&n&&t!==n&&(s=r===n?t:n);const o=`APOD ${r} ${e}`;o!==d&&(u(o,a),setTimeout(L,b.xR))}}}else await n(d)&&(r=(0,x.YS)(await o(d)));if(r)if(b.qy.has((0,x.RT)(d))){const t=document.createElement("video");t.src=r,t.autoplay=!0,t.controls=!1,t.disablePictureInPicture=!0,t.disableRemotePlayback=!0,t.loop=!0,t.muted=!0,t.playsInline=!0,t.style.position="absolute",t.style.inset="0",t.style.width="100%",t.style.height="100%",t.style.objectFit="cover",t.style.objectPosition="center center",t.style.zIndex="-1",e.current?.append(t)}else{const e=e=>{const t="tile"===a?"repeat":"no-repeat",n=h.QC[a];document.documentElement.style.setProperty("background",`url(${CSS.escape(e)}) ${n} ${t} fixed border-box border-box ${S.background}`)};s?fetch(r,{...b.P8,mode:"no-cors"}).then((e=>{let{ok:t}=e;if(!t)throw new Error("Failed to load url")})).catch((()=>e(s))):(e(r),l&&(z.current=window.setTimeout(P,b.qe)))}else L()}),[S.background,e,n,M,L,o,u,i,f,d,R,c]);(0,a.useEffect)((()=>{l&&(z.current&&window.clearTimeout(z.current),R&&!k.includes(R)?P().catch(L):L())}),[P,L,l,R]),(0,a.useEffect)((()=>{const n=()=>{if(!e.current||!h.dI[R])return;const n=e.current.getBoundingClientRect();$.current?.postMessage(n);const r=e.current.querySelector(h.$3);r instanceof HTMLCanvasElement&&(r.style.width=`${n.width}px`,r.style.height=`${t||n.height}px`)};return window.addEventListener("resize",n,{passive:!0}),()=>window.removeEventListener("resize",n)}),[e,t,R,$])},R=n(36766);var C=()=>{const[e,t]=(0,a.useState)(0);return(0,a.useEffect)((()=>{"number"===typeof window.initialHeight&&window.initialHeight>0&&/android/i.test(navigator.userAgent)&&/chrome/i.test(navigator.userAgent)&&requestAnimationFrame((()=>{if(window.initialHeight!==window.innerHeight&&window.innerHeight===window.outerHeight&&window.innerHeight>window.screen.availHeight){t(window.initialHeight||0);const e=()=>t(0);window.addEventListener("resize",e,b.K7),window.screen.orientation?.addEventListener("change",e,b.K7)}}))}),[]),e};var $=e=>{let{children:t}=e;const n=C(),o=(0,a.useRef)(null);return S(o,n),(0,r.jsxs)(f,{ref:o,$height:n,children:[(0,r.jsx)(R.Z,{url:b.Ll,view:"icon",allowMovingDraggableEntries:!0,hideLoading:!0,hideScrolling:!0,isDesktop:!0,loadIconsImmediately:!0,preloadShortcuts:!0}),t]})};var z=m.ZP.div.withConfig({componentId:"sc-99eaeec2-0"})`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  display: flex;
  font-size: ${e=>{let{theme:t}=e;return t.sizes.clock.fontSize}};
  height: 100%;
  max-width: ${e=>{let{theme:t}=e;return`calc(${t.sizes.clock.width} + 10px)`}};
  min-width: ${e=>{let{theme:t}=e;return t.sizes.clock.width}};
  padding: 0 5px;
  place-content: center;
  place-items: center;
  position: absolute;
  right: 0;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.hover}};
  }

  &:active {
    background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.foreground}};
  }
`,F=n(47927);var L=()=>{const{contextMenu:e}=(0,F.H)(),{clockSource:t,setClockSource:n}=(0,g.k)();return(0,a.useMemo)((()=>e?.((()=>{const e="local"===t;return[{action:()=>n("local"),label:"Local time",toggle:e},{action:()=>n("ntp"),label:"Server time",toggle:!e}]}))),[t,e,n])};const M={local:"Local",ntp:"Server"},P={height:b.bK,width:b.il};let j=7;const O=()=>{j=7},A=async e=>{let{target:t}=e;if(7===j&&t instanceof HTMLElement&&(t.setAttribute("tabIndex","-1"),["blur","mouseleave"].forEach((e=>{t.removeEventListener(e,O),t.addEventListener(e,O,b.K7)}))),j-=1,0===j){const{default:e}=await n.e(8382).then(n.bind(n,78382));e(),j=7}};var W=()=>{const[e,t]=(0,a.useState)(Object.create(null)),{date:o,time:s}=e,{clockSource:i}=(0,g.k)(),c=(0,a.useCallback)((()=>new Worker(n.tu(new URL(n.p+n.u(3226),n.b)),{name:`Clock (${M[i]})`})),[i]),l=(0,a.useRef)(),u=(0,a.useMemo)((()=>"OffscreenCanvas"in window),[]),d=(0,a.useCallback)((e=>{let{data:n,target:r}=e;"source"===n?r.postMessage(i):t((e=>l.current&&e.date===n.date?e:n))}),[i]),m=L(),f=(0,v.Z)(c,d),h=(0,a.useCallback)((e=>{!l.current&&f.current&&e instanceof HTMLDivElement&&([...e.children].forEach((e=>e.remove())),l.current=(0,x.nS)(e,window.devicePixelRatio,P),f.current.postMessage({canvas:l.current,devicePixelRatio:window.devicePixelRatio},[l.current]))}),[f,e]);return(0,a.useEffect)((()=>{l.current=void 0}),[i]),(0,a.useEffect)((()=>{if(u){const e=()=>window.matchMedia(`(resolution: ${window.devicePixelRatio}x)`).addEventListener("change",(()=>{f.current?.postMessage({clockSize:P,devicePixelRatio:window.devicePixelRatio}),e()}),b.K7);e()}}),[f,u]),s?(0,r.jsx)(z,{ref:u?h:void 0,"aria-label":"Clock",onClick:A,role:"timer",title:o,suppressHydrationWarning:!0,...m,children:u?void 0:s}):null};var T=()=>(0,r.jsxs)("svg",{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M98,68l-40.4,45.3c-2.9,3.2-8.3,0.5-7.3-3.7l6.9-28.4c0.7-2.7-1.4-5.2-4.1-5.2h-20c-3.4,0-5.4-3.9-3.4-6.8 l40.4-54.3c2.7-3.6,8.3-1,7.4,3.4L70.1,56c-0.5,2.5,1.5,5.1,4.1,5.1h20.5C98.3,60.9,100.4,65.3,98,68z",fill:"#f9aaf9"}),(0,r.jsx)("path",{d:"M4,72.9l14,0c1.7,0,3-1.3,3-3s-1.3-3-3-3l-14,0c-1.7,0-3,1.3-3,3C1,71.5,2.3,72.9,4,72.9z",fill:"#3532c1"}),(0,r.jsx)("path",{d:"M10.4,99.5c0.9,1.4,2.7,1.9,4.1,1l10.3-6.2c0.9-0.6,1.5-1.6,1.5-2.6c0-0.5-0.1-1.1-0.4-1.5 c-0.9-1.4-2.7-1.9-4.1-1l-10.3,6.2C10,96.2,9.6,98.1,10.4,99.5z",fill:"#3532c1"}),(0,r.jsx)("path",{d:"M25.8,49.5c0.3-0.5,0.4-1,0.4-1.5c0-1-0.5-2-1.5-2.6l-10.3-6.2c-1.4-0.9-3.3-0.4-4.1,1 c-0.9,1.4-0.4,3.3,1,4.1l10.3,6.2C23.1,51.4,25,51,25.8,49.5z",fill:"#3532c1"}),(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{d:"M124,72.9l-14,0c-1.7,0-3-1.3-3-3s1.3-3,3-3l14,0c1.7,0,3,1.3,3,3S125.7,72.9,124,72.9z",fill:"#3532c1"}),(0,r.jsx)("path",{d:"M117.6,99.5c-0.9,1.4-2.7,1.9-4.1,1l-10.3-6.2c-0.9-0.6-1.5-1.6-1.5-2.6c0-0.5,0.1-1.1,0.4-1.5 c0.9-1.4,2.7-1.9,4.1-1l10.3,6.2C118,96.2,118.4,98.1,117.6,99.5z",fill:"#3532c1"}),(0,r.jsx)("path",{d:"M102.2,49.5c-0.3-0.5-0.4-1-0.4-1.5c0-1,0.5-2,1.5-2.6l10.3-6.2c1.4-0.9,3.3-0.4,4.1,1 c0.9,1.4,0.4,3.3-1,4.1l-10.3,6.2C104.9,51.4,103,51,102.2,49.5z",fill:"#3532c1"})]})]}),I=n(10217);var D=(0,m.ZP)(I.Z).withConfig({componentId:"sc-ee7a1f09-0"})`
  background-color: ${e=>{let{$active:t,theme:n}=e;return t&&n.colors.taskbar.foreground}};
  display: flex;
  fill: ${e=>{let{theme:t}=e;return t.colors.startButton}};
  height: 100%;
  left: 0;
  place-content: center;
  place-items: center;
  position: absolute;

  && {
    width: ${e=>{let{theme:t}=e;return t.sizes.startButton.width}};
  }

  svg {
    height: ${e=>{let{theme:t}=e;return t.sizes.startButton.iconSize}};
  }

  &:hover {
    background-color: ${e=>{let{$active:t,theme:n}=e;return t?void 0:n.colors.taskbar.hover}};

    svg {
      fill: ${e=>{let{theme:t}=e;return t.colors.highlight}};
    }
  }

  &:active {
    background-color: hsla(0, 0%, 20%, 70%);

    svg {
      fill: hsla(207, 100%, 60%, 80%);
    }
  }
`,H=n(34502),q=n(33305);var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{contextMenu:t}=(0,F.H)(),{minimize:n,open:r}=(0,o.z)(),s=(0,q.R)(),{fullscreen:i,toggleFullscreen:c}=(0,H.Z)();return(0,a.useMemo)((()=>t?.((()=>{const t=Object.entries(s.current),o=t.length>0&&!t.some((e=>{let[,{minimized:t}]=e;return!t})),a=[{action:()=>(0,x.xr)(s.current,n),label:e?"Desktop":o?"Show open windows":"Show the desktop"}];return e?a.unshift({action:()=>r("Terminal"),label:"Terminal"},b.Os,{action:()=>r("FileExplorer"),label:"File Explorer"},{action:()=>r("Run"),label:"Run"},b.Os):a.unshift({action:()=>c(),label:i?"Exit full screen":"Enter full screen"},b.Os),a}))),[t,i,n,e,r,s,c])};var K=e=>{let{startMenuVisible:t,toggleStartMenu:o}=e;const[s,i]=(0,a.useState)(!1);return(0,r.jsx)(D,{$active:t,onClick:()=>o(),onMouseOver:s?void 0:async()=>{const e=!(0,x.G6)(),t=[...document.querySelectorAll("link[rel=preload]")],{default:r}=await n.e(8530).then(n.t.bind(n,18530,19));r?.forEach((n=>{const r=document.createElement("link");if(r.as="image",r.fetchPriority="high",r.rel="preload",r.type="image/webp",n.startsWith(b.OT)||n.startsWith(b.P7))if(e)r.imageSrcset=(0,x.km)(n,48,".webp");else{const[e]=(0,x.RU)(n,48,(0,x.bN)(),".webp").split(" ");r.href=e}else r.href=n;t.some((e=>r.imageSrcset&&e?.imageSrcset?.endsWith(r.imageSrcset)||r.href&&e?.href?.endsWith(r.href)))||document.head.append(r)})),i(!0)},...(0,x.PS)("Start"),...Z(!0),children:(0,r.jsx)(T,{})})};var N=m.ZP.nav.withConfig({componentId:"sc-658790dd-0"})`
  backdrop-filter: ${e=>{let{theme:t}=e;return`blur(${t.sizes.taskbar.blur})`}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.background}};
  bottom: 0;
  contain: size layout;
  height: ${b.bK}px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100vw;
  z-index: 100000;
`;var _=m.ZP.ol.withConfig({componentId:"sc-86fb01a7-0"})`
  column-gap: 1px;
  display: flex;
  height: 100%;
  left: ${e=>{let{theme:t}=e;return t.sizes.startButton.width}};
  margin: 0 3px;
  overflow: hidden;
  position: absolute;
  right: ${e=>{let{theme:t}=e;return t.sizes.clock.width}};
`;const B=c()((()=>n.e(5010).then(n.bind(n,25010))),{loadableGenerated:{webpack:()=>[25010]}});var U=()=>{const{processes:e={}}=(0,o.z)();return(0,r.jsx)(_,{children:(0,r.jsx)(s.M,{initial:!1,presenceAffectsLayout:!1,children:Object.entries(e).filter((e=>{let[,{closing:t,hideTaskbarEntry:n}]=e;return!t&&!n})).map((e=>{let[t,{icon:n,title:o}]=e;return(0,r.jsx)(B,{icon:n,id:t,title:o},t)}))})})};const V=c()((()=>n.e(4449).then(n.bind(n,24449))),{loadableGenerated:{webpack:()=>[24449]}});var G=()=>{const[e,t]=(0,a.useState)(!1),n=e=>t((t=>e??!t));return(0,r.jsxs)(r.Fragment,{children:[e&&(0,r.jsx)(V,{toggleStartMenu:n}),(0,r.jsxs)(N,{...Z(),...b.LL,children:[(0,r.jsx)(K,{startMenuVisible:e,toggleStartMenu:n}),(0,r.jsx)(U,{}),(0,r.jsx)(W,{})]})]})};var J=()=>{(0,a.useEffect)((()=>{const e=e=>{e.error?.stack?.includes("eval at <anonymous>")&&(0,x.nK)(e)};return window.addEventListener("error",e),()=>window.removeEventListener("error",e)}),[])};const Y=()=>document.querySelector("main>nav>button[title='Start']")?.click();let X=!1,Q=!1,ee=!1;const te=e=>((0,x.nK)(e),!!ee||(ee=!0,setTimeout((()=>{ee=!1}),150),!1)),ne=new Set(["ARROWDOWN","ARROWUP","D","E","R"]);var re=()=>{const{closeWithTransition:e,maximize:t,minimize:n,open:r}=(0,o.z)(),s=(0,q.R)(),{foregroundId:i}=(0,g.k)(),{fullscreen:c,toggleFullscreen:l}=(0,H.Z)(),u=(0,a.useRef)({}),d=(0,a.useRef)({E:()=>r("FileExplorer"),ESCAPE:Y,F10:()=>r("Terminal"),F12:()=>r("DevTools"),F5:()=>window.location.reload(),R:()=>r("Run")});(0,a.useEffect)((()=>{const e=e=>{const{altKey:t,ctrlKey:n,key:r,shiftKey:o}=e,s=r?.toUpperCase();s&&(o?!n&&ne.has(s)||!d.current?.[s]||te(e)||d.current[s]():"F11"===s?((0,x.nK)(e),l()):document.activeElement===document.body&&s.startsWith("ARROW")?document.body.querySelector("main ol li button")?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})):c&&("META"===s?X=!0:t&&u.current?.[s]?((0,x.nK)(e),u.current?.[s]?.()):"ESCAPE"===s?setTimeout((()=>!e.defaultPrevented&&document.exitFullscreen()),0):X&&ne.has(s)&&d.current?.[s]&&!te(e)&&(Q=!0,d.current[s]())))},t=e=>{X&&c&&"META"===e.key?.toUpperCase()&&(X=!1,Q?Q=!1:Y())},n=e=>{let{target:t}=e;if(t===document.documentElement)try{c?navigator?.keyboard?.lock?.(["MetaLeft","MetaRight","Escape"]):navigator?.keyboard?.unlock?.()}catch{}};return document.addEventListener("keydown",e,{capture:!0}),document.addEventListener("keyup",t,{capture:!0,passive:!0}),document.addEventListener("fullscreenchange",n,{passive:!0}),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t),document.removeEventListener("fullscreenchange",n)}}),[c,l]),(0,a.useEffect)((()=>{u.current={...u.current,F4:()=>e(i)}}),[e,i]),(0,a.useEffect)((()=>{d.current={...d.current,ARROWDOWN:()=>{const{hideMinimizeButton:e=!1,maximized:r,minimized:o}=s.current[i];r?t(i):o||e||n(i)},ARROWUP:()=>{const{allowResizing:e=!0,hideMaximizeButton:r=!1,maximized:o,minimized:c}=s.current[i];c?n(i):o||!e||r||t(i)},D:()=>(0,x.xr)(s.current,n)}}),[i,t,n,s])};var oe=()=>{const{setForegroundId:e}=(0,g.k)(),t=(0,q.R)();(0,a.useEffect)((()=>{const n=()=>{if(document.activeElement instanceof HTMLIFrameElement){const[n]=Object.entries(t.current).find((e=>{let[,{componentWindow:t}]=e;return t?.contains(document.activeElement)}))||[];n&&(e(n),window.addEventListener("click",(n=>{let{target:r}=n;const[o=""]=Object.entries(t.current).find((e=>{let[,{componentWindow:t}]=e;return r instanceof HTMLElement&&t?.contains(r)}))||[];e(o)}),b.K7))}};return window.addEventListener("blur",n,{passive:!0}),()=>window.removeEventListener("blur",n)}),[t,e])},se=n(54815),ie=n(70156),ce=n(86870);var ae=()=>{const{exists:e,fs:t}=(0,w.o)(),{open:n}=(0,o.z)(),r=(0,a.useRef)(!1);(0,a.useEffect)((()=>{if(r.current||!t||!e||!n)return;r.current=!0;const o=(0,x.kp)("app"),s=(0,x.kp)("url"),i=async t=>{if(!t)return;let r=!1;try{r="Browser"===t&&s.startsWith("http")||await e(s)}catch{}"FileExplorer"===t&&s&&!r||n(t,r?{url:s}:void 0)};if(o){i(Object.fromEntries(Object.keys(ce.Z).map((e=>[e.toLowerCase(),e])))[o.toLowerCase()])}else if(s){const e=(0,x.RT)(s),{process:[t]=[]}=se.Z[e]||{};i(e?t||(0,ie.k9)(e):"FileExplorer")}}),[e,t,n])};var le=()=>(oe(),ae(),re(),J(),(0,r.jsxs)($,{children:[(0,r.jsx)(G,{}),(0,r.jsx)(d,{})]}))},99761:function(e,t,n){"use strict";n.d(t,{M:function(){return w}});var r=n(50959),o=n(62114),s=n(60659);function i(){const e=(0,r.useRef)(!1);return(0,s.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var c=n(46788),a=n(63440);class l extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){const n=(0,r.useId)(),o=(0,r.useRef)(null),s=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:e,height:r,top:i,left:c}=s.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${i}px !important;\n            left: ${c}px !important;\n          }\n        `),()=>{document.head.removeChild(a)}}),[t]),r.createElement(l,{isPresent:t,childRef:o,sizeRef:s},r.cloneElement(e,{ref:o}))}const d=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:s,presenceAffectsLayout:i,mode:l})=>{const d=(0,a.h)(m),f=(0,r.useId)(),h=(0,r.useMemo)((()=>({id:f,initial:t,isPresent:n,custom:s,onExitComplete:e=>{d.set(e,!0);for(const t of d.values())if(!t)return;o&&o()},register:e=>(d.set(e,!1),()=>d.delete(e))})),i?void 0:[n]);return(0,r.useMemo)((()=>{d.forEach(((e,t)=>d.set(t,!1)))}),[n]),r.useEffect((()=>{!n&&!d.size&&o&&o()}),[n]),"popLayout"===l&&(e=r.createElement(u,{isPresent:n},e)),r.createElement(c.O.Provider,{value:h},e)};function m(){return new Map}var f=n(64622);var h=n(92465);const p=e=>e.key||"";const w=({children:e,custom:t,initial:n=!0,onExitComplete:c,exitBeforeEnter:a,presenceAffectsLayout:l=!0,mode:u="sync"})=>{(0,h.k)(!a,"Replace exitBeforeEnter with mode='wait'");const m=(0,r.useContext)(f.p).forceRender||function(){const e=i(),[t,n]=(0,r.useState)(0),s=(0,r.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,r.useCallback)((()=>o.Wi.postRender(s)),[s]),t]}()[0],w=i(),g=function(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}(e);let v=g;const E=(0,r.useRef)(new Map).current,b=(0,r.useRef)(v),x=(0,r.useRef)(new Map).current,k=(0,r.useRef)(!0);var y;if((0,s.L)((()=>{k.current=!1,function(e,t){e.forEach((e=>{const n=p(e);t.set(n,e)}))}(g,x),b.current=v})),y=()=>{k.current=!0,x.clear(),E.clear()},(0,r.useEffect)((()=>()=>y()),[]),k.current)return r.createElement(r.Fragment,null,v.map((e=>r.createElement(d,{key:p(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:l,mode:u},e))));v=[...v];const S=b.current.map(p),R=g.map(p),C=S.length;for(let r=0;r<C;r++){const e=S[r];-1!==R.indexOf(e)||E.has(e)||E.set(e,void 0)}return"wait"===u&&E.size&&(v=[]),E.forEach(((e,n)=>{if(-1!==R.indexOf(n))return;const o=x.get(n);if(!o)return;const s=S.indexOf(n);let i=e;if(!i){const e=()=>{x.delete(n),E.delete(n);const e=b.current.findIndex((e=>e.key===n));if(b.current.splice(e,1),!E.size){if(b.current=g,!1===w.current)return;m(),c&&c()}};i=r.createElement(d,{key:p(o),isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:l,mode:u},o),E.set(n,i)}v.splice(s,0,i)})),v=v.map((e=>{const t=e.key;return E.has(t)?e:r.createElement(d,{key:p(e),isPresent:!0,presenceAffectsLayout:l,mode:u},e)})),r.createElement(r.Fragment,null,E.size?v:v.map((e=>(0,r.cloneElement)(e))))}},13337:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});const r={delta:0,timestamp:0,isProcessing:!1}},62114:function(e,t,n){"use strict";n.d(t,{Pn:function(){return d},Wi:function(){return u}});var r=n(13337);let o=!0,s=!1;const i=["read","update","preRender","render","postRender"],c=i.reduce(((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,o=!1,s=!1;const i=new WeakSet,c={schedule:(e,s=!1,c=!1)=>{const a=c&&o,l=a?t:n;return s&&i.add(e),-1===l.indexOf(e)&&(l.push(e),a&&o&&(r=t.length)),e},cancel:e=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1),i.delete(e)},process:a=>{if(o)s=!0;else{if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let n=0;n<r;n++){const r=t[n];r(a),i.has(r)&&(c.schedule(r),e())}o=!1,s&&(s=!1,c.process(a))}}};return c}((()=>s=!0)),e)),{}),a=e=>c[e].process(r.w),l=e=>{s=!1,r.w.delta=o?1e3/60:Math.max(Math.min(e-r.w.timestamp,40),1),r.w.timestamp=e,r.w.isProcessing=!0,i.forEach(a),r.w.isProcessing=!1,s&&(o=!1,requestAnimationFrame(l))},u=i.reduce(((e,t)=>{const n=c[t];return e[t]=(e,t=!1,i=!1)=>(s||(s=!0,o=!0,r.w.isProcessing||requestAnimationFrame(l)),n.schedule(e,t,i)),e}),{});function d(e){i.forEach((t=>c[t].cancel(e)))}},92465:function(e,t,n){"use strict";n.d(t,{K:function(){return o},k:function(){return s}});var r=n(11207);let o=r.Z,s=r.Z},11207:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});const r=e=>e}},function(e){e.O(0,[6766,9774,2888,179],(function(){return t=67119,e(e.s=t);var t}));var t=e.O();_N_E=t}]);