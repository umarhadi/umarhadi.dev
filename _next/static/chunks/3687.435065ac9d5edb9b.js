"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3687],{3687:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var i=r(11527);var s=r(86692).ZP.div.withConfig({componentId:"sc-d32ef092-0"})`
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

      td {
        display: flex;
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
`,n=r(98929),o=r(61914),c=r(29514),l=r(29453),d=r(18766),a=r(56285),p=r(431),x=r(87730),h=r(50959),u=r(29054),b=r(12876);const g=e=>e?.toLocaleString(void 0,{dateStyle:"long",timeStyle:"medium"}).replace(" at ",", ")||"";var f=e=>{let{id:t}=e;const{icon:r,processes:{[t]:f}={},closeWithTransition:m}=(0,p.z)(),{prependFileToTitle:j}=(0,d.Z)(t),{rename:y,stat:w,updateFolder:$}=(0,a.o)(),{url:v}=f||{},[k,C]=(0,h.useState)(),[{icon:Z}]=(0,l.Z)(v||"",k?.isDirectory()||!1),z=(0,h.useMemo)((()=>(0,x.extname)(v||"")),[v]),{process:[S]=[],type:F}=o.Z[z]||{},T=F||`${z.toUpperCase().replace(".","")} File`,N=(0,h.useRef)(null);return(0,h.useEffect)((()=>{v&&!k&&w(v).then(C)}),[w,k,v]),(0,h.useEffect)((()=>{r(t,Z),v&&j((0,x.basename)(v),!1,!0)}),[Z,t,j,r,v]),(0,i.jsxs)(s,{children:[(0,i.jsx)("nav",{className:"tabs",children:(0,i.jsx)(n.Z,{children:"General"})}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{className:"header",children:[(0,i.jsx)("th",{scope:"row",children:(0,i.jsx)(u.Z,{imgSize:32,src:Z})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{ref:N,autoComplete:"off",defaultValue:(0,x.basename)(v||""),spellCheck:"false",type:"text"})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:k?.isDirectory()?"Type:":"Type of file:"}),(0,i.jsx)("td",{children:k?.isDirectory()?"File folder":T?`${T} (${z})`:"File"})]}),!k?.isDirectory()&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:S?"Opens with:":"Description:"}),(0,i.jsxs)("td",{children:[S&&(0,i.jsx)(u.Z,{imgSize:16,src:(0,c.sK)(z)}),S||(0,x.basename)(v||"")]})]}),!k?.isDirectory()&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Location:"}),(0,i.jsx)("td",{children:(0,x.dirname)(v||"")})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Size"}),(0,i.jsx)("td",{children:k?.size?`${(0,b.UR)(k?.size)} (${k?.size.toLocaleString()} bytes)`:"0 bytes"})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Created:"}),(0,i.jsx)("td",{children:g(k?.birthtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Modified:"}),(0,i.jsx)("td",{children:g(k?.mtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Accessed:"}),(0,i.jsx)("td",{children:g(k?.atime)})]})]})}),(0,i.jsxs)("nav",{className:"buttons",children:[(0,i.jsx)(n.Z,{onClick:()=>{if(N.current&&v&&N.current.value!==(0,x.basename)(v)){const e=(0,x.dirname)(v);y(v,(0,x.join)(e,N.current.value)),$(e)}m(t)},children:"OK"}),(0,i.jsx)(n.Z,{onClick:()=>m(t),children:"Cancel"})]})]})}},98929:function(e,t,r){const i=r(86692).ZP.button.withConfig({componentId:"sc-6268283d-0"})`
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
`;t.Z=i},29453:function(e,t,r){var i=r(29514),s=r(56285),n=r(50959),o=r(90810),c=r(12876);t.Z=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[l,d]=(0,n.useState)((()=>({icon:"",pid:"",url:""}))),a=(0,n.useRef)(!1),p=e=>{d(e),a.current=!1},{fs:x,rootFs:h}=(0,s.o)();return(0,n.useEffect)((()=>{if(!a.current&&x&&h){a.current=!0;const s=(0,c.RT)(e);!s||t&&!o.my.has(s)&&"FileSystemAccess"!==h.mntMap[e]?.getName()?(0,i.g7)(x,h,e,t,r,p):(0,i.Z7)(x,e,s,p)}}),[x,t,e,h,r]),[l,d]}},18766:function(e,t,r){var i=r(431),s=r(87121),n=r(50959),o=r(90810);t.Z=e=>{const{title:t}=(0,i.z)(),[r]=e.split(o.CC),{title:c}=s.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)(((r,i)=>{const s=r?` - ${r}${i?` ${o.xy}`:""}`:"";t(e,`${c}${s}`)}),[e,c,t]),prependFileToTitle:(0,n.useCallback)(((r,i,s)=>{const n=r?`${i?`${o.xy} `:""}${r}${s?" ":" - "}`:"";t(e,`${n}${c}`)}),[e,c,t])}}}}]);