"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1245],{1245:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=n(1527);var r=n(4965).ZP.div.withConfig({componentId:"sc-f5308132-0"})`
  font-size: 13px;
  overflow-x: hidden;
  overflow-y: scroll;

  ol {
    &:not(:last-child) {
      border-bottom: 1px solid #000;
    }

    padding: 2px 0;
  }

  figure {
    align-items: center;
    display: flex;
    padding-top: 2px;

    figcaption {
      padding-right: 15px;
    }
  }
`,s=n(7398),a=n(4479),o=n(5455),l=n(6870),c=n(959),u=n(3270);const f=[12,18,24,36,48,60,72],d=e=>e?e.en||Object.values(e)[0]:"",p=e=>{let{font:t,fontSize:n,hideLabel:r,text:s}=e;const a=(0,c.useRef)(null),o=(0,i.jsx)("canvas",{ref:a});return(0,c.useEffect)((()=>{if(!t||!a.current)return;const e=Math.ceil(1.3333333333333333*n),i=t.getPath(s||"The quick brown fox jumps over the lazy dog. 1234567890",0,e,e),{x2:r,y2:o}=i.getBoundingBox();a.current.setAttribute("height",`${Math.ceil(o)}`),a.current.setAttribute("width",`${Math.ceil(r)}`),i.draw(a.current.getContext("2d"))}),[t,n,s]),r?o:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:n}),o]})};var h=e=>{let{id:t}=e;const{processes:{[t]:{url:h=""}={}}={},title:x}=(0,o.z)(),{readFile:m}=(0,a.o)(),[g,v]=(0,c.useState)(),j=(0,c.useCallback)((async e=>{const{default:t}=await Promise.all([n.e(8824),n.e(1281)]).then(n.bind(n,9868)),{buffer:i}=await m(e);v(t.parse(i))}),[m]),{name:b,types:y,version:w}=(0,c.useMemo)((()=>{const e=[];return g?.supported&&e.push("OpenType Layout"),"truetype"===g?.outlinesFormat&&e.push("TrueType Outlines"),{name:d(g?.names.fullName),types:e.join(", "),version:d(g?.names.version)}}),[g]);return(0,c.useEffect)((()=>{h&&j(h)}),[j,h]),(0,c.useEffect)((()=>x(t,b?`${b} (${l.Z.OpenType.title})`:l.Z.OpenType.title)),[t,b,x]),(0,i.jsx)(r,{...(0,s.Z)({id:t}),onContextMenuCapture:u.nK,children:g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Font name: ",b]}),(0,i.jsxs)("li",{children:["Version: ",w]}),(0,i.jsx)("li",{children:y})]}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(p,{font:g,fontSize:15,text:"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",hideLabel:!0})}),(0,i.jsx)("li",{children:(0,i.jsx)(p,{font:g,fontSize:15,text:"1234567890.:,; ' \" (!?) +-*/=",hideLabel:!0})})]}),(0,i.jsx)("ol",{children:f.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(p,{font:g,fontSize:e})},e)))})]})})}},7398:function(e,t,n){var i=n(2832),r=n(5761),s=n(8082),a=n(4479),o=n(5455),l=n(7211),c=n(2296),u=n(959),f=n(5063),d=n(3270);t.Z=e=>{let{callback:t,directory:n=f.Ll,id:p,onDragLeave:h,onDragOver:x,updatePositions:m}=e;const{url:g}=(0,o.z)(),{iconPositions:v,sortOrders:j,setIconPositions:b}=(0,l.k)(),{mkdirRecursive:y,updateFolder:w,writeFile:L}=(0,a.o)(),k=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const i=(0,c.join)(f.Ll,e);await y(f.Ll),await L(i,t,!0)&&(n===s.v.UPDATE_URL&&g(p,i),w(f.Ll,e))}else n===s.v.UPDATE_URL&&g(p,e)}),[p,y,w,g,L]),{openTransferDialog:T}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{x?.(e),(0,d.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,r.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let a=[];if(i){try{a=JSON.parse(i)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[i]);return(0,c.basename)(i)})),(0,d.vi)(n,e.target,v,j,s,a,b)}(0,r.WG)(e,t||k,n,T,Boolean(p))}}}}}]);