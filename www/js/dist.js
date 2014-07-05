
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*
 AngularJS v1.3.0-beta.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(D,U,s){function F(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-beta.1/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function xb(b){if(null==b||za(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:y(b)||I(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(O(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else if(xb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Sb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Zc(b,
a,c){for(var d=Sb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Tb(b){return function(a,c){b(c,a)}}function ab(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Ub(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Ub(b,a);return b}function R(b){return parseInt(b,
10)}function Vb(b,a){return t(new (t(function(){},{prototype:b})),a)}function x(){}function Aa(b){return b}function $(b){return function(){return b}}function C(b){return"undefined"===typeof b}function v(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function y(b){return"string"===typeof b}function yb(b){return"number"===typeof b}function na(b){return"[object Date]"===Ba.call(b)}function I(b){return"[object Array]"===Ba.call(b)}function O(b){return"function"===typeof b}
function bb(b){return"[object RegExp]"===Ba.call(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function $c(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function ad(b,a,c){var d=[];r(b,function(b,f,h){d.push(a.call(c,b,f,h))});return d}function cb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ma(b,a){var c=cb(b,a);0<=c&&b.splice(c,1);return a}function ba(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw Na("cpws");
if(a){if(b===a)throw Na("cpi");if(I(b))for(var c=a.length=0;c<b.length;c++)a.push(ba(b[c]));else{c=a.$$hashKey;r(a,function(b,c){delete a[c]});for(var d in b)a[d]=ba(b[d]);Ub(a,c)}}else(a=b)&&(I(b)?a=ba(b,[]):na(b)?a=new Date(b.getTime()):bb(b)?a=RegExp(b.source):X(b)&&(a=ba(b,{})));return a}function Wb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ta(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(I(b)){if(!I(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ta(b[d],a[d]))return!1;return!0}}else{if(na(b))return na(a)&&b.getTime()==a.getTime();if(bb(b)&&bb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||I(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!O(b[d])){if(!ta(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!O(a[d]))return!1;
return!0}return!1}function Xb(){return U.securityPolicy&&U.securityPolicy.isActive||U.querySelector&&!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"))}function db(b,a){var c=2<arguments.length?ua.call(arguments,2):[];return!O(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ua.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function bd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:za(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,bd,a?"  ":null)}function Yb(b){return y(b)?JSON.parse(b):b}function Oa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=P(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function fa(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return 3===b[0].nodeType?P(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+P(b)})}catch(d){return P(c)}}function Zb(b){try{return decodeURIComponent(b)}catch(a){}}function $b(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.split("="),d=Zb(c[0]),v(d)&&(b=v(c[1])?Zb(c[1]):!0,a[d]?I(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function ac(b){var a=[];r(b,function(b,d){I(b)?r(b,function(b){a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))}):a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))});return a.length?a.join("&"):""}function zb(b){return va(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function va(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function cd(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,h=["ng:app","ng-app","x-ng-app","data-ng-app"],g=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(h,function(a){h[a]=!0;c(U.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+
a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=g.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&h[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function bc(b,a){var c=function(){b=z(b);if(b.injector()){var c=b[0]===U?"document":fa(b);throw Na("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=cc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(D&&!d.test(D.name))return c();D.name=D.name.replace(d,"");Ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function eb(b,a){a=a||"_";return b.replace(dd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Ab(b,a,c){if(!b)throw Na("areq",a||"?",c||"required");return b}function Pa(b,a,c){c&&I(b)&&(b=b[b.length-1]);Ab(O(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function wa(b,a){if("hasOwnProperty"===b)throw Na("badname",a);}function dc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&O(b)?db(e,b):b}function Bb(b){var a=b[0];b=b[b.length-1];if(a===b)return z(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return z(c)}function ed(b){var a=F("$injector"),c=F("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||F;return b.module||
(b.module=function(){var b={};return function(e,f,h){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};h&&l(h);return n}())}}())}function Qa(b){return b.replace(fd,function(a,b,d,e){return e?d.toUpperCase():d}).replace(gd,"Moz$1")}function Cb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,q,p,A;if(!d||null!=b)for(;e.length;)for(k=e.shift(),
l=0,n=k.length;l<n;l++)for(q=z(k[l]),m?q.triggerHandler("$destroy"):m=!m,p=0,q=(A=q.children()).length;p<q;p++)e.push(Da(A[p]));return f.apply(this,arguments)}var f=Da.fn[b],f=f.$original||f;e.$original=f;Da.fn[b]=e}function S(b){if(b instanceof S)return b;y(b)&&(b=ca(b));if(!(this instanceof S)){if(y(b)&&"<"!=b.charAt(0))throw Db("nosel");return new S(b)}if(y(b)){var a=U.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);Eb(this,a.childNodes);z(U.createDocumentFragment()).append(this)}else Eb(this,
b)}function Fb(b){return b.cloneNode(!0)}function Ea(b){ec(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ea(b[a])}function fc(b,a,c,d){if(v(d))throw Db("offargs");var e=ja(b,"events");ja(b,"handle")&&(C(a)?r(e,function(a,c){Gb(b,c,a);delete e[c]}):r(a.split(" "),function(a){C(c)?(Gb(b,a,e[a]),delete e[a]):Ma(e[a]||[],c)}))}function ec(b,a){var c=b[fb],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),fc(b)),delete Ra[c],b[fb]=s))}function ja(b,a,c){var d=
b[fb],d=Ra[d||-1];if(v(c))d||(b[fb]=d=++hd,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function gc(b,a,c){var d=ja(b,"data"),e=v(c),f=!e&&v(a),h=f&&!X(a);d||h||ja(b,"data",d={});if(e)d[a]=c;else if(f){if(h)return d&&d[a];t(d,a)}else return d}function Hb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function gb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+ca(a)+" "," ")))})}function hb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=ca(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ca(c))}}function Eb(b,a){if(a){a=a.nodeName||!v(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function hc(b,a){return ib(b,"$"+(a||"ngController")+"Controller")}function ib(b,a,c){b=z(b);9==b[0].nodeType&&(b=b.find("html"));for(a=I(a)?a:[a];b.length;){for(var d=
0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==s)return c;b=b.parent()}}function ic(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ea(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function jc(b,a){var c=jb[a.toLowerCase()];return c&&kc[b.nodeName]&&c}function id(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||U);if(C(c.defaultPrevented)){var f=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var h=Wb(a[e||c.type]||[]);r(h,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Fa(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===
s&&(c=b.$$hashKey=ab()):c=b;return a+":"+c}function Sa(b){r(b,this.put,this)}function lc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(jd,""),c=c.match(kd),r(c[1].split(ld),function(b){b.replace(md,function(b,c,d){a.push(d)})})),b.$inject=a):I(b)?(c=b.length-1,Pa(b[c],"fn"),a=b.slice(0,c)):Pa(b,"fn",!0);return a}function cc(b){function a(a){return function(b,c){if(X(b))r(b,Tb(a));else return a(b,c)}}function c(a,b){wa(a,"service");if(O(b)||I(b))b=n.instantiate(b);
if(!b.$get)throw Ta("pget",a);return l[a+g]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,g;r(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(y(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,g=d.length;f<g;f++){var h=d[f],m=n.get(h[0]);m[h[1]].apply(m,h[2])}else O(a)?b.push(n.invoke(a)):I(a)?b.push(n.invoke(a)):Pa(a,"module")}catch(l){throw I(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),
Ta("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===h)throw Ta("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=h,a[d]=b(d)}catch(e){throw a[d]===h&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],g=lc(a),h,k,m;k=0;for(h=g.length;k<h;k++){m=g[k];if("string"!==typeof m)throw Ta("itkn",m);f.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[h]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(I(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||O(e)?e:c},get:c,annotate:lc,has:function(b){return l.hasOwnProperty(b+g)||a.hasOwnProperty(b)}}}var h={},g="Provider",m=[],k=new Sa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){wa(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+g),
d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Ta("unpr",m.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+g);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||x)});return p}function nd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==P(a.nodeName)||(b=a)});return b}function f(){var b=
c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function od(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pd(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1))}finally{if(A--,0===A)for(;E.length;)try{E.pop()()}catch(b){c.error(b)}}}
function f(a,b){(function lb(){r(B,function(a){a()});u=b(lb,a)})()}function h(){w=null;H!=g.url()&&(H=g.url(),r(Y,function(a){a(g.url())}))}var g=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};g.isMock=!1;var A=0,E=[];g.$$completeOutstandingRequest=e;g.$$incOutstandingRequestCount=function(){A++};g.notifyWhenNoOutstandingRequests=function(a){r(B,function(a){a()});0===A?a():E.push(a)};var B=[],u;g.addPollFn=function(a){C(u)&&f(100,n);B.push(a);return a};var H=k.href,J=a.find("base"),
w=null;g.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(H!=a)return H=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),J.attr("href",J.attr("href"))):(w=a,c?k.replace(a):k.href=a),g}else return w||k.href.replace(/%27/g,"'")};var Y=[],T=!1;g.onUrlChange=function(a){if(!T){if(d.history)z(b).on("popstate",h);if(d.hashchange)z(b).on("hashchange",h);else g.addPollFn(h);T=!0}Y.push(a);return a};g.baseHref=function(){var a=J.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,
""):""};var M={},aa="",V=g.baseHref();g.cookies=function(a,b){var d,e,f,g;if(a)b===s?m.cookie=escape(a)+"=;path="+V+";expires=Thu, 01 Jan 1970 00:00:00 GMT":y(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+V).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==aa)for(aa=m.cookie,d=aa.split("; "),M={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),M[a]===s&&(M[a]=unescape(e.substring(g+
1))));return M}};g.defer=function(a,b){var c;A++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};g.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(x),!0):!1}}function qd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new pd(b,d,a,c)}]}function rd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var h=
0,g=t({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!C(b))return a in m||h++,m[a]=b,h>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete m[a];h--},removeAll:function(){m={};h=0;l={};n=q=null},destroy:function(){l=
g=m=null;delete a[b]},info:function(){return t({},g,{size:h})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function sd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function mc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,h=/^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i,g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){wa(a,"directive");
y(a)?(Ab(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);O(g)?g={compile:$(g)}:!g.compile&&g.link&&(g.compile=$(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){d(h)}});return e}])),c[a].push(e)):r(a,Tb(k));return this};this.aHrefSanitizationWhitelist=function(b){return v(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return v(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,n,q,p,A,E,B,u,H,J,w){function Y(a,b,c,d,e){a instanceof z||(a=z(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});
var f=M(a,b,a,c,d,e);T(a,"ng-scope");return function(b,c,d){Ab(b,"scope");var e=c?Ga.clone.call(a):a;r(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var g=e.length;d<g;d++){var h=e[d].nodeType;1!==h&&9!==h||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function T(a,b){try{a.addClass(b)}catch(c){}}function M(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,p,q,A;f=c.length;var L=Array(f);for(p=0;p<f;p++)L[p]=c[p];A=p=0;for(q=h.length;p<q;A++)k=L[A],c=h[p++],f=h[p++],l=z(k),c?(c.scope?
(n=a.$new(),l.data("$scope",n)):n=a,(l=c.transclude)||!e&&b?c(f,n,k,d,aa(a,l||b)):c(f,n,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var h=[],k,l,n,p,q=0;q<a.length;q++)k=new Ib,l=V(a[q],[],k,0===q?d:s,e),(f=l.length?Va(l,a[q],k,b,c,null,[],[],f):null)&&f.scope&&T(z(a[q]),"ng-scope"),k=f&&f.terminal||!(n=a[q].childNodes)||!n.length?null:M(n,f?f.transclude:b),h.push(f,k),p=p||f||k,f=null;return p?g:null}function aa(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",
db(c,c.$destroy));return d}}function V(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case 1:v(b,ka(Ha(a).toLowerCase()),"E",d,g);var l,n,p;k=a.attributes;for(var q=0,A=k&&k.length;q<A;q++){var E=!1,H=!1;l=k[q];if(!Q||8<=Q||l.specified){n=l.name;p=ka(n);pa.test(p)&&(n=eb(p.substr(6),"-"));var B=p.replace(/(Start|End)$/,"");p===B+"Start"&&(E=n,H=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));p=ka(n.toLowerCase());h[p]=n;c[p]=l=ca(l.value);jc(a,p)&&(c[p]=!0);ga(a,b,l,p);v(b,p,"A",d,g,E,H)}}a=
a.className;if(y(a)&&""!==a)for(;k=f.exec(a);)p=ka(k[2]),v(b,p,"C",d,g)&&(c[p]=ca(k[3])),a=a.substr(k.index+k[0].length);break;case 3:D(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))p=ka(k[1]),v(b,p,"M",d,g)&&(c[p]=ca(k[2]))}catch(w){}}b.sort(F);return b}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function kb(a,
b,c){return function(d,e,f,g,h){e=N(e[0],b,c);return a(d,e,f,g,h)}}function Va(a,c,d,e,f,g,h,k,p){function q(a,b,c,d){if(a){c&&(a=kb(a,c,d));a.require=G.require;if(M===G||G.$$isolateScope)a=nc(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=kb(b,c,d));b.require=G.require;if(M===G||G.$$isolateScope)b=nc(b,{isolateScope:!0});k.push(b)}}function H(a,b,c){var d,e="data",f=!1;if(y(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||
b[e]("$"+a+"Controller");if(!d&&!f)throw ha("ctreq",a,ga);}else I(a)&&(d=[],r(a,function(a){d.push(H(a,b,c))}));return d}function B(a,e,f,g,p){function q(a,b){var c;2>arguments.length&&(b=a,a=s);Ia&&(c=v);return p(a,b,c)}var L,w,u,Y,N,V,v={},mb;L=c===f?d:Wb(d,new Ib(z(f),d.$attr));w=L.$$element;if(M){var t=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=z(f);V=e.$new(!0);aa&&aa===M.$$originalDirective?g.data("$isolateScope",V):g.data("$isolateScopeNoTemplate",V);T(g,"ng-isolate-scope");r(M.scope,function(a,c){var d=
a.match(t)||[],f=d[3]||c,g="?"==d[2],d=d[1],h,k,p,n;V.$$isolateBindings[c]=d+f;switch(d){case "@":L.$observe(f,function(a){V[c]=a});L.$$observers[f].$$scope=e;L[f]&&(V[c]=b(L[f])(e));break;case "=":if(g&&!L[f])break;k=A(L[f]);n=k.literal?ta:function(a,b){return a===b};p=k.assign||function(){h=V[c]=k(e);throw ha("nonassign",L[f],M.name);};h=V[c]=k(e);V.$watch(function(){var a=k(e);n(a,V[c])||(n(a,h)?p(e,a=V[c]):V[c]=a);return h=a},null,k.literal);break;case "&":k=A(L[f]);V[c]=function(a){return k(e,
a)};break;default:throw ha("iscp",M.name,c,a);}})}mb=p&&q;J&&r(J,function(a){var b={$scope:a===M||a.$$isolateScope?V:e,$element:w,$attrs:L,$transclude:mb},c;N=a.controller;"@"==N&&(N=L[a.name]);c=E(N,b);v[a.name]=c;Ia||w.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(u=h.length;g<u;g++)try{Y=h[g],Y(Y.isolateScope?V:e,w,L,Y.require&&H(Y.require,w,v),mb)}catch(K){n(K,fa(w))}g=e;M&&(M.template||null===M.templateUrl)&&(g=V);a&&a(g,f.childNodes,s,p);for(g=k.length-
1;0<=g;g--)try{Y=k[g],Y(Y.isolateScope?V:e,w,L,Y.require&&H(Y.require,w,v),mb)}catch(kb){n(kb,fa(w))}}p=p||{};for(var w=-Number.MAX_VALUE,u,J=p.controllerDirectives,M=p.newIsolateScopeDirective,aa=p.templateDirective,v=p.nonTlbTranscludeDirective,Va=!1,Ia=p.hasElementTranscludeDirective,K=d.$$element=z(c),G,ga,t,F=e,pa,D=0,Q=a.length;D<Q;D++){G=a[D];var R=G.$$start,W=G.$$end;R&&(K=N(c,R,W));t=s;if(w>G.priority)break;if(t=G.scope)u=u||G,G.templateUrl||(S("new/isolated scope",M,G,K),X(t)&&(M=G));ga=
G.name;!G.templateUrl&&G.controller&&(t=G.controller,J=J||{},S("'"+ga+"' controller",J[ga],G,K),J[ga]=G);if(t=G.transclude)Va=!0,G.$$tlb||(S("transclusion",v,G,K),v=G),"element"==t?(Ia=!0,w=G.priority,t=N(c,R,W),K=d.$$element=z(U.createComment(" "+ga+": "+d[ga]+" ")),c=K[0],nb(f,z(ua.call(t,0)),c),F=Y(t,e,w,g&&g.name,{nonTlbTranscludeDirective:v})):(t=z(Fb(c)).contents(),K.empty(),F=Y(t,e));if(G.template)if(S("template",aa,G,K),aa=G,t=O(G.template)?G.template(K,d):G.template,t=oc(t),G.replace){g=
G;t=C(t);c=t[0];if(1!=t.length||1!==c.nodeType)throw ha("tplrt",ga,"");nb(f,K,c);Q={$attr:{}};t=V(c,[],Q);var Z=a.splice(D+1,a.length-(D+1));M&&lb(t);a=a.concat(t).concat(Z);x(d,Q);Q=a.length}else K.html(t);if(G.templateUrl)S("template",aa,G,K),aa=G,G.replace&&(g=G),B=P(a.splice(D,a.length-D),K,d,f,F,h,k,{controllerDirectives:J,newIsolateScopeDirective:M,templateDirective:aa,nonTlbTranscludeDirective:v}),Q=a.length;else if(G.compile)try{pa=G.compile(K,d,F),O(pa)?q(null,pa,R,W):pa&&q(pa.pre,pa.post,
R,W)}catch($){n($,fa(K))}G.terminal&&(B.terminal=!0,w=Math.max(w,G.priority))}B.scope=u&&!0===u.scope;B.transclude=Va&&F;p.hasElementTranscludeDirective=Ia;return B}function lb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Vb(a[b],{$$isolateScope:!0})}function v(b,e,f,g,h,l,p){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var q;e=a.get(e+d);for(var A=0,E=e.length;A<E;A++)try{q=e[A],(g===s||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(l&&(q=Vb(q,{$$start:l,$$end:p})),b.push(q),h=q)}catch(H){n(H)}}return h}
function x(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(T(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function C(a){var b;a=ca(a);if(b=h.exec(a)){b=b[1].toLowerCase();a=z("<table>"+a+"</table>");if(/(thead|tbody|tfoot)/.test(b))return a.children(b);
a=a.children("tbody");return"tr"===b?a.children("tr"):a.children("tr").contents()}return z("<div>"+a+"</div>").contents()}function P(a,b,c,d,e,f,g,h){var k=[],l,n,A=b[0],E=a.shift(),w=t({},E,{templateUrl:null,transclude:null,replace:null,$$originalDirective:E}),B=O(E.templateUrl)?E.templateUrl(b,c):E.templateUrl;b.empty();q.get(H.getTrustedResourceUrl(B),{cache:p}).success(function(p){var q,H;p=oc(p);if(E.replace){p=C(p);q=p[0];if(1!=p.length||1!==q.nodeType)throw ha("tplrt",E.name,B);p={$attr:{}};
nb(d,b,q);var u=V(q,[],p);X(E.scope)&&lb(u);a=u.concat(a);x(c,p)}else q=A,b.html(p);a.unshift(w);l=Va(a,q,c,e,b,E,f,g,h);r(d,function(a,c){a==q&&(d[c]=b[0])});for(n=M(b[0].childNodes,e);k.length;){p=k.shift();H=k.shift();var J=k.shift(),Y=k.shift(),u=b[0];if(H!==A){var N=H.className;h.hasElementTranscludeDirective&&E.replace||(u=Fb(q));nb(J,z(H),u);T(z(u),N)}H=l.transclude?aa(p,l.transclude):Y;l(n,p,u,d,H)}k=null}).error(function(a,b,c,d){throw ha("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),
k.push(c),k.push(d),k.push(e)):l(n,b,c,d,e)}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function S(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,fa(d));}function D(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:$(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);T(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function Ia(a,b){if("srcdoc"==b)return H.HTML;var c=Ha(a);if("xlinkHref"==
b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return H.RESOURCE_URL}function ga(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ha(a))throw ha("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,h){d=h.$$observers||(h.$$observers={});if(g.test(e))throw ha("nodomevents");if(f=b(h[e],!0,Ia(a,e)))h[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,
a)})}}}})}}function nb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);c[z.expando]=d[z.expando];d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function nc(a,b){return t(function(){return a.apply(null,arguments)},a,b)}var Ib=function(a,b){this.$$element=
a;this.$attr=b||{}};Ib.prototype={$normalize:ka,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=pc(a,b),d=pc(b,a);0===c.length?J.removeClass(this.$$element,d):0===d.length?J.addClass(this.$$element,c):J.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=jc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=
d=eb(a,"-"));e=Ha(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=w(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var R=b.startSymbol(),W=b.endSymbol(),oc="{{"==R||"}}"==W?Aa:function(a){return a.replace(/\{\{/g,
R).replace(/}}/g,W)},pa=/^ngAttr[A-Z]/;return Y}]}function ka(b){return Qa(b.replace(td,""))}function pc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?" ":"")+h}return c}function ud(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){wa(a,"controller");X(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var h,g,m;y(e)&&(h=e.match(a),g=h[1],m=h[3],e=
b.hasOwnProperty(g)?b[g]:dc(f.$scope,g,!0)||dc(d,g,!0),Pa(e,g,!0));h=c.instantiate(e,f);if(m){if(!f||"object"!=typeof f.$scope)throw F("$controller")("noscp",g||e.name,m);f.$scope[m]=h}return h}}]}function vd(){this.$get=["$window",function(b){return z(b.document)}]}function wd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function qc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=P(ca(b.substr(0,e)));d=ca(b.substr(e+1));c&&(a[c]=
a[c]?a[c]+(", "+d):d)});return a}function rc(b){var a=X(b)?b:s;return function(c){a||(a=qc(b));return c?a[P(c)]||null:a}}function sc(b,a,c){if(O(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function xd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){y(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Yb(d)));return d}],transformRequest:[function(a){return X(a)&&"[object File]"!==Ba.call(a)?
oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ba(d),put:ba(d),patch:ba(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],h=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function c(a){var b=t({},a,{data:sc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,
transformResponse:e.transformResponse},f=function(a){function b(a){var c;r(a,function(b,d){O(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=t({},a.headers),f,g,c=t({},c.common,c[P(a.method)]);b(c);b(d);a:for(f in c){a=P(f);for(g in d)if(P(g)===a)continue a;d[f]=c[f]}return d}(a);t(d,a);d.headers=f;d.method=Ja(d.method);(a=Jb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){f=a.headers;var b=sc(a.data,rc(f),a.transformRequest);
C(a.data)&&r(f,function(a,b){"content-type"===P(b)&&delete f[b]});C(a.withCredentials)&&!C(e.withCredentials)&&(a.withCredentials=e.withCredentials);return A(a,b,f).then(c,c)},s],h=n.when(d);for(r(u,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var k=g.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,
function(b){a(b.data,b.status,b.headers,d)});return h};return h}function A(b,c,f){function h(a,b,c){u&&(200<=a&&300>a?u.put(s,[a,b,qc(c)]):u.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?q.resolve:q.reject)({data:a,status:c,headers:rc(d),config:b})}function m(){var a=cb(p.pendingRequests,b);-1!==a&&p.pendingRequests.splice(a,1)}var q=n.defer(),A=q.promise,u,r,s=E(b.url,b.params);p.pendingRequests.push(b);A.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==
b.method)&&(u=X(b.cache)?b.cache:X(e.cache)?e.cache:B);if(u)if(r=u.get(s),v(r)){if(r.then)return r.then(m,m),r;I(r)?k(r[1],r[0],ba(r[2])):k(r,200,{})}else u.put(s,A);C(r)&&a(b.method,s,c,h,f,b.timeout,b.withCredentials,b.responseType);return A}function E(a,b){if(!b)return a;var c=[];Zc(b,function(a,b){null===a||C(a)||(I(a)||(a=[a]),r(a,function(a){X(a)&&(a=oa(a));c.push(va(b)+"="+va(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var B=c("$http"),u=[];r(f,function(a){u.unshift(y(a)?
q.get(a):q.invoke(a))});r(h,function(a,b){var c=y(a)?q.get(a):q.invoke(a);u.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(t(d||{},{method:a,url:b,data:c}))}})})("post","put");p.defaults=e;return p}]}function yd(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!D.XMLHttpRequest))return new D.ActiveXObject("Microsoft.XMLHTTP");if(D.XMLHttpRequest)return new D.XMLHttpRequest;throw F("$httpBackend")("noxhr");}function zd(){this.$get=["$browser","$window","$document",function(b,a,c){return Ad(b,yd,b.defer,a.angular.callbacks,c[0])}]}function Ad(b,a,c,d,e){function f(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Q&&8>=Q?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&
d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var h=-1;return function(e,m,k,l,n,q,p,A){function E(){u=h;J&&J();w&&w.abort()}function B(a,d,e,f){T&&c.cancel(T);J=w=null;d=0===d?e?200:404:d;a(1223==d?204:d,e,f);b.$$completeOutstandingRequest(x)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==P(e)){var H="_"+(d.counter++).toString(36);d[H]=function(a){d[H].data=a};var J=f(m.replace("JSON_CALLBACK","angular.callbacks."+H),function(){d[H].data?B(l,200,d[H].data):
B(l,u||-2);d[H]=Ca.noop})}else{var w=a(e);w.open(e,m,!0);r(n,function(a,b){v(a)&&w.setRequestHeader(b,a)});w.onreadystatechange=function(){if(w&&4==w.readyState){var a=null,b=null;u!==h&&(a=w.getAllResponseHeaders(),b="response"in w?w.response:w.responseText);B(l,u||w.status,b,a)}};p&&(w.withCredentials=!0);if(A)try{w.responseType=A}catch(s){if("json"!==A)throw s;}w.send(k||null)}if(0<q)var T=c(E,q);else q&&q.then&&q.then(E)}}function Bd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=
a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,q,p=0,A=[],E=f.length,B=!1,u=[];p<E;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,n+h))?(p!=n&&A.push(f.substring(p,n)),A.push(p=c(B=f.substring(n+h,q))),p.exp=B,p=q+g,B=!0):(p!=E&&A.push(f.substring(p)),p=E);(E=A.length)||(A.push(""),E=1);if(l&&1<A.length)throw tc("noconcat",f);if(!k||B)return u.length=E,p=function(a){try{for(var b=0,c=E,g;b<c;b++)"function"==
typeof(g=A[b])&&(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null===g||C(g)?g="":"string"!=typeof g&&(g=oa(g))),u[b]=g;return u.join("")}catch(h){a=tc("interr",f,h.toString()),d(a)}},p.exp=f,p.parts=A,p}var h=b.length,g=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Cd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,h,g,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,A=v(m)&&!m;g=v(g)?g:0;q.then(null,null,d);
q.$$intervalId=k(function(){n.notify(p++);0<g&&p>=g&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);A||b.$apply()},h);e[q.$$intervalId]=n;return q}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function Dd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",
gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",
"short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function uc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=zb(b[a]);return b.join("/")}function vc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=R(b.port)||Ed[b.protocol]||null}function wc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&
"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=$b(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function la(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Wa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Kb(b){return b.substr(0,Wa(b).lastIndexOf("/")+1)}function xc(b,a){this.$$html5=!0;a=a||"";var c=Kb(b);vc(b,this,b);this.$$parse=function(a){var e=la(c,a);if(!y(e))throw Lb("ipthprfx",
a,c);wc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=ac(this.$$search),b=this.$$hash?"#"+zb(this.$$hash):"";this.$$url=uc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=la(b,d))!==s)return d=e,(e=la(a,e))!==s?c+(la("/",e)||e):b+d;if((e=la(c,d))!==s)return c+e;if(c==d+"/")return c}}function Mb(b,a){var c=Kb(b);vc(b,this,b);this.$$parse=function(d){var e=la(b,d)||la(c,d),e="#"==e.charAt(0)?la(a,e):
this.$$html5?e:"";if(!y(e))throw Lb("ihshprfx",d,a);wc(e,this,b);d=this.$$path;var f=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=ac(this.$$search),e=this.$$hash?"#"+zb(this.$$hash):"";this.$$url=uc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Wa(b)==Wa(a))return a}}function yc(b,a){this.$$html5=!0;Mb.apply(this,arguments);var c=Kb(b);
this.$$rewrite=function(d){var e;if(b==Wa(d))return d;if(e=la(c,d))return b+a+e;if(c===d+"/")return c}}function ob(b){return function(){return this[b]}}function zc(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Fd(){var b="",a=!1;this.hashPrefix=function(a){return v(a)?(b=a,this):b};this.html5Mode=function(b){return v(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function h(a){c.$broadcast("$locationChangeSuccess",
g.absUrl(),a)}var g,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?xc:yc):(m=Wa(k),e=Mb);g=new e(m,"#"+b);g.$$parse(g.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=z(a.target);"a"!==P(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);var h=g.$$rewrite(e);e&&(!b.attr("target")&&h&&!a.isDefaultPrevented())&&
(a.preventDefault(),h!=d.url()&&(g.$$parse(h),c.$apply(),D.angular["ff-684208-preventDefault"]=!0))}});g.absUrl()!=k&&d.url(g.absUrl(),!0);d.onUrlChange(function(a){g.absUrl()!=a&&(c.$evalAsync(function(){var b=g.absUrl();g.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(g.$$parse(b),d.url(b)):h(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=g.$$replace;l&&a==g.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",g.absUrl(),a).defaultPrevented?
g.$$parse(a):(d.url(g.absUrl(),b),h(a))}));g.$$replace=!1;return l});return g}]}function Gd(){var b=!0,a=this;this.debugEnabled=function(a){return v(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=
[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,a){if("constructor"===b)throw ya("isecfld",a);return b}function Xa(b,a){if(b){if(b.constructor===b)throw ya("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ya("isecdom",
a);}return b}function pb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,h=0;1<a.length;h++){f=da(a.shift(),d);var g=b[f];g||(g={},b[f]=g);b=g;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=da(a.shift(),d);return b[f]=c}function Ac(b,a,c,d,e,f,h){da(b,f);da(a,f);da(c,f);da(d,f);da(e,f);return h.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,l;if(null==k)return k;(k=k[b])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);
return k}:function(f,h){var k=h&&h.hasOwnProperty(b)?h:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function Hd(b,a){da(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function Id(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Bc(b,a,c){if(Nb.hasOwnProperty(b))return Nb[b];
var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Ac(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,h;do h=Ac(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=h;while(g<e);return h};else{var h="var p;\n";r(d,function(b,d){da(b,c);h+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var h=h+"return s;",g=new Function("s","k","pw",h);g.toString=$(h);f=a.unwrapPromises?function(a,b){return g(a,b,qa)}:g}else f=Id(d[0],d[1],c);else f=Hd(d[0],c);"hasOwnProperty"!==b&&(Nb[b]=f);return f}function Jd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return v(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return v(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer",
"$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!Cc.hasOwnProperty(b)&&(Cc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Ob(a);e=(new Ya(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return x}}}]}function Kd(){this.$get=["$rootScope","$exceptionHandler",
function(b,a){return Ld(function(a){b.$evalAsync(a)},a)}]}function Ld(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var h=[],k,l;return l={resolve:function(a){if(h){var c=h;h=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(g(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,g){var l=e(),E=function(d){try{l.resolve((O(b)?
b:c)(d))}catch(e){l.reject(e),a(e)}},B=function(b){try{l.resolve((O(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},u=function(b){try{l.notify((O(g)?g:c)(b))}catch(d){a(d)}};h?h.push([E,B,u]):k.then(E,B,u);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&O(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):
b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&O(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){var b=e();b.reject(a);return b.promise},g=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((O(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:h,when:function(g,k,l,n){var q=e(),p,A=function(b){try{return(O(k)?k:c)(b)}catch(d){return a(d),
h(d)}},E=function(b){try{return(O(l)?l:d)(b)}catch(c){return a(c),h(c)}},B=function(b){try{return(O(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(g).then(function(a){p||(p=!0,q.resolve(f(a).then(A,E,B)))},function(a){p||(p=!0,q.resolve(E(a)))},function(a){p||q.notify(B(a))})});return q.promise},all:function(a){var b=e(),c=0,d=I(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}
function Md(){this.$get=["$window",function(b){var a=b.requestAnimationFrame||b.webkitRequestAnimationFrame,c=b.cancelAnimationFrame||b.webkitCancelAnimationFrame;b=function(b){var e=a(b);return function(){c(e)}};b.supported=!!a;return b}]}function Nd(){var b=10,a=F("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,h){function g(){this.$id=ab();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=
this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function k(a,b){var c=f(a);Pa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}g.prototype={constructor:g,$new:function(a){a?
(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=ab());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:n,
get:e,exp:a,eq:!!d};c=null;if(!O(b)){var h=k(b||x,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Ma(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ma(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g=0,h=f(a),k=[],l={},m=0;return this.$watch(function(){e=h(c);var a,b;if(X(e))if(xb(e))for(d!==k&&(d=k,m=d.length=0,g++),a=e.length,m!==a&&(g++,d.length=m=a),b=0;b<a;b++)d[b]!==e[b]&&(g++,d[b]=e[b]);
else{d!==l&&(d=l={},m=0,g++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(g++,d[b]=e[b]):(m++,d[b]=e[b],g++));if(m>a)for(b in g++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(m--,delete d[b])}else d!==e&&(d=e,g++);return g},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,r,w,s=b,T,M=[],v,t,N;m("$digest");c=null;do{w=!1;for(T=this;k.length;){try{N=k.shift(),N.scope.$eval(N.expression)}catch(z){q.$$phase=null,e(z)}c=null}a:do{if(h=
T.$$watchers)for(r=h.length;r--;)try{if(d=h[r])if((f=d.get(T))!==(g=d.last)&&!(d.eq?ta(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))w=!0,c=d,d.last=d.eq?ba(f):f,d.fn(f,g===n?f:g,T),5>s&&(v=4-s,M[v]||(M[v]=[]),t=O(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,t+="; newVal: "+oa(f)+"; oldVal: "+oa(g),M[v].push(t));else if(d===c){w=!1;break a}}catch(y){q.$$phase=null,e(y)}if(!(h=T.$$childHead||T!==this&&T.$$nextSibling))for(;T!==this&&!(h=T.$$nextSibling);)T=T.$parent}while(T=
h);if((w||k.length)&&!s--)throw q.$$phase=null,a("infdig",b,oa(M));}while(w||k.length);for(q.$$phase=null;l.length;)try{l.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,db(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&
(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||h.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;
try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[cb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ua.call(arguments,1)),l,m;do{d=f.$$listeners[a]||
c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ua.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new g;return q}]}function Od(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=xa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Pd(b){if("self"===
b)return b;if(y(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(bb(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function Dc(b){var a=[];v(b)&&r(b,function(b){a.push(Pd(b))});return a}function Qd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Dc(a));return b};this.resourceUrlBlacklist=
function(b){arguments.length&&(a=Dc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),h={};h[ea.HTML]=d(f);h[ea.CSS]=d(f);h[ea.URL]=d(f);h[ea.JS]=d(f);h[ea.RESOURCE_URL]=
d(h[ea.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=h.hasOwnProperty(c)?h[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var f=xa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Jb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=
0,n=a.length;l<n;l++)if("self"===a[l]?Jb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw ra("insecurl",d.toString());}if(c===ea.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function Rd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=ba(ea);e.isEnabled=function(){return b};e.trustAs=
d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,h=e.getTrusted,g=e.trustAs;r(ea,function(a,b){var c=P(b);e[Qa("parse_as_"+c)]=function(b){return f(a,b)};e[Qa("get_trusted_"+c)]=function(b){return h(a,b)};e[Qa("trust_as_"+c)]=function(b){return g(a,b)}});return e}]}function Sd(){this.$get=["$window",
"$document",function(b,a){var c={},d=R((/android (\d+)/.exec(P((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h=f.documentMode,g,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var q in k)if(l=m.exec(q)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);n=!!("animation"in k||g+"Animation"in k);!d||l&&n||(l=y(f.body.style.webkitTransition),
n=y(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!h||7<h),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(C(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xb(),vendorPrefix:g,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:h}}]}function Td(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,g,m){var k=c.defer(),l=k.promise,n=v(m)&&!m;g=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),
d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},g);l.$$timeoutId=g;f[g]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;Q&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,
""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:"/"+W.pathname}}function Jb(b){b=y(b)?xa(b):b;return b.protocol===Ec.protocol&&b.host===Ec.host}function Ud(){this.$get=$(D)}function Fc(b){function a(d,e){if(X(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Gc);a("date",Hc);a("filter",Vd);a("json",Wd);a("limitTo",
Xd);a("lowercase",Yd);a("number",Ic);a("orderBy",Jc);a("uppercase",Zd)}function Vd(){return function(b,a,c){if(!I(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ca.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&$d.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});
var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var h in a)(function(b){"undefined"!=typeof a[b]&&
e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(h);break;case "function":e.push(a);break;default:return b}d=[];for(h=0;h<b.length;h++){var g=b[h];e.check(g)&&d.push(g)}return d}}function Gc(b){var a=b.NUMBER_FORMATS;return function(b,d){C(d)&&(d=a.CURRENCY_SYM);return Kc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){return Kc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Kc(b,a,c,d,e){if(null==b||!isFinite(b)||
X(b))return"";var f=0>b;b=Math.abs(b);var h=b+"",g="",m=[],k=!1;if(-1!==h.indexOf("e")){var l=h.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?h="0":(g=h,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(g=b.toFixed(e));else{h=(h.split(Lc)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));h=Math.pow(10,e);b=Math.round(b*h)/h;b=(""+b).split(Lc);h=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(h.length>=n+q)for(l=h.length-n,k=0;k<l;k++)0===(l-k)%q&&0!==k&&(g+=c),g+=h.charAt(k);for(k=l;k<h.length;k++)0===
(h.length-k)%n&&0!==k&&(g+=c),g+=h.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(g+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(g);m.push(f?a.negSuf:a.posSuf);return m.join("")}function qb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return qb(e,a,d)}}function rb(b,a){return function(c,d){var e=c["get"+b](),f=Ja(a?"SHORT"+b:b);return d[f][e]}}
function Mc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Nc(b){return function(a){var c=Mc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return qb(a,b)}}function Hc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=R(b[9]+b[10]),h=R(b[9]+b[11]));g.call(a,R(b[1]),R(b[2])-1,R(b[3]));f=R(b[4]||0)-f;h=R(b[5]||
0)-h;g=R(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",h=[],g,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;y(c)&&(c=ae.test(c)?R(c):a(c));yb(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(m=be.exec(e))?(h=h.concat(ua.call(m,1)),e=h.pop()):(h.push(e),e=null);r(h,function(a){g=ce[a];f+=g?g(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return f}}function Wd(){return function(b){return oa(b,!0)}}function Xd(){return function(b,a){if(!I(b)&&!y(b))return b;a=R(a);if(y(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Jc(b){return function(a,c,d){function e(a,b){return Oa(b)?function(b,c){return a(c,b)}:a}if(!I(a)||!c)return a;c=I(c)?c:[c];c=ad(c,function(a){var c=
!1,d=a||Aa;if(y(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var f=[],h=0;h<a.length;h++)f.push(a[h]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){O(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Oc(b,
a,c,d){function e(a,c){c=c?"-"+eb(c,"-"):"";d.removeClass(b,(a?sb:tb)+c);d.addClass(b,(a?tb:sb)+c)}var f=this,h=b.parent().controller("form")||ub,g=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;h.$addControl(f);b.addClass(Ka);e(!0);f.$addControl=function(a){wa(a.$name,"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Ma(k,a)};f.$setValidity=
function(a,b,c){var d=m[a];if(b)d&&(Ma(d,c),d.length||(g--,g||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),h.$setValidity(a,!0,f)));else{g||e(b);if(d){if(-1!=cb(d,c))return}else m[a]=d=[],g++,e(!1,a),h.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ka);d.addClass(b,vb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.removeClass(b,vb);d.addClass(b,Ka);f.$dirty=!1;f.$pristine=!0;r(k,function(a){a.$setPristine()})}}function ma(b,
a,c,d){b.$setValidity(a,c);return c?d:s}function de(b,a,c){var d=c.prop("validity");X(d)&&(c=function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)},b.$parsers.push(c),b.$formatters.push(c))}function Za(b,a,c,d,e,f){var h=a.prop("validity");if(!e.android){var g=!1;a.on("compositionstart",function(a){g=!0});a.on("compositionend",function(){g=!1;m()})}var m=function(){if(!g){var e=a.val();Oa(c.ngTrim||"T")&&(e=ca(e));if(d.$viewValue!==
e||h&&""===e&&!h.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",m);else{var k,l=function(){k||(k=f.defer(function(){m();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||l()});if(e.hasEvent("paste"))a.on("paste cut",l)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return ma(d,
"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw F("ngPattern")("noregexp",n,e,fa(a));return ma(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=R(c.ngMinlength);e=function(a){return ma(d,"minlength",d.$isEmpty(a)||a.length>=q,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=R(c.ngMaxlength);e=function(a){return ma(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);
d.$formatters.push(e)}}function wb(b,a){return function(c){var d;return na(c)?c:y(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:0,MM:1,dd:1,HH:0,mm:0},r(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function $a(b,a,c,d){return function(e,f,h,g,m,k,l){Za(e,f,h,g,m,k);g.$parsers.push(function(d){if(g.$isEmpty(d))return g.$setValidity(b,!0),null;if(a.test(d))return g.$setValidity(b,!0),c(d);g.$setValidity(b,!1);return s});g.$formatters.push(function(a){return na(a)?
l("date")(a,d):""});h.min&&(e=function(a){var b=g.$isEmpty(a)||c(a)>=c(h.min);g.$setValidity("min",b);return b?a:s},g.$parsers.push(e),g.$formatters.push(e));h.max&&(e=function(a){var b=g.$isEmpty(a)||c(a)<=c(h.max);g.$setValidity("max",b);return b?a:s},g.$parsers.push(e),g.$formatters.push(e))}}function Pb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a){var d=h(b||"");g?ta(b,g)||e.$updateClass(d,h(g)):e.$addClass(d)}g=ba(b)}
function h(a){if(I(a))return a.join(" ");if(X(a)){var b=[];r(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var g;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var g=d&1;if(g!==f&1){var n=h(c.$eval(e[b]));g===a?e.$addClass(n):e.$removeClass(n)}})}}}}var P=function(b){return y(b)?b.toLowerCase():b},$d=Object.prototype.hasOwnProperty,Ja=function(b){return y(b)?b.toUpperCase():b},Q,z,Da,ua=[].slice,ee=[].push,Ba=Object.prototype.toString,
Na=F("ng"),Ca=D.angular||(D.angular={}),Ua,Ha,ia=["0","0","0"];Q=R((/msie (\d+)/.exec(P(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=R((/trident\/.*; rv:(\d+)/.exec(P(navigator.userAgent))||[])[1]));x.$inject=[];Aa.$inject=[];var ca=function(){return String.prototype.trim?function(b){return y(b)?b.trim():b}:function(b){return y(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ha=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ja(b.scopeName+":"+b.nodeName):b.nodeName}:
function(b){return b.nodeName?b.nodeName:b[0].nodeName};var dd=/[A-Z]/g,fe={full:"1.3.0-beta.1",major:1,minor:3,dot:0,codeName:"retractable-eyebrow"},Ra=S.cache={},fb=S.expando="ng-"+(new Date).getTime(),hd=1,Pc=D.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Gb=D.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||
{}};var fd=/([\:\-\_]+(.))/g,gd=/^moz([A-Z])/,Db=F("jqLite"),Ga=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(D).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:ee,sort:[].sort,splice:[].splice},jb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(b){jb[P(b)]=b});var kc={};r("input select option textarea button form details".split(" "),function(b){kc[Ja(b)]=!0});r({data:gc,inheritedData:ib,scope:function(b){return z(b).data("$scope")||ib(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z(b).data("$isolateScope")||z(b).data("$isolateScopeNoTemplate")},controller:hc,injector:function(b){return ib(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Hb,css:function(b,a,c){a=Qa(a);if(v(c))b.style[a]=
c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=P(a);if(jb[d])if(v(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||x).specified?d:s;else if(v(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(v(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];
if(C(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(C(a)){if("SELECT"===Ha(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(C(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ea(d[c]);b.innerHTML=a},empty:ic},function(b,a){S.prototype[a]=function(a,d){var e,f;if(b!==ic&&(2==b.length&&
b!==Hb&&b!==hc?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===gc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var h=0;h<f;h++){var g=b(this[h],a,d);e=e?e+g:g}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});r({removeData:ec,dealoc:Ea,on:function a(c,d,e,f){if(v(f))throw Db("onargs");var h=ja(c,"events"),g=ja(c,"handle");h||ja(c,"events",h={});g||ja(c,"handle",g=id(c,h));r(d.split(" "),function(d){var f=h[d];
if(!f){if("mouseenter"==d||"mouseleave"==d){var l=U.body.contains||U.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};h[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||g(a,d)})}else Pc(c,
d,g),h[d]=[];f=h[d]}f.push(e)})},off:fc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ea(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},
prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ea(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:hb,removeClass:gb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;C(f)&&(f=!Hb(a,c));(f?hb:gb)(a,c)})},parent:function(a){return(a=
a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Fb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:x,stopPropagation:x}];r(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){S.prototype[c]=function(c,e,f){for(var h,g=0;g<this.length;g++)C(h)?
(h=a(this[g],c,e,f),v(h)&&(h=z(h))):Eb(h,a(this[g],c,e,f));return v(h)?h:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});Sa.prototype={put:function(a,c){this[Fa(a)]=c},get:function(a){return this[Fa(a)]},remove:function(a){var c=this[a=Fa(a)];delete this[a];return c}};var kd=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ld=/,/,md=/^\s*(_?)(\S+?)\1\s*$/,jd=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=F("$injector"),ge=F("$animate"),he=["$provide",function(a){this.$$selectors={};this.register=
function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw ge("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,h,g){h?h.after(a):(c&&c[0]||(c=h.parent()),c.append(a));g&&d(g)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,g){this.enter(a,c,d,g)},addClass:function(a,
c,h){c=y(c)?c:I(c)?c.join(" "):"";r(a,function(a){hb(a,c)});h&&d(h)},removeClass:function(a,c,h){c=y(c)?c:I(c)?c.join(" "):"";r(a,function(a){gb(a,c)});h&&d(h)},setClass:function(a,c,h,g){r(a,function(a){hb(a,c);gb(a,h)});g&&d(g)},enabled:x}}]}],ha=F("$compile");mc.$inject=["$provide","$$sanitizeUriProvider"];var td=/^(x[\:\-_]|data[\:\-_])/i,tc=F("$interpolate"),ie=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Ed={http:80,https:443,ftp:21},Lb=F("$location");yc.prototype=Mb.prototype=xc.prototype={$$html5:!1,
$$replace:!1,absUrl:ob("$$absUrl"),url:function(a,c){if(C(a))return this.$$url;var d=ie.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:ob("$$protocol"),host:ob("$$host"),port:ob("$$port"),path:zc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(y(a))this.$$search=$b(a);else if(X(a))this.$$search=a;else throw Lb("isrcharg");break;
default:C(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:zc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=F("$parse"),Cc={},qa,La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:x,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return v(d)?v(e)?d+e:d:v(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(v(d)?d:0)-(v(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,
c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":x,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,
c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},je={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ob=function(a){this.options=a};Ob.prototype={constructor:Ob,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);
else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=
this.ch+this.peek(),e=d+this.peek(2),f=La[this.ch],h=La[d],g=La[e];g?(this.tokens.push({index:this.index,text:e,fn:g}),this.index+=3):h?(this.tokens.push({index:this.index,text:d,fn:h}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},
peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=v(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ya("lexerr",
a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},
readIdent:function(){for(var a=this,c="",d=this.index,e,f,h,g;this.index<this.text.length;){g=this.text.charAt(this.index);if("."===g||this.isIdent(g)||this.isNumber(g))"."===g&&(e=this.index),c+=g;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){g=this.text.charAt(f);if("("===g){h=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(g))f++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=La[c],d.json=La[c];else{var m=Bc(c,this.options,this.text);d.fn=
t(function(a,c){return m(a,c)},{assign:function(d,e){return pb(d,c,e,a.text,a.options)}})}this.tokens.push(d);h&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:h,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=this.text.charAt(this.index),e=e+h;if(f)"u"===h?(h=this.text.substring(this.index+1,this.index+5),h.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+h+"]"),this.index+=
4,d+=String.fromCharCode(parseInt(h,16))):d=(f=je[h])?d+f:d+h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=h}this.index++}this.throwError("Unterminated quote",c)}};var Ya=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Ya.ZERO=function(){return 0};Ya.prototype={constructor:Ya,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=
this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||
this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},peek:function(a,
c,d,e){if(0<this.tokens.length){var f=this.tokens[0],h=f.text;if(h===a||h===c||h===d||h===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return t(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return t(function(e,f){return a(e,
f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return t(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var h=a[f];h&&(e=h(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,
c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,g){g=[g];for(var m=0;m<d.length;m++)g.push(d[m](a,e));return c.apply(a,g)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",
d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());
return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,
c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Ya.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Bc(d,this.options,this.text);return t(function(c,d,g){return e(g||a(c,d))},{assign:function(e,h,g){return pb(a(e,g),d,h,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return t(function(e,
f){var h=a(e,f),g=d(e,f),m;if(!h)return s;(h=Xa(h[g],c.text))&&(h.then&&c.options.unwrapPromises)&&(m=h,"$$v"in h||(m.$$v=s,m.then(function(a){m.$$v=a})),h=h.$$v);return h},{assign:function(e,f,h){var g=d(e,h);return Xa(a(e,h),c.text)[g]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,h){for(var g=[],m=c?c(f,h):f,k=0;k<d.length;k++)g.push(d[k](f,h));k=a(f,h,m)||x;Xa(m,e.text);
Xa(k,e.text);g=k.apply?k.apply(m,g):k(g[0],g[1],g[2],g[3],g[4]);return Xa(g,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return t(function(c,d){for(var h=[],g=0;g<a.length;g++)h.push(a[g](c,d));return h},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),
d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return t(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Nb={},ra=F("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},W=U.createElement("a"),Ec=xa(D.location.href,!0);Fc.$inject=["$provide"];Gc.$inject=["$locale"];Ic.$inject=["$locale"];var Lc=".",ce={yyyy:Z("FullYear",
4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:rb("Month"),MMM:rb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:rb("Day"),EEE:rb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(qb(Math[0<a?"floor":"ceil"](a/60),
2)+qb(Math.abs(a%60),2))},ww:Nc(2),w:Nc(1)},be=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,ae=/^\-?\d+$/;Hc.$inject=["$locale"];var Yd=$(P),Zd=$(Ja);Jc.$inject=["$parse"];var ke=$({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(U.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ba.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Qb={};r(jb,function(a,c){if("multiple"!=a){var d=ka("ng-"+c);Qb[d]=function(){return{priority:100,link:function(a,f,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=ka("ng-"+a);Qb[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===Ba.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(a){a&&(f.$set(g,a),Q&&h&&e.prop(h,f[g]))})}}}});
var ub={$addControl:x,$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x};Oc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,h){if(!f.action){var g=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Pc(e[0],"submit",g);e.on("$destroy",function(){c(function(){Gb(e[0],"submit",g)},0,!1)})}var m=e.parent().controller("form"),k=f.name||
f.ngForm;k&&pb(a,k,h,k);if(m)e.on("$destroy",function(){m.$removeControl(h);k&&pb(a,k,s,k);t(h,ub)})}}}}}]},le=Qc(),me=Qc(!0),ne=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,oe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,pe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc=/^(\d{4})-(\d{2})-(\d{2})$/,Sc=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Rb=/^(\d{4})-W(\d\d)$/,Tc=/^(\d{4})-(\d\d)$/,Uc=/^(\d\d):(\d\d)$/,Vc={text:Za,date:$a("date",Rc,wb(Rc,["yyyy",
"MM","dd"]),"yyyy-MM-dd"),"datetime-local":$a("datetimelocal",Sc,wb(Sc,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:$a("time",Uc,wb(Uc,["HH","mm"]),"HH:mm"),week:$a("week",Rb,function(a){if(na(a))return a;if(y(a)){Rb.lastIndex=0;var c=Rb.exec(a);if(c){a=+c[1];var d=+c[2],c=Mc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:$a("month",Tc,wb(Tc,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){Za(a,c,d,e,f,h);e.$parsers.push(function(a){var c=e.$isEmpty(a);
if(c||pe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});de(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ma(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ma(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ma(e,
"number",e.$isEmpty(a)||yb(a),a)})},url:function(a,c,d,e,f,h){Za(a,c,d,e,f,h);a=function(a){return ma(e,"url",e.$isEmpty(a)||ne.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,h){Za(a,c,d,e,f,h);a=function(a){return ma(e,"email",e.$isEmpty(a)||oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){C(d.name)&&c.attr("name",ab());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=
d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,h=d.ngFalseValue;y(f)||(f=!0);y(h)||(h=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:h})},hidden:x,button:x,submit:x,reset:x,file:x},Wc=["$browser","$sniffer","$filter",function(a,c,d){return{restrict:"E",
require:"?ngModel",link:function(e,f,h,g){g&&(Vc[P(h.type)]||Vc.text)(e,f,h,g,c,a,d)}}}],tb="ng-valid",sb="ng-invalid",Ka="ng-pristine",vb="ng-dirty",qe=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,h){function g(a,c){c=c?"-"+eb(c,"-"):"";h.removeClass(e,(a?sb:tb)+c);h.addClass(e,(a?tb:sb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=
!1;this.$name=d.name;var m=f(d.ngModel),k=m.assign;if(!k)throw F("ngModel")("nonassign",d.ngModel,fa(e));this.$render=x;this.$isEmpty=function(a){return C(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||ub,n=0,q=this.$error={};e.addClass(Ka);g(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(g(!0),this.$valid=!0,this.$invalid=!1)):(g(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,g(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;
this.$pristine=!0;h.removeClass(e,vb);h.addClass(e,Ka)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,h.removeClass(e,Ka),h.addClass(e,vb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=m(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==
c&&(p.$viewValue=c,p.$render())}return c})}],re=function(){return{require:["ngModel","^?form"],controller:qe,link:function(a,c,d,e){var f=e[0],h=e[1]||ub;h.$addControl(f);a.$on("$destroy",function(){h.$removeControl(f)})}}},se=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Xc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},te=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!C(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(ca(a))});return c}});e.$formatters.push(function(a){return I(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},ue=/^(true|false|\d+)$/,ve=function(){return{priority:100,
compile:function(a,c){return ue.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},we=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),xe=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ye=["$sce","$parse",
function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var h=c(f.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){e.html(a.getTrustedHtml(h(d))||"")})}}],ze=Pb("",!0),Ae=Pb("Odd",0),Be=Pb("Even",1),Ce=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),De=[function(){return{scope:!0,controller:"@",priority:500}}],Yc={};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ka("ng-"+a);Yc[c]=["$parse",function(d){return{compile:function(e,f){var h=d(f[c]);return function(c,d,e){d.on(P(a),function(a){c.$apply(function(){h(c,{$event:a})})})}}}}]});var Ee=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,m,k;c.$watch(e.ngIf,function(f){Oa(f)?m||(m=c.$new(),h(m,function(c){c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),
k=null),m&&(m.$destroy(),m=null),g&&(k=Bb(g.clone),a.leave(k,function(){k=null}),g=null))})}}}],Fe=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ca.noop,compile:function(h,g){var m=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(g,h,p,r,s){var t=0,u,z,J,w=function(){z&&(z.remove(),z=null);u&&(u.$destroy(),u=null);J&&(e.leave(J,function(){z=null}),z=J,J=null)};g.$watch(f.parseAsResourceUrl(m),
function(f){var m=function(){!v(l)||l&&!g.$eval(l)||d()},p=++t;f?(a.get(f,{cache:c}).success(function(a){if(p===t){var c=g.$new();r.template=a;a=s(c,function(a){w();e.enter(a,null,h,m)});u=c;J=a;u.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){p===t&&w()}),g.$emit("$includeContentRequested")):(w(),r.template=null)})}}}}],Ge=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],He=sa({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Ie=sa({terminal:!0,priority:1E3}),Je=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,h){var g=h.count,m=h.$attr.when&&f.attr(h.$attr.when),k=h.offset||0,l=e.$eval(m)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(h,function(a,c){s.test(c)&&(l[P(c.replace("when","").replace("Minus","-"))]=f.attr(h.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+g+"-"+k+p))});e.$watch(function(){var c=
parseFloat(e.$eval(g));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],Ke=["$parse","$animate",function(a,c){var d=F("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,h,g,m){var k=h.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,s,t,v,u={$id:Fa};if(!l)throw d("iexp",k);h=l[1];g=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){v&&(u[v]=a);u[t]=c;u.$index=d;return n(e,
u)}):(p=function(a,c){return Fa(c)},s=function(a){return a});l=h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",h);t=l[3]||l[1];v=l[2];var H={};e.$watchCollection(g,function(a){var g,h,l=f[0],n,u={},y,N,x,C,F,K,I=[];if(xb(a))F=a,n=q||p;else{n=q||s;F=[];for(x in a)a.hasOwnProperty(x)&&"$"!=x.charAt(0)&&F.push(x);F.sort()}y=F.length;h=I.length=F.length;for(g=0;g<h;g++)if(x=a===F?g:F[g],C=a[x],C=n(x,C,g),wa(C,"`track by` id"),H.hasOwnProperty(C))K=H[C],delete H[C],u[C]=
K,I[g]=K;else{if(u.hasOwnProperty(C))throw r(I,function(a){a&&a.scope&&(H[a.id]=a)}),d("dupes",k,C);I[g]={id:C};u[C]=!1}for(x in H)H.hasOwnProperty(x)&&(K=H[x],g=Bb(K.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),K.scope.$destroy());g=0;for(h=F.length;g<h;g++){x=a===F?g:F[g];C=a[x];K=I[g];I[g-1]&&(l=I[g-1].clone[I[g-1].clone.length-1]);if(K.scope){N=K.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);K.clone[0]!=n&&c.move(Bb(K.clone),null,z(l));l=K.clone[K.clone.length-1]}else N=e.$new();
N[t]=C;v&&(N[v]=x);N.$index=g;N.$first=0===g;N.$last=g===y-1;N.$middle=!(N.$first||N.$last);N.$odd=!(N.$even=0===(g&1));K.scope||m(N,function(a){a[a.length++]=U.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,z(l));l=a;K.scope=N;K.clone=a;u[K.id]=K})}H=u})}}}],Le=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Oa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],Me=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Oa(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],Ne=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Oe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h,g,m,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q=k.length;if(0<q){if(m){for(n=0;n<q;n++)m[n].remove();m=null}m=[];for(n=0;n<q;n++){var p=g[n];k[n].$destroy();m[n]=p;a.leave(p,function(){m.splice(n,1);0===m.length&&(m=null)})}}g=
[];k=[];if(h=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(h,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;g.push(c);a.enter(c,e.parent(),e)})})})}}}],Pe=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Qe=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:f,element:c})}}),Re=sa({link:function(a,c,d,e,f){if(!f)throw F("ngTransclude")("orphan",fa(c));f(function(a){c.empty();c.append(a)})}}),Se=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=F("ngOptions"),Ue=$({terminal:!0}),Ve=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:x};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){wa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=x})}],link:function(e,h,g,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&x.prop("selected",!0)):C(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);r(c.find("option"),
function(c){c.selected=v(a.get(c.value))})};a.$watch(function(){ta(e,d.$viewValue)||(e=ba(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,y;t=g.$modelValue;y=z(e)||[];var A=n?Sb(y):y,C,B,D;B={};s=!1;var L,J;if(p)if(w&&I(t))for(s=new Sa([]),D=0;D<t.length;D++)B[m]=t[D],s.put(w(e,B),t[D]);else s=new Sa(t);for(D=0;C=A.length,
D<C;D++){k=D;if(n){k=A[D];if("$"===k.charAt(0))continue;B[n]=k}B[m]=y[k];d=q(e,B)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=v(s.remove(w?w(e,B):r(e,B))):(w?(d={},d[m]=t,d=w(e,d)===w(e,B)):d=t===r(e,B),s=s||d);L=l(e,B);L=v(L)?L:"";k.push({id:w?w(e,B):n?A[D]:D,label:L,selected:d})}p||(E||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));B=0;for(A=c.length;B<A;B++){d=c[B];k=a[d];x.length<=B?(t={element:F.clone().attr("label",d),label:k.label},y=[t],x.push(y),
f.append(t.element)):(y=x[B],t=y[0],t.label!=d&&t.element.attr("label",t.label=d));L=null;D=0;for(C=k.length;D<C;D++)s=k[D],(d=y[D+1])?(L=d.element,d.label!==s.label&&L.text(d.label=s.label),d.id!==s.id&&L.val(d.id=s.id),L[0].selected!==s.selected&&L.prop("selected",d.selected=s.selected)):(""===s.id&&E?J=E:(J=u.clone()).val(s.id).attr("selected",s.selected).text(s.label),y.push({element:J,label:s.label,id:s.id,selected:s.selected}),L?L.after(J):t.element.append(J),L=J);for(D++;y.length>D;)y.pop().element.remove()}for(;x.length>
B;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Te("iexp",t,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],q=c(k[3]||""),r=c(k[2]?k[1]:m),z=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];E&&(a(E)(e),E.removeClass("ng-scope"),E.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=z(e)||[],d={},h,k,l,q,t,v,u;if(p)for(k=[],q=0,v=x.length;q<v;q++)for(a=x[q],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&
(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(r(e,d))}}else if(h=f.val(),"?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=c[u],w(e,d)==h){k=r(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=r(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var q=m[0];m=m[1];var p=g.multiple,t=g.ngOptions,E=!1,x,u=z(U.createElement("option")),F=z(U.createElement("optgroup")),y=u.clone();g=0;for(var w=h.children(),D=w.length;g<D;g++)if(""===w[g].value){x=E=w.eq(g);break}q.init(m,E,
y);p&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,h,m):p?l(e,h,m):k(e,h,m,q)}}}}],We=["$interpolate",function(a){var c={addOption:x,removeOption:x};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):
l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],Xe=$({restrict:"E",terminal:!1});(Da=D.jQuery)?(z=Da,t(Da.fn,{scope:Ga.scope,isolateScope:Ga.isolateScope,controller:Ga.controller,injector:Ga.injector,inheritedData:Ga.inheritedData}),Cb("remove",!0,!0,!1),Cb("empty",!1,!1,!1),Cb("html",!1,!1,!0)):z=S;Ca.element=z;(function(a){t(a,{bootstrap:bc,copy:ba,extend:t,equals:ta,element:z,forEach:r,injector:cc,noop:x,bind:db,toJson:oa,fromJson:Yb,identity:Aa,isUndefined:C,isDefined:v,
isString:y,isFunction:O,isObject:X,isNumber:yb,isElement:$c,isArray:I,version:fe,isDate:na,lowercase:P,uppercase:Ja,callbacks:{counter:0},$$minErr:F,$$csp:Xb});Ua=ed(D);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",Dd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Od});a.provider("$compile",mc).directive({a:ke,input:Wc,textarea:Wc,form:le,script:Se,select:Ve,style:Xe,option:We,ngBind:we,ngBindHtml:ye,ngBindTemplate:xe,ngClass:ze,ngClassEven:Be,ngClassOdd:Ae,
ngCloak:Ce,ngController:De,ngForm:me,ngHide:Me,ngIf:Ee,ngInclude:Fe,ngInit:He,ngNonBindable:Ie,ngPluralize:Je,ngRepeat:Ke,ngShow:Le,ngStyle:Ne,ngSwitch:Oe,ngSwitchWhen:Pe,ngSwitchDefault:Qe,ngOptions:Ue,ngTransclude:Re,ngModel:re,ngList:te,ngChange:se,required:Xc,ngRequired:Xc,ngValue:ve}).directive({ngInclude:Ge}).directive(Qb).directive(Yc);a.provider({$anchorScroll:nd,$animate:he,$browser:qd,$cacheFactory:rd,$controller:ud,$document:vd,$exceptionHandler:wd,$filter:Fc,$interpolate:Bd,$interval:Cd,
$http:xd,$httpBackend:zd,$location:Fd,$log:Gd,$parse:Jd,$rootScope:Nd,$q:Kd,$sce:Rd,$sceDelegate:Qd,$sniffer:Sd,$templateCache:sd,$timeout:Td,$window:Ud,$$rAF:Md,$$asyncCallback:od})}])})(Ca);z(U).ready(function(){cd(U,bc)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map
;
define("angular", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.angular;
    };
}(this)));

/*
 * Toastr
 * Version 2.0.1
 * Copyright 2012 John Papa and Hans Fjällemark.  
 * All Rights Reserved.  
 * Use, reproduction, distribution, and modification of this code is subject to the terms and 
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Author: John Papa and Hans Fjällemark
 * Project: https://github.com/CodeSeven/toastr
 */
define('toastr',["jquery"], function() {
	var version = '2.0.1';
	var $container;
	var listener;
	var toastId = 0;
	var toastType = {
		error: 'error',
		info: 'info',
		success: 'success',
		warning: 'warning'
	};

	var toastr = {
		clear: clear,
		error: error,
		getContainer: getContainer,
		info: info,
		options: {},
		subscribe: subscribe,
		success: success,
		version: version,
		warning: warning
	};

	return toastr;

	//#region Accessible Methods
	function error(message, title, optionsOverride) {
		return notify({
			type: toastType.error,
			iconClass: getOptions().iconClasses.error,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		});
	}

	function info(message, title, optionsOverride) {
		return notify({
			type: toastType.info,
			iconClass: getOptions().iconClasses.info,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		});
	}

	function subscribe(callback) {
		listener = callback;
	}

	function success(message, title, optionsOverride) {
		return notify({
			type: toastType.success,
			iconClass: getOptions().iconClasses.success,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		});
	}

	function warning(message, title, optionsOverride) {
		return notify({
			type: toastType.warning,
			iconClass: getOptions().iconClasses.warning,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		});
	}

	function clear($toastElement) {
		var options = getOptions();
		if (!$container) { getContainer(options); }
		if ($toastElement && $(':focus', $toastElement).length === 0) {
			$toastElement[options.hideMethod]({
				duration: options.hideDuration,
				easing: options.hideEasing,
				complete: function () { removeToast($toastElement); }
			});
			return;
		}
		if ($container.children().length) {
			$container[options.hideMethod]({
				duration: options.hideDuration,
				easing: options.hideEasing,
				complete: function () { $container.remove(); }
			});
		}
	}
	//#endregion

	//#region Internal Methods

	function getDefaults() {
		return {
			tapToDismiss: true,
			toastClass: 'toast',
			containerId: 'toast-container',
			debug: false,

			showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
			showDuration: 300,
			showEasing: 'swing', //swing and linear are built into jQuery
			onShown: undefined,
			hideMethod: 'fadeOut',
			hideDuration: 1000,
			hideEasing: 'swing',
			onHidden: undefined,

			extendedTimeOut: 1000,
			iconClasses: {
				error: 'toast-error',
				info: 'toast-info',
				success: 'toast-success',
				warning: 'toast-warning'
			},
			iconClass: 'toast-info',
			positionClass: 'toast-top-right',
			timeOut: 5000, // Set timeOut and extendedTimeout to 0 to make it sticky
			titleClass: 'toast-title',
			messageClass: 'toast-message',
			target: 'body',
			closeHtml: '<button>&times;</button>',
			newestOnTop: true
		};
	}

	function publish(args) {
		if (!listener) {
			return;
		}
		listener(args);
	}

	function notify(map) {
		var
			options = getOptions(),
			iconClass = map.iconClass || options.iconClass;

		if (typeof (map.optionsOverride) !== 'undefined') {
			options = $.extend(options, map.optionsOverride);
			iconClass = map.optionsOverride.iconClass || iconClass;
		}

		toastId++;

		$container = getContainer(options);
		var
			intervalId = null,
			$toastElement = $('<div/>'),
			$titleElement = $('<div/>'),
			$messageElement = $('<div/>'),
			$closeElement = $(options.closeHtml),
			response = {
				toastId: toastId,
				state: 'visible',
				startTime: new Date(),
				options: options,
				map: map
			};

		if (map.iconClass) {
			$toastElement.addClass(options.toastClass).addClass(iconClass);
		}

		if (map.title) {
			$titleElement.append(map.title).addClass(options.titleClass);
			$toastElement.append($titleElement);
		}

		if (map.message) {
			$messageElement.append(map.message).addClass(options.messageClass);
			$toastElement.append($messageElement);
		}

		if (options.closeButton) {
			$closeElement.addClass('toast-close-button');
			$toastElement.prepend($closeElement);
		}

		$toastElement.hide();
		if (options.newestOnTop) {
			$container.prepend($toastElement);
		} else {
			$container.append($toastElement);
		}


		$toastElement[options.showMethod](
			{ duration: options.showDuration, easing: options.showEasing, complete: options.onShown }
		);
		if (options.timeOut > 0) {
			intervalId = setTimeout(hideToast, options.timeOut);
		}

		$toastElement.hover(stickAround, delayedhideToast);
		if (!options.onclick && options.tapToDismiss) {
			$toastElement.click(hideToast);
		}
		if (options.closeButton && $closeElement) {
			$closeElement.click(function (event) {
				event.stopPropagation();
				hideToast(true);
			});
		}

		if (options.onclick) {
			$toastElement.click(function () {
				options.onclick();
				hideToast();
			});
		}

		publish(response);

		if (options.debug && console) {
			console.log(response);
		}

		return $toastElement;

		function hideToast(override) {
			if ($(':focus', $toastElement).length && !override) {
				return;
			}
			return $toastElement[options.hideMethod]({
				duration: options.hideDuration,
				easing: options.hideEasing,
				complete: function () {
					removeToast($toastElement);
					if (options.onHidden) {
						options.onHidden();
					}
					response.state = 'hidden';
					response.endTime = new Date(),
					publish(response);
				}
			});
		}

		function delayedhideToast() {
			if (options.timeOut > 0 || options.extendedTimeOut > 0) {
				intervalId = setTimeout(hideToast, options.extendedTimeOut);
			}
		}

		function stickAround() {
			clearTimeout(intervalId);
			$toastElement.stop(true, true)[options.showMethod](
				{ duration: options.showDuration, easing: options.showEasing }
			);
		}
	}
	function getContainer(options) {
		if (!options) { options = getOptions(); }
		$container = $('#' + options.containerId);
		if ($container.length) {
			return $container;
		}
		$container = $('<div/>')
			.attr('id', options.containerId)
			.addClass(options.positionClass);
		$container.appendTo($(options.target));
		return $container;
	}

	function getOptions() {
		return $.extend({}, getDefaults(), toastr.options);
	}

	function removeToast($toastElement) {
		if (!$container) { $container = getContainer(); }
		if ($toastElement.is(':visible')) {
			return;
		}
		$toastElement.remove();
		$toastElement = null;
		if ($container.children().length === 0) {
			$container.remove();
		}
	}
	//#endregion
});


/*
	Maps string representation of common
	JS datatypes to type name
 */
var class2type, _;

class2type = {
  "[object Boolean]": "boolean",
  "[object Number]": "number",
  "[object String]": "string",
  "[object Function]": "function",
  "[object Array]": "array",
  "[object Date]": "date",
  "[object RegExp]": "regexp",
  "[object Object]": "object"
};


/* 
	A shim to enable micro precision timer if available
	Otherwise, fallbacks to Date.now
 */

if (typeof window !== "undefined" && window !== null) {
  if (window.performance == null) {
    window.performance = Date;
  }
}

_ = {
  toString: Function.prototype.call.bind(Object.prototype.toString),
  hasOwn: Function.prototype.call.bind(Object.prototype.hasOwnProperty),
  push: Function.prototype.call.bind(Array.prototype.push),
  slice: Function.prototype.call.bind(Array.prototype.slice),
  filter: Function.prototype.call.bind(Array.prototype.filter),
  splice: Function.prototype.call.bind(Array.prototype.splice),
  indexOf: Function.prototype.call.bind(Array.prototype.indexOf),
  trim: Function.prototype.call.bind(String.prototype.trim),
  logp: function(obj) {
    var k, str, v;
    str = "";
    for (k in obj) {
      v = obj[k];
      str += "LOG:" + k + " = " + (JSON.stringify(v, null, " ")) + "\n";
    }
    return console.log(str);
  },

  /*
  		Useful and common meta helpers
   */
  type: function(obj) {
    if (obj == null) {
      return String(obj);
    }
    return class2type[_.toString(obj)] || "object";
  },
  isPlainObject: function(obj) {
    var e, key, _i, _len;
    if ((obj != null) || _.type(obj) !== "object" || (obj.nodeType != null)) {
      return false;
    }
    try {
      if ((obj.constructor != null) && !_.hasOwn(obj, "constructor") && !_.hasOwn(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
    } catch (_error) {
      e = _error;
      return false;
    }
    key = void 0;
    for (_i = 0, _len = obj.length; _i < _len; _i++) {
      key = obj[_i];
      continue;
    }
    return (key === void 0) || _.hasOwn(obj, key);
  },
  isFunction: function(obj) {
    return _.type(obj) === "function";
  },
  isArray: Array.isArray || function(obj) {
    return _.type(obj) === "array";
  },
  isWindow: function(obj) {
    return (obj != null) && obj === obj.window;
  },
  isNumeric: function(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj);
  },

  /*
  		Array helpers ahead
   */
  chunk: function(arr, chunkSize) {
    var i;
    i = 0;
    return ((function() {
      var _results;
      _results = [];
      while (i < arr.length) {
        _results.push(arr.slice(i, i += chunkSize));
      }
      return _results;
    })());
  },
  findOne: function(arr, key, val) {
    return _.find(arr, key, val)[0];
  },
  find: function(arr, key, val) {
    return arr.filter(function(el) {
      var prop, pval;
      if (_.type(key) !== "object") {
        return el[key] === val;
      }
      for (prop in key) {
        pval = key[prop];
        if (el[prop] !== pval) {
          return false;
        }
      }
      return true;
    });
  },
  findOneAndRemove: function(arr, key, val) {
    var ind, t;
    t = _.findOne(arr, key, val);
    ind = arr.indexOf(arr, t);
    return arr.splice(arr, ind, 1);
  },
  remove: function(arr, t) {
    var ind;
    ind = arr.indexOf(arr, t);
    return arr.splice(arr, ind, 1);
  },
  flatten: function(arr, level) {
    var elem, out, _i, _len;
    out = [];
    if (level === 0) {
      return arr;
    }
    level--;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      elem = arr[_i];
      if (_.isArray(elem)) {
        out = out.concat(flatten(elem, level));
      } else {
        out.push(elem);
      }
    }
    return out;
  },

  /*
  		Ripped off jquery
  		Extend or merge one object with another
  		Goes deep too.
   */
  extend: function() {
    var clone, copy, copyIsArray, deep, i, length, name, options, src, target;
    target = arguments[0] || {};
    length = arguments.length;
    deep = false;
    i = 1;
    if (_.type(target) === "boolean") {
      deep = target;
      target = arguments[1] || {};
      i = 2;
    }
    if (_.type(target) !== "object" && !_.isFunction(target)) {
      target = {};
    }
    if (length === i) {
      target = this;
      --i;
    }
    while (i < length) {
      if ((options = arguments[i++]) == null) {
        continue;
      }
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep && copy && (_.isPlainObject(copy) || (copyIsArray = _.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && _.isArray(src) ? src : [];
          } else {
            clone = src && _.isPlainObject(src) ? src : {};
          }
          target[name] = _.extend(deep, clone, copy);
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
    return target;
  },
  groupBy: function(attrib, objArray) {
    var key, obj, out, _i, _len;
    out = {};
    for (_i = 0, _len = objArray.length; _i < _len; _i++) {
      obj = objArray[_i];
      if (obj[attrib] == null) {
        continue;
      }
      key = obj[attrib];
      out[key] || (out[key] = []);
      out[key].push(obj);
    }
    return out;
  },
  mixin: function(obj, mixincls) {
    var method, name;
    for (name in mixincls) {
      method = mixincls[name];
      obj[name] = method;
    }
    return obj;
  },
  include: function(cls, mixincls) {
    return _.mixin(cls.prototype, mixincls.prototype);
  },
  search: function(obj, filterfunc) {
    var key, val;
    if (_.isPlainObject(obj)) {
      return (function() {
        var _results;
        _results = [];
        for (key in obj) {
          val = obj[key];
          if (filterfunc(val)) {
            _results.push(val);
          }
        }
        return _results;
      })();
    } else if (_.isArray(obj)) {
      return obj.filter(filterfunc);
    } else {
      return null;
    }
  },
  lookup: function(obj, str, data) {
    var field, fields, nref, ref;
    fields = str.split(".");
    ref = obj;
    while (((field = fields.shift()) != null) && (ref != null)) {
      nref = ref[field];
      if (data == null) {
        ref = nref;
        continue;
      }
      if (fields.length === 0) {
        if (nref == null) {
          nref = ref[field] = {};
        }
        if (_.isPlainObject(data)) {
          nref = _.extend(true, ref[field], data);
        } else {
          nref = ref[field] = data;
        }
        return nref;
      }
      if (nref == null) {
        nref = ref[field] = {};
      }
      ref = nref;
    }
    return ref;
  },
  splay: function(objD, deep) {
    var key, paths, splayRec, val;
    if (deep == null) {
      deep = false;
    }
    paths = [];
    splayRec = function(obj, root) {
      var key, res, val;
      for (key in obj) {
        val = obj[key];
        if (_.isPlainObject(val)) {
          res = splayRec(val, "" + root + "." + key);
          if (deep) {
            paths.push(res);
          }
        } else {
          paths.push("" + root + "." + key);
        }
      }
      return root;
    };
    for (key in objD) {
      val = objD[key];
      if (_.isPlainObject(val)) {
        splayRec(val, "" + key);
      } else {
        paths.push(key);
      }
    }
    return paths;
  }
};

String.prototype.format = String.prototype.f = function() {
  var args, i, s;
  if (arguments[0] instanceof Array) {
    args = arguments[0];
  } else {
    args = arguments;
  }
  i = args.length;
  s = this;
  while (i--) {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), args[i]);
  }
  return s;
};

String.prototype.endsWith = function(str) {
  return this.lastIndexOf(str) + str.length === this.length;
};

String.prototype.startsWith = function(str) {
  return this.indexOf(str) === 0;
};

if (typeof define === "function" && (define.amd != null)) {
  define('util',[],function() {
    return window["_"] = _;
  });
} else if (typeof module !== "undefined" && (module.exports != null)) {
  module.exports = _;
} else {
  (global || window)["_"] = _;
}
;
define('capi',[], function() {
  return {
    login: "/login",
    logout: "/logout",
    tryLogin: "/isAuthenticated",
    registerCraftsman: "/user/registerCraftsman",
    registerCustomer: "/user/registerCustomer",
    createJob: "/job/new",
    updateJob: "/job/{0}/update",
    sendMessage: "/inbox/sendMessage",
    receivedMessages: "/inbox/received/{0}",
    sentMessages: "/inbox/sent/{0}",
    craftsmen: "/user/craftsmen/{0}",
    getPagedOpenJobs: "/job/list/{0}",
    getMyJobs: "/user/getMyJobs/{0}/{1}",
    getBiddedJobs: "/user/getBiddedJobs/{0}/{1}",
    bidOnJob: "job/{0}/bid",
    pickWinner: "job/{0}/pickawinner/{1}",
    getNotifications: "/user/getNotifications/{0}",
    rateJob: "/job/{0}/rateJob/{1}",
    updateProfile: "/user/update"
  };
});

define('factories/module',["angular"], function(ng) {
  return ng.module("app.factories", []);
});

var __slice = [].slice;

define('factories/common',["factories/module"], function(module) {
  module.factory("common", [
    "$http", "$q", "$rootScope", "$timeout", "config", "logger", function($http, $q, $rootScope, $timeout, config, logger, spinner) {
      var out;
      out = {};
      out.logger = logger;
      out.format = out.f = function() {
        var args, i, s;
        s = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        i = args.length;
        while (i--) {
          s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), args[i]);
        }
        return s;
      };
      out.get = function(url) {
        var defer;
        out.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        defer = $http.get(url);
        defer["finally"](function() {
          return out.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
        return defer;
      };
      out.activateController = function(promises, controllerId) {
        out.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        logger.log("Activating " + controllerId + " controller");
        return $q.all(promises).then(function(args) {
          var data;
          data = {
            controllerId: controllerId
          };
          logger.success("Controller " + controllerId + " activated");
          return out.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      out.broadcast = function() {
        return $rootScope.$broadcast.apply($rootScope, arguments);
      };
      return out;
    }
  ]);
  return module;
});

define('factories/logger',["factories/module"], function(module) {
  return module.factory("logger", [
    "$log", "config", function($log, config) {
      var logIt, out;
      $.extend(toastr.options, config.toastr);
      logIt = function(message, data, source, showToast, toastType) {
        var write;
        if (showToast == null) {
          showToast = true;
        }
        write = toastType === 'error' ? $log.error : $log.log;
        source = source ? '[' + source + '] ' : '';
        write(source, message, data);
        if (showToast) {
          if (toastType === 'error') {
            return toastr.error(message);
          } else if (toastType === 'warning') {
            return toastr.warning(message);
          } else if (toastType === 'success') {
            return toastr.success(message);
          } else {
            return toastr.info(message);
          }
        }
      };
      return out = {
        getLogFn: function(moduleId, fnName) {
          var fname;
          fname = fnName.toLowerCase();
          return out[fname];
        },
        log: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "info");
        },
        warning: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "warning");
        },
        error: function(message, data, source, showToast) {
          if ((message.statusText != null) && (message.responseText != null)) {
            message = "" + message.statusText + " - " + message.responseText;
          }
          return logIt(message, data, source, showToast, "error");
        },
        success: function(message, data, source, showToast) {
          return logIt(message, data, source, showToast, "success");
        }
      };
    }
  ]);
});

define('factories/config',["factories/module"], function(module) {
  return module.factory("config", function() {
    var config;
    config = {
      events: {
        ToggleSpinner: "ToggleSpinner"
      },
      toastr: {
        positionClass: "toast-bottom-right",
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 3000,
        "extendedTimeOut": 0
      },
      errorPrefix: "[CRAFTIA ERROR]",
      showErrors: true
    };
    return config;
  });
});

define('factories/dialog',["./module"], function(module) {
  return module.factory("dialog", [
    "$modal", function($modal) {
      var ModalController;
      ModalController = [
        "$scope", "$modalInstance", "options", function($scope, $modalInstance, _arg) {
          var cancelText, message, okText, onCancel, onOk, scope, template, title;
          template = _arg.template, message = _arg.message, title = _arg.title, okText = _arg.okText, cancelText = _arg.cancelText, onOk = _arg.onOk, onCancel = _arg.onCancel, scope = _arg.scope;
          $scope.scope = scope;
          $scope.title = title || "Title";
          $scope.message = message || "";
          $scope.okText = okText || "OK";
          $scope.cancelText = cancelText || "Cancel";
          $scope.template = template || "basic";
          $scope.ok = function() {
            $modalInstance.close("ok");
            console.log($scope.msgContent, $scope.emailTo);
            return typeof onOk === "function" ? onOk() : void 0;
          };
          return $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
            return typeof onCancel === "function" ? onCancel() : void 0;
          };
        }
      ];
      return {
        confirmationDialog: function(_arg) {
          var cancelText, message, modalOptions, okText, onCancel, onOk, scope, template, title;
          title = _arg.title, message = _arg.message, okText = _arg.okText, cancelText = _arg.cancelText, onOk = _arg.onOk, onCancel = _arg.onCancel, template = _arg.template, scope = _arg.scope;
          modalOptions = {
            templateUrl: "shared/templates/dialogs/basic.html",
            controller: ModalController,
            keyboard: true,
            resolve: {
              options: function() {
                return {
                  title: title,
                  message: message,
                  scope: scope,
                  okText: okText,
                  template: template,
                  cancelText: cancelText,
                  onOk: onOk,
                  onCancel: onCancel
                };
              }
            }
          };
          return $modal.open(modalOptions).result;
        },
        deleteDialog: function(itemName) {
          var message, title;
          title = "Confirm Delete";
          itemName || (itemName = "item");
          message = "Delete " + itemName + "?";
          return confirmationDialog({
            title: title,
            message: message
          });
        }
      };
    }
  ]);
});

define('factories/index',["factories/common", "factories/logger", "factories/config", "factories/dialog"], function() {});

define('controllers/module',["angular"], function(ng) {
  return ng.module("app.controllers", []);
});

define('controllers/shell',["controllers/module", "angular"], function(module, ng) {
  return module.controller("ShellCtrl", [
    "$scope", "$rootScope", "$http", "$state", "config", "appUser", function($scope, $rootScope, $http, $state, config, appUser) {
      $scope.busyMessage = "Loading...";
      $scope.isBusy = false;
      $scope.spinnerOptions = {
        radius: 40,
        lines: 7,
        length: 0,
        width: 30,
        speed: 1.7,
        corners: 1.0,
        trail: 100,
        color: "#F58A00"
      };
      $scope.$on("$viewContentLoaded", function() {
        return ng.element("[data-toggle=offcanvas]").on("click", function() {
          ng.element(".row-offcanvas").toggleClass("active");
          return ng.element(".showhide").toggle();
        });
      });
      $scope.toggleSpinner = function(val) {
        return $scope.isBusy = val;
      };
      $rootScope.$on("$locationChangeStart", function(event, next, curr) {
        return $scope.toggleSpinner(true);
      });
      $rootScope.$on("$locationChangeSuccess", function(event, next, curr) {
        return $scope.toggleSpinner(false);
      });
      return $rootScope.$on(config.events.ToggleSpinner, function(_, data) {
        console.log("TOGGLING SPINNER", data.show);
        return $scope.toggleSpinner(data.show);
      });
    }
  ]);
});

define('controllers/navigation',["controllers/module"], function(module) {
  return module.controller("NavCtrl", ["$scope", "$route", "$state", "$rootScope", function($scope, $element, $route, $state, $rootScope) {}]);
});

define('controllers/login',["./module"], function(module) {
  return module.controller("LoginCtrl", [
    "$scope", "$http", "$state", "cAPI", "appUser", "logger", function($scope, $http, $state, cAPI, appUser, logger) {
      $scope.loginDetails = {
        email: "",
        password: "",
        rememberme: false
      };
      return $scope.login = function() {
        return $http.post(cAPI.login, $scope.loginDetails).error((function(_this) {
          return function(err) {
            logger.error(err);
            return $state.transitionTo("anon");
          };
        })(this)).success((function(_this) {
          return function(data) {
            appUser.load(data);
            if (data.type === "Customer") {
              return $state.transitionTo("customer");
            } else if (data.type === "Craftsman") {
              return $state.transitionTo("craftsman");
            } else {
              return $state.transitionTo("anon");
            }
          };
        })(this));
      };
    }
  ]);
});

var __slice = [].slice;

define('controllers/cmodule',["angular"], function(ng) {
  var modules;
  modules = ng.module("app.customControllers", []);
  return function() {
    var Ctrl, controller, deps, name, otherDeps;
    Ctrl = arguments[0], otherDeps = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    deps = ["$scope", "cAPI", "logger", "$rootScope", "$state", "$http"].concat(otherDeps);
    name = Ctrl.name;
    deps.push(function() {
      var $http, $rootScope, $scope, $state, cAPI, dep, instance, k, logger, other, v, _i, _len, _ref;
      $scope = arguments[0], cAPI = arguments[1], logger = arguments[2], $rootScope = arguments[3], $state = arguments[4], $http = arguments[5], other = 7 <= arguments.length ? __slice.call(arguments, 6) : [];
      instance = new Ctrl;
      instance = $.extend(instance, {
        API: cAPI,
        state: $state,
        log: logger,
        http: $http,
        root: $rootScope,
        name: name
      });
      for (_i = 0, _len = otherDeps.length; _i < _len; _i++) {
        dep = otherDeps[_i];
        name = dep;
        if (dep[0] === "$") {
          name = dep.substr(1);
        }
        instance[name] = other.shift();
      }
      for (k in instance) {
        v = instance[k];
        if (typeof v === "funciton") {
          instance[k].bind(instance);
        }
      }
      _ref = Ctrl.prototype;
      for (k in _ref) {
        v = _ref[k];
        instance[k] = v;
        if (typeof v === "function") {
          instance[k].bind(instance);
        }
      }
      for (k in instance) {
        v = instance[k];
        $scope[k] = v;
      }
      $scope["scope"] = $scope;
      instance["scope"] = $scope;
      return instance;
    });
    controller = modules.controller(name, deps);
    return controller;
  };
});

define('controllers/anon',["./cmodule"], function(cmodule) {
  var AnonCtrl;
  AnonCtrl = (function() {
    function AnonCtrl() {
      this.slide = {
        images: ["img/carousel/Franchise-Handwerk.jpg"]
      };
    }

    return AnonCtrl;

  })();
  return (cmodule(AnonCtrl)).instance;
});

define('controllers/customerJobs',["./module"], function(module) {
  return module.controller("CustomerJobsCtrl", [
    "$scope", "$http", "$state", "$timeout", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, $timeout, API, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, bindRateClick, editJob, getPage, pickWinner, saveJob, sendMessage, showInfo, showPics, showProfile, showStars, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.jobStatus = "all";
      $scope.rateIndex = $scope.sizePerPage;
      $scope.mapContainer = "#gmaps-div-0";
      $scope.picsContainer = "#pics-div-0";
      $scope.infoContainer = "#info-div-0";
      $scope.profileContainer = "#profile-div-0";
      $scope.tempJob = {};
      $scope.editIndex = $scope.sizePerPage;
      bindRateClick = function(index) {
        $scope.rateIndex = index;
        return $("#rate-div-" + index).bind('rated', function(event, value) {
          return dialog.confirmationDialog({
            title: "Rate job?",
            template: "confirm",
            okText: "Yes",
            scope: {
              mark: $(("#rate-div-" + $scope.rateIndex).rateit('value')),
              jobId: $scope.filteredJobs[rateIndex]
            },
            onOk: function() {
              $http.post(API.rateJob.format("" + scope.jobId, "" + scope.mark)).success(function() {
                common.broadcast(config.events.ToggleSpinner, {
                  show: true
                });
                return logger.success("Job rated!");
              }).error(function(err) {
                return logger.error(err);
              })["finally"](function() {
                return common.broadcast(config.events.ToggleSpinner, {
                  show: false
                });
              });
              return console.log("Send", scope);
            },
            onCancel: function() {
              return console.log("Cancel", scope);
            }
          });
        });
      };
      $timeout(bindRateClick, 0);
      $scope.showStars = showStars = function(index) {
        $("#rate-div-" + index).rateit({
          max: 5,
          step: 1,
          backingfld: "#rate-div-" + index
        }).show();
      };
      $scope.editJob = editJob = function(index) {
        return $scope.editIndex = index;
      };
      $scope.saveJob = saveJob = function(index, jobId) {
        jobId = $scope.filteredJobs[index]._id;
        $scope.editIndex = $scope.sizePerPage;
        return $http.post(API.updateJob.format("" + jobId), $scope.tempJob).success(function(data) {
          $scope.filteredJobs[index] = _.extend(true, {}, data);
          logger.success("Job updated!");
          return $state.transitionTo("customer.jobs");
        }).error(function(err) {
          logger.error(err);
          return $state.transitionTo("customer");
        });
      };
      $scope.getPage = getPage = function(pageIndex, jobStatus) {
        if ($scope.currentPage === pageIndex && $scope.jobStatus === jobStatus) {
          return;
        }
        if ($scope.jobStatus !== jobStatus) {
          $scope.jobStatus = jobStatus;
          $scope.filteredJobs = [];
        }
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getMyJobs.format("" + pageIndex, "" + jobStatus)).success(function(data) {
          var job, _i, _len, _ref;
          _ref = data.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = job.jobPhotos.filter(function(img) {
              return (img != null ? img.src : void 0) != null;
            });
          }
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          $scope.filteredJobs = data.jobs.slice();
          return console.log("hmmm");
        }).error(function() {
          return console.log("err");
        })["finally"](function() {
          console.log("aaam");
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.showProfile = showProfile = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.profileContainer);
        $scope.profileContainer = "#profile-div-" + index;
        curEl = $($scope.profileContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.showMap = function(index) {
        var curEl, job, prevEl;
        prevEl = $($scope.mapContainer);
        job = $scope.filteredJobs[index];
        $scope.mapContainer = "#gmaps-div-" + index;
        curEl = $($scope.mapContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
        if ($scope.currentMap != null) {
          $($scope.currentMap.el).empty();
        }
        return $scope.currentMap = gmaps.showAddress({
          address: job.address.city + job.address.line1,
          container: $scope.mapContainer,
          done: function() {
            $scope.currentMap.refresh();
            return console.log('iamdone');
          },
          error: function(err) {
            return logger.error(err);
          }
        });
      };
      $scope.sendMessage = sendMessage = function(bidder) {
        var scope;
        scope = {
          body: "msg body",
          subject: "msg subject",
          receiver: bidder
        };
        return dialog.confirmationDialog({
          title: "Send message",
          template: "sendMessage",
          okText: "Send",
          scope: scope,
          onOk: function() {
            $http.post(API.sendMessage, scope).success(function() {
              common.broadcast(config.events.ToggleSpinner, {
                show: true
              });
              return logger.success("Message sent!");
            }).error(function(err) {
              return logger.error(err);
            })["finally"](function() {
              return common.broadcast(config.events.ToggleSpinner, {
                show: false
              });
            });
            return console.log("Send", scope);
          },
          onCancel: function() {
            return console.log("Cancel", scope);
          }
        });
      };
      $scope.showPics = showPics = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.picsContainer);
        $scope.picsContainer = "#pics-div-" + index;
        curEl = $($scope.picsContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.pickWinner = pickWinner = function(bidderId, job) {
        return dialog.confirmationDialog({
          title: "Pick winner?",
          template: "confirm",
          okText: "Accept",
          onOk: function() {
            return $http.post(API.pickWinner.format("" + job._id, "" + bidderId)).success(function() {
              return getPage($scope.currentPage, 'finished');
            }).error(function(err) {
              return logger.error(err);
            });
          },
          onCancel: function() {
            return logger.info("Action canceled");
          }
        });
      };
      $scope.showInfo = showInfo = function(index) {
        var curEl, prevEl;
        $scope.tempJob = _.extend(true, {}, $scope.filteredJobs[index]);
        prevEl = $($scope.infoContainer);
        $scope.infoContainer = "#info-div-" + index;
        curEl = $($scope.infoContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.search = function() {};
      return (activate = function() {
        var getJobsPaged;
        return getJobsPaged = getPage($scope.currentPage);
      })();
    }
  ]);
});

/**
 * @license RequireJS text 2.0.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false, location: false */

define('text',['module'], function (module) {
    

    var text, fs,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = [],
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.5',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node)) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback) {
            var file = fs.readFileSync(url, 'utf8');
            //Remove BOM (Byte Mark Order) from utf8 files if it is there.
            if (file.indexOf('\uFEFF') === 0) {
                file = file.substring(1);
            }
            callback(file);
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                stringBuffer.append(line);

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    }

    return text;
});

/** @license
 * RequireJS plugin for loading JSON files
 * - depends on Text plugin and it was HEAVILY "inspired" by it as well.
 * Author: Miller Medeiros
 * Version: 0.3.1 (2013/02/04)
 * Released under the MIT license
 */
define('json',['text'], function(text){

    var CACHE_BUST_QUERY_PARAM = 'bust',
        CACHE_BUST_FLAG = '!bust',
        jsonParse = (typeof JSON !== 'undefined' && typeof JSON.parse === 'function')? JSON.parse : function(val){
            return eval('('+ val +')'); //quick and dirty
        },
        buildMap = {};

    function cacheBust(url){
        url = url.replace(CACHE_BUST_FLAG, '');
        url += (url.indexOf('?') < 0)? '?' : '&';
        return url + CACHE_BUST_QUERY_PARAM +'='+ Math.round(2147483647 * Math.random());
    }

    //API
    return {

        load : function(name, req, onLoad, config) {
            if ( config.isBuild && (config.inlineJSON === false || name.indexOf(CACHE_BUST_QUERY_PARAM +'=') !== -1) ) {
                //avoid inlining cache busted JSON or if inlineJSON:false
                onLoad(null);
            } else {
                text.get(req.toUrl(name), function(data){
                    if (config.isBuild) {
                        buildMap[name] = data;
                        onLoad(data);
                    } else {
                        onLoad(jsonParse(data));
                    }
                },
                    onLoad.error, {
                        accept: 'application/json'
                    }
                );
            }
        },

        normalize : function (name, normalize) {
            //used normalize to avoid caching references to a "cache busted" request
            return (name.indexOf(CACHE_BUST_FLAG) === -1)? name : cacheBust(name);
        },

        //write method based on RequireJS official text plugin by James Burke
        //https://github.com/jrburke/requirejs/blob/master/text.js
        write : function(pluginName, moduleName, write){
            if(moduleName in buildMap){
                var content = buildMap[moduleName];
                write('define("'+ pluginName +'!'+ moduleName +'", function(){ return '+ content +';});\n');
            }
        }

    };
});

define("json!cities", function(){ return [
	{
		"name": "Beograd",
		"zip": 11000
	},
	{
		"name": "Novi Sad",
		"zip": 21000
	}
]
;});

define('controllers/register',["./cmodule", "json!cities"], function(cmodule, cities) {
  var RegisterCtrl;
  RegisterCtrl = (function() {
    function RegisterCtrl() {
      this.userDetails = {};
      this.acceptedTOS = false;
      this.images = ["img/quality.jpg", "img/master.jpg", "img/approved.jpg"];
    }

    RegisterCtrl.prototype.getCities = function(val) {
      return cities;
    };

    RegisterCtrl.prototype.register = function() {
      var curState, url;
      if (!this.acceptedTOS) {
        this.log.error("Please check whether you agree with the terms & conditions");
        return;
      }
      curState = this.state.current.name;
      url = this.API.registerCraftsman;
      if (curState === "anon.register.customer") {
        url = this.API.registerCustomer;
      }
      return this.http.post(url, this.userDetails).success((function(_this) {
        return function() {
          _this.log.success("You are now registered");
          return _this.state.transitionTo("anon.login");
        };
      })(this)).error((function(_this) {
        return function(err) {
          return _this.log.error(err);
        };
      })(this));
    };

    return RegisterCtrl;

  })();
  return cmodule(RegisterCtrl);
});

define('controllers/findJobs',["./module"], function(module) {
  return module.controller("FindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) {
      var activate, getPage, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        if (pageIndex == null) {
          pageIndex = 0;
        }
        return common.get(API.getPagedOpenJobs.format("" + pageIndex)).success(function(data) {
          var job, _i, _len, _ref;
          _ref = data.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = job.jobPhotos.filter(function(img) {
              return img.img != null;
            });
          }
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          return $scope.filteredJobs = data.jobs.slice();
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.showMap = function(job, index) {
        ($($scope.mapContainer)).slideUp();
        $scope.mapContainer = "#gmaps-div-" + index;
        ($($scope.mapContainer)).slideDown();
        if ($scope.currentMap != null) {
          $($scope.currentMap.el).empty();
        }
        return $scope.currentMap = gmaps.showAddress({
          address: job.address.city,
          container: $scope.mapContainer,
          done: function() {
            $scope.currentMap.refresh();
            return console.log('iamdone');
          }
        });
      };
      $scope.showInfo = function(job, index) {
        ($($scope.infoContainer)).slideUp();
        $scope.infoContainer = "#pics-div-" + index;
        ($($scope.infoContainer)).slideDown();
      };
      $scope.search = function() {};
      return (activate = function() {
        return common.activateController([getPage], "FindJobsCtrl");
      })();
    }
  ]);
});

define("json!categories", function(){ return {
	"Car": "car",
	"Caterers and event": "caterers_and_event",
	"Computer and office service": "computer_and_office",
	"Crafts and home construction": "crafts_home_construction",
	"Household and gardening": "household_and_gardening",
	"Learning and education": "learning_and_education",
	"Money, tax, legal": "money_tax_legal",
	"Pet care": "pet_care",
	"Photo, design, internet": "photo_design_internet",
	"Style and wellness": "style_and_welness",
	"Support and care": "support_and_care",
	"Transport and removals": "transport_and_removals"
};});

define('controllers/createJob',["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("CreateJobCtrl", [
    "$scope", "$state", "$http", "appUser", "logger", "cAPI", function($scope, $state, $http, appUser, log, API) {
      var job;
      $scope.title1 = "Enter job details";
      $scope.title2 = "Upload job photos";
      $scope.firstStep = true;
      $scope.secondStep = false;
      job = {
        dateFrom: new Date,
        dateTo: new Date
      };
      job.jobPhotos = [];
      $scope.job = job;
      $scope.subcategories = [];
      $scope.categories = Object.keys(categories);
      $scope.getCities = function() {
        return cities;
      };
      $scope.categoryChanged = function(cat) {
        var jsonFile;
        jsonFile = categories[job.category];
        console.log(jsonFile, job);
        return require(["json!" + jsonFile], function(data) {
          $scope.subcategories = data.subcategories.slice();
          return $scope.$digest();
        });
      };
      $scope.create = function() {
        return $http.post(API.createJob, job).success(function(data) {
          console.log(data);
          log.success("Job created!");
          appUser.createdJobs || (appUser.createdJobs = []);
          appUser.createdJobs.push(data);
          console.log(appUser, appUser.createJobs);
          return $state.transitionTo("customer.jobs");
        }).error(function(err) {
          log.error(err);
          return $state.transitionTo("customer");
        });
      };
      $scope.nextStep = function() {
        $scope.firstStep = false;
        return $scope.secondStep = true;
      };
      $scope.prevStep = function() {
        $scope.firstStep = true;
        return $scope.secondStep = false;
      };
      return $scope.photoUploaded = function(file, content) {
        console.log(file, content);
        return console.log(job);
      };
    }
  ]);
});

define('controllers/customerProfile',["./module"], function(module) {
  return module.controller("CustomerProfileCtrl", [
    "$scope", "$http", "$upload", "appUser", "common", "config", "logger", "cAPI", function($scope, $http, $upload, appUser, common, config, log, API) {
      var spinnerEv;
      spinnerEv = config.events.ToggleSpinner;
      $scope.editing = false;
      $scope.uploadPhoto = function(files) {
        common.broadcast(spinnerEv, {
          show: true
        });
        return $scope.upload = ($upload.upload({
          url: "user/uploadpicture",
          file: files[0]
        })).success(function(picurl) {
          return appUser.profilePic = picurl;
        }).then(function() {
          return common.broadcast(spinnerEv, {
            show: false
          });
        });
      };
      $scope.editProfile = function() {
        return $scope.editing = true;
      };
      return $scope.updateProfile = function() {
        $scope.editing = false;
        return $http.post(API.updateProfile, appUser).success(function() {
          return log.success("Profile updated");
        }).error(function(e) {
          return log.error(e);
        });
      };
    }
  ]);
});

define('controllers/craftsmanProfile',["./module"], function(module) {
  return module.controller("CraftsmanProfileCtrl", [
    "$scope", "$http", "$upload", "appUser", "common", "config", "logger", "cAPI", function($scope, $http, $upload, appUser, common, config, log, API) {
      var spinnerEv;
      spinnerEv = config.events.ToggleSpinner;
      $scope.editing = false;
      $scope.uploadPhoto = function(files) {
        common.broadcast(spinnerEv, {
          show: true
        });
        return $scope.upload = ($upload.upload({
          url: "user/uploadpicture",
          file: files[0]
        })).success(function(picurl) {
          return appUser.profilePic = picurl;
        }).then(function() {
          return common.broadcast(spinnerEv, {
            show: false
          });
        });
      };
      $scope.editProfile = function() {
        return $scope.editing = true;
      };
      return $scope.updateProfile = function() {
        $scope.editing = false;
        return $http.post(API.updateProfile, appUser).success(function() {
          return log.success("Profile updated");
        }).error(function(e) {
          return log.error(e);
        });
      };
    }
  ]);
});

define('controllers/editJob',["./module", "json!cities", "json!categories"], function(module, cities, categories) {
  return module.controller("EditJobCtrl", [
    "$scope", "$state", "$http", "appUser", "logger", "common", "cAPI", function($scope, $state, $http, appUser, log, common, API) {
      var job, jobId, jsonFile;
      jobId = $state.params.jobId;
      $scope.title = "Update job";
      $scope.job = job = (appUser.createdJobs.filter(function(job) {
        return job._id === jobId;
      }))[0];
      job.dateFrom = new Date(JSON.parse(JSON.stringify(job.dateFrom)));
      job.dateTo = new Date(JSON.parse(JSON.stringify(job.dateTo)));
      $scope.currentPhotoIndex = 0;
      $scope.categories = Object.keys(categories);
      if (job.category != null) {
        jsonFile = categories[job.category];
        require(["json!" + jsonFile], function(data) {
          $scope.subcategories = data.subcategories.slice();
          $scope.subcategory = $scope.subcategories[0];
          return $scope.$digest();
        });
      }
      $scope.getCities = function() {
        return cities;
      };
      $scope.categoryChanged = function(cat) {
        jsonFile = categories[job.category];
        return require(["json!" + jsonFile], function(data) {
          $scope.subcategories = data.subcategories.slice();
          return $scope.$digest();
        });
      };
      $scope.setFocusOnPhoto = function(index) {
        if (job.jobPhotos[index].img == null) {
          return $scope.currentPhotoIndex = null;
        } else {
          return $scope.currentPhotoIndex = index;
        }
      };
      return $scope.update = function() {
        return $http.post(common.format(API.updateJob, jobId), job).success(function(data) {
          $.extend($scope.job, data);
          log.success("Job updated!");
          return $state.transitionTo("customer.jobs");
        }).error(function(err) {
          log.error(err);
          return $state.transitionTo("customer");
        });
      };
    }
  ]);
});

define('controllers/notifications',["./module"], function(module) {
  return module.controller("NotificationsCtrl", [
    "$scope", "$http", "$state", "appUser", "cAPI", "common", "config", "logger", function($scope, $http, $state, appUser, API, common, config, logger) {
      var getPage, page, state;
      $scope.searchQuery = "";
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.notifications = [];
      $scope.filteredNotifications = [];
      state = "" + (appUser.type.toLowerCase());
      page = ".notifications";
      getPage = function(pageIndex) {
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getNotifications.format("" + pageIndex)).success(function(data) {
          $scope.notifications = data.notifications;
          return $state.transitionTo("" + state + page);
        }).error(function(err) {
          return logger.error(err);
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.search = function() {
        var text;
        text = $scope.searchQuery;
        return $scope.filteredNotifications = $scope.notifications.filter(function(msg) {
          return msg.type.indexOf(text) !== -1 || msg.message.indexOf(text) !== -1;
        });
      };
      return getPage(0);
    }
  ]);
});

define('controllers/inbox',["./module"], function(module) {
  return module.controller("InboxCtrl", [
    "$scope", "$http", "$state", "appUser", "cAPI", "dialog", "logger", "common", "config", function($scope, $http, $state, appUser, API, dialog, log, common, config) {
      var allReceived, allSent, apiURL, getPage, page, state;
      state = "" + (appUser.type.toLowerCase()) + ".messages";
      apiURL = API.receivedMessages;
      page = ".received";
      allReceived = appUser.inbox.received;
      allSent = appUser.inbox.sent;
      $scope.totalLength = allReceived.length;
      $scope.searchQuery = "";
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(apiURL.format("" + pageIndex)).success(function(data) {
          $scope.messages = data;
          $scope.filteredMessages = data.slice();
          return $state.transitionTo("" + state + page);
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.search = function() {
        var text;
        text = $scope.searchQuery;
        return $scope.filteredMessages = $scope.messages.filter(function(msg) {
          return msg.subject.indexOf(text) !== -1 || msg.message.indexOf(text) !== -1;
        });
      };
      $scope.showInbox = function() {
        console.log($scope.totalLength);
        apiURL = API.receivedMessages;
        page = ".received";
        $scope.totalLength = allReceived.length;
        return getPage(0);
      };
      $scope.showOutbox = function() {
        apiURL = API.sentMessages;
        page = ".sent";
        $scope.totalLength = allSent.length;
        return getPage(0);
      };
      $scope.newMessage = function(receiver, index) {
        var msg, scope;
        msg = $scope.filteredMessages[index];
        scope = {
          body: "msg body",
          subject: "RE: " + msg.subject,
          receiver: receiver
        };
        return dialog.confirmationDialog({
          title: "Send message",
          template: "sendMessage",
          okText: "Send",
          scope: scope,
          onOk: function() {
            $http.post(API.sendMessage, scope).success(function() {
              common.broadcast(config.events.ToggleSpinner, {
                show: true
              });
              return log.success("Message sent!");
            }).error(function(err) {
              return log.error(err);
            })["finally"](function() {
              return common.broadcast(config.events.ToggleSpinner, {
                show: false
              });
            });
            return console.log("Send", scope);
          },
          onCancel: function() {
            return console.log("Cancel", scope);
          }
        });
      };
      return $scope.showInbox();
    }
  ]);
});

define('controllers/yellowPages',["./module"], function(module) {
  return module.controller("YellowPagesCtrl", [
    "$scope", "$http", "$state", "cAPI", "logger", "common", "config", "categoryPictures", "gmaps", function($scope, $http, $state, API, logger, common, config, categoryPictures, gmaps) {
      var getPage, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredCraftsmen = [];
      $scope.totalCraftsmen = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      getPage = function(pageIndex) {
        if (pageIndex == null) {
          pageIndex = 0;
        }
        console.debug(common);
        return common.get(API.craftsmen.format("" + pageIndex)).success(function(data) {
          $scope.totalCraftsmen = data.totalCraftsmen;
          $scope.craftsmen = data.craftsmen;
          return $scope.filteredCraftsmen = data.craftsmen.slice();
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.showInfo = function(job, index) {
        console.log(job, index);
        ($($scope.infoContainer)).slideToggle();
        $scope.infoContainer = "#pics-div-" + index;
        ($($scope.infoContainer)).slideToggle();
      };
      $scope.search = function() {};
      return common.activateController([getPage()], "YellowPagesCtrl");
    }
  ]);
});

define('controllers/craftsmanFindJobs',["./module"], function(module) {
  return module.controller("CraftsmanFindJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "appUser", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, API, appUser, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, bidOnJob, getPage, isBidder, sendMessage, showInfo, showPics, showProfile, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.mapContainer = "#gmaps-div-0";
      $scope.picsContainer = "#pics-div-0";
      $scope.infoContainer = "#info-div-0";
      $scope.profileContainer = "#profile-div-0";
      $scope.getPage = getPage = function(pageIndex, ignore) {
        if (ignore) {
          return;
        }
        common.broadcast(config.events.ToggleSpinner, {
          show: true
        });
        return $http.get(API.getPagedOpenJobs.format("" + pageIndex)).success(function(data) {
          var job, _i, _len, _ref;
          _ref = data.jobs;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            job = _ref[_i];
            job.jobPhotos = job.jobPhotos.filter(function(img) {
              return img.img != null;
            });
          }
          $scope.totalJobs = data.totalJobs;
          $scope.jobs = data.jobs;
          return $scope.filteredJobs = data.jobs.slice();
        })["finally"](function() {
          return common.broadcast(config.events.ToggleSpinner, {
            show: false
          });
        });
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.bidOnJob = bidOnJob = function(index) {
        var jobId;
        jobId = $scope.filteredJobs[index]._id;
        if (jobId) {
          return dialog.confirmationDialog({
            title: "Bid for this job?",
            template: "confirm",
            okText: "Yes",
            onOk: function() {
              return $http.post(API.bidOnJob.format("" + jobId)).success(function() {
                getPage($scope.currentPage);
                return logger.success("nBid successful!");
              }).error(function(err) {
                return logger.error;
              });
            },
            onCancel: function() {
              return logger.info("Action canceled");
            }
          });
        }
      };
      $scope.isBidder = isBidder = function(index) {
        var job;
        job = $scope.filteredJobs[index];
        return _.findOne(job.bidders, "_id", appUser._id);
      };
      $scope.showMap = function(job, index) {
        var curEl, prevEl;
        prevEl = $($scope.mapContainer);
        $scope.mapContainer = "#gmaps-div-" + index;
        curEl = $($scope.mapContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
        if ($scope.currentMap != null) {
          $($scope.currentMap.el).empty();
        }
        return $scope.currentMap = gmaps.showAddress({
          address: job.address.city + ", " + job.address.line1,
          container: $scope.mapContainer,
          done: function() {
            return $scope.currentMap.refresh();
          }
        });
      };
      $scope.showPics = showPics = function(job, index) {
        var curEl, prevEl;
        prevEl = $($scope.mapContainer);
        $scope.picsContainer = "#pics-div-" + index;
        curEl = $($scope.picsContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.showProfile = showProfile = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.profileContainer);
        $scope.profileContainer = "#profile-div-" + index;
        curEl = $($scope.profileContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.showInfo = showInfo = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.infoContainer);
        $scope.infoContainer = "#info-div-" + index;
        curEl = $($scope.infoContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.sendMessage = sendMessage = function(index) {
        var job, scope;
        job = $scope.filteredJobs[index];
        scope = {
          body: "msg body",
          subject: "msg subject",
          sender: appUser.username,
          receiver: job.author.username
        };
        return dialog.confirmationDialog({
          title: "Send message",
          template: "sendMessage",
          okText: "Send",
          scope: scope,
          onOk: function() {
            $http.post(API.sendMessage, scope).success(function() {
              common.broadcast(config.events.ToggleSpinner, {
                show: true
              });
              return logger.success("Message sent!");
            }).error(function(err) {
              return logger.error(err);
            })["finally"](function() {
              return common.broadcast(config.events.ToggleSpinner, {
                show: false
              });
            });
            return console.log("Send", scope);
          },
          onCancel: function() {
            return console.log("Cancel", scope);
          }
        });
      };
      $scope.search = function() {};
      return (activate = function() {
        return common.activateController([getPage(0)], "CraftsmanFindJobsCtrl");
      })();
    }
  ]);
});

define('controllers/craftsmanMyJobs',["./module"], function(module) {
  return module.controller("CraftsmanMyJobsCtrl", [
    "$scope", "$http", "$state", "cAPI", "appUser", "logger", "common", "config", "categoryPictures", "gmaps", "dialog", function($scope, $http, $state, API, appUser, logger, common, config, categoryPictures, gmaps, dialog) {
      var activate, bidOnJob, getPage, isBidder, sendMessage, showInfo, showPics, showProfile, state;
      state = $state.current.name;
      $scope.categoryPictures = categoryPictures;
      $scope.filteredJobs = [];
      $scope.totalJobs = 0;
      $scope.searchQueries = {};
      $scope.sizePerPage = 5;
      $scope.selectedPage = 0;
      $scope.currentPage = 0;
      $scope.mapContainer = "#gmaps-div-0";
      $scope.picsContainer = "#pics-div-0";
      $scope.infoContainer = "#info-div-0";
      $scope.profileContainer = "#profile-div-0";
      $scope.jobStatus = "all";
      $scope.getPage = getPage = function(pageIndex, status) {
        if (status === $scope.jobStatus && pageIndex === $scope.currentPage) {

        } else {
          $scope.jobStatus = status;
          common.broadcast(config.events.ToggleSpinner, {
            show: true
          });
          return $http.get(API.getBiddedJobs.format("" + pageIndex, "" + $scope.jobStatus)).success(function(data) {
            var job, _i, _len, _ref;
            _ref = data.jobs;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              job = _ref[_i];
              job.jobPhotos = job.jobPhotos.filter(function(img) {
                return img.img != null;
              });
            }
            $scope.totalJobs = data.totalJobs;
            $scope.jobs = data.jobs;
            return $scope.filteredJobs = data.jobs.slice();
          })["finally"](function() {
            return common.broadcast(config.events.ToggleSpinner, {
              show: false
            });
          });
        }
      };
      $scope.pageSelected = function(page) {
        return getPage(page.page - 1);
      };
      $scope.bidOnJob = bidOnJob = function(index) {
        var jobId;
        jobId = $scope.filteredJobs[index]._id;
        if (jobId) {
          return dialog.confirmationDialog({
            title: "Bid for this job?",
            template: "confirm",
            okText: "Yes",
            onOk: function() {
              return $http.post(API.bidOnJob.format("" + jobId)).success(function() {
                getPage($scope.currentPage);
                return logger.success("nBid successful!");
              }).error(function(err) {
                return logger.error;
              });
            },
            onCancel: function() {
              return logger.info("Action canceled");
            }
          });
        }
      };
      $scope.isBidder = isBidder = function(index) {
        var job;
        job = $scope.filteredJobs[index];
        return _.findOne(job.bidders, "_id", appUser._id);
      };
      $scope.showMap = function(job, index) {
        var curEl, prevEl;
        prevEl = $($scope.mapContainer);
        $scope.mapContainer = "#gmaps-div-" + index;
        curEl = $($scope.mapContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
        if ($scope.currentMap != null) {
          $($scope.currentMap.el).empty();
        }
        return $scope.currentMap = gmaps.showAddress({
          address: job.address.city + ", " + job.address.line1,
          container: $scope.mapContainer,
          done: function() {
            return $scope.currentMap.refresh();
          }
        });
      };
      $scope.showPics = showPics = function(job, index) {
        var curEl, prevEl;
        prevEl = $($scope.mapContainer);
        $scope.picsContainer = "#pics-div-" + index;
        curEl = $($scope.picsContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.showProfile = showProfile = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.profileContainer);
        $scope.profileContainer = "#profile-div-" + index;
        curEl = $($scope.profileContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.showInfo = showInfo = function(index) {
        var curEl, prevEl;
        prevEl = $($scope.infoContainer);
        $scope.infoContainer = "#info-div-" + index;
        curEl = $($scope.infoContainer);
        if (prevEl.is(curEl)) {
          prevEl.slideToggle();
        } else {
          prevEl.slideUp();
          curEl.slideDown();
        }
      };
      $scope.sendMessage = sendMessage = function(index) {
        var job, scope;
        job = $scope.filteredJobs[index];
        scope = {
          body: "msg body",
          subject: "msg subject",
          sender: appUser.username,
          receiver: job.author.username
        };
        return dialog.confirmationDialog({
          title: "Send message",
          template: "sendMessage",
          okText: "Send",
          scope: scope,
          onOk: function() {
            $http.post(API.sendMessage, scope).success(function() {
              common.broadcast(config.events.ToggleSpinner, {
                show: true
              });
              return logger.success("Message sent!");
            }).error(function(err) {
              return logger.error(err);
            })["finally"](function() {
              return common.broadcast(config.events.ToggleSpinner, {
                show: false
              });
            });
            return console.log("Send", scope);
          },
          onCancel: function() {
            return console.log("Cancel", scope);
          }
        });
      };
      $scope.search = function() {};
      return (activate = function() {
        return common.activateController([getPage(0)], "CraftsmanMyJobsCtrl");
      })();
    }
  ]);
});

define('controllers/index',["controllers/shell", "controllers/navigation", "controllers/login", "controllers/anon", "controllers/customerJobs", "controllers/register", "controllers/findJobs", "controllers/createJob", "controllers/customerProfile", "controllers/craftsmanProfile", "controllers/editJob", "controllers/notifications", "controllers/inbox", "controllers/yellowPages", "controllers/craftsmanFindJobs", "controllers/craftsmanMyJobs"], function() {});

define('directives/module',["angular"], function(ng) {
  return ng.module("app.directives", []);
});

(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define('ngSpinner',e);else t.Spinner=e()})(this,function(){var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),d=i.substring(0,i.indexOf("Animation")).toLowerCase(),u=d&&"-"+d+"-"||"";if(!e[a]){r.insertRule("@"+u+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;if(o[i]!==undefined)return i;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function d(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var u={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function p(t){if(typeof this=="undefined")return new p(t);this.opts=l(t||{},p.defaults,u)}p.defaults={};l(p.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=d(t);a=d(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var u=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){u++;for(var t=0;t<n.lines;t++){c=Math.max(1-(u+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function d(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(d("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,d(e.color,"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function c(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");p.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),d;function u(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:i.color,opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(d=1;d<=i.lines;d++)u(d,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(d=1;d<=i.lines;d++)u(d);return n(e,l)};p.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var h=f(o("group"),{behavior:"url(#default#VML)"});if(!a(h,"transform")&&h.adj)c();else i=a(h,"animation");return p});
define('directives/ccSpinner',["./module", "ngSpinner"], function(module, Spinner) {
  return module.directive("ccSpinner", [
    "$window", function($window) {
      var directive;
      return directive = {
        restrict: "A",
        link: function(scope, element, attrs) {
          scope.spinner = null;
          return scope.$watch(attrs.ccSpinner, function(opts) {
            if (scope.spinner != null) {
              scope.spinner.stop();
            }
            scope.spinner = new Spinner(opts);
            return scope.spinner.spin(element[0]);
          }, true);
        }
      };
    }
  ]);
});

define('directives/ccWidgetHeader',["directives/module"], function(module) {
  return module.directive("ccWidgetHeader", function() {
    var directive;
    return directive = {
      restrict: "A",
      templateUrl: "/shared/templates/layout/widgetHeader.html",
      scope: {
        "title": "@",
        "subtitle": "@",
        "rightText": "@",
        "allowCollapse": "@"
      },
      link: function(scope, element, attrs) {
        return attrs.$set("class", "widget-head");
      }
    };
  });
});

define('directives/ccWidgetMinimize',["directives/module"], function(module) {
  return module.directive("ccWidgetMinimize", function() {
    var directive;
    return directive = {
      restrict: "A",
      template: "<i class='fa fa-chevron-up'></i>",
      link: function(scope, element, attrs) {
        attrs.$set("href", "#");
        attrs.$set("wminimize");
        element = $(element);
        return element.click(function(e) {
          var $wcontent, iElem;
          e.preventDefault();
          $wcontent = element.parent().parent().next(".widget-content");
          iElem = element.children("i");
          if ($wcontent.is(":visible")) {
            iElem.removeClass("fa fa-chevron-up");
            iElem.addClass("fa fa-chevron-down");
          } else {
            iElem.removeClass("fa fa-chevron-down");
            iElem.addClass("fa fa-chevron-up");
          }
          return $wcontent.toggle(500);
        });
      }
    };
  });
});

define('directives/ccWidgetClose',["directives/module"], function(module) {
  return module.directive("ccWidgetClose", function() {
    var directive;
    return directive = {
      restrict: "A",
      template: "<i class='fa fa-remove'></i>",
      link: function(scope, element, attrs) {
        attrs.$set("href", "#");
        attrs.$set("wclose");
        element = $(element);
        return element.click(function(e) {
          e.preventDefault();
          return element.parent().parent().parent().hide(100);
        });
      }
    };
  });
});

define('directives/ccNavigation',["./module"], function(module) {
  return module.directive("ccNavigation", [
    "$state", "$rootScope", function($state, $rootScope) {
      var directive, _menu_;
      _menu_ = {};
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        var elem, k, markElem, menu, v;
        menu = _menu_;
        if (menu == null) {
          return;
        }
        for (k in menu) {
          v = menu[k];
          markElem = v.next();
          markElem.removeClass("top-hmenu-item-current");
        }
        elem = menu[toState.url];
        if (elem == null) {
          return;
        }
        markElem = elem.next();
        return markElem.addClass("top-hmenu-item-current");
      });
      return directive = {
        restrict: "A",
        link: function(scope, element, attrs) {
          var menu;
          menu = $(element);
          _menu_ = {};
          return menu.find("a").each(function(k, v) {
            var sref;
            sref = $(v).attr("ui-sref");
            if (sref == null) {
              return;
            }
            if (sref[0] === ".") {
              sref = "/" + (sref.substring(1));
            }
            return _menu_[sref] = $(v);
          });
        }
      };
    }
  ]);
});

var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

define('directives/ccUploadPhotos',["./module"], function(module) {
  return module.directive("ccUploadPhotos", [
    "$rootScope", "$window", "$timeout", "logger", function($rootScope, $window, $timeout, logger) {
      var addHandler, directive, dndDisabled;
      addHandler = function(obj, evt, handler) {
        if (obj.addEventListenr) {
          return obj.addEventListenr(evt, handler, false);
        } else if (obj.attachEvent) {
          return obj.attachEvent("on" + evt, handler);
        } else {
          return obj["on" + evt] = handler;
        }
      };
      dndDisabled = false;
      return directive = {
        restrict: "AE",
        scope: {
          num: "=",
          onUpload: "&upload",
          photos: "="
        },
        templateUrl: "shared/templates/forms/uploadPhotos.html",
        compile: function(element, attrs, transclude) {
          var acceptedTypes, post, pre;
          acceptedTypes = ["image/png", "image/jpeg", "image/jpg"];
          pre = function(scope, element, attrs) {
            var i, _i, _ref;
            scope.photos || (scope.photos = []);
            for (i = _i = 0, _ref = scope.num; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              scope.photos.push({
                src: null,
                description: ""
              });
            }
            scope.inFocus = false;
            if ($window.FileReader == null) {
              scope.dndDisabled = true;
            } else {
              scope.dndDisabled = false;
            }
            return dndDisabled = scope.dndDisabled;
          };
          post = function(scope, element, attrs) {
            var cancel, setupClassic, setupDnD;
            scope.onClick = function(photo) {
              if ((photo != null ? photo.src : void 0) == null) {
                return;
              }
              return scope.focused = photo;
            };
            cancel = function(e) {
              if (typeof e.preventDefault === "function") {
                e.preventDefault();
              }
              return false;
            };
            setupClassic = function() {
              return false;
            };
            setupDnD = function() {
              var holders, parent, previewFile, readFile;
              parent = $(element).find(".photo-uploader");
              holders = parent.find(".photo-holder");
              previewFile = function(holder, file) {
                var reader, _ref;
                if (_ref = file.type, __indexOf.call(acceptedTypes, _ref) < 0) {
                  return;
                }
                reader = new FileReader();
                holder = $(holder);
                reader.onload = function(event) {
                  var photo, rawImg;
                  rawImg = event.target.result;
                  if (((rawImg.length - 814) / 1.37) > 128 * 1024) {
                    return alert("Images greater than 128 kilobytes are not allowed");
                  }
                  if (typeof scope.onUpload === "function") {
                    scope.onUpload({
                      file: file,
                      rawImg: rawImg
                    });
                  }
                  photo = scope.photos[holder.attr("photo-id")];
                  holder.find("img").attr("src", rawImg);
                  photo.src = rawImg;
                  scope.focused = photo;
                  return scope.$apply(function() {
                    return scope.inFocus = true;
                  });
                };
                return reader.readAsDataURL(file);
              };
              readFile = function(holder, files) {
                var file, formData, name, size, _i, _len, _results;
                formData = new FormData();
                _results = [];
                for (_i = 0, _len = files.length; _i < _len; _i++) {
                  file = files[_i];
                  name = file.name;
                  size = file.size;
                  formData.append("file", file);
                  _results.push(previewFile(holder, file));
                }
                return _results;
              };
              return holders.each(function(k, v) {
                var droppable;
                droppable = $(v);
                droppable.on("dragleave", function(ev) {
                  cancel(ev);
                  return $(this).removeClass("photo-holder-hover");
                });
                droppable.on("dragend", function(ev) {
                  cancel(ev);
                  return $(this).removeClass("photo-holder-hover");
                });
                droppable.on("dragover", function(ev) {
                  cancel(ev);
                  return $(this).addClass("photo-holder-hover", 500);
                });
                return addHandler(v, "drop", function(ev) {
                  var dt;
                  dt = ev.dataTransfer;
                  cancel(ev);
                  readFile(this, dt.files);
                  return $(this).removeClass("photo-holder-hover");
                });
              });
            };
            if (dndDisabled) {
              logger.error("HTML5 Drag and Drop isnt supported");
              return setupClassic();
            } else {
              return $timeout(setupDnD, 0);
            }
          };
          return {
            pre: pre,
            post: post
          };
        }
      };
    }
  ]);
});

define('directives/crNotAuth',["directives/module"], function(module) {
  return module.directive("crNotAuth", [
    "appUser", "$rootScope", function(appUser, $rootScope) {
      return {
        link: function($scope, element, attrs) {
          var expr;
          element = $(element);
          expr = appUser.isLoggedIn;
          if (expr) {
            element.hide();
          }
          return $rootScope.$watch("appUser.isLoggedIn", function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            if (newVal) {
              return element.hide();
            } else {
              return element.show();
            }
          });
        },
        restrict: "A"
      };
    }
  ]);
});

define('directives/crAuth',["directives/module"], function(module) {
  return module.directive("crAuth", [
    "appUser", "$rootScope", function(appUser, $rootScope) {
      return {
        link: function($scope, element, attrs) {
          var expr;
          expr = appUser.isLoggedIn;
          if (expr) {
            $(element).show();
          }
          return $rootScope.$watch("appUser.isLoggedIn", function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            if (newVal) {
              return $(element).show();
            } else {
              return $(element).hide();
            }
          });
        },
        restrict: "A"
      };
    }
  ]);
});

//! moment.js
//! version : 2.5.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){return function(c){return k(a.call(this,c),b)}}function d(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function e(){}function f(a){w(a),h(this,a)}function g(a){var b=q(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function i(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&qb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function j(a){return 0>a?Math.ceil(a):Math.floor(a)}function k(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function l(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&db.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function m(a){return"[object Array]"===Object.prototype.toString.call(a)}function n(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function o(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&s(a[d])!==s(b[d]))&&g++;return g+f}function p(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Tb[a]||Ub[b]||b}return a}function q(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=p(c),b&&(d[b]=a[c]));return d}function r(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}db[b]=function(e,f){var g,h,i=db.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=db().utc().set(d,a);return i.call(db.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function s(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function t(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function u(a){return v(a)?366:365}function v(a){return a%4===0&&a%100!==0||a%400===0}function w(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[jb]<0||a._a[jb]>11?jb:a._a[kb]<1||a._a[kb]>t(a._a[ib],a._a[jb])?kb:a._a[lb]<0||a._a[lb]>23?lb:a._a[mb]<0||a._a[mb]>59?mb:a._a[nb]<0||a._a[nb]>59?nb:a._a[ob]<0||a._a[ob]>999?ob:-1,a._pf._overflowDayOfYear&&(ib>b||b>kb)&&(b=kb),a._pf.overflow=b)}function x(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function y(a){return a?a.toLowerCase().replace("_","-"):a}function z(a,b){return b._isUTC?db(a).zone(b._offset||0):db(a).local()}function A(a,b){return b.abbr=a,pb[a]||(pb[a]=new e),pb[a].set(b),pb[a]}function B(a){delete pb[a]}function C(a){var b,c,d,e,f=0,g=function(a){if(!pb[a]&&rb)try{require("./lang/"+a)}catch(b){}return pb[a]};if(!a)return db.fn._lang;if(!m(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=y(a[f]).split("-"),b=e.length,d=y(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&o(e,d,!0)>=b-1)break;b--}f++}return db.fn._lang}function D(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function E(a){var b,c,d=a.match(vb);for(b=0,c=d.length;c>b;b++)d[b]=Yb[d[b]]?Yb[d[b]]:D(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function F(a,b){return a.isValid()?(b=G(b,a.lang()),Vb[b]||(Vb[b]=E(b)),Vb[b](a)):a.lang().invalidDate()}function G(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(wb.lastIndex=0;d>=0&&wb.test(a);)a=a.replace(wb,c),wb.lastIndex=0,d-=1;return a}function H(a,b){var c,d=b._strict;switch(a){case"DDDD":return Ib;case"YYYY":case"GGGG":case"gggg":return d?Jb:zb;case"Y":case"G":case"g":return Lb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Kb:Ab;case"S":if(d)return Gb;case"SS":if(d)return Hb;case"SSS":if(d)return Ib;case"DDD":return yb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Cb;case"a":case"A":return C(b._l)._meridiemParse;case"X":return Fb;case"Z":case"ZZ":return Db;case"T":return Eb;case"SSSS":return Bb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Hb:xb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return xb;default:return c=new RegExp(P(O(a.replace("\\","")),"i"))}}function I(a){a=a||"";var b=a.match(Db)||[],c=b[b.length-1]||[],d=(c+"").match(Qb)||["-",0,0],e=+(60*d[1])+s(d[2]);return"+"===d[0]?-e:e}function J(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[jb]=s(b)-1);break;case"MMM":case"MMMM":d=C(c._l).monthsParse(b),null!=d?e[jb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[kb]=s(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=s(b));break;case"YY":e[ib]=s(b)+(s(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ib]=s(b);break;case"a":case"A":c._isPm=C(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[lb]=s(b);break;case"m":case"mm":e[mb]=s(b);break;case"s":case"ss":e[nb]=s(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ob]=s(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=I(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function K(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=M(a),a._w&&null==a._a[kb]&&null==a._a[jb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ib]?db().weekYear():a._a[ib]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=Z(f(g.GG),g.W||1,g.E,4,1):(i=C(a._l),j=null!=g.d?V(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=Z(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ib]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ib]?d[ib]:a._a[ib],a._dayOfYear>u(e)&&(a._pf._overflowDayOfYear=!0),c=U(e,0,a._dayOfYear),a._a[jb]=c.getUTCMonth(),a._a[kb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[lb]+=s((a._tzm||0)/60),l[mb]+=s((a._tzm||0)%60),a._d=(a._useUTC?U:T).apply(null,l)}}function L(a){var b;a._d||(b=q(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],K(a))}function M(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function N(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=C(a._l),h=""+a._i,i=h.length,j=0;for(d=G(a._f,g).match(vb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(H(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Yb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),J(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[lb]<12&&(a._a[lb]+=12),a._isPm===!1&&12===a._a[lb]&&(a._a[lb]=0),K(a),w(a)}function O(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function P(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(f=0;f<a._f.length;f++)g=0,c=h({},a),c._pf=b(),c._f=a._f[f],N(c),x(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));h(a,d||c)}function R(a){var b,c,d=a._i,e=Mb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Ob.length;c>b;b++)if(Ob[b][1].exec(d)){a._f=Ob[b][0]+(e[6]||" ");break}for(b=0,c=Pb.length;c>b;b++)if(Pb[b][1].exec(d)){a._f+=Pb[b][0];break}d.match(Db)&&(a._f+="Z"),N(a)}else a._d=new Date(d)}function S(b){var c=b._i,d=sb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?R(b):m(c)?(b._a=c.slice(0),K(b)):n(c)?b._d=new Date(+c):"object"==typeof c?L(b):b._d=new Date(c)}function T(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function U(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function V(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function W(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function X(a,b,c){var d=hb(Math.abs(a)/1e3),e=hb(d/60),f=hb(e/60),g=hb(f/24),h=hb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",hb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,W.apply({},i)}function Y(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=db(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function Z(a,b,c,d,e){var f,g,h=U(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:u(a-1)+g}}function $(a){var b=a._i,c=a._f;return null===b?db.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=C().preparse(b)),db.isMoment(b)?(a=i(b),a._d=new Date(+b._d)):c?m(c)?Q(a):N(a):S(a),new f(a))}function _(a,b){db.fn[a]=db.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),db.updateOffset(this),this):this._d["get"+c+b]()}}function ab(a){db.duration.fn[a]=function(){return this._data[a]}}function bb(a,b){db.duration.fn["as"+a]=function(){return+this/b}}function cb(a){var b=!1,c=db;"undefined"==typeof ender&&(a?(gb.moment=function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)},h(gb.moment,c)):gb.moment=db)}for(var db,eb,fb="2.5.1",gb=this,hb=Math.round,ib=0,jb=1,kb=2,lb=3,mb=4,nb=5,ob=6,pb={},qb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},rb="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,sb=/^\/?Date\((\-?\d+)/i,tb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ub=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,vb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,wb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,xb=/\d\d?/,yb=/\d{1,3}/,zb=/\d{1,4}/,Ab=/[+\-]?\d{1,6}/,Bb=/\d+/,Cb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Db=/Z|[\+\-]\d\d:?\d\d/gi,Eb=/T/i,Fb=/[\+\-]?\d+(\.\d{1,3})?/,Gb=/\d/,Hb=/\d\d/,Ib=/\d{3}/,Jb=/\d{4}/,Kb=/[+-]?\d{6}/,Lb=/[+-]?\d+/,Mb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Nb="YYYY-MM-DDTHH:mm:ssZ",Ob=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Pb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Qb=/([\+\-]|\d\d)/gi,Rb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Sb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Tb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Ub={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Vb={},Wb="DDD w W M D d".split(" "),Xb="M D H h m s w W".split(" "),Yb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return k(this.year()%100,2)},YYYY:function(){return k(this.year(),4)},YYYYY:function(){return k(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+k(Math.abs(a),6)},gg:function(){return k(this.weekYear()%100,2)},gggg:function(){return k(this.weekYear(),4)},ggggg:function(){return k(this.weekYear(),5)},GG:function(){return k(this.isoWeekYear()%100,2)},GGGG:function(){return k(this.isoWeekYear(),4)},GGGGG:function(){return k(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return s(this.milliseconds()/100)},SS:function(){return k(s(this.milliseconds()/10),2)},SSS:function(){return k(this.milliseconds(),3)},SSSS:function(){return k(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+":"+k(s(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+k(s(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Zb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Wb.length;)eb=Wb.pop(),Yb[eb+"o"]=d(Yb[eb],eb);for(;Xb.length;)eb=Xb.pop(),Yb[eb+eb]=c(Yb[eb],2);for(Yb.DDDD=c(Yb.DDD,3),h(e.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=db.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=db([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return Y(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),db=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),$(g)},db.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),$(g).utc()},db.unix=function(a){return db(1e3*a)},db.duration=function(a,b){var c,d,e,f=a,h=null;return db.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(h=tb.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:s(h[kb])*c,h:s(h[lb])*c,m:s(h[mb])*c,s:s(h[nb])*c,ms:s(h[ob])*c}):(h=ub.exec(a))&&(c="-"===h[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(h[2]),M:e(h[3]),d:e(h[4]),h:e(h[5]),m:e(h[6]),s:e(h[7]),w:e(h[8])}),d=new g(f),db.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},db.version=fb,db.defaultFormat=Nb,db.updateOffset=function(){},db.lang=function(a,b){var c;return a?(b?A(y(a),b):null===b?(B(a),a="en"):pb[a]||C(a),c=db.duration.fn._lang=db.fn._lang=C(a),c._abbr):db.fn._lang._abbr},db.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),C(a)},db.isMoment=function(a){return a instanceof f||null!=a&&a.hasOwnProperty("_isAMomentObject")},db.isDuration=function(a){return a instanceof g},eb=Zb.length-1;eb>=0;--eb)r(Zb[eb]);for(db.normalizeUnits=function(a){return p(a)},db.invalid=function(a){var b=db.utc(0/0);return null!=a?h(b._pf,a):b._pf.userInvalidated=!0,b},db.parseZone=function(a){return db(a).parseZone()},h(db.fn=f.prototype,{clone:function(){return db(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=db(this).utc();return 0<a.year()&&a.year()<=9999?F(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):F(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return x(this)},isDSTShifted:function(){return this._a?this.isValid()&&o(this._a,(this._isUTC?db.utc(this._a):db(this._a)).toArray())>0:!1},parsingFlags:function(){return h({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=F(this,a||db.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,-1),this},diff:function(a,b,c){var d,e,f=z(a,this),g=6e4*(this.zone()-f.zone());return b=p(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-db(this).startOf("month")-(f-db(f).startOf("month")))/d,e-=6e4*(this.zone()-db(this).startOf("month").zone()-(f.zone()-db(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:j(e)},from:function(a,b){return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(db(),a)},calendar:function(){var a=z(db(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return v(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=V(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),db.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=p(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=p(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+db(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+db(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+z(a,this).startOf(b)},min:function(a){return a=db.apply(null,arguments),this>a?this:a},max:function(a){return a=db.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=I(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&l(this,db.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?db(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return t(this.year(),this.month())},dayOfYear:function(a){var b=hb((db(this).startOf("day")-db(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=Y(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=Y(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=Y(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=p(a),this[a]()},set:function(a,b){return a=p(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=C(b),this)}}),eb=0;eb<Rb.length;eb++)_(Rb[eb].toLowerCase().replace(/s$/,""),Rb[eb]);_("year","FullYear"),db.fn.days=db.fn.day,db.fn.months=db.fn.month,db.fn.weeks=db.fn.week,db.fn.isoWeeks=db.fn.isoWeek,db.fn.toJSON=db.fn.toISOString,h(db.duration.fn=g.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=j(e/1e3),h.seconds=a%60,b=j(a/60),h.minutes=b%60,c=j(b/60),h.hours=c%24,f+=j(c/24),h.days=f%30,g+=j(f/30),h.months=g%12,d=j(g/12),h.years=d},weeks:function(){return j(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*s(this._months/12)},humanize:function(a){var b=+this,c=X(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=db.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=db.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=p(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=p(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:db.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(eb in Sb)Sb.hasOwnProperty(eb)&&(bb(eb,Sb[eb]),ab(eb.toLowerCase()));bb("Weeks",6048e5),db.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},db.lang("en",{ordinal:function(a){var b=a%10,c=1===s(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),rb?(module.exports=db,cb(!0)):"function"==typeof define&&define.amd?define("moment",['require','exports','module'],function(b,c,d){return d.config&&d.config()&&d.config().noGlobal!==!0&&cb(d.config().noGlobal===a),db}):cb()}).call(this);
define('directives/crDate',["./module", "moment"], function(module, moment) {
  return module.directive("crDate", function() {
    var directive;
    return directive = {
      restrict: "A",
      link: function(scope, element, attrs) {
        var crDate;
        crDate = attrs["crDate"];
        return attrs.$observe("crDate", function() {
          console.log(crDate);
          return element.text(moment(crDate).format("DD/MM/YY"));
        });
      }
    };
  });
});

define('directives/lightbox',["./module"], function(module) {
  return module.directive("lightbox", [
    "$modal", "$log", function($modal, $log) {
      var ModalInstanceCtrl, out;
      ModalInstanceCtrl = function($scope, $modalInstance, images, selectedImageIndex) {
        $scope.closeModal = function() {
          return $modalInstance.close("hehe");
        };
        $scope.totalImages = images.length;
        $scope.selectedImageIndex = selectedImageIndex + 1;
        $scope.selectedImage = images[selectedImageIndex];
        $scope.source = function(img) {
          return img.src;
        };
        $scope.hasPrev = function() {
          return $scope.selectedImageIndex !== 0;
        };
        $scope.hasNext = function() {
          return $scope.selectedImageIndex < images.length - 1;
        };
        $scope.next = function() {
          $scope.selectedImageIndex += 1;
          return $scope.selectedImage = images[$scope.selectedImageIndex];
        };
        return $scope.prev = function() {
          $scope.selectedImageIndex -= 1;
          return $scope.selectedImage = images[$scope.selectedImageIndex];
        };
      };
      return out = {
        restrict: "E",
        templateUrl: "shared/templates/layout/lightbox.html",
        scope: {
          images: "="
        },
        replace: true,
        controller: function($rootScope, $scope) {
          $scope.selectedImageIndex = 0;
          $scope.tileWidth = 150;
          $scope.tileHeight = 150;
          $scope.modalInstance = null;
          $scope.open = function() {
            return $scope.modalInstance = $modal.open({
              templateUrl: "shared/templates/layout/album.html",
              controller: ModalInstanceCtrl,
              resolve: {
                images: function() {
                  return $scope.images;
                },
                selectedImageIndex: function() {
                  return $scope.selectedImageIndex;
                }
              }
            });
          };
          return $scope.displayImage = function(img) {
            $scope.selectedImageIndex = $scope.images.indexOf(img);
            return $scope.open();
          };
        }
      };
    }
  ]);
});

define('directives/index',["directives/ccSpinner", "directives/ccWidgetHeader", "directives/ccWidgetMinimize", "directives/ccWidgetClose", "directives/ccNavigation", "directives/ccUploadPhotos", "directives/crNotAuth", "directives/crAuth", "directives/crDate", "directives/lightbox"], function() {});

define('filters/module',["angular"], function(ng) {
  return ng.module("app.filters", []);
});

define('filters/testFilter',["filters/module"], function(module) {
  return module.filter("testFilter", [
    function($scope) {
      return console.log("Evo nas");
    }
  ]);
});

define('filters/index',["filters/testFilter"], function() {});

define('services/module',["angular"], function(ng) {
  return ng.module("app.services", []);
});

define('services/categoryPictures',["./module"], function(module) {
  return module.service("categoryPictures", [
    function() {
      return {
        "Car": "car.jpg",
        "Caterers and event": "catering.jpg",
        "Computer and office service": "office.jpg",
        "Crafts and home construction": "homeConstruction.jpg",
        "Household and gardening": "gardening.jpg",
        "Learning and education": "education.jpg",
        "Money, tax, legal": "bookkeeping.jpg",
        "Pet care": "petCare.jpg",
        "Photo, design, internet": "design.jpg",
        "Style and wellness": "wellness.jpg",
        "Support and care": "support.jpg",
        "Transport and removals": "transport.jpg"
      };
    }
  ]);
});

define('services/user',["./module"], function(module) {
  return module.service("appUser", [
    "$rootScope", "$http", "$state", "logger", "cAPI", function($rootScope, $http, $state, logger, API) {
      var out;
      out = {
        username: null,
        notifications: "",
        type: "anon"
      };
      Object.defineProperty(out, "isLoggedIn", {
        get: function() {
          return out.username != null;
        }
      });
      Object.defineProperty(out, "getType", {
        get: function() {
          var _ref;
          return (_ref = out.type) != null ? _ref.toLowerCase() : void 0;
        }
      });
      out.load = function(data) {
        var k, v, _results;
        _results = [];
        for (k in data) {
          v = data[k];
          _results.push(out[k] = v);
        }
        return _results;
      };
      out.logout = function() {
        return $http.get(API.logout).success((function(_this) {
          return function(data) {
            return out = {
              type: "anon"
            };
          };
        })(this)).error(function(err) {
          return logger.error(err);
        })["finally"](function() {
          return $state.go("anon");
        });
      };
      $rootScope.appUser = out;
      return out;
    }
  ]);
});

(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define('GMaps', [], factory);
  }

  root.GMaps = factory();

}(this, function() {

/*!
 * GMaps.js v0.4.13
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2014, Gustavo Leon
 * Released under the MIT License.
 */

if (!(typeof window.google === 'object' && window.google.maps)) {
  throw 'Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.'
}

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    obj[name] = new_obj[name];
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, item);

      return callback.apply(this, callback_params);
    });
  }
  else {
    for (i = 0; i < array_length; i++) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, array[i]);
      array_return.push(callback.apply(this, callback_params));
    }
  }

  return array_return;
};

var array_flat = function(array) {
  var new_array = [],
      i;

  for (i = 0; i < array.length; i++) {
    new_array = new_array.concat(array[i]);
  }

  return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (coords[i].length > 0 && typeof(coords[i][0]) == "object") {
      coords[i] = arrayToLatLng(coords[i], useGeoJSON);
    }
    else {
      coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
    }
  }

  return coords;
};

var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in this && context) {
    element = $("#" + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};

var findAbsolutePosition = function(obj)  {
  var curleft = 0,
      curtop = 0;

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
};

var GMaps = (function(global) {
  

  var doc = document;

  var GMaps = function(options) {
    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var self = this,
        i,
        events_that_hide_context_menu = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed', 'resize', 'tilesloaded', 'zoom_changed'],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        container_id = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = options.zoomControl || true,
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = options.panControl || true,
        mapTypeControl = options.mapTypeControl || true,
        scaleControl = options.scaleControl || true,
        streetViewControl = options.streetViewControl || true,
        overviewMapControl = overviewMapControl || true,
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

    if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
      this.el = getElementById(container_id, options.context);
    } else {
      this.el = container_id;
    }

    if (typeof(this.el) === 'undefined' || this.el === null) {
      throw 'No element defined.';
    }

    window.context_menu = window.context_menu || {};
    window.context_menu[self.el.id] = {};

    this.controls = [];
    this.overlays = [];
    this.layers = []; // array with kml/georss and fusiontables layers, can be as many
    this.singleLayers = {}; // object with the other layers, only one per layer
    this.markers = [];
    this.polylines = [];
    this.routes = [];
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_el = null;
    this.zoom = options.zoom;
    this.registered_events = {};

    this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
    this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

    google.maps.visualRefresh = options.enableNewStyle;

    for (i = 0; i < options_to_be_deleted.length; i++) {
      delete options[options_to_be_deleted[i]];
    }

    if(options.disableDefaultUI != true) {
      map_base_options = extend_object(map_base_options, map_controls_options);
    }

    map_options = extend_object(map_base_options, options);

    for (i = 0; i < events_that_hide_context_menu.length; i++) {
      delete map_options[events_that_hide_context_menu[i]];
    }

    for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
      delete map_options[events_that_doesnt_hide_context_menu[i]];
    }

    this.map = new google.maps.Map(this.el, map_options);

    if (markerClustererFunction) {
      this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
    }

    var buildContextMenuHTML = function(control, e) {
      var html = '',
          options = window.context_menu[self.el.id][control];

      for (var i in options){
        if (options.hasOwnProperty(i)) {
          var option = options[i];

          html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
        }
      }

      if (!getElementById('gmaps_context_menu')) return;

      var context_menu_element = getElementById('gmaps_context_menu');
      
      context_menu_element.innerHTML = html;

      var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;

      for (i = 0; i < context_menu_items_count; i++) {
        var context_menu_item = context_menu_items[i];

        var assign_menu_item_action = function(ev){
          ev.preventDefault();

          options[this.id.replace(control + '_', '')].action.apply(self, [e]);
          self.hideContextMenu();
        };

        google.maps.event.clearListeners(context_menu_item, 'click');
        google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
      }

      var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y- 15;

      context_menu_element.style.left = left + "px";
      context_menu_element.style.top = top + "px";

      context_menu_element.style.display = 'block';
    };

    this.buildContextMenu = function(control, e) {
      if (control === 'marker') {
        e.pixel = {};

        var overlay = new google.maps.OverlayView();
        overlay.setMap(self.map);
        
        overlay.draw = function() {
          var projection = overlay.getProjection(),
              position = e.marker.getPosition();
          
          e.pixel = projection.fromLatLngToContainerPixel(position);

          buildContextMenuHTML(control, e);
        };
      }
      else {
        buildContextMenuHTML(control, e);
      }
    };

    this.setContextMenu = function(options) {
      window.context_menu[self.el.id][options.control] = {};

      var i,
          ul = doc.createElement('ul');

      for (i in options.options) {
        if (options.options.hasOwnProperty(i)) {
          var option = options.options[i];

          window.context_menu[self.el.id][options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }

      ul.id = 'gmaps_context_menu';
      ul.style.display = 'none';
      ul.style.position = 'absolute';
      ul.style.minWidth = '100px';
      ul.style.background = 'white';
      ul.style.listStyle = 'none';
      ul.style.padding = '8px';
      ul.style.boxShadow = '2px 2px 6px #ccc';

      doc.body.appendChild(ul);

      var context_menu_element = getElementById('gmaps_context_menu')

      google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
        if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
          window.setTimeout(function(){
            context_menu_element.style.display = 'none';
          }, 400);
        }
      }, false);
    };

    this.hideContextMenu = function() {
      var context_menu_element = getElementById('gmaps_context_menu');

      if (context_menu_element) {
        context_menu_element.style.display = 'none';
      }
    };

    var setupListener = function(object, name) {
      google.maps.event.addListener(object, name, function(e){
        if (e == undefined) {
          e = this;
        }

        options[name].apply(this, [e]);

        self.hideContextMenu();
      });
    };

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      var name = events_that_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      var name = events_that_doesnt_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      if(window.context_menu[self.el.id]['map'] != undefined) {
        self.buildContextMenu('map', e);
      }
    });

    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    this.fitZoom = function() {
      var latLngs = [],
          markers_length = this.markers.length,
          i;

      for (i = 0; i < markers_length; i++) {
        if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
          latLngs.push(this.markers[i].getPosition());
        }
      }

      this.fitLatLngBounds(latLngs);
    };

    this.fitLatLngBounds = function(latLngs) {
      var total = latLngs.length;
      var bounds = new google.maps.LatLngBounds();

      for(var i=0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));

      if (callback) {
        callback();
      }
    };

    this.getElement = function() {
      return this.el;
    };

    this.zoomIn = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() + value;
      this.map.setZoom(this.zoom);
    };

    this.zoomOut = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() - value;
      this.map.setZoom(this.zoom);
    };

    var native_methods = [],
        method;

    for (method in this.map) {
      if (typeof(this.map[method]) == 'function' && !this[method]) {
        native_methods.push(method);
      }
    }

    for (i=0; i < native_methods.length; i++) {
      (function(gmaps, scope, method_name) {
        gmaps[method_name] = function(){
          return scope[method_name].apply(scope, arguments);
        };
      })(this, this.map, native_methods[i]);
    }
  };

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
  var control = document.createElement('div');

  control.style.cursor = 'pointer';
  
  if (options.disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  for (var option in options.style) {
    control.style[option] = options.style[option];
  }

  if (options.id) {
    control.id = options.id;
  }

  if (options.classes) {
    control.className = options.classes;
  }

  if (options.content) {
    control.innerHTML = options.content;
  }

  if (options.position) {
    control.position = google.maps.ControlPosition[options.position.toUpperCase()];
  }

  for (var ev in options.events) {
    (function(object, name) {
      google.maps.event.addDomListener(object, name, function(){
        options.events[name].apply(this, [this]);
      });
    })(control, ev);
  }

  control.index = 1;

  return control;
};

GMaps.prototype.addControl = function(options) {
  var control = this.createControl(options);
  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

GMaps.prototype.removeControl = function(control) {
  var position = null;

  for (var i = 0; i < this.controls.length; i++) {
    if (this.controls[i] == control) {
      position = this.controls[i].position;
      this.controls.splice(i, 1);
    }
  }

  if (position) {
    for (i = 0; i < this.map.controls.length; i++) {
      var controlsForPosition = this.map.controls[control.position]
      if (controlsForPosition.getAt(i) == control) {
        controlsForPosition.removeAt(i);
        break;
      }
    }
  }

  return control;
};

GMaps.prototype.createMarker = function(options) {
  if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
    throw 'No latitude or longitude defined.';
  }

  var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);

  delete marker_options.lat;
  delete marker_options.lng;
  delete marker_options.fences;
  delete marker_options.outside;

  var marker = new google.maps.Marker(marker_options);

  marker.fences = fences;

  if (options.infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

    var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

    for (var ev = 0; ev < info_window_events.length; ev++) {
      (function(object, name) {
        if (options.infoWindow[name]) {
          google.maps.event.addListener(object, name, function(e){
            options.infoWindow[name].apply(this, [e]);
          });
        }
      })(marker.infoWindow, info_window_events[ev]);
    }
  }

  var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

  var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

  for (var ev = 0; ev < marker_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this, [this]);
        });
      }
    })(marker, marker_events[ev]);
  }

  for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
    (function(map, object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(me){
          if(!me.pixel){
            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
          }
          
          options[name].apply(this, [me]);
        });
      }
    })(this.map, marker, marker_events_with_mouse[ev]);
  }

  google.maps.event.addListener(marker, 'click', function() {
    this.details = details;

    if (options.click) {
      options.click.apply(this, [this]);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function(e) {
    e.marker = this;

    if (options.rightclick) {
      options.rightclick.apply(this, [e]);
    }

    if (window.context_menu[self.el.id]['marker'] != undefined) {
      self.buildContextMenu('marker', e);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function() {
      self.checkMarkerGeofence(marker, function(m, f) {
        outside(m, f);
      });
    });
  }

  return marker;
};

GMaps.prototype.addMarker = function(options) {
  var marker;
  if(options.hasOwnProperty('gm_accessors_')) {
    // Native google.maps.Marker object
    marker = options;
  }
  else {
    if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
      marker = this.createMarker(options);
    }
    else {
      throw 'No latitude or longitude defined.';
    }
  }

  marker.setMap(this.map);

  if(this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

GMaps.prototype.addMarkers = function(array) {
  for (var i = 0, marker; marker=array[i]; i++) {
    this.addMarker(marker);
  }

  return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
  for (var i = 0, marker; marker = this.markers[i]; i++){
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  }
};

GMaps.prototype.removeMarker = function(marker) {
  for (var i = 0; i < this.markers.length; i++) {
    if (this.markers[i] === marker) {
      this.markers[i].setMap(null);
      this.markers.splice(i, 1);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);

      break;
    }
  }

  return marker;
};

GMaps.prototype.removeMarkers = function (collection) {
  var new_markers = [];

  if (typeof collection == 'undefined') {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    
    this.markers = new_markers;
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      if (this.markers.indexOf(collection[i]) > -1) {
        this.markers[i].setMap(null);
      }
    }

    for (var i = 0; i < this.markers.length; i++) {
      if (this.markers[i].getMap() != null) {
        new_markers.push(this.markers[i]);
      }
    }

    this.markers = new_markers;
  }
};

GMaps.prototype.drawOverlay = function(options) {
  var overlay = new google.maps.OverlayView(),
      auto_show = true;

  overlay.setMap(this.map);

  if (options.auto_show != null) {
    auto_show = options.auto_show;
  }

  overlay.onAdd = function() {
    var el = document.createElement('div');

    el.style.borderStyle = "none";
    el.style.borderWidth = "0px";
    el.style.position = "absolute";
    el.style.zIndex = 100;
    el.innerHTML = options.content;

    overlay.el = el;

    if (!options.layer) {
      options.layer = 'overlayLayer';
    }
    
    var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

    overlayLayer.appendChild(el);

    for (var ev = 0; ev < stop_overlay_events.length; ev++) {
      (function(object, name) {
        google.maps.event.addDomListener(object, name, function(e){
          if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
            e.cancelBubble = true;
            e.returnValue = false;
          }
          else {
            e.stopPropagation();
          }
        });
      })(el, stop_overlay_events[ev]);
    }

    if (options.click) {
      google.maps.event.addDomListener(overlay.el, 'click', function() {
        options.click.apply(overlay, [overlay]);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function() {
    var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

    options.horizontalOffset = options.horizontalOffset || 0;
    options.verticalOffset = options.verticalOffset || 0;

    var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;

    switch (options.verticalAlign) {
      case 'top':
        el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
        break;
      default:
      case 'middle':
        el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
        break;
      case 'bottom':
        el.style.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
  var path = [],
      points = options.path;

  if (points.length) {
    if (points[0][0] === undefined) {
      path = points;
    }
    else {
      for (var i=0, latlng; latlng=points[i]; i++) {
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }
  }

  var polyline_options = {
    map: this.map,
    path: path,
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight,
    geodesic: options.geodesic,
    clickable: true,
    editable: false,
    visible: true
  };

  if (options.hasOwnProperty("clickable")) {
    polyline_options.clickable = options.clickable;
  }

  if (options.hasOwnProperty("editable")) {
    polyline_options.editable = options.editable;
  }

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  if (options.hasOwnProperty("zIndex")) {
    polyline_options.zIndex = options.zIndex;
  }

  var polyline = new google.maps.Polyline(polyline_options);

  var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polyline_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polyline, polyline_events[ev]);
  }

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
  for (var i = 0; i < this.polylines.length; i++) {
    if (this.polylines[i] === polyline) {
      this.polylines[i].setMap(null);
      this.polylines.splice(i, 1);

      GMaps.fire('polyline_removed', polyline, this);

      break;
    }
  }
};

GMaps.prototype.removePolylines = function() {
  for (var i = 0, item; item = this.polylines[i]; i++) {
    item.setMap(null);
  }

  this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
  options =  extend_object({
    map: this.map,
    center: new google.maps.LatLng(options.lat, options.lng)
  }, options);

  delete options.lat;
  delete options.lng;

  var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
  options = extend_object({
    map: this.map
  }, options);

  var latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
    new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
  );

  options.bounds = latLngBounds;

  var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
  var useGeoJSON = false;

  if(options.hasOwnProperty("useGeoJSON")) {
    useGeoJSON = options.useGeoJSON;
  }

  delete options.useGeoJSON;

  options = extend_object({
    map: this.map
  }, options);

  if (useGeoJSON == false) {
    options.paths = [options.paths.slice(0)];
  }

  if (options.paths.length > 0) {
    if (options.paths[0].length > 0) {
      options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
    }
  }

  var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
  for (var i = 0; i < this.polygons.length; i++) {
    if (this.polygons[i] === polygon) {
      this.polygons[i].setMap(null);
      this.polygons.splice(i, 1);

      GMaps.fire('polygon_removed', polygon, this);

      break;
    }
  }
};

GMaps.prototype.removePolygons = function() {
  for (var i = 0, item; item = this.polygons[i]; i++) {
    item.setMap(null);
  }

  this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
  var events = options.events;

  delete options.events;

  var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function(options) {
  var url = options.url,
      events = options.events;

  delete options.url;
  delete options.events;

  var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromKML = function(options) {
  var layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
  //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
  options = options || {};
  var layer;

  switch(layerName) {
    case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
      break;
    case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
      break;
    case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
      break;
    case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
      break;
    case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
      break;
    case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;

        //click event
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function(event) {
            options.click(event);
            delete options.click;
          });
        }
      break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

        //search, nearbySearch, radarSearch callback, Both are the same
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest  = {
            bounds : options.bounds || null,
            keyword : options.keyword || null,
            location : options.location || null,
            name : options.name || null,
            radius : options.radius || null,
            rankBy : options.rankBy || null,
            types : options.types || null
          };

          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }

          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }

          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }

        //textSearch callback
        if (options.textSearch) {
          var textSearchRequest  = {
            bounds : options.bounds || null,
            location : options.location || null,
            query : options.query || null,
            radius : options.radius || null
          };

          layer.textSearch(textSearchRequest, options.textSearch);
        }
      break;
  }

  if (layer !== undefined) {
    if (typeof layer.setOptions == 'function') {
      layer.setOptions(options);
    }
    if (typeof layer.setMap == 'function') {
      layer.setMap(this.map);
    }

    return layer;
  }
};

GMaps.prototype.removeLayer = function(layer) {
  if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
     this.singleLayers[layer].setMap(null);

     delete this.singleLayers[layer];
  }
  else {
    for (var i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === layer) {
        this.layers[i].setMap(null);
        this.layers.splice(i, 1);

        break;
      }
    }
  }
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
  switch (options.travelMode) {
    case 'bicycling':
      travelMode = google.maps.TravelMode.BICYCLING;
      break;
    case 'transit':
      travelMode = google.maps.TravelMode.TRANSIT;
      break;
    case 'driving':
      travelMode = google.maps.TravelMode.DRIVING;
      break;
    default:
      travelMode = google.maps.TravelMode.WALKING;
      break;
  }

  if (options.unitSystem === 'imperial') {
    unitSystem = google.maps.UnitSystem.IMPERIAL;
  }
  else {
    unitSystem = google.maps.UnitSystem.METRIC;
  }

  var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options =  extend_object(base_options, options);

  request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
  request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
  request_options.travelMode = travelMode;
  request_options.unitSystem = unitSystem;

  delete request_options.callback;
  delete request_options.error;

  var self = this,
      service = new google.maps.DirectionsService();

  service.route(request_options, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var r in result.routes) {
        if (result.routes.hasOwnProperty(r)) {
          self.routes.push(result.routes[r]);
        }
      }

      if (options.callback) {
        options.callback(self.routes);
      }
    }
    else {
      if (options.error) {
        options.error(result, status);
      }
    }
  });
};

GMaps.prototype.removeRoutes = function() {
  this.routes = [];
};

GMaps.prototype.getElevations = function(options) {
  options = extend_object({
    locations: [],
    path : false,
    samples : 256
  }, options);

  if (options.locations.length > 0) {
    if (options.locations[0].length > 0) {
      options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
    }
  }

  var callback = options.callback;
  delete options.callback;

  var service = new google.maps.ElevationService();

  //location request
  if (!options.path) {
    delete options.path;
    delete options.samples;

    service.getElevationForLocations(options, function(result, status) {
      if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  //path request
  } else {
    var pathRequest = {
      path : options.locations,
      samples : options.samples
    };

    service.getElevationAlongPath(pathRequest, function(result, status) {
     if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  }
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.drawRoute = function(options) {
  var self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    callback: function(e) {
      if (e.length > 0) {
        self.drawPolyline({
          path: e[e.length - 1].overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        });
        
        if (options.callback) {
          options.callback(e[e.length - 1]);
        }
      }
    }
  });
};

GMaps.prototype.travelRoute = function(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i=0, step; step=steps[i]; i++) {
              step.step_number = i;
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i=0, step; step=steps[i]; i++) {
        step.step_number = i;
        options.step(step);
      }
    }
  }
};

GMaps.prototype.drawSteppedRoute = function(options) {
  var self = this;
  
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i=0, step; step=steps[i]; i++) {
              step.step_number = i;
              self.drawPolyline({
                path: step.path,
                strokeColor: options.strokeColor,
                strokeOpacity: options.strokeOpacity,
                strokeWeight: options.strokeWeight
              });
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i=0, step; step=steps[i]; i++) {
        step.step_number = i;
        self.drawPolyline({
          path: step.path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        });
        options.step(step);
      }
    }
  }
};

GMaps.Route = function(options) {
  this.origin = options.origin;
  this.destination = options.destination;
  this.waypoints = options.waypoints;

  this.map = options.map;
  this.route = options.route;
  this.step_count = 0;
  this.steps = this.route.legs[0].steps;
  this.steps_length = this.steps.length;

  this.polyline = this.map.drawPolyline({
    path: new google.maps.MVCArray(),
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight
  }).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
  var self = this;

  this.map.getRoutes({
    origin : this.origin,
    destination : this.destination,
    travelMode : options.travelMode,
    waypoints : this.waypoints || [],
    error: options.error,
    callback : function() {
      self.route = e[0];

      if (options.callback) {
        options.callback.call(self);
      }
    }
  });
};

GMaps.Route.prototype.back = function() {
  if (this.step_count > 0) {
    this.step_count--;
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.pop();
      }
    }
  }
};

GMaps.Route.prototype.forward = function() {
  if (this.step_count < this.steps_length) {
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.push(path[p]);
      }
    }
    this.step_count++;
  }
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
  return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
  if (marker.fences) {
    for (var i = 0, fence; fence = marker.fences[i]; i++) {
      var pos = marker.getPosition();
      if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
        outside_callback(marker, fence);
      }
    }
  }
};

GMaps.prototype.toImage = function(options) {
  var options = options || {},
      static_map_options = {};

  static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
  static_map_options['lat'] = this.getCenter().lat();
  static_map_options['lng'] = this.getCenter().lng();

  if (this.markers.length > 0) {
    static_map_options['markers'] = [];
    
    for (var i = 0; i < this.markers.length; i++) {
      static_map_options['markers'].push({
        lat: this.markers[i].getPosition().lat(),
        lng: this.markers[i].getPosition().lng()
      });
    }
  }

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    
    static_map_options['polyline'] = {};
    static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
    static_map_options['polyline']['strokeColor'] = polyline.strokeColor
    static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
    static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
  }

  return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
  var parameters = [],
      data,
      static_root = 'http://maps.googleapis.com/maps/api/staticmap';

  if (options.url) {
    static_root = options.url;
    delete options.url;
  }

  static_root += '?';

  var markers = options.markers;
  
  delete options.markers;

  if (!markers && options.marker) {
    markers = [options.marker];
    delete options.marker;
  }

  var styles = options.styles;

  delete options.styles;

  var polyline = options.polyline;
  delete options.polyline;

  /** Map options **/
  if (options.center) {
    parameters.push('center=' + options.center);
    delete options.center;
  }
  else if (options.address) {
    parameters.push('center=' + options.address);
    delete options.address;
  }
  else if (options.lat) {
    parameters.push(['center=', options.lat, ',', options.lng].join(''));
    delete options.lat;
    delete options.lng;
  }
  else if (options.visible) {
    var visible = encodeURI(options.visible.join('|'));
    parameters.push('visible=' + visible);
  }

  var size = options.size;
  if (size) {
    if (size.join) {
      size = size.join('x');
    }
    delete options.size;
  }
  else {
    size = '630x300';
  }
  parameters.push('size=' + size);

  if (!options.zoom && options.zoom !== false) {
    options.zoom = 15;
  }

  var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
  delete options.sensor;
  parameters.push('sensor=' + sensor);

  for (var param in options) {
    if (options.hasOwnProperty(param)) {
      parameters.push(param + '=' + options[param]);
    }
  }

  /** Markers **/
  if (markers) {
    var marker, loc;

    for (var i=0; data=markers[i]; i++) {
      marker = [];

      if (data.size && data.size !== 'normal') {
        marker.push('size:' + data.size);
        delete data.size;
      }
      else if (data.icon) {
        marker.push('icon:' + encodeURI(data.icon));
        delete data.icon;
      }

      if (data.color) {
        marker.push('color:' + data.color.replace('#', '0x'));
        delete data.color;
      }

      if (data.label) {
        marker.push('label:' + data.label[0].toUpperCase());
        delete data.label;
      }

      loc = (data.address ? data.address : data.lat + ',' + data.lng);
      delete data.address;
      delete data.lat;
      delete data.lng;

      for(var param in data){
        if (data.hasOwnProperty(param)) {
          marker.push(param + ':' + data[param]);
        }
      }

      if (marker.length || i === 0) {
        marker.push(loc);
        marker = marker.join('|');
        parameters.push('markers=' + encodeURI(marker));
      }
      // New marker without styles
      else {
        marker = parameters.pop() + encodeURI('|' + loc);
        parameters.push(marker);
      }
    }
  }

  /** Map Styles **/
  if (styles) {
    for (var i = 0; i < styles.length; i++) {
      var styleRule = [];
      if (styles[i].featureType){
        styleRule.push('feature:' + styles[i].featureType.toLowerCase());
      }

      if (styles[i].elementType) {
        styleRule.push('element:' + styles[i].elementType.toLowerCase());
      }

      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          var ruleArg = styles[i].stylers[j][p];
          if (p == 'hue' || p == 'color') {
            ruleArg = '0x' + ruleArg.substring(1);
          }
          styleRule.push(p + ':' + ruleArg);
        }
      }

      var rule = styleRule.join('|');
      if (rule != '') {
        parameters.push('style=' + rule);
      }
    }
  }

  /** Polylines **/
  function parseColor(color, opacity) {
    if (color[0] === '#'){
      color = color.replace('#', '0x');

      if (opacity) {
        opacity = parseFloat(opacity);
        opacity = Math.min(1, Math.max(opacity, 0));
        if (opacity === 0) {
          return '0x00000000';
        }
        opacity = (opacity * 255).toString(16);
        if (opacity.length === 1) {
          opacity += opacity;
        }

        color = color.slice(0,8) + opacity;
      }
    }
    return color;
  }

  if (polyline) {
    data = polyline;
    polyline = [];

    if (data.strokeWeight) {
      polyline.push('weight:' + parseInt(data.strokeWeight, 10));
    }

    if (data.strokeColor) {
      var color = parseColor(data.strokeColor, data.strokeOpacity);
      polyline.push('color:' + color);
    }

    if (data.fillColor) {
      var fillcolor = parseColor(data.fillColor, data.fillOpacity);
      polyline.push('fillcolor:' + fillcolor);
    }

    var path = data.path;
    if (path.join) {
      for (var j=0, pos; pos=path[j]; j++) {
        polyline.push(pos.join(','));
      }
    }
    else {
      polyline.push('enc:' + path);
    }

    polyline = polyline.join('|');
    parameters.push('path=' + encodeURI(polyline));
  }

  /** Retina support **/
  var dpi = window.devicePixelRatio || 1;
  parameters.push('scale=' + dpi);

  parameters = parameters.join('&');
  return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
  if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
    options.tileSize = options.tileSize || new google.maps.Size(256, 256);

    var mapType = new google.maps.ImageMapType(options);

    this.map.mapTypes.set(mapTypeId, mapType);
  }
  else {
    throw "'getTileUrl' function required.";
  }
};

GMaps.prototype.addOverlayMapType = function(options) {
  if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
    var overlayMapTypeIndex = options.index;

    delete options.index;

    this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
  }
  else {
    throw "'getTile' function required.";
  }
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
  this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

  for (var i = 0; i < streetview_events.length; i++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this);
        });
      }
    })(panorama, streetview_events[i]);
  }

  return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
  return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
  GMaps.off(event_name, this);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    return google.maps.event.addListener(object, event_name, handler);
  }
  else {
    var registered_event = {
      handler : handler,
      eventName : event_name
    };

    object.registered_events[event_name] = object.registered_events[event_name] || [];
    object.registered_events[event_name].push(registered_event);

    return registered_event;
  }
};

GMaps.off = function(event_name, object) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    google.maps.event.clearListeners(object, event_name);
  }
  else {
    object.registered_events[event_name] = [];
  }
};

GMaps.fire = function(event_name, object, scope) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
  }
  else {
    if(event_name in scope.registered_events) {
      var firing_events = scope.registered_events[event_name];

      for(var i = 0; i < firing_events.length; i++) {
        (function(handler, scope, object) {
          handler.apply(scope, [object]);
        })(firing_events[i]['handler'], scope, object);
      }
    }
  }
};

GMaps.geolocate = function(options) {
  var complete_callback = options.always || options.complete;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      options.success(position);

      if (complete_callback) {
        complete_callback();
      }
    }, function(error) {
      options.error(error);

      if (complete_callback) {
        complete_callback();
      }
    }, options.options);
  }
  else {
    options.not_supported();

    if (complete_callback) {
      complete_callback();
    }
  }
};

GMaps.geocode = function(options) {
  this.geocoder = new google.maps.Geocoder();
  var callback = options.callback;
  if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
    options.latLng = new google.maps.LatLng(options.lat, options.lng);
  }

  delete options.lat;
  delete options.lng;
  delete options.callback;
  
  this.geocoder.geocode(options, function(results, status) {
    callback(results, status);
  });
};

//==========================
// Polygon containsLatLng
// https://github.com/tparkin/Google-Maps-Point-in-Polygon
// Poygon getBounds extension - google-maps-extensions
// http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
if (!google.maps.Polygon.prototype.getBounds) {
  google.maps.Polygon.prototype.getBounds = function(latLng) {
    var bounds = new google.maps.LatLngBounds();
    var paths = this.getPaths();
    var path;

    for (var p = 0; p < paths.getLength(); p++) {
      path = paths.getAt(p);
      for (var i = 0; i < path.getLength(); i++) {
        bounds.extend(path.getAt(i));
      }
    }

    return bounds;
  };
}

if (!google.maps.Polygon.prototype.containsLatLng) {
  // Polygon containsLatLng - method to determine if a latLng is within a polygon
  google.maps.Polygon.prototype.containsLatLng = function(latLng) {
    // Exclude points outside of bounds as there is no way they are in the poly
    var bounds = this.getBounds();

    if (bounds !== null && !bounds.contains(latLng)) {
      return false;
    }

    // Raycast point in polygon method
    var inPoly = false;

    var numPaths = this.getPaths().getLength();
    for (var p = 0; p < numPaths; p++) {
      var path = this.getPaths().getAt(p);
      var numPoints = path.getLength();
      var j = numPoints - 1;

      for (var i = 0; i < numPoints; i++) {
        var vertex1 = path.getAt(i);
        var vertex2 = path.getAt(j);

        if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
          if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
            inPoly = !inPoly;
          }
        }

        j = i;
      }
    }

    return inPoly;
  };
}

google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
  return this.contains(latLng);
};

google.maps.Marker.prototype.setFences = function(fences) {
  this.fences = fences;
};

google.maps.Marker.prototype.addFence = function(fence) {
  this.fences.push(fence);
};

google.maps.Marker.prototype.getId = function() {
  return this['__gm_id'];
};

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      
      if (this == null) {
          throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
              n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  }
}
  
return GMaps;
}));

define("gmaps", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.GMaps;
    };
}(this)));

define('services/gmaps',["./module", "gmaps"], function(module, GMaps) {
  var map;
  map = null;
  return module.service("gmaps", function() {
    return {
      showAddress: function(_arg) {
        var address, container, done;
        address = _arg.address, container = _arg.container, done = _arg.done;
        map = new GMaps({
          div: container,
          lat: 0,
          lng: 0
        });
        GMaps.geocode({
          address: address,
          callback: function(results, status) {
            var lat, latlng, long;
            if (status !== "OK") {
              return typeof done === "function" ? done(status) : void 0;
            }
            latlng = results[0].geometry.location;
            lat = latlng.lat();
            long = latlng.lng();
            return map.setCenter(lat, long, function() {
              map.addMarker({
                lat: lat,
                lng: long
              });
              return typeof done === "function" ? done(status, map) : void 0;
            });
          }
        });
        return map;
      },
      showRoute: function(routeA, routeB) {
        return "";
      }
    };
  });
});

define('services/index',["./categoryPictures", "./user", "./gmaps"], function() {});

define('app',["angular", "capi", "factories/index", "controllers/index", "directives/index", "filters/index", "services/index"], function(ng, API) {
  ng.module("app.constants", []).factory("cAPI", function() {
    return API;
  });
  ng.module("app", ["ngRoute", "ngAnimate", "angular-carousel", "angularFileUpload", "ui.router", "ui.bootstrap", "ui.bootstrap.modal", "app.customControllers", "app.factories", "app.services", "app.controllers", "app.filters", "app.directives", "app.constants"]);
  return ng.module("app").constant("cAPI", API);
});

define('routes',["app", "angular"], function(app, ng) {
  return app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index", {
      url: "",
      controller: [
        "$state", "appUser", function($state, appUser) {
          return $state.go(appUser.getType);
        }
      ]
    });
    $stateProvider.state("anon", {
      url: "/anon",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        },
        "navmenu@anon": {
          templateUrl: "shared/templates/layout/anonMainNav.html"
        },
        "navSubMenu@anon": {
          templateUrl: "shared/templates/layout/navSubMenu.html"
        },
        "navbar@anon": {
          templateUrl: "shared/templates/layout/anonUserBar.html"
        },
        "shell@anon": {
          templateUrl: "shared/templates/layout/anonMainShell.html",
          controller: "AnonCtrl"
        }
      }
    }).state("anon.createJob", {
      url: "/createJob",
      views: {
        "shell@anon": {
          template: "<div ng-if=\"firstStep\" ng-include=\"'shared/templates/forms/createJob1.html'\"></div>\n<div ng-if=\"secondStep\" ng-include=\"'shared/templates/forms/createJob2.html'\"></div>",
          controller: "CreateJobCtrl"
        }
      }
    }).state("anon.yellowPages", {
      url: "/yellowPages",
      views: {
        "shell@anon": {
          templateUrl: "/shared/templates/layout/yellowPages.html",
          controller: "YellowPagesCtrl"
        }
      }
    }).state("anon.login", {
      url: "/login",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/login.html",
          controller: "LoginCtrl"
        }
      }
    }).state("anon.register", {
      url: "/register",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/registration.html"
        }
      }
    }).state("anon.register.customer", {
      url: "/customer",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/registerCustomer.html",
          controller: "RegisterCtrl"
        }
      }
    }).state("anon.register.craftsman", {
      url: "/craftsman",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/forms/registerCraftsman.html",
          controller: "RegisterCtrl"
        }
      }
    }).state("anon.craftsmanMenu", {
      url: "/craftsmanMenu",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        },
        "navSubMenu@anon": {
          templateUrl: "shared/templates/layout/craftsmanMenu.html"
        }
      }
    }).state("anon.findJobs", {
      url: "/findJobs",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html",
          controller: "FindJobsCtrl"
        }
      }
    }).state("anon.requirements", {
      url: "/requirements",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/requirements.html"
        }
      }
    }).state("anon.howto", {
      url: "/howto",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/howto.html"
        }
      }
    }).state("anon.prices", {
      url: "/prices",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/prices.html"
        }
      }
    });
    $stateProvider.state("customer", {
      url: "/customer",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        },
        "navmenu@customer": {
          templateUrl: "shared/templates/layout/customerMainNav.html",
          controller: "NavCtrl"
        },
        "navbar@customer": {
          templateUrl: "shared/templates/layout/customerBar.html"
        }
      }
    }).state("customer.profile", {
      url: "/profile",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/forms/customerProfile.html",
          controller: "CustomerProfileCtrl"
        }
      }
    }).state("customer.notifications", {
      url: "/notifications",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/layout/notifications.html",
          controller: "NotificationsCtrl"
        }
      }
    }).state("customer.messages", {
      url: "/messages",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/layout/inbox.html",
          controller: "InboxCtrl"
        }
      }
    }).state("customer.messages.sent", {
      url: "/sent",
      views: {
        "main@customer.messages": {
          templateUrl: "/shared/templates/layout/sentMessages.html"
        }
      }
    }).state("customer.messages.received", {
      url: "/received",
      views: {
        "main@customer.messages": {
          templateUrl: "/shared/templates/layout/receivedMessages.html"
        }
      }
    }).state("customer.jobs", {
      url: "/jobs",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/layout/customerJobList.html",
          controller: "CustomerJobsCtrl"
        }
      }
    }).state("customer.createJob", {
      url: "/createJob",
      views: {
        "shell@customer": {
          template: "<div ng-if=\"firstStep\" ng-include=\"'shared/templates/forms/createJob1.html'\"></div>\n<div ng-if=\"secondStep\" ng-include=\"'shared/templates/forms/createJob2.html'\"></div>",
          controller: "CreateJobCtrl"
        }
      }
    }).state("customer.editJob", {
      url: "/editJob/:jobId",
      views: {
        "shell@customer": {
          templateUrl: "shared/templates/forms/editJob.html",
          controller: "EditJobCtrl"
        }
      }
    }).state("customer.findJobs", {
      url: "/findJobs",
      views: {
        "shell@anon": {
          templateUrl: "shared/templates/layout/findJobs.html"
        }
      }
    }).state("customer.yellowPages", {
      url: "/yellowPages",
      views: {
        "shell@customer": {
          templateUrl: "/shared/templates/layout/yellowPages.html",
          controller: "CustomerYellowPagesCtrl"
        }
      }
    });
    $stateProvider.state("craftsman", {
      url: "/craftsman",
      views: {
        "": {
          templateUrl: "shared/templates/layout/shell.html",
          controller: "ShellCtrl"
        },
        "navmenu@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanMainNav.html",
          controller: "NavCtrl"
        },
        "navbar@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanBar.html"
        }
      }
    }).state("craftsman.messages", {
      url: "/messages",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/inbox.html",
          controller: "InboxCtrl"
        }
      }
    }).state("craftsman.messages.sent", {
      url: "/sent",
      views: {
        "main@craftsman.messages": {
          templateUrl: "/shared/templates/layout/sentMessages.html"
        }
      }
    }).state("craftsman.messages.received", {
      url: "/received",
      views: {
        "main@craftsman.messages": {
          templateUrl: "/shared/templates/layout/receivedMessages.html"
        }
      }
    }).state("craftsman.myJobs", {
      url: "/myJobs",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanMyJobs.html",
          controller: "CraftsmanMyJobsCtrl"
        }
      }
    }).state("craftsman.findJobs", {
      url: "/findJobs",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/craftsmanFindJobs.html",
          controller: "CraftsmanFindJobsCtrl"
        }
      }
    }).state("craftsman.yellowPages", {
      url: "/yellowPages",
      views: {
        "shell@craftsman": {
          templateUrl: "/shared/templates/layout/yellowPages.html",
          controller: "CraftsmanYellowPagesCtrl"
        }
      }
    }).state("craftsman.notifications", {
      url: "/notifications",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/layout/notifications.html",
          controller: "NotificationsCtrl"
        }
      }
    }).state("craftsman.profile", {
      url: "/profile",
      views: {
        "shell@craftsman": {
          templateUrl: "shared/templates/forms/craftsmanProfile.html",
          controller: "CraftsmanProfileCtrl"
        }
      }
    });
    return $urlRouterProvider.otherwise("");
  }).run([
    "$state", "$location", "$http", "$rootScope", "$urlMatcherFactory", "cAPI", "logger", "appUser", function($state, $location, $http, $rootScope, $urlMatcherFactory, API, logger, appUser) {
      var lastState;
      lastState = null;
      $rootScope.$on("$stateChangeStart", function(ev, toState, toParams, fromState, fromParams) {
        var isLoggedIn, nextState, type, typeRe;
        isLoggedIn = appUser.isLoggedIn;
        type = appUser.getType;
        typeRe = new RegExp("^[" + type + "|index]+.*", "g");
        nextState = toState.name;
        fromState = fromState.name;
        $(".shellic").fadeOut(500);
        $(".shellic").fadeIn(500);
        if (!typeRe.test(nextState)) {
          logger.log("Access denied to state " + nextState);
          ev.preventDefault();
          if (lastState !== nextState) {
            lastState || (lastState = appUser.getType);
            logger.log("Trying state " + lastState);
            return $state.go(lastState);
          }
        }
      });
      return $rootScope.$on("$stateChangeSuccess", function(ev, toState, toParams, fromState, fromParams) {
        return lastState = toState.name;
      });
    }
  ]);
});

