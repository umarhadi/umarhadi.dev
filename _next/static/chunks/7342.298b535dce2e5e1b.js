"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7342],{87342:function(e,t,i){i.r(t),i.d(t,{default:function(){return j}});var o=i(11527),n=i(60396);var r=n.ZP.div.withConfig({componentId:"sc-b9e2294f-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  div {
    height: calc(100% - 56px - 80px);
    overflow-y: scroll;
  }

  h2,
  h4 {
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    height: 56px;
    padding: 16px 24px;
  }

  h4 {
    padding: 0 0 6px 23px;
  }

  nav {
    background-color: #fff;
    height: 80px;
    width: 100%;

    button {
      background-color: rgb(204, 204, 204);
      font-size: 15px;
      font-weight: 600;
      height: 32px;
      margin: 24px;
      position: absolute;
      right: 0;
      width: 200px;

      &:hover {
        background-color: rgb(216, 216, 216);
      }

      &:active {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;var c=n.ZP.ul.withConfig({componentId:"sc-812cc0bf-0"})`
  border-top: 1px solid transparent;
  padding-bottom: 9px;
  position: relative;
  width: 100%;

  &::before {
    border-top: 1px solid rgb(192, 192, 194);
    content: "";
    height: 1px;
    left: 17px;
    position: absolute;
    top: -1px;
    width: calc(100% - 34px);
  }

  li {
    &:active {
      scale: 0.975;
    }

    &:first-child {
      margin-top: 2px;
    }

    &:hover {
      background-color: rgb(222, 222, 222);
    }

    figure {
      display: flex;
      padding: 0 23px;

      figcaption {
        font-size: 15px;
        padding: 0 12px;
      }

      picture {
        background-color: rgb(0, 120, 215);
        display: flex;
        height: 40px;
        place-content: center;
        place-items: center;
        width: 40px;
      }
    }

    &.selected {
      background-color: rgb(12, 131, 218);

      figcaption {
        color: #fff;
      }
    }

    padding: 5px 0;
  }
`,l=i(89933),s=i(59062),a=i(5530),p=i(31422),d=i(50959),h=i(11154),x=i(6068),u=i(80437),f=i(76022);const g=new Set(["Browser","Chat","ClassiCube","DXBall","DevTools","Emulator","FileExplorer","IRC","OpenWith","Properties","Quake3","Run","SpaceCadet","StableDiffusion","Terminal","Transfer","Webamp"]),b=e=>{let{icon:t,onClick:i,selected:n,title:r}=e;return(0,o.jsx)("li",{className:n?"selected":"",children:(0,o.jsx)(h.Z,{onClick:i,children:(0,o.jsxs)("figure",{children:[(0,o.jsx)(x.Z,{alt:r,displaySize:24,imgSize:32,src:t}),(0,o.jsx)("figcaption",{children:r})]})})})};var j=e=>{let{id:t}=e;const{closeWithTransition:i,open:n,processes:{[t]:x}={}}=(0,s.z)(),{foregroundId:j,setForegroundId:k}=(0,p.k)(),{url:C}=x||{},m=C?(0,f.RT)(C):"",v=(0,l.Wd)(m),{title:w,icon:I}=v&&a.Z[v]||{},[S,T]=(0,d.useState)(v),[Z,y]=(0,d.useState)(!1),z=(0,d.useRef)(""),E=(0,d.useCallback)((e=>{n(e,{url:C}),i(t)}),[i,t,n,C]),O=(0,d.useCallback)((e=>{z.current===e?E(e):(z.current=e,setTimeout((()=>{z.current=""}),u.jx.DOUBLE_CLICK),T(e))}),[E]);return(0,d.useEffect)((()=>{const e=j===t;Z?e||i(t):(e||k(t),setTimeout((()=>y(!0)),u.jx.WINDOW))}),[Z,i,j,t,k]),(0,o.jsxs)(r,{children:[(0,o.jsx)("h2",{children:"How do you want to open this file?"}),(0,o.jsxs)("div",{children:[w&&I&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Keep using this app"}),(0,o.jsx)(c,{children:(0,o.jsx)(b,{icon:I,onClick:()=>O(v),selected:S===v,title:w},w)})]}),(0,o.jsx)("h4",{children:"Other options"}),(0,o.jsx)(c,{children:Object.entries(a.Z).filter((e=>{let[t]=e;return!g.has(t)&&t!==v})).map((e=>{let[t,{icon:i,title:n}]=e;return(0,o.jsx)(b,{icon:i,onClick:()=>O(t),selected:S===t,title:n},n)}))})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(h.Z,{onClick:()=>E(S),children:"OK"})})]})}}}]);