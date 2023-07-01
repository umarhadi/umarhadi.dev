"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{80321:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(11527);var i=n(60396).ZP.footer.withConfig({componentId:"sc-753ffae9-0"})`
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: rgb(247, 247, 247);
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${e=>{let{theme:t}=e;return t.sizes.fileExplorer.statusBarHeight}};
  padding: 0 5px;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 10px;

    &::after {
      border-right: 1px solid rgb(247, 247, 247);
      content: "";
      height: 11px;
      margin-left: 11px;
      position: relative;
      top: 3px;
    }

    .selected {
      margin-right: 10px;
      overflow: hidden;
    }
  }
`,s=n(97147),a=n(4806),c=n(95654),o=n(50959),l=n(76022);var u=e=>{let{count:t,directory:n,fileDrop:u,selected:f}=e;const{exists:d,lstat:p,stat:h}=(0,s.o)(),[g,x]=(0,o.useState)(-1),[w,m]=(0,o.useState)(!1),v=e=>m(e>225),b=(0,o.useRef)(null);return(0,o.useEffect)((()=>{(async()=>{x(await f.reduce((async(e,t)=>{const r=await e;if(-2===r)return-2;const i=(0,c.join)(n,t);try{if(await d(i))return(await p(i)).isDirectory()?-2:(-1===r?0:r)+(await h(i)).size}catch{}return e}),Promise.resolve(-1)))})()}),[n,d,p,f,h]),(0,o.useLayoutEffect)((()=>{b.current&&v(b.current.getBoundingClientRect().width)}),[]),(0,a.Z)(b.current,(0,o.useCallback)((e=>{let[{contentRect:{width:t=0}={}}]=e;return v(t)}),[])),(0,r.jsxs)(i,{ref:b,onContextMenuCapture:l.nK,...u,children:[(0,r.jsxs)("div",{...(0,l.PS)("Total item count"),children:[t," item",1===t?"":"s"]}),w&&f.length>0&&(0,r.jsxs)("div",{className:"selected",...(0,l.PS)("Selected item count and size"),children:[f.length," item",1===f.length?"":"s"," selected",-1!==g&&-2!==g?`\xa0\xa0${(0,l.UR)(g)}`:""]})]})}},4806:function(e,t,n){var r=n(50959);t.Z=(e,t)=>{const[n,i]=(0,r.useState)();(0,r.useEffect)((()=>{t&&i(new ResizeObserver(t))}),[t]),(0,r.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);