"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{29335:function(e,r,t){t.r(r),t.d(r,{CID:function(){return W},bytes:function(){return o},digest:function(){return i},hasher:function(){return s},varint:function(){return n}});var n={};t.r(n),t.d(n,{decode:function(){return v},encodeTo:function(){return x},encodingLength:function(){return C}});var o={};t.r(o),t.d(o,{coerce:function(){return I},empty:function(){return A},equals:function(){return S},fromHex:function(){return U},fromString:function(){return z},isBinary:function(){return D},toHex:function(){return E},toString:function(){return M}});var i={};t.r(i),t.d(i,{Digest:function(){return k},create:function(){return P},decode:function(){return V},equals:function(){return L}});var s={};t.r(s),t.d(s,{Hasher:function(){return oe},from:function(){return ne}});var a=function e(r,t,n){t=t||[];var o=n=n||0;for(;r>=c;)t[n++]=255&r|128,r/=128;for(;-128&r;)t[n++]=255&r|128,r>>>=7;return t[n]=0|r,e.bytes=n-o+1,t},c=Math.pow(2,31);var h=function e(r,t){var n,o=0,i=0,s=t=t||0,a=r.length;do{if(s>=a)throw e.bytes=0,new RangeError("Could not decode varint");n=r[s++],o+=i<28?(127&n)<<i:(127&n)*Math.pow(2,i),i+=7}while(n>=128);return e.bytes=s-t,o};var u=Math.pow(2,7),f=Math.pow(2,14),d=Math.pow(2,21),l=Math.pow(2,28),p=Math.pow(2,35),b=Math.pow(2,42),w=Math.pow(2,49),y=Math.pow(2,56),g=Math.pow(2,63),m={encode:a,decode:h,encodingLength:function(e){return e<u?1:e<f?2:e<d?3:e<l?4:e<p?5:e<b?6:e<w?7:e<y?8:e<g?9:10}};const v=(e,r=0)=>[m.decode(e,r),m.decode.bytes],x=(e,r,t=0)=>(m.encode(e,r,t),r),C=e=>m.encodingLength(e),A=new Uint8Array(0),E=e=>e.reduce(((e,r)=>e+r.toString(16).padStart(2,"0")),""),U=e=>{const r=e.match(/../g);return r?new Uint8Array(r.map((e=>parseInt(e,16)))):A},S=(e,r)=>{if(e===r)return!0;if(e.byteLength!==r.byteLength)return!1;for(let t=0;t<e.byteLength;t++)if(e[t]!==r[t])return!1;return!0},I=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},D=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),z=e=>(new TextEncoder).encode(e),M=e=>(new TextDecoder).decode(e),P=(e,r)=>{const t=r.byteLength,n=C(e),o=n+C(t),i=new Uint8Array(o+t);return x(e,i,0),x(t,i,n),i.set(r,o),new k(e,t,r,i)},V=e=>{const r=I(e),[t,n]=v(r),[o,i]=v(r.subarray(n)),s=r.subarray(n+i);if(s.byteLength!==o)throw new Error("Incorrect length");return new k(t,o,s,r)},L=(e,r)=>{if(e===r)return!0;{const t=r;return e.code===t.code&&e.size===t.size&&t.bytes instanceof Uint8Array&&S(e.bytes,t.bytes)}};class k{constructor(e,r,t,n){this.code=e,this.size=r,this.digest=t,this.bytes=n}}var T=function(e,r){if(e.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),n=0;n<t.length;n++)t[n]=255;for(var o=0;o<e.length;o++){var i=e.charAt(o),s=i.charCodeAt(0);if(255!==t[s])throw new TypeError(i+" is ambiguous");t[s]=o}var a=e.length,c=e.charAt(0),h=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function f(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var r=0;if(" "!==e[r]){for(var n=0,o=0;e[r]===c;)n++,r++;for(var i=(e.length-r)*h+1>>>0,s=new Uint8Array(i);e[r];){var u=t[e.charCodeAt(r)];if(255===u)return;for(var f=0,d=i-1;(0!==u||f<o)&&-1!==d;d--,f++)u+=a*s[d]>>>0,s[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");o=f,r++}if(" "!==e[r]){for(var l=i-o;l!==i&&0===s[l];)l++;for(var p=new Uint8Array(n+(i-l)),b=n;l!==i;)p[b++]=s[l++];return p}}}return{encode:function(r){if(r instanceof Uint8Array||(ArrayBuffer.isView(r)?r=new Uint8Array(r.buffer,r.byteOffset,r.byteLength):Array.isArray(r)&&(r=Uint8Array.from(r))),!(r instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===r.length)return"";for(var t=0,n=0,o=0,i=r.length;o!==i&&0===r[o];)o++,t++;for(var s=(i-o)*u+1>>>0,h=new Uint8Array(s);o!==i;){for(var f=r[o],d=0,l=s-1;(0!==f||d<n)&&-1!==l;l--,d++)f+=256*h[l]>>>0,h[l]=f%a>>>0,f=f/a>>>0;if(0!==f)throw new Error("Non-zero carry");n=d,o++}for(var p=s-n;p!==s&&0===h[p];)p++;for(var b=c.repeat(t);p<s;++p)b+=e.charAt(h[p]);return b},decodeUnsafe:f,decode:function(e){var t=f(e);if(t)return t;throw new Error(`Non-${r} character`)}}};class ${constructor(e,r,t){this.name=e,this.prefix=r,this.baseEncode=t}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class B{constructor(e,r,t){if(this.name=e,this.prefix=r,void 0===r.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=r.codePointAt(0),this.baseDecode=t}decode(e){if("string"===typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return q(this,e)}}class N{constructor(e){this.decoders=e}or(e){return q(this,e)}decode(e){const r=e[0],t=this.decoders[r];if(t)return t.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const q=(e,r)=>new N({...e.decoders||{[e.prefix]:e},...r.decoders||{[r.prefix]:r}});class O{constructor(e,r,t,n){this.name=e,this.prefix=r,this.baseEncode=t,this.baseDecode=n,this.encoder=new $(e,r,t),this.decoder=new B(e,r,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const j=({name:e,prefix:r,encode:t,decode:n})=>new O(e,r,t,n),H=({prefix:e,name:r,alphabet:t})=>{const{encode:n,decode:o}=T(t,r);return j({prefix:e,name:r,encode:n,decode:e=>I(o(e))})},J=({name:e,prefix:r,bitsPerChar:t,alphabet:n})=>j({prefix:r,name:e,encode:e=>((e,r,t)=>{const n="="===r[r.length-1],o=(1<<t)-1;let i="",s=0,a=0;for(let c=0;c<e.length;++c)for(a=a<<8|e[c],s+=8;s>t;)s-=t,i+=r[o&a>>s];if(s&&(i+=r[o&a<<t-s]),n)for(;i.length*t&7;)i+="=";return i})(e,n,t),decode:r=>((e,r,t,n)=>{const o={};for(let u=0;u<r.length;++u)o[r[u]]=u;let i=e.length;for(;"="===e[i-1];)--i;const s=new Uint8Array(i*t/8|0);let a=0,c=0,h=0;for(let u=0;u<i;++u){const r=o[e[u]];if(void 0===r)throw new SyntaxError(`Non-${n} character`);c=c<<t|r,a+=t,a>=8&&(a-=8,s[h++]=255&c>>a)}if(a>=t||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s})(r,n,t,e)}),R=H({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),F=(H({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),J({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5})),Q=(J({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),J({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),J({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),J({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),J({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),J({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),J({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),J({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),(e,r)=>{const{bytes:t,version:n}=e;return 0===n?X(t,K(e),r||R.encoder):Y(t,K(e),r||F.encoder)}),G=new WeakMap,K=e=>{const r=G.get(e);if(null==r){const r=new Map;return G.set(e,r),r}return r};class W{constructor(e,r,t,n){this.code=r,this.version=e,this.multihash=t,this.bytes=n,this["/"]=n}get asCID(){return this}get byteOffset(){return this.bytes.byteOffset}get byteLength(){return this.bytes.byteLength}toV0(){switch(this.version){case 0:return this;case 1:{const{code:e,multihash:r}=this;if(e!==_)throw new Error("Cannot convert a non dag-pb CID to CIDv0");if(r.code!==ee)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");return W.createV0(r)}default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}toV1(){switch(this.version){case 0:{const{code:e,digest:r}=this.multihash,t=P(e,r);return W.createV1(this.code,t)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 1. This is a bug please report`)}}equals(e){return W.equals(this,e)}static equals(e,r){const t=r;return t&&e.code===t.code&&e.version===t.version&&L(e.multihash,t.multihash)}toString(e){return Q(this,e)}toJSON(){return{"/":Q(this)}}link(){return this}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return`CID(${this.toString()})`}static asCID(e){if(null==e)return null;const r=e;if(r instanceof W)return r;if(null!=r["/"]&&r["/"]===r.bytes||r.asCID===r){const{version:e,code:t,multihash:n,bytes:o}=r;return new W(e,t,n,o||re(e,t,n.bytes))}if(!0===r[te]){const{version:e,multihash:t,code:n}=r,o=V(t);return W.create(e,n,o)}return null}static create(e,r,t){if("number"!==typeof r)throw new Error("String codecs are no longer supported");if(!(t.bytes instanceof Uint8Array))throw new Error("Invalid digest");switch(e){case 0:if(r!==_)throw new Error(`Version 0 CID must use dag-pb (code: ${_}) block encoding`);return new W(e,r,t,t.bytes);case 1:{const n=re(e,r,t.bytes);return new W(e,r,t,n)}default:throw new Error("Invalid version")}}static createV0(e){return W.create(0,_,e)}static createV1(e,r){return W.create(1,e,r)}static decode(e){const[r,t]=W.decodeFirst(e);if(t.length)throw new Error("Incorrect length");return r}static decodeFirst(e){const r=W.inspectBytes(e),t=r.size-r.multihashSize,n=I(e.subarray(t,t+r.multihashSize));if(n.byteLength!==r.multihashSize)throw new Error("Incorrect length");const o=n.subarray(r.multihashSize-r.digestSize),i=new k(r.multihashCode,r.digestSize,o,n);return[0===r.version?W.createV0(i):W.createV1(r.codec,i),e.subarray(r.size)]}static inspectBytes(e){let r=0;const t=()=>{const[t,n]=v(e.subarray(r));return r+=n,t};let n=t(),o=_;if(18===n?(n=0,r=0):o=t(),0!==n&&1!==n)throw new RangeError(`Invalid CID version ${n}`);const i=r,s=t(),a=t(),c=r+a;return{version:n,codec:o,multihashCode:s,digestSize:a,multihashSize:c-i,size:c}}static parse(e,r){const[t,n]=Z(e,r),o=W.decode(n);if(0===o.version&&"Q"!==e[0])throw Error("Version 0 CID string must not include multibase prefix");return K(o).set(t,e),o}}const Z=(e,r)=>{switch(e[0]){case"Q":{const t=r||R;return[R.prefix,t.decode(`${R.prefix}${e}`)]}case R.prefix:{const t=r||R;return[R.prefix,t.decode(e)]}case F.prefix:{const t=r||F;return[F.prefix,t.decode(e)]}default:if(null==r)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],r.decode(e)]}},X=(e,r,t)=>{const{prefix:n}=t;if(n!==R.prefix)throw Error(`Cannot string encode V0 in ${t.name} encoding`);const o=r.get(n);if(null==o){const o=t.encode(e).slice(1);return r.set(n,o),o}return o},Y=(e,r,t)=>{const{prefix:n}=t,o=r.get(n);if(null==o){const o=t.encode(e);return r.set(n,o),o}return o},_=112,ee=18,re=(e,r,t)=>{const n=C(e),o=n+C(r),i=new Uint8Array(o+t.byteLength);return x(e,i,0),x(r,i,n),i.set(t,o),i},te=Symbol.for("@ipld/js-cid/CID"),ne=({name:e,code:r,encode:t})=>new oe(e,r,t);class oe{constructor(e,r,t){this.name=e,this.code=r,this.encode=t}digest(e){if(e instanceof Uint8Array){const r=this.encode(e);return r instanceof Uint8Array?P(this.code,r):r.then((e=>P(this.code,e)))}throw Error("Unknown type, must be binary type")}}}}]);