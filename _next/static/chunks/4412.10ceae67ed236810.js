"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4412],{4412:function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.parseAni=void 0;var e=i(6847),r=i(8428),s={bits:32,be:!1,signed:!1,fp:!1};n.parseAni=function(t){var n=new e.RIFFFile;n.setSignature(t);var i=n.signature;if("ACON"!==i.format)throw new Error('Expected format. Expected "ACON", got "'+i.format+'"');function h(t,i){var e=n.findChunk(t);return null==e?null:i(e)}function a(n,i){return n.subChunks.slice(0,i).map((function(n){if("icon"!==n.chunkId)throw new Error("Unexpected chunk type in fram: "+n.chunkId);return t.slice(n.chunkData.start,n.chunkData.end)}))}var u=h("anih",(function(n){var i=r.unpackArray(t,s,n.chunkData.start,n.chunkData.end);return{cbSize:i[0],nFrames:i[1],nSteps:i[2],iWidth:i[3],iHeight:i[4],iBitCount:i[5],nPlanes:i[6],iDispRate:i[7],bfAttributes:i[8]}}));if(null==u)throw new Error("Did not find anih");var o=h("rate",(function(n){return r.unpackArray(t,s,n.chunkData.start,n.chunkData.end)})),c=h("seq ",(function(n){return r.unpackArray(t,s,n.chunkData.start,n.chunkData.end)})),f=n.findChunk("LIST",!0),l=null===f||void 0===f?void 0:f.find((function(t){return"fram"===t.format}));if(null==l)throw new Error("Did not find fram LIST");var k=a(l,u.nFrames),p=null,d=null,b=null===f||void 0===f?void 0:f.find((function(t){return"INFO"===t.format}));return null!=b&&b.subChunks.forEach((function(n){switch(n.chunkId){case"INAM":p=r.unpackString(t,n.chunkData.start,n.chunkData.end);break;case"IART":d=r.unpackString(t,n.chunkData.start,n.chunkData.end);break;case"LIST":"fram"===n.format&&(k=a(n,u.nFrames))}})),{images:k,rate:o,seq:c,metadata:u,artist:d,title:p}}},8428:function(t,n,i){function e(t,n,i=0,e=t.length){if(e%n)throw new Error("Bad buffer length.");for(let s=i;s<e;s+=n)r(t,n,s)}function r(t,n,i){n--;for(let e=0;e<n;e++){let r=t[i+e];t[i+e]=t[i+n],t[i+n]=r,n--}}function s(t,n,i=0){for(let e=0,r=t.length;e<r;e++){let r=t.codePointAt(e);if(r<128)n[i]=r,i++;else{let t=0,s=0;for(r<=2047?(t=1,s=192):r<=65535?(t=2,s=224):r<=1114111&&(t=3,s=240,e++),n[i]=(r>>6*t)+s,i++;t>0;)n[i]=128|r>>6*(t-1)&63,i++,t--}}return i}i.r(n),i.d(n,{pack:function(){return d},packArray:function(){return b},packArrayTo:function(){return l},packString:function(){return c},packStringTo:function(){return f},packTo:function(){return p},unpack:function(){return w},unpackArray:function(){return g},unpackArrayTo:function(){return k},unpackString:function(){return o}});class h{constructor(t,n=!1,i=!1){this.bits=t,this.bytes=t<8?1:Math.ceil(t/8),this.max=Math.pow(2,t)-1,this.min=0;let e=8-(1+(t-1|7)-t);this.lastByteMask_=Math.pow(2,e>0?e:8)-1,this.unpack=this.unpackUnsigned_,n&&(this.max=Math.pow(2,t)/2-1,this.min=-this.max-1,this.unpack=this.unpackSigned_),i&&(this.overflow_=this.overflowClamp_)}pack(t,n,i=0){if(n!==n||n.constructor!=Number)throw new TypeError;n=this.overflow_(n),t[i]=255&(n<0?n+Math.pow(2,this.bits):n),i++;for(let e=2,r=this.bytes;e<r;e++)t[i]=255&Math.floor(n/Math.pow(2,8*(e-1))),i++;return this.bits>8&&(t[i]=Math.floor(n/Math.pow(2,8*(this.bytes-1)))&this.lastByteMask_,i++),i}unpack_(t,n=0){let i=0;for(let e=0;e<this.bytes;e++)i+=t[n+e]*Math.pow(256,e);return i}unpackUnsigned_(t,n=0){return this.overflow_(this.unpack_(t,n))}unpackSigned_(t,n=0){return this.overflow_(this.sign_(this.unpack_(t,n)))}overflow_(t){if(t>this.max||t<this.min)throw new RangeError;return t}overflowClamp_(t){return t>this.max?this.max:t<this.min?this.min:t}sign_(t){return t>this.max&&(t-=2*this.max+2),t}}class a{constructor(t,n){this.ebits=t,this.fbits=n,this.bias=(1<<t-1)-1,this.numBytes=Math.ceil((t+n)/8),this.biasP2=Math.pow(2,this.bias+1),this.ebitsFbits=t+n,this.fbias=Math.pow(2,-(8*this.numBytes-1-t))}pack(t,n,i){if("number"!=typeof n)throw new TypeError;Math.abs(n)>this.biasP2-2*this.ebitsFbits&&(n=n<0?-1/0:1/0);let e=((n=+n)||1/n)<0||n<0?1:0;n=Math.abs(n);let r=Math.min(Math.floor(Math.log(n)/Math.LN2),1023),s=u(n/Math.pow(2,r)*Math.pow(2,this.fbits));return n!==n?(s=Math.pow(2,this.fbits-1),r=(1<<this.ebits)-1):0!==n&&(n>=Math.pow(2,1-this.bias)?(s/Math.pow(2,this.fbits)>=2&&(r+=1,s=1),r>this.bias?(r=(1<<this.ebits)-1,s=0):(r+=this.bias,s=u(s)-Math.pow(2,this.fbits))):(s=u(n/Math.pow(2,1-this.bias-this.fbits)),r=0)),this.packFloatBits_(t,i,e,r,s)}unpack(t,n){let i,e=(1<<this.ebits)-1,r="";for(let a=this.numBytes-1;a>=0;a--){let i=t[a+n].toString(2);r+="00000000".substring(i.length)+i}let s="1"==r.charAt(0)?-1:1;r=r.substring(1);let h=parseInt(r.substring(0,this.ebits),2);return r=r.substring(this.ebits),h==e?0!==parseInt(r,2)?NaN:s*(1/0):(0===h?(h+=1,i=parseInt(r,2)):i=parseInt("1"+r,2),s*i*this.fbias*Math.pow(2,h-this.bias))}packFloatBits_(t,n,i,e,r){let s=[];s.push(i);for(let c=this.ebits;c>0;c-=1)s[c]=e%2?1:0,e=Math.floor(e/2);let h=s.length;for(let c=this.fbits;c>0;c-=1)s[h+c]=r%2?1:0,r=Math.floor(r/2);let a=s.join(""),u=this.numBytes+n-1,o=n;for(;u>=n;)t[u]=parseInt(a.substring(0,8),2),a=a.substring(8),u--,o++;return o}}function u(t){let n=Math.floor(t),i=t-n;return i<.5?n:i>.5||n%2?n+1:n}function o(t,n=0,i=t.length){return function(t,n=0,i=t.length){let e="";for(let r=n;r<i;){let n=128,i=191,s=!1,h=t[r++];if(h>=0&&h<=127)e+=String.fromCharCode(h);else{let a=0;h>=194&&h<=223?a=1:h>=224&&h<=239?(a=2,224===t[r]&&(n=160),237===t[r]&&(i=159)):h>=240&&h<=244?(a=3,240===t[r]&&(n=144),244===t[r]&&(i=143)):s=!0,h&=(1<<8-a-1)-1;for(let e=0;e<a;e++)(t[r]<n||t[r]>i)&&(s=!0),h=h<<6|63&t[r],r++;s?e+=String.fromCharCode(65533):h<=65535?e+=String.fromCharCode(h):(h-=65536,e+=String.fromCharCode(55296+(h>>10&1023),56320+(1023&h)))}}return e}(t,n,i)}function c(t){let n=[];return s(t,n,0),n}function f(t,n,i=0){return s(t,n,i)}function l(t,n,i,r=0,s=!1){let h=S((n=n||{}).bits,n.fp,n.signed,s),a=Math.ceil(n.bits/8),u=0,o=r;try{for(let n=t.length;u<n;u++)r=h.pack(i,t[u],r);n.be&&e(i,a,o,r)}catch(c){m(c,t[u],u)}return r}function k(t,n,i,r=0,s=t.length,h=!1,a=!1){let u=S((n=n||{}).bits,n.fp,n.signed,a),o=Math.ceil(n.bits/8);s=function(t,n,i,e,r){let s=(i-n)%e;if(r&&(s||t.length<e))throw new Error("Bad buffer length");return i-s}(t,r,s,o,h);let c=0,f=r;try{for(n.be&&e(t,o,r,s);f<s;f+=o,c++)i[c]=u.unpack(t,f);n.be&&e(t,o,r,s)}catch(l){m(l,t.slice(f,f+o),f)}}function p(t,n,i,e=0,r=!1){return l([t],n,i,e,r)}function d(t,n,i=!1){let e=[];return p(t,n,e,0,i),e}function b(t,n,i=!1){let e=[];return l(t,n,e,0,i),e}function g(t,n,i=0,e=t.length,r=!1,s=!1){let h=[];return k(t,n,h,i,e,r,s),h}function w(t,n,i=0,e=!1){return g(t,n,i,i+Math.ceil(n.bits/8),!0,e)[0]}function m(t,n,i){throw t.message=t.constructor.name+" at index "+i+": "+n,t}function S(t,n,i,e){return n?function(t){if(!t||16!==t&&32!==t&&64!==t)throw new Error(I+": float, bits: "+t)}(t):function(t){if(!t||t<1||t>53)throw new Error(I+": int, bits: "+t)}(t),n&&16===t?new a(5,11):n&&32==t?new a(8,23):n&&64==t?new a(11,52):new h(t,i,e)}const I="Unsupported type"},6847:function(t,n,i){i.r(n),i.d(n,{RIFFFile:function(){return r}});var e=i(8428);class r{constructor(){this.container="",this.chunkSize=0,this.format="",this.signature=null,this.head=0,this.uInt32={bits:32,be:!1,signed:!1,fp:!1},this.supported_containers=["RIFF","RIFX"]}setSignature(t){if(this.head=0,this.container=this.readString(t,4),-1===this.supported_containers.indexOf(this.container))throw Error("Not a supported format.");this.uInt32.be="RIFX"===this.container,this.chunkSize=this.readUInt32(t),this.format=this.readString(t,4),this.signature={chunkId:this.container,chunkSize:this.chunkSize,format:this.format,subChunks:this.getSubChunksIndex_(t),chunkData:{start:0,end:this.chunkSize}}}findChunk(t,n=!1){let i=this.signature.subChunks,e=[];for(let r=0;r<i.length;r++)if(i[r].chunkId==t){if(!n)return i[r];e.push(i[r])}return"LIST"==t&&e.length?e:null}readString(t,n){let i="";return i=(0,e.unpackString)(t,this.head,this.head+n),this.head+=n,i}readUInt32(t){let n=(0,e.unpack)(t,this.uInt32,this.head);return this.head+=4,n}getSubChunksIndex_(t){let n=[],i=this.head;for(;i<=t.length-8;)n.push(this.getSubChunkIndex_(t,i)),i+=8+n[n.length-1].chunkSize,i=i%2?i+1:i;return n}getSubChunkIndex_(t,n){let i={chunkId:this.getChunkId_(t,n),chunkSize:this.getChunkSize_(t,n)};if("LIST"==i.chunkId)i.format=(0,e.unpackString)(t,n+8,n+12),this.head+=4,i.subChunks=this.getSubChunksIndex_(t);else{let t=i.chunkSize%2?i.chunkSize+1:i.chunkSize;this.head=n+8+t,i.chunkData={start:n+8,end:this.head}}return i}getChunkId_(t,n){return this.head+=4,(0,e.unpackString)(t,n,n+4)}getChunkSize_(t,n){return this.head+=4,(0,e.unpack)(t,this.uInt32,n+4)}}}}]);