/*! RateIt | v1.0.22 / 05/27/2014 | https://rateit.codeplex.com/license
    http://rateit.codeplex.com | Twitter: @gjunge
*/
(function(n){function t(n){var u=n.originalEvent.changedTouches,t=u[0],i="",r;switch(n.type){case"touchmove":i="mousemove";break;case"touchend":i="mouseup";break;default:return}r=document.createEvent("MouseEvent");r.initMouseEvent(i,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null);t.target.dispatchEvent(r);n.preventDefault()}n.rateit={aria:{resetLabel:"reset rating",ratingLabel:"rating"}};n.fn.rateit=function(i,r){var e=1,u={},o="init",s=function(n){return n.charAt(0).toUpperCase()+n.substr(1)},f;if(this.length===0)return this;if(f=n.type(i),f=="object"||i===undefined||i===null)u=n.extend({},n.fn.rateit.defaults,i);else{if(f=="string"&&i!=="reset"&&r===undefined)return this.data("rateit"+s(i));f=="string"&&(o="setvalue")}return this.each(function(){var c=n(this),f=function(n,t){if(t!=null){var i="aria-value"+(n=="value"?"now":n),r=c.find(".rateit-range");r.attr(i)!=undefined&&r.attr(i,t)}return arguments[0]="rateit"+s(n),c.data.apply(c,arguments)},p,w,v,h,b,g,nt,l,y,k,a;if(i=="reset"){p=f("init");for(w in p)c.data(w,p[w]);f("backingfld")&&(h=n(f("backingfld")),h.val(f("value")),h.trigger("change"),h[0].min&&(h[0].min=f("min")),h[0].max&&(h[0].max=f("max")),h[0].step&&(h[0].step=f("step")));c.trigger("reset")}if(c.hasClass("rateit")||c.addClass("rateit"),v=c.css("direction")!="rtl",o=="setvalue"){if(!f("init"))throw"Can't set value before init";i!="readonly"||r!=!0||f("readonly")||(c.find(".rateit-range").unbind(),f("wired",!1));i=="value"&&(r=r==null?f("min"):Math.max(f("min"),Math.min(f("max"),r)));f("backingfld")&&(h=n(f("backingfld")),i=="value"&&h.val(r),i=="min"&&h[0].min&&(h[0].min=r),i=="max"&&h[0].max&&(h[0].max=r),i=="step"&&h[0].step&&(h[0].step=r));f(i,r)}f("init")||(f("min",isNaN(f("min"))?u.min:f("min")),f("max",isNaN(f("max"))?u.max:f("max")),f("step",f("step")||u.step),f("readonly",f("readonly")!==undefined?f("readonly"):u.readonly),f("resetable",f("resetable")!==undefined?f("resetable"):u.resetable),f("backingfld",f("backingfld")||u.backingfld),f("starwidth",f("starwidth")||u.starwidth),f("starheight",f("starheight")||u.starheight),f("value",Math.max(f("min"),Math.min(f("max"),isNaN(f("value"))?isNaN(u.value)?u.min:u.value:f("value")))),f("ispreset",f("ispreset")!==undefined?f("ispreset"):u.ispreset),f("backingfld")&&(h=n(f("backingfld")).hide(),(h.attr("disabled")||h.attr("readonly"))&&f("readonly",!0),h[0].nodeName=="INPUT"&&(h[0].type=="range"||h[0].type=="text")&&(f("min",parseInt(h.attr("min"))||f("min")),f("max",parseInt(h.attr("max"))||f("max")),f("step",parseInt(h.attr("step"))||f("step"))),h[0].nodeName=="SELECT"&&h[0].options.length>1?(f("min",isNaN(f("min"))?Number(h[0].options[0].value):f("min")),f("max",Number(h[0].options[h[0].length-1].value)),f("step",Number(h[0].options[1].value)-Number(h[0].options[0].value)),b=h.find("option[selected]"),b.length==1&&f("value",b.val())):f("value",h.val())),g=c[0].nodeName=="DIV"?"div":"span",e++,nt='<button id="rateit-reset-{{index}}" type="button" data-role="none" class="rateit-reset" aria-label="'+n.rateit.aria.resetLabel+'" aria-controls="rateit-range-{{index}}"><\/button><{{element}} id="rateit-range-{{index}}" class="rateit-range" tabindex="0" role="slider" aria-label="'+n.rateit.aria.ratingLabel+'" aria-owns="rateit-reset-{{index}}" aria-valuemin="'+f("min")+'" aria-valuemax="'+f("max")+'" aria-valuenow="'+f("value")+'"><{{element}} class="rateit-selected" style="height:'+f("starheight")+'px"><\/{{element}}><{{element}} class="rateit-hover" style="height:'+f("starheight")+'px"><\/{{element}}><\/{{element}}>',c.append(nt.replace(/{{index}}/gi,e).replace(/{{element}}/gi,g)),v||(c.find(".rateit-reset").css("float","right"),c.find(".rateit-selected").addClass("rateit-selected-rtl"),c.find(".rateit-hover").addClass("rateit-hover-rtl")),f("init",JSON.parse(JSON.stringify(c.data()))));c.find(".rateit-selected, .rateit-hover").height(f("starheight"));l=c.find(".rateit-range");l.width(f("starwidth")*(f("max")-f("min"))).height(f("starheight"));y="rateit-preset"+(v?"":"-rtl");f("ispreset")?c.find(".rateit-selected").addClass(y):c.find(".rateit-selected").removeClass(y);f("value")!=null&&(k=(f("value")-f("min"))*f("starwidth"),c.find(".rateit-selected").width(k));a=c.find(".rateit-reset");a.data("wired")!==!0&&a.bind("click",function(t){t.preventDefault();a.blur();var i=n.Event("beforereset");if(c.trigger(i),i.isDefaultPrevented())return!1;c.rateit("value",null);c.trigger("reset")}).data("wired",!0);var tt=function(t,i){var u=i.changedTouches?i.changedTouches[0].pageX:i.pageX,r=u-n(t).offset().left;return v||(r=l.width()-r),r>l.width()&&(r=l.width()),r<0&&(r=0),k=Math.ceil(r/f("starwidth")*(1/f("step")))},it=function(n){var t=n*f("starwidth")*f("step"),r=l.find(".rateit-hover"),i;r.data("width")!=t&&(l.find(".rateit-selected").hide(),r.width(t).show().data("width",t),i=[n*f("step")+f("min")],c.trigger("hover",i).trigger("over",i))},d=function(t){var i=n.Event("beforerated");return(c.trigger(i,[t]),i.isDefaultPrevented())?!1:(f("value",t),f("backingfld")&&n(f("backingfld")).val(t).trigger("change"),f("ispreset")&&(l.find(".rateit-selected").removeClass(y),f("ispreset",!1)),l.find(".rateit-hover").hide(),l.find(".rateit-selected").width(t*f("starwidth")-f("min")*f("starwidth")).show(),c.trigger("hover",[null]).trigger("over",[null]).trigger("rated",[t]),!0)};f("readonly")?a.hide():(f("resetable")||a.hide(),f("wired")||(l.bind("touchmove touchend",t),l.mousemove(function(n){var t=tt(this,n);it(t)}),l.mouseleave(function(){l.find(".rateit-hover").hide().width(0).data("width","");c.trigger("hover",[null]).trigger("over",[null]);l.find(".rateit-selected").show()}),l.mouseup(function(n){var t=tt(this,n),i=t*f("step")+f("min");d(i);l.blur()}),l.keyup(function(n){(n.which==38||n.which==(v?39:37))&&d(Math.min(f("value")+f("step"),f("max")));(n.which==40||n.which==(v?37:39))&&d(Math.max(f("value")-f("step"),f("min")))}),f("wired",!0)),f("resetable")&&a.show());l.attr("aria-readonly",f("readonly"))})};n.fn.rateit.defaults={min:0,max:5,step:.5,starwidth:16,starheight:16,readonly:!1,resetable:!0,ispreset:!1};n(function(){n("div.rateit, span.rateit").rateit()})})(jQuery);
/*
//# sourceMappingURL=jquery.rateit.min.js.map
*/;
define("rateit", ["jquery"], function(){});

