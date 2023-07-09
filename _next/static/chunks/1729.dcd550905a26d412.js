"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1729],{51729:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(11527);const o=[[1,"curr"],[2,"curr"],[3,"curr"],[4,"curr"],[5,"curr"],[6,"curr"],[7,"curr"]],l=e=>{const t=e.getDate(),r=e.getMonth(),n=e.getFullYear(),l=new Date(n,r,1).getDay(),a=o.slice(0,7-l),s=[...Array.from({length:7-a.length}).map(((e,t)=>[new Date(n,r,-t).getDate(),"prev"])).reverse(),...a],i=new Date(n,r+1,0).getDate(),c=Array.from({length:i}).map(((e,t)=>new Date(n,r,t+1).getDate())).slice(s[s.length-1][0]).map((e=>[e,"curr"])),d=[...s,...c].reduce(((e,r,n)=>{n%7===0&&e.push([]);const[o,l]=r;return e[e.length-1].push("curr"===l&&o===t?[o,"today"]:r),e}),[]),h=d[d.length-1],u=Array.from({length:7-h.length}).map(((e,t)=>[new Date(n,r+1,t+1).getDate(),"next"]));if(h.push(...u),d.length<6){const[e]=h[h.length-1];return[...d,e>6?o.map((e=>{let[t]=e;return[t,"next"]})):Array.from({length:7}).map(((t,r)=>[r+1+e,"next"])),...4===d.length?[o.map((e=>{let[t]=e;return[t+7,"next"]}))]:[]]}return d};var a=r(50959);const s=(0,a.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m30.297 7.297 1.406 1.406L16 24.406.297 8.703l1.406-1.406L16 21.594z"})}))),i=(0,a.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30.547 23.953 16 9.422 1.453 23.953.047 22.547 16 6.578l15.953 15.969z"})})));var c=r(94386),d=r(93203);var h=c.ZP.section.withConfig({componentId:"sc-9eefe18-0"})`
  backdrop-filter: ${e=>{let{theme:t}=e;return`blur(${t.sizes.taskbar.blur})`}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.background}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.taskbar.peekBorder}`}};
  border-bottom: 0;
  border-right: 0;
  bottom: ${d.bK}px;
  position: absolute;
  right: 0;

  table {
    padding: 4px 10px 19px;
    white-space: nowrap;

    td {
      color: #fff;
      display: inline-table;
      height: 40px;
      line-height: 32px;
      margin: 0 1px;
      text-align: center;
      width: 46px;

      &.prev,
      &.next {
        color: rgb(125, 125, 125);
      }
    }

    thead {
      font-size: 12px;

      td[colspan] {
        display: table-cell;
        padding: 0;

        div {
          display: flex;
          font-size: 15px;
          padding: 0 16px 0 12px;
          place-content: space-between;

          header {
            color: rgb(223, 223, 223);

            &:hover {
              color: #fff;
            }

            &:active {
              color: rgb(165, 156, 156);
            }
          }
        }
      }

      td:not([colspan]) {
        height: auto;
        margin-top: -1px;
      }

      nav {
        display: flex;
        flex-direction: row;
        gap: 32px;
        padding-top: 2px;

        button {
          fill: rgb(223, 223, 223);

          &:hover {
            fill: #fff;
          }

          &:active {
            fill: rgb(165, 156, 156);
          }

          svg {
            width: 16px;
          }
        }
      }
    }

    tbody.curr td.today {
      background-color: rgb(0, 120, 215);
      color: #fff;
      position: relative;

      &::after,
      &::before {
        content: "";
        position: absolute;
      }

      &::after {
        inset: 0;
      }

      &::before {
        border: 2px solid #000;
        inset: 2px;
      }

      &:hover {
        &::after {
          border: 2px solid rgb(102, 174, 231);
        }
      }

      &:active {
        &::after {
          border: 2px solid rgb(153, 201, 239);
        }
      }
    }
  }
`,u=r(34414),p=r(70286),g=r(97423);const x=["Su","Mo","Tu","We","Th","Fr","Sa"],f=e=>{let{toggleCalendar:t}=e;const[r,o]=(0,a.useState)((()=>new Date)),[c,f]=(0,a.useState)((()=>l(r))),b=(0,a.useMemo)((()=>new Date),[]),m=(0,a.useMemo)((()=>r.getMonth()===b.getMonth()&&r.getFullYear()===b.getFullYear()),[r,b]),v=e=>{const t=new Date(r);t.setMonth(t.getMonth()+e),o(t),f(l(t))},w=(0,a.useRef)(null);return(0,a.useEffect)((()=>{w.current?.addEventListener("blur",(e=>{let{relatedTarget:r}=e;if(r instanceof HTMLElement){if(w.current?.contains(r))return void w.current?.focus(d.eS);const e=document.querySelector("main>nav [role=timer]");if(e instanceof HTMLDivElement&&(e===r||e.contains(r)))return}t(!1)})),w.current?.focus(d.eS)}),[t]),c&&(0,n.jsx)(h,{ref:w,onContextMenu:p.nK,...d.LL,children:(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:x.length,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("header",{children:`${r.toLocaleString("default",{month:"long"})}, ${r.getFullYear()}`}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(u.Z,{onClick:()=>v(-1),children:(0,n.jsx)(i,{})}),(0,n.jsx)(u.Z,{onClick:()=>v(1),children:(0,n.jsx)(s,{})})]})]})})}),(0,n.jsx)("tr",{children:x.map((e=>(0,n.jsx)("td",{children:e},e)))})]}),(0,n.jsx)("tbody",{className:m?"curr":void 0,children:c?.map((e=>(0,n.jsx)("tr",{children:e.map((e=>{let[t,r]=e;return(0,n.jsx)("td",{ref:e=>"today"===r?void 0:(0,g.G)(e,!1,2),className:r,children:t},`${t}${r}`)}))},e.toString())))})]})})};var b=(0,a.memo)(f)}}]);