/**
 * modaly.js v0.4.4
 * (c) 2019 Victor Navarro
 * Released under the MIT License.
 */

function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}!function(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===i&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('.modaly-wrapper{position:fixed;top:0;left:0;visibility:visible;width:100vw;height:100vh;transition:all var(--duration) var(--animation)}.modaly-wrapper:before{content:"";position:absolute;width:100%;height:100%;z-index:-1;background-color:var(--background);opacity:var(--opacity)}.modaly-hidden{visibility:hidden;opacity:0}');var t=function(){function t(e,i){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=Object.assign({},{background:"black",opacity:.75,duration:250,animation:"ease-in",escape:!0,overlay:!0,accessible:!0,onShow:null,onHide:null,document:document},i);this.wrapper=r.document.querySelector(e),this.wrapper.classList.add("modaly-wrapper"),this.hide(),0===r.opacity&&(r.duration=0),this.wrapper.style.setProperty("--background",r.background),this.wrapper.style.setProperty("--animation",r.animation),this.wrapper.style.setProperty("--opacity",r.opacity),this.wrapper.style.setProperty("--duration","0s"),setTimeout(function(){a.wrapper.style.setProperty("--duration","".concat(r.duration,"ms")),a.wrapper.style.display="block"},r.duration),this.accessible=r.accessible,this.accessible&&(this.wrapper.setAttribute("role","dialog"),this.wrapper.setAttribute("aria-modal","true"),this.wrapper.setAttribute("aria-hidden","true")),this.showCallback=r.onShow,this.hideCallback=r.onHide,r.document.querySelectorAll("[data-modaly-open='".concat(e,"']")).forEach(function(e){return e.addEventListener("click",function(){return a.show(e)})}),this.wrapper.querySelectorAll("[data-modaly-close]").forEach(function(e){a.accessible&&e.setAttribute("aria-label","close this dialog"),e.addEventListener("click",function(t){t.stopPropagation(),a.hide(e)})}),r.escape&&r.document.addEventListener("keyup",function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||a.hide()}),r.overlay&&this.wrapper.addEventListener("click",function(){a.hide()})}var i,a,r;return i=t,(a=[{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.showCallback&&this.showCallback(this.wrapper,e),this.accessible&&this.wrapper.setAttribute("aria-hidden","false"),this.wrapper.classList.remove("modaly-hidden")}},{key:"hide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.hideCallback&&this.hideCallback(this.wrapper,e),this.accessible&&this.wrapper.setAttribute("aria-hidden","true"),this.wrapper.classList.add("modaly-hidden")}}])&&e(i.prototype,a),r&&e(i,r),t}();export default t;
