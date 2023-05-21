/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/go/go", ["require","require"],(require)=>{
var moduleExports=(()=>{var s=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var a=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var m=n=>s(n,"__esModule",{value:!0});var l=(n,e)=>{for(var o in e)s(n,o,{get:e[o],enumerable:!0})},g=(n,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of a(e))!c.call(n,t)&&(o||t!=="default")&&s(n,t,{get:()=>e[t],enumerable:!(r=i(e,t))||r.enumerable});return n};var p=(n=>(e,o)=>n&&n.get(e)||(o=g(m({}),e,1),n&&n.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var f={};l(f,{conf:()=>u,language:()=>d});var u={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"`",close:"`",notIn:["string"]},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"`",close:"`"},{open:'"',close:'"'},{open:"'",close:"'"}]},d={defaultToken:"",tokenPostfix:".go",keywords:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var","bool","true","false","uint8","uint16","uint32","uint64","int8","int16","int32","int64","float32","float64","complex64","complex128","byte","rune","uint","int","uintptr","string","nil"],operators:["+","-","*","/","%","&","|","^","<<",">>","&^","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=","&^=","&&","||","<-","++","--","==","<",">","=","!","!=","<=",">=",":=","...","(",")","","]","{","}",",",";",".",":"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/\[\[.*\]\]/,"annotation"],[/^\s*#\w+/,"keyword"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\d+[eE]([\-+]?\d+)?/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F]/,"number.hex"],[/0[0-7']*[0-7]/,"number.octal"],[/0[bB][0-1']*[0-1]/,"number.binary"],[/\d[\d']*/,"number"],[/\d/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"],[/`/,"string","@rawstring"],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@doccomment"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],doccomment:[[/[^\/*]+/,"comment.doc"],[/\/\*/,"comment.doc.invalid"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],rawstring:[[/[^\`]/,"string"],[/`/,"string","@pop"]]}};return p(f);})();
return moduleExports;
});
