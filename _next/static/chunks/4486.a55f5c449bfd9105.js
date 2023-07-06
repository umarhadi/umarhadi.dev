"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4486],{70023:function(e,t,r){var o=r(11527),i=r(9297),n=r(32652),s=r(30952),a=r.n(s),l=r(50959);const c=a()((()=>r.e(4158).then(r.bind(r,24158))),{loadableGenerated:{webpack:()=>[24158]}}),d=e=>{let{id:t,useHook:r,StyledComponent:s,children:a}=e;const{processes:{[t]:{url:d=""}={}}}=(0,n.z)(),u=(0,l.useRef)(null),[p,h]=(0,l.useState)(!0),g=(0,l.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return r({containerRef:u,id:t,loading:p,setLoading:h,url:d}),(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(c,{}),(0,o.jsx)(s,{ref:u,style:g,...(0,i.Z)({id:t}),children:a})]})};t.Z=(0,l.memo)(d)},54486:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var o=r(11527),i=r(70023);var n=r(6444).ZP.div.withConfig({componentId:"sc-18f759b6-0"})`
  display: flex;
  height: 100%;
  width: 100%;

  .video-js {
    height: 100%;
    width: 100%;

    .vjs-big-play-button {
      display: none;
    }

    .vjs-control-bar {
      background-color: rgb(240, 240, 240);
      padding: 0 1;

      &:not(.no-interaction) {
        display: flex !important;
        opacity: 100% !important;
      }

      .no-interaction {
        display: none !important;
        opacity: 0% !important;
        pointer-events: none !important;
      }
    }

    &.vjs-youtube,
    &.vjs-fullscreen.vjs-user-inactive {
      .vjs-control-bar {
        opacity: 0% !important;
      }
    }

    .vjs-button {
      color: rgb(116, 116, 116);
      height: 28px;
      position: relative;
      width: 28px;
      z-index: 0;

      &::after {
        background-color: rgb(225, 225, 225);
        border: 1px solid rgb(173, 173, 173);
        content: "";
        height: calc(100% - 4px);
        left: 0;
        margin: 2px 0 0 2px;
        position: absolute;
        top: 1px;
        width: calc(100% - 4px);
        z-index: -1;
      }

      &:hover {
        &::after {
          background-color: rgb(229, 241, 251);
          border-color: rgb(0, 120, 215);
        }
      }

      &:active {
        &::after {
          background-color: rgb(204, 228, 247);
          border-color: rgb(0, 84, 153);
        }
      }
    }

    .vjs-current-time,
    .vjs-duration {
      display: block;
    }

    .vjs-current-time {
      padding-left: 8px;
      padding-right: 2px;
    }

    .vjs-duration {
      padding-left: 2px;
      padding-right: 8px;
    }

    .vjs-current-time-display,
    .vjs-duration-display {
      color: #000;
      font-family: sans-serif;
      font-size: 11px;
    }

    .vjs-picture-in-picture-control {
      margin: 0 -2px;
    }

    .vjs-load-progress {
      border-radius: 5px;

      div {
        background: linear-gradient(
          180deg,
          rgb(189, 189, 189) 0%,
          rgb(219, 219, 219) 100%
        );
        border-radius: 5px;
      }
    }

    .vjs-play-progress {
      background: linear-gradient(
        180deg,
        rgb(44, 137, 224) 0%,
        rgb(40, 125, 204) 100%
      );
      border-radius: 5px;

      &::before {
        color: rgb(237, 237, 237);
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
        top: -3px;
      }
    }

    .vjs-progress-holder {
      border-radius: 5px;
      font-size: 1.7em !important;
      height: 9px;
    }

    .vjs-volume-control {
      background-color: rgb(240, 240, 240);
      border-radius: 5px 5px 0 0;
      left: -28px !important;
      position: relative;

      .vjs-volume-bar {
        height: 5.5em;
        margin: 1.5em auto;
      }

      .vjs-volume-level {
        background: linear-gradient(
          180deg,
          rgb(247, 76, 100) 0%,
          rgb(125, 210, 125) 50%
        );
        border-radius: 5px;
        color: rgb(237, 237, 237);
        font-size: 1.5em;
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
      }
    }

    .vjs-volume-panel {
      width: 28px !important;
    }

    .vjs-fullscreen-control,
    .vjs-play-control {
      .vjs-icon-placeholder {
        &::before {
          font-size: 2.4em;
          top: -5px;
        }
      }
    }

    .vjs-poster {
      background-size: contain;
    }

    video {
      background-image: url("/System/Icons/48x48/vlc.webp");
      background-position: center calc(50% - 15px);
      background-repeat: no-repeat;
      padding-bottom: 30px;
    }
  }
