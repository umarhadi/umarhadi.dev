"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4812],{4812:function(e,t,i){i.r(t),i.d(t,{default:function(){return j}});var o=i(11527),n=i(61914),r=i(431),c=i(87121),l=i(69455),s=i(50959),a=i(24370),p=i(29054),d=i(90810),h=i(12876),x=i(34256);var u=x.ZP.div.withConfig({componentId:"sc-b9e2294f-0"})`
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
`;var f=x.ZP.ul.withConfig({componentId:"sc-812cc0bf-0"})`
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
`;const g=new Set(["Browser","Chat","ClassiCube","DXBall","DevTools","Emulator","FileExplorer","IRC","OpenWith","Quake3","Run","SpaceCadet","StableDiffusion","Terminal","Transfer","Webamp"]),b=e=>{let{icon:t,onClick:i,selected:n,title:r}=e;return(0,o.jsx)("li",{className:n?"selected":"",children:(0,o.jsx)(a.Z,{onClick:i,children:(0,o.jsxs)("figure",{children:[(0,o.jsx)(p.Z,{alt:r,displaySize:24,imgSize:32,src:t}),(0,o.jsx)("figcaption",{children:r})]})})})};var j=e=>{let{id:t}=e;const{closeWithTransition:i,open:p,processes:{[t]:x}={}}=(0,r.z)(),{foregroundId:j,setForegroundId:k}=(0,l.k)(),{url:C}=x||{},m=C?(0,h.RT)(C):"",{process:[v]=[]}=m in n.Z?n.Z[m]:{},{title:w,icon:Z}=v&&c.Z[v]||{},[I,S]=(0,s.useState)(v),[T,y]=(0,s.useState)(!1),z=(0,s.useRef)(""),E=(0,s.useCallback)((e=>{p(e,{url:C}),i(t)}),[i,t,p,C]),O=(0,s.useCallback)((e=>{z.current===e?E(e):(z.current=e,setTimeout((()=>{z.current=""}),d.jx.DOUBLE_CLICK),S(e))}),[E]);return(0,s.useEffect)((()=>{const e=j===t;T?e||i(t):(e||k(t),setTimeout((()=>y(!0)),d.jx.WINDOW))}),[T,i,j,t,k]),(0,o.jsxs)(u,{children:[(0,o.jsx)("h2",{children:"How do you want to open this file?"}),(0,o.jsxs)("div",{children:[w&&Z&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Keep using this app"}),(0,o.jsx)(f,{children:(0,o.jsx)(b,{icon:Z,onClick:()=>O(v),selected:I===v,title:w},w)})]}),(0,o.jsx)("h4",{children:"Other options"}),(0,o.jsx)(f,{children:Object.entries(c.Z).filter((e=>{let[t]=e;return!g.has(t)&&t!==v})).map((e=>{let[t,{icon:i,title:n}]=e;return(0,o.jsx)(b,{icon:i,onClick:()=>O(t),selected:I===t,title:n},n)}))})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(a.Z,{onClick:()=>E(I),children:"OK"})})]})}}}]);