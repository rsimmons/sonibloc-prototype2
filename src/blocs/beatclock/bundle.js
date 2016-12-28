(function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(1),s=r(i);e.exports=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(){var e=[],t=function(t){return e.push(t),function(){e.splice(e.indexOf(t),1)}},n=function(t,n){var r=!0,i=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var a=o.value;a(t,n)}}catch(e){i=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw s}}};return[t,n]}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),l=(r(a),n(3)),h=r(l),f=n(4),v=r(f),c=function(){function e(t,n){i(this,e);var r=4,u=[{outName:"gate16",divisor:1},{outName:"gate8",divisor:2},{outName:"gate4",divisor:4}];this.inputs={},this.outputs={};var a=!0,l=!1,f=void 0;try{for(var c,p=u[Symbol.iterator]();!(a=(c=p.next()).done);a=!0){var d=c.value,m=s(),y=o(m,2),_=y[0],b=y[1];this.outputs[d.outName]={type:"gateEvent",subscribe:_},d.emitter=b}}catch(e){l=!0,f=e}finally{try{!a&&p.return&&p.return()}finally{if(l)throw f}}var g=120,w=10;this.panelView=(0,h.default)(t,'<div style="box-sizing: border-box; width: 192px; height: 256px; border: 1px solid black; padding: 5px;"><div>BeatClock</div><form><label>Tempo <input type="number" value="'+g+'" min="'+w+'" style="width: 50px" />bpm</label></form></div>'),this.panelView.querySelector("input").addEventListener("input",function(e){var t=parseInt(e.target.value,10);!isNaN(t)&&t>=w&&(g=t)},!1),this._scheduler=new v.default(n);var x=n.currentTime+.1,L=0;this._scheduler.start(function(e){for(var t=60/(g*r);x<e.end;){var n=!0,i=!1,s=void 0;try{for(var o,a=u[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var l=o.value,h=l.divisor,f=h*t;L%h===0&&(l.emitter(x,!0),l.emitter(x+.5*f,!1))}}catch(e){i=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw s}}x+=t,L++}})}return u(e,[{key:"deactivate",value:function(){this._scheduler.stop()}}]),e}();t.default=c},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,i,u,a,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var h=new Error('Uncaught, unspecified "error" event. ('+t+")");throw h.context=t,h}if(n=this._events[e],o(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),n.apply(this,u)}else if(s(n))for(u=Array.prototype.slice.call(arguments,1),l=n.slice(),i=l.length,a=0;a<i;a++)l[a].apply(this,u);return!0},n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(i=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,i,o,u;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(u=o;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){i=u;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t){"use strict";function n(e,t){var n=e.createElement("template");return n.innerHTML=t,n.content.firstChild}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){n(this,e),this.audioContext=t,this.running=!1,this.timeoutID=null}return r(e,[{key:"start",value:function(e){var t=.05,n=.1,r=this,i=null,s=null,o=function o(){if(!r.running)throw new Error("Internal error: timeoutFunc called but scheduler not running");var u=r.audioContext.currentTime;null===i&&(i=u,s=u),s<u&&console.log("FELL BEHIND BY",u-s);var a=u+n;e({begin:s,end:a,relativeBegin:s-i,relativeEnd:a-i,start:i}),s=a,r.timeoutID=setTimeout(o,1e3*t)};this.running=!0,o()}},{key:"stop",value:function(){this.running=!1,this.timeoutID&&(clearTimeout(this.timeoutID),this.timeoutID=null)}}]),e}();t.default=i}]);