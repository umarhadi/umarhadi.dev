!function(){"use strict";const e={camera:{far:400,fov:30,near:.1},color:"hsl(111, 10%, 20%)",colorCycleSpeed:10,forceAnimate:!0,hh:52,hue:222,lightness:6,material:{options:{fog:!0,wireframe:!1}},saturation:50,shininess:15,waveHeight:12,waveSpeed:1.25,ww:50},s={gyroControls:!1,mouseControls:!1,mouseEase:!1,touchControls:!1},t=["/System/Vanta.js/three.min.js","/System/Vanta.js/vanta.waves.min.js"];let i;globalThis.addEventListener("message",(a=>{let{data:o}=a;if("undefined"!==typeof WebGLRenderingContext)if("init"===o)globalThis.importScripts(...t);else if(o instanceof DOMRect){const{width:e,height:s}=o;i?.renderer.setSize(e,s),i?.resize()}else{const{canvas:t,config:a,devicePixelRatio:r}=o,{VANTA:{current:l=i,WAVES:c}={}}=globalThis;if(!t||!c)return;l&&l.destroy();try{i=c({...a||e,...s,canvas:t,devicePixelRatio:r})}catch(n){globalThis.postMessage({message:n?.message,type:"[error]"})}}}),{passive:!0})}(),_N_E={};