`;const s="video/youtube",a={1:4,2:2,3:1,4:.5},l={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:1e3,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}};var c=r(10047),d=r(7217),u=r(31621),p=r(31266),h=r(32652),g=r(735),b=r(50959),m=r(71059),v=r(46429);var x=e=>{let{containerRef:t,id:r,loading:o,setLoading:i,url:n}=e;const{readFile:x}=(0,p.o)(),{linkElement:f,processes:{[r]:{closing:y=!1,libs:w=[]}={}}}=(0,h.z)(),{updateWindowSize:k}=(0,u.Z)(r),[j,T]=(0,b.useState)(),{prependFileToTitle:z}=(0,d.Z)(r),L=(0,b.useCallback)((()=>{const{src:e=[]}=j?.getMedia()||{};if(Array.isArray(e)&&e.length>0){const[{src:t,url:r}]=e;t.startsWith("blob:")&&(r!==n||y)&&(0,v.EK)(t)}}),[y,j,n]),C=(0,b.useCallback)((async()=>{L();const e=(0,v.yk)(n),t=e?s:(0,c.bh)(n)||m.iS;return{src:e?n:(0,v.YS)(await x(n),(0,v.G6)()?t:void 0),type:t,url:n}}),[L,x,n]),$=(0,b.useCallback)((()=>{const[e]=t.current?.childNodes??[],o=window.videojs(e,l,(()=>{o.on("firstplay",(()=>{const[e,t]=[o.videoHeight(),o.videoWidth()],[r,i]=[(0,v.sI)(),(0,v.E9)()];if(e&&t){const o=30+e;o>r||t>i?k(i*(o/t),i):k(o,t)}}));const s=()=>{try{o.isFullscreen()?o.exitFullscreen():o.requestFullscreen()}catch{}};e.addEventListener("dblclick",s),e.addEventListener("mousewheel",(e=>{o.volume(o.volume()+(e.deltaY>0?-.1:.1))}),{passive:!0}),t.current?.closest("section")?.addEventListener("keydown",(e=>{let{key:t,altKey:r,ctrlKey:i}=e;if(r)a[t]?k(o.videoHeight()/a[t],o.videoWidth()/a[t]):"Enter"===t&&s();else if(!i)switch(t){case" ":o.paused()?o.play():o.pause();break;case"ArrowUp":o.volume(o.volume()+.1);break;case"ArrowDown":o.volume(o.volume()-.1);break;case"ArrowLeft":o.currentTime(o.currentTime()-10);break;case"ArrowRight":o.currentTime(o.currentTime()+10)}})),T(o),i(!1),(0,v.yk)(n)||f(r,"peekElement",e)}))}),[t,r,f,i,k,n]),E=(0,b.useCallback)((e=>{const r=t.current?.querySelector(".vjs-control-bar");r instanceof HTMLElement&&(e===s?r.classList.add("no-interaction"):r.classList.remove("no-interaction"))}),[t]),R=(0,b.useCallback)((async()=>{if(j&&n)try{const e=await C();j.src(e),E(e.type),z((0,v.yk)(n)?"YouTube":(0,g.basename)(n))}catch{}}),[C,E,j,z,n]);(0,b.useEffect)((()=>(o&&!j&&(0,v.mb)(w).then((()=>{void 0!==window.videojs&&$()})),()=>{y&&(L(),j?.dispose())})),[L,y,w,$,o,j]),(0,b.useEffect)((()=>{!o&&!y&&j&&n&&R()}),[y,R,o,j,n])};var f=e=>{let{id:t}=e;return(0,o.jsx)(i.Z,{StyledComponent:n,id:t,useHook:x,children:(0,o.jsx)("video",{className:"video-js vjs-big-play-centered",autoPlay:!0})})}},9297:function(e,t,r){var o=r(32026),i=r(62358),n=r(34917),s=r(31266),a=r(32652),l=r(64037),c=r(735),d=r(50959),u=r(71059),p=r(46429);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:h,onDragLeave:g,onDragOver:b,updatePositions:m}=e;const{url:v}=(0,a.z)(),{iconPositions:x,sortOrders:f,setIconPositions:y}=(0,l.k)(),{mkdirRecursive:w,updateFolder:k,writeFile:j}=(0,s.o)(),T=(0,d.useCallback)((async(e,t,r)=>{if(h)if(t){const o=(0,c.join)(u.Ll,e);await w(u.Ll),await j(o,t,!0)&&(r===n.v.UPDATE_URL&&v(h,o),k(u.Ll,e))}else r===n.v.UPDATE_URL&&v(h,e)}),[h,w,k,v,j]),{openTransferDialog:z}=(0,o.Z)();return{onDragLeave:g,onDragOver:e=>{b?.(e),(0,p.nK)(e)},onDrop:e=>{if(!u.my.has((0,p.RT)(r))){if(m&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,i.p4)(e);if(0===t.length&&""===o)return;const n={x:e.clientX,y:e.clientY};let s=[];if(o){try{s=JSON.parse(o)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(r)&&(0,c.basename)(e)===(0,c.relative)(r,e))return;s=s.map((e=>(0,c.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!x[`${r}/${e}`])return e;let t=0,o="";do{t+=1,o=`${r}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(x[o]);return(0,c.basename)(o)})),(0,p.vi)(r,e.target,x,f,n,s,y)}(0,i.WG)(e,t||T,r,z,Boolean(h))}}}}},39865:function(e,t,r){r.d(t,{BS:function(){return s},FC:function(){return i},F_:function(){return o},wV:function(){return n}});const o={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},i={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,s=166,a={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${s}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=a},57012:function(e,t,r){r.d(t,{Rf:function(){return a},b$:function(){return d},hu:function(){return s},ix:function(){return c},mZ:function(){return l}});var o=r(39865),i=r(71059),n=r(46429);const s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const[s]=e.split(i.CC),a=`${s}${i.CC}`,l=r.find((e=>e.startsWith(a)))||"",{componentWindow:c}=t?.[l]||{},{x:d=0,y:u=0,width:p=0,height:h=0}=c?.getBoundingClientRect()||{},g=d+o+p>(0,n.E9)()||u+o+h>(0,n.sI)();return g||!d&&!u?void 0:{x:d+o,y:u+o}},a=e=>{let{height:t,width:r}=e;const[o,s]=[(0,n.sI)(),(0,n.E9)()];return{x:Math.floor(s/2-(0,n.Vy)(r)/2),y:Math.floor((o-i.bK)/2-(0,n.Vy)(t)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{position:o,size:i}=e||{},{x:s=0,y:a=0}=o||{},{height:c=0,width:d=0}=i||{};return r?s+l.RIGHT>t.x||s+(0,n.Vy)(d)-l.LEFT<0||a+l.BOTTOM>t.y||a+l.TOP<0:s<0||a<0||s+(0,n.Vy)(d)>t.x||a+(0,n.Vy)(c)>t.y},d=(e,t)=>{const r=Number(e.height),s=Number(e.width),[a,l]=[(0,n.sI)(),(0,n.E9)()],c=a-i.bK,d=Math.max(o.wV,Math.min(r,c)),u=Math.max(o.BS,Math.min(s,l));if(!t)return{height:d,width:u};const p=r===d,h=s===u;return p||h?p?h?{height:d,width:u}:{height:Math.round(d/(s/u)),width:u}:{height:d,width:Math.round(u/(r/d))}:r>s?{height:d,width:Math.round(u/(c/d))}:{height:Math.round(d/(l/u)),width:u}}},7217:function(e,t,r){var o=r(32652),i=r(81030),n=r(50959),s=r(71059);t.Z=e=>{const{title:t}=(0,o.z)(),[r]=e.split(s.CC),{title:a}=i.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)(((r,o)=>{const i=r?` - ${r}${o?` ${s.xy}`:""}`:"";t(e,`${a}${i}`)}),[e,a,t]),prependFileToTitle:(0,n.useCallback)(((r,o,i)=>{const n=r?`${o?`${s.xy} `:""}${r}${i?" ":" - "}`:"";t(e,`${n}${a}`)}),[e,a,t])}}},31621:function(e,t,r){var o=r(57012),i=r(32652),n=r(64037),s=r(50959),a=r(6444);t.Z=e=>{const{setWindowStates:t}=(0,n.k)(),{processes:{[e]:{lockAspectRatio:r=!1,maximized:l=!1}={}}={}}=(0,i.z)(),{sizes:{titleBar:c}}=(0,a.Fg)();return{updateWindowSize:(0,s.useCallback)(((i,n)=>t((t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,o.b$)({height:i+c.height,width:n},r)}})))),[e,r,l,t,c.height])}}}}]);