/*
 AngularJS v1.2.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(h,e,A){function u(w,q,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,n){function y(){l&&(l.$destroy(),l=null);g&&(k.leave(g),g=null)}function v(){var b=w.current&&w.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),f=w.current;g=n(b,function(d){k.enter(d,null,g||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||q()});y()});l=f.scope=b;l.$emit("$viewContentLoaded");l.$eval(h)}else y()}var l,g,t=b.autoscroll,h=b.onload||"";
a.$on("$routeChangeSuccess",v);v()}}}function z(e,h,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var n=e(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));n(a)}}}h=e.module("ngRoute",["ng"]).provider("$route",function(){function h(a,c){return e.extend(new (e.extend(function(){},{prototype:a})),c)}function q(a,
e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&q(a,c));if(a){var b="/"==a[a.length-1]?a.substr(0,a.length-
1):a+"/";k[b]=e.extend({redirectTo:a},q(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,n,q,v,l){function g(){var d=t(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!x)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)x=!1,a.$broadcast("$routeChangeStart",d,m),(r.current=
d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(u(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?n.get(d):n.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=l.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=b,c=q.get(b,
{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function t(){var a,b;e.forEach(k,function(f,k){var p;if(p=!b){var s=c.path();p=f.keys;var l={};if(f.regexp)if(s=f.regexp.exec(s)){for(var g=1,q=s.length;g<q;++g){var n=p[g-1],r="string"==typeof s[g]?decodeURIComponent(s[g]):s[g];
n&&r&&(l[n.name]=r)}p=l}else p=null;else p=null;p=a=p}p&&(b=h(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&h(k[null],{params:{},pathParams:{}})}function u(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var x=!1,r={routes:k,reload:function(){x=!0;a.$evalAsync(g)}};a.$on("$locationChangeSuccess",g);return r}]});h.provider("$routeParams",
function(){this.$get=function(){return{}}});h.directive("ngView",u);h.directive("ngView",z);u.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map
;
define("ngRoutes", ["angular"], function(){});

/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){function d(a,b){return I(new(I(function(){},{prototype:a})),b)}function e(a){return H(arguments,function(b){b!==a&&H(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function h(a,b,c,d){var e,h=f(c,d),i={},j=[];for(var k in h)if(h[k].params&&h[k].params.length){e=h[k].params;for(var l in e)g(j,e[l])>=0||(j.push(e[l]),i[e[l]]=a[e[l]])}return I({},i,b)}function i(a,b){var c={};return H(a,function(a){var d=b[a];c[a]=null!=d?String(d):null}),c}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return H(a,function(a){c[a]=b[a]}),c}function l(a,b){var d=1,f=2,g={},h=[],i=g,j=I(a.when(g),{$$promises:g,$$values:g});this.study=function(g){function k(a,c){if(o[c]!==f){if(n.push(c),o[c]===d)throw n.splice(0,n.indexOf(c)),new Error("Cyclic dependency: "+n.join(" -> "));if(o[c]=d,E(a))m.push(c,[function(){return b.get(a)}],h);else{var e=b.annotate(a);H(e,function(a){a!==c&&g.hasOwnProperty(a)&&k(g[a],a)}),m.push(c,a,e)}n.pop(),o[c]=f}}function l(a){return F(a)&&a.then&&a.$$promises}if(!F(g))throw new Error("'invocables' must be an object");var m=[],n=[],o={};return H(g,k),g=n=o=null,function(d,f,g){function h(){--s||(t||e(r,f.$$values),p.$$values=r,p.$$promises=!0,o.resolve(r))}function k(a){p.$$failure=a,o.reject(a)}function n(c,e,f){function i(a){l.reject(a),k(a)}function j(){if(!C(p.$$failure))try{l.resolve(b.invoke(e,g,r)),l.promise.then(function(a){r[c]=a,h()},i)}catch(a){i(a)}}var l=a.defer(),m=0;H(f,function(a){q.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,q[a].then(function(b){r[a]=b,--m||j()},i))}),m||j(),q[c]=l.promise}if(l(d)&&g===c&&(g=f,f=d,d=null),d){if(!F(d))throw new Error("'locals' must be an object")}else d=i;if(f){if(!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=j;var o=a.defer(),p=o.promise,q=p.$$promises={},r=I({},d),s=1+m.length/3,t=!1;if(C(f.$$failure))return k(f.$$failure),p;f.$$values?(t=e(r,f.$$values),h()):(I(q,f.$$promises),f.then(h,k));for(var u=0,v=m.length;v>u;u+=3)d.hasOwnProperty(m[u])?h():n(m[u],m[u+1],m[u+2]);return p}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function m(a,b,c){this.fromConfig=function(a,b,c){return C(a.template)?this.fromString(a.template,b):C(a.templateUrl)?this.fromUrl(a.templateUrl,b):C(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return D(a)?a(b):a},this.fromUrl=function(c,d){return D(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function n(a){function b(b){if(!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[],j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring(0,n),this.sourcePath=a.substring(0,h+n),H(o.substring(1).split(/[&?]/),b)}else this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new RegExp(g),this.prefix=i[0]}function o(){this.compile=function(a){return new n(a)},this.isMatcher=function(a){return F(a)&&D(a.exec)&&D(a.format)&&D(a.concat)},this.$get=function(){return this}}function p(a){function b(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return C(d)?d:!0}var e=[],f=null;this.rule=function(a){if(!D(a))throw new Error("'rule' must be a function");return e.push(a),this},this.otherwise=function(a){if(E(a)){var b=a;a=function(){return b}}else if(!D(a))throw new Error("'rule' must be a function");return f=a,this},this.when=function(e,f){var g,h=E(f);if(E(e)&&(e=a.compile(e)),!h&&!D(f)&&!G(f))throw new Error("invalid 'handler' in when()");var i={matcher:function(b,c){return h&&(g=a.compile(c),c=["$match",function(a){return g.format(a)}]),I(function(a,e){return d(a,c,b.exec(e.path(),e.search()))},{prefix:E(b.prefix)?b.prefix:""})},regex:function(a,e){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(g=e,e=["$match",function(a){return c(g,a)}]),I(function(b,c){return d(b,e,a.exec(c.path()))},{prefix:b(a)})}},j={matcher:a.isMatcher(e),regex:e instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](e,f));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(a,b,c){function d(b){function d(b){var d=b(c,a);return d?(E(d)&&a.replace().url(d),!0):!1}if(!b||!b.defaultPrevented){var g,h=e.length;for(g=0;h>g;g++)if(d(e[g]))return;f&&d(f)}}return b.$on("$locationChangeSuccess",d),{sync:function(){d()}}}]}function q(a,e,f){function g(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){var d=E(a),e=d?a:a.name,f=g(e);if(f){if(!b)throw new Error("No reference point given for path '"+e+"'");for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=w[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function m(a,b){x[a]||(x[a]=[]),x[a].push(b)}function n(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!E(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(w.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):E(b.parent)?b.parent:"";if(e&&!w[e])return m(e,b.self);for(var f in z)D(z[f])&&(b[f]=z[f](b,z.$delegates[f]));if(w[c]=b,!b[y]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){v.$current.navigable==b&&j(a,c)||v.transitionTo(b,a,{location:!1})}]),x[c])for(var g=0;g<x[c].length;g++)n(x[c][g]);return b}function o(a){return a.indexOf("*")>-1}function p(a){var b=a.split("."),c=v.$current.name.split(".");if("**"===b[0]&&(c=c.slice(c.indexOf(b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(c.indexOf(b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function q(a,b){return E(a)&&!C(b)?z[a]:D(b)&&E(a)?(z[a]&&!z.$delegates[a]&&(z.$delegates[a]=z[a]),z[a]=b,this):this}function r(a,b){return F(a)?b=a:b.name=a,n(b),this}function s(a,e,g,m,n,q,r,s,x){function z(){r.url()!==M&&(r.url(M),r.replace())}function A(a,c,d,f,h){var i=d?c:k(a.params,c),j={$stateParams:i};h.resolve=n.resolve(a.resolve,j,h.resolve,a);var l=[h.resolve.then(function(a){h.globals=a})];return f&&l.push(f),H(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return g.load(d,{view:c,locals:j,params:i,notify:!1})||""}],l.push(n.resolve(e,j,h.resolve,a).then(function(f){if(D(c.controllerProvider)||G(c.controllerProvider)){var g=b.extend({},e,j);f.$$controller=m.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,h[d]=f}))}),e.all(l).then(function(){return h})}var B=e.reject(new Error("transition superseded")),F=e.reject(new Error("transition prevented")),K=e.reject(new Error("transition aborted")),L=e.reject(new Error("transition failed")),M=r.url(),N=x.baseHref();return u.locals={resolve:null,globals:{$stateParams:{}}},v={params:{},current:u.self,$current:u,transition:null},v.reload=function(){v.transitionTo(v.current,q,{reload:!0,inherit:!1,notify:!1})},v.go=function(a,b,c){return this.transitionTo(a,b,I({inherit:!0,relative:v.$current},c))},v.transitionTo=function(b,c,f){c=c||{},f=I({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,k=v.$current,n=v.params,o=k.path,p=l(b,f.relative);if(!C(p)){var s={to:b,toParams:c,options:f};if(g=a.$broadcast("$stateNotFound",s,k.self,n),g.defaultPrevented)return z(),K;if(g.retry){if(f.$retry)return z(),L;var w=v.transition=e.when(g.retry);return w.then(function(){return w!==v.transition?B:(s.options.$retry=!0,v.transitionTo(s.to,s.toParams,s.options))},function(){return K}),z(),w}if(b=s.to,c=s.toParams,f=s.options,p=l(b,f.relative),!C(p)){if(f.relative)throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'");throw new Error("No such state '"+b+"'")}}if(p[y])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=h(q,c||{},v.$current,p)),b=p;var x,D,E=b.path,G=u.locals,H=[];for(x=0,D=E[x];D&&D===o[x]&&j(c,n,D.ownParams)&&!f.reload;x++,D=E[x])G=H[x]=D.locals;if(t(b,k,G,f))return b.self.reloadOnSearch!==!1&&z(),v.transition=null,e.when(v.current);if(c=i(b.params,c||{}),f.notify&&(g=a.$broadcast("$stateChangeStart",b.self,c,k.self,n),g.defaultPrevented))return z(),F;for(var N=e.when(G),O=x;O<E.length;O++,D=E[O])G=H[O]=d(G),N=A(D,c,D===b,N,G);var P=v.transition=N.then(function(){var d,e,g;if(v.transition!==P)return B;for(d=o.length-1;d>=x;d--)g=o[d],g.self.onExit&&m.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=x;d<E.length;d++)e=E[d],e.locals=H[d],e.self.onEnter&&m.invoke(e.self.onEnter,e.self,e.locals.globals);if(v.transition!==P)return B;v.$current=b,v.current=b.self,v.params=c,J(v.params,q),v.transition=null;var h=b.navigable;return f.location&&h&&(r.url(h.url.format(h.locals.globals.$stateParams)),"replace"===f.location&&r.replace()),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,k.self,n),M=r.url(),v.current},function(d){return v.transition!==P?B:(v.transition=null,a.$broadcast("$stateChangeError",b.self,c,k.self,n,d),z(),e.reject(d))});return P},v.is=function(a,d){var e=l(a);return C(e)?v.$current!==e?!1:C(d)&&null!==d?b.equals(q,d):!0:c},v.includes=function(a,d){if(E(a)&&o(a)){if(!p(a))return!1;a=v.$current.name}var e=l(a);if(!C(e))return c;if(!C(v.$current.includes[e.name]))return!1;var f=!0;return b.forEach(d,function(a,b){C(q[b])&&q[b]===a||(f=!1)}),f},v.href=function(a,b,c){c=I({lossy:!0,inherit:!1,absolute:!1,relative:v.$current},c||{});var d=l(a,c.relative);if(!C(d))return null;b=h(q,b||{},v.$current,d);var e=d&&c.lossy?d.navigable:d,g=e&&e.url?e.url.format(i(d.params,b||{})):null;return!f.html5Mode()&&g&&(g="#"+f.hashPrefix()+g),"/"!==N&&(f.html5Mode()?g=N.slice(0,-1)+g:c.absolute&&(g=N.slice(1)+g)),c.absolute&&g&&(g=r.protocol()+"://"+r.host()+(80==r.port()||443==r.port()?"":":"+r.port())+(!f.html5Mode()&&g?"/":"")+g),g},v.get=function(a,b){if(!C(a)){var c=[];return H(w,function(a){c.push(a.self)}),c}var d=l(a,b);return d&&d.self?d.self:null},v}function t(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var u,v,w={},x={},y="abstract",z={parent:function(a){if(C(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):u},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=I({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url;if(E(b))return"^"==b.charAt(0)?e.compile(b.substring(1)):(a.parent.navigable||u).url.concat(b);if(e.isMatcher(b)||null==b)return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},params:function(a){if(!a.params)return a.url?a.url.parameters():a.parent.params;if(!G(a.params))throw new Error("Invalid params in state '"+a+"'");if(a.url)throw new Error("Both params and url specicified in state '"+a+"'");return a.params},views:function(a){var b={};return H(C(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},ownParams:function(a){if(!a.parent)return a.params;var b={};H(a.params,function(a){b[a]=!0}),H(a.parent.params,function(c){if(!b[c])throw new Error("Missing required parameter '"+c+"' in state '"+a.name+"'");b[c]=!1});var c=[];return H(b,function(a,b){a&&c.push(b)}),c},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?I({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};u=n({name:"",url:"^",views:null,"abstract":!0}),u.navigable=null,this.decorator=q,this.state=r,this.$get=s,s.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter","$browser"]}function r(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=I(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function s(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function t(a,c,d){function e(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function f(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(i)return{enter:function(a,b,c){i.enter(a,null,b,c)},leave:function(a,b){i.leave(a,b)}};if(h){var d=h&&h(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var g=e(),h=g("$animator"),i=g("$animate"),j={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,e,g){return function(c,e,h){function i(){k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),l&&(q.leave(l,function(){k=null}),k=l,l=null)}function j(f){var h=c.$new(),j=l&&l.data("$uiViewName"),k=j&&a.$current&&a.$current.locals[j];if(f||k!==n){var r=g(h,function(a){q.enter(a,e,function(){(b.isDefined(p)&&!p||c.$eval(p))&&d(a)}),i()});n=a.$current.locals[r.data("$uiViewName")],l=r,m=h,m.$emit("$viewContentLoaded"),m.$eval(o)}}var k,l,m,n,o=h.onload||"",p=h.autoscroll,q=f(h,c);c.$on("$stateChangeSuccess",function(){j(!1)}),c.$on("$viewContentLoading",function(){j(!1)}),j(!0)}}};return j}function u(a,b,c){return{restrict:"ECA",priority:-400,compile:function(d){var e=d.html();return function(d,f,g){var h=g.uiView||g.name||"",i=f.inheritedData("$uiView");h.indexOf("@")<0&&(h=h+"@"+(i?i.state.name:"")),f.data("$uiViewName",h);var j=c.$current,k=j&&j.locals[h];if(k){f.data("$uiView",{name:h,state:k.$$state}),f.html(k.$template?k.$template:e);var l=a(f.contents());if(k.$$controller){k.$scope=d;var m=b(k.$$controller,k);k.$$controllerAs&&(d[k.$$controllerAs]=m),f.data("$ngControllerController",m),f.children().data("$ngControllerController",m)}l(d)}}}}}function v(a){var b=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!b||4!==b.length)throw new Error("Invalid state ref '"+a+"'");return{state:b[1],paramExpr:b[3]||null}}function w(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function x(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:"?^uiSrefActive",link:function(e,f,g,h){var i=v(g.uiSref),j=null,k=w(f)||a.$current,l="FORM"===f[0].nodeName,m=l?"action":"href",n=!0,o={relative:k},p=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in p&&(o[a]=p[a])});var q=function(b){if(b&&(j=b),n){var c=a.href(i.state,j,o);return h&&h.$$setStateInfo(i.state,j),c?void(f[0][m]=c):(n=!1,!1)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&q(a)},!0),j=e.$eval(i.paramExpr)),q(),l||f.bind("click",function(b){var d=b.which||b.button;d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target")||(c(function(){a.go(i.state,j,o)}),b.preventDefault())})}}}function y(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,f){function g(){a.$current.self===i&&h()?e.addClass(l):e.removeClass(l)}function h(){return!k||j(k,b)}var i,k,l;l=c(f.uiSrefActive||"",!1)(d),this.$$setStateInfo=function(b,c){i=a.get(b,w(e)),k=c,g()},d.$on("$stateChangeSuccess",g)}]}}function z(a){return function(b){return a.is(b)}}function A(a){return function(b){return a.includes(b)}}function B(a,b){function e(a){this.locals=a.locals.globals,this.params=this.locals.$stateParams}function f(){this.locals=null,this.params=null}function g(c,g){if(null!=g.redirectTo){var h,j=g.redirectTo;if(E(j))h=j;else{if(!D(j))throw new Error("Invalid 'redirectTo' in when()");h=function(a,b){return j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"route:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess",function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)),J(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var C=b.isDefined,D=b.isFunction,E=b.isString,F=b.isObject,G=b.isArray,H=b.forEach,I=b.extend,J=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),l.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",l),m.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",m),n.prototype.concat=function(a){return new n(this.sourcePath+a+this.sourceSearch)},n.prototype.toString=function(){return this.source},n.prototype.exec=function(a,b){var c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(d=0;g>d;d++)h[e[d]]=c[d+1];for(;f>d;d++)h[e[d]]=b[e[d]];return h},n.prototype.parameters=function(){return this.params},n.prototype.format=function(a){var b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=encodeURIComponent(f)),i+=b[d+1];for(;h>d;d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);return i},b.module("ui.router.util").provider("$urlMatcherFactory",o),p.$inject=["$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",p),q.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",q),r.$inject=[],b.module("ui.router.state").provider("$view",r),b.module("ui.router.state").provider("$uiViewScroll",s),t.$inject=["$state","$injector","$uiViewScroll"],u.$inject=["$compile","$controller","$state"],b.module("ui.router.state").directive("uiView",t),b.module("ui.router.state").directive("uiView",u),x.$inject=["$state","$timeout"],y.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",x).directive("uiSrefActive",y),z.$inject=["$state"],A.$inject=["$state"],b.module("ui.router.state").filter("isState",z).filter("includedByState",A),B.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.router.compat").provider("$route",B).directive("ngView",t)}(window,window.angular);
define("ngUiRouter", ["angular"], function(){});

/*
 AngularJS v1.2.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z,f,T){f.module("ngAnimate",["ng"]).factory("$$animateReflow",["$window","$timeout","$document",function(f,h,d){var n=f.requestAnimationFrame||f.webkitRequestAnimationFrame||function(d){return h(d,10,!1)},w=f.cancelAnimationFrame||f.webkitCancelAnimationFrame||function(d){return h.cancel(d)};return function(d){var f=n(function(){d()});return function(){w(f)}}}]).factory("$$asyncQueueBuffer",["$timeout",function(f){var h,d=[];return function(n){f.cancel(h);d.push(n);h=f(function(){for(var f=
0;f<d.length;f++)d[f]();d=[]},0,!1)}}]).config(["$provide","$animateProvider",function($,h){function d(d){for(var f=0;f<d.length;f++){var l=d[f];if(l.nodeType==da)return l}}function n(l){return f.element(d(l))}var w=f.noop,D=f.forEach,ia=h.$$selectors,da=1,l="$$ngAnimateState",U="ng-animate",s={running:!0};$.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncQueueBuffer","$rootScope","$document",function(x,z,ca,F,J,B,T){function V(a){if(a){var c=[],e={};a=a.substr(1).split(".");
(ca.transitions||ca.animations)&&a.push("");for(var A=0;A<a.length;A++){var d=a[A],f=ia[d];f&&!e[d]&&(c.push(z.get(f)),e[d]=!0)}return c}}function t(a,c,e,d,k,C,s){function t(b){var g=e.data(l);b=b||!g||!g.active[c]||m&&g.active[c].event!=a;K();!0===b?G():(g.active[c].done=G,n(L,"after",G))}function n(b,g,ja){"after"==g?H():x();var fa=g+"End";D(b,function(d,f){var A=function(){a:{var a=g+"Complete",c=b[f];c[a]=!0;(c[fa]||w)();for(c=0;c<b.length;c++)if(!b[c][a])break a;ja()}};"before"!=g||"enter"!=
a&&"move"!=a?d[g]?d[fa]=F?d[g](e,E,z,A):m?d[g](e,c,A):d[g](e,A):A():A()})}function h(b){var g="$animate:"+b;u&&(u[g]&&0<u[g].length)&&J(function(){e.triggerHandler(g,{event:a,className:c})})}function x(){h("before")}function H(){h("after")}function B(){h("close");s&&J(function(){s()})}function K(){K.hasBeenRun||(K.hasBeenRun=!0,C())}function G(){if(!G.hasBeenRun){G.hasBeenRun=!0;var b=e.data(l);b&&(m?M(e,c):(J(function(){var b=e.data(l)||{};Q==b.index&&M(e,c,a)}),e.data(l,b)));B()}}var E,z,F="setClass"==
a;F&&(E=c[0],z=c[1],c=E+" "+z);var v,y=e[0];y&&(v=y.className,v=v+" "+c);if(y&&W(v)){var u=f.element._data(y),u=u&&u.events,y=(" "+v).replace(/\s+/g,".");d||(d=k?k.parent():e.parent());var q=V(y),m="addClass"==a||"removeClass"==a||F,I=e.data(l)||{};k=I.active||{};y=I.totalActive||0;v=I.last;if(R(e,d)||0===q.length)K(),x(),H(),G();else{var L=[];m&&(I.disabled||v&&!v.classBased)||D(q,function(b){if(!b.allowCancel||b.allowCancel(e,a,c)){var g=b[a];"leave"==a?(b=g,g=null):b=b["before"+a.charAt(0).toUpperCase()+
a.substr(1)];L.push({before:b,after:g})}});if(0===L.length)K(),x(),H(),B();else{d=!1;if(0<y){q=[];if(m)"setClass"==v.event?(q.push(v),M(e,c)):k[c]&&(N=k[c],N.event==a?d=!0:(q.push(N),M(e,c)));else if("leave"==a&&k["ng-leave"])d=!0;else{for(var N in k)q.push(k[N]),M(e,N);k={};y=0}0<q.length&&f.forEach(q,function(b){(b.done||w)(!0);X(b.animations)})}!m||(F||d)||(d="addClass"==a==e.hasClass(c));if(d)x(),H(),B();else{e.addClass(U);var Q=S++;v={classBased:m,event:a,animations:L,done:t};y++;k[c]=v;e.data(l,
{last:v,active:k,index:Q,totalActive:y});n(L,"before",t)}}}}else K(),x(),H(),B()}function Y(a){a=d(a);D(a.querySelectorAll("."+U),function(a){a=f.element(a);(a=a.data(l))&&a.active&&f.forEach(a.active,function(a){(a.done||w)(!0);X(a.animations)})})}function X(a){D(a,function(a){a.beforeComplete||(a.beforeEnd||w)(!0);a.afterComplete||(a.afterEnd||w)(!0)})}function M(a,c){if(d(a)==d(F))s.disabled||(s.running=!1,s.structural=!1);else if(c){var e=a.data(l)||{},f=!0===c;!f&&(e.active&&e.active[c])&&(e.totalActive--,
delete e.active[c]);if(f||!e.totalActive)a.removeClass(U),a.removeData(l)}}function R(a,c){if(s.disabled)return!0;if(d(a)==d(F))return s.disabled||s.running;do{if(0===c.length)break;var e=d(c)==d(F),f=e?s:c.data(l),f=f&&(!!f.disabled||f.running||0<f.totalActive);if(e||f)return f;if(e)break}while(c=c.parent());return!0}var S=0;F.data(l,s);B.$$postDigest(function(){B.$$postDigest(function(){s.running=!1})});var Z=h.classNameFilter(),W=Z?function(a){return Z.test(a)}:function(){return!0};return{enter:function(a,
c,e,d){this.enabled(!1,a);x.enter(a,c,e);B.$$postDigest(function(){a=n(a);t("enter","ng-enter",a,c,e,w,d)})},leave:function(a,c){Y(a);this.enabled(!1,a);B.$$postDigest(function(){a=n(a);t("leave","ng-leave",a,null,null,function(){x.leave(a)},c)})},move:function(a,c,e,d){Y(a);this.enabled(!1,a);x.move(a,c,e);B.$$postDigest(function(){a=n(a);t("move","ng-move",a,c,e,w,d)})},addClass:function(a,c,d){a=n(a);t("addClass",c,a,null,null,function(){x.addClass(a,c)},d)},removeClass:function(a,c,d){a=n(a);
t("removeClass",c,a,null,null,function(){x.removeClass(a,c)},d)},setClass:function(a,c,d,f){a=n(a);t("setClass",[c,d],a,null,null,function(){x.setClass(a,c,d)},f)},enabled:function(a,c){switch(arguments.length){case 2:if(a)M(c);else{var d=c.data(l)||{};d.disabled=!0;c.data(l,d)}break;case 1:s.disabled=!a;break;default:a=!s.disabled}return!!a}}}]);h.register("",["$window","$sniffer","$timeout","$$animateReflow",function(l,s,h,n){function J(b,g){I&&I();m.push(g);I=n(function(){D(m,function(b){b()});
m=[];I=null;u={}})}function B(b,g){var a=Date.now()+1E3*g;if(!(a<=N)){h.cancel(L);var c=d(b);b=f.element(c);Q.push(b);N=a;L=h(function(){U(Q);Q=[]},g,!1)}}function U(b){D(b,function(b){(b=b.data(E))&&(b.closeAnimationFn||w)()})}function V(b,g){var a=g?u[g]:null;if(!a){var c=0,d=0,f=0,e=0,k,p,r,h;D(b,function(b){if(b.nodeType==da){b=l.getComputedStyle(b)||{};r=b[O+ea];c=Math.max(t(r),c);h=b[O+H];k=b[O+ha];d=Math.max(t(k),d);p=b[P+ha];e=Math.max(t(p),e);var g=t(b[P+ea]);0<g&&(g*=parseInt(b[P+K],10)||
1);f=Math.max(g,f)}});a={total:0,transitionPropertyStyle:h,transitionDurationStyle:r,transitionDelayStyle:k,transitionDelay:d,transitionDuration:c,animationDelayStyle:p,animationDelay:e,animationDuration:f};g&&(u[g]=a)}return a}function t(b){var g=0;b=f.isString(b)?b.split(/\s*,\s*/):[];D(b,function(b){g=Math.max(parseFloat(b)||0,g)});return g}function Y(b){var g=b.parent(),a=g.data(G);a||(g.data(G,++q),a=q);return a+"-"+d(b).className}function X(b,g,a,c){var e=Y(g),k=e+" "+a,l=u[k]?++u[k].total:
0,h={};if(0<l){var p=a+"-stagger",h=e+" "+p;(e=!u[h])&&g.addClass(p);h=V(g,h);e&&g.removeClass(p)}c=c||function(b){return b()};g.addClass(a);var p=g.data(E)||{},r=c(function(){return V(g,k)});c=r.transitionDuration;e=r.animationDuration;if(0===c&&0===e)return g.removeClass(a),!1;g.data(E,{running:p.running||0,itemIndex:l,stagger:h,timings:r,closeAnimationFn:f.noop});b=0<p.running||"setClass"==b;0<c&&M(g,a,b);0<e&&(d(g).style[P]="none 0s");return!0}function M(b,a,c){"ng-enter"!=a&&("ng-move"!=a&&"ng-leave"!=
a)&&c?b.addClass(ga):d(b).style[O+H]="none"}function R(b,a){var c=O+H,e=d(b);e.style[c]&&0<e.style[c].length&&(e.style[c]="");b.removeClass(ga)}function S(b){var a=P;b=d(b);b.style[a]&&0<b.style[a].length&&(b.style[a]="")}function Z(b,a,c,e){function f(b){a.off(w,k);a.removeClass(l);A(a,c);b=d(a);for(var e in q)b.style.removeProperty(q[e])}function k(b){b.stopPropagation();var a=b.originalEvent||b;b=a.$manualTimeStamp||a.timeStamp||Date.now();a=parseFloat(a.elapsedTime.toFixed($));Math.max(b-x,0)>=
u&&a>=s&&e()}var h=d(a);b=a.data(E);if(-1!=h.className.indexOf(c)&&b){var l="";D(c.split(" "),function(b,a){l+=(0<a?" ":"")+b+"-active"});var p=b.stagger,r=b.timings,n=b.itemIndex,s=Math.max(r.transitionDuration,r.animationDuration),t=Math.max(r.transitionDelay,r.animationDelay),u=t*y,x=Date.now(),w=ba+" "+aa,m="",q=[];if(0<r.transitionDuration){var z=r.transitionPropertyStyle;-1==z.indexOf("all")&&(m+=C+"transition-property: "+z+";",m+=C+"transition-duration: "+r.transitionDurationStyle+";",q.push(C+
"transition-property"),q.push(C+"transition-duration"))}0<n&&(0<p.transitionDelay&&0===p.transitionDuration&&(m+=C+"transition-delay: "+W(r.transitionDelayStyle,p.transitionDelay,n)+"; ",q.push(C+"transition-delay")),0<p.animationDelay&&0===p.animationDuration&&(m+=C+"animation-delay: "+W(r.animationDelayStyle,p.animationDelay,n)+"; ",q.push(C+"animation-delay")));0<q.length&&(r=h.getAttribute("style")||"",h.setAttribute("style",r+" "+m));a.on(w,k);a.addClass(l);b.closeAnimationFn=function(){f();
e()};h=(n*(Math.max(p.animationDelay,p.transitionDelay)||0)+(t+s)*v)*y;b.running++;B(a,h);return f}e()}function W(b,a,c){var d="";D(b.split(","),function(b,e){d+=(0<e?",":"")+(c*a+parseInt(b,10))+"s"});return d}function a(b,a,c,d){if(X(b,a,c,d))return function(b){b&&A(a,c)}}function c(b,a,c,d){if(a.data(E))return Z(b,a,c,d);A(a,c);d()}function e(b,g,d,e){var f=a(b,g,d);if(f){var h=f;J(g,function(){R(g,d);S(g);h=c(b,g,d,e)});return function(b){(h||w)(b)}}e()}function A(b,a){b.removeClass(a);var c=
b.data(E);c&&(c.running&&c.running--,c.running&&0!==c.running||b.removeData(E))}function k(b,a){var c="";b=f.isArray(b)?b:b.split(/\s+/);D(b,function(b,d){b&&0<b.length&&(c+=(0<d?" ":"")+b+a)});return c}var C="",O,aa,P,ba;z.ontransitionend===T&&z.onwebkittransitionend!==T?(C="-webkit-",O="WebkitTransition",aa="webkitTransitionEnd transitionend"):(O="transition",aa="transitionend");z.onanimationend===T&&z.onwebkitanimationend!==T?(C="-webkit-",P="WebkitAnimation",ba="webkitAnimationEnd animationend"):
(P="animation",ba="animationend");var ea="Duration",H="Property",ha="Delay",K="IterationCount",G="$$ngAnimateKey",E="$$ngAnimateCSS3Data",ga="ng-animate-block-transitions",$=3,v=1.5,y=1E3,u={},q=0,m=[],I,L=null,N=0,Q=[];return{enter:function(b,a){return e("enter",b,"ng-enter",a)},leave:function(b,a){return e("leave",b,"ng-leave",a)},move:function(a,c){return e("move",a,"ng-move",c)},beforeSetClass:function(b,c,d,e){var f=k(d,"-remove")+" "+k(c,"-add"),h=a("setClass",b,f,function(a){var e=b.attr("class");
b.removeClass(d);b.addClass(c);a=a();b.attr("class",e);return a});if(h)return J(b,function(){R(b,f);S(b);e()}),h;e()},beforeAddClass:function(b,c,d){var e=a("addClass",b,k(c,"-add"),function(a){b.addClass(c);a=a();b.removeClass(c);return a});if(e)return J(b,function(){R(b,c);S(b);d()}),e;d()},setClass:function(a,d,e,f){e=k(e,"-remove");d=k(d,"-add");return c("setClass",a,e+" "+d,f)},addClass:function(a,d,e){return c("addClass",a,k(d,"-add"),e)},beforeRemoveClass:function(b,c,d){var e=a("removeClass",
b,k(c,"-remove"),function(a){var d=b.attr("class");b.removeClass(c);a=a();b.attr("class",d);return a});if(e)return J(b,function(){R(b,c);S(b);d()}),e;d()},removeClass:function(a,d,e){return c("removeClass",a,k(d,"-remove"),e)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;
define("ngAnimate", ["angular"], function(){});

/*
 AngularJS v1.2.15-build.2399+sha.ca4ddfa
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,v,z){function t(g,a,b){q.directive(g,["$parse","$swipe",function(l,n){var r=75,h=0.3,d=30;return function(p,m,k){function e(e){if(!u)return!1;var c=Math.abs(e.y-u.y);e=(e.x-u.x)*a;return f&&c<r&&0<e&&e>d&&c/e<h}var c=l(k[g]),u,f;n.bind(m,{start:function(e,c){u=e;f=!0},cancel:function(e){f=!1},end:function(a,f){e(a)&&p.$apply(function(){m.triggerHandler(b);c(p,{$event:f})})}})}}])}var q=v.module("ngTouch",[]);q.factory("$swipe",[function(){function g(a){var b=a.touches&&a.touches.length?
a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||b[0].originalEvent||b[0];return{x:a.clientX,y:a.clientY}}return{bind:function(a,b){var l,n,r,h,d=!1;a.on("touchstart mousedown",function(a){r=g(a);d=!0;n=l=0;h=r;b.start&&b.start(r,a)});a.on("touchcancel",function(a){d=!1;b.cancel&&b.cancel(a)});a.on("touchmove mousemove",function(a){if(d&&r){var m=g(a);l+=Math.abs(m.x-h.x);n+=Math.abs(m.y-h.y);h=m;10>l&&10>n||
(n>l?(d=!1,b.cancel&&b.cancel(a)):(a.preventDefault(),b.move&&b.move(m,a)))}});a.on("touchend mouseup",function(a){d&&(d=!1,b.end&&b.end(g(a),a))})}}}]);q.config(["$provide",function(g){g.decorator("ngClickDirective",["$delegate",function(a){a.shift();return a}])}]);q.directive("ngClick",["$parse","$timeout","$rootElement",function(g,a,b){function l(a,c,b){for(var f=0;f<a.length;f+=2)if(Math.abs(a[f]-c)<d&&Math.abs(a[f+1]-b)<d)return a.splice(f,f+2),!0;return!1}function n(a){if(!(Date.now()-m>h)){var c=
a.touches&&a.touches.length?a.touches:[a],b=c[0].clientX,c=c[0].clientY;1>b&&1>c||l(k,b,c)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur())}}function r(b){b=b.touches&&b.touches.length?b.touches:[b];var c=b[0].clientX,d=b[0].clientY;k.push(c,d);a(function(){for(var a=0;a<k.length;a+=2)if(k[a]==c&&k[a+1]==d){k.splice(a,a+2);break}},h,!1)}var h=2500,d=25,p="ng-click-active",m,k;return function(a,c,d){function f(){q=!1;c.removeClass(p)}var h=g(d.ngClick),q=!1,s,t,w,x;c.on("touchstart",
function(a){q=!0;s=a.target?a.target:a.srcElement;3==s.nodeType&&(s=s.parentNode);c.addClass(p);t=Date.now();a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];w=a.clientX;x=a.clientY});c.on("touchmove",function(a){f()});c.on("touchcancel",function(a){f()});c.on("touchend",function(a){var h=Date.now()-t,e=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?a.touches:[a],g=e[0].originalEvent||e[0],e=g.clientX,g=g.clientY,p=Math.sqrt(Math.pow(e-
w,2)+Math.pow(g-x,2));q&&(750>h&&12>p)&&(k||(b[0].addEventListener("click",n,!0),b[0].addEventListener("touchstart",r,!0),k=[]),m=Date.now(),l(k,e,g),s&&s.blur(),v.isDefined(d.disabled)&&!1!==d.disabled||c.triggerHandler("click",[a]));f()});c.onclick=function(a){};c.on("click",function(b,c){a.$apply(function(){h(a,{$event:c||b})})});c.on("mousedown",function(a){c.addClass(p)});c.on("mousemove mouseup",function(a){c.removeClass(p)})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,
window.angular);
//# sourceMappingURL=angular-touch.min.js.map
;
define("ngTouch", ["angular"], function(){});

/**
 * Angular Carousel - Mobile friendly touch carousel for AngularJS
 * @version v0.2.2 - 2014-04-02
 * @link http://revolunet.github.com/angular-carousel
 * @author Julien Bouquillon <julien@revolunet.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module("angular-carousel",["ngTouch"]),angular.module("angular-carousel").directive("rnCarouselControls",[function(){return{restrict:"A",replace:!0,scope:{items:"=",index:"="},link:function(a){a.prev=function(){a.index--},a.next=function(){a.index++}},template:'<div class="rn-carousel-controls"><span class="rn-carousel-control rn-carousel-control-prev" ng-click="prev()" ng-if="index > 0"></span><span class="rn-carousel-control rn-carousel-control-next" ng-click="next()" ng-if="index < items.length - 1"></span></div>'}}]),angular.module("angular-carousel").directive("rnCarouselIndicators",[function(){return{restrict:"A",replace:!0,scope:{items:"=",index:"="},template:'<div class="rn-carousel-indicator"><span ng-repeat="item in items" ng-click="$parent.index=$index" ng-class="{active: $index==$parent.index}"></span></div>'}}]),function(){angular.module("angular-carousel").directive("rnCarousel",["$swipe","$window","$document","$parse","$compile","$rootScope",function(a,b,c,d,e,f){var g=0,h=75,i=.05,j=3,k=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame;return{restrict:"A",scope:!0,compile:function(l,m){var n,o,p=l.children()[0].attributes,q=!1,r=!1,s=!1;return l.addClass("rn-carousel-slides"),l.children().addClass("rn-carousel-slide"),["ng-repeat","data-ng-repeat","x-ng-repeat"].every(function(a){var b=p[a];if(angular.isDefined(b)){var c=b.value.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),d=c[3];if(n=c[1],o=c[2],n)return angular.isDefined(m.rnCarouselBuffered)&&(r=!0,b.value=n+" in "+o+"|carouselSlice:carouselBufferIndex:carouselBufferSize",d&&(b.value+=" track by "+d)),q=!0,!1}return!0}),function(l,m,n){function p(){for(var a=[],b=0;Q>b;b++)a[b]=b;l.carouselIndicatorArray=a}function t(){var a=S.children();return I=0===a.length?S[0].getBoundingClientRect().width:a[0].getBoundingClientRect().width}function u(){T.css("width","100%");var a=t();a&&T.css("width",a+"px")}function v(a){isNaN(a)&&(a=l.carouselIndex*I),P=a;var b=-Math.round(P);b+=l.carouselBufferIndex*I,S[0].style[J]=Y?"translate3d("+b+"px, 0, 0)":"translate("+b+"px, 0)"}function w(){var a,b;M&&(a=Date.now()-O,b=M*Math.exp(-a/h),b>j||-j>b?(v(N-b),k(w)):z(N/I))}function x(a){return a>=Q?Q:0>=a?0:a}function y(){var a=0,b=(l.carouselBufferSize-1)/2;r&&(a=l.carouselIndex<=b?0:Q<l.carouselBufferSize?0:l.carouselIndex>Q-l.carouselBufferSize?Q-l.carouselBufferSize:l.carouselIndex-b),l.carouselBufferIndex=a}function z(a,b){return isNaN(a)&&(a=l.carouselIndex),b?(P=a*I,void F(null,null,!0)):(l.carouselIndex=x(a),y(),"$apply"!==f.$$phase&&"$digest"!==f.$$phase&&(s?l.$apply():l.$digest()),void v())}function A(){return i*I}function B(a){R=!0,F({x:a.clientX,y:a.clientY},a)}function C(a){var b=a;return 0===l.carouselIndex?b=Math.max(-A(),b):l.carouselIndex===Q-1&&(b=Math.min((Q-1)*I+A(),b)),b}function D(a){return c.bind("mouseup",B),K=!0,L=a.x,M=0,O=Date.now(),!1}function E(a){var b,c;return K&&(b=a.x,c=L-b,(c>2||-2>c)&&(R=!0,L=b,k(function(){v(C(P+c))}))),!1}function F(a,b,d){if(!b||R){c.unbind("mouseup",B),K=!1,R=!1,N=P;var e=A(),f=l.carouselIndex*I,g=f-N,h=-Math[g>=0?"ceil":"floor"](g/I),i=Math.abs(g)>e;h+l.carouselIndex>=Q&&(h=Q-1-l.carouselIndex),h+l.carouselIndex<0&&(h=-l.carouselIndex);var j=i?h:0;return N=(j+l.carouselIndex)*I,M=N-P,O=Date.now(),d&&(M=P-f),k(w),!1}}function G(){var a,b=document.createElement("p"),c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(b,null);for(var d in c)void 0!==b.style[d]&&(b.style[d]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[d]));return document.body.removeChild(b),void 0!==a&&a.length>0&&"none"!==a}function H(){u(),z()}g++;var I,J,K,L,M,N,O,P=0,Q=0,R=!1,S=m.wrap("<div id='carousel-"+g+"' class='rn-carousel-container'></div>"),T=S.parent();if((angular.isDefined(n.rnCarouselIndicator)||angular.isDefined(n.rnCarouselControl))&&(p(),l.$watch("carouselIndex",function(a){l.indicatorIndex=a}),l.$watch("indicatorIndex",function(a){z(a,!0)})),angular.isDefined(n.rnCarouselIndicator)){var U=e("<div id='carousel-"+g+"-indicator' index='indicatorIndex' items='carouselIndicatorArray' rn-carousel-indicators class='rn-carousel-indicator'></div>")(l);T.append(U)}if(angular.isDefined(n.rnCarouselControl)){var V=e("<div id='carousel-"+g+"-controls' index='indicatorIndex' items='carouselIndicatorArray' rn-carousel-controls class='rn-carousel-controls'></div>")(l);T.append(V)}if(l.carouselBufferIndex=0,l.carouselBufferSize=5,l.carouselIndex=0,n.rnCarouselIndex){var W=function(a){X.assign(l.$parent,a)},X=d(n.rnCarouselIndex);angular.isFunction(X.assign)?(l.$watch("carouselIndex",function(a){W(a)}),l.carouselIndex=X(l),l.$parent.$watch(X,function(a){void 0!==a&&(a>=Q?(a=Q-1,W(a)):0>a&&(a=0,W(a)),z(a,!0))}),s=!0):isNaN(n.rnCarouselIndex)||(l.carouselIndex=parseInt(n.rnCarouselIndex,10))}q?l.$watchCollection(o,function(a){Q=0,angular.isArray(a)?Q=a.length:angular.isObject(a)&&(Q=Object.keys(a).length),p(),I||u(),z(l.carouselIndex)}):(Q=m.children().length,p(),u()),n.$observe("rnCarouselSwipe",function(b){"false"!==b&&"off"!==b?a.bind(S,{start:D,move:E,end:F,cancel:function(a){F({},a)}}):S.unbind()}),s||z(l.carouselIndex),J="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"!=typeof document.body.style[b]?(J=b,!1):!0});var Y=G(),Z=angular.element(b);Z.bind("orientationchange",H),Z.bind("resize",H),l.$on("$destroy",function(){c.unbind("mouseup",B),Z.unbind("orientationchange",H),Z.unbind("resize",H)})}}}}])}(),function(){angular.module("angular-carousel").filter("carouselSlice",function(){return function(a,b,c){return angular.isArray(a)?a.slice(b,b+c):angular.isObject(a)?a:void 0}})}();
define("ngCarousel", ["angular","ngTouch"], function(){});

/*! 1.2.9 */
!function(){var a=angular.module("angularFileUpload",[]);a.service("$upload",["$http","$rootScope","$timeout",function(a,b,c){function d(b){b.method=b.method||"POST",b.headers=b.headers||{},b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof ArrayBuffer?b:a.defaults.transformRequest[0](b)},window.XMLHttpRequest.__isShim&&(b.headers.__setXHR_=function(){return function(a){b.__XHR=a,a.upload.addEventListener("progress",function(a){b.progress&&c(function(){b.progress&&b.progress(a)})},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&c(function(){b.progress&&b.progress(a)})},!1)}});var d=a(b);return d.progress=function(a){return b.progress=a,d},d.abort=function(){return b.__XHR&&c(function(){b.__XHR.abort()}),d},d.then=function(a,c){return function(d,e,f){b.progress=f||b.progress;var g=c.apply(a,[d,e,f]);return g.abort=a.abort,g.progress=a.progress,g}}(d,d.then),d}this.upload=function(b){b.headers=b.headers||{},b.headers["Content-Type"]=void 0,b.transformRequest=b.transformRequest||a.defaults.transformRequest;var c=new FormData;if(b.data)for(var e in b.data){var f=b.data[e];if(b.formDataAppender)b.formDataAppender(c,e,f);else{if("function"==typeof b.transformRequest)f=b.transformRequest(f);else for(var g=0;g<b.transformRequest.length;g++){var h=b.transformRequest[g];"function"==typeof h&&(f=h(f))}c.append(e,f)}}b.transformRequest=angular.identity;var i=b.fileFormDataName||"file";if("[object Array]"===Object.prototype.toString.call(b.file))for(var j="[object String]"===Object.prototype.toString.call(i),g=0;g<b.file.length;g++)c.append(j?i+g:i[g],b.file[g],b.file[g].name);else c.append(i,b.file,b.file.name);return b.data=c,d(b)},this.http=function(a){return d(a)}}]),a.directive("ngFileSelect",["$parse","$http","$timeout",function(a,b,c){return function(b,d,e){var f=a(e.ngFileSelect);d.bind("change",function(a){var d,e,g=[];if(d=a.target.files,null!=d)for(e=0;e<d.length;e++)g.push(d.item(e));c(function(){f(b,{$files:g,$event:a})})}),d.bind("click",function(){this.value=null})}}]),a.directive("ngFileDropAvailable",["$parse","$http","$timeout",function(a,b,c){return function(b,d,e){if("draggable"in document.createElement("span")){var f=a(e.ngFileDropAvailable);c(function(){f(b)})}}}]),a.directive("ngFileDrop",["$parse","$http","$timeout",function(a,b,c){return function(b,d,e){if("draggable"in document.createElement("span")){var f=null,g=a(e.ngFileDrop);d[0].addEventListener("dragover",function(a){c.cancel(f),a.stopPropagation(),a.preventDefault(),d.addClass(e.ngFileDragOverClass||"dragover")},!1),d[0].addEventListener("dragleave",function(){f=c(function(){d.removeClass(e.ngFileDragOverClass||"dragover")})},!1),d[0].addEventListener("drop",function(a){a.stopPropagation(),a.preventDefault(),d.removeClass(e.ngFileDragOverClass||"dragover");var f,h=[],i=a.dataTransfer.files;if(null!=i)for(f=0;f<i.length;f++)h.push(i.item(f));c(function(){g(b,{$files:h,$event:a})})},!1)}}}])}();
define("ngFileUpload", ["angular"], function(){});

