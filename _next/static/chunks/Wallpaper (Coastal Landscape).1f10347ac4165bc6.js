!function(){var e={25265:function(e,t,n){"use strict";n(63270);const r=["/System/ShaderToy/CoastalLandscape/piLibs.js","/System/ShaderToy/CoastalLandscape/effect.js","/System/ShaderToy/CoastalLandscape/init.js"];globalThis.addEventListener("message",(e=>{let{data:t}=e;if("undefined"!==typeof WebGLRenderingContext)if("init"===t)globalThis.importScripts(...r);else if(t instanceof DOMRect)globalThis.demoCanvasRect=t,globalThis.updateLandscapeSize();else{const{canvas:e,devicePixelRatio:r}=t;globalThis.devicePixelRatio=r;try{globalThis.effectInit(e)}catch(n){globalThis.postMessage({message:n?.message,type:"[error]"})}}}),{passive:!0})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}},f=!0;try{e[r](i,i.exports,n),f=!1}finally{f&&delete t[r]}return i.exports}n.m=e,n.x=function(){var e=n.O(void 0,[5872,3270],(function(){return n(25265)}));return e=n.O(e)},function(){var e=[];n.O=function(t,r,o,i){if(!r){var f=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||f>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<f&&(f=i));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var f={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){f[e]=function(){return r[e]}}));return f.default=function(){return r},n.d(i,f),i}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/chunks/"+e+"."+{2826:"ffea28a5020bea6f",3270:"89aed546c37e5cef",5181:"112e6a7a10c504fb",5872:"8a94ec43eb4d480d",7012:"01862be0922653d6",7453:"8f4d38d34fc06f16",9335:"d78f423d8bd3c695",9778:"fcbde6ebd0211c88"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.tt=function(){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!==typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e}}(),n.tu=function(e){return n.tt().createScriptURL(e)},n.p="/_next/",function(){var e={5183:1};n.f.i=function(t,r){e[t]||importScripts(n.tu(n.p+n.u(t)))};var t=self.webpackChunk_N_E=self.webpackChunk_N_E||[],r=t.push.bind(t);t.push=function(t){var o=t[0],i=t[1],f=t[2];for(var a in i)n.o(i,a)&&(n.m[a]=i[a]);for(f&&f(n);o.length;)e[o.pop()]=1;r(t)}}(),function(){var e=n.x;n.x=function(){return Promise.all([n.e(5872),n.e(3270)]).then(e)}}();var r=n.x();_N_E=r}();