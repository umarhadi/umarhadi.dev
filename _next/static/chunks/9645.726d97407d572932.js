"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9645],{8295:function(e,n,t){var r=t(1527),i=t(7398),o=t(5455),a=t(4304),s=t.n(a),l=t(959);const c=s()((()=>t.e(4039).then(t.bind(t,4039))),{loadableGenerated:{webpack:()=>[4039]}});n.Z=e=>{let{id:n,useHook:t,StyledComponent:a,children:s}=e;const{processes:{[n]:{url:u=""}={}}}=(0,o.z)(),d=(0,l.useRef)(null),[f,m]=(0,l.useState)(!0),w=(0,l.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return t(n,u,d,m,f),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(c,{}),(0,r.jsx)(a,{ref:d,style:w,...(0,i.Z)({id:n}),children:s})]})}},9645:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(1527),i=t(8295);var o=t(4965).ZP.div.withConfig({componentId:"sc-8b072f9d-0"})`
  canvas {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;const a="/Program Files/DX-Ball/dx-ball.sav",s=["DXBall","audioName","i","source","game","soundon","saveron","myFonts","font","animframe","color","FontList","lFile","canvas","ctx","file","c","descender","_0x56c3xc","temp","cl","user","paus","paused","naudio","nflash","audio","balls","bricks","bullets","bang","flash","records","lightning","shadow","chcur","highscore","saver","y","x","mouse","paddle","bonus","requestAnimFrame","curX","j","height","xp","yp","_0x56c3x8","vm"];var l=t(4479),c=t(5455),u=t(2296),d=t(959),f=t(5063),m=t(3270),w=t(4306);var b=(e,n,t,r)=>{const{readFile:i,writeFile:o,updateFolder:b}=(0,l.o)(),{processes:{[e]:p}}=(0,c.z)(),{closing:h,libs:v=[]}=p||{},g=(0,d.useRef)(),x=(0,d.useRef)(!0);(0,d.useEffect)((()=>{i(a).then((e=>{g.current=e.toString()})).catch((()=>{g.current=""}))}),[i]),(0,d.useEffect)((()=>{x.current&&(x.current=!1,(0,m.mb)(v,void 0,!0).then((()=>{window.DXBall?.init(((e,n)=>(g.current=`${g.current?`${g.current}\r`:""}#&${n}&${e}`.split("\r").map((e=>e.split("&"))).sort(((e,n)=>{let[,t]=e,[,r]=n;return Number(r)-Number(t)})).map(((e,n)=>{let[,t,r]=e;return`${n}&${t}&${r}`})).join("\r"),o(a,g.current,!0),b((0,u.dirname)(a),(0,u.basename)(a)),`${g.current}\r`))),r(!1)})))}),[v,r,b,o]),(0,d.useEffect)((()=>()=>{!x.current&&h&&(window.DXBall.close(),setTimeout((()=>(0,w.od)(s)),f.jx.WINDOW))}),[h])};var p=e=>{let{id:n}=e;return(0,r.jsx)(i.Z,{StyledComponent:o,id:n,useHook:b,children:(0,r.jsx)("canvas",{id:"dx-ball",onContextMenuCapture:m.nK})})}},7398:function(e,n,t){var r=t(2832),i=t(5761),o=t(8082),a=t(4479),s=t(5455),l=t(7211),c=t(2296),u=t(959),d=t(5063),f=t(3270);n.Z=e=>{let{callback:n,directory:t=d.Ll,id:m,onDragLeave:w,onDragOver:b,updatePositions:p}=e;const{url:h}=(0,s.z)(),{iconPositions:v,sortOrders:g,setIconPositions:x}=(0,l.k)(),{mkdirRecursive:y,updateFolder:k,writeFile:D}=(0,a.o)(),$=(0,u.useCallback)((async(e,n,t)=>{if(m)if(n){const r=(0,c.join)(d.Ll,e);await y(d.Ll),await D(r,n,!0)&&(t===o.v.UPDATE_URL&&h(m,r),k(d.Ll,e))}else t===o.v.UPDATE_URL&&h(m,e)}),[m,y,k,h,D]),{openTransferDialog:j}=(0,r.Z)();return{onDragLeave:w,onDragOver:e=>{b?.(e),(0,f.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:n,text:r}=(0,i.p4)(e);if(0===n.length&&""===r)return;const o={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(t)&&(0,c.basename)(e)===(0,c.relative)(t,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!v[`${t}/${e}`])return e;let n=0,r="";do{n+=1,r=`${t}/${(0,c.basename)(e,(0,c.extname)(e))} (${n})${(0,c.extname)(e)}`}while(v[r]);return(0,c.basename)(r)})),(0,f.vi)(t,e.target,v,g,o,a,x)}(0,i.WG)(e,n||$,t,j,Boolean(m))}}}},4306:function(e,n,t){t.d(n,{H3:function(){return a},od:function(){return r},wz:function(){return o}});const r=e=>e.forEach((e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}})),i=(e,n)=>{window.lockedGlobals={...window.lockedGlobals,[e]:n}},o=e=>i(e,!0),a=e=>{Object.getOwnPropertyDescriptor(window,e)||(e=>{let n;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:n,set(t){window.lockedGlobals?.[e]||(n=t)}})})(e),i(e,!1)}}}]);