/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
define("ngBootstrap", ["angular"], function(){});

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.10.0 - 2014-01-13
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/popup.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(this.groups.indexOf(a),1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",["$parse",function(a){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(b,c,d,e){var f,g;e.addGroup(b),b.isOpen=!1,d.isOpen&&(f=a(d.isOpen),g=f.assign,b.$parent.$watch(f,function(a){b.isOpen=!!a})),b.$watch("isOpen",function(a){a&&e.closeOthers(b),g&&g(b.$parent,a)})}}}]).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",compile:function(a,b,c){return function(a,b,d,e){e.setHeading(c(a,function(){}))}}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){b.hasClass(e.activeClass)||a.$apply(function(){f.$setViewValue(a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition","$q",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.select=function(a){i.select(a)},a.isActive=function(a){return i.currentSlide===a},a.slides=function(){return j},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?b>=j.length?i.select(j[b-1]):i.select(j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",["$parse",function(a){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{},link:function(b,c,d,e){if(d.active){var f=a(d.active),g=f.assign,h=b.active=f(b.$parent);b.$watch(function(){var a=f(b.$parent);return a!==b.active&&(a!==h?h=b.active=a:g(b.$parent,a=h=b.active)),a})}e.addSlide(b,c),b.$on("$destroy",function(){e.removeSlide(b)}),b.$watch("active",function(a){a&&e.select(b)})}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].body.scrollTop||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].body.scrollLeft||a[0].documentElement.scrollLeft)}}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.position"]).constant("datepickerConfig",{dayFormat:"dd",monthFormat:"MMMM",yearFormat:"yyyy",dayHeaderFormat:"EEE",dayTitleFormat:"MMMM yyyy",monthTitleFormat:"yyyy",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","dateFilter","datepickerConfig",function(a,b,c,d){function e(b,c){return angular.isDefined(b)?a.$parent.$eval(b):c}function f(a,b){return new Date(a,b,0).getDate()}function g(a,b){for(var c=new Array(b),d=a,e=0;b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a,b,d,e){return{date:a,label:c(a,b),selected:!!d,secondary:!!e}}var i={day:e(b.dayFormat,d.dayFormat),month:e(b.monthFormat,d.monthFormat),year:e(b.yearFormat,d.yearFormat),dayHeader:e(b.dayHeaderFormat,d.dayHeaderFormat),dayTitle:e(b.dayTitleFormat,d.dayTitleFormat),monthTitle:e(b.monthTitleFormat,d.monthTitleFormat)},j=e(b.startingDay,d.startingDay),k=e(b.yearRange,d.yearRange);this.minDate=d.minDate?new Date(d.minDate):null,this.maxDate=d.maxDate?new Date(d.maxDate):null,this.modes=[{name:"day",getVisibleDates:function(a,b){var d=a.getFullYear(),e=a.getMonth(),k=new Date(d,e,1),l=j-k.getDay(),m=l>0?7-l:-l,n=new Date(k),o=0;m>0&&(n.setDate(-m+1),o+=m),o+=f(d,e+1),o+=(7-o%7)%7;for(var p=g(n,o),q=new Array(7),r=0;o>r;r++){var s=new Date(p[r]);p[r]=h(s,i.day,b&&b.getDate()===s.getDate()&&b.getMonth()===s.getMonth()&&b.getFullYear()===s.getFullYear(),s.getMonth()!==e)}for(var t=0;7>t;t++)q[t]=c(p[t].date,i.dayHeader);return{objects:p,title:c(a,i.dayTitle),labels:q}},compare:function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},split:7,step:{months:1}},{name:"month",getVisibleDates:function(a,b){for(var d=new Array(12),e=a.getFullYear(),f=0;12>f;f++){var g=new Date(e,f,1);d[f]=h(g,i.month,b&&b.getMonth()===f&&b.getFullYear()===e)}return{objects:d,title:c(a,i.monthTitle)}},compare:function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},split:3,step:{years:1}},{name:"year",getVisibleDates:function(a,b){for(var c=new Array(k),d=a.getFullYear(),e=parseInt((d-1)/k,10)*k+1,f=0;k>f;f++){var g=new Date(e+f,0,1);c[f]=h(g,i.year,b&&b.getFullYear()===g.getFullYear())}return{objects:c,title:[c[0].label,c[k-1].label].join(" - ")}},compare:function(a,b){return a.getFullYear()-b.getFullYear()},split:5,step:{years:k}}],this.isDisabled=function(b,c){var d=this.modes[c||0];return this.minDate&&d.compare(b,this.minDate)<0||this.maxDate&&d.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:d.name})}}]).directive("datepicker",["dateFilter","$parse","datepickerConfig","$log",function(a,b,c,d){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,e,f,g){function h(){a.showWeekNumbers=0===o&&q}function i(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c}function j(b){var c=null,e=!0;n.$modelValue&&(c=new Date(n.$modelValue),isNaN(c)?(e=!1,d.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):b&&(p=c)),n.$setValidity("date",e);var f=m.modes[o],g=f.getVisibleDates(p,c);angular.forEach(g.objects,function(a){a.disabled=m.isDisabled(a.date,o)}),n.$setValidity("date-disabled",!c||!m.isDisabled(c)),a.rows=i(g.objects,f.split),a.labels=g.labels||[],a.title=g.title}function k(a){o=a,h(),j()}function l(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var m=g[0],n=g[1];if(n){var o=0,p=new Date,q=c.showWeeks;f.showWeeks?a.$parent.$watch(b(f.showWeeks),function(a){q=!!a,h()}):h(),f.min&&a.$parent.$watch(b(f.min),function(a){m.minDate=a?new Date(a):null,j()}),f.max&&a.$parent.$watch(b(f.max),function(a){m.maxDate=a?new Date(a):null,j()}),n.$render=function(){j(!0)},a.select=function(a){if(0===o){var b=n.$modelValue?new Date(n.$modelValue):new Date(0,0,0,0,0,0,0);b.setFullYear(a.getFullYear(),a.getMonth(),a.getDate()),n.$setViewValue(b),j(!0)}else p=a,k(o-1)},a.move=function(a){var b=m.modes[o].step;p.setMonth(p.getMonth()+a*(b.months||0)),p.setFullYear(p.getFullYear()+a*(b.years||0)),j()},a.toggleMode=function(){k((o+1)%m.modes.length)},a.getWeekNumber=function(b){return 0===o&&a.showWeekNumbers&&7===b.length?l(b[0].date):null}}}}}]).constant("datepickerPopupConfig",{dateFormat:"yyyy-MM-dd",currentText:"Today",toggleWeeksText:"Weeks",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","datepickerPopupConfig","datepickerConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",link:function(h,i,j,k){function l(a){u?u(h,!!a):q.isOpen=!!a}function m(a){if(a){if(angular.isDate(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=new Date(a);return isNaN(b)?(k.$setValidity("date",!1),void 0):(k.$setValidity("date",!0),b)}return k.$setValidity("date",!1),void 0}return k.$setValidity("date",!0),null}function n(a,c,d){a&&(h.$watch(b(a),function(a){q[c]=a}),y.attr(d||c,c))}function o(){q.position=s?d.offset(i):d.position(i),q.position.top=q.position.top+i.prop("offsetHeight")}var p,q=h.$new(),r=angular.isDefined(j.closeOnDateSelection)?h.$eval(j.closeOnDateSelection):f.closeOnDateSelection,s=angular.isDefined(j.datepickerAppendToBody)?h.$eval(j.datepickerAppendToBody):f.appendToBody;j.$observe("datepickerPopup",function(a){p=a||f.dateFormat,k.$render()}),q.showButtonBar=angular.isDefined(j.showButtonBar)?h.$eval(j.showButtonBar):f.showButtonBar,h.$on("$destroy",function(){C.remove(),q.$destroy()}),j.$observe("currentText",function(a){q.currentText=angular.isDefined(a)?a:f.currentText}),j.$observe("toggleWeeksText",function(a){q.toggleWeeksText=angular.isDefined(a)?a:f.toggleWeeksText}),j.$observe("clearText",function(a){q.clearText=angular.isDefined(a)?a:f.clearText}),j.$observe("closeText",function(a){q.closeText=angular.isDefined(a)?a:f.closeText});var t,u;j.isOpen&&(t=b(j.isOpen),u=t.assign,h.$watch(t,function(a){q.isOpen=!!a})),q.isOpen=t?t(h):!1;var v=function(a){q.isOpen&&a.target!==i[0]&&q.$apply(function(){l(!1)})},w=function(){q.$apply(function(){l(!0)})},x=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");x.attr({"ng-model":"date","ng-change":"dateSelection()"});var y=angular.element(x.children()[0]),z={};j.datepickerOptions&&(z=h.$eval(j.datepickerOptions),y.attr(angular.extend({},z))),k.$parsers.unshift(m),q.dateSelection=function(a){angular.isDefined(a)&&(q.date=a),k.$setViewValue(q.date),k.$render(),r&&l(!1)},i.bind("input change keyup",function(){q.$apply(function(){q.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,p):"";i.val(a),q.date=k.$modelValue},n(j.min,"min"),n(j.max,"max"),j.showWeeks?n(j.showWeeks,"showWeeks","show-weeks"):(q.showWeeks="show-weeks"in z?z["show-weeks"]:g.showWeeks,y.attr("show-weeks","showWeeks")),j.dateDisabled&&y.attr("date-disabled",j.dateDisabled);var A=!1,B=!1;q.$watch("isOpen",function(a){a?(o(),c.bind("click",v),B&&i.unbind("focus",w),i[0].focus(),A=!0):(A&&c.unbind("click",v),i.bind("focus",w),B=!0),u&&u(h,a)}),q.today=function(){q.dateSelection(new Date)},q.clear=function(){q.dateSelection(null)};var C=a(x)(q);s?c.find("body").append(C):i.after(C)}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdownToggle",[]).directive("dropdownToggle",["$document","$location",function(a){var b=null,c=angular.noop;return{restrict:"CA",link:function(d,e){d.$watch("$location.path",function(){c()}),e.parent().bind("click",function(){c()}),e.bind("click",function(d){var f=e===b;d.preventDefault(),d.stopPropagation(),b&&c(),f||e.hasClass("disabled")||e.prop("disabled")||(e.parent().addClass("open"),b=e,c=function(d){d&&(d.preventDefault(),d.stopPropagation()),a.unbind("click",c),e.parent().removeClass("open"),c=angular.noop,b=null},a.bind("click",c))})}}}]),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b){b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:"template/modal/window.html",link:function(c,d,e){c.windowClass=e.windowClass||"",b(function(){c.animate=!0,d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,i),b.toggleClass(m,n.length()>0)}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g,0)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&e.$apply(function(){o.dismiss(b.key)}))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();h>=0&&!k&&(l=e.$new(!0),l.index=h,k=d("<div modal-backdrop></div>")(l),f.append(k));var i=angular.element("<div modal-window></div>");i.attr("window-class",b.windowClass),i.attr("index",n.length()-1),i.attr("animate","animate"),i.html(b.content);var j=d(i)(b.scope);n.top().value.modalDomEl=j,f.append(j),f.addClass(m)},o.close=function(a,b){var c=n.get(a).value;c&&(c.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a).value;c&&(c.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,windowClass:b.windowClass})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse","$interpolate",function(a,b,c,d){var e=this,f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d){b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){e.itemsPerPage=parseInt(b,10),a.totalPages=e.calculateTotalPages()}):this.itemsPerPage=d},this.noPrevious=function(){return 1===this.page},this.noNext=function(){return this.page===a.totalPages},this.isActive=function(a){return this.page===a},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.getAttributeValue=function(b,c,e){return angular.isDefined(b)?e?d(b)(a.$parent):a.$parent.$eval(b):c},this.render=function(){this.page=parseInt(a.page,10)||1,this.page>0&&this.page<=a.totalPages&&(a.pages=this.getPages(this.page,a.totalPages))},a.selectPage=function(b){!e.isActive(b)&&b>0&&b<=a.totalPages&&(a.page=b,a.onSelectPage({page:b}))},a.$watch("page",function(){e.render()}),a.$watch("totalItems",function(){a.totalPages=e.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),e.page>b?a.selectPage(b):e.render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &"},controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c,d){return{number:a,text:b,active:c,disabled:d}}var h,i=f.getAttributeValue(e.boundaryLinks,b.boundaryLinks),j=f.getAttributeValue(e.directionLinks,b.directionLinks),k=f.getAttributeValue(e.firstText,b.firstText,!0),l=f.getAttributeValue(e.previousText,b.previousText,!0),m=f.getAttributeValue(e.nextText,b.nextText,!0),n=f.getAttributeValue(e.lastText,b.lastText,!0),o=f.getAttributeValue(e.rotate,b.rotate);f.init(b.itemsPerPage),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){h=parseInt(a,10),f.render()}),f.getPages=function(a,b){var c=[],d=1,e=b,p=angular.isDefined(h)&&b>h;p&&(o?(d=Math.max(a-Math.floor(h/2),1),e=d+h-1,e>b&&(e=b,d=e-h+1)):(d=(Math.ceil(a/h)-1)*h+1,e=Math.min(d+h-1,b)));for(var q=d;e>=q;q++){var r=g(q,q,f.isActive(q),!1);c.push(r)}if(p&&!o){if(d>1){var s=g(d-1,"...",!1,!1);c.unshift(s)}if(b>e){var t=g(e+1,"...",!1,!1);c.push(t)}}if(j){var u=g(a-1,l,!1,f.noPrevious());c.unshift(u);var v=g(a+1,m,!1,f.noNext());c.push(v)}if(i){var w=g(1,k,!1,f.noPrevious());c.unshift(w);var x=g(b,n,!1,f.noNext());c.push(x)}return c}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &"},controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){function f(a,b,c,d,e){return{number:a,text:b,disabled:c,previous:i&&d,next:i&&e}}var g=e.getAttributeValue(d.previousText,a.previousText,!0),h=e.getAttributeValue(d.nextText,a.nextText,!0),i=e.getAttributeValue(d.align,a.align);e.init(a.itemsPerPage),e.getPages=function(a){return[f(a-1,g,e.noPrevious(),!0,!1),f(a+1,h,e.noNext(),!1,!0)]}}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!z||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return b.tt_content?(r(),u&&g.cancel(u),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),A(),b.tt_isOpen=!0,b.$digest(),A):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),b.tt_animation?u=g(s,500):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=!1,z=angular.isDefined(d[l+"Enable"]),A=function(){var a,d,e,f;switch(a=w?j.offset(c):j.position(c),d=t.prop("offsetWidth"),e=t.prop("offsetHeight"),b.tt_placement){case"right":f={top:a.top+a.height/2-e/2,left:a.left+a.width};break;case"bottom":f={top:a.top+a.height,left:a.left+a.width/2-d/2};break;case"left":f={top:a.top+a.height/2-e/2,left:a.left-d};break;default:f={top:a.top-e,left:a.left+a.width/2-d/2}}f.top+="px",f.left+="px",t.css(f)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var B=function(){y&&(c.unbind(x.show,k),c.unbind(x.hide,m))};d.$observe(l+"Trigger",function(a){B(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m)),y=!0});var C=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(C)?!!C:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),B(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",["ui.bootstrap.transition"]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig","$transition",function(a,b,c,d){var e=this,f=[],g=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,h=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.addBar=function(a,b){var c=0,d=a.$parent.$index;angular.isDefined(d)&&f[d]&&(c=f[d].value),f.push(a),this.update(b,a.value,c),a.$watch("value",function(a,c){a!==c&&e.update(b,a,c)}),a.$on("$destroy",function(){e.removeBar(a)})},this.update=function(a,b,c){var e=this.getPercentage(b);h?(a.css("width",this.getPercentage(c)+"%"),d(a,{width:e+"%"})):a.css({transition:"none",width:e+"%"})},this.removeBar=function(a){f.splice(f.indexOf(a),1)},this.getPercentage=function(a){return Math.round(100*a/g)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},template:'<div class="progress" ng-transclude></div>'}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","$parse","ratingConfig",function(a,b,c,d){this.maxRange=angular.isDefined(b.max)?a.$parent.$eval(b.max):d.max,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):d.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):d.stateOff,this.createRateObjects=function(a){for(var b={stateOn:this.stateOn,stateOff:this.stateOff},c=0,d=a.length;d>c;c++)a[c]=angular.extend({index:c},b,a[c]);return a},a.range=angular.isDefined(b.ratingStates)?this.createRateObjects(angular.copy(a.$parent.$eval(b.ratingStates))):this.createRateObjects(new Array(this.maxRange)),a.rate=function(b){a.value===b||a.readonly||(a.value=b)
},a.enter=function(b){a.readonly||(a.val=b),a.onHover({value:b})},a.reset=function(){a.val=angular.copy(a.value),a.onLeave()},a.$watch("value",function(b){a.val=b}),a.readonly=!1,b.readonly&&a.$parent.$watch(c(b.readonly),function(b){a.readonly=!!b})}]).directive("rating",function(){return{restrict:"EA",scope:{value:"=",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(a){a.active=!1}),a.active=!0},b.addTab=function(a){c.push(a),(1===c.length||a.active)&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1,a.type=angular.isDefined(c.type)?a.$parent.$eval(c.type):"tabs"}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){var g,h;e.active?(g=a(e.active),h=g.assign,b.$parent.$watch(g,function(a,c){a!==c&&(b.active=!!a)}),b.active=g(b.$parent)):h=g=angular.noop,b.$watch("active",function(a){h(b.$parent,a),a?(f.select(b),b.onSelect()):b.onDeselect()}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).directive("timepicker",["$parse","$log","timepickerConfig","$locale",function(a,b,c,d){return{restrict:"EA",require:"?^ngModel",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(e,f,g,h){function i(){var a=parseInt(e.hours,10),b=e.showMeridian?a>0&&13>a:a>=0&&24>a;return b?(e.showMeridian&&(12===a&&(a=0),e.meridian===q[1]&&(a+=12)),a):void 0}function j(){var a=parseInt(e.minutes,10);return a>=0&&60>a?a:void 0}function k(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function l(a){m(),h.$setViewValue(new Date(p)),n(a)}function m(){h.$setValidity("time",!0),e.invalidHours=!1,e.invalidMinutes=!1}function n(a){var b=p.getHours(),c=p.getMinutes();e.showMeridian&&(b=0===b||12===b?12:b%12),e.hours="h"===a?b:k(b),e.minutes="m"===a?c:k(c),e.meridian=p.getHours()<12?q[0]:q[1]}function o(a){var b=new Date(p.getTime()+6e4*a);p.setHours(b.getHours(),b.getMinutes()),l()}if(h){var p=new Date,q=angular.isDefined(g.meridians)?e.$parent.$eval(g.meridians):c.meridians||d.DATETIME_FORMATS.AMPMS,r=c.hourStep;g.hourStep&&e.$parent.$watch(a(g.hourStep),function(a){r=parseInt(a,10)});var s=c.minuteStep;g.minuteStep&&e.$parent.$watch(a(g.minuteStep),function(a){s=parseInt(a,10)}),e.showMeridian=c.showMeridian,g.showMeridian&&e.$parent.$watch(a(g.showMeridian),function(a){if(e.showMeridian=!!a,h.$error.time){var b=i(),c=j();angular.isDefined(b)&&angular.isDefined(c)&&(p.setHours(b),l())}else n()});var t=f.find("input"),u=t.eq(0),v=t.eq(1),w=angular.isDefined(g.mousewheel)?e.$eval(g.mousewheel):c.mousewheel;if(w){var x=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};u.bind("mousewheel wheel",function(a){e.$apply(x(a)?e.incrementHours():e.decrementHours()),a.preventDefault()}),v.bind("mousewheel wheel",function(a){e.$apply(x(a)?e.incrementMinutes():e.decrementMinutes()),a.preventDefault()})}if(e.readonlyInput=angular.isDefined(g.readonlyInput)?e.$eval(g.readonlyInput):c.readonlyInput,e.readonlyInput)e.updateHours=angular.noop,e.updateMinutes=angular.noop;else{var y=function(a,b){h.$setViewValue(null),h.$setValidity("time",!1),angular.isDefined(a)&&(e.invalidHours=a),angular.isDefined(b)&&(e.invalidMinutes=b)};e.updateHours=function(){var a=i();angular.isDefined(a)?(p.setHours(a),l("h")):y(!0)},u.bind("blur",function(){!e.validHours&&e.hours<10&&e.$apply(function(){e.hours=k(e.hours)})}),e.updateMinutes=function(){var a=j();angular.isDefined(a)?(p.setMinutes(a),l("m")):y(void 0,!0)},v.bind("blur",function(){!e.invalidMinutes&&e.minutes<10&&e.$apply(function(){e.minutes=k(e.minutes)})})}h.$render=function(){var a=h.$modelValue?new Date(h.$modelValue):null;isNaN(a)?(h.$setValidity("time",!1),b.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(p=a),m(),n())},e.incrementHours=function(){o(60*r)},e.decrementHours=function(){o(60*-r)},e.incrementMinutes=function(){o(s)},e.decrementMinutes=function(){o(-s)},e.toggleMeridian=function(){o(720*(p.getHours()<12?1:-1))}}}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '"+c+"'.");return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?b(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=angular.element("<div typeahead-popup></div>");w.attr({matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&w.attr("template-url",k.typeaheadTemplateUrl);var x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y=function(){x.matches=[],x.activeIdx=-1},z=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){if(a===l.$viewValue&&m){if(c.length>0){x.activeIdx=0,x.matches.length=0;for(var d=0;d<c.length;d++)b[v.itemName]=c[d],x.matches.push({label:v.viewMapper(x,b),model:c[d]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight")}else y();q(i,!1)}},function(){y(),q(i,!1)})};y(),x.query=void 0;var A;l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(A&&d.cancel(A),A=d(function(){z(a)},o)):z(a):(q(i,!1),y()),p?a:a?(l.$setValidity("editable",!1),void 0):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,d={};d[v.itemName]=c=x.matches[a].model,b=v.modelMapper(i,d),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,d)}),y(),j[0].focus()},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),y(),x.$digest()))}),j.bind("blur",function(){m=!1});var B=function(a){j[0]!==a.target&&(y(),x.$digest())};e.bind("click",B),i.$on("$destroy",function(){e.unbind("click",B)});var C=a(w)(x);t?e.find("body").append(C):j.after(C)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?b.replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html","<div class='alert' ng-class='\"alert-\" + (type || \"warning\")'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides().length > 1"><span class="icon-prev"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides().length > 1"><span class="icon-next"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<table>\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-default btn-sm btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr ng-show="labels.length > 0" class="h6">\n      <th ng-show="showWeekNumbers" class="text-center">#</th>\n      <th ng-repeat="label in labels" class="text-center">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{\'text-muted\': dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html","<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\">\n	<li ng-transclude></li>\n"+'	<li ng-show="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="today()">{{currentText}}</button>\n			<button type="button" class="btn btn-sm btn-default" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="clear()">{{clearText}}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button>\n	</li>\n</ul>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog"><div class="modal-content" ng-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div></div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()">\n    <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < val && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')"></i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset-titles.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset-titles.html","<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'\n<div class="tabbable">\n  <ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html","<ul class=\"dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n"+'    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')}]);
define("ngBootstrapTpls", ["ngBootstrap"], function(){});


