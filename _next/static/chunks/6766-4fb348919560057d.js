"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6766],{36551:function(e,t,n){n.d(t,{$3:function(){return s},QC:function(){return r},YH:function(){return i},dI:function(){return a},ov:function(){return o},vF:function(){return c}});const r={center:"center center",fill:"center center / cover",fit:"center center / contain",stretch:"center center / 100% 100%",tile:"50% 50%"},a={COASTAL_LANDSCAPE:()=>n.e(115).then(n.bind(n,90115)),HEXELLS:()=>n.e(769).then(n.bind(n,50769)),MATRIX:()=>n.e(2860).then(n.bind(n,2860)),STABLE_DIFFUSION:()=>n.e(3721).then(n.bind(n,63721)),VANTA:()=>n.e(6144).then(n.bind(n,16144))},i={COASTAL_LANDSCAPE:()=>new Worker(n.tu(new URL(n.p+n.u(5183),n.b)),{name:"Wallpaper (Coastal Landscape)"}),HEXELLS:()=>new Worker(n.tu(new URL(n.p+n.u(3191),n.b)),{name:"Wallpaper (Hexells)"}),STABLE_DIFFUSION:()=>new Worker(n.tu(new URL(n.p+n.u(9629),n.b)),{name:"Wallpaper (Stable Diffusion)"}),VANTA:e=>new Worker(n.tu(new URL(n.p+n.u(9582),n.b)),{name:"Wallpaper (Vanta Waves)"+(e?` [${e}]`:"")})},o=[{id:"APOD",startsWith:!0},{id:"COASTAL_LANDSCAPE",name:"Coastal Landscape"},{id:"HEXELLS",name:"Hexells"},{id:"MATRIX 2D",name:"Matrix (2D)"},{id:"MATRIX 3D",name:"Matrix (3D)"},{id:"SLIDESHOW",name:"Picture Slideshow"},{id:"STABLE_DIFFUSION",name:"Stable Diffusion (Beta)",requiresWebGPU:!0},{id:"VANTA",name:"Vanta Waves",startsWith:!0}],s=":scope > canvas",c=":scope > video"},36766:function(e,t,n){n.d(t,{Z:function(){return Ee}});var r=n(11527),a=n(54815),i=n(70156),o=n(74965);var s=o.ZP.figure.withConfig({componentId:"sc-5e52ee6b-0"})`
  pointer-events: ${e=>{let{$renaming:t}=e;return t?"all":void 0}};

  figcaption {
    pointer-events: none;
  }
`,c=n(340),l=n(47687);var u=o.ZP.li.withConfig({componentId:"sc-7f64d0dd-0"})`
  display: flex;
  flex-direction: column;

  figure {
    border: 1px solid transparent;
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    place-items: center;

    figcaption {
      color: #fff;
    }

    picture {
      margin-left: 3px;
      margin-right: 8px;
    }

    svg {
      fill: rgb(210, 210, 210);
      height: 8px;
      margin-left: auto;
      margin-right: 8px;
      width: 8px;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 90%;
      }

      picture {
        margin-left: 7px;
      }

      svg {
        margin-right: 12px;
      }
    }

    &:hover {
      background-color: hsla(0, 0%, 35%, 70%);
      border: 1px solid hsla(0, 0%, 45%, 70%);
    }
  }
