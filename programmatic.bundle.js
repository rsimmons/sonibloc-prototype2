!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=42)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new(e.AudioContext||e.webkitAudioContext),n=e.navigator.userAgent,i=!!n.match(/i(Pad|Phone)/i),r=!!n.match(/WebKit/i),o=i&&r&&!n.match(/CriOS/i)&&!n.match(/OPiOS/i);return o&&!function(){var n=e.document,i=function(){var e=t.createOscillator();e.frequency.value=1,e.start?e.start():e.noteOn(),e.stop?e.stop():e.noteOff(),n.body.removeChild(o)},r=n.createElement("div");r.style.cssText="position:absolute;bottom:0;left:0;top:0;right:0;width:5em;height:1.2em;margin:auto;padding:0.5em;background:#91d780;font-size:48px;text-align:center;border-radius:0.5em;border:4px solid white;font-weight:bold",r.textContent="Launch";var o=n.createElement("div");o.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background:rgba(0,0,0,0.9)",o.appendChild(r),o.addEventListener("mousedown",i),n.body.appendChild(o)}(),t}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){!function(e){e.AnalyserNode&&(e.AnalyserNode.prototype.getFloatTimeDomainData||!function(){var t=new Uint8Array(32768);e.AnalyserNode.prototype.getFloatTimeDomainData=function(e){var n=Math.min(this.fftSize,e.length);this.getByteTimeDomainData(t);for(var i=0;i<n;i++)e[i]=.0078125*t[i]-1}}())}(window)}},2:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){var e=[],t=function(t){return e.push(t),function(){e.splice(e.indexOf(t),1)}},n=function(t,n){var i=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var u=s.value;u(t,n)}}catch(e){r=!0,o=e}finally{try{!i&&a.return&&a.return()}finally{if(r)throw o}}};return[t,n]}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&a.return&&a.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(6),c=(i(u),n(5)),l=i(c),h="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLDBDNS4zNzUsMCwwLjAwMyw1LjM3MywwLjAwMywxMmMwLDYuNjI3LDUuMzcyLDEyLDExLjk5NywxMiAgICBjNi42MjYsMCwxMS45OTctNS4zNzMsMTEuOTk3LTEyQzIzLjk5Nyw1LjM3MywxOC42MjYsMCwxMiwweiBNMTYuNDEyLDE2LjcwOWwtMC4zNSwwLjM1Yy0wLjI5MSwwLjI5MS0wLjc4MiwwLjMwNS0xLjA4OCwwLjAyOSAgICBsLTQuNTItMy45NTVjLTAuMzA4LTAuMjc1LTAuNTQxLTAuODM4LTAuNTIxLTEuMjVsMC40MTktNy4xMzRDMTAuMzc0LDQuMzM2LDEwLjcyOSw0LDExLjE0Miw0aDAuNDkzICAgIGMwLjQxMywwLDAuNzY3LDAuMzM2LDAuNzg3LDAuNzQ4bDAuMzQzLDUuOTM0YzAuMDIxLDAuNDEzLDAuMjYyLDEsMC41MzUsMS4zMDlsMy4xNDQsMy42MjggICAgQzE2LjcxNywxNS45MjgsMTYuNzA0LDE2LjQxOCwxNi40MTIsMTYuNzA5eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvZz48L3N2Zz4=",v=function(){function e(t,n,i){var a=this;r(this,e);var u=4,c=[{outName:"gate16",divisor:1},{outName:"gate8",divisor:2},{outName:"gate4",divisor:4}];this.inputs={},this.outputs={};var v=!0,d=!1,f=void 0;try{for(var p,m=c[Symbol.iterator]();!(v=(p=m.next()).done);v=!0){var y=p.value,g=o(),w=s(g,2),b=w[0],x=w[1];this.outputs[y.outName]={type:"gateEvent",subscribe:b},y.emitter=x}}catch(e){d=!0,f=e}finally{try{!v&&m.return&&m.return()}finally{if(d)throw f}}this.tempo=120;var L=10;i&&(this.tempo=i.t);var M=t.createElement("div");M.innerHTML='<div style="box-sizing: border-box; width: 62px; height: 256px; padding: 5px; background-color: #a72a2a;font-size:14px"><div style="text-align:center;margin:40px 0 20px"><img width="48" height="48" src="'+h+'"></div><div><label>Tempo<br><input type="number" value="'+this.tempo+'" min="'+L+'" style="width: 50px" />bpm</label></div></div>',this.panelView=M.childNodes[0],this.panelView.querySelector("input").addEventListener("input",function(e){var t=parseInt(e.target.value,10);!isNaN(t)&&t>=L&&(a.tempo=t)},!1),this._scheduler=new l.default(n);var _=n.currentTime+.1,T=0;this._scheduler.start(function(e){for(var t=60/(a.tempo*u);_<e.end;){var n=!0,i=!1,r=void 0;try{for(var o,s=c[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value,h=l.divisor,v=h*t;T%h===0&&(l.emitter(_,!0),l.emitter(_+.5*v,!1))}}catch(e){i=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw r}}_+=t,T++}})}return a(e,[{key:"deactivate",value:function(){this._scheduler.stop()}},{key:"save",value:function(){return{t:this.tempo}}}]),e}();t.default=v,v.blockName="Big Ben",v.helpText="Big Ben is a clock generator. It outputs gate signals at a steady tempo, which is useful for advancing sequencers or triggering repetitive sounds.\n\nThe panel input lets you specify a tempo in beats per minute (BPM).\n\nThere are three gate outputs that emit gates at different time divisions of the specified tempo: gate16 is 16th notes, gate8 is 8th notes, and gate4 is quarter notes."},3:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(7),s=function(){function e(t,n){var r=this;i(this,e);var s=510,a=256,u=1024,c=new Float32Array(u),l=n.createAnalyser();l.fftSize=u;var h=n.createBuffer(1,2,n.sampleRate),v=h.getChannelData(0);v[0]=0,v[1]=0;var d=n.createBufferSource();d.buffer=h,d.loop=!0,d.start(),d.connect(l),this.inputs={audio:{type:"audio",node:l}},this.outputs={audio:{type:"audio",node:l}};var f=t.createElement("div");f.innerHTML=o,this.panelView=f.childNodes[0];var p=this.panelView.querySelector("canvas"),m=p.getContext("2d"),y=function e(){l.getFloatTimeDomainData(c);for(var t=0,n=0;n<u-s;n++)if(c[n]<=0&&c[n+1]>0){t=n;break}m.fillStyle="rgb(0, 0, 0)",m.fillRect(0,0,s,a),m.lineWidth=1,m.strokeStyle="rgb(0, 255, 0)",m.beginPath();for(var i=0;i<s;i++){var o=.5*a*(1-c[i+t]);0===i?m.moveTo(i,o):m.lineTo(i,o)}m.stroke(),r.rafId=requestAnimationFrame(e)};y()}return r(e,[{key:"deactivate",value:function(){cancelAnimationFrame(this.rafId)}}]),e}();t.default=s,s.blockName="Scope",s.helpText='Scope is an audio waveform visualizer, similar to an oscilloscope.\n\nScope visualizes the audio signal connected to its input. Its output is a copy of of its input, so it can be placed "in line" in a signal chain. However its output needn\'t be connected for it to work.\n\nThe vertical range of scope is [-1, 1], and the horizontal range is 510 samples, or about 12 milliseconds at a 44.1kHz sample rate.\n\nIf possible, Scope will align the displayed waveform so that it crosses zero at the left edge of the display. This can make wave shapes easier to discern. But if the input signal does not have a recent zero-crossing, alignment is not possible.'},4:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=function e(t,n,o){i(this,e);var s=1,a=440,u=.1,c=!1,l=function(e,t){t&&!c&&(h.frequency.setValueAtTime(a,e),h.frequency.exponentialRampToValueAtTime(s,e+u)),c=t},h=n.createOscillator();h.type="sine",h.frequency.value=s,h.start(),this.inputs={gate:{type:"gateEvent",notify:l}},this.outputs={audio:{type:"audio",node:h}};var v=t.createElement("div");v.innerHTML='<div style="box-sizing: border-box; width: 126px; height: 256px; padding: 5px; background-color: #e8a35f;position:relative"><div style="text-align:center;position:absolute;width:116px;bottom:0px"><img width="100" height="100" src='+r+"></div></div>",this.panelView=v.childNodes[0]};t.default=o,o.blockName="Thumper",o.helpText="Thumper is a simple kick drum synthesizer.\n\nIt has one gate input to trigger the kick, and one audio output with the resulting sound.\n\nThumper doesn't yet have any panel controls."},42:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(2),o=i(r),s=n(4),a=i(s),u=n(3),c=i(u),l=n(1),h=i(l),v=n(0),d=i(v);(0,h.default)();for(var f=(0,d.default)(window),p=new o.default(document,f),m=new a.default(document,f),y=new c.default(document,f),g=document.querySelector("#block-container"),w=[p.panelView,m.panelView,y.panelView],b=0;b<w.length;b++){var x=w[b];g.appendChild(x)}p.outputs.gate4.subscribe(m.inputs.gate.notify),m.outputs.audio.node.connect(y.inputs.audio.node),y.outputs.audio.node.connect(f.destination)},5:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){i(this,e),this.audioContext=t,this.running=!1,this.timeoutID=null}return r(e,[{key:"start",value:function(e){var t=.05,n=.1,i=this,r=null,o=null,s=function s(){if(!i.running)throw new Error("Internal error: timeoutFunc called but scheduler not running");var a=i.audioContext.currentTime;null===r&&(r=a,o=a),o<a&&console.log("FELL BEHIND BY",a-o);var u=a+n;e({begin:o,end:u,relativeBegin:o-r,relativeEnd:u-r,start:r}),o=u,i.timeoutID=setTimeout(s,1e3*t)};this.running=!0,s()}},{key:"stop",value:function(){this.running=!1,this.timeoutID&&(clearTimeout(this.timeoutID),this.timeoutID=null)}}]),e}();t.default=o},6:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function r(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,a,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(n=this._events[e],s(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(o(n))for(a=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;u<r;u++)c[u].apply(this,a);return!0},n.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(r=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,s,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},7:function(e,t){e.exports="<div style=box-sizing:border-box;width:510px;height:256px;background-color:#000> <canvas width=510 height=256></canvas> </div> "},8:function(e,t){e.exports="\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cpath d='M93.7,88l-5.3-30.6c0.6-2.2,1-4.5,1.2-6.8c0.2,0.1,0.4,0.2,0.7,0.2l0.4,0c0.6,0,1.1-0.5,1.1-1.1l0-5.7 c0-0.6-0.5-1.1-1.1-1.1l-0.4,0c-0.3,0-0.5,0.1-0.7,0.2c-0.8-8.3-4.1-15.8-9.1-21.8c0.2-0.1,0.3-0.1,0.5-0.3l0.3-0.3 c0.4-0.4,0.4-1.2,0-1.6l-4-4c-0.4-0.4-1.2-0.4-1.6,0l-0.3,0.3c-0.1,0.1-0.2,0.3-0.3,0.5c-6.8-5.5-15.5-8.9-24.9-8.9v0 c0,0-1.5,0-2.1,0.1c-8.8,0.4-16.7,3.6-23.1,8.8c-0.1-0.1-0.1-0.3-0.3-0.4l-0.3-0.3c-0.4-0.4-1.2-0.4-1.6,0l-4,4 c-0.4,0.4-0.4,1.2,0,1.6l0.3,0.3c0.1,0.1,0.2,0.2,0.3,0.2c-5.1,6-8.3,13.6-9.1,21.8c-0.2-0.1-0.4-0.2-0.6-0.2l-0.4,0 c-0.6,0-1.1,0.5-1.1,1.1l0,5.7c0,0.6,0.5,1.1,1.1,1.1l0.4,0c0.2,0,0.4-0.1,0.6-0.2c0.2,2.3,0.6,4.6,1.3,6.8L6.3,88 C5.5,88.2,5,88.7,5,89.5v1.9c0,0.8,0.7,1.5,1.5,1.5h1.5c0.8,0,1.5-0.7,1.5-1.5v-1.9c0-0.7-0.4-1.2-1-1.4L13.1,62 c1.4,3.6,3.4,6.8,5.7,9.8c-0.1,0.1-0.2,0.1-0.3,0.2l-0.3,0.3c-0.4,0.4-0.4,1.2,0,1.6l4,4c0.4,0.4,1.2,0.4,1.6,0l0.3-0.3 c0.1-0.1,0.1-0.2,0.2-0.2c7,5.9,15.9,9.4,25.7,9.4c0.6,0,1.3,0,1.9,0c0.9,0,1.9-0.1,2.8-0.2c0,0,0.1,0,0.1,0c8.5-1,16.1-4.6,22-10 c0.1,0.1,0.2,0.3,0.3,0.4l0.3,0.3c0.5,0.4,1.2,0.4,1.6-0.1l3.8-4.2c0.4-0.5,0.4-1.2-0.1-1.6l-0.3-0.3c-0.1-0.1-0.3-0.2-0.4-0.2 c2-2.7,3.7-5.6,4.9-8.8l4.6,26.2c-0.6,0.2-1,0.7-1,1.4v1.9c0,0.8,0.7,1.5,1.5,1.5h1.5c0.8,0,1.5-0.7,1.5-1.5v-1.9 C95,88.7,94.5,88.2,93.7,88z M49,83.3c-1,0-2.1-0.1-3.1-0.2v-8.6H49V83.3z M54.3,83.1c-0.8,0.1-1.7,0.2-2.6,0.2c-0.2,0-0.3,0-0.5,0 v-8.8h3V83.1z M56.6,82.7v-8.2c0-1.3-1-2.3-2.3-2.3h-3V53.6h0.5c1.9,0,3.4-1.5,3.4-3.4v-4.4c0-1.9-1.5-3.4-3.4-3.4h-3.5 c-1.9,0-3.4,1.5-3.4,3.4v4.4c0,1.9,1.5,3.4,3.4,3.4H49v18.6h-3.1c-1.3,0-2.3,1-2.3,2.3v8.2c-16.5-2.9-29.2-16.8-30-34.1 c-0.5-9.7,2.9-19,9.4-26.2c6.5-7.2,15.5-11.4,25.2-11.9c0.6,0,1.2,0,1.8,0c19.4,0,35.4,15.2,36.4,34.7 C87.3,63.6,74.2,79.5,56.6,82.7z'%3E%3C/path%3E%3C/svg%3E\""}});