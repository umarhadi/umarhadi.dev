"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6744,6022],{36744:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(11527);const r=[["Libera.Chat","web.libera.chat/webirc/websocket/"],["ergo","irc.ergo.chat/webirc"],["ErgoTestnet","testnet.ergo.chat/webirc"],["InspIRCd Testnet","testnet.inspircd.org",8097]];var o=n(46022),c=n(431),s=n(87121),a=n(50959),l=n(90810);var f=e=>{let{id:t}=e;const{linkElement:n,processes:{[t]:{libs:[f=""]=[]}={}}={},title:u}=(0,c.z)(),[d,w]=(0,a.useState)(!1),[h,g]=(0,a.useState)([]),p=(0,a.useRef)(null);return(0,a.useEffect)((()=>{window.localStorage.getItem("kiwiirc")||window.localStorage.setItem("kiwiirc",JSON.stringify((e=>{const t=`${e}${[9,9,9,9].map((e=>Math.floor(Math.random()*e))).join("")}`;return{networks:r.map(((e,n)=>{let[i,r,o=443]=e;return{buffers:[{enabled:!0,name:"*",settings:{}}],connection:{direct:!0,encoding:"utf8",nick:t,port:o,server:r,tls:!0},id:n+1,name:i,settings:{show_raw_caps:!1}}}))}})("Guest")))}),[]),(0,a.useEffect)((()=>{if(d&&p.current?.contentWindow){const e=p.current.contentWindow;e?.kiwi.on("irc.join",((e,t)=>{let{channel:n}=e,{name:i}=t;return g((e=>[...new Set([...e,`${n}/${i}`])]))})),e?.kiwi.on("irc.part",((e,t)=>{let{channel:n}=e,{name:i}=t;return g((e=>e.filter((e=>e!==`${n}/${i}`))))})),n(t,"peekElement",p.current)}}),[t,n,d]),(0,a.useEffect)((()=>{u(t,`${s.Z.IRC.title}${0===h.length?"":` - ${h.join(", ")}`}`)}),[h,t,u]),(0,i.jsxs)("div",{children:[!d&&(0,i.jsx)(o.default,{}),(0,i.jsx)("iframe",{ref:p,height:"100%",onLoad:()=>w(!0),src:f,title:t,width:"100%",...l.v0})]})}},46022:function(e,t,n){n.r(t);const i=n(86692).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=i}}]);