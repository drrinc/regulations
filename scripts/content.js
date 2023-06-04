
/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.0",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i)return e.textContent;if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=ce.text(t);return n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},R=function(){V()},M=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&z(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function X(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&M(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function U(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function z(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",R),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:X(!1),disabled:X(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:U(function(){return[0]}),last:U(function(e,t){return[t-1]}),eq:U(function(e,t,n){return[n<0?n+t:n]}),even:U(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:U(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:U(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:U(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&z(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&z(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var R=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)R(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},M=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(M,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,X=new B,U=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,z=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:U.test(i)?JSON.parse(i):i)}catch(e){}X.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return X.hasData(e)||_.hasData(e)},data:function(e,t,n){return X.access(e,t,n)},removeData:function(e,t){X.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=X.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){X.set(this,n)}):R(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=X.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){X.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){X.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Re=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Me(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);X.hasData(e)&&(o=X.access(e),a=ce.extend({},o),X.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Re,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[X.expando]&&(n[X.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return R(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Me(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Me(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return R(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),Xe=/^--/,Ue=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},ze=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=Xe.test(t),u=e.style;return(n=n||Ue(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Ue(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=Xe.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return Xe.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):ze(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Ue(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-ze(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return R(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ue(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return R(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return R(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Rt=/%20/g,Mt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},Xt="*/".concat("*"),Ut=C.createElement("a");function zt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Ut.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:zt(Bt),ajaxTransport:zt(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ut.protocol+"//"+Ut.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Mt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Rt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Xt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return R(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return R(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});


var cardsNum_arr = [];
var cardsName_arr = [];
var cardsNum_n_arr = [];
var cardsName_n_arr = [];
var cardsNumEx_arr = [];
var cardsNameEx_arr = [];
var cardsNumEx_n_arr = [];
var cardsNameEx_n_arr = [];
let cidreg = new RegExp(/\<a target\="_blank" href\="\/yugiohdb\/card\_search\.action\?ope\=2\&amp\;cid\=(.+)\&amp/, "g");
let cidREG = new RegExp(/cid\=(.+)\&/, "g");
let cnamereg = new RegExp(/\<img class\="card\_image\_(monster|spell|trap|extra)\_\d+\_1 ui\-draggable ui\-draggable\-handle" alt\=".+" title\="(.+)"/, "g");
let cnameREG = new RegExp(/alt\="(.+)" title/, "g");
const imageset_main_html = $("#deck_image>#main>.image_set").html();
const imageset_extra_html = $("#deck_image>#extra>.image_set").html();




const LITjson = {
	"name": "LIT reg JSON",
	"version": 1.0,
	"trigger": 3,
	"fbArch": [
		{
			"name": "데스피아",
			"list": [
				16194,
				16195,
				17183,
				16543,
				16497,
				16243,
				16193,
				16242,
				18474,
				16196
			]
		},
		{
			"name": "마돌체",
			"list": [
				10557,
				10201,
				10583,
				10296,
				10247,
				10153,
				10248,
				10249,
				10152,
				10283,
				10202,
				10151,
				15062,
				10156,
				15050,
				10200,
				10154,
				14100,
				10155,
				11057,
				10513,
				10191
			]
		},
		{
			"name": "파괴검",
			"list": [
				12127,
				12474,
				12126,
				12128,
				12167,
				12180,
				12130,
				12129,
				12989,
				12168
			]
		},
		{
			"name": "미계역",
			"list": [
				14072,
				14067,
				14070,
				14351,
				14533,
				14071,
				14798,
				13978,
				14535,
				13983,
				14534,
				13979,
				13982,
				14068,
				13981,
				14069,
				13980
			]
		},
		{
			"name": "섀도르",
			"list": [
				12812,
				11396,
				14967,
				15310,
				11698,
				11281,
				11234,
				15850,
				14964,
				11235,
				11362,
				11236,
				11232,
				14965,
				11282,
				11697,
				11233,
				15849,
				11268,
				11269,
				14966,
				11579
			]
		},
		{
			"name": "섬도",
			"list": [
				17034,
				13678,
				13676,
				14829,
				18449,
				13671,
				13675,
				13948,
				13670,
				17033,
				13673,
				13680,
				18443,
				14871,
				13677,
				18444,
				13679,
				13674,
				13672,
				17553
			]
		},
		{
			"name": "소환사 알레이스터",
			"list": [
				12852,
				12851,
				12843
			]
		},
		{
			"name": "소환수",
			"list": [
				12853,
				12854,
				12852
			]
		},
		{
			"name": "시계신",
			"list": [
				13158,
				9708,
				13815,
				13818,
				13816,
				13819,
				13822,
				13157,
				13820,
				13821,
				9698,
				13159,
				13160,
				13817,
				13161
			]
		},
		{
			"name": "십이수",
			"list": [
				12751,
				12793,
				12752,
				12750,
				12794,
				12806,
				12749,
				12941,
				12985,
				12753
			]
		},
		{
			"name": "썬더 드래곤",
			"list": [
				15692,
				15011,
				13959,
				13960,
				13908,
				4431,
				15695,
				13947,
				15758,
				15694,
				13906,
				13909,
				15693,
				13905,
				13907
			]
		},
		{
			"name": "얼터가이스트",
			"list": [
				13569,
				14318,
				13230,
				13463,
				13624,
				14791,
				13228,
				13286,
				14971,
				14255,
				13288,
				13287,
				13229,
				13231,
				13441,
				14972
			]
		},
		{
			"name": "Evil★Twin",
			"list": [
				15632,
				15634,
				15633,
				15628
			]
		},
		{
			"name": "세리온즈",
			"list": [
				17166,
				17164,
				17181,
				17115,
				17182,
				17165,
				17411,
				17116,
				17117,
				17118,
				17410,
				17459,
				17119
			]
		},
		{
			"name": "태엽",
			"list": [
				9631,
				9630,
				10019,
				11595,
				9742,
				9634,
				9897,
				9633,
				9741,
				9670,
				9744,
				9929,
				9740,
				9790,
				9743,
				9946,
				9866,
				9684,
				9773,
				9632,
				9898,
				9671
			]
		},
		{
			"name": "엔디미온",
			"list": [
				15615,
				14440,
				8132,
				14441,
				14444,
				8465,
				14442,
				8135,
				14545,
				14439,
				14443
			]
		},
		{
			"name": "오르페골",
			"list": [
				13946,
				14324,
				13958,
				13901,
				13944,
				13957,
				13902,
				13903,
				13904,
				13945,
				14153,
				15010,
				14098
			]
		},
		{
			"name": "인페르노이드",
			"list": [
				11533,
				11707,
				11535,
				11578,
				11537,
				11705,
				11534,
				11539,
				11538,
				11748,
				12811,
				11736,
				11591,
				11823,
				11592,
				11577,
				15051,
				11847,
				11706,
				11536
			]
		},
		{
			"name": "나츄르",
			"list": [
				8245,
				8722,
				8100,
				7945,
				9747,
				8102,
				8958,
				8401,
				8983,
				17776,
				9107,
				7947,
				9204,
				8400,
				8569,
				8242,
				7944,
				9109,
				8399,
				8723,
				8982,
				8721,
				8243,
				17819,
				9130,
				8244,
				9108,
				11408,
				9440,
				8959,
				9152,
				17777,
				8960,
				9129,
				7946,
				8101,
				8720,
				8568,
				8567,
				8103
			]
		},
		{
			"name": "전뇌계",
			"list": [
				15585,
				15492,
				15551,
				15534,
				15489,
				15766,
				15234,
				15535,
				15490,
				15491
			]
		},
		{
			"name": "트라이브리게이드",
			"list": [
				15701,
				15549,
				15486,
				15532,
				17810,
				17062,
				15550,
				18516,
				15485,
				15487,
				15531,
				15747
			]
		},
		{
			"name": "프랭키즈",
			"list": [
				14099,
				14021,
				14032,
				14030,
				14022,
				14031,
				14029,
				14020
			]
		},
		{
			"name": "환황룡",
			"list": [
				12986,
				12973,
				12988,
				12971,
				12970,
				12942,
				12987,
				12972
			]
		},
		{
			"name": "묘지기",
			"list": [
				10917,
				8639,
				5513,
				8638,
				5510,
				13955,
				13942,
				5533,
				5515,
				5512,
				10919,
				4893,
				5517,
				10918,
				17604,
				5524,
				7106,
				13900,
				5516,
				10962,
				5548,
				10988,
				5509,
				5511,
				8761,
				8667,
				10920,
				9282,
				10952,
				5514,
				13899,
				17727,
				17607
			]
		},
		{
			"name": "왕가의 골짜기-네크로밸리",
			"list": [
				5520,
				5523,
				13900,
				13955,
				10962,
				10952,
				7106,
				13899,
				5548,
				10988,
				5533,
				8667,
				5515,
				5517,
				10919,
				5540,
				8761,
				10918
			]
		},
		{
			"name": "후완다리즈",
			"list": [
				16500,
				16561,
				16865,
				16560,
				16545,
				16502,
				16501,
				16503,
				16544,
				16498,
				16499
			]
		},
		{
			"name": "충혹마",
			"list": [
				10637,
				18308,
				15147,
				10635,
				15977,
				11054,
				13069,
				18309,
				10636,
				18315,
				18310
			]
		},
		{
			"name": "이그니스터",
			"list": [
				16436,
				16435,
				14810,
				14860,
				14815,
				14814,
				14878,
				15135,
				14816,
				15042,
				14813,
				14861,
				15972,
				14859,
				16021,
				14843,
				16022,
				14811,
				14812,
				15059,
				16037,
				14863,
				15134,
				14862
			]
		},
		{
			"name": "Ai",
			"list": [
				9274,
				13702,
				17262,
				16436,
				7998,
				16435,
				14810,
				14860,
				8002,
				14815,
				18001,
				7999,
				14814,
				14878,
				14816,
				15042,
				14861,
				14859,
				16021,
				8081,
				14843,
				8082,
				16022,
				10676,
				17191,
				15059,
				14812,
				8066,
				16037,
				14863,
				14862
			]
		},
		{
			"name": "엘드리치",
			"list": [
				15127,
				15126,
				15129,
				15123,
				15131,
				15128,
				15130,
				15125,
				15124,
				15132
			]
		},
		{
			"name": "스케어클로",
			"list": [
				17186,
				17461,
				18205,
				18152,
				17814,
				17170,
				17830,
				17185,
				17122,
				17124,
				17121,
				17169,
				17123
			]
		},
		{
			"name": "티아라멘츠",
			"list": [
				17813,
				17414,
				17462,
				17812,
				17473,
				17811,
				18153,
				17474,
				18206,
				17415,
				17417,
				17475,
				17416
			]
		},
		{
			"name": "크샤트리라",
			"list": [
				18151,
				18203,
				18152,
				18204,
				17815,
				18202,
				17770,
				17768,
				18153,
				18518,
				17831,
				17769,
				18220
			]
		},
		{
			"name": "다이놀피어",
			"list": [
				16875,
				16876,
				16815,
				16873,
				16878,
				16814,
				16874,
				17188,
				18539,
				16877
			]
		},
		{
			"name": "라뷰린스",
			"list": [
				17366,
				17363,
				17369,
				17364,
				17371,
				17361,
				17362,
				17785,
				17360,
				17367,
				17368,
				18222,
				17370,
				17365
			]
		},
		{
			"name": "루닉",
			"list": [
				17373,
				17376,
				17380,
				17379,
				17377,
				17378,
				17375,
				17382,
				17381,
				17374
			]
		},
		{
			"name": "결계상",
			"list": [
				6883,
				6885,
				6887,
				6886,
				6884,
				6882
			]
		},
		{
			"name": "마스크드 히어로",
			"list": [
				9271,
				9068,
				9066
			]
		},
		{
			"name": "사이버 다크",
			"list": [
				13183,
				6831,
				16301,
				16299,
				13180,
				13181,
				6832,
				6830,
				16296,
				16298,
				7217
			]
		},
		{
			"name": "드래곤메이드",
			"list": [
				14760,
				14873,
				14766,
				14761,
				14769,
				14759,
				14763,
				14764,
				15311,
				14768,
				14757,
				14758,
				15012,
				14762,
				14767
			]
		},
		{
			"name": "무한기동",
			"list": [
				14391,
				18485,
				14395,
				14392,
				15052,
				14402,
				14394,
				14393,
				14649,
				14396
			]
		},
		{
			"name": "머시너즈",
			"list": [
				15182,
				6303,
				15094,
				6304,
				15093,
				9434,
				16514,
				15091,
				8696,
				8693,
				15089,
				6308,
				15718,
				11368,
				6307,
				8692,
				15095,
				15092,
				6302,
				15260,
				8694,
				15090
			]
		},
		{
			"name": "DD",
			"list": [
				16880,
				12982,
				11954,
				12230,
				12226,
				11447,
				11769,
				12228,
				11616,
				12410,
				14448,
				12929,
				16861,
				11440,
				11442,
				11446,
				14739,
				11795,
				13121,
				11329,
				18440,
				11441,
				11451,
				11448,
				12455,
				12013,
				12231,
				12867,
				11460,
				12225,
				16818,
				12227,
				14708,
				11955,
				11439,
				11458,
				11330,
				11328,
				13304,
				13056,
				12012,
				12409,
				11443,
				14961,
				11450,
				12229,
				11956,
				15181
			]
		},
		{
			"name": "샐러맨그레이트",
			"list": [
				14080,
				14240,
				14501,
				14253,
				14238,
				15043,
				14989,
				14242,
				13938,
				14302,
				13940,
				14244,
				13920,
				14679,
				14134,
				14241,
				13892,
				14245,
				14239,
				14081,
				14243,
				13891,
				13889,
				14247,
				14246,
				13890,
				14678,
				14502,
				14543,
				13939,
				13954,
				14082
			]
		},
		{
			"name": "바렛",
			"list": [
				13377,
				14084,
				13786,
				14083,
				16538,
				13439,
				16488,
				13225,
				14615,
				14618,
				16522,
				13226,
				14614,
				14616,
				13271,
				16487,
				13424,
				14620,
				13272,
				13517,
				13769,
				14617,
				13378,
				13227
			]
		},
		{
			"name": "드라이트론",
			"list": [
				15646,
				15637,
				15641,
				15638,
				15643,
				15642,
				15636,
				15645,
				16552,
				15647,
				15639,
				15635,
				15644,
				15640
			]
		},
		{
			"name": "서브테러",
			"list": [
				14154,
				13459,
				12821,
				12684,
				13023,
				12820,
				12687,
				12876,
				13024,
				12874,
				12823,
				12686,
				12873,
				12685,
				13021,
				12822,
				13022,
				12875
			]
		},
		{
			"name": "드래그마",
			"list": [
				15304,
				15240,
				16014,
				15286,
				18176,
				15242,
				18200,
				18474,
				15243,
				16859,
				15761,
				17460,
				15993,
				15488,
				15285,
				16840,
				15241,
				17184,
				15239,
				15305,
				15533,
				15244
			]
		},
		{
			"name": "엑소시스터",
			"list": [
				16744,
				16745,
				17427,
				16738,
				16739,
				16736,
				16747,
				17478,
				16746,
				16737
			]
		},
		{
			"name": "참기",
			"list": [
				15262,
				14748,
				14744,
				14745,
				14755,
				14749,
				14753,
				14746,
				14754,
				14756,
				14747,
				17430
			]
		},
		{
			"name": "SPYRAL",
			"list": [
				12827,
				13027,
				12690,
				13025,
				12688,
				13026,
				12689,
				12691,
				12825,
				12879,
				12880,
				12877,
				12824,
				12826,
				13028,
				12878
			]
		},
		{
			"name": "밸리언츠",
			"list": [
				17350,
				17357,
				17358,
				17359,
				17351,
				17349,
				17352,
				17348,
				17354,
				17347,
				17353,
				17823
			]
		},
		{
			"name": "아다마시아",
			"list": [
				15097,
				15295,
				15098,
				15099,
				15101,
				15109,
				15108,
				15102,
				15106,
				15100,
				15107
			]
		},
		{
			"name": "용사 토큰",
			"list": [
				17822,
				16753,
				16755,
				16759,
				17784,
				16750,
				16754,
				16757,
				16756,
				17135,
				16758,
				16752,
				16748,
				16749,
				16751
			]
		},
		{
			"name": "인페르니티",
			"list": [
				8303,
				8274,
				8847,
				8272,
				8789,
				8790,
				15496,
				8822,
				11923,
				15495,
				9035,
				15554,
				15539,
				9036,
				8273,
				17252,
				8443,
				8275,
				15887,
				9862,
				9859,
				8823,
				8788,
				8844,
				8843,
				8791,
				15886,
				8508,
				15884,
				8846,
				9710,
				15885
			]
		},
		{
			"name": "전황",
			"list": [
				14820,
				15007,
				14864,
				15765,
				15006,
				14822,
				14817,
				14879,
				17175,
				17136,
				14865,
				14819,
				15009,
				15716,
				14821,
				15008,
				14818,
				15055,
				15294
			]
		},
		{
			"name": "제너레이드",
			"list": [
				15014,
				14770,
				14780,
				14781,
				14775,
				14772,
				14777,
				18165,
				14773,
				14831,
				14774,
				14778,
				14771,
				15013,
				14782,
				14779
			]
		},
		{
			"name": "카디언",
			"list": [
				12792,
				12558,
				12554,
				12602,
				12555,
				15387,
				12560,
				12604,
				12645,
				15388,
				12660,
				12559,
				12747,
				12646,
				12563,
				12603,
				12561,
				12556,
				12557
			]
		},
		{
			"name": "SR",
			"list": [
				12741,
				12278,
				12922,
				12921,
				16382,
				15180,
				16429,
				12279,
				12920,
				12047,
				12829,
				12048,
				12740,
				16377,
				12049,
				15179,
				12053,
				16376,
				14340,
				14339,
				16381,
				12054,
				12052,
				12051,
				12883,
				12050
			]
		},
		{
			"name": "세피라",
			"list": [
				11702,
				12944,
				11735,
				11696,
				11746,
				11701,
				11695,
				12975,
				11700,
				12991,
				11704,
				11703,
				11699,
				11698,
				11734,
				11747,
				11697
			]
		},
		{
			"name": "스크랩",
			"list": [
				9453,
				8952,
				9101,
				8954,
				9321,
				9320,
				9126,
				8953,
				9102,
				9281,
				9001,
				8978,
				15982,
				8979,
				11623,
				9150,
				8695,
				8950,
				8951,
				9438,
				9503,
				8980,
				11095,
				9208
			]
		},
		{
			"name": "봄화정",
			"list": [
				17476,
				17421,
				17781,
				17477,
				17420,
				17418,
				17821,
				17782,
				17463,
				17419
			]
		},
		{
			"name": "현세와 명계의 역전",
			"list": [
				17604,
				5360,
				17606,
				17605,
				17608,
				17603,
				17609,
				17607
			]
		},
		{
			"name": "언데드 월드",
			"list": [
				8373,
				14057,
				7857,
				14058
			]
		},
		{
			"name": "덱 파괴 바이러스",
			"list": [
				4921,
				7153,
				13687,
				12813,
				6284,
				4667
			]
		},
		{
			"name": "BF",
			"list": [
				9459,
				9092,
				8778,
				9480,
				9461,
				8821,
				17759,
				9244,
				9094,
				8165,
				9462,
				12412,
				8012,
				11962,
				9242,
				17826,
				9298,
				13855,
				8841,
				17761,
				9356,
				9460,
				17757,
				9145,
				9093,
				11174,
				8777,
				8220,
				12411,
				8203,
				8162,
				9142,
				8163,
				13856,
				13854,
				8011,
				9299,
				17758,
				8013,
				11175,
				13853,
				11172,
				11173,
				8779,
				12289,
				8840,
				8043,
				9245,
				8164,
				8202,
				8222,
				8839,
				8297,
				9243,
				17760,
				8295,
				8820,
				8296,
				17807,
				12122,
				9300,
				11176,
				10303,
				9246,
				9479
			]
		},
		{
			"name": "블랙 페더",
			"list": [
				9459,
				9092,
				8778,
				9480,
				9461,
				8821,
				17759,
				9462,
				8165,
				8012,
				12412,
				17827,
				11962,
				13855,
				17826,
				9298,
				8841,
				17761,
				9356,
				9460,
				17757,
				9145,
				9093,
				8220,
				12411,
				8203,
				8162,
				9142,
				8163,
				13856,
				13854,
				8011,
				9299,
				17758,
				8013,
				11175,
				13853,
				11172,
				11173,
				8779,
				12289,
				8043,
				8840,
				9245,
				8164,
				8202,
				8222,
				8839,
				9243,
				17760,
				8820,
				8296,
				17807,
				12122,
				11176,
				10303,
				9246,
				9479
			]
		},
		{
			"name": "고티스",
			"list": [
			]
		},
		{
			"name": "마술사",
			"list": [
				12912,
				14224,
				11940,
				8023,
				15575,
				12915,
				12909,
				5650,
				12913,
				11933,
				12408,
				12109,
				12565,
				12910,
				11784,
				12110,
				12911,
				12964,
				11935,
				9655,
				13465,
				12855,
				12908,
				6500,
				5907,
				6250,
				4434,
				4022,
				5649,
				11936,
				4879,
				11980,
				12965,
				5651,
				11939,
				14925,
				11937,
				5880,
				11788,
				11787,
				11135,
				11134,
				4778,
				12643,
				14927,
				11934,
				12898,
				12736,
				11680,
				11938,
				12963,
				13130,
				5230,
				11316
			]
		},
		{
			"name": "육화",
			"list": [
				15112,
				17429,
				15110,
				15114,
				15116,
				15115,
				15120,
				15121,
				15119,
				15122,
				15111,
				17468,
				15113
			]
		},
		{
			"name": "천후",
			"list": [
				17174,
				13332,
				13330,
				13333,
				13337,
				13336,
				13338,
				13329,
				13340,
				14323,
				13328,
				13339,
				13331,
				13335
			]
		},
		{
			"name": "ABC",
			"list": [
			]
		},
		{
			"name": "팬텀 나이츠",
			"list": [
				12201,
				12268,
				15480,
				12198,
				12206,
				12205,
				12204,
				12207,
				12267,
				15481,
				12980,
				15530,
				15548,
				12200,
				12644,
				12856,
				15482,
				12981,
				11404,
				15547,
				12202,
				12269,
				12199
			]
		},
		{
			"name": "싱크론",
			"list": [
				7870,
				16388,
				14084,
				9473,
				13129,
				8006,
				16413,
				14079,
				7841,
				14918,
				10309,
				8439,
				7700,
				9082,
				7687,
				9198,
				14917,
				16192,
				17250,
				9236,
				8862,
				9122,
				16385,
				7758,
				11625,
				8615,
				10310,
				11620,
				14916,
				18435,
				11304,
				11621,
				8780,
				16191,
				8872,
				11622
			]
		},
		{
			"name": "낙인",
			"list": [
				16195,
				16197,
				16858,
				17063,
				16541,
				16194,
				17828,
				17765,
				16243,
				17168,
				16244,
				16242,
				18201,
				17065,
				18534,
				17068,
				17183,
				17460,
				17066,
				18533,
				16543,
				16016,
				17472,
				18218,
				16029,
				17067,
				17808,
				17763,
				16030
			]
		},
		{
			"name": "알버스의 낙윤",
			"list": [
				16197,
				16493,
				17063,
				16541,
				15286,
				17767,
				17168,
				16244,
				15759,
				15245,
				18201,
				15760,
				17065,
				17068,
				18533,
				17066,
				16543,
				16016,
				17472,
				17413,
				18517,
				16029,
				17067,
				17062,
				15305,
				17809,
				17064,
				18474,
				16030,
				18471
			]
		},
		{
			"name": "LL",
			"list": [
				12927,
				8171,
				16395,
				16390,
				12926,
				8308,
				16394,
				16430,
				12928,
				8307,
				16391,
				16396
			]
		},
		{
			"name": "마린세스",
			"list": [
				17054,
				14516,
				14452,
				14694,
				17058,
				14992,
				17059,
				14451,
				14631,
				14629,
				14630,
				14788,
				14680,
				14695,
				14517,
				17053,
				17057
			]
		},
		{
			"name": "상검",
			"list": [
				18515,
				16489,
				16558,
				16540,
				16559,
				16539,
				18150,
				16490,
				16492,
				16872,
				16493,
				16198,
				16491,
				17064
			]
		},
		{
			"name": "P.U.N.K.",
			"list": [
				16727,
				17467,
				16733,
				16725,
				16728,
				17134,
				16726,
				16735,
				16724,
				16729,
				16732,
				16734
			]
		},
		{
			"name": "스프라이트",
			"list": [
				17408,
				17406,
				17458,
				17405,
				17829,
				17409,
				17407,
				17457,
				17459
			]
		}
	],
	"arch": [
		{
			"name": "블랙 매지션",
			"list": [
				12357,
				12898,
				17386,
				12579,
				12431,
				5649,
				17031,
				12457,
				11670,
				5230,
				16808,
				12470,
				16839,
				4766,
				15578,
				5907,
				14907,
				5223,
				14374,
				5166,
				12418,
				16654,
				5681,
				4830,
				4041,
				5756,
				4727,
				14366,
				14908,
				11672,
				14368,
				11121,
				12458,
				6057,
				12416,
				12491,
				6530,
				12817,
				5758,
				14909,
				5757,
				12417,
				16806,
				11669,
				12456,
				14906,
				10326,
				4728,
				14213,
				5450,
				15579
			],
			"p": [
				{
					"num": 16839,
					"reg": 1,
					"org": 0,
					"name": "일루전 오브 카오스"
				}
			]
		},
		{
			"name": "푸른 눈",
			"list": [
				12587,
				17386,
				12291,
				12292,
				17031,
				16653,
				15578,
				12251,
				7850,
				13843,
				8864,
				12293,
				16856,
				12290,
				5979,
				4007,
				4773,
				16810,
				10588,
				12487,
				12253,
				12491,
				13844,
				16809,
				6298,
				6082,
				12570,
				12332,
				12294,
				13842,
				13845,
				5600,
				14953,
				12488,
				13846,
				16855,
				15579
			],
			"p": [
				{
					"num": 12324,
					"reg": 1,
					"org": 0,
					"name": "푸른 눈의 정령룡"
				},
				{
					"num": 16809,
					"reg": 1,
					"org": 0,
					"name": "푸른 눈의 제트 드래곤"
				}
			]
		},
		{
			"name": "붉은 눈",
			"list": [
				7854,
				5309,
				13169,
				11844,
				8892,
				7982,
				13171,
				4088,
				13168,
				11843,
				12650,
				11896,
				17388,
				4748,
				11899,
				11897,
				11805,
				12618,
				6109,
				11856,
				11804,
				6292,
				11929,
				11898,
				14369,
				17243,
				6134,
				11894,
				11807,
				7557,
				11895,
				12308,
				11806
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "위저 보드",
			"list": [
				5271,
				14584,
				5274,
				12572,
				5273,
				14585,
				5224,
				5272
			],
			"p": [
				{
					"num": 12572,
					"reg": 2,
					"org": 0,
					"name": "암흑 성역"
				}
			]
		},
		{
			"name": "방계",
			"list": [
				12525,
				14378,
				12483,
				14381,
				12526,
				12517,
				12519,
				12524,
				12515,
				12528,
				12516,
				12518,
				12520,
				12522,
				12521,
				12527,
				14382
			],
			"p": [
				{
					"num": 5530,
					"reg": 3,
					"org": 1,
					"name": "명추리"
				}
			]
		},
		{
			"name": "엘리멘틀 히어로, 네오스",
			"list": [
				8543,
				17455,
				6495,
				6478,
				6571,
				11419,
				6496,
				6728,
				6674,
				7161,
				17453,
				6733,
				7160,
				7553,
				14217,
				6356,
				6576,
				6538,
				6653,
				17471,
				6393,
				17626,
				17403,
				14912,
				17456,
				6672,
				6584,
				6678,
				6539,
				6676,
				7637,
				7942,
				6491,
				6993,
				6779,
				7005,
				7170,
				8537,
				18433,
				13976,
				6312,
				7172,
				6432,
				7255,
				7805,
				6536,
				6943,
				7105,
				6409,
				7058,
				6399,
				12902,
				7187,
				6527,
				13638,
				7155,
				14085,
				6477,
				7004,
				7491,
				6408,
				17404,
				7157,
				6764,
				7447,
				14148,
				6391,
				6942,
				11308,
				6310,
				6673,
				8126,
				7209,
				6927,
				6566,
				6863,
				10213,
				7163,
				6922,
				6775,
				6865,
				12901,
				17627,
				6313,
				7618,
				6675,
				17454,
				6785,
				7173,
				7024,
				6866,
				6784,
				14137,
				7195,
				6537,
				6311,
				14911,
				7156
			],
			"p": [
				{
					"num": 17454,
					"reg": 3,
					"org": 0,
					"name": "인스턴트 콘택트"
				},
				{
					"num": 14112,
					"reg": 1,
					"org": 0,
					"name": "엘리멘틀 히어로 브레이브 네오스"
				}
			]
		},
		{
			"name": "데스티니 히어로",
			"list": [
				6952,
				12706,
				6680,
				14319,
				7639,
				6658,
				6756,
				7621,
				16405,
				6755,
				13153,
				6950,
				6661,
				6659,
				12703,
				7095,
				6758,
				14304,
				6761,
				6757,
				6660,
				14259,
				16504,
				6753,
				6763,
				7577,
				6678,
				6762,
				12709,
				16562,
				6754,
				6951,
				12708,
				12704,
				6949,
				6668,
				6679,
				7417,
				6814,
				16406,
				6752,
				7096,
				12707,
				7416,
				12702
			],
			"p": [
				{
					"num": 6949,
					"reg": 3,
					"org": 0,
					"name": "데스티니 히어로 디아볼릭 가이"
				}
			]
		},
		{
			"name": "비전 히어로",
			"list": [
				9055,
				9059,
				9063,
				9074,
				9229,
				9230,
				9071,
				9190,
				9075,
				9228
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "사이버 엔젤",
			"list": [
				6848,
				12626,
				14171,
				14170,
				14172,
				6845,
				14174,
				6846,
				12790,
				14173,
				6847,
				6850,
				12771
			],
			"p": [
				{
					"num": 11384,
					"reg": 1,
					"org": 0,
					"name": "아크 디클레어러"
				},
				{
					"num": 15083,
					"reg": 2,
					"org": 0,
					"name": "디클레어러 디바이너"
				},
				{
					"num": 8492,
					"reg": 3,
					"org": 1,
					"name": "의식의 준비"
				}
			]
		},
		{
			"name": "방해꾼",
			"list": [
				8264,
				5839,
				13477,
				13478,
				13479,
				5811,
				8265,
				8266,
				5812,
				5761,
				6470,
				6469,
				15727,
				13296,
				5738
			],
			"p": [
				{
					"num": 6126,
					"reg": 1,
					"org": 0,
					"name": "방해꾼 킹"
				}
			]
		},
		{
			"name": "사이버 드래곤",
			"list": [
				16295,
				7468,
				13850,
				16301,
				13423,
				6581,
				10868,
				6577,
				10867,
				13723,
				9041,
				6569,
				10866,
				13770,
				10869,
				13787,
				14047,
				8646,
				6568,
				6390,
				13849,
				8428,
				16296,
				7412,
				16557,
				13851,
				16299,
				7217,
				6588,
				11827,
				7556,
				13722
			],
			"p": [
				{
					"num": 11765,
					"reg": 1,
					"org": 0,
					"name": "사이버 드래곤 인피니티"
				},
				{
					"num": 11764,
					"reg": 3,
					"org": 1,
					"name": "키메라테크 램페이지 드래곤"
				},
				{
					"num": 7403,
					"reg": 3,
					"org": 1,
					"name": "키메라테크 포트리스 드래곤"
				},
				{
					"num": 6734,
					"reg": 3,
					"org": 1,
					"name": "키메라테크 오버 드래곤"
				},
				{
					"num": 13358,
					"reg": 3,
					"org": 1,
					"name": "키메라테크 메가프리트 드래곤"
				}
			]
		},
		{
			"name": "환마",
			"list": [
				12852,
				15142,
				15139,
				15138,
				15144,
				15137,
				6565,
				12903,
				12843,
				15136,
				15141,
				15143,
				15140,
				6575,
				12904
			],
			"p": [
				{
					"num": 15143,
					"reg": 1,
					"org": 0,
					"name": "각성의 삼환마"
				}
			]
		},
		{
			"name": "정크, 싱크론",
			"list": [
				18435,
				11623,
				9013,
				12256,
				8668,
				7758,
				11621,
				9122,
				11622,
				7870,
				11626,
				14916,
				11781,
				10309,
				11304,
				12255,
				14079,
				9472,
				14918,
				9236,
				8862,
				9215,
				17250,
				8780,
				7841,
				8872,
				7700,
				8735,
				10310,
				14084,
				8615,
				7741,
				16385,
				8439,
				11620,
				9198,
				9082,
				10454,
				8204,
				16192,
				11625,
				16413,
				8606,
				16388,
				16191,
				9473,
				15314,
				13129,
				7687,
				11641,
				14917,
				8006
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "레드 데몬, 레조네이터",
			"list": [
				15048,
				12062,
				9516,
				12061,
				9478,
				8216,
				12064,
				12272,
				12066,
				12469,
				8007,
				12063,
				9090,
				9477,
				9141,
				9518,
				17251,
				7708,
				9347,
				12930,
				9517,
				12413,
				9534,
				9297,
				12414,
				9519,
				15003,
				8786
			],
			"p": [
				{
					"num": 14957,
					"reg": 1,
					"org": 0,
					"name": "스카레드 슈퍼노바 드래곤"
				},
				{
					"num": 12078,
					"reg": 1,
					"org": 0,
					"name": "염마룡 레드 데몬 어비스"
				}
			]
		},
		{
			"name": "로즈 드래곤",
			"list": [
				15970,
				16020,
				11482,
				14179,
				9448,
				14177,
				14192,
				14978,
				8199,
				15971
			],
			"p": [
				{
					"num": 7904,
					"reg": 3,
					"org": 0,
					"name": "블랙 가든"
				}
			]
		},
		{
			"name": "디포머",
			"list": [
				17596,
				7880,
				17598,
				7882,
				8850,
				8044,
				17601,
				7879,
				8166,
				7905,
				8067,
				8169,
				17597,
				7881,
				7878,
				11550,
				8015,
				8205,
				8068,
				7926,
				7874,
				7907,
				8045,
				8206,
				8168,
				7877,
				7908,
				8224,
				8204,
				7927,
				17635,
				17636,
				8016,
				9535,
				7906
			],
			"p": [
				{
					"num": 17600,
					"reg": 1,
					"org": 0,
					"name": "파워 툴 브레이버 드래곤"
				}
			]
		},
		{
			"name": "극신",
			"list": [
				9358,
				16879,
				9357,
				9457,
				16860,
				14511,
				11465,
				11466,
				9336,
				9361,
				16817,
				9337,
				9338,
				14065,
				9363
			],
			"p": [
				{
					"num": 16879,
					"reg": 1,
					"org": 0,
					"name": "극성보 스발린"
				}
			]
		},
		{
			"name": "TG",
			"list": [
				9489,
				9490,
				14086,
				9539,
				14088,
				9491,
				9541,
				14262,
				14087,
				9488,
				14560,
				14562,
				9524,
				9540,
				9487,
				9492,
				14561,
				9525,
				14559
			],
			"p": [
				{
					"num": 9554,
					"reg": 1,
					"org": 0,
					"name": "TG 하이퍼 라이브러리언"
				},
				{
					"num": 12763,
					"reg": 3,
					"org": 0,
					"name": "환창의 미세라사우루스"
				},
				{
					"num": 13500,
					"reg": 1,
					"org": 0,
					"name": "성기사의 추상 이졸데"
				}
			]
		},
		{
			"name": "호프, 유토피아",
			"list": [
				10978,
				10844,
				11030,
				16028,
				16422,
				11298,
				10365,
				10605,
				10571,
				14222,
				13003,
				7283,
				12266,
				11418,
				10957,
				13004,
				10608,
				15964,
				10981,
				10364,
				16011,
				12716,
				11085,
				10456,
				11943,
				9879,
				7830,
				11194,
				15962,
				16013,
				15963,
				16469,
				14924,
				10366,
				10133,
				10946,
				7287,
				16473,
				16420,
				16467,
				10888,
				16419
			],
			"p": [
				{
					"num": 14220,
					"reg": 3,
					"org": 0,
					"name": "No.39 유토피아 더블"
				}
			]
		},
		{
			"name": "샤크",
			"list": [
				10852,
				13563,
				7852,
				10019,
				10371,
				9880,
				9321,
				10386,
				10488,
				10849,
				15005,
				10492,
				11034,
				13677,
				17039,
				10368,
				10491,
				15004,
				10031,
				9727,
				10851,
				7336,
				11035,
				8599,
				14976,
				17641,
				8319,
				17040,
				10369,
				14977
			],
			"p": [
				{
					"num": 16424,
					"reg": 1,
					"org": 0,
					"name": "No.4 맹독자포 스텔스 크라겐"
				},
				{
					"num": 17041,
					"reg": 1,
					"org": 0,
					"name": "네필 어사일럼 헤트 나이트"
				},
				{
					"num": 17042,
					"reg": 1,
					"org": 0,
					"name": "CX－네필 어사일럼 카오스 나이트"
				},
				{
					"num": 17039,
					"reg": 2,
					"org": 0,
					"name": "어비스 샤크"
				}
			]
		},
		{
			"name": "갤럭시, 포톤, 사이퍼, 타키온, 스페이스 드래곤",
			"list": [
				9729,
				16434,
				18147,
				9885,
				9936,
				10343,
				9884,
				10730,
				10379,
				9883,
				11116,
				9971,
				11737,
				13859,
				9924,
				13860,
				13861,
				14986,
				9768,
				11926,
				9882,
				10342,
				10931,
				9966,
				12551,
				11032,
				10186,
				6569,
				11086,
				13524,
				11099,
				18146,
				10812,
				11113,
				10344,
				13552,
				12601,
				16433,
				10334,
				18196,
				9864,
				12659,
				9770,
				10335,
				9769,
				6577,
				10134,
				12658,
				12746,
				9972,
				13858,
				9881,
				13956,
				18216,
				13897,
				11031,
				5034,
				13898,
				10337,
				14981,
				10339,
				18148,
				14959,
				14700,
				9733,
				12791,
				11193,
				10020,
				10948,
				12600,
				11115,
				10333,
				11114,
				10336,
				12804,
				10338,
				16432,
				18197,
				10893,
				13943,
				18437
			],
			"p": [
				{
					"num": 12260,
					"reg": 1,
					"org": 0,
					"name": "No.38 희망괴룡 타이타닉 갤럭시"
				},
				{
					"num": 13826,
					"reg": 1,
					"org": 0,
					"name": "No.90 갤럭시아이즈 포톤 로드"
				}
			]
		},
		{
			"name": "히로익",
			"list": [
				10697,
				10290,
				11291,
				10183,
				10696,
				10135,
				10198,
				10138,
				10137,
				17172,
				17127,
				11290,
				17642,
				17128,
				10291
			],
			"p": []
		},
		{
			"name": "EM, 오드아이즈, 패왕",
			"list": [
				13127,
				11741,
				11960,
				17109,
				11524,
				12915,
				11959,
				12593,
				9562,
				12407,
				11677,
				14927,
				12739,
				12274,
				4091,
				11789,
				11587,
				11215,
				11679,
				11802,
				12371,
				11216,
				12373,
				13700,
				12931,
				12738,
				12402,
				11946,
				17261,
				17114,
				11521,
				13126,
				11148,
				17145,
				12374,
				11803,
				11801,
				11522,
				12277,
				11523,
				12693,
				11331,
				11217,
				11219,
				9541,
				13462,
				12276,
				12375,
				12164,
				12401,
				12530,
				12531,
				13839,
				12917,
				11799,
				12030,
				11615,
				11401,
				12480,
				14737,
				17113,
				13037,
				12275,
				11334,
				12403,
				12594,
				12481,
				13109,
				11218,
				11800,
				14925,
				12918,
				12737,
				12882,
				12933,
				12701,
				11938,
				11332,
				12114,
				12592,
				17110,
				12919,
				12007,
				13746,
				12376,
				11937,
				17647,
				14223,
				12174,
				12112,
				17111,
				11301,
				12379,
				11214,
				11768,
				14447,
				12916,
				11855,
				12406,
				11727,
				11680,
				11936,
				11678,
				11213,
				13006,
				12673,
				12881,
				13130,
				12111,
				12151,
				12405,
				11939,
				17258,
				11573,
				13359,
				11526,
				12372,
				12113,
				12932,
				11945,
				12452,
				11842,
				14224,
				12482,
				14589,
				11589,
				12378,
				12400,
				12906,
				13128,
				14341,
				11525,
				12595,
				12404,
				11947,
				12907,
				17112,
				11333,
				11790,
				14926,
				13129,
				11402,
				13054,
				12377,
				12115,
				11328
			],
			"p": [
				{
					"num": 11989,
					"reg": 1,
					"org": 0,
					"name": "오드아이즈 보텍스 드래곤"
				},
				{
					"num": 13462,
					"reg": 1,
					"org": 0,
					"name": "초천신룡 오드아이즈 레볼루션 드래곤"
				},
				{
					"num": 11938,
					"reg": 3,
					"org": 0,
					"name": "EM 도크로배트 조커"
				}
			]
		},
		{
			"name": "퍼니멀",
			"list": [
				15255,
				15292,
				12840,
				11347,
				11744,
				11392,
				11794,
				13701,
				11730,
				12841,
				11687,
				13991,
				11350,
				11686,
				11352,
				11953,
				11351,
				11348,
				11743,
				12886,
				12674,
				11349
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "RR",
			"list": [
				15480,
				12210,
				11691,
				11590,
				11999,
				11798,
				12887,
				16035,
				11854,
				11732,
				11797,
				12286,
				11998,
				12212,
				11353,
				12213,
				11957,
				8000,
				15547,
				11767,
				11841,
				12762,
				13139,
				11853,
				11574,
				11958,
				15484,
				12214,
				15548,
				12288,
				7998,
				12330,
				15530,
				12287,
				11692,
				12209,
				15483,
				11531,
				12532
			],
			"p": [
				{
					"num": 12325,
					"reg": 1,
					"org": 0,
					"name": "RR－얼티미트 팔콘"
				}
			]
		},
		{
			"name": "아쿠아액트리스",
			"list": [
				11919,
				11918,
				11916,
				11921,
				11920,
				11917,
				11922
			],
			"p": [
				{
					"num": 16424,
					"reg": 1,
					"org": 0,
					"name": "No.4 맹독자포 스텔스 크라겐"
				},
				{
					"num": 14489,
					"reg": 3,
					"org": 0,
					"name": "마린세스 코랄아네모네"
				}
			]
		},
		{
			"name": "프레데터 플랜츠",
			"list": [
				14603,
				12838,
				14605,
				13055,
				12837,
				17131,
				12923,
				17129,
				14604,
				12858,
				12833,
				12831,
				12830,
				12834,
				12832,
				12597,
				13990,
				12839,
				12924,
				12596,
				14602,
				12925,
				17130,
				12598
			],
			"p": [
				{
					"num": 12924,
					"reg": 3,
					"org": 0,
					"name": "프레데터 플랜츠 달링 코브라"
				},
				{
					"num": 12870,
					"reg": 1,
					"org": 0,
					"name": "프레데터 플랜츠 드라고스타페리아"
				},
				{
					"num": 12835,
					"reg": 1,
					"org": 0,
					"name": "프레데터 플랜츠 키메라플레시아"
				}
			]
		},
		{
			"name": "WW",
			"list": [
				15707,
				12742,
				15763,
				15708,
				15750,
				16033,
				12743,
				12861
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "점술공주",
			"list": [
				11909,
				17818,
				11912,
				17775,
				11913,
				17793,
				11907,
				11910,
				11914,
				11911,
				11908
			],
			"p": [
				{
					"num": 15083,
					"reg": 2,
					"org": 0,
					"name": "디클레어러 디바이너"
				},
				{
					"num": 11384,
					"reg": 1,
					"org": 0,
					"name": "아크 디클레어러"
				},
				{
					"num": 8492,
					"reg": 3,
					"org": 1,
					"name": "의식의 준비"
				}
			]
		},
		{
			"name": "강귀",
			"list": [
				13050,
				13719,
				13610,
				13565,
				14990,
				13049,
				14789,
				13222,
				13515,
				13720,
				13564,
				14991,
				13093,
				13048,
				13721
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "다이너레슬러",
			"list": [
				13896,
				14303,
				14634,
				14455,
				13893,
				14257,
				13894,
				14633,
				14790,
				14256,
				13941,
				13895,
				14454,
				14258
			],
			"p": [
				{
					"num": 13896,
					"reg": 3,
					"org": 0,
					"name": "다이너레슬러 판크라톱스"
				},
				{
					"num": 13011,
					"reg": 3,
					"org": 0,
					"name": "영혼을 먹는 오비랍토르"
				}
			]
		},
		{
			"name": "트릭스터",
			"list": [
				13563,
				13562,
				14136,
				13220,
				13609,
				13561,
				13513,
				13045,
				13046,
				13555,
				14135,
				13608,
				13107,
				14787,
				13047,
				13092
			],
			"p": [
				{
					"num": 13107,
					"reg": 1,
					"org": 0,
					"name": "트릭스터 리인카네이션"
				},
				{
					"num": 13092,
					"reg": 1,
					"org": 0,
					"name": "트릭스터 라이트스테이지"
				}
			]
		},
		{
			"name": "생아발론",
			"list": [
				15868,
				15859,
				15858,
				16551,
				15869,
				15860,
				15857
			],
			"p": [
				{
					"num": 15861,
					"reg": 3,
					"org": 0,
					"name": "생아발론 드리아스"
				}
			]
		},
		{
			"name": "군관",
			"list": [
				16201,
				17428,
				16508,
				16247,
				18529,
				16263,
				16200,
				16509
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "네크로즈",
			"list": [
				11486,
				11482,
				11483,
				11490,
				11580,
				12945,
				11489,
				11488,
				15851,
				11484,
				11491,
				11701,
				11480,
				11487,
				11548,
				11713,
				11702,
				11564,
				11481,
				11485
			],
			"p": [
				{
					"num": 11384,
					"reg": 1,
					"org": 0,
					"name": "아크 디클레어러"
				},
				{
					"num": 15083,
					"reg": 2,
					"org": 0,
					"name": "디클레어러 디바이너"
				},
				{
					"num": 11485,
					"reg": 2,
					"org": 0,
					"name": "트리슈라의 네크로즈"
				},
				{
					"num": 8492,
					"reg": 3,
					"org": 1,
					"name": "의식의 준비"
				}
			]
		},
		{
			"name": "도레미코드",
			"list": [
				18528,
				16086,
				16085,
				16094,
				16088,
				16084,
				16093,
				16092,
				16095,
				16096,
				16091,
				16087,
				16090,
				16089
			],
			"p": [
				{
					"num": 15083,
					"reg": 2,
					"org": 0,
					"name": "디클레어러 디바이너"
				}
			]
		},
		{
			"name": "령사",
			"list": [
				6510,
				8800,
				6508,
				7664,
				6337,
				6509,
				17434,
				6336,
				6507,
				6335,
				14389,
				11596,
				15409,
				6338,
				14969,
				9907,
				12951
			],
			"p": [
				{
					"num": 12952,
					"reg": 2,
					"org": 0,
					"name": "페어리테일－카구야"
				}
			]
		},
		{
			"name": "령수",
			"list": [
				11495,
				11502,
				11549,
				11594,
				12799,
				11501,
				11494,
				11703,
				12761,
				11493,
				11704,
				11492,
				11496,
				11497
			],
			"p": [
				{
					"num": 14740,
					"reg": 2,
					"org": 0,
					"name": "디멘션 어트랙터"
				}
			]
		},
		{
			"name": "룡성",
			"list": [
				11284,
				11283,
				11240,
				11239,
				11271,
				11364,
				12667,
				11241,
				11700,
				11238,
				11407,
				11270,
				11237,
				11363,
				11699
			],
			"p": [
				{
					"num": 11722,
					"reg": 3,
					"org": 0,
					"name": "환룡성－쵸호우"
				}
			]
		},
		{
			"name": "리브로맨서",
			"list": [
				17398,
				17396,
				17399,
				17394,
				17233,
				17395,
				17238,
				17236,
				17237,
				17235,
				17397,
				18526,
				17400,
				17234,
				17232
			],
			"p": [
				{
					"num": 8492,
					"reg": 3,
					"org": 1,
					"name": "의식의 준비"
				}
			]
		},
		{
			"name": "마기스토스",
			"list": [
				15613,
				15623,
				15622,
				15621,
				15620,
				15614,
				15612,
				15615
			],
			"p": [
				{
					"num": 16531,
					"reg": 1,
					"org": 0,
					"name": "마기스토스 다이몬 조로아"
				}
			]
		},
		{
			"name": "마도서",
			"list": [
				10145,
				10190,
				5676,
				10358,
				5680,
				10147,
				10246,
				10281,
				10421,
				10357,
				10149,
				10245,
				10631,
				13101,
				10188,
				10189,
				10318,
				10312,
				10244,
				10148,
				10187,
				10150,
				10512,
				10394,
				10602,
				10146,
				10282,
				10395,
				10280,
				10544
			],
			"p": [
				{
					"num": 10544,
					"reg": 1,
					"org": 0,
					"name": "마도서의 신판"
				}
			]
		},
		{
			"name": "마탄",
			"list": [
				12122,
				13316,
				13325,
				13324,
				13317,
				13318,
				13321,
				13323,
				13327,
				13319,
				14322,
				13322,
				13320,
				13315,
				13326
			],
			"p": [
				{
					"num": 14209,
					"reg": 1,
					"org": 0,
					"name": "마탄환의 사수 맥스"
				}
			]
		},
		{
			"name": "머메일",
			"list": [
				10420,
				10393,
				10294,
				10545,
				10238,
				10434,
				10240,
				10351,
				10597,
				10239,
				10237,
				10236,
				10511,
				10293,
				10242,
				10241,
				10392,
				10278,
				13244,
				10391,
				10471
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "메르피",
			"list": [
				15290,
				15307,
				15254,
				15291,
				17425,
				17424,
				15253,
				15250,
				15251,
				17465,
				15252
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "메타파이즈",
			"list": [
				13240,
				13239,
				13275,
				13792,
				11212,
				13276,
				13241,
				13291,
				13734,
				13243,
				13242
			],
			"p": [
				{
					"num": 14740,
					"reg": 2,
					"org": 0,
					"name": "디멘션 어트랙터"
				}
			]
		},
		{
			"name": "메탈포제",
			"list": [
				12422,
				12421,
				12423,
				12420,
				12648,
				12471,
				12472,
				15752,
				12459,
				12460,
				15711,
				12612,
				15712
			],
			"p": [
				{
					"num": 13507,
					"reg": 1,
					"org": 0,
					"name": "헤비메탈포제 엘렉트럼"
				}
			]
		},
		{
			"name": "버스터 모드, /버스터",
			"list": [
				8058,
				8047,
				8070,
				8046,
				8069,
				14262,
				8019,
				14260,
				8023,
				8007,
				8022,
				8020,
				8017,
				14305,
				14261,
				8138,
				8091,
				8018,
				14320,
				8048,
				8021
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "뱀파이어",
			"list": [
				10795,
				15844,
				6293,
				6287,
				10762,
				13645,
				13653,
				10806,
				10761,
				5958,
				5410,
				9555,
				13648,
				10873,
				13654,
				13649,
				16820,
				13644,
				13651,
				5141,
				11200,
				13646,
				10765,
				13647,
				13652,
				10760
			],
			"p": [
				{
					"num": 16850,
					"reg": 1,
					"org": 0,
					"name": "디 언데드 뱀파이어"
				}
			]
		},
		{
			"name": "베어루크티",
			"list": [
				16106,
				16107,
				16099,
				16864,
				16098,
				16100,
				16552,
				16097,
				16101,
				16108,
				16109,
				16102
			],
			"p": [
				{
					"num": 15502,
					"reg": 2,
					"org": 0,
					"name": "수왕 알파"
				}
			]
		},
		{
			"name": "빙결계",
			"list": [
				15981,
				8724,
				8107,
				15896,
				7954,
				8725,
				8253,
				15831,
				8406,
				8251,
				7955,
				9132,
				8108,
				15828,
				8832,
				7814,
				7813,
				8570,
				8573,
				8405,
				15833,
				8726,
				7529,
				9110,
				15835,
				8885,
				9131,
				8571,
				15829,
				8252,
				15830,
				7527,
				9748,
				15832,
				8250,
				8572
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "비틀트루퍼",
			"list": [
				16942,
				16634,
				16946,
				16944,
				16945,
				16629,
				16628,
				16941,
				16940,
				16630,
				16633
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "성잔",
			"list": [
				13061,
				13058,
				13062,
				13060,
				13096,
				13097,
				13057,
				13059
			],
			"p": [
				{
					"num": 15010,
					"reg": 1,
					"org": 0,
					"name": "잭나이츠 오르페골 기르수"
				}
			]
		},
		{
			"name": "불꽃성기사",
			"list": [
				15082,
				15247,
				15249,
				18228,
				15246,
				14803,
				15248
			],
			"p": [
				{
					"num": 13500,
					"reg": 1,
					"org": 0,
					"name": "성기사의 추상 이졸데"
				}
			]
		},
		{
			"name": "시무르그",
			"list": [
				14463,
				14464,
				7770,
				6720,
				7612,
				14465,
				16828,
				14461,
				14519,
				14462,
				14505,
				14466,
				14506,
				14507
			],
			"p": [
				{
					"num": 14935,
					"reg": 3,
					"org": 0,
					"name": "왕신조 시무르그"
				},
				{
					"num": 7770,
					"reg": 1,
					"org": 0,
					"name": "다크 시무르그"
				}
			]
		},
		{
			"name": "아로마",
			"list": [
				14701,
				11819,
				11846,
				11858,
				14686,
				12621,
				11822,
				14645,
				11820,
				14644,
				11859,
				11821,
				11818
			],
			"p": [
				{
					"num": 13505,
					"reg": 2,
					"org": 0,
					"name": "아로마세라피－재스민"
				}
			]
		},
		{
			"name": "안개 골짜기",
			"list": [
				7957,
				8109,
				7817,
				7531,
				7530,
				9350,
				7815,
				7816,
				9934,
				8110,
				7956,
				7532
			],
			"p": [
				{
					"num": 8110,
					"reg": 1,
					"org": 0,
					"name": "안개 골짜기의 거신조"
				}
			]
		},
		{
			"name": "여섯 무사",
			"list": [
				7000,
				6963,
				9544,
				13314,
				9314,
				13307,
				13310,
				7003,
				7323,
				9499,
				9500,
				9317,
				7297,
				9313,
				9316,
				6970,
				13308,
				7134,
				6965,
				7145,
				9311,
				9366,
				13356,
				7133,
				6969,
				9528,
				7322,
				9312,
				6964,
				8054,
				13311,
				7314,
				7276,
				9315,
				9340,
				6968,
				13309,
				7458,
				9341,
				6967,
				7007,
				9339,
				7853,
				13313,
				8602,
				7014,
				9342,
				9365,
				6966,
				7298
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "에스프릿",
			"list": [
				12758,
				12796,
				12773,
				12807,
				12795,
				12772,
				12757,
				12759
			],
			"p": [
				{
					"num": 13252,
					"reg": 1,
					"org": 0,
					"name": "아마노이와토"
				},
				{
					"num": 8492,
					"reg": 3,
					"org": 1,
					"name": "의식의 준비"
				}
			]
		},
		{
			"name": "위치크래프트",
			"list": [
				14404,
				14412,
				14413,
				14416,
				15063,
				14410,
				14483,
				14407,
				14405,
				14830,
				14409,
				17038,
				14406,
				14415,
				14414,
				14411,
				15053,
				14408
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "워크라이",
			"list": [
				15948,
				16282,
				16277,
				15945,
				15947,
				16281,
				16276,
				17176,
				15946,
				15950,
				16280,
				15951,
				15949,
				16279,
				16278
			],
			"p": [
				{
					"num": 17176,
					"reg": 1,
					"org": 0,
					"name": "워크라이 미디엄"
				}
			]
		},
		{
			"name": "플런드롤",
			"list": [
				15323,
				15326,
				15979,
				15075,
				15324,
				15081,
				15325,
				15076,
				15321,
				15320,
				15080
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "잭나이츠",
			"list": [
				13386,
				13390,
				13384,
				13388,
				15010,
				13385,
				13427,
				13570,
				13389,
				13442,
				13387,
				13777,
				13428,
				13057,
				13443
			],
			"p": [
				{
					"num": 13389,
					"reg": 1,
					"org": 0,
					"name": "감벽의 잭나이츠"
				}
			]
		},
		{
			"name": "제왕",
			"list": [
				11250,
				7487,
				11760,
				9114,
				7659,
				7516,
				5965,
				11369,
				12264,
				11758,
				11581,
				10772,
				11555,
				12091,
				11757,
				10993,
				10798,
				11761,
				11204,
				11064,
				4747,
				13640,
				10926,
				4810,
				12095,
				11399,
				11756,
				11275,
				6190,
				10963,
				11759,
				12254,
				6239,
				7117,
				12094,
				12090,
				12093,
				10423,
				11105,
				13615,
				12092
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "천위",
			"list": [
				14458,
				14457,
				14460,
				14646,
				14518,
				14503,
				15300,
				14504,
				14459,
				14456
			],
			"p": [
				{
					"num": 14662,
					"reg": 1,
					"org": 0,
					"name": "천위의 용귀신"
				},
				{
					"num": 14460,
					"reg": 3,
					"org": 0,
					"name": "천위룡－비슈다"
				},
				{
					"num": 14949,
					"reg": 3,
					"org": 0,
					"name": "천위룡－사하스라라"
				},
				{
					"num": 11877,
					"reg": 1,
					"org": 0,
					"name": "어버이해마"
				}
			]
		},
		{
			"name": "초량",
			"list": [
				14321,
				12216,
				12217,
				12223,
				14306,
				12218,
				12215,
				12224,
				12798,
				14263
			],
			"p": [
				{
					"num": 12222,
					"reg": 3,
					"org": 0,
					"name": "초량기신왕 그레이트 매그너스"
				},
				{
					"num": 12924,
					"reg": 3,
					"org": 0,
					"name": "프레데터 플랜츠 달링 코브라"
				}
			]
		},
		{
			"name": "크롤러",
			"list": [
				13232,
				13776,
				13961,
				13791,
				13234,
				13233,
				13235,
				13289,
				13237,
				17431,
				14269,
				13236,
				13059,
				13273
			],
			"p": [
				{
					"num": 14269,
					"reg": 1,
					"org": 0,
					"name": "데우스 엑스크롤러"
				},
				{
					"num": 17431,
					"reg": 2,
					"org": 0,
					"name": "크롤러 소우마"
				}
			]
		},
		{
			"name": "클리포트",
			"list": [
				11353,
				11394,
				11540,
				11541,
				12666,
				11355,
				11358,
				11357,
				11356,
				11542,
				11593,
				11393,
				11405,
				11354,
				11543,
				11406
			],
			"p": [
				{
					"num": 11593,
					"reg": 2,
					"org": 0,
					"name": "리클리포트"
				}
			]
		},
		{
			"name": "틴당글",
			"list": [
				13426,
				15045,
				13381,
				13380,
				13379,
				13623,
				13568,
				13382,
				13440,
				13425,
				14792,
				13383,
				14973
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "파괴수",
			"list": [
				12040,
				12106,
				12107,
				12250,
				12390,
				12248,
				12105,
				12249,
				12038,
				14352,
				12392,
				12039,
				12391
			],
			"p": [
				{
					"num": 12250,
					"reg": 3,
					"org": 0,
					"name": "방해받은 파괴수의 잠"
				},
				{
					"num": 15502,
					"reg": 2,
					"org": 0,
					"name": "수왕 알파"
				},
				{
					"num": 12040,
					"reg": 3,
					"org": 0,
					"name": "KYOUTOU 워터프론트"
				},
				{
					"num": 12249,
					"reg": 3,
					"org": 0,
					"name": "괴성파괴수 지즈키엘"
				},
				{
					"num": 12390,
					"reg": 3,
					"org": 0,
					"name": "뇌격파괴수 썬더 더 킹"
				}
			]
		},
		{
			"name": "파라디온",
			"list": [
				13726,
				13730,
				13789,
				13729,
				13961,
				14311,
				13772,
				13727,
				13728,
				13771
			],
			"p": [
				{
					"num": 13761,
					"reg": 2,
					"org": 0,
					"name": "아크로드 파라디온"
				},
				{
					"num": 13729,
					"reg": 2,
					"org": 0,
					"name": "성진의 파라디온"
				}
			]
		},
		{
			"name": "에일리언",
			"list": [
				6804,
				8146,
				8075,
				7129,
				6897,
				8142,
				6803,
				6810,
				6802,
				6807,
				6987,
				7299,
				7300,
				8034,
				8185,
				6806,
				6800,
				8057,
				8033,
				6801,
				8686,
				7190,
				7140,
				12653,
				6994,
				6805,
				16210,
				6808
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "피안",
			"list": [
				11633,
				11318,
				11636,
				11321,
				11509,
				11505,
				11772,
				11773,
				11635,
				11319,
				11634,
				11775,
				11317,
				11632,
				11506,
				11507
			],
			"p": [
				{
					"num": 12108,
					"reg": 1,
					"org": 0,
					"name": "영원의 숙녀 베아트리체"
				}
			]
		},
		{
			"name": "프린세스 코롱",
			"list": [
				15890,
				15891,
				16427
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "페어리테일",
			"list": [
				15852,
				12770,
				12952,
				15853,
				12441,
				12625
			],
			"p": [
				{
					"num": 12441,
					"reg": 2,
					"org": 0,
					"name": "페어리테일－백설"
				},
				{
					"num": 12952,
					"reg": 3,
					"org": 0,
					"name": "페어리테일－카구야"
				}
			]
		},
		{
			"name": "죽도",
			"list": [
				13282,
				11400,
				17825,
				7635,
				7225,
				7313
			],
			"p": [
				{
					"num": 13282,
					"reg": 3,
					"org": 0,
					"name": "불타는 죽도"
				},
				{
					"num": 7635,
					"reg": 3,
					"org": 0,
					"name": "황금빛 죽도"
				}
			]
		},
		{
			"name": "펭귄",
			"list": [
				12841,
				11066,
				10853,
				4467,
				4367,
				5803,
				15390,
				4608,
				5807,
				16510,
				16549,
				10259,
				16404,
				9654,
				16511,
				16512,
				4205
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "환상수기",
			"list": [
				10628,
				10542,
				10626,
				13246,
				10627,
				10555,
				10679,
				10815,
				10759,
				10625,
				11055,
				10506,
				10502,
				10667,
				10504,
				10554,
				10594,
				10503,
				10758,
				10505
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "히스이",
			"list": [
				16496,
				16542,
				18473,
				16811,
				18198,
				16494,
				16871,
				16812,
				16495,
				17167,
				16857,
				17412,
				16813
			],
			"p": [
				{
					"num": 16871,
					"reg": 1,
					"org": 0,
					"name": "히스이침식"
				},
				{
					"num": 18183,
					"reg": 1,
					"org": 0,
					"name": "히스이테이 에지르 규미르"
				}
			]
		},
		{
			"name": "PSY프레임",
			"list": [
				12071,
				12076,
				12067,
				12070,
				12619,
				12072,
				12069,
				12664,
				12075,
				12068
			],
			"p": [
				{
					"num": 12070,
					"reg": 2,
					"org": 0,
					"name": "PSY프레임기어 γ"
				},
				{
					"num": 12069,
					"reg": 3,
					"org": 0,
					"name": "PSY프레임기어 β"
				}
			]
		},
		{
			"name": "U.A.",
			"list": [
				15498,
				15540,
				11777,
				11510,
				11512,
				15497,
				11639,
				11322,
				15541,
				11323,
				11779,
				11776,
				11638,
				15555,
				11324,
				11778,
				11511,
				11637
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "디클레어러",
			"list": [
				7674,
				11398,
				7673,
				15083,
				11377,
				8834,
				6692,
				6693
			],
			"p": [
				{
					"num": 7674,
					"reg": 1,
					"org": 0,
					"name": "퍼펙트 디클레어러"
				},
				{
					"num": 11384,
					"reg": 1,
					"org": 0,
					"name": "아크 디클레어러"
				},
				{
					"num": 15083,
					"reg": 2,
					"org": 0,
					"name": "디클레어러 디바이너"
				},
				{
					"num": 7673,
					"reg": 2,
					"org": 0,
					"name": "버밀리온 디클레어러"
				},
				{
					"num": 8492,
					"reg": 3,
					"org": 1,
					"name": "의식의 준비"
				}
			]
		},
		{
			"name": "진룡",
			"list": [
				12419,
				12424,
				12983,
				12938,
				12937,
				12611,
				12423,
				12967,
				12934,
				12969,
				12936,
				12935,
				12754,
				12984,
				12968,
				12939,
				12940,
				12333
			],
			"p": [
				{
					"num": 12960,
					"reg": 1,
					"org": 0,
					"name": "진룡황 V.F.D."
				},
				{
					"num": 12967,
					"reg": 3,
					"org": 0,
					"name": "드래고닉D"
				}
			]
		},
		{
			"name": "누메론",
			"list": [
				15385,
				10662,
				16426,
				10946,
				15378,
				18197,
				15384
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "크리보",
			"list": [
				12577,
				11160,
				12089,
				7526,
				16806,
				16402,
				17112,
				14341,
				12256,
				6406,
				16398,
				10890,
				17111,
				6314,
				4805,
				12399,
				16636,
				6407,
				6636,
				16397,
				16400,
				16399,
				7554,
				14912,
				16829,
				4064,
				18148,
				16401,
				7555,
				11964
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "싱크로 드래곤",
			"list": [
				12736,
				17759,
				15377,
				16190,
				12540,
				12931,
				8006,
				15887,
				16239,
				17826,
				15970,
				15002,
				17387,
				14375,
				14978,
				12932,
				11644,
				12906,
				12910,
				12907,
				8336,
				17251,
				16259,
				15588,
				12066,
				9534,
				17261,
				16192,
				17760,
				8437,
				18534,
				14192,
				8005,
				15886,
				17758,
				16191,
				17807,
				9346,
				16241,
				16240,
				14177,
				13001,
				15590,
				13856,
				15060,
				17602,
				12883,
				9294,
				12894,
				15003,
				13462,
				11936
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "네메시스",
			"list": [
				14994,
				14997,
				15046,
				14998,
				14995,
				15263,
				14996
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "아티팩트",
			"list": [
				11243,
				11089,
				11044,
				13398,
				11040,
				11041,
				11042,
				11045,
				11195,
				12028,
				11043,
				11090,
				11101,
				11046,
				11242
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "트로이메어",
			"list": [
				14267,
				13613,
				14098,
				13571
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "마요괴",
			"list": [
				14307,
				14034,
				14266,
				14036,
				14033,
				14045,
				14035,
				14037,
				14044,
				17036,
				15149,
				14872
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "령신",
			"list": [
				13573,
				10399,
				10168,
				13735,
				13575,
				13580,
				13574,
				13579,
				10257,
				13628,
				13576,
				10518,
				13614
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "새크리파이스",
			"list": [
				7152,
				13464,
				7518,
				8452,
				7407,
				4737,
				13467,
				13465,
				4802,
				6859,
				15840
			],
			"p": [
				{
					"num": 8492,
					"reg": 3,
					"org": 1,
					"name": "의식의 준비"
				}
			]
		},
		{
			"name": "기교",
			"list": [
				16204,
				16205,
				16207,
				15017,
				15266,
				14480,
				14650,
				14833,
				15501,
				16249,
				16206
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "분보그",
			"list": [
				11374,
				12148,
				11254,
				12147,
				11561,
				11710,
				11983,
				11828,
				12340,
				12314
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "열차",
			"list": [
				11605,
				11183
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "공아단",
			"list": [
				13664,
				13667,
				13663,
				13657,
				13659,
				13662,
				13665,
				13660,
				13655,
				13658,
				15544,
				17783,
				14265,
				13666,
				13661,
				13656
			],
			"p": [
				{
					"num": 17804,
					"reg": 3,
					"org": 0,
					"name": "공아단의 회검 도나"
				}
			]
		},
		{
			"name": "바렐",
			"list": [
				14623,
				16538,
				14620,
				13769,
				14786,
				13439,
				16522
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "G골렘, 사이바넷, 파이어월",
			"list": [
				17656,
				13438,
				13937,
				13767,
				17662,
				14301,
				13878,
				18532,
				14436,
				18496,
				13696,
				14435,
				13877,
				13526,
				18465,
				13872,
				18464,
				13697,
				13876,
				18514,
				17657,
				14251,
				13200,
				13742,
				13747,
				13033
			],
			"p": [
				{
					"num": 17656,
					"reg": 3,
					"org": 0,
					"name": "G골렘 록해머"
				},
				{
					"num": 17657,
					"reg": 3,
					"org": 0,
					"name": "G골렘 페불도그"
				},
				{
					"num": 17662,
					"reg": 3,
					"org": 0,
					"name": "그레비티 밸런스"
				},
				{
					"num": 17661,
					"reg": 3,
					"org": 0,
					"name": "G골렘 디그니파이드 트릴리톤"
				},
				{
					"num": 17659,
					"reg": 3,
					"org": 0,
					"name": "G골렘 스터번 멘히르"
				},
				{
					"num": 17658,
					"reg": 2,
					"org": 0,
					"name": "G골렘 크리스탈하트"
				},
				{
					"num": 17660,
					"reg": 1,
					"org": 0,
					"name": "G골렘 인밸리드 돌멘"
				}
			]
		},
		{
			"name": "언체인드",
			"list": [
				14682,
				14637,
				14828,
				14635,
				15015,
				14681,
				14636,
				14697,
				14696
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "문라이트",
			"list": [
				14187,
				12281,
				12343,
				12284,
				12285,
				12860,
				14188,
				14186,
				12283,
				14189,
				12282,
				12280,
				12453,
				12370
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "염성, 염무",
			"list": [
				10386,
				14727,
				10329,
				14728,
				10382,
				10510,
				10385,
				10668,
				14735,
				10596,
				14736,
				10629,
				10507,
				10430,
				10509,
				14734,
				10556,
				10431,
				10630,
				10417,
				14730,
				10508,
				10380,
				10543,
				10418,
				10432,
				14729,
				10445,
				10384,
				10381,
				10383,
				14733
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "드래그니티",
			"list": [
				8716,
				8719,
				9046,
				8717,
				15592,
				9047,
				9050,
				11582,
				13724,
				13788,
				9049,
				15588,
				8562,
				15591,
				8389,
				8392,
				9048,
				13725,
				8718,
				15586,
				8559,
				8561,
				8560,
				15589,
				15590,
				15689,
				8391,
				8388,
				8390,
				15587
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "X-세이버",
			"list": [
				7538,
				7823,
				8326,
				8684,
				8522,
				9032,
				7824,
				11576,
				9030,
				8349,
				11452,
				7537,
				7822,
				8753,
				8521,
				8282,
				8369,
				7821,
				8348,
				9031,
				8637,
				7536,
				8327
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "재빠른",
			"list": [
				9580,
				8755,
				4047,
				10253,
				4161,
				7662,
				9038,
				4273,
				4922,
				7193,
				13256,
				5503
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "스프리건즈",
			"list": [
				15745,
				17063,
				17809,
				15697,
				15746,
				15698,
				18199,
				16260,
				15700,
				15966,
				17459,
				15699,
				15759,
				15760,
				16015
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "숲의 성수",
			"list": [
				16211,
				10105,
				10161,
				18227,
				11370,
				10922
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "시계신",
			"list": [
				9698,
				13160,
				13161,
				13821,
				13822,
				13816,
				13815,
				13819,
				13158,
				13820,
				9708,
				13818,
				13157,
				13817,
				13159
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "코드 토커",
			"list": [
				13872,
				14783,
				13874,
				14228,
				14162,
				13876,
				13878,
				13621,
				13201,
				13877
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "인잭터",
			"list": [
				10083,
				9944,
				17032,
				10084,
				9928,
				9927,
				10054,
				10096,
				10017,
				10051,
				9894,
				10097,
				10053,
				9896,
				10021,
				10052,
				9895,
				9891,
				9892,
				9893,
				9945
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		},
		{
			"name": "음향전사, 사운드 워리어",
			"list": [
				9324,
				11610,
				17133,
				17173,
				9325,
				12029,
				11609,
				17132,
				11608,
				9326
			],
			"p": [
				{
					"num": 0,
					"reg": 0,
					"org": 0
				}
			]
		}
	],
	"all": [
		{
			"num": [
				8087,
				11296,
				7530,
				8602,
				11377,
				16636,
				16379,
				11195,
				17036,
				10257,
				7407,
				13080,
				13077,
				13078,
				17261,
				12906,
				12907,
				11942,
				11486,
				11713,
				12638,
				12667,
				13427,
				13442,
				13443,
				11369,
				11761,
				11105,
				12936,
				12934,
				12935,
				15380,
				15381,
				15382,
				15383,
				15379,
				15385,
				15378,
				14994,
				14995,
				13571,
				13602,
				13769,
				13439,
				14620,
				13837,
				14625,
				16522,
				14487,
				13258,
				16536,
				14626,
				13756,
				13877,
				13878,
				9708,
				13818,
				13157,
				13817,
				9698,
				13815,
				13159,
				13819,
				13158,
				13160,
				13816,
				13036,
				14437,
				14962,
				13879,
				13409,
				13202,
				13460,
				14542,
				13698,
				13528,
				18511,
				13874,
				14783,
				14162,
				13881,
				14228,
				13621,
				13201,
				13872,
				17105,
				6799,
				13009,
				17047,
				17049,
				13616,
				11373,
				6881,
				6888,
				7397,
				13405,
				7405,
				11063,
				5016,
				10642,
				13407,
				14676,
				13349,
				14122,
				13314,
				9794,
				5605,
				6707,
				6682,
				4968,
				5622,
				7934,
				5740,
				4960,
				5008,
				8314,
				7652,
				7318,
				7319,
				7916,
				11018,
				11019,
				13163,
				12316,
				8756,
				7136,
				6222,
				16564,
				10257,
				7115,
				6075,
				6090,
				5426,
				15558,
				4568,
				7142,
				13166,
				14786,
				5834,
				4694,
				6283,
				12548,
				4426,
				10404,
				10936,
				7434,
				17154,
				5389,
				11877,
				4512,
				15954,
				6695,
				6522,
				10809,
				15558,
				5247,
				5536,
				14691,
				13423,
				12668,
				8230,
				5620,
				11662,
				4694,
				8513,
				10560,
				16425,
				14129,
				13075,
				7858,
				12258,
				12801,
				12433,
				13447
			]
		},
		{
			"num": [
				13082,
				14907,
				6845,
				17596,
				16421,
				10268,
				14260,
				8732,
				13505,
				15063,
				13428,
				13772,
				16236,
				13506,
				4740,
				14180,
				17783,
				12453,
				9049,
				8326,
				11608,
				9229,
				9063,
				9190,
				11939,
				17647,
				17148,
				14605,
				12923,
				12836,
				15893,
				15857,
				17424,
				17465,
				15291,
				15290,
				18186,
				15076,
				15075,
				12250,
				12249,
				12390,
				13876,
				14435,
				14696,
				14697,
				14681,
				14828,
				12070,
				4740,
				11764,
				7403,
				6734,
				13358,
				5530,
				5980,
				5658,
				13071,
				14740,
				10354,
				9801,
				5134,
				11829,
				7445,
				11878,
				15064,
				4342,
				5114,
				14876,
				4343,
				4678,
				4861,
				12187,
				9008,
				14937,
				8992,
				4818,
				12762,
				9997,
				14484,
				17390,
				4860,
				15034,
				13293,
				14721,
				7570,
				6262,
				10992,
				14328,
				14742,
				15313,
				16516,
				7568,
				17262,
				8492
			]				
		},
		{
			"num": [
				13808,
				16383,
				14906,
				17597,
				10953,
				17130,
				13093,
				15867,
				10281,
				13426,
				14311,
				8075,
				15540,
				14948,
				16249,
				12340,
				11606,
				14301,
				13256,
				6784,
				7187,
				10213,
				14137,
				10866,
				8428,
				6398,
				9518,
				15003,
				13359,
				17109,
				12866,
				11392,
				17232,
				17234,
				16629,
				16628,
				14406,
				14410,
				15322,
				15077,
				15078,
				13390,
				13384,
				11318,
				11243,
				11040,
				13934,
				13664,
				14636,
				12860,
				14187,
				12283,
				12069,
				14635,
				10418,
				11555,
				11317,
				9293,
				7641,
				11248,
				7166,
				13622,
				12897,
				6598,
				13918,
				6268,
				6523,
				6054,
				4354,
				5990,
				12514,
				11004,
				6278,
				8617,
				4804,
				5914,
				6436,
				12655,
				8672,
				8993,
				14144,
				12465,
				11583,
				10796,
				6511,
				17469,
				13689,
				15478,
				6154,
				15725,
				12803,
				6044,
				11065,
				16555,
				14987
			]								
		},
		{
			"else": [
				"고티스",
				"저주받은 무리"
			]
		}
	]
}


//count numbers & make 2D array of each card
function numArr(arr)
{
  var n_arr = [];
  var beforeItem;
  $.each(arr, function(index, item)
  {
    if(beforeItem != undefined)
    {
      if(item == beforeItem)
      {
        n_arr[n_arr.length - 1] = [item, n_arr[n_arr.length - 1][1] + 1];
      }
      else
      {
        n_arr[n_arr.length] = [item, 1];
      }
    }
    else
    {
      n_arr[n_arr.length] = [item, 1];
    }
    beforeItem = item;
  });
  return n_arr;
}

//find specific string in html string with RegExp reg & save it to 
function regMatch(imageset_html, reg, REG)
{
  var carr = [];
  var arrmatch = imageset_html.match(reg);
  $.each(arrmatch, function(index, item)
  {
    if(item.match(REG) != null)
    {
      carr[carr.length] = REG.exec(item)[1];
    }
  });
  return carr;
}

//check if html is available & return array
function htmlToArr(html, reg, REG)
{
  var arr = [];
  if (html)
  {
    arr = regMatch(html, reg, REG);
  }
  else
  {
    console.log("no card list available");
  }
  return arr;
}

//check if deck is structurally ok
function checkDeck(cid, cidex, res)
{
  if(cid.length > 60)
  {
    res[res.length] = [0, 0, 60, cid.length];
  }
  if(cid.length < 40)
  {
    res[res.length] = [1, 0, 40, cid.length];
  }
  if(cidex.length > 15)
  {
    res[res.length] = [2, 0, 15, cidex.length];
  }
  return res;
}

//check forbidden arch with id
function checkfbarch(cidn, cidexn, res)
{
  $.each(LITjson["fbArch"], function(fi, fbArch)
  {
    $.each(fbArch["list"], function(fli, list)
    {
      $.each(cidn, function(cIDni, cIDn)
      {
        if(cIDn[0] == list)
        {
          res[res.length] = [3, cIDni, fi, 0];
        }
      })
      $.each(cidexn, function(cIDExni, cIDExn)
      {
        if(cIDExn[0] == list)
        {
          res[res.length] = [4, cIDExni, fi, 0];
        }
      })
    })
  })
  return res;
}

//make a list of validated arch numbers
function makeArchList(cid)
{
  var archList = [];
  var archValid = [];
  var archNum = 0;
  var archTrigger = Number(cid.length / LITjson["trigger"]);
  $.each(LITjson["arch"], function(archi, arch)
  {
    archNum = 0;
    $.each(LITjson["arch"][archi]["list"], function(listi, list)
    {
      $.each(cid, function(cIDi, cID)
      {
        if(cID == list)
        {
          archNum++;
        }
      })
    })
    if(archNum > 0)
      archList[archList.length] = [archi, archNum];
  })
  $.each(archList, function(archLi, archL)
  {
    if(archL[1] >= archTrigger)
    {
      archValid[archValid.length] = archL[0];
    }
  })
  return archValid;
}

//return boolean of if some array contains some value
function exists(arr, val)
{
  var res = false;
  $.each(arr, function(arri, arrv)
  {
    if(arrv == val)
    {
      res = true;
    }
  })
  return res;
}

//check p card, delete it from cid/cidex if it's not arrow, check c0/c1/c2
function checkPC(cidn, cid, cidexn, res)
{
  var cidReg = JSON.parse(JSON.stringify(cidn));
  var cidExReg = JSON.parse(JSON.stringify(cidexn));
  var pcardMatch = [];
  var pvalid = [];
  var archValid = makeArchList(cid);
  $.each(LITjson["arch"], function(archi, arch)
  {
    $.each(LITjson["arch"][archi]["p"], function(pi, p)
    {
      $.each(cidn, function(cIDni, cIDn)
      {
        if(cIDn[0] == p["num"])
        {
          pcardMatch[pcardMatch.length] = [archi, cIDn[0], cIDni, 0, p["reg"], p["org"]];
        }
      })
      $.each(cidexn, function(cIDExni, cIDExn)
      {
        if(cIDExn[0] == p["num"])
        {
          pcardMatch[pcardMatch.length] = [archi, cIDExn[0], cIDExni, 1, p["reg"], p["org"]];
        }
      })
    })
  })
  pcardMatch = [...new Set(pcardMatch)];
  $.each(pcardMatch, function(pcmi, pcm)
  {
    if(exists(archValid, pcm[0]))
    {
      pvalid[pvalid.length] = pcm;
      delete pcardMatch[pcmi];
    }
  })
  pcardMatch = pcardMatch.filter((element) => true);
  var pvnum = [];
  var pvnumtemp = false;
  $.each(pvalid, function(pvi, pv)
  {
    pvnumtemp = false;
    $.each(pvnum, function(pvni, pvn)
    {
      if(pvn[1] == pv[1])
      {
        pvnumtemp = true;
        if(pv[5] > pvn[5])
        {
          pvn = pv;
        }
      }
    })
    if(!pvnumtemp)
    {
      pvnum[pvnum.length] = pvalid;
    }
  })
  $.each(pcardMatch, function(pcmi, pcm)
  {
    $.each(pvalid, function(pvi, pv)
    {
      if(pcm[1] == pv[1])
      {
        delete pcardMatch[pcmi];
      }
    })
  })
  pcardMatch = pcardMatch.filter((element) => true);
  $.each(pvalid, function(pvi, pv)
  {
    pcardMatch[pcardMatch.length] = pv;
  })
  $.each(pcardMatch, function(pcmi, pcm)
  {
    if(exists(archValid, pcm[0]))
    {
      $.each(LITjson["arch"][pcm[0]]["p"], function(pi, p)
      {
        if(pcm[1] == p["num"])
        {
          if(pcm[3] == 0)
          {
            if(cidReg[pcm[2]][1] > p["reg"])
            {
              res[res.length] = [5, pcm, cidReg[pcm[2]][1], p["reg"]];
            }
            cidReg[pcm[2]][0] = 0;
          }
          if(pcm[3] == 1)
          {
            if(cidExReg[pcm[2]][1] > p["reg"])
            {
              res[res.length] = [6, pcm, cidExReg[pcm[2]][1], p["reg"]];
            }
            cidExReg[pcm[2]][0] = 0;
          }
          pcm[1] = 0;
        }
      })
    }
    else
    {
      $.each(LITjson["arch"][pcm[0]]["p"], function(pi, p)
      {
        if(pcm[1] == p["num"])
        {
          if(p["org"] == 0)
          {
            if(pcm[3] == 0)
            {
              res[res.length] = [7, pcm, cidReg[pcm[2]][1], 0];
              cidReg[pcm[2]][0] = 0;
            }
            if(pcm[3] == 1)
            {
              res[res.length] = [8, pcm, cidExReg[pcm[2]][1], 0];
              cidExReg[pcm[2]][0] = 0;
            }
          }
          pcm[1] = 0;
        }
      })
    }
  })
  $.each(LITjson["all"][0]["num"], function(numi, num)
  {
    $.each(cidReg, function(cidri, cidr)
    {
      if(cidr[0] == num)
      {
        res[res.length] = [9, num, [cidr[0], cidr[1]], 0];
      }
    })
    $.each(cidExReg, function(cidexri, cidexr)
    {
      if(cidexr[0] == num)
      {
        res[res.length] = [10, num, [cidexr[0], cidexr[1]], 0];
      }
    })
  })
  $.each(LITjson["all"][1]["num"], function(numi, num)
  {
    $.each(cidReg, function(cidri, cidr)
    {
      if(cidr[0] == num && cidr[1] > 1)
      {
        res[res.length] = [11, num, [cidr[0], cidr[1]], 1];
      }
    })
    $.each(cidExReg, function(cidexri, cidexr)
    {
      if(cidexr[0] == num && cidexr[1] > 1)
      {
        res[res.length] = [12, num, [cidexr[0], cidexr[1]], 1];
      }
    })
  })
  $.each(LITjson["all"][2]["num"], function(numi, num)
  {
    $.each(cidReg, function(cidri, cidr)
    {
      if(cidr[0] == num && cidr[1] > 2)
      {
        res[res.length] = [13, num, [cidr[0], cidr[1]], 2];
      }
    })
    $.each(cidExReg, function(cidexri, cidexr)
    {
      if(cidexr[0] == num && cidexr[1] > 2)
      {
        res[res.length] = [14, num, [cidexr[0], cidexr[1]], 2];
      }
    })
  })
  return res;
}

//check all regulations with checkRlC, checkRlF, checkRlA
function checkRl(narr, exarr, narrn, exarrn, res)
{
  res = checkDeck(narr, exarr, res);
  res = checkfbarch(narrn, exarrn, res);
  res = checkPC(narrn, narr, exarrn, res);
  return res;
}


function findName(idarrn, idnarrn, id)
{
  var res = "카드 찾기 오류";
  $.each(idarrn, function(idni, idn)
  {
    if(idn[0] == id)
    {
      res = idnarrn[idni][0];
    }
  })
  return res;
}


function findPname(id)
{
  var res = [];
  $.each(LITjson["arch"], function(archi, arch)
  {
    $.each(LITjson["arch"][archi]["p"], function(pi, p)
    {
      if(LITjson["arch"][archi]["p"][pi]["num"] == id)
      {
        res[res.length] = LITjson["arch"][archi]["name"];
      }
    })
  })
  return res;
}


//
function interpretRes(resarr)
{
  $.each(resarr, function(resi, res)
  {
    if(res[0] == 0)
      console.log("메인 덱 매수가 60 초과: " + res[3]);
    else if(res[0] == 1)
      console.log("메인 덱 매수가 40 미만: " + res[3]);
    else if(res[0] == 2)
      console.log("엑스트라 덱 매수가 15 초과: " + res[3]);
    else if(res[0] == 3)
      console.log(cardsName_n_arr[res[1]][0] + " = 금지 카드군: " + LITjson["fbArch"][res[2]]["name"]);
    else if(res[0] == 4)
      console.log(cardsNameEx_n_arr[res[1]][0] + " = 금지 카드군: " + LITjson["fbArch"][res[2]]["name"]);
    else if(res[0] == 5)
      console.log(cardsName_n_arr[res[1][2]][0] + " = [" + LITjson["arch"][res[1][0]]["name"] + "]전용카드 " + ((res[3] == 1) ? "제한" : "준제한") + " : 현재 " + cardsName_n_arr[res[1][2]][1] + "장");
    else if(res[0] == 6)
      console.log(cardsNameEx_n_arr[res[1][2]][0] + " = [" + LITjson["arch"][res[1][0]]["name"] + "]전용카드 " + ((res[3] == 1) ? "제한" : "준제한") + " : 현재 " + cardsNameEx_n_arr[res[1][2]][1] + "장");
    else if(res[0] == 7)
      console.log(cardsName_n_arr[res[1][2]][0] + " = [" + findPname(cardsNum_n_arr[res[1][2]][0]) +"]전용카드");
    else if(res[0] == 8)
      console.log(cardsNameEx_n_arr[res[1][2]][0] + " = [" + findPname(cardsNumEx_n_arr[res[1][2]][0]) +"]전용카드");
    else if(res[0] == 9)
      console.log(findName(cardsNum_n_arr, cardsName_n_arr, res[1]) + " = 금지");
    else if(res[0] == 10)
      console.log(findName(cardsNumEx_n_arr, cardsNameEx_n_arr, res[1]) + " = 금지");
    else if(res[0] == 11)
      console.log(findName(cardsNum_n_arr, cardsName_n_arr, res[1]) + " = 제한");
    else if(res[0] == 12)
      console.log(findName(cardsNumEx_n_arr, cardsNameEx_n_arr, res[1]) + " = 제한");
    else if(res[0] == 13)
      console.log(findName(cardsNum_n_arr, cardsName_n_arr, res[1]) + " = 준제한 카드");
    else if(res[0] == 14)
      console.log(findName(cardsNumEx_n_arr, cardsNameEx_n_arr, res[1]) + " = 준제한 카드");
  })
}


cardsNum_arr = htmlToArr(imageset_main_html, cidreg, cidREG);
cardsName_arr = htmlToArr(imageset_main_html, cnameREG, cnameREG);
cardsNumEx_arr = htmlToArr(imageset_extra_html, cidreg, cidREG);
cardsNameEx_arr = htmlToArr(imageset_extra_html, cnameREG, cnameREG);

cardsNum_n_arr = numArr(cardsNum_arr, cardsNum_n_arr);
cardsName_n_arr = numArr(cardsName_arr, cardsName_n_arr);
cardsNumEx_n_arr = numArr(cardsNumEx_arr, cardsNumEx_n_arr);
cardsNameEx_n_arr = numArr(cardsNameEx_arr, cardsNameEx_n_arr);


var res = [];
res = checkRl(cardsNum_arr, cardsNumEx_arr, cardsNum_n_arr, cardsNumEx_n_arr, res);

chrome.storage.local.get(["on"], async function(r) {
  if(r.on)
    interpretRes(res);
});

/*

,
  "web_accessible_resources": [
    {
      "resources": [ "reg.json" ],
      "matches": [ "https://www.db.yugioh-card.com/yugiohdb/*" ]
    }
  ]

XML(ajax) request to get extension file
chrome-extension://[PACKAGE ID]/[PATH]
PACKAGE ID = 32 letters
ex) "papago translate" package ID: kjlcghnjglnjdagnpdhphkbljflodhda


*/