"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1837],{41311:function(e,r,t){var o=t(11527),n=t(87373),i=t(7372),a=t(38974),l=t.n(a),c=t(50959);const d=l()((()=>t.e(2817).then(t.bind(t,62817))),{loadableGenerated:{webpack:()=>[62817]}}),b=e=>{let{id:r,useHook:t,StyledComponent:a,children:l}=e;const{processes:{[r]:{url:b=""}={}}}=(0,i.z)(),s=(0,c.useRef)(null),[g,u]=(0,c.useState)(!0),A=(0,c.useMemo)((()=>({contain:"strict",visibility:g?"hidden":"visible"})),[g]);return t({containerRef:s,id:r,loading:g,setLoading:u,url:b}),(0,o.jsxs)(o.Fragment,{children:[g&&(0,o.jsx)(d,{}),(0,o.jsx)(a,{ref:s,style:A,...(0,n.Z)({id:r}),children:l})]})};r.Z=(0,c.memo)(b)},11837:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var o=t(11527),n=t(41311),i=t(94386),a=t(64894),l=t(93203);var c=i.ZP.div.withConfig({componentId:"sc-90a781bf-0"})`
  article {
    ${(0,a.Z)(l.BQ,0,0,"light")};
    background-color: #f9f9f9;
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-y: scroll;
    padding: 16px 32px;
    width: 100%;
    word-wrap: break-word;

    * {
      all: revert;
      user-select: text;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
    }

    h1 {
      font-size: 2em;
      padding: 9px 0;

      header & {
        margin: 0;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 1.5em;
      padding: 7px 0;
    }

    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    ul {
      line-height: 1.6;
      padding-inline-start: 30px;
    }

    nav {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;

      > ul {
        font-size: 14px;
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        position: sticky;
        top: 5px;

        > li {
          min-width: 125px;
          padding: 0 15px;

          > ul {
            padding-left: 25px;

            > li {
              font-size: 0.8em;
            }
          }
        }
      }

      .selected {
        color: #111;
        font-weight: 700;

        &:hover {
          text-decoration: none;
        }
      }
    }

    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;

      td,
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
        monospace;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    code:not([class]) {
      background-color: rgba(27, 31, 35, 5%);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      padding: 0.2em 0.4em;
    }
  }
`,d=t(8437),b=t(46948),s=t(7372),g=t(5738),u=t(50959),A=t(70286);var p=e=>{let{containerRef:r,id:t,loading:o,setLoading:n,url:i}=e;const{readFile:a}=(0,b.o)(),{prependFileToTitle:l}=(0,d.Z)(t),{open:c,processes:{[t]:{libs:p=[]}={}}={}}=(0,s.z)(),k=(0,u.useCallback)((async()=>{const e=await a(i),t=r.current?.querySelector("article");t instanceof HTMLElement&&(t.innerHTML=window.DOMPurify.sanitize(window.marked.parse(e.toString(),{headerIds:!1})),t.querySelectorAll("a").forEach((e=>e.addEventListener("click",(r=>{(0,A.nK)(r),(0,A.yk)(e.href)?c("VideoPlayer",{url:e.href}):window.open(e.href,"_blank","noopener, noreferrer")})))),t.scrollTop=0),l((0,g.basename)(i))}),[r,c,l,a,i]);(0,u.useEffect)((()=>{o&&(0,A.mb)(p).then((()=>{window.marked&&n(!1)}))}),[p,o,n]),(0,u.useEffect)((()=>{!o&&i&&k()}),[k,o,i])};var k=e=>{let{id:r}=e;return(0,o.jsx)(n.Z,{StyledComponent:c,id:r,useHook:p,children:(0,o.jsx)("article",{})})}},87373:function(e,r,t){var o=t(54660),n=t(39397),i=t(22449),a=t(46948),l=t(7372),c=t(87966),d=t(5738),b=t(50959),s=t(93203),g=t(70286);r.Z=e=>{let{callback:r,directory:t=s.Ll,id:u,onDragLeave:A,onDragOver:p,updatePositions:k}=e;const{url:m}=(0,l.z)(),{iconPositions:h,sortOrders:f,setIconPositions:x}=(0,c.k)(),{mkdirRecursive:v,updateFolder:w,writeFile:$}=(0,a.o)(),y=(0,b.useCallback)((async(e,r,t)=>{if(u)if(r){const o=(0,d.join)(s.Ll,e);await v(s.Ll),await $(o,r,!0)&&(t===i.v.UPDATE_URL&&m(u,o),w(s.Ll,e))}else t===i.v.UPDATE_URL&&m(u,e)}),[u,v,w,m,$]),{openTransferDialog:E}=(0,o.Z)();return{onDragLeave:A,onDragOver:e=>{p?.(e),(0,g.nK)(e)},onDrop:e=>{if(!s.my.has((0,g.RT)(t))){if(k&&e.target instanceof HTMLElement){const{files:r,text:o}=(0,n.p4)(e);if(0===r.length&&""===o)return;const i={x:e.clientX,y:e.clientY};let a=[];if(o){try{a=JSON.parse(o)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(t)&&(0,d.basename)(e)===(0,d.relative)(t,e))return;a=a.map((e=>(0,d.basename)(e)))}else a=r instanceof FileList?[...r].map((e=>e.name)):[...r].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!h[`${t}/${e}`])return e;let r=0,o="";do{r+=1,o=`${t}/${(0,d.basename)(e,(0,d.extname)(e))} (${r})${(0,d.extname)(e)}`}while(h[o]);return(0,d.basename)(o)})),(0,g.vi)(t,e.target,h,f,i,a,x)}(0,n.WG)(e,r||y,t,E,Boolean(u))}}}}},8437:function(e,r,t){var o=t(7372),n=t(50106),i=t(50959),a=t(93203);r.Z=e=>{const{title:r}=(0,o.z)(),[t]=e.split(a.CC),{title:l}=n.Z[t]||{};return{appendFileToTitle:(0,i.useCallback)(((t,o)=>{const n=t?` - ${t}${o?` ${a.xy}`:""}`:"";r(e,`${l}${n}`)}),[e,l,r]),prependFileToTitle:(0,i.useCallback)(((t,o,n)=>{const i=t?`${o?`${a.xy} `:""}${t}${n?" ":" - "}`:"";r(e,`${i}${l}`)}),[e,l,r])}}},64894:function(e,r,t){t.d(r,{Z:function(){return d}});var o=t(94386);const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",c={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var d=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return o.iv`
  overflow: auto;
  scrollbar-color: ${c[d].thumb} ${c[d].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${c[d].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${c[d].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${c[d].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${c[d].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${c[d].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${c[d].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${c[d].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${c[d].buttonHover};
    }

    &:active {
      background-color: ${c[d].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===r?"center":`${r}px`};
    background-position-y: ${0===t?"center":`${t}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${n});
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
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${l});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${c[d].blendMode};
  }
`}}}]);