`,d=n(38827);const b={icon:{StyledFileEntry:c.Z,StyledFileManager:l.Z},list:{StyledFileEntry:u,StyledFileManager:d.Z}},f={icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}};var m=n(50959),g=n(78165),p=n(95063);const h="matrix(0.5, 0.05, 0, 0.7, 2, 1)",v=e=>{let{baseIcon:t,icon:n,isFirstImage:a,name:i,totalSubIcons:o,view:s}=e;const c=(0,m.useMemo)((()=>f[[p.MB,p.EV].includes(n)||n.startsWith("blob:")?s:"sub"]),[n,s]),l=(0,m.useMemo)((()=>{if(n===p.EV)return{zIndex:3};if(t===p._l){const e=o-1>1;return{objectFit:"cover",transform:`${a&&e?"matrix(0.4, 0.14, 0, 0.7, -4, 2)":h} translateZ(0px)`,zIndex:a?2:1}}}),[t,n,a,o]);return(0,r.jsx)(g.Z,{$eager:n===p.MB,alt:i,src:n,style:l,...c})};var w=e=>{let{icon:t,name:n,showShortcutIcon:a,subIcons:i,view:o}=e;const s=(0,m.useMemo)((()=>a?i?.filter((e=>e!==p.MB)):i),[a,i]),c=(0,m.useMemo)((()=>s?.filter((e=>e!==t))||[]),[t,s]);return(0,r.jsx)(r.Fragment,{children:c.map(((e,a)=>(0,r.jsx)(v,{baseIcon:t,icon:e,isFirstImage:0===a,name:n,totalSubIcons:c.length,view:o},e)))})},y=n(74479),A=n(15455),E=n(86870),k=n(7211),x=n(33305),S=n(82296);var $=e=>{const{setForegroundId:t}=(0,k.k)(),{createPath:r,updateFolder:a}=(0,y.o)(),{minimize:i,open:o,url:s}=(0,A.z)(),c=(0,x.R)();return(0,m.useCallback)((async(l,u)=>{const{preferProcessIcon:d,singleton:b,icon:f}=E.Z[l]||{},m=Object.keys(c.current).find((e=>e.startsWith(`${l}${p.CC}`)));let g=e;if(e.startsWith("ipfs://")){const{getIpfsFileName:t,getIpfsResource:i}=await n.e(7453).then(n.bind(n,77453)),o=await i(e);g=(0,S.join)(p.Ll,await r(await t(e,o),p.Ll,o)),a(p.Ll,(0,S.basename)(g))}b&&m?(s(m,g),c.current[m].minimized&&i(m),t(m)):o(l,{url:g},b||u===p._l||d?f:u)}),[r,i,o,c,t,s,a,e])},F=n(47927);const M=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),L=[".aac",".mp3",".ogg",".wav"],T=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".ogv",".webm",".wmv"]),O=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"];var R=n(63270);const C=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),D=[".bmp",".gif",".jpeg",".jpg",".png",".psd",".svg",".tiff"];var I=n(55872).Buffer;var j=(e,t,r,o,s,c,l,u,d)=>{let{archiveFiles:b,deleteLocalPath:f,downloadFiles:g,extractFiles:h,newShortcut:v}=s,{blurEntry:w,focusEntry:x}=c;const{open:j,url:z}=(0,A.z)(),{setWallpaper:P}=(0,k.k)(),W=(0,S.basename)(r),B=l.includes(W),Z=$(e),{copyEntries:N,createPath:U,lstat:H,mapFs:K,moveEntries:G,readFile:V,rootFs:Q,unMapFs:X,updateFolder:Y}=(0,y.o)(),{contextMenu:_}=(0,F.H)(),{onContextMenuCapture:q,...J}=(0,m.useMemo)((()=>_?.((()=>{const s=(0,R.RT)(e),{process:c=[]}=s in a.Z?a.Z[s]:{},m=c.filter((e=>e!==t)),w=m.filter((e=>e!==t)),y=()=>1!==l.length&&B?[...new Set([r,...l.map((e=>(0,S.join)((0,S.dirname)(r),e)))])]:[r],A=[],k=(0,R.RT)(r),x=k===p.zm,$=Q?.mountList.some((e=>e===r&&"FileSystemAccess"===Q?.mntMap[e]?.getName()));if(!d&&!$){const e=(0,i.Wd)(s);if(A.push({action:()=>G(y()),label:"Cut"},{action:()=>N(y()),label:"Copy"},p.Os),(e||x||!k&&!s)&&A.push({action:()=>y().forEach((async t=>{const n=e&&!(await H(t)).isDirectory()?e:"FileExplorer";v(t,n)})),label:"Create shortcut"}),A.push({action:()=>y().forEach((e=>f(e))),label:"Delete"},{action:()=>o(W),label:"Rename"}),r)if(r===(0,S.join)(p.Ll,p.Bb)){if("function"===typeof FileSystemHandle){const e=(e,t)=>{K(e,t).then((e=>{Y("/",e),j("FileExplorer",{url:(0,S.join)("/",e)})})).catch((()=>{}))},t="showDirectoryPicker"in window,n="function"===typeof navigator.storage?.getDirectory&&!(0,R.vU)();A.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[p.Os]:[])}}else{A.unshift(p.Os),(p.Ao.has(k)||p.my.has(k))&&A.unshift({action:()=>h(r),label:"Extract Here"});const i=M.has(k),o=C.has(k),s=T.has(k);if(i||o||s){const e=i||s,t=e?i?L:O:D;A.unshift(p.Os,{label:"Convert to",menu:t.filter((e=>e!==k)).map((t=>{const a=t.replace(".","");return{action:async()=>{const t=await Promise.all(y().map((async e=>[e,await V(e)]))),i=e?(await n.e(8562).then(n.bind(n,28562))).transcode:(await n.e(7438).then(n.bind(n,27438))).convert,o=await i(t,a);await Promise.all(o.map((async e=>{let[t,n]=e;const a=(0,S.basename)(t),i=(0,S.dirname)(r);Y(i,await U(a,i,n))})))},label:a.toUpperCase()}}))})}p.Tj.includes(k)&&A.unshift(p.Os,{label:"Convert to",menu:p.Tj.filter((e=>e!==k)).map((e=>{const t=e.replace(".","");return{action:()=>{y().forEach((async e=>{const a=`${(0,S.dirname)(e)}/${(0,S.basename)(e,(0,S.extname)(e))}.${t}`,{convertSheet:i}=await n.e(4590).then(n.bind(n,39212)),o=await i(await V(e),t),s=(0,S.dirname)(r);Y(s,await U((0,S.basename)(a),s,I.from(o)))}))},label:t.toUpperCase()}}))});".m3u"!==k&&p.uH.has(k)&&A.unshift(p.Os,{action:()=>{y().forEach((async e=>{const t=`${(0,S.dirname)(e)}/${(0,S.basename)(e,(0,S.extname)(e))}.m3u`,{createM3uPlaylist:a,tracksFromPlaylist:i}=await n.e(4396).then(n.bind(n,24396)),o=a(await i((await V(e)).toString(),(0,R.RT)(e))),s=(0,S.dirname)(r);Y(s,await U((0,S.basename)(t),s,I.from(o)))}))},label:"Convert to M3U"}),A.unshift({action:()=>b(y()),label:"Add to archive..."},{action:()=>g(y()),label:"Download"}),x||"FileExplorer"===t||a.y.forEach((t=>{t===e||w.includes(t)||w.push(t)}))}A.unshift(p.Os)}$&&A.push(p.Os,{action:()=>X(r),label:"Disconnect"}),p.ru.has(s)&&A.unshift({action:()=>{j("Paint",{url:e})},label:"Edit"});const F=p.qy.has(k);if((F||p.lM.has(k)&&!p.GM.has(k))&&A.unshift({label:"Set as desktop background",...F?{action:()=>P(r)}:{menu:[{action:()=>P(r,"fill"),label:"Fill"},{action:()=>P(r,"fit"),label:"Fit"},{action:()=>P(r,"stretch"),label:"Stretch"},{action:()=>P(r,"tile"),label:"Tile"},{action:()=>P(r,"center"),label:"Center"}]}}),w.length>0&&A.unshift({label:"Open with",menu:w.map((e=>{const{icon:t,title:n}=E.Z[e]||{};return{action:()=>{Z(e,t)},icon:t,label:n}}))}),t){const{icon:n}=E.Z[t]||{};if(x&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")){const t=""===s||".zip"===s;A.unshift({action:()=>j("FileExplorer",{url:(0,S.dirname)(e)},""),label:`Open ${t?"folder":"file"} location`})}u&&"FileExplorer"===t&&!p.my.has(s)&&A.unshift({action:()=>{Z(t,n)},label:"Open in new window"}),A.unshift({action:()=>{"FileExplorer"===t&&u&&!p.my.has(s)?z(u,e):Z(t,n)},icon:n,label:"Open",primary:!0})}return A}))),[b,W,z,_,N,U,f,g,h,u,l,B,H,K,G,v,j,Z,r,t,V,d,Q?.mntMap,Q?.mountList,o,P,X,Y,e]);return{onContextMenuCapture:e=>{B||(w(),x(W)),q(e)},...J}};var z=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[r,a]=(0,m.useState)((()=>({icon:"",pid:"",url:""}))),o=(0,m.useRef)(!1),s=e=>{a(e),o.current=!1},{fs:c,rootFs:l}=(0,y.o)();return(0,m.useEffect)((()=>{if(!o.current&&c&&l){o.current=!0;const r=(0,R.RT)(e);!r||t&&!p.my.has(r)&&"FileSystemAccess"!==l.mntMap[e]?.getName()?(0,i.g7)(c,l,e,t,n,s):(0,i.Z7)(c,e,r,s)}}),[c,t,e,l,n]),[r,a]};var P=n(67398),W=n(33328),B=n(64145),Z=n(14304),N=n.n(Z),U=n(10217),H=n(68015),K=n(55872).Buffer;const G=N()((()=>n.e(6664).then(n.bind(n,47181)).then((e=>e.Down))),{loadableGenerated:{webpack:()=>[47181]}}),V=N()((()=>n.e(8912).then(n.bind(n,88912))),{loadableGenerated:{webpack:()=>[88912]}}),Q=[],X=[];var Y=e=>{let{fileActions:t,fileManagerId:n,fileManagerRef:c,focusedEntries:l,focusFunctions:u,hideShortcutIcon:d,isLoadingFileManager:b,loadIconImmediately:h,name:v,path:E,readOnly:k,renaming:x,selectionRect:F,setRenaming:M,stats:L,useNewFolderIcon:T,view:O}=e;const{blurEntry:C,focusEntry:D}=u,{url:I}=(0,A.z)(),[{comment:Z,getIcon:N,icon:Y,pid:_,subIcons:q,url:J},ee]=z(E,L.isDirectory(),T),te=$(J),{createPath:ne,exists:re,mkdirRecursive:ae,pasteList:ie,readFile:oe,stat:se,unlink:ce,updateFolder:le,writeFile:ue}=(0,y.o)(),[de,be]=(0,m.useState)(!1),{formats:fe,sizes:me}=(0,o.Fg)(),ge="list"===O,pe=(0,m.useRef)(null),he=(0,m.useRef)(null),ve=(0,S.basename)(E),we=(0,R.RT)(J),ye=(0,m.useMemo)((()=>p.lM.has(we)||p.qy.has(we)||(0,R.yk)(J)),[J,we]),Ae=1===l.length&&l[0]===ve,ke=(0,R.RT)(E),xe=ke===p.zm,Se=xe?J:E,$e=(0,P.Z)({callback:async(e,t)=>{if(!l.includes(ve)){const n=await ne(e,Se,t);n&&le(Se,n)}},directory:Se,onDragLeave:()=>pe.current?.parentElement?.classList.remove("focus-within"),onDragOver:()=>pe.current?.parentElement?.classList.add("focus-within")}),Fe="FileExplorer"===_,Me=(0,m.useMemo)((()=>((e,t,n,r)=>{const a=e.replace(/-/g,p.Zf),{lines:o}=(0,i.oc)(a,t,n,r);if(o.length>2)return`${(e.includes(" ")?o.slice(0,2).join(""):o[0]).slice(0,-3)}...`;return a})(v,me.fileEntry.fontSize,fe.systemFont,me.fileEntry[ge?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"])),[fe.systemFont,ge,v,me.fileEntry]),Le=(0,m.useRef)(null),Te=(0,m.useRef)(!1),Oe=(0,m.useRef)(!1),Re=(0,m.useRef)(),Ce=(0,m.useCallback)((async()=>{if(L.isDirectory())return"";if(xe)return Z||(J?J.startsWith("http:")||J.startsWith("https:")?decodeURIComponent(J):`Location: ${(0,S.basename)(J,(0,S.extname)(J))} (${(0,S.dirname)(J)})`:"");const e=a.Z[ke]?.type||`${ke.toUpperCase().replace(".","")} File`,t=L.size<0?await se(E):L,{size:n}=t,r=(0,i.GA)(E,t),o=(0,R.UR)(n);return`${`Type: ${e}${"-1"===o?"":`\nSize: ${o}`}`}\nDate modified: ${`${new Date(r).toISOString().slice(0,10)} ${new Intl.DateTimeFormat(p.ZW,fe.dateModified).format(r)}`}`}),[Z,ke,fe.dateModified,xe,E,se,L,J]),[De,Ie]=(0,m.useState)(),je=(0,m.useCallback)((()=>{Fe&&n&&!p.my.has(we)?(I(n,J),C()):Fe&&ge?be((e=>!e)):te(_,ye?void 0:Y)}),[C,I,n,Y,ye,ge,te,Fe,_,J,we]);return(0,m.useEffect)((()=>{if(!b&&!Te.current){const e=async()=>{if(Y.startsWith("blob:")||Y.startsWith("data:")){if(Y.startsWith("data:image/jpeg;base64,"))return;Te.current=!0;const e=(0,S.join)(p.Xo,`${E}${p.Qy}`);if(".ico"!==we&&!J.startsWith(p.OT)&&!J.startsWith(p.P7)&&!(await re(e))&&Le.current instanceof HTMLImageElement){const t=async()=>{if(Le.current instanceof HTMLImageElement){const n=()=>(X.shift(),X[0]?.());let r="";if(Le.current.currentSrc.startsWith("data:image/gif;base64,"))r=Le.current.currentSrc;else{const{clientHeight:e,clientWidth:n}=Le.current,{naturalHeight:a,naturalWidth:i}=Le.current,o=i/a;let s,c;o!==n/e&&(i>a?s=e/o:c=n*o);const l=await(0,R.mZ)();let u;try{u=await(l?.toCanvas(Le.current,{height:s,skipAutoScale:!0,style:{objectPosition:s?"top":c?"left":void 0},width:c}))}catch{}u&&!(0,R.Tv)(u)?r=u.toDataURL("image/png"):setTimeout(t,p.jx.WINDOW)}r&&X.push((async()=>{const t=(0,S.dirname)(e);await ae(t);const a=K.from(r.replace(/data:(.*);base64,/,""),"base64");return await ue(e,a,!0),ee((e=>({...e,icon:(0,R.YS)(a)}))),le(t,(0,S.basename)(e)),n()})),1===X.length&&await X[0]()}};Le.current.complete?t():Le.current.addEventListener("load",t,p.K7)}}else{if(Te.current)return;const e=(0,S.join)(p.Xo,`${E}${p.Qy}`);if(await re(e)){const t=await oe(e);if(t.length>=p.zj)Te.current||(Te.current=!0,ee((e=>({...e,icon:(0,R.YS)(t)}))));else try{await ce(e),le((0,S.dirname)(E))}catch{}}else!Oe.current&&pe.current&&"function"===typeof N&&(Oe.current=!0,new IntersectionObserver(((e,t)=>{let[{intersectionRatio:n}]=e;n>0&&(t.disconnect(),Re.current=new AbortController,N(Re.current.signal))}),{root:c.current,rootMargin:"5px"}).observe(pe.current))}};e()}}),[re,c,N,Y,b,ae,E,oe,ee,ce,le,J,we,ue]),(0,m.useEffect)((()=>()=>{try{Re?.current?.abort?.()}catch{}}),[]),(0,m.useLayoutEffect)((()=>{if(pe.current&&c.current){const e=l.includes(ve),t=Q.includes(ve),n=e||t;if(e&&t&&Q.splice(Q.indexOf(ve),1),F){const e=((e,t,n,r)=>{const{x:a=0,y:i=0,width:o=0,height:s=0}=n,c=new DOMRect(a,i,Number(o),Number(s));return!(e.left-t.left>=c.right||e.top-t.top>=c.bottom||e.right-t.left<=c.left||e.bottom-t.top+r<=c.top)})(pe.current.getBoundingClientRect(),c.current.getBoundingClientRect(),F,c.current.scrollTop);e&&!n?(Q.push(ve),D(ve),pe.current.focus(p.eS)):!e&&n&&C(ve)}else n&&1===l.length&&!pe.current.contains(document.activeElement)&&(C(),D(ve),pe.current.focus(p.eS))}}),[C,c,ve,D,l,F]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{ref:pe,"aria-label":v,onMouseOver:()=>Ce().then(Ie),title:De,...ge&&{...p.Cz,as:W.m.button},...(0,B.Z)(je,ge),...Fe&&$e,...j(J,_,E,M,t,u,l,n,k),children:(0,r.jsxs)(s,{ref:he,$renaming:x,...ge&&(0,H.G)(he.current),children:[(0,r.jsx)(g.Z,{ref:Le,$eager:h,$moving:"move"===ie[E],alt:v,src:Y,...f[O]}),(0,r.jsx)(w,{icon:Y,name:v,showShortcutIcon:Boolean(d||L.systemShortcut),subIcons:q,view:O}),x?(0,r.jsx)(V,{name:v,path:E,renameFile:(e,n)=>{t.renameFile(e,n),M("")}}):(0,r.jsx)("figcaption",{children:Ae&&v.length!==Me.length?v:Me}),ge&&Fe&&(0,r.jsx)(G,{flip:de})]})}),de&&(0,r.jsx)(Ee,{url:J,view:"list",hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})};const _=o.vJ`
  body {
    pointer-events: none;
  }