define('bootstrap',["angular", "util", "routes", "app", "gmaps", "rateit", "ngRoutes", "ngUiRouter", "ngAnimate", "ngCarousel", "ngFileUpload", "ngBootstrap", "ngBootstrapTpls"], function(ng, _, routes, app) {
  var $http, $q, addErrorClass, addLoadingClass, bodyElement, bootstrap, checkConfig, createBootstrap, createInjector, errorClass, forEach, isArray, isFunction, isObject, isPromise, isString, loadingClass, ngInjector, removeLoadingClass;
  forEach = ng.forEach;
  isString = ng.isString;
  isArray = ng.isArray;
  isFunction = ng.isFunction;
  isObject = ng.isObject;
  ngInjector = ng.injector(["ng"]);
  $q = ngInjector.get("$q");
  $http = ngInjector.get("$http");
  loadingClass = "deferred-bootstrap-loading";
  errorClass = "deferred-bootstrap-error";
  bodyElement = null;
  addLoadingClass = function() {
    return bodyElement.addClass(loadingClass);
  };
  removeLoadingClass = function() {
    return bodyElement.removeClass(loadingClass);
  };
  addErrorClass = function() {
    removeLoadingClass();
    return bodyElement.addClass(errorClass);
  };
  isPromise = function(value) {
    return (isObject(value)) && (isFunction(value.then));
  };
  checkConfig = function(config) {
    if (!(isObject(config))) {
      throw new Error("Bootstrap configuration must be an object.");
    }
    if (!(isString(config.module))) {
      throw new Error("'config.module' must be a string.");
    }
    if (!(isObject(config.resolve))) {
      throw new Error("'config.resolve' must be an object.");
    }
    if ((ng.isDefined(config.onError)) && !(isFunction(config.onError))) {
      throw new Error("'config.onError' must be a function.");
    }
  };
  createInjector = function(injectorModules) {
    if (isArray(injectorModules)) {
      if ((injectorModules.length === 1) && (injectorModules[0] === "ng")) {
        return ngInjector;
      } else {
        return ng.injector(injectorModules);
      }
    } else {
      if (injectorModules === "ng") {
        return ngInjector;
      } else {
        return ng.injector([injectorModules]);
      }
    }
  };
  createBootstrap = function(_arg) {
    var deferred, document, element, module;
    document = _arg.document, element = _arg.element, module = _arg.module;
    deferred = $q.defer();
    ng.element(document).ready(function() {
      ng.bootstrap(element, [module]);
      removeLoadingClass();
      return deferred.resolve(true);
    });
    return deferred.promise;
  };
  bootstrap = function(_arg) {
    var callResolveFn, constantNames, document, element, handleError, handleResults, injectorModules, module, onError, promises, resolve;
    document = _arg.document, element = _arg.element, module = _arg.module, injectorModules = _arg.injectorModules, onError = _arg.onError, resolve = _arg.resolve;
    injectorModules || (injectorModules = ["ng"]);
    promises = [];
    constantNames = [];
    bodyElement = ng.element(document.body);
    addLoadingClass();
    checkConfig(arguments[0]);
    callResolveFn = function(resolveFn, constantName) {
      var injector, result;
      constantNames.push(constantName);
      if (!(isFunction(resolveFn)) && !(isArray(resolveFn))) {
        throw new Error("Resolve for '" + constantName + "' is not a valid dependency injection format.");
      }
      injector = createInjector(injectorModules);
      result = injector.instantiate(resolveFn);
      console.debug("results", result);
      if (isPromise(result)) {
        return promises.push(result);
      } else {
        throw new Error("Resolve function for '" + constantName + "' must return a promise");
      }
    };
    handleResults = function(results) {
      forEach(results, function(value, index) {
        var result;
        result = (value != null ? value.data : void 0) != null ? value.data : value;
        return ng.module(module).constant(constantNames[index], result);
      });
      return createBootstrap({
        document: document,
        element: element,
        module: module
      });
    };
    handleError = function(error) {
      addErrorClass();
      if (!(isFunction(onError))) {
        return;
      }
      return onError(error);
    };
    forEach(resolve, callResolveFn);
    return $q.all(promises).then(handleResults, handleError);
  };
  return require(["domReady!"], function(document) {
    bootstrap({
      document: document,
      element: document,
      module: "app",
      injectorModules: ["ng", "ngRoute", "app.customControllers", "app.factories", "app.services", "app.controllers", "app.filters", "app.constants"],
      onError: function() {
        return alert("TERRIBLE ERROR!");
      },
      resolve: {
        USER_DETAILS: [
          "cAPI", function(API) {
            var deferred;
            deferred = $q.defer();
            $http.get(API.tryLogin).success(function(data) {
              return deferred.resolve(data);
            }).error(function() {
              return deferred.resolve({});
            });
            return deferred.promise;
          }
        ]
      }
    });
    app.run(function(USER_DETAILS, appUser, logger, $state) {
      appUser.load(USER_DETAILS);
      logger.success(appUser.username, appUser.isLoggedIn);
      if (!appUser.isLoggedIn) {
        return $state.go("anon");
      }
    });
    return app.config(function($provide) {
      return $provide.decorator("$exceptionHandler", function($delegate, config, logger) {
        var prefix;
        prefix = config.errorPrefix;
        return function(exception, cause) {
          var err, msg;
          $delegate(exception, cause);
          msg = exception.message;
          if ((prefix != null) && msg.startsWith(prefix)) {
            return;
          }
          err = {
            exception: exception,
            cause: cause
          };
          msg = "" + prefix + " - " + msg;
          return logger.error(msg, err, true);
        };
      });
    });
  });
});

require(["jquery", "angular", "toastr", "bootstrap"]);
