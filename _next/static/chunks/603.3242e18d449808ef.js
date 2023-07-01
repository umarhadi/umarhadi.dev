"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{70603:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var i=r(11527),s=r(84282),n=r(59062);var o=e=>{let{id:t,onClick:r}=e;const{closeWithTransition:o}=(0,n.z)();return(0,i.jsxs)("nav",{className:"buttons",children:[(0,i.jsx)(s.Z,{onClick:r,children:"OK"}),(0,i.jsx)(s.Z,{onClick:()=>o(t),children:"Cancel"})]})},c=r(97147),l=r(50959);var d=e=>{const{stat:t}=(0,c.o)(),[r,i]=(0,l.useState)();return(0,l.useEffect)((()=>{!r&&e&&t(e).then(i)}),[t,r,e]),r},a=r(1425),p=r(5530),x=r(95654),h=r(6068),u=r(80437),f=r(76022);const b=e=>e?.toLocaleString(void 0,{dateStyle:"long",timeStyle:"medium"}).replace(" at ",", ")||"";var g=e=>{let{icon:t,id:r,isShortcut:s,pid:g,url:j}=e;const{closeWithTransition:m}=(0,n.z)(),y=(0,l.useMemo)((()=>(0,f.RT)(j||"")),[j]),{type:w}=a.Z[y]||{},v=w||`${y.toUpperCase().replace(".","")} File`,$=(0,l.useRef)(null),{readdir:S,rename:C,stat:Z,updateFolder:k}=(0,c.o)(),z=d(j),[F,T]=(0,l.useState)(0),[D,N]=(0,l.useState)(0),[E,R]=(0,l.useState)(0),M=E||z?.size,P=(0,l.useRef)(!1);return(0,l.useEffect)((()=>{if(!P.current&&!s&&z?.isDirectory()){P.current=!0;const e=async t=>{const r=await S(t);let i=0,s=0,n=0;for(const o of r){const r=await Z((0,x.join)(t,o));r.isDirectory()?(s+=1,await e((0,x.join)(t,o))):(i+=1,n+=r.size)}R((e=>e+n)),T((e=>e+i)),N((e=>e+s))};e(j)}}),[s,S,Z,z,j]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{className:"header",children:[(0,i.jsxs)("th",{scope:"row",children:[(0,i.jsx)(h.Z,{imgSize:32,src:t}),s&&(0,i.jsx)(h.Z,{imgSize:48,src:u.MB})]}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{ref:$,autoComplete:"off",defaultValue:(0,x.basename)(j,s?(0,x.extname)(j):void 0),spellCheck:"false",type:"text"})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:z?.isDirectory()?"Type:":"Type of file:"}),(0,i.jsx)("td",{children:z?.isDirectory()?"File folder":s||v?`${s?"Shortcut":v} (${y})`:"File"})]}),!z?.isDirectory()&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:g?"Opens with:":"Description:"}),(0,i.jsxs)("td",{children:[g&&p.Z[g]?.icon&&(0,i.jsx)(h.Z,{imgSize:16,src:p.Z[g].icon}),g?p.Z[g]?.title||g:(0,x.basename)(j||"")]})]}),!z?.isDirectory()&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Location:"}),(0,i.jsx)("td",{children:(0,x.dirname)(j)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Size"}),(0,i.jsx)("td",{children:M?`${(0,f.UR)(M)} (${M.toLocaleString()} bytes)`:"0 bytes"})]}),z?.isDirectory()&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Contains"}),(0,i.jsx)("td",{children:`${F} Files, ${D} Folders`})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Created:"}),(0,i.jsx)("td",{children:b(z?.birthtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Modified:"}),(0,i.jsx)("td",{children:b(z?.mtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Accessed:"}),(0,i.jsx)("td",{children:b(z?.atime)})]})]})}),(0,i.jsx)(o,{id:r,onClick:()=>{if($.current&&j&&$.current.value!==(0,x.basename)(j)){const e=(0,x.dirname)(j);C(j,`${(0,x.join)(e,$.current.value)}${s?(0,x.extname)(j):""}`),k(e)}m(r)}})]})};var j=r(60396).ZP.div.withConfig({componentId:"sc-27825b86-0"})`
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
`,m=r(2074),y=r(93246);var w=e=>{let{id:t}=e;const{icon:r,processes:{[t]:o}={}}=(0,n.z)(),{shortcutPath:c,url:a}=o||{},p=c||a||"",h=d(p),[{getIcon:u,icon:f,pid:b}]=(0,m.Z)(p,h?.isDirectory()),{prependFileToTitle:w}=(0,y.Z)(t),v=(0,l.useRef)();return(0,l.useEffect)((()=>{r(t,f),"function"===typeof u&&(v.current=new AbortController,u(v.current.signal)),p&&w((0,x.basename)(p,c?(0,x.extname)(p):void 0),!1,!0)}),[p,u,f,t,w,r,c]),(0,l.useEffect)((()=>()=>{try{v?.current?.abort?.()}catch{}}),[]),(0,i.jsxs)(j,{children:[(0,i.jsx)("nav",{className:"tabs",children:(0,i.jsx)(s.Z,{children:"General"})}),(0,i.jsx)(g,{icon:f,id:t,isShortcut:Boolean(o?.shortcutPath),pid:b,url:p})]})}},84282:function(e,t,r){const i=r(60396).ZP.button.withConfig({componentId:"sc-6268283d-0"})`
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
`;t.Z=i},2074:function(e,t,r){var i=r(89933),s=r(97147),n=r(50959),o=r(80437),c=r(76022);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[l,d]=(0,n.useState)((()=>({icon:"",pid:"",url:""}))),a=(0,n.useRef)(!1),p=e=>{d(e),a.current=!1},{fs:x,rootFs:h}=(0,s.o)();return(0,n.useEffect)((()=>{if(!a.current&&x&&h){a.current=!0;const s=(0,c.RT)(e);!s||t&&!o.my.has(s)&&"FileSystemAccess"!==h.mntMap[e]?.getName()?(0,i.g7)(x,h,e,t,r,p):(0,i.Z7)(x,e,s,p)}}),[x,t,e,h,r]),[l,d]}},93246:function(e,t,r){var i=r(59062),s=r(5530),n=r(50959),o=r(80437);t.Z=e=>{const{title:t}=(0,i.z)(),[r]=e.split(o.CC),{title:c}=s.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)(((r,i)=>{const s=r?` - ${r}${i?` ${o.xy}`:""}`:"";t(e,`${c}${s}`)}),[e,c,t]),prependFileToTitle:(0,n.useCallback)(((r,i,s)=>{const n=r?`${i?`${o.xy} `:""}${r}${s?" ":" - "}`:"";t(e,`${n}${c}`)}),[e,c,t])}}}}]);