`,q=o.ZP.span.withConfig({componentId:"sc-4e222ce4-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.highlightBackground}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.highlight}`}};
  position: absolute;
  z-index: 2;
`;var J=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{}),(0,r.jsx)(q,{...e})]});const ee=p.i2/60;var te=e=>{const[t,n]=(0,m.useState)((()=>Object.create(null))),[r,a]=(0,m.useState)((()=>Object.create(null))),{x:i,y:o}=t,{height:s,width:c}=r,l=(0,m.useRef)(),{menu:u,setMenu:d}=(0,F.H)(),b=Object.keys(u).length>0,f="number"===typeof i&&"number"===typeof o,g=()=>{a(Object.create(null)),n(Object.create(null))},p=!b&&("number"===typeof c&&"number"===typeof s)&&f,h=p?{height:`${Math.abs(Number(s))}px`,transform:`translate(\n            ${Number(i)+(Number(c)<0?Number(c):0)}px,\n            ${Number(o)+(Number(s)<0?Number(s):0)}px)`,width:`${Math.abs(Number(c))}px`}:{};return{isSelecting:p,selectionEvents:{onMouseDown:t=>{let{clientX:r,clientY:i,target:o}=t;if(o===e.current){const{scrollTop:t}=e.current,{x:o=0,y:s=0}=e.current.getBoundingClientRect();a(Object.create(null)),n({x:r-o,y:i-s+t}),u&&d(Object.create(null))}},...f?{onMouseLeave:g,onMouseMove:t=>{let{clientX:n,clientY:r}=t;const{scrollTop:s=0}=e.current||{},{x:c=0,y:u=0}=e.current?.getBoundingClientRect()||{};l.current||(a({height:r-u-(o||0)+s,width:n-c-(i||0)}),l.current=window.setTimeout((()=>{l.current=void 0}),ee))},onMouseUp:g}:{}},selectionRect:p?{...t,...r}:void 0,selectionStyling:h}};var ne=(e,t,n,r,a)=>{let{blurEntry:i,focusEntry:o}=t;const s=(0,m.useRef)(n.current?.lastElementChild),[c,l]=(0,m.useState)(-1),{iconPositions:u,sortOrders:d,setIconPositions:b,setSortOrder:f}=(0,k.k)(),g=(0,m.useRef)(),h=(0,m.useRef)(Object.create(null)),v=(0,m.useRef)(!1),w=e=>{let{clientX:t,clientY:n}=e;h.current={...h.current,x:t,y:n}},y="MAIN"===n.current?.parentElement?.tagName,A=t=>r=>{(0,R.nK)(r),a&&e.length>0?((0,R.vi)(t,n.current,u,d,h.current,e,b),n.current?.removeEventListener("dragover",w)):-1!==c&&f(t,(t=>{const n=t.filter((t=>!e.includes(t)));return n.splice(c,0,...e),n})),i()},E=t=>n=>{let{target:r}=n;if(!a&&r instanceof HTMLLIElement){const{children:n=[]}=r.parentElement||{},a=e.includes(t);l(a?-1:[...n].indexOf(r))}},x=(t,r,i)=>c=>{if(i)(0,R.nK)(c);else{if(o(r),c.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(e.length<=1?[(0,S.join)(t,r)]:e.map((e=>(0,S.join)(t,e))))),e.length>1&&g.current){const r=Object.keys(u);a&&!v.current&&(s.current&&n.current?.lastElementChild&&n.current.lastElementChild!==s.current||e.every((e=>r.includes(`${t}/${e}`))))&&(v.current=!0);const i=y?c.nativeEvent.clientX:c.nativeEvent.offsetX,o=v.current?c.nativeEvent.clientY:c.nativeEvent.offsetY;c.nativeEvent.dataTransfer?.setDragImage(g.current,i,o),a&&!v.current&&(v.current=!0)}Object.assign(c.dataTransfer,{effectAllowed:"move"}),a&&(h.current=e.length>1?{offsetX:c.nativeEvent.offsetX,offsetY:c.nativeEvent.offsetY}:Object.create(null),n.current?.addEventListener("dragover",w,{passive:!0}))}},$=(0,m.useCallback)((async()=>{if(n.current){const e=[...n.current.querySelectorAll(".focus-within")];if(e.length>1){g.current?g.current.src="":g.current=new Image;const t=await(0,R.mZ)();let r;try{r=await(t?.toPng(n.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some((e=>e.contains(t))),imagePlaceholder:p.RJ,skipAutoScale:!0}))}catch{}r&&(g.current.src=r)}}}),[n]),F=(0,m.useRef)();return(0,m.useEffect)((()=>{n.current?.lastElementChild&&!s.current&&(s.current=n.current.lastElementChild)}),[n,e]),(0,m.useEffect)((()=>{F.current&&window.clearTimeout(F.current),F.current=window.setTimeout((()=>{F.current=void 0,$()}),p.i2/2)}),[e,$]),(0,m.useEffect)((()=>{!r&&e.length>1&&$()}),[e.length,r,$]),(e,t,n)=>({draggable:!0,onDragEnd:A(e),onDragOver:E(t),onDragStart:x(e,t,n),style:y?u[(0,S.join)(e,t)]:void 0})},re=n(2832),ae=n(45761);var ie=(e,t,n,r,a,i,o,s,c,l)=>{let{blurEntry:u,focusEntry:d}=a,{newPath:b,pasteToFolder:f}=i;const{copyEntries:g,deletePath:h,moveEntries:v}=(0,y.o)(),{url:w}=(0,A.z)(),{openTransferDialog:E}=(0,re.Z)(),{foregroundId:x}=(0,k.k)();return(0,m.useEffect)((()=>{const e=e=>{e.clipboardData?.files?.length&&(!x&&t===p.Ll||x===c)&&(e.stopImmediatePropagation?.(),(0,ae.W)(e.clipboardData.files,t,b).then(E))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)}),[x,c,b,E,t]),(0,m.useCallback)((a=>i=>{if("list"===l)return;const{ctrlKey:b,key:m,target:y,shiftKey:A}=i;if(!A)if(b){switch(m.toLowerCase()){case"a":if((0,R.nK)(i),y instanceof HTMLOListElement){const[e]=y.querySelectorAll("button");e?.focus(p.eS)}Object.keys(e).forEach((e=>d(e)));break;case"c":(0,R.nK)(i),g(n.map((e=>(0,S.join)(t,e))));break;case"x":(0,R.nK)(i),v(n.map((e=>(0,S.join)(t,e))));break;case"v":i.stopPropagation(),f()}}else switch(m){case"F2":a&&((0,R.nK)(i),r(a));break;case"F5":c&&((0,R.nK)(i),o());break;case"Delete":n.length>0&&((0,R.nK)(i),n.forEach((async e=>{const n=(0,S.join)(t,e);await h(n),o(void 0,n)})),u());break;case"Backspace":c&&((0,R.nK)(i),w(c,(0,S.dirname)(t)));break;case"Enter":y instanceof HTMLButtonElement&&((0,R.nK)(i),(0,R.TF)(y,2));break;default:if(m.startsWith("Arrow")){if((0,R.nK)(i),!(y instanceof HTMLElement))return;let e=y;if(!(y instanceof HTMLButtonElement)&&(e=y.querySelector("button"),!e))return;const{x:t,y:n,height:r,width:a}=e.getBoundingClientRect();let o="ArrowUp"===m||"ArrowDown"===m?document.elementFromPoint(t,n+("ArrowUp"===m?-r:2*r)):document.elementFromPoint(t+("ArrowLeft"===m?-a:2*a),n);if(o instanceof HTMLOListElement){const t=e.closest("li");if(t instanceof HTMLLIElement){const e=[...o.children],n=e.indexOf(t);"ArrowUp"!==m&&"ArrowDown"!==m||(o=e["ArrowUp"===m?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}const c=o?.closest("button");let l=c;c instanceof HTMLButtonElement&&s?.current?.contains(c)||(l=e),l?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}}),[u,w,g,h,s,e,d,n,c,v,f,r,o,t,l])};var oe=e=>{const[t,n]=(0,m.useState)([]),r=(0,m.useCallback)((e=>n(e?t=>t.filter((t=>t!==e)):[])),[]),a=(0,m.useCallback)((e=>n((t=>t.includes(e)?t:[...t,e]))),[]),i=(0,m.useRef)(!1),o=(0,m.useCallback)((t=>{const{relatedTarget:n,target:a}=t,o=e.current===n;o&&i.current?((0,R.nK)(t),a?.focus(p.eS)):!o&&n instanceof HTMLElement&&e.current?.contains(n)||r()}),[r,e]),s=(0,m.useCallback)((()=>{i.current=!0,window.requestAnimationFrame((()=>{i.current=!1}))}),[]);return{blurEntry:r,focusEntry:a,focusableEntry:e=>{const n=t.includes(e),i=1===t.length&&t[0]===e;return{className:(0,R.Wy)({"focus-within":n,"only-focused":i}),onBlurCapture:o,onFocusCapture:s,onMouseDown:t=>{let{ctrlKey:i}=t;i?n?r(e):a(e):n||(r(),a(e))}}},focusedEntries:t}},se=n(8082),ce=n(36551),le=n(65337),ue=n(55872).Buffer;const de=()=>window.WebampGlobal?.store.dispatch({enabled:!1,type:"SET_MILKDROP_DESKTOP"}),be=(0,i.sK)(".whtml"),fe=(0,i.sK)(".txt"),me="video/webm",ge="video/mp4";let pe,he=2;var ve=(e,t,r)=>{let{addToFolder:a,newPath:i,pasteToFolder:o,sortByOrder:[[s,c],l]}=t;const{contextMenu:u}=(0,F.H)(),{mapFs:d,pasteList:b={},readFile:f,writeFile:g,updateFolder:h}=(0,y.o)(),{setWallpaper:v,setIconPositions:w,wallpaperImage:E}=(0,k.k)(),x=(0,m.useCallback)((e=>{if("VANTA"===e){he-=1;const e=0===he;v("VANTA"+(e?" WIREFRAME":"")),e&&(he=2)}else he=2,v(e)}),[v]),{open:$}=(0,A.z)(),M=(0,m.useCallback)(((t,n)=>{w((t=>Object.fromEntries(Object.entries(t).filter((t=>{let[n]=t;return(0,S.dirname)(n)!==e}))))),l(""===t?e=>{let[t]=e;return[t,n]}:((e,t)=>n=>{let[r,a]=n;return[e,r===e?!a:t]})(t,n))}),[w,l,e]),L=(0,m.useMemo)((()=>r&&"function"===typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(me)||window?.MediaRecorder?.isTypeSupported(ge))&&!(0,R.G6)()),[r]),T=(0,m.useCallback)((async()=>{if(pe){const{active:e}=pe;if(pe.getTracks().forEach((e=>e.stop())),pe=void 0,e)return}const e={video:{frameRate:30},...!(0,R.vU)()&&!(0,R.G6)()&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}};pe=await navigator.mediaDevices.getDisplayMedia(e);const[t]=pe.getVideoTracks(),{height:r,width:a}=t.getSettings(),i=new MediaRecorder(pe,{bitsPerSecond:r&&a?r*a*30:void 0,mimeType:MediaRecorder.isTypeSupported(me)?me:ge}),o=`Screen Capture ${(0,R.gE)()}.webm`,s=(0,S.join)(p.Ll,o),c=Date.now();let l=!1;i.start(),i.addEventListener("dataavailable",(async e=>{const{data:t}=e;if(t){const e=ue.from(await t.arrayBuffer());if(await g(s,l?ue.concat([await f(s),e]):e,l),"inactive"===i.state){const{default:e}=await n.e(7280).then(n.t.bind(n,57280,23));e((0,R.V4)(await f(s)),Date.now()-c,(async e=>{await g(s,ue.from(await e.arrayBuffer()),!0),h(p.Ll,o)}))}l=!0}}))}),[f,h,g]),O=(0,le.Z)();return(0,m.useMemo)((()=>u?.((()=>{const t={action:()=>d(e).then((t=>{h(e,t),$("FileExplorer",{url:(0,S.join)(e,t)})})).catch((()=>{})),label:"Map directory"},n=[{action:()=>a(),label:"Add file(s)"},...(0,p.df)()?[t]:[]],l=document.querySelector("main .webamp-desktop canvas")instanceof HTMLCanvasElement;return[{label:"Sort by",menu:[{action:()=>M("name",!0),label:"Name",toggle:"name"===s},{action:()=>M("size",!1),label:"Size",toggle:"size"===s},{action:()=>M("type",!0),label:"Item type",toggle:"type"===s},{action:()=>M("date",!1),label:"Date modified",toggle:"date"===s},p.Os,{action:()=>M("",!0),label:"Ascending",toggle:c},{action:()=>M("",!1),label:"Descending",toggle:!c}]},{action:()=>h(e),label:"Refresh"},...r?[p.Os,{label:"Background",menu:ce.ov.filter((e=>{let{requiresWebGPU:t}=e;return!t||O})).reduce(((e,t)=>[...e,{action:()=>{l&&de?.(),t.id&&x(t.id)},label:t.name||t.id,toggle:t.startsWith?E.startsWith(t.id):E===t.id}]),l?[{action:de,checked:!0,label:"Music Visualization"},p.Os]:[])},...L?[{action:T,label:pe?.active?"Stop screen capture":"Capture screen"}]:[]]:[],p.Os,...n,{action:()=>$("Terminal",{url:e}),label:"Open Terminal here"},{action:()=>o(),disabled:0===Object.keys(b).length,label:"Paste"},p.Os,{label:"New",menu:[{action:()=>i("New folder",void 0,"rename"),icon:p.XN,label:"Folder"},p.Os,{action:()=>i("New Rich Text Document.whtml",ue.from(""),"rename"),icon:be,label:"Rich Text Document"},{action:()=>i("New Text Document.txt",ue.from(""),"rename"),icon:fe,label:"Text Document"}]},...r?[p.Os,{action:()=>$("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}))),[a,L,T,u,O,c,r,d,i,$,b,o,x,s,h,M,e,E])},we=n(42446);const ye=N()((()=>n.e(8228).then(n.bind(n,58228))),{loadableGenerated:{webpack:()=>[58228]}}),Ae=N()((()=>n.e(4039).then(n.bind(n,34039))),{loadableGenerated:{webpack:()=>[34039]}});var Ee=e=>{let{allowMovingDraggableEntries:t,hideFolders:n,hideLoading:a,hideScrolling:i,hideShortcutIcons:o,id:s,isDesktop:c,loadIconsImmediately:l,preloadShortcuts:u,readOnly:d,showStatusBar:f,skipFsWatcher:g,skipSorting:h,url:v,useNewFolderIcon:w,view:A}=e;const[E,k]=(0,m.useState)(v),[x,$]=(0,m.useState)(""),[F,M]=(0,m.useState)(!1),L=(0,m.useRef)(null),{focusedEntries:T,focusableEntry:O,...C}=oe(L),{fileActions:D,files:I,folderActions:j,isLoading:z,updateFiles:W}=(0,se.Z)(v,$,C,{hideFolders:n,hideLoading:a,preloadShortcuts:u,skipFsWatcher:g,skipSorting:h}),{mountFs:B,rootFs:Z,stat:N}=(0,y.o)(),{StyledFileEntry:U,StyledFileManager:H}=b[A],{isSelecting:K,selectionRect:G,selectionStyling:V,selectionEvents:Q}=te(L),X=ne(T,C,L,K,t),_=(0,P.Z)({callback:j.newPath,directory:v,updatePositions:t}),q=ve(v,j,c),ee=!a&&z||v!==E,re=ie(I,v,T,$,C,j,W,L,s,A),[ae,ce]=(0,m.useState)("prompt"),le=(0,m.useRef)(!1),ue=(0,m.useMemo)((()=>""===x?re():void 0),[re,x]);return(0,m.useEffect)((()=>{le.current||"granted"===ae||"FileSystemAccess"!==Z?.mntMap[E]?.getName()||(le.current=!0,(0,we.ZK)(E).then((e=>{const t="granted"===e;e&&!t||(ce("granted"),t&&W())})).catch((e=>{"Permission already granted"===e.message&&ce("granted")})).finally((()=>{le.current=!1})))}),[E,ae,Z?.mntMap,W]),(0,m.useEffect)((()=>{if(!F&&p.my.has((0,R.RT)(v))){(async()=>{(await N(v)).isDirectory()||M((e=>(e||B(v).then((()=>setTimeout(W,100))).catch((()=>{})),!0)))})()}}),[B,F,N,W,v]),(0,m.useEffect)((()=>{v!==E&&(j.resetFiles(),k(v),ce("denied"))}),[E,j,v]),(0,m.useEffect)((()=>{ee||L.current?.focus(p.eS)}),[ee]),(0,r.jsxs)(r.Fragment,{children:[ee?(0,r.jsx)(Ae,{}):(0,r.jsxs)(H,{ref:L,$scrollable:!i,onKeyDown:ue,...!d&&{$selecting:K,..._,...q,...Q},...p.LL,children:[K&&(0,r.jsx)(J,{style:V}),Object.keys(I).map((e=>(0,r.jsx)(U,{$selecting:K,$visible:!z,...!d&&X(v,e,x===e),...""===x&&{onKeyDown:re(e)},...O(e),children:(0,r.jsx)(Y,{fileActions:D,fileManagerId:s,fileManagerRef:L,focusFunctions:C,focusedEntries:T,hideShortcutIcon:o,isLoadingFileManager:z,loadIconImmediately:l,name:(0,S.basename)(e,p.zm),path:(0,S.join)(v,e),readOnly:d,renaming:x===e,selectionRect:G,setRenaming:$,stats:I[e],useNewFolderIcon:w,view:A})},e)))]}),f&&(0,r.jsx)(ye,{count:ee?0:Object.keys(I).length,directory:v,fileDrop:_,selected:T})]})}},67398:function(e,t,n){var r=n(2832),a=n(45761),i=n(8082),o=n(74479),s=n(15455),c=n(7211),l=n(82296),u=n(50959),d=n(95063),b=n(63270);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:f,onDragLeave:m,onDragOver:g,updatePositions:p}=e;const{url:h}=(0,s.z)(),{iconPositions:v,sortOrders:w,setIconPositions:y}=(0,c.k)(),{mkdirRecursive:A,updateFolder:E,writeFile:k}=(0,o.o)(),x=(0,u.useCallback)((async(e,t,n)=>{if(f)if(t){const r=(0,l.join)(d.Ll,e);await A(d.Ll),await k(r,t,!0)&&(n===i.v.UPDATE_URL&&h(f,r),E(d.Ll,e))}else n===i.v.UPDATE_URL&&h(f,e)}),[f,A,E,h,k]),{openTransferDialog:S}=(0,r.Z)();return{onDragLeave:m,onDragOver:e=>{g?.(e),(0,b.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,a.p4)(e);if(0===t.length&&""===r)return;const i={x:e.clientX,y:e.clientY};let o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,l.basename)(e)===(0,l.relative)(n,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,l.basename)(e,(0,l.extname)(e))} (${t})${(0,l.extname)(e)}`}while(v[r]);return(0,l.basename)(r)})),(0,b.vi)(n,e.target,v,w,i,o,y)}(0,a.WG)(e,t||x,n,S,Boolean(f))}}}},340:function(e,t,n){const r=n(74965).ZP.li.withConfig({componentId:"sc-9dbfdd33-0"})`
  display: ${e=>{let{$visible:t}=e;return t?"flex":"none"}};
  height: min-content;
  padding: 2px;

  &.focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      bottom: -1px;
      content: "";
      left: -1px;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.text}};
        font-size: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.fontSize}};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 0;
        text-shadow: ${e=>{let{theme:t}=e;return t.colors.fileEntry.textShadow}};
        word-break: break-word;
      }

      picture {
        height: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};
        width: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.background}};

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.border}`}};
    }
  }

  &.focus-within {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.backgroundFocused}};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocused}`}};
    }

    &:hover {
      background-color: ${e=>{let{theme:t,$selecting:n}=e;return n?t.colors.fileEntry.backgroundFocused:t.colors.fileEntry.backgroundFocusedHover}};

      &::before {
        border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocusedHover}`}};
      }
    }
  }
