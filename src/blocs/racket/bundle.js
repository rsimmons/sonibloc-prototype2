(function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)})([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=o(r);t.exports=i.default},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function removeChildren(t){for(;t.firstChild;)t.removeChild(t.firstChild)}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_jsSha=__webpack_require__(2),_jsSha2=_interopRequireDefault(_jsSha),template=__webpack_require__(4),Racket=function Racket(document,audioContext){_classCallCheck(this,Racket);var outputNode=audioContext.createGain();this.inputs={},this.outputs={audio:{type:"audio",node:outputNode}},this.windowView=document.createElement("div"),this.windowView.innerHTML=template;var blocContainerElem=this.windowView.querySelector(".bloc-container"),patchInputSelectElem=this.windowView.querySelector(".patch-input-select"),patchOutputSelectElem=this.windowView.querySelector(".patch-output-select"),patchConnectButtonElem=this.windowView.querySelector(".patch-connect-button"),rackAudioOutPseudoBloc={inputs:{audio:{type:"audio",node:outputNode}}},nextBlocIdNum=1,blocInfo={ro:{id:"ro",code:null,_class:null,instance:rackAudioOutPseudoBloc,displayedName:"RACK OUTPUT"}},nextCxnIdNum=1,cxnInfo={},updatePatchConnectOptions=function(){var t={},e={};for(var n in blocInfo){var o=blocInfo[n].instance,r=blocInfo[n].displayedName;for(var i in o.inputs)t[n+":"+i]=r+":"+i;for(var c in o.outputs)e[n+":"+c]=r+":"+c}removeChildren(patchInputSelectElem);for(var a in t){var l=document.createElement("option");l.textContent=t[a]+" IN",l.value=a,patchInputSelectElem.appendChild(l)}removeChildren(patchOutputSelectElem);for(var u in e){var l=document.createElement("option");l.textContent=e[u]+" OUT",l.value=u,patchOutputSelectElem.appendChild(l)}};updatePatchConnectOptions();var addBloc=function addBloc(code){var bid="b"+nextBlocIdNum;nextBlocIdNum++;var blocClass=eval(code),blocInst=new blocClass(document,audioContext),wrapperElem=document.createElement("div");blocInst.panelView?wrapperElem.appendChild(blocInst.panelView):wrapperElem.innerHTML='<div style="box-sizing:border-box;border:1px solid black;width:64px;height:256px;text-align:center;font-size:14px;background:white;font-style:italic;color:gray;padding:100px 5px">No panel view</div>',wrapperElem.setAttribute("data-blocid",bid),blocContainerElem.appendChild(wrapperElem),blocInfo[bid]={id:bid,code:code,_class:blocClass,instance:blocInst,displayedName:blocClass.blocName},updatePatchConnectOptions()},isValidConnection=function(t,e,n,o){var r=blocInfo[t].instance,i=blocInfo[n].instance;return!!r.outputs.hasOwnProperty(e)&&(!!i.inputs.hasOwnProperty(o)&&r.outputs[e].type===i.inputs[o].type)},addConnection=function(t,e,n,o){var r="c"+nextCxnIdNum;nextCxnIdNum++;var i={outBlocId:t,outPortName:e,inBlocId:n,inPortName:o,disconnect:void 0};cxnInfo[r]=i;var c=blocInfo[t].instance,a=blocInfo[n].instance;(function(){switch(c.outputs[e].type){case"audio":var t=c.outputs[e].node,n=a.inputs[o].node;t.connect(n),i.disconnect=function(){t.disconnect(n)};break;case"gateEvent":i.disconnect=c.outputs[e].subscribe(a.inputs[o].notify);break;default:throw new Error("Invalid port type")}})()};patchConnectButtonElem.addEventListener("click",function(t){t.preventDefault();var e=patchInputSelectElem.value,n=patchOutputSelectElem.value;if(e||n){var o=e.split(":"),r=_slicedToArray(o,2),i=r[0],c=r[1],a=n.split(":"),l=_slicedToArray(a,2),u=l[0],s=l[1];return isValidConnection(u,s,i,c)?void addConnection(u,s,i,c):void console.log("invalid")}}),this.windowView.addEventListener("dragover",function(t){t.dataTransfer.dropEffect="copy",t.preventDefault()},!1),this.windowView.addEventListener("drop",function(t){t.preventDefault();var e=t.dataTransfer.getData("text/javascript");addBloc(e)},!1)};exports.default=Racket,Racket.blocName="Racket"},function(t,e,n){(function(e,n){/**
	 * [js-sha256]{@link https://github.com/emn178/js-sha256}
	 *
	 * @version 0.3.2
	 * @author Chen, Yi-Cyuan [emn178@gmail.com]
	 * @copyright Chen, Yi-Cyuan 2014-2016
	 * @license MIT
	 */
(function(o){"use strict";var r="object"==typeof e&&e.versions&&e.versions.node;r&&(o=n);var i=!o.JS_SHA256_TEST&&"object"==typeof t&&t.exports,c="0123456789abcdef".split(""),a=[-2147483648,8388608,32768,128],l=[24,16,8,0],u=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=[],d=function(t){return p(t,!0)},p=function(t,e){var n="string"!=typeof t;n&&t.constructor==o.ArrayBuffer&&(t=new Uint8Array(t));var r,i,d,p,f,h,v,m,b,w,y,x,C,_,g,E,T,I,k,S,N,A,O=!0,B=!1,V=0,P=0,R=0,q=t.length;e?(r=3238371032,i=914150663,d=812702999,p=4144912697,f=4290775857,h=1750603025,v=1694076839,m=3204075428):(r=1779033703,i=3144134277,d=1013904242,p=2773480762,f=1359893119,h=2600822924,v=528734635,m=1541459225),b=0;do{if(s[0]=b,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0,n)for(y=P;V<q&&y<64;++V)s[y>>2]|=t[V]<<l[3&y++];else for(y=P;V<q&&y<64;++V)w=t.charCodeAt(V),w<128?s[y>>2]|=w<<l[3&y++]:w<2048?(s[y>>2]|=(192|w>>6)<<l[3&y++],s[y>>2]|=(128|63&w)<<l[3&y++]):w<55296||w>=57344?(s[y>>2]|=(224|w>>12)<<l[3&y++],s[y>>2]|=(128|w>>6&63)<<l[3&y++],s[y>>2]|=(128|63&w)<<l[3&y++]):(w=65536+((1023&w)<<10|1023&t.charCodeAt(++V)),s[y>>2]|=(240|w>>18)<<l[3&y++],s[y>>2]|=(128|w>>12&63)<<l[3&y++],s[y>>2]|=(128|w>>6&63)<<l[3&y++],s[y>>2]|=(128|63&w)<<l[3&y++]);R+=y-P,P=y-64,V==q&&(s[y>>2]|=a[3&y],++V),b=s[16],V>q&&y<56&&(s[15]=R<<3,B=!0);var j=r,L=i,D=d,M=p,U=f,z=h,H=v,G=m;for(x=16;x<64;++x)E=s[x-15],C=(E>>>7|E<<25)^(E>>>18|E<<14)^E>>>3,E=s[x-2],_=(E>>>17|E<<15)^(E>>>19|E<<13)^E>>>10,s[x]=s[x-16]+C+s[x-7]+_<<0;for(A=L&D,x=0;x<64;x+=4)O?(e?(k=300032,E=s[0]-1413257819,G=E-150054599<<0,M=E+24177077<<0):(k=704751109,E=s[0]-210244248,G=E-1521486534<<0,M=E+143694565<<0),O=!1):(C=(j>>>2|j<<30)^(j>>>13|j<<19)^(j>>>22|j<<10),_=(U>>>6|U<<26)^(U>>>11|U<<21)^(U>>>25|U<<7),k=j&L,g=k^j&D^A,I=U&z^~U&H,E=G+_+I+u[x]+s[x],T=C+g,G=M+E<<0,M=E+T<<0),C=(M>>>2|M<<30)^(M>>>13|M<<19)^(M>>>22|M<<10),_=(G>>>6|G<<26)^(G>>>11|G<<21)^(G>>>25|G<<7),S=M&j,g=S^M&L^k,I=G&U^~G&z,E=H+_+I+u[x+1]+s[x+1],T=C+g,H=D+E<<0,D=E+T<<0,C=(D>>>2|D<<30)^(D>>>13|D<<19)^(D>>>22|D<<10),_=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7),N=D&M,g=N^D&j^S,I=H&G^~H&U,E=z+_+I+u[x+2]+s[x+2],T=C+g,z=L+E<<0,L=E+T<<0,C=(L>>>2|L<<30)^(L>>>13|L<<19)^(L>>>22|L<<10),_=(z>>>6|z<<26)^(z>>>11|z<<21)^(z>>>25|z<<7),A=L&D,g=A^L&M^N,I=z&H^~z&G,E=U+_+I+u[x+3]+s[x+3],T=C+g,U=j+E<<0,j=E+T<<0;r=r+j<<0,i=i+L<<0,d=d+D<<0,p=p+M<<0,f=f+U<<0,h=h+z<<0,v=v+H<<0,m=m+G<<0}while(!B);var J=c[r>>28&15]+c[r>>24&15]+c[r>>20&15]+c[r>>16&15]+c[r>>12&15]+c[r>>8&15]+c[r>>4&15]+c[15&r]+c[i>>28&15]+c[i>>24&15]+c[i>>20&15]+c[i>>16&15]+c[i>>12&15]+c[i>>8&15]+c[i>>4&15]+c[15&i]+c[d>>28&15]+c[d>>24&15]+c[d>>20&15]+c[d>>16&15]+c[d>>12&15]+c[d>>8&15]+c[d>>4&15]+c[15&d]+c[p>>28&15]+c[p>>24&15]+c[p>>20&15]+c[p>>16&15]+c[p>>12&15]+c[p>>8&15]+c[p>>4&15]+c[15&p]+c[f>>28&15]+c[f>>24&15]+c[f>>20&15]+c[f>>16&15]+c[f>>12&15]+c[f>>8&15]+c[f>>4&15]+c[15&f]+c[h>>28&15]+c[h>>24&15]+c[h>>20&15]+c[h>>16&15]+c[h>>12&15]+c[h>>8&15]+c[h>>4&15]+c[15&h]+c[v>>28&15]+c[v>>24&15]+c[v>>20&15]+c[v>>16&15]+c[v>>12&15]+c[v>>8&15]+c[v>>4&15]+c[15&v];return e||(J+=c[m>>28&15]+c[m>>24&15]+c[m>>20&15]+c[m>>16&15]+c[m>>12&15]+c[m>>8&15]+c[m>>4&15]+c[15&m]),J};i?(p.sha256=p,p.sha224=d,t.exports=p):o&&(o.sha256=p,o.sha224=d)})(this)}).call(e,n(3),function(){return this}())},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(s===setTimeout)return setTimeout(t,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}function i(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function c(){v&&f&&(v=!1,f.length?h=f.concat(h):m=-1,h.length&&a())}function a(){if(!v){var t=r(c);v=!0;for(var e=h.length;e;){for(f=h,h=[];++m<e;)f&&f[m].run();m=-1,e=h.length}f=null,v=!1,i(t)}}function l(t,e){this.fun=t,this.array=e}function u(){}var s,d,p=t.exports={};(function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(t){s=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}})();var f,h=[],v=!1,m=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new l(t,e)),1!==h.length||v||r(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e){t.exports='<div style="display: flex; flex-direction: column; min-height: 100%; background-color: #222">\n    <div style="background-color: #ffdcbd; font-size: 18px; padding: 5px 10px; text-align: center">Racket</div>\n    <div style="flex-grow: 1; display: flex">\n        <div class="bloc-container" style="flex: 1; flex-wrap: wrap; display: flex; align-content: flex-start"></div>\n        <div style="flex: 0 0 400px; background-color: rgb(187, 218, 212); padding: 5px">\n            <div><select class="patch-output-select"></select> &rarr; <select class="patch-input-select"></select> <button class="patch-connect-button">Connect</button></div>\n        </div>\n    </div>\n</div>\n'}]);