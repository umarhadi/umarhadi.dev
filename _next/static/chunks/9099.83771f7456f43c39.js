(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9099],{9099:function(e,t,n){e=n.nmd(e),function(){var t,r,i;t=("undefined"!=typeof window&&null!==window?window.DOMParser:void 0)||n(249).a||function(){},r=function(e,t){var n,i,o,a,u,s,c,l,f,h,d;if(e.hasChildNodes())for(u=l=0,h=(a=e.childNodes).length;h>=0?h>l:l>h;u=h>=0?++l:--l)if(o=(i=a[u]).nodeName,/REF/i.test(o)){for(c=f=0,d=(n=i.attributes).length;d>=0?d>f:f>d;c=d>=0?++f:--f)if(s=n[c].nodeName.match(/HREF/i)){t.push({file:i.getAttribute(s[0]).trim()});break}}else"#text"!==o&&r(i,t);return null},i=function(e){var n,i;return i=[],(n=(new t).parseFromString(e,"text/xml").documentElement)?(r(n,i),i):i},(null!==e?e.exports:window).ASX={name:"asx",parse:i}}.call(this),function(){var t,n,r,i,o,a;t=/:(?:(-?\d+),(.+)\s*-\s*(.+)|(.+))\n(.+)/,i=function(e){var n;return(n=e.match(t))&&6===n.length?{length:n[1]||0,artist:n[2]||"",title:n[4]||n[3],file:n[5].trim()}:void 0},a=function(e){return{file:e.trim()}},r=function(e){return!!e.trim().length},n=function(e){return"#"!==e[0]},o=function(e){var t;return t=(e=e.replace(/\r/g,"")).search("\n"),"#EXTM3U"===e.substr(0,t)?e.substr(t).split("\n#").filter(r).map(i):e.split("\n").filter(r).filter(n).map(a)},(null!==e?e.exports:window).M3U={name:"m3u",parse:o}}.call(this),function(){var t,n;t=/(file|title|length)(\d+)=(.+)\r?/i,n=function(e){var n,r,i,o,a,u,s,c;for(o=[],u=0,s=(c=e.trim().split("\n")).length;s>u;u++)(i=c[u].match(t))&&4===i.length&&(i[0],r=i[1],n=i[2],a=i[3],o[n]||(o[n]={}),o[n][r.toLowerCase()]=a);return o.filter((function(e){return null!=e}))},(null!==e?e.exports:window).PLS={name:"pls",parse:n}}.call(this)},249:function(e,t,n){function r(e){this.options=1!=e&&e||{locator:{}}}function i(){this.cdata=!1}function o(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function a(e){if(e)return"\n@"+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function u(e,t,n){return"string"==typeof e?e.substr(t,n):e.length>=t+n||t?new java.lang.String(e,t,n)+"":e}function s(e,t){e.currentElement?e.currentElement.appendChild(t):e.document.appendChild(t)}r.prototype.parseFromString=function(e,t){var n=new c,r=this.options,o=r.domBuilder||new i,u=r.errorHandler,s=r.locator,l={},f={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return s&&o.setDocumentLocator(s),n.errorHandler=function(e,t,n){if(!e){if(t instanceof i)return t;e=t}var r={},o=e instanceof Function;function u(t){var i=e[t];if(!i)if(o)i=2==e.length?function(n){e(t,n)}:e;else for(var u=arguments.length;--u&&!(i=e[arguments[u]]););r[t]=i&&function(e){i(e+a(n))}||function(){}}return n=n||{},u("warning","warn"),u("error","warn","warning"),u("fatalError","warn","warning","error"),r}(u,o,s),n.domBuilder=r.domBuilder||o,/\/x?html?$/.test(t)&&(f.nbsp="\xa0",f.copy="\xa9",l[""]="http://www.w3.org/1999/xhtml"),n.parse(e,l,f),o.document},i.prototype={startDocument:function(){this.document=(new l).createDocument(null,null,null),this.locator&&(this.document.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var i=this.document,a=i.createElementNS(e,n||t),u=r.length;s(this,a),this.currentElement=a,this.locator&&o(this.locator,a);for(var c=0;c<u;c++){e=r.getURI(c);var l=r.getValue(c),f=(n=r.getQName(c),i.createAttributeNS(e,n));f.getOffset&&o(f.getOffset(1),f),f.value=f.nodeValue=l,a.setAttributeNode(f)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName;this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.document.createProcessingInstruction(e,t);this.locator&&o(this.locator,n),s(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){if(e=u.apply(this,arguments),this.currentElement&&e){if(this.cdata){var r=this.document.createCDATASection(e);this.currentElement.appendChild(r)}else{r=this.document.createTextNode(e);this.currentElement.appendChild(r)}this.locator&&o(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.document.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,n){e=u.apply(this,arguments);var r=this.document.createComment(e);this.locator&&o(this.locator,r),s(this,r)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.document.implementation;if(r&&r.createDocumentType){var i=r.createDocumentType(e,t,n);this.locator&&o(this.locator,i),s(this,i)}},warning:function(e){console.warn(e,a(this.locator))},error:function(e){console.error(e,a(this.locator))},fatalError:function(e){throw console.error(e,a(this.locator)),e}},"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,(function(e){i.prototype[e]=function(){return null}}));var c=n(7736).G,l=n(3318).DOMImplementation;n(3318),t.a=r},3318:function(e,t){function n(e,t){for(var n in e)t[n]=e[n]}function r(e,t){var r=e.prototype;if(Object.create){var i=Object.create(t.prototype);r.__proto__=i}if(!(r instanceof t)){function o(){}o.prototype=t.prototype,n(r,o=new o),e.prototype=r=o}r.constructor!=e&&("function"!=typeof e&&console.error("unknow Class:"+e),r.constructor=e)}var i={},o=i.ELEMENT_NODE=1,a=i.ATTRIBUTE_NODE=2,u=i.TEXT_NODE=3,s=i.CDATA_SECTION_NODE=4,c=i.ENTITY_REFERENCE_NODE=5,l=i.ENTITY_NODE=6,f=i.PROCESSING_INSTRUCTION_NODE=7,h=i.COMMENT_NODE=8,d=i.DOCUMENT_NODE=9,m=i.DOCUMENT_TYPE_NODE=10,p=i.DOCUMENT_FRAGMENT_NODE=11,N=i.NOTATION_NODE=12,g={},v={},w=(g.INDEX_SIZE_ERR=(v[1]="Index size error",1),g.DOMSTRING_SIZE_ERR=(v[2]="DOMString size error",2),g.HIERARCHY_REQUEST_ERR=(v[3]="Hierarchy request error",3),g.WRONG_DOCUMENT_ERR=(v[4]="Wrong document",4),g.INVALID_CHARACTER_ERR=(v[5]="Invalid character",5),g.NO_DATA_ALLOWED_ERR=(v[6]="No data allowed",6),g.NO_MODIFICATION_ALLOWED_ERR=(v[7]="No modification allowed",7),g.NOT_FOUND_ERR=(v[8]="Not found",8)),b=(g.NOT_SUPPORTED_ERR=(v[9]="Not supported",9),g.INUSE_ATTRIBUTE_ERR=(v[10]="Attribute in use",10));g.INVALID_STATE_ERR=(v[11]="Invalid state",11),g.SYNTAX_ERR=(v[12]="Syntax error",12),g.INVALID_MODIFICATION_ERR=(v[13]="Invalid modification",13),g.NAMESPACE_ERR=(v[14]="Invalid namespace",14),g.INVALID_ACCESS_ERR=(v[15]="Invalid access",15);function E(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,v[e]),this.message=v[e],Error.captureStackTrace&&Error.captureStackTrace(this,E);return n.code=e,t&&(this.message=this.message+": "+t),n}function D(){}function y(e,t){this._node=e,this._refresh=t,T(this)}function T(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var r=e._refresh(e._node);ee(e,"length",r.length),n(r,e),e._inc=t}}function C(){}function S(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function _(e,t,n,r){if(r?t[S(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var i=e.ownerDocument;i&&(r&&M(i,e,r),function(e,t,n){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&(t._nsMap[n.prefix?n.localName:""]=n.value)}(i,e,n))}}function x(e,t,n){var r=S(t,n);if(!(r>=0))throw E(w,new Error);for(var i=t.length-1;r<i;)t[r]=t[++r];if(t.length=i,e){var o=e.ownerDocument;o&&(M(o,e,n),n.ownerElement=null)}}function A(e){if(this._features={},e)for(var t in e)this._features=e[t]}function I(){}function R(e){return("<"==e?"&lt;":">"==e&&"&gt;")||"&"==e&&"&amp;"||'"'==e&&"&quot;"||"&#"+e.charCodeAt()+";"}function O(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(O(e,t))return!0}while(e=e.nextSibling)}function F(){}function M(e,t,n,r){e&&e._inc++,"http://www.w3.org/2000/xmlns/"==n.namespaceURI&&delete t._nsMap[n.prefix?n.localName:""]}function k(e,t,n){if(e&&e._inc){e._inc++;var r=t.childNodes;if(n)r[r.length++]=n;else{for(var i=t.firstChild,o=0;i;)r[o++]=i,i=i.nextSibling;r.length=o}}}function U(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,k(e.ownerDocument,e),t}function B(e,t,n){var r=t.parentNode;if(r&&r.removeChild(t),t.nodeType===p){var i=t.firstChild;if(null==i)return t;var o=t.lastChild}else i=o=t;var a=n?n.previousSibling:e.lastChild;i.previousSibling=a,o.nextSibling=n,a?a.nextSibling=i:e.firstChild=i,null==n?e.lastChild=o:n.previousSibling=o;do{i.parentNode=e}while(i!==o&&(i=i.nextSibling));return k(e.ownerDocument||e,e),t.nodeType==p&&(t.firstChild=t.lastChild=null),t}function P(){this._nsMap={}}function L(){}function V(){}function $(){}function q(){}function j(){}function z(){}function H(){}function G(){}function Y(){}function X(){}function W(){}function Q(){}function Z(e,t){switch(e.nodeType){case o:var n=e.attributes,r=n.length,i=e.firstChild,l=e.tagName,N="http://www.w3.org/1999/xhtml"===e.namespaceURI;t.push("<",l);for(var g=0;g<r;g++)Z(n.item(g),t);if(i||N&&!/^(?:meta|link|img|br|hr|input)$/i.test(l)){if(t.push(">"),N&&/^script$/i.test(l))i&&t.push(i.data);else for(;i;)Z(i,t),i=i.nextSibling;t.push("</",l,">")}else t.push("/>");return;case d:case p:for(i=e.firstChild;i;)Z(i,t),i=i.nextSibling;return;case a:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,R),'"');case u:return t.push(e.data.replace(/[<&]/g,R));case s:return t.push("<![CDATA[",e.data,"]]>");case h:return t.push("\x3c!--",e.data,"--\x3e");case m:var v=e.publicId,w=e.systemId;if(t.push("<!DOCTYPE ",e.name),v)t.push(' PUBLIC "',v),w&&"."!=w&&t.push('" "',w),t.push('">');else if(w&&"."!=w)t.push(' SYSTEM "',w,'">');else{var b=e.internalSubset;b&&t.push(" [",b,"]"),t.push(">")}return;case f:return t.push("<?",e.target," ",e.data,"?>");case c:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function J(e,t,n){var r;switch(t.nodeType){case o:(r=t.cloneNode(!1)).ownerDocument=e;for(var i=r.attributes,u=i.length,s=0;s<u;s++)r.setAttributeNodeNS(J(e,i.item(s),n));case p:break;case a:n=!0}if(r||(r=t.cloneNode(!1)),r.ownerDocument=e,r.parentNode=null,n)for(var c=t.firstChild;c;)r.appendChild(J(e,c,n)),c=c.nextSibling;return r}function K(e,t,n){var r=new t.constructor;for(var i in t){var u=t[i];"object"!=typeof u&&u!=r[i]&&(r[i]=u)}switch(t.childNodes&&(r.childNodes=new D),r.ownerDocument=e,r.nodeType){case o:var s=t.attributes,c=r.attributes=new C,l=s.length;c._ownerElement=r;for(var f=0;f<l;f++)r.setAttributeNode(K(e,s.item(f),!0));break;case a:n=!0}if(n)for(var h=t.firstChild;h;)r.appendChild(K(e,h,n)),h=h.nextSibling;return r}function ee(e,t,n){e[t]=n}E.prototype=Error.prototype,n(g,E),D.prototype={length:0,item:function(e){return this[e]||null}},y.prototype.item=function(e){return T(this),this[e]},r(y,D),C.prototype={length:0,item:D.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var n=this[t];if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new E(b);var n=this.getNamedItem(e.nodeName);return _(this._ownerElement,this,e,n),n},setNamedItemNS:function(e){var t,n=e.ownerElement;if(n&&n!=this._ownerElement)throw new E(b);return t=this.getNamedItemNS(e.namespaceURI,e.localName),_(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return x(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return x(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}},A.prototype={hasFeature:function(e,t){var n=this._features[e.toLowerCase()];return!(!n||t&&!(t in n))},createDocument:function(e,t,n){var r=new F;if(r.doctype=n,n&&r.appendChild(n),r.implementation=this,r.childNodes=new D,t){var i=r.createElementNS(e,t);r.appendChild(i)}return r},createDocumentType:function(e,t,n){var r=new z;return r.name=e,r.nodeName=e,r.publicId=t,r.systemId=n,r}},I.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return B(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return U(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return K(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==u&&e.nodeType==u?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;if(n)for(var r in n)if(n[r]==e)return r;t=2==t.nodeType?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;if(n&&e in n)return n[e];t=2==t.nodeType?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},n(i,I),n(i,I.prototype),F.prototype={nodeName:"#document",nodeType:d,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==p){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return null==this.documentElement&&1==e.nodeType&&(this.documentElement=e),B(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),U(this,e)},importNode:function(e,t){return J(this,e,t)},getElementById:function(e){var t=null;return O(this.documentElement,(function(n){if(1==n.nodeType&&n.getAttribute("id")==e)return t=n,!0})),t},createElement:function(e){var t=new P;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new D,(t.attributes=new C)._ownerElement=t,t},createDocumentFragment:function(){var e=new X;return e.ownerDocument=this,e.childNodes=new D,e},createTextNode:function(e){var t=new $;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new q;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new j;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new W;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new L;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new Y;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var n=new P,r=t.split(":"),i=n.attributes=new C;return n.childNodes=new D,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,i._ownerElement=n,n},createAttributeNS:function(e,t){var n=new L,r=t.split(":");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,n}},r(F,I),P.prototype={nodeType:o,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=""+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===p?this.insertBefore(e,null):function(e,t){var n=t.parentNode;if(n){var r=e.lastChild;n.removeChild(t),r=e.lastChild}return r=e.lastChild,t.parentNode=e,t.previousSibling=r,t.nextSibling=null,r?r.nextSibling=t:e.firstChild=t,e.lastChild=t,k(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||""},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new y(this,(function(t){var n=[];return O(t,(function(r){r===t||r.nodeType!=o||"*"!==e&&r.tagName!=e||n.push(r)})),n}))},getElementsByTagNameNS:function(e,t){return new y(this,(function(n){var r=[];return O(n,(function(i){i===n||i.nodeType!==o||i.namespaceURI!==e||"*"!==t&&i.localName!=t||r.push(i)})),r}))}},F.prototype.getElementsByTagName=P.prototype.getElementsByTagName,F.prototype.getElementsByTagNameNS=P.prototype.getElementsByTagNameNS,r(P,I),L.prototype.nodeType=a,r(L,I),V.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(v[3])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,n){n=this.data.substring(0,e)+n+this.data.substring(e+t),this.nodeValue=this.data=n,this.length=n.length}},r(V,I),$.prototype={nodeName:"#text",nodeType:u,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},r($,V),q.prototype={nodeName:"#comment",nodeType:h},r(q,V),j.prototype={nodeName:"#cdata-section",nodeType:s},r(j,V),z.prototype.nodeType=m,r(z,I),H.prototype.nodeType=N,r(H,I),G.prototype.nodeType=l,r(G,I),Y.prototype.nodeType=c,r(Y,I),X.prototype.nodeName="#document-fragment",X.prototype.nodeType=p,r(X,I),W.prototype.nodeType=f,r(W,I),Q.prototype.serializeToString=function(e){var t=[];return Z(e,t),t.join("")},I.prototype.toString=function(){return Q.prototype.serializeToString(this)};try{if(Object.defineProperty){function te(e){switch(e.nodeType){case 1:case 11:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(te(e)),e=e.nextSibling;return t.join("");default:return e.nodeValue}}Object.defineProperty(y.prototype,"length",{get:function(){return T(this),this.$$length}}),Object.defineProperty(I.prototype,"textContent",{get:function(){return te(this)},set:function(e){switch(this.nodeType){case 1:case 11:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=value,this.nodeValue=e}}}),ee=function(e,t,n){e["$$"+t]=n}}}catch(ne){}t.DOMImplementation=A},7736:function(e,t){var n=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,r=new RegExp("[\\-\\.0-9"+n.source.slice(1,-1)+"\xb7\u0300-\u036f\\ux203F-\u2040]"),i=new RegExp("^"+n.source+r.source+"*(?::"+n.source+r.source+"*)?$");function o(){}function a(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function u(e,t,n,r,i){for(var o,a=++t,u=0;;){var s=e.charAt(a);switch(s){case"=":if(1===u)o=e.slice(t,a),u=3;else{if(2!==u)throw new Error("attribute equal must after attrName");u=3}break;case"'":case'"':if(3===u){if(t=a+1,!((a=e.indexOf(s,t))>0))throw new Error("attribute value no end '"+s+"' match");c=e.slice(t,a).replace(/&#?\w+;/g,r),n.add(o,c,t-1),u=5}else{if(4!=u)throw new Error('attribute value must after "="');c=e.slice(t,a).replace(/&#?\w+;/g,r),n.add(o,c,t),i.warning('attribute "'+o+'" missed start quot('+s+")!!"),t=a+1,u=5}break;case"/":switch(u){case 0:n.setTagName(e.slice(t,a));case 5:case 6:case 7:u=7,n.closed=!0;case 4:case 1:case 2:break;default:throw new Error("attribute invalid close char('/')")}break;case">":switch(u){case 0:n.setTagName(e.slice(t,a));case 5:case 6:case 7:break;case 4:case 1:"/"===(c=e.slice(t,a)).slice(-1)&&(n.closed=!0,c=c.slice(0,-1));case 2:2===u&&(c=o),4==u?(i.warning('attribute "'+c+'" missed quot(")!!'),n.add(o,c.replace(/&#?\w+;/g,r),t)):(i.warning('attribute "'+c+'" missed value!! "'+c+'" instead!!'),n.add(c,c,t));break;case 3:throw new Error("attribute value missed!!")}return a;case"\x80":s=" ";default:if(s<=" ")switch(u){case 0:n.setTagName(e.slice(t,a)),u=6;break;case 1:o=e.slice(t,a),u=2;break;case 4:var c=e.slice(t,a).replace(/&#?\w+;/g,r);i.warning('attribute "'+c+'" missed quot(")!!'),n.add(o,c,t);case 5:u=6}else switch(u){case 2:i.warning('attribute "'+o+'" missed value!! "'+o+'" instead!!'),n.add(o,o,t),t=a,u=1;break;case 5:i.warning('attribute space is required"'+o+'"!!');case 6:u=1,t=a;break;case 3:u=4,t=a;break;case 7:throw new Error("elements closed character '/' and '>' must be connected to")}}a++}}function s(e,t,n){for(var r=e.tagName,i=null,o=n[n.length-1].currentNSMap,a=e.length;a--;){var u=e[a],s=u.qName,c=u.value;if((m=s.indexOf(":"))>0)var l=u.prefix=s.slice(0,m),h=s.slice(m+1),d="xmlns"===l&&h;else h=s,l=null,d="xmlns"===s&&"";u.localName=h,!1!==d&&(null==i&&(i={},f(o,o={})),o[d]=i[d]=c,u.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(d,c))}for(a=e.length;a--;){(l=(u=e[a]).prefix)&&("xml"===l&&(u.uri="http://www.w3.org/XML/1998/namespace"),"xmlns"!==l&&(u.uri=o[l]))}var m;(m=r.indexOf(":"))>0?(l=e.prefix=r.slice(0,m),h=e.localName=r.slice(m+1)):(l=null,h=e.localName=r);var p=e.uri=o[l||""];if(t.startElement(p,h,r,e),e.closed){if(t.endElement(p,h,r),i)for(l in i)t.endPrefixMapping(l)}else e.currentNSMap=o,e.localNSMap=i,n.push(e)}function c(e,t,n,r,i){if(/^(?:script|textarea)$/i.test(n)){var o=e.indexOf("</"+n+">",t),a=e.substring(t+1,o);if(/[&<]/.test(a))return/^script$/i.test(n)?(i.characters(a,0,a.length),o):(a=a.replace(/&#?\w+;/g,r),i.characters(a,0,a.length),o)}return t+1}function l(e,t,n,r){var i=r[n];return null==i&&(i=r[n]=e.lastIndexOf("</"+n+">")),i<t}function f(e,t){for(var n in e)t[n]=e[n]}function h(e,t,n){if("-"===e.charAt(t+2)){if("-"===e.charAt(t+3)){var r=e.indexOf("--\x3e",t+4);return n.comment(e,t+4,r-t-4),r+3}return-1}if("CDATA["==e.substr(t+3,6)){r=e.indexOf("]]>",t+9);return n.startCDATA(),n.characters(e,t+9,r-t-9),n.endCDATA(),r+3}var i=function(e,t){var n,r=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;i.lastIndex=t,i.exec(e);for(;n=i.exec(e);)if(r.push(n),n[1])return r}(e,t),o=i.length;if(o>1&&/!doctype/i.test(i[0][0])){var a=i[1][0],u=o>3&&/^public$/i.test(i[2][0])&&i[3][0],s=o>4&&i[4][0],c=i[o-1];return n.startDTD(a,u,s),n.endDTD(),c.index+c[0].length}return-1}function d(e,t,n){var r=e.indexOf("?>",t);if(r){var i=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(i){i[0].length;return n.processingInstruction(i[1],i[2]),r+2}return-1}return-1}function m(e){}function p(e,t){return e.__proto__=t,e}o.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),f(t,t={}),function(e,t,n,r,i){function o(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}function f(e){var t=e.slice(1,-1);return t in n?n[t]:"#"===t.charAt(0)?o(parseInt(t.substr(1).replace("x","0x"))):(i.error("entity not found:"+e),e)}function p(t){var n=e.substring(y,t).replace(/&#?\w+;/g,f);b&&N(y),r.characters(n,0,t-y),y=t}function N(t,n){for(;t>=v&&(n=w.exec(e));)g=n.index,v=g+n[0].length,b.lineNumber++;b.columnNumber=t-g+1}var g=0,v=0,w=/.+(?:\r\n?|\n)|.*$/g,b=r.locator,E=[{currentNSMap:t}],D={},y=0;for(;;){switch((O=e.indexOf("<",y))>y&&p(O),e.charAt(O+1)){case"/":var T=e.indexOf(">",O+3),C=e.substring(O+2,T),S=E.pop(),_=S.localNSMap;if(S.tagName!=C&&i.fatalError("end tag name: "+C+" is not match the current start tagName:"+S.tagName),r.endElement(S.uri,S.localName,C),_)for(var x in _)r.endPrefixMapping(x);T++;break;case"?":b&&N(O),T=d(e,O,r);break;case"!":b&&N(O),T=h(e,O,r);break;default:if(O<0)return void(e.substr(y).match(/^\s*$/)||i.error("source code out of document root"));try{b&&N(O);var A=new m,I=(T=u(e,O,A,f,i),A.length);if(I&&b){for(var R=a(b,{}),O=0;O<I;O++){var F=A[O];N(F.offset),F.offset=a(b,{})}a(R,b)}A.closed=A.closed||l(e,T,A.tagName,D),s(A,r,E),"http://www.w3.org/1999/xhtml"!==A.uri||A.closed?T++:T=c(e,T,A.tagName,f,r)}catch(M){i.error("element parse error: "+M),T=-1}}T<0?p(O+1):y=T}}(e,t,n,r,this.errorHandler),r.endDocument()}},m.prototype={setTagName:function(e){if(!i.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},add:function(e,t,n){if(!i.test(e))throw new Error("invalid attribute:"+e);this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getOffset:function(e){return this[e].offset},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},p({},p.prototype)instanceof p||(p=function(e,t){function n(){}for(t in n.prototype=t,n=new n,e)n[t]=e[t];return n}),t.G=o,t.G=o}}]);