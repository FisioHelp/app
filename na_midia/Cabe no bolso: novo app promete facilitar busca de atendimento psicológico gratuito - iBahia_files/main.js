









	


	

	


	

	

	

	




	(function(w) {

		var LOCALIZATION = {
			'tip.state.unsubscribed': "Ativar notificações",
			'tip.state.subscribed': "Subscreveste as notificações",
			'tip.state.blocked': "Bloqueaste as notificações",
			'message.prenotify': "Carrega para ativar as notificações",
			'message.action.subscribed': "Obrigado por subscrever!",
			'message.action.resubscribed': "Subscreveste as notificações",
			'message.action.unsubscribed': "Não irás receber mais notificações",
			'dialog.main.title': "Gerir notificações",
			'dialog.main.button.subscribe': "SUBSCREVER",
			'dialog.main.button.unsubscribe': "REMOVER SUBSCRIÇÃO",
			'dialog.blocked.title': "Desbloquear notificações",
			'dialog.blocked.message': "Segue as instruções para ativar as notificações:"
		};

		function getPushNotifications() {
			
				
					return {
						id: "oneSignal",
						conf: {
							
							appId: "018cb4b8-7789-4b09-8cf2-9748ed6e4b79"
							
						}
					};
				
				
			
		}

		w.marfeel = {
			theme: {
				customBuildNumber: "18883",
				buildNumber: 18883,
				deviceType: "d",
				tenantColor: "#e91838"
			},
			tenant: {
				id: "www.ibahia.com"
			},
			definition: {
				name: "index",
				pwa: "31" || 0,
				pushNotifications: getPushNotifications()
			},
			features: {
				swName: "" || "marfeel_sw.js"
			},
			resourcesHost: "https://b.marfeel.com",
			
		};

		
			/*!
 * Copyright (c) 2017 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 * 
 */
!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(13),o=r(i),a=n(1),u=r(a),s=n(12),c=r(s),f=n(4);u["default"].addEventListener("error",c["default"]),(0,f.loadManifestFromMarfeel)(),u["default"].OneSignal||o["default"].install()},function(e,t){"use strict";e.exports=window},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),o=r(i),a=n(3),u=r(a),s=o["default"].mixin({dispatch:function(e,t){this.dispatchEvent(new u["default"](e,t))}});t["default"]=s},function(e,t,n){var r;r=function(){"use strict";var e=function(e,t){this.type=e,this.detail=t};return e.prototype={type:null,detail:null,target:null},e}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function r(e,t,n,r){e.onreadystatechange=function(){4===e.readyState&&(e.status>=200&&e.status<300?t&&t(r?e.responseXML:e.responseText):n&&n(e))}}function i(e){for(var t=l.document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("="),i=f(r,2),o=i[0],a=i[1];if(o.trim()===e.trim())return a}}function o(e,t,n){var r=e+"="+t+";expires="+new Date(Date.now()+n).toGMTString()+";domain="+l.document.domain+";path=/";return l.document.cookie=r,r}function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function u(e,t,n,i,o,a,u){var s=new XMLHttpRequest;return s.timeout=o||1e4,s.open("POST",e),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),!!u&&(s.withCredentials=!0),r(s,n,i,a),s.send(t),s}function s(){var e=l.marfeel.theme.buildNumber,t=l.marfeel.tenant,n=l.marfeel.resourcesHost,r=l.marfeel.resourcesPath,i=void 0===r?"index":r,o=l.document.createElement("link"),a=n+"/statics/"+t.id+"/"+i+"/manifest.json?build="+e;return o.setAttribute("rel","manifest"),o.setAttribute("href",a),l.document.head.appendChild(o),o}function c(e){return d.test(e.toUpperCase())}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{!r&&u["return"]&&u["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.getCookieValue=i,t.setCookieValue=o,t.getRandomIdentifier=a,t.ajaxPost=u,t.loadManifestFromMarfeel=s,t.isWhiteColor=c;var l=n(1),d=/^#F.?F.?F.?$/},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOCAL="localhost",t.PRE="pre",t.PRO="pro"},function(e,t){"use strict";function n(e){return void 0===e}function r(e,t){var n=t.dataAttributes;n&&Object.keys(n).forEach(function(t){return e.setAttribute(t,n[t])}),t.id&&(e.id=t.id),t.textContent&&(e.textContent=t.textContent)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=n(e.mrfCachedParent)?e.offsetParent:e.mrfCachedParent;null!==r&&(e.mrfCachedParent=r,e.mrfCachedTop=n(e.mrfCachedTop)?e.getBoundingClientRect().top+t:e.mrfCachedTop,e.mrfCachedLeft=n(e.mrfCachedLeft)?e.offsetLeft:e.mrfCachedLeft)}var o=/__.*?__/g,a=1e3,u=600,s=document.createElement("a"),c=function(e){return Object.keys(e).filter(function(t){return e.hasOwnProperty(t)}).reduce(function(t,n){var r=0===n.indexOf("__")&&n.indexOf("__",n.length-2)>=0?n:"__"+n+"__";return t[r]=e[n],t},{})};Function.prototype.bind||(Function.prototype.bind=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=this;return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return i.apply(e,n.concat(r))}}),HTMLElement.prototype.whenReady=function(e){e(this)},HTMLElement.prototype.isFutureNode=!1;var f={isArray:function(e){return"Array"===e.constructor.name},isObject:function(e){return e instanceof Object},isFunction:function(e){return"[object Function]"==={}.toString.call(e)},isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isNothing:function(e){return"undefined"==typeof e||null===e},isEmpty:function(e){return!e||e.constructor!==Number&&0===Object.keys(e).length},objectHasProperty:function(e,t){return!f.isNothing(e)&&(e.hasOwnProperty?e.hasOwnProperty(t):"undefined"!=typeof e[t])},convertObjectToArray:function(e){return Object.keys(e).map(function(t){return e[t]})},retrieveQueryString:function(e){var t=encodeURIComponent;return Object.keys(e).map(function(n){return t(n)+"="+t(e[n])}).join("&")},objectSplice:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(function(t,n){return t[n]=e[n],t},{})},abstractMethodError:function(e){return new Error(e+" is an abstract method that needs to be implemented")},fixSrcProtocol:function(e){var t=e.startsWith("//");if(e.startsWith("http")||e.startsWith("/")&&!t)return e;var n=t?"":"//",r="https:"===document.location.protocol?"https:":"http:";return""+r+n+e},cleanSrcProtocol:function(e){if(e){var t=e.split("//");if(t.length>1)return t[1]}return e},loadScript:function(e,t,n){var i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src",e),n&&r(i,n),i.onload=function(){t&&t()},document.getElementsByTagName("body")[0].appendChild(i)},registerListener:function(e,t,n,r,i){var o=n.bind(r);e.addEventListener(t,o,i),r.createdListeners=r.createdListeners||[],r.createdListeners.push({target:e,eventName:t,bindedListener:o})},removeAllListeners:function(e){var t=null;if(e.createdListeners)for(var n=0;n<e.createdListeners.length;n++)t=e.createdListeners[n],t.target.removeEventListener(t.eventName,t.listener)},createInMemoryMeasuringImg:function(e,t,n,r){var i=new Image;i.src=t,i.addEventListener("load",function o(t){t.target.removeEventListener("load",o),n.call(e,t,r)}),i.addEventListener("error",function a(t){t.target.removeEventListener("error",a),t.target.className+=" brokenImage",n.call(e,t,r)})},isElementInsideViewport:function(e,t){return e.getBoundingClientRect().top<=t},cacheElementsOffsets:function(e,t){for(var n=0;n<e.length;n++)i(e[n],t);return e},isElementOnViewportWithCache:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return i(e,t),"true"===e.getAttribute("mrf-forceload-plugin")||!e.classList.contains("mrf-hideImage")&&null!==e.mrfCachedParent&&f.DomUtils.isElementInDom(e)===!0&&e.mrfCachedTop<t+n&&e.mrfCachedTop>t-n&&e.mrfCachedLeft<r+u},getRandomElementFromArray:function(e){return e[Math.floor(Math.random()*e.length)]},clone:function(e,t){return e?t?JSON.parse(JSON.stringify(e)):Object.assign({},e):e},closest:function(e,t){var n=t,r=function(e){return e.classList&&e.classList.contains};if(r(n)&&n.classList.contains(e))return n;for(;(n=n.parentNode)&&r(n);)if(n.classList.contains(e))return n;return null},one:function(e,t,n){var r=function i(r){t.removeEventListener(e,i),n.call(t,r)};return t&&t.addEventListener(e,r),r},areSimilarObjects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Object.keys(e).length!==Object.keys(t).length)return!1;var n=!0;for(var r in e)e.hasOwnProperty(r)&&(n=n&&e[r]===t[r]);return n},buildContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(Object.keys(e).length>0){var n=c(e);return t.replace(o,function(e){return n[e]})}return t},findObjectInArrayByProperty:function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(f.objectHasProperty(r,t))return r}return null},getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.scrollingElement&&document.scrollingElement.scrollTop||document.body.scrollTop||0},getHostName:function(e){return e?(s.href=e,s.hostname):e},getAbsoluteUrl:function(e){return e?(s.href=e.startsWith("http")||e.startsWith("/")?e:"/"+e,s.href):e}};f.DomUtils={isElementInDom:function(e){if(document.contains&&e.parentNode)return document.contains(e);if(e.id)return!!document.getElementById(e.id);e.id="FindMe";var t=!!document.getElementById(e.id);return e.id="",t}},f.Event={onEventWithFallback:function(e,t,n){return new Promise(function(r){e.addEventListener(t,function i(){e.removeEventListener(t,i),r()}),!!n&&setTimeout(r,n)})}},f.Animation={getTranslateX:function(e){if(e){var t=1,n=e.style["-webkit-transform"],r=parseInt(n.substring(n.indexOf("(")+t,n.indexOf("px")),10);return isNaN(r)?0:r}return 0},getTranslateY:function(e){if(e){var t=2,n=e.style["-webkit-transform"],r=n.substring(n.indexOf(",")+t,n.size),i=parseInt(r.substring(0,r.indexOf("px")),10);return isNaN(i)?0:i}return 0},onTransitionEnd:function(e,t){return f.Event.onEventWithFallback(e,"webkitTransitionEnd",t)},onAnimationEnd:function(e,t){return f.Event.onEventWithFallback(e,"webkitAnimationEnd",t)},onAnimationStart:function(e,t){return f.Event.onEventWithFallback(e,"webkitAnimationStart",t)},onTransitionEndWithFallback:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return new Promise(function(n){var r=!1,i=setTimeout(function(){r=!0,n()},t);f.one("webkitTransitionEnd",e,function(){r||(clearTimeout(i),n())})})}},e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(){var e=(0,u.getCookieValue)(f);return e||(e=(0,u.getRandomIdentifier)(),(0,u.setCookieValue)(f,e,c)),e}var o=n(21),a=r(o),u=n(4),s="https://www.google-analytics.com/collect",c=62208e6,f="mrf-client-id",l=i(),d={trackPushNotificationsAskForSubscription:function(){this.trackMarfeelEvent("PushNotifications","ask","bell")},trackPushNotificationsSubscription:function(e){this.trackMarfeelEvent("PushNotifications","subscription",e)},trackPushNotificationsMute:function(e){this.trackMarfeelEvent("PushNotifications","trackPushNotificationsMute",e)},trackJSErrors:function(e){this.trackMarfeelEvent("Error",e)},trackMarfeelEvent:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2];a["default"].forEach(function(r){var i=r.trackCode,o="v=1&tid="+i+"&cid="+l+"&t=event&ec="+e+"&ea="+t+"&el="+n;(0,u.ajaxPost)(s,o)})}};e.exports=d},function(e,t,n){var r;r=function(){"use strict";var e=function(){};return e.mixin=function(t){return t.addEventListener=e.prototype.addEventListener,t.hasEventListener=e.prototype.hasEventListener,t.removeEventListener=e.prototype.removeEventListener,t.dispatchEvent=e.prototype.dispatchEvent,t.getEventListeners=e.prototype.getEventListeners,t.removeAllEventListeners=e.prototype.removeAllEventListeners,t.assignEventListeners=e.prototype.assignEventListeners,t.one=e.prototype.one,t},e.prototype={constructor:e,getEventListeners:function(){return this._listeners},addEventListener:function(e,t){var n=this._listeners;void 0===n&&(n=this._listeners={}),void 0===n[e]&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},one:function(e,t){var n=function(r){this.removeEventListener(e,n),t.call(this,r)}.bind(this);this.addEventListener(e,n)},hasEventListener:function(e,t){var n=this._listeners;return void 0!==n&&(void 0!==n[e]&&n[e].indexOf(t)!==-1)},removeEventListener:function(e,t){if(void 0!==this._listeners){var n,r=this._listeners,i=r[e];void 0!==i&&(void 0!==t?(n=i.indexOf(t),n!==-1&&i.splice(n,1)):delete r[e])}},removeAllEventListeners:function(e){this.listeners&&(this._listeners[e]?this._listeners[e]=void 0:this._listeners=void 0)},assignEventListeners:function(e){this._listeners=e},dispatchEvent:function(e){if(void 0!==this._listeners){var t=this._listeners,n=t[e.type];if(void 0!==n){e.target=this;for(var r=n.length-1;r>=0;r--)n[r].call(this,e)}}}},e}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),a=n(6),u=[/\.marfeel\.com/,/facebook/,/ads\.s\.js/,/widgets\.s\.js/,/web-clients\.mynativeplatform\.com/,/script\.ioam\.de/,/gtm\.js/,/OneSignalSDK\.js/,/cdn\.taboola\.com/,/prebid(\.\d+)*\.js/,/cmp.js$/,/static\.addevweb\.com/,/platform\.sunmedia\.tv/];t["default"]={addSrcToBlacklist:function(e){u.push(e)},getCachedSrc:function(e){var t=o["default"].marfeel.features.disableProxyScripts;if("true"!==t&&t!==(0,a.getHostName)(e)){var n=!u.some(function(t){return t.test(e)});if(n){var r=o["default"].marfeel.externalResourcesHost,i=o["default"].marfeel.theme.buildNumber,s=r+"/statics"+i+"/",c=document.createElement("a");c.href=e;var f=c.protocol.startsWith("https")?"ps":"p";return s+"js/"+f+"/"+(0,a.cleanSrcProtocol)(e)}}return e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){var n=t.dataAttributes;n&&Object.keys(n).forEach(function(t){return e.setAttribute(t,n[t])}),t.id&&(e.id=t.id),t.textContent&&(e.textContent=t.textContent)}function o(e,t,n,r,o,a){return new Promise(function(u,s){var f=document.createElement("script"),l=document.getElementsByTagName("script")[0];f.type="text/javascript",e&&f.setAttribute("data-script-id",e),f.async=!0,f.src=(0,c.fixSrcProtocol)(t),f.onload=function(e){n&&n(e),u(e)},f.onerror=function(e){r&&r(e),s(e)},a&&i(f,a),o?o.appendChild(f):l.parentNode.insertBefore(f,l)})}function a(e,t,n,r,i,a){return new Promise(function(u,c){var f=s["default"].getCachedSrc(t);o(e,f,n,r,i,a).then(function(e){u(e)})["catch"](function(){o(e,t,n,r,i,a).then(function(e){u(e)})["catch"](function(e){c(e)})})})}var u=n(9),s=r(u),c=n(6),f={};e.exports={loadExternalScript:function(e,t,n,r,i){if(!f[t]){var o=[].concat(e),u=o.map(function(e){return a(t,e,null,null,null,i)});f[t]=Promise.all(u)}return n&&f[t].then(n),r&&f[t]["catch"](r),f[t]},appendInlineScript:function(e,t){var n=document.createElement("script"),r=document.head;n.type="text/javascript",n.innerHTML=e,t&&i(n,t),r.appendChild(n)},loadScriptInNode:function(e,t,n,r,i,o){return a(t,e,r,i,n,o)}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={getEnvironment:function(){var e=document.domain;return"localhost"===e||"localhost.marfeelcache.com"===e||0===e.indexOf("192.")?"localhost":/^(?!www).+\.marfeel(cache|cdn)?\.com/.test(e)?"pre":"pro"},getRuntimeEnvinroment:function(){return"browser"}};window.marfeel.GardaMarfeel=n,t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c["default"].location.hostname.indexOf("localhost")&&e.indexOf(m)>=0}function o(e){var t=e.message,n=e.filename,r=e.lineno,o=e.colno;if(i(n)){var a=r&&o?" ["+r+":"+o+"]":"",s="Desktop:"+a+" "+t;u["default"].trackJSErrors(s)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var a=n(7),u=r(a),s=n(1),c=r(s),f=c["default"].marfeel,l=f.theme,d=f.tenant,p=f.resourcesHost,m=p+"/"+d.id+"/main."+l.deviceType+".js"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(11);var i=n(16),o=r(i);n(15),t["default"]={install:o["default"]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o=r(i),a=n(20),u=r(a),s=n(2),c=r(s);t["default"]={init:function(){c["default"].addEventListener("pushNotifications:permissionChange",this.onPermissionChange),c["default"].addEventListener("pushNotifications:subscriptionChange",this.onSubscriptionChange),c["default"].addEventListener("pushNotifications:notifyButtonClicked",this.onNotyfyButtonClicked)},onPermissionChange:function(e){var t=e.detail;switch(t){case u["default"].GRANTED:o["default"].trackPushNotificationsSubscription("accept");break;case u["default"].DENIED:o["default"].trackPushNotificationsSubscription("block");break;case u["default"].DEFAULT:o["default"].trackPushNotificationsSubscription("close")}},onSubscriptionChange:function(e){var t=e.detail;o["default"].trackPushNotificationsMute(!t)},onNotyfyButtonClicked:function(){o["default"].trackPushNotificationsAskForSubscription()}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),o=r(i),a=n(2),u=r(a),s=n(18),c=r(s),f=n(14),l=r(f),d=n(4),p="rgb(84,110,123)",m=o["default"].marfeel.definition.pwa;"PushManager"in window&&4&m&&u["default"].addEventListener("sw:installed",function(){var e=c["default"].getInstance(),t=o["default"].marfeel.theme.tenantColor;e.isPushNotificationsSupported().then(function(n){if(n){var r=(0,d.isWhiteColor)(t)?p:t,i={requiresUserPrivacyConsent:!1,notifyButton:{enable:!0,size:"medium",position:"bottom-left",offset:{bottom:"16px",left:"16px"},prenotify:!0,showCredit:!1,text:LOCALIZATION,colors:{"circle.background":r,"circle.foreground":"white","badge.background":r,"badge.foreground":"white","badge.bordercolor":"white","pulse.color":r,"dialog.button.background.hovering":"rgb(77, 101, 113)","dialog.button.background.active":"rgb(70, 92, 103)","dialog.button.background":"rgb(84,110,123)","dialog.button.foreground":"white"}}},a=Object.assign(i,o["default"].marfeel.definition.pushNotifications.conf);e.init(a),l["default"].init()}})})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("serviceWorker"in c.navigator&&"https:"===document.location.protocol){var t=c.navigator.serviceWorker.register,n=c.marfeel.theme,r=c.marfeel.tenant,i=c.marfeel.definition,o=c.marfeel.resourcesHost,u=function(t){var a=o,u="",s=r.id,d=i.name;t===f.PRE&&(l(s,d,c.location.origin,n.customBuildNumber),a=u=c.location.origin,s="marfeel",d="index");var p=c.marfeel.definition.pushNotifications?c.marfeel.definition.pushNotifications.id:"",m=["buildNumber="+n.buildNumber,"resourcesHost="+a,"marfeeldt="+n.deviceType,"tenantName="+s,"marfeelName="+d,"pwa="+(c.marfeel.definition.pwa||""),"pushNotificationsProvider="+p,"isMarfeelPress="+(e.isPress||""),"version="+(n.version||"")].join("&");return u+"/"+c.marfeel.features.swName+"?"+m};t.call(c.navigator.serviceWorker,""+u(c.marfeel.GardaMarfeel.getEnvironment())).then(function(e){c.navigator.serviceWorker.register=function(){return Promise.resolve(e)},s["default"].dispatchEvent(new a["default"]("sw:installed"))})["catch"](function(){})}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var o=n(3),a=r(o),u=n(2),s=r(u),c=n(1),f=n(5),l=function(e,t,n,r){var i=document.createElement("link"),o=document.head;i.setAttribute("rel","manifest"),i.setAttribute("href",n+"/"+e+"/"+t+"/manifest.json?host="+n+"&buildNumber="+r),o.insertBefore(i,o.firstElementChild)}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){n(this,e)}return r(e,[{key:"init",value:function(){throw new Error("init method needs to be implemented.")}},{key:"triggerSubscriptionRequest",value:function(){throw new Error("triggerSubscriptionRequest method needs to be implemented.")}},{key:"getPermissionStatus",value:function(){throw new Error("getPermissionStatus method needs to be implemented.")}},{key:"isPushNotificationsSubscribed",value:function(){throw new Error("isPushNotificationsSubscribed method needs to be implemented.")}},{key:"setSubscription",value:function(){throw new Error("setSubscription method needs to be implemented.")}},{key:"isPushNotificationsMuted",value:function(){throw new Error("isPushNotificationsMuted method needs to be implemented.")}},{key:"isPushNotificationsSupported",value:function(){throw new Error("isPushNotificationsSupported method needs to be implemented.")}},{key:"provideUserConsent",value:function(){throw new Error("provideUserConsent method needs to be implemented.")}}]),e}();t["default"]=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),f=n(10),l=n(17),d=r(l),p=n(3),m=r(p),h=n(2),v=r(h),b=n(5),g=n(19),y=r(g),E=void 0,O=c["default"].marfeel.features.swName||"marfeel_sw.js",w={persistNotification:!1,autoRegister:!1,notifyButton:{enable:!1},welcomeNotification:{disable:!0},requiresUserPrivacyConsent:!0},P=function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));c["default"].OneSignal=c["default"].OneSignal||[];var n=c["default"].marfeel.resourcesHost,r=c["default"].marfeel.theme.buildNumber;return(0,f.loadExternalScript)(n+"/statics/marfeel/resources/pushNotifications/OneSignalSDK.js?buildNumber="+r,"mrf-oneSignalSDK"),e}return a(t,e),u(t,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t){var n=Object.assign({},w,e);c["default"].marfeel.GardaMarfeel.getEnvironment()===b.PRE&&(n.appId=y["default"][c["default"].location.host]),c["default"].OneSignal.push(function(){c["default"].OneSignal.SERVICE_WORKER_UPDATER_PATH=O,c["default"].OneSignal.SERVICE_WORKER_PATH=O,c["default"].OneSignal.SERVICE_WORKER_PARAM={scope:"/"}}),c["default"].OneSignal.push(function(){c["default"].OneSignal.init(n).then(t)}),e.promptOptions&&c["default"].OneSignal.push(function(){c["default"].OneSignal.isPushNotificationsEnabled(function(e){return!e&&c["default"].OneSignal.showHttpPrompt()})}),c["default"].OneSignal.push(function(){c["default"].OneSignal.on("notificationPermissionChange",function(e){var t=e.to;v["default"].dispatchEvent(new m["default"]("pushNotifications:permissionChange",t))})}),c["default"].OneSignal.push(function(){c["default"].OneSignal.on("subscriptionChange",function(e){v["default"].dispatchEvent(new m["default"]("pushNotifications:subscriptionChange",e))})}),c["default"].OneSignal.push(function(){c["default"].OneSignal.on("notifyButtonButtonClick",function(){v["default"].dispatchEvent(new m["default"]("pushNotifications:notifyButtonClicked"))})})})}},{key:"triggerSubscriptionRequest",value:function(){var e=this;return new Promise(function(t){c["default"].OneSignal.push(function(){e.isPushNotificationsMuted().then(function(n){n?e.setSubscription(!0).then(t):(c["default"].OneSignal.registerForPushNotifications(),t())})})})}},{key:"getPermissionStatus",value:function(){return new Promise(function(e){c["default"].OneSignal.push(function(){c["default"].OneSignal.getNotificationPermission().then(e)})})}},{key:"isPushNotificationsSubscribed",value:function(){return new Promise(function(e){c["default"].OneSignal.push(function(){c["default"].OneSignal.isPushNotificationsEnabled().then(e)})})}},{key:"isPushNotificationsMuted",value:function(){return new Promise(function(e){c["default"].OneSignal.push(function(){c["default"].OneSignal.isOptedOut().then(e)})})}},{key:"setSubscription",value:function(e){return new Promise(function(t){c["default"].OneSignal.push(function(){c["default"].OneSignal.setSubscription(e).then(t)})})}},{key:"isPushNotificationsSupported",value:function(){return new Promise(function(e){c["default"].OneSignal.push(function(){e(c["default"].OneSignal.isPushNotificationsSupported())})})}},{key:"provideUserConsent",value:function(){return c["default"].OneSignal.provideUserConsent(!0)}}]),t}(d["default"]),S={getInstance:function(){return E||(E=new P),E},destroy:function(){E=null}};t["default"]=S},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={"b.marfeel.com":"e89eb780-404e-4c91-b713-d778659296d7","bc.marfeel.com":"cdb187f1-7a27-47b2-b432-14a8d13742bb","enjoy.marfeel.com":"e526cab5-a6c6-4f1b-9a73-b995ea3bdd33","luc.marfeel.com":"b6530637-776c-4204-9623-d4cac1d944a2","pre.marfeel.com":"9247f91f-adac-436e-a39b-ce21bd405bba"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={GRANTED:"granted",DENIED:"denied",DEFAULT:"default"}},function(e,t){"use strict";e.exports=[{trackCode:"UA-27070218-1",trackEvents:!0,trackErrors:!0,options:{name:"Marfeel"}}]}]);
		
	})(window)

