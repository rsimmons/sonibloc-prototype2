(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(1),a=i(r);e.exports=a.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),o=i(a),u=function e(t,n){r(this,e);var i=0,a=4,u=void 0,d=n.createGain();d.gain.value=1;var l=n.createWaveShaper();l.oversample="none",d.connect(l);var s=function(e){for(var t=2*(e+1),n=new Float32Array(t),i=0;i<t;i++)n[i]=(e+i)%2?1:-1;l.curve=n,u=1/(t-1)};s(a),this.inputs={audio:{type:"audio",node:d}},this.outputs={audio:{type:"audio",node:l}},this.panelView=(0,o.default)(t,'<div style="box-sizing: border-box; width: 126px; height: 256px; padding: 5px; background-color: white;"><div>Orinami</div><div><label>Stages <input type="number" value="'+a+'" min="'+i+'" step="1" style="width: 50px" /></label></div></div>'),this.panelView.querySelector("input").addEventListener("input",function(e){var t=parseInt(e.target.value,10);if(!isNaN(t)){var n=Math.floor(t);n>=i&&s(n)}},!1)};t.default=u,u.blocName="Orinami"},function(e,t){"use strict";function n(e,t){var n=e.createElement("template");return n.innerHTML=t,n.content.firstChild}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}]);