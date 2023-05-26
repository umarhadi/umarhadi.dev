"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3149,9111,6600],{3654:function(e,t,r){r.d(t,{P:function(){return o},w:function(){return n}});const n={0:{name:"Black",rgb:[12,12,12]},1:{name:"Blue",rgb:[0,55,218]},2:{name:"Green",rgb:[19,161,14]},3:{name:"Aqua",rgb:[58,150,221]},4:{name:"Red",rgb:[197,15,31]},5:{name:"Purple",rgb:[136,23,152]},6:{name:"Yellow",rgb:[193,156,0]},7:{name:"White",rgb:[204,204,204]},8:{name:"Gray",rgb:[118,118,118]},9:{name:"Light Blue",rgb:[59,120,255]},A:{name:"Light Green",rgb:[22,198,12]},B:{name:"Light Aqua",rgb:[97,214,214]},C:{name:"Light Red",rgb:[231,72,86]},D:{name:"Light Purple",rgb:[180,0,158]},E:{name:"Light Yellow",rgb:[249,241,165]},F:{name:"Bright White",rgb:[242,242,242]}},o=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return`\x1b[${n?"48":"38"};2;${e};${t};${r}m`}},53149:function(e,t,r){r.d(t,{$4:function(){return m},CN:function(){return c},JF:function(){return f},R_:function(){return l},hR:function(){return w},j3:function(){return p},j5:function(){return h},lO:function(){return g},vR:function(){return y},xy:function(){return d}});var n=r(3654),o=r(52483),i=r(5786),a=r(66328),s=r(11188);const l=(e,t,r)=>{Object.entries(t).forEach((t=>{let[r,n]=t;e?.println(`${r.padEnd(14)} ${n}`)})),r&&(e?.println("\r\nAliases:\r\n"),Object.entries(r).forEach((r=>{let[n,o]=r;o.forEach((r=>{e?.println(`${r.padEnd(14)} ${t[n]}`)}))})))},c={cd:"Changes the current directory.",clear:"Clears the screen.",color:"Specifies color attribute of console output.",copy:"Copies a file to another location.",date:"Displays the date.",del:"Deletes a file.",dir:"Displays list of entries in current directory.",echo:"Displays messages that are passed to it.",exit:"Quits the command interpreter.",ffmpeg:"Convert audio or video file to another format.",file:"Detects the MIME type of the file.",find:"Searches for a text string in a file or files.",git:"Read from git repositories.",help:"Provides Help information for commands.",history:"Displays command history list.",imagemagick:"Convert an image file to another format.",ipconfig:"Displays current IP.",license:"Displays license.",md:"Creates a directory.",mount:"Mounts a local file system directory.",move:"Moves file or directory.",neofetch:"Displays system information.",pwd:"Prints the working directory.",python:"Run code through Python interpreter.",rd:"Removes a directory.",ren:"Renames a file or directory.",rm:"Removes a file or directory.",sheep:"Spawn a new sheep",shutdown:"Allows proper local shutdown of machine.",taskkill:"Kill or stop a running process or application.",tasklist:"Displays all currently running processes.",time:"Displays the system time.",title:"Sets the window title for the command interpreter.",touch:"Create empty file.",type:"Displays the contents of a file.",uptime:"Display the current uptime of the local system.",ver:"Displays the system version.",wapm:"Run universal Wasm binaries.",weather:"Weather forecast service",whoami:"Displays user information.",xlsx:"Convert a spreadsheet file to another format."},p={cd:["chdir"],clear:["cls"],copy:["cp"],del:["erase"],dir:["ls"],exit:["quit"],find:["search"],git:["isogit"],ipconfig:["ifconfig","whatsmyip"],md:["mkdir"],move:["mv"],neofetch:["systeminfo"],python:["py"],rd:["rmdir"],ren:["rename"],sheep:["esheep"],shutdown:["logout","restart"],taskkill:["kill"],tasklist:["ps"],type:["cat"],ver:["version"],wapm:["wax"],weather:["wttr"]},u=new Set(["cat","cd","chdir","copy","cp","del","dir","erase","ffmpeg","file","imagemagick","ls","md","mkdir","move","python","py","mv","rd","ren","rename","rm","rmdir","touch","type","vim","xlsx"]),d=e=>`'${e}' is not recognized as an internal or external command, operable program or batch file.`,f=(e,t)=>{const{_autocompleteHandlers:r}=t;r.forEach((e=>{let{fn:r}=e;return t.removeAutocompleteHandler(r)})),t.addAutocompleteHandler(((t,r)=>{let[n]=r;if(0===t)return[...Object.keys(c),...e];if(1===t){const t=n.toLowerCase();if("git"===t)return Object.keys(o.C);if(u.has(t))return e;if(Object.keys(a.Z).map((e=>e.toLowerCase())).includes(t)||Object.keys(i.resourceAliasMap).includes(t))return e}return[]}))},m=e=>{let t=!1,r="";const n=e=>{r&&e.push(r),r=""},o=[...e].reduce(((e,o)=>(" "!==o||t?'"'===o?(t=!t,t||n(e)):r+=o:n(e),e)),[]);return r?[...o,r]:o},h=function(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"=";if(!n){const t=e.map((e=>{let[t,r]=e;return t.padEnd(r," ")})).join(" "),n=e.map((e=>{let[,t]=e;return o.repeat(t)})).join(" ");r?.println(t),r?.println(n)}const i=t.map((t=>t.map(((r,n)=>{const[,o,i,a]=e[n];let s=n===t.length-1?r:r.slice(0,o);return a&&(s=a(s)),i?s.padStart(o," "):s.padEnd(o," ")})).join(" ")));i.length>0&&i.forEach((e=>r?.println(e)))},g=async()=>{const{quota:e=0,usage:t=0}=await(navigator.storage?.estimate?.())||{};return 0===e?"":`  ${(e-t).toLocaleString()} bytes`},w=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(window.performance){const[{duration:t}]=window.performance.getEntriesByType("navigation"),r=window.performance.timeOrigin+t,n=Math.ceil(Date.now()-r),o=Math.floor(n/s.y8),i=new Date(n),a=i.getUTCHours(),l=i.getUTCMinutes(),c=i.getUTCSeconds();return[...o?[`${o} day${1===o?"":"s"}`]:[],...a?[`${a} hour${1===a?"":"s"}`]:[],...l?[`${l} ${e?"min":"minute"}${1===l?"":"s"}`]:[],...c?[`${c} ${e?"sec":"second"}${1===c?"":"s"}`]:[]].join(", ")}return"Unknown"},y=(e,t)=>`${(0,n.P)(...n.w[e].rgb,!0)}${(0,n.P)(...n.w[e].rgb)}|||${t?.join("")||`${(0,n.P)(...n.w[0].rgb,!0)}${(0,n.P)(...n.w[7].rgb)}`}`},52483:function(e,t,r){r.d(t,{C:function(){return i}});var n=r(53149),o=r(68584);const i={checkout:"Switch branches or restore working tree files",clone:"Clone a repository into a new directory"};t.Z=async(e,t,a,s,l,c)=>{let[p,...u]=e;const{checkout:d,clone:f,version:m}=await Promise.all([r.e(5157),r.e(6230),r.e(8167)]).then(r.bind(r,45047)),h=[],g=e=>a.println(`remote: ${e.trim()}`),w={fs:s,onProgress:e=>{let{phase:t}=e;h[h.length-1]!==t&&(a.println(t),h.push(t))}};switch(p){case"clone":{const e=await r.e(2969).then(r.bind(r,32969)),[n]=u,i=n?.split("/").pop()?.replace(/\.git$/,""),s=i?(0,o.join)(t,i):t;try{i&&a.println(`Cloning into '${i}'...`),await f({...w,corsProxy:"https://cors.isomorphic-git.org",dir:s,http:e,onMessage:g,url:n})}catch(y){a.println(y.message)}break}case"checkout":if(await l((0,o.join)(t,".git"))){const[e]=u;try{await d({...w,dir:t,force:!0,ref:e}),a.println(`Switched to branch '${e}'`)}catch(y){a.println(y.message)}}else a.println("fatal: not a git repository: .git");break;case"version":a.println(`git version ${m()}.isomorphic-git`);break;default:(0,n.R_)(a,i)}c(t)}},5786:function(e,t,r){r.r(t),r.d(t,{default:function(){return C},resourceAliasMap:function(){return x}});var n=r(11527),o=r(53149),i=r(82465);var a=r(74965).ZP.div.withConfig({componentId:"sc-4317e47b-0"})`
  background-color: #fff;
  border: 1px solid rgb(240, 240, 240);
  font-size: 12px;

  figure {
    display: flex;
    flex-direction: row;
    padding: 20px 11px 14px;

    figcaption {
      line-height: 15px;
      margin-bottom: 4px;
    }

    img {
      height: 32px;
      margin-right: 19px;
      width: 32px;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    label {
      margin-top: 3px;
      padding: 0 11px;
    }

    div {
      position: relative;
      width: 100%;

      input,
      select {
        border: 1px solid rgb(122, 122, 122);
        border-radius: 0;
        font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
        font-size: 12px;
        height: 23px;
        line-height: 16px;
        margin: 0 13px 21px 8px;
        padding-bottom: 2px;
        padding-left: 5px;
        width: 100%;
      }

      select {
        background-color: #fff;
        clip-path: inset(0 0 0 calc(100% - 20px));
        position: absolute;
        width: calc(100% - 21px);

        &:disabled {
          border: 1px solid rgb(122, 122, 122);
          opacity: 100%;
        }
      }

      input {
        border-right: 0;
        margin-right: 33px;

        &:focus {
          border: 1px solid rgb(0, 120, 215);
          border-right: 0;

          + select {
            border-color: rgb(0, 120, 215);
          }
        }
      }
    }
  }

  nav {
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: row;
    height: 100%;

    ${i.Z} {
      height: 24px;
      margin-top: 19px;
      position: absolute;
      right: 12px;
      width: 86px;

      &:first-child {
        right: 107px;
      }
    }
  }
`,s=r(32790),l=r(54537),c=r(67435),p=r(57996),u=r(66328),d=r(3416),f=r(68584),m=r(50959),h=r(11188),g=r(8798),w=r(89111),y=r(56600);const b="open",x={cmd:"Terminal",code:"MonacoEditor",dos:"JSDOS",explorer:"FileExplorer",monaco:"MonacoEditor",mspaint:"Paint",vlc:"VideoPlayer"},v=`Type the name of a program, folder, document, or Internet resource, and ${h.Ou.alias} will open it for you.`,k=e=>alert(`Cannot find '${e}'. Make sure you typed the name correctly, and then try again.`),$={esheep:y.default,sheep:y.default};var C=()=>{const{open:e,closeWithTransition:t,processes:{Run:r}={}}=(0,p.z)(),{createPath:y,exists:C,readFile:P,stat:S,updateFolder:j}=(0,c.o)(),{foregroundId:L,runHistory:D,setRunHistory:E}=(0,d.k)(),F=(0,m.useRef)(null),[R,I]=(0,m.useState)(!0),[M,O]=(0,m.useState)(!D[0]),[_,T]=(0,m.useState)(!1),B=(0,m.useCallback)((async r=>{if(!r)return;T(!0);const n=()=>E((e=>e[0]===r?e:[r,...e])),[i,...a]=(0,o.$4)(r);let l=r,c=!0;const p=await C(l);p||(l=a.length>0?a.join(" "):i);const d=l.startsWith("ipfs://");if(p||d||await C(l)){if(d)try{const e=await(0,w.getIpfsResource)(l);l=(0,f.join)(h.Ll,await y(await(0,w.getIpfsFileName)(l,e),h.Ll,e)),j(h.Ll,(0,f.basename)(l))}catch{}if((await S(l)).isDirectory())e("FileExplorer",{url:l},""),n();else if(i&&a.length>0&&l!==r){const t=Object.keys(u.Z).find((e=>e.toLowerCase()===i.toLowerCase()));t?(e(t,{url:"Browser"===t&&d?a.join(" "):l}),n()):(k(i),c=!1)}else{const t=(0,g.RT)(l);if(t===h.zm){const{pid:t,url:r}=(0,s.OE)(await P(l));t&&e(t,{url:r})}else{const n=(0,s.Wd)(t);n&&e(n,{url:"Browser"===n&&d?r:l})}n()}}else{const t=Object.keys(u.Z).find((e=>e.toLowerCase()===(x[l.toLowerCase()]||l).toLowerCase()));t?(e(t),n()):$[r.toLowerCase()]?($[r.toLowerCase()](),n()):(k(r),c=!1)}T(!1),c&&t("Run")}),[t,y,C,e,P,E,S,j]);return(0,m.useLayoutEffect)((()=>{"Run"===L&&(F.current?.focus(h.eS),F.current?.value&&F.current?.select())}),[L]),(0,m.useLayoutEffect)((()=>{r?.url&&F.current&&(F.current.value=`${F.current.value.trimEnd()} ${r.url}`.trim(),O(!1))}),[r?.url]),(0,n.jsxs)(a,{...(0,l.Z)({id:"Run"}),onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,g.nK)(e)},children:[(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{alt:"Run",src:"/System/Icons/32x32/run.webp"}),(0,n.jsx)("figcaption",{children:v})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:b,children:"Open:"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{ref:F,autoComplete:"off",defaultValue:D[0],disabled:_,enterKeyHint:"go",id:b,onBlurCapture:e=>{let{relatedTarget:t}=e;!r?.componentWindow||r.componentWindow.contains(t)?F.current?.focus(h.eS):I(!1)},onFocusCapture:()=>I(!0),onKeyDownCapture:e=>{const{key:r}=e;"Enter"===r&&B(F.current?.value.trim()),"Escape"===r&&((0,g.nK)(e),t("Run"))},onKeyUp:e=>{let{target:t}=e;return O(!t?.value)},spellCheck:"false",type:"text"}),(0,n.jsx)("select",{disabled:0===D.length,onChange:e=>{let{target:t}=e;F.current&&(F.current.value=t.value,O(!1))},onClick:e=>{let{target:t}=e;t instanceof HTMLSelectElement&&-1!==t.selectedIndex&&(t.selectedIndex=-1)},children:D.map(((e,t)=>(0,n.jsx)("option",{value:e,children:e},`${e}-${t}`)))})]})]}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(i.Z,{$active:R,disabled:M||_,onClick:()=>B(F.current?.value.trim()),children:"OK"}),(0,n.jsx)(i.Z,{disabled:_,onClick:()=>t("Run"),children:"Cancel"})]})]})}},82465:function(e,t,r){const n=r(74965).ZP.button.withConfig({componentId:"sc-6268283d-0"})`
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
`;t.Z=n},54537:function(e,t,r){var n=r(99987),o=r(21424),i=r(87674),a=r(67435),s=r(57996),l=r(3416),c=r(68584),p=r(50959),u=r(11188),d=r(8798);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:f,onDragLeave:m,onDragOver:h,updatePositions:g}=e;const{url:w}=(0,s.z)(),{iconPositions:y,sortOrders:b,setIconPositions:x}=(0,l.k)(),{mkdirRecursive:v,updateFolder:k,writeFile:$}=(0,a.o)(),C=(0,p.useCallback)((async(e,t,r)=>{if(f)if(t){const n=(0,c.join)(u.Ll,e);await v(u.Ll),await $(n,t,!0)&&(r===i.v.UPDATE_URL&&w(f,n),k(u.Ll,e))}else r===i.v.UPDATE_URL&&w(f,e)}),[f,v,k,w,$]),{openTransferDialog:P}=(0,n.Z)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,d.nK)(e)},onDrop:e=>{if(g&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,o.p4)(e);if(0===t.length&&""===n)return;const i={x:e.clientX,y:e.clientY};let a=[];if(n){try{a=JSON.parse(n)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(r)&&(0,c.basename)(e)===(0,c.relative)(r,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!y[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(y[n]);return(0,c.basename)(n)})),(0,d.vi)(r,e.target,y,b,i,a,x)}(0,o.WG)(e,t||C,r,P,Boolean(f))}}}},89111:function(e,t,r){r.r(t),r.d(t,{getIpfsFileName:function(){return l},getIpfsGatewayUrl:function(){return s},getIpfsResource:function(){return c}});var n=r(11188),o=r(55872).Buffer;let i="";const a=e=>new Promise((t=>{const r=window.setTimeout((()=>t(!1)),n.i2),o=new Image;o.addEventListener("load",(()=>{window.clearTimeout(r),t(!0)}),n.K7),o.addEventListener("error",(()=>{window.clearTimeout(r),t(!1)}),n.K7),o.src=`${e.replace("<CID>","bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`})),s=async(e,t)=>{if(!i||t){const e=t?n.i6.filter((e=>e!==i)):n.i6;for(const t of e)if(await a(t)){i=t;break}if(!i)return""}const{pathname:o,protocol:s,search:l}=new URL(e);if("ipfs:"!==s)return"";const[c="",...p]=o.split("/").filter(Boolean),{CID:u}=await r.e(9335).then(r.bind(r,29335));return`${i.replace("<CID>",u.parse(c).toV1().toString())}${p.join("/")}${l}`},l=async(e,t)=>{const{pathname:n,searchParams:o}=new URL(e),i=o.get("filename");if(i)return i;const{fileTypeFromBuffer:a}=await Promise.all([r.e(5181),r.e(7012),r.e(9778)]).then(r.bind(r,97012)),{ext:s=""}=await a(t)||{};return`${n.split("/").filter(Boolean).join("_")}${s?`.${s}`:""}`},c=async e=>{let t;const r={...n.P8,cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null};try{t=await fetch(await s(e),r)}catch(i){"Failed to fetch"===i.message&&(t=await fetch(await s(e,!0),r))}return t instanceof Response?o.from(await t.arrayBuffer()):o.from("")}},56600:function(e,t,r){r.r(t);var n=r(8798);const o={blue_sheep:["/Program Files/eSheep/blue_sheep.xml",12],eSheep:["/Program Files/eSheep/eSheep.xml",12],fox:["/Program Files/eSheep/fox.xml",4],green_sheep:["/Program Files/eSheep/green_sheep.xml",12],mimiko:["/Program Files/eSheep/mimiko.xml",4],neko:["/Program Files/eSheep/neko.xml",10],orange_sheep:["/Program Files/eSheep/orange_sheep.xml",12],pingus:["/Program Files/eSheep/pingus.xml",10],red_sheep:["/Program Files/eSheep/red_sheep.xml",12],yellow_sheep:["/Program Files/eSheep/yellow_sheep.xml",12]};let i=!1;t.default=()=>(0,n.mb)(["/Program Files/eSheep/eSheep.js"]).then((()=>{if(window.Sheep){const e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});i?e.Start((()=>{const e=Object.keys(o).flatMap((e=>{const[,t]=o[e];return Array.from({length:t}).fill(e)})),t=Math.floor(Math.random()*e.length),[r]=o[e[t]];return r})()):(i=!0,e.Start("/Program Files/eSheep/eSheep.xml"))}}))}}]);