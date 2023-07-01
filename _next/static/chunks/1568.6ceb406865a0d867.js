"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1568],{71568:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var i=n(11527),r=n(60396);var s=r.ZP.div.withConfig({componentId:"sc-9c70fec5-0"})`
  font-size: 13px;
  overflow-x: hidden;
  overflow-y: scroll;

  ${e=>{let{$drop:t}=e;return t&&r.iv`
      &::before {
        content: "Drop OTF/TTF/WOFF file here";
        display: flex;
        font-size: 16px;
        font-weight: 600;
        height: 100%;
        left: 0;
        place-content: center;
        place-items: center;
        position: absolute;
        top: 0;
        width: 100%;
      }
    `}}

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
`,o=n(13364),a=n(97147),l=n(59062),c=n(5530),u=n(50959),f=n(76022);const d=[12,18,24,36,48,60,72],p=e=>e?e.en||Object.values(e)[0]:"",h=e=>{let{font:t,fontSize:n,hideLabel:r,text:s}=e;const o=(0,u.useRef)(null),a=(0,i.jsx)("canvas",{ref:o});return(0,u.useEffect)((()=>{if(!t||!o.current)return;const e=Math.ceil(1.3333333333333333*n),i=t.getPath(s||"The quick brown fox jumps over the lazy dog. 1234567890",0,e,e),{x2:r,y2:a}=i.getBoundingBox();o.current.setAttribute("height",`${Math.ceil(a)}`),o.current.setAttribute("width",`${Math.ceil(r)}`),i.draw(o.current.getContext("2d"))}),[t,n,s]),r?a:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:n}),a]})};var x=e=>{let{id:t}=e;const{processes:{[t]:{url:r=""}={}}={},title:x}=(0,l.z)(),{readFile:m}=(0,a.o)(),[g,v]=(0,u.useState)(),[b,y]=(0,u.useState)(!0),j=(0,u.useCallback)((async e=>{y(!1);const{default:t}=await Promise.all([n.e(8824),n.e(1281)]).then(n.bind(n,19868)),{buffer:i}=await m(e);try{v(t.parse(i))}catch{y(!0)}}),[m]),{name:w,types:L,version:T}=(0,u.useMemo)((()=>{const e=[];return g?.supported&&e.push("OpenType Layout"),"truetype"===g?.outlinesFormat&&e.push("TrueType Outlines"),{name:p(g?.names.fullName),types:e.join(", "),version:p(g?.names.version)}}),[g]);return(0,u.useEffect)((()=>{r&&j(r)}),[j,r]),(0,u.useEffect)((()=>x(t,w?`${w} (${c.Z.OpenType.title})`:c.Z.OpenType.title)),[t,w,x]),(0,i.jsx)(s,{$drop:b,...(0,o.Z)({id:t}),onContextMenuCapture:f.nK,children:g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Font name: ",w]}),(0,i.jsxs)("li",{children:["Version: ",T]}),(0,i.jsx)("li",{children:L})]}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(h,{font:g,fontSize:15,text:"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",hideLabel:!0})}),(0,i.jsx)("li",{children:(0,i.jsx)(h,{font:g,fontSize:15,text:"1234567890.:,; ' \" (!?) +-*/=",hideLabel:!0})})]}),(0,i.jsx)("ol",{children:d.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(h,{font:g,fontSize:e})},e)))})]})})}},13364:function(e,t,n){var i=n(23862),r=n(38167),s=n(69229),o=n(97147),a=n(59062),l=n(31422),c=n(95654),u=n(50959),f=n(80437),d=n(76022);t.Z=e=>{let{callback:t,directory:n=f.Ll,id:p,onDragLeave:h,onDragOver:x,updatePositions:m}=e;const{url:g}=(0,a.z)(),{iconPositions:v,sortOrders:b,setIconPositions:y}=(0,l.k)(),{mkdirRecursive:j,updateFolder:w,writeFile:L}=(0,o.o)(),T=(0,u.useCallback)((async(e,t,n)=>{if(p)if(t){const i=(0,c.join)(f.Ll,e);await j(f.Ll),await L(i,t,!0)&&(n===s.v.UPDATE_URL&&g(p,i),w(f.Ll,e))}else n===s.v.UPDATE_URL&&g(p,e)}),[p,j,w,g,L]),{openTransferDialog:F}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{x?.(e),(0,d.nK)(e)},onDrop:e=>{if(!f.my.has((0,d.RT)(n))){if(m&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,r.p4)(e);if(0===t.length&&""===i)return;const s={x:e.clientX,y:e.clientY};let o=[];if(i){try{o=JSON.parse(i)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;o=o.map((e=>(0,c.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[i]);return(0,c.basename)(i)})),(0,d.vi)(n,e.target,v,b,s,o,y)}(0,r.WG)(e,t||T,n,F,Boolean(p))}}}}}}]);