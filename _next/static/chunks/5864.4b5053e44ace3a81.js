"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5864],{68380:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var i=r(11527),n=r(80039),s=r(7372);var o=e=>{let{id:t,onClick:r}=e;const{closeWithTransition:o}=(0,s.z)();return(0,i.jsxs)("nav",{className:"buttons",children:[(0,i.jsx)(n.Z,{onClick:r,children:"OK"}),(0,i.jsx)(n.Z,{onClick:()=>o(t),children:"Cancel"})]})},c=r(46948),l=r(50959);var a=e=>{const{stat:t}=(0,c.o)(),[r,i]=(0,l.useState)();return(0,l.useEffect)((()=>{!r&&e&&t(e).then(i)}),[t,r,e]),r},d=r(49231),p=r(50106),x=r(5738),h=r(11629),u=r(93203),f=r(70286);const g=e=>e?.toLocaleString(u.ZW,{dateStyle:"long",timeStyle:"medium"}).replace(" at ",", ")||"",b=e=>{let{icon:t,id:r,isShortcut:n,pid:b,url:m}=e;const{closeWithTransition:j}=(0,s.z)(),y=(0,l.useMemo)((()=>(0,f.RT)(m||"")),[m]),{type:w}=d.Z[y]||{},v=w||`${y.toUpperCase().replace(".","")} File`,$=(0,l.useRef)(null),{readdir:S,rename:C,stat:Z,updateFolder:k}=(0,c.o)(),z=a(m),[F,T]=(0,l.useState)(0),[D,N]=(0,l.useState)(0),[E,R]=(0,l.useState)(0),L=E||z?.size,M=(0,l.useRef)(!1);return(0,l.useEffect)((()=>{if(!M.current&&!n&&z?.isDirectory()){M.current=!0;const e=async t=>{const r=await S(t);let i=0,n=0,s=0;for(const o of r){const r=await Z((0,x.join)(t,o));r.isDirectory()?(n+=1,await e((0,x.join)(t,o))):(i+=1,s+=r.size)}R((e=>e+s)),T((e=>e+i)),N((e=>e+n))};e(m)}}),[n,S,Z,z,m]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{className:"header",children:[(0,i.jsxs)("th",{scope:"row",children:[(0,i.jsx)(h.Z,{imgSize:32,src:t}),n&&(0,i.jsx)(h.Z,{imgSize:48,src:u.MB})]}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{ref:$,autoComplete:"off",defaultValue:(0,x.basename)(m,n?(0,x.extname)(m):void 0),spellCheck:"false",type:"text"})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:z?.isDirectory()?"Type:":"Type of file:"}),(0,i.jsx)("td",{children:z?.isDirectory()?"File folder":n||v?`${n?"Shortcut":v} (${y})`:"File"})]}),!z?.isDirectory()&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:b?"Opens with:":"Description:"}),(0,i.jsxs)("td",{children:[b&&p.Z[b]?.icon&&(0,i.jsx)(h.Z,{imgSize:16,src:p.Z[b].icon}),b?p.Z[b]?.title||b:(0,x.basename)(m||"")]})]}),!z?.isDirectory()&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Location:"}),(0,i.jsx)("td",{children:(0,x.dirname)(m)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Size"}),(0,i.jsx)("td",{children:L?`${(0,f.UR)(L)} (${L.toLocaleString()} bytes)`:"0 bytes"})]}),z?.isDirectory()&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Contains"}),(0,i.jsx)("td",{children:`${F.toLocaleString()} Files, ${D.toLocaleString()} Folders`})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Created:"}),(0,i.jsx)("td",{children:g(z?.birthtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Modified:"}),(0,i.jsx)("td",{children:g(z?.mtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Accessed:"}),(0,i.jsx)("td",{children:g(z?.atime)})]})]})}),(0,i.jsx)(o,{id:r,onClick:()=>{if($.current&&m&&$.current.value!==(0,x.basename)(m)){const e=(0,x.dirname)(m);C(m,`${(0,x.join)(e,$.current.value)}${n?(0,x.extname)(m):""}`),k(e)}j(r)}})]})};var m=(0,l.memo)(b);var j=r(94386).ZP.div.withConfig({componentId:"sc-27825b86-0"})`
  padding: 0 8px 0 6px;

  table {
    background-color: #fff;
    border: 1px solid rgb(217, 217, 217);
    height: calc(100% - 36px - 28px);
    padding-top: 14px;
    position: relative;
    top: -1px;
    width: 100%;

    tbody {
      display: flex;
      flex-direction: column;
      font-size: 11.5px;
      gap: 11px;

      tr {
        display: flex;
        padding: 0 12px;
        place-content: center;
        place-items: center;

        &.header {
          margin-bottom: -4px;
          margin-top: -2px;
          padding: 0 10px 0 12px;
        }
      }

      th {
        font-weight: 400;
        text-align: left;
        width: 74px;
      }

      picture:nth-child(2) {
        position: absolute;
        top: -2px;
      }

      td {
        cursor: text;
        display: flex;
        user-select: text;
        width: calc(100% - 70px);

        &.spacer {
          border-bottom: 1px solid rgb(160, 160, 160);
          display: block;
          width: 100%;
        }

        input {
          border: 1px solid rgb(122, 122, 122);
          font-size: 11px;
          height: 23px;
          padding: 3px;
          width: 100%;
        }

        img {
          margin-right: 7px;
        }
      }
    }
  }

  nav {
    &.tabs {
      display: flex;
      height: 28px;
      padding-top: 7px;
      position: relative;
      z-index: 1;

      button {
        background-color: #fff;
        border: 1px solid rgb(217, 217, 217);
        border-bottom-width: 0;
        display: flex;
        font-size: 11px;
        height: 21px;
        padding: 1px 7px;
        place-content: center;
        width: auto;
      }
    }

    &.buttons {
      display: flex;
      gap: 8px;
      height: 35px;
      margin-right: -1px;
      place-content: end;
      place-items: center;

      button {
        height: 21px;
        line-height: 19px;
      }
    }
  }
`,y=r(57444),w=r(8437);var v=e=>{let{id:t}=e;const{icon:r,processes:{[t]:o}={}}=(0,s.z)(),{shortcutPath:c,url:d}=o||{},p=c||d||"",h=a(p),[{getIcon:u,icon:g,pid:b}]=(0,y.Z)(p,h?.isDirectory()),{prependFileToTitle:v}=(0,w.Z)(t),$=(0,l.useRef)();return(0,l.useEffect)((()=>{r(t,g),"function"===typeof u&&($.current=new AbortController,u($.current.signal)),p&&v((0,x.basename)(p,c?(0,x.extname)(p):void 0),!1,!0)}),[p,u,g,t,v,r,c]),(0,l.useEffect)((()=>()=>{try{$?.current?.abort?.()}catch{}}),[]),(0,i.jsxs)(j,{onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,f.nK)(e)},children:[(0,i.jsx)("nav",{className:"tabs",children:(0,i.jsx)(n.Z,{children:"General"})}),(0,i.jsx)(m,{icon:g,id:t,isShortcut:Boolean(o?.shortcutPath),pid:b,url:p})]})}},80039:function(e,t,r){const i=r(94386).ZP.button.withConfig({componentId:"sc-6268283d-0"})`
  background-color: rgb(225, 225, 225);
  border: ${e=>{let{$active:t}=e;return t?"2px solid rgb(0, 120, 215)":"1px solid rgb(173, 173, 173)"}};
  font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
  font-size: 12px;
  height: 23px;
  transition: all 0.25s ease;
  width: 73px;

  &:focus {
    border: 2px solid rgb(0, 120, 215);
  }

  &:hover {
    background-color: rgb(229, 241, 251);
    border: 1px solid rgb(0, 120, 215);
  }

  &:active {
    background-color: rgb(204, 228, 247);
    border: 1px solid rgb(0, 84, 153);
    transition: none;
  }

  &:disabled {
    background-color: rgb(204, 204, 204);
    border: 1px solid rgb(191, 191, 191);
  }
`;t.Z=i},57444:function(e,t,r){var i=r(50891),n=r(46948),s=r(50959),o=r(93203),c=r(70286);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[l,a]=(0,s.useState)((()=>({icon:"",pid:"",url:""}))),d=(0,s.useRef)(!1),p=e=>{a(e),d.current=!1},{fs:x,rootFs:h}=(0,n.o)();return(0,s.useEffect)((()=>{if(!d.current&&x&&h){d.current=!0;const n=(0,c.RT)(e);!n||t&&!o.my.has(n)&&"FileSystemAccess"!==h.mntMap[e]?.getName()?(0,i.g7)(x,h,e,t,r,p):(0,i.Z7)(x,e,n,p)}}),[x,t,e,h,r]),[l,a]}},8437:function(e,t,r){var i=r(7372),n=r(50106),s=r(50959),o=r(93203);t.Z=e=>{const{title:t}=(0,i.z)(),[r]=e.split(o.CC),{title:c}=n.Z[r]||{};return{appendFileToTitle:(0,s.useCallback)(((r,i)=>{const n=r?` - ${r}${i?` ${o.xy}`:""}`:"";t(e,`${c}${n}`)}),[e,c,t]),prependFileToTitle:(0,s.useCallback)(((r,i,n)=>{const s=r?`${i?`${o.xy} `:""}${r}${n?" ":" - "}`:"";t(e,`${s}${c}`)}),[e,c,t])}}}}]);