`;t.Z=r},47687:function(e,t,n){var r=n(74965),a=n(73317),i=n(95063);const o=r.ZP.ol.withConfig({componentId:"sc-796d7865-0"})`
  ${e=>{let{$scrollable:t}=e;return t?(0,a.Z)(i.BQ):void 0}};

  column-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.columnGap}};
  contain: strict;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryWidth})`}};
  grid-template-rows: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryHeight})`}};
  height: 100%;
  overflow: ${e=>{let{$scrollable:t}=e;return t?void 0:"hidden"}};
  padding: ${e=>{let{theme:t}=e;return t.sizes.fileManager.padding}};
  place-content: flex-start;
  pointer-events: ${e=>{let{$selecting:t}=e;return t?"auto":void 0}};
  row-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.rowGap}};

  main > & {
    grid-auto-flow: column;
    height: calc(100% - ${i.bK}px);
    overflow: visible;
    padding-bottom: 21px;
  }
`;t.Z=o},38827:function(e,t,n){const r=n(74965).ZP.ol.withConfig({componentId:"sc-b9b2a10d-0"})`
  margin-left: 7px;
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`;t.Z=r},64145:function(e,t,n){var r=n(50959),a=n(95063);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),i=(0,r.useRef)(0),o=(0,r.useCallback)((r=>{const o=()=>{r.stopPropagation(),e(r)},s=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},c=()=>{i.current>=5&&s(),void 0===n.current?(r.target.removeEventListener("pointermove",c),i.current=0):i.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(s,a.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",c,{passive:!0})):(s(),o())}),[e,t]);return{onClick:o}}},65337:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(50959);const a=()=>{const[e,t]=(0,r.useState)(),n=(0,r.useCallback)((async()=>t(await(async()=>{if("undefined"===typeof navigator)return!1;if(!("gpu"in navigator))return!1;let e;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,r.useEffect)((()=>{n()}),[n]),e}},73317:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(74965);const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",c={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return r.iv`
  overflow: auto;
  scrollbar-color: ${c[l].thumb} ${c[l].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${c[l].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${c[l].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${c[l].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${c[l].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${c[l].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${c[l].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${c[l].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${c[l].buttonHover};
    }

    &:active {
      background-color: ${c[l].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===n?"center":`${n}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${i});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${s});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${c[l].blendMode};
  }
`}},68015:function(e,t,n){n.d(t,{G:function(){return r}});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?{onMouseLeave:()=>e.removeAttribute("style"),onMouseMove:n=>{let{clientX:r,clientY:a,target:i}=n;if(e.contains(i)){const{left:n,top:i}=e.getBoundingClientRect(),o=r-n,s=a-i;Object.assign(e.style,{background:t?void 0:`radial-gradient(circle at ${o}px ${s}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,borderImage:`radial-gradient(20% 75% at ${o}px ${s}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch`})}}}:{}}}}]);