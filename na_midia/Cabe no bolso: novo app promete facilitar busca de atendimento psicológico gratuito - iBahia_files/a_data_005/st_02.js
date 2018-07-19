!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof noAMDDefine&&noAMDDefine.amd?noAMDDefine(["exports"],e):e(t.Stream={})}(this,function(t){"use strict";function __generator(r,n){var o,i,u,t,c={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return t={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function verb(e){return function(t){return function step(e){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(u=2&e[0]?i.return:e[0]?i.throw||((u=i.return)&&u.call(i),0):i.next)&&!(u=u.call(i,e[1])).done)return u;switch(i=0,u&&(e=[2&e[0],u.value]),e[0]){case 0:case 1:u=e;break;case 4:return c.label++,{value:e[1],done:!1};case 5:c.label++,i=e[1],e=[0];continue;case 7:e=c.ops.pop(),c.trys.pop();continue;default:if(!(u=0<(u=c.trys).length&&u[u.length-1])&&(6===e[0]||2===e[0])){c=0;continue}if(3===e[0]&&(!u||e[1]>u[0]&&e[1]<u[3])){c.label=e[1];break}if(6===e[0]&&c.label<u[1]){c.label=u[1],u=e;break}if(u&&c.label<u[2]){c.label=u[2],c.ops.push(e);break}u[2]&&c.ops.pop(),c.trys.pop();continue}e=n.call(r,c)}catch(t){e=[6,t],i=0}finally{o=u=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}var n=function(){},c=function(){function Observer(t,e,r){void 0===e&&(e=n),void 0===r&&(r=n),this.nextFn=t,this.throwFn=e,this.completeFn=r}return Observer.fromListener=function(t){return new Observer(t.onNext,t.onError,t.onComplete)},Observer.prototype.next=function(t){this.nextFn&&this.nextFn(t)},Observer.prototype.throw=function(t){this.throwFn(t)},Observer.prototype.complete=function(){this.completeFn()},Observer}(),l=function(){function Stream(t){var e=this;this._hasEnded=!1,this._subscribers=[],t&&setTimeout(function(){e.next(t)})}return Stream.of=function(e){return Stream.create(function(t){t.nextComplete(e)})},Stream.create=function(n,o){var i=new Stream;if(n){var u=i.subscribe;i.subscribe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=u.apply(i,t);return setTimeout(function(){n(i)}),function(){o&&o(),r()}}}return i},Stream.timeout=function(e){if("number"!=typeof e)throw Error("Stream.interval(ms) argument must be a number");return Stream.create(function(t){setTimeout(function(){return t.complete()},e)})},Stream.interval=function(r,n){if("number"!=typeof r)throw Error("Stream.interval(ms) argument must be a number");var o,i;return Stream.create(function(t){if(!o){i=0;var e=function(){i++,t.next(i)};o=setInterval(e,r),n&&setTimeout(e)}},function(){return clearInterval(o)})},Stream.empty=function(){var t=new Stream;return setTimeout(function(){return t.complete()},0),t},Stream.fromPromise=function(i){var u,t=this;return i.catch(function(t){u=t}),Stream.create(function(o){return function __awaiter(r,n,o,i){return new(o||(o=Promise))(function(t,e){function fulfilled(t){try{step(i.next(t))}catch(t){e(t)}}function rejected(t){try{step(i.throw(t))}catch(t){e(t)}}function step(e){e.done?t(e.value):new o(function(t){t(e.value)}).then(fulfilled,rejected)}step((i=i.apply(r,n||[])).next())})}(t,void 0,void 0,function(){var e,r,n;return __generator(this,function(t){switch(t.label){case 0:return u?(o.throw(u),[3,4]):[3,1];case 1:return t.trys.push([1,3,,4]),r=(e=o).next,[4,i];case 2:return r.apply(e,[t.sent()]),[3,4];case 3:return n=t.sent(),o.throw(n),[3,4];case 4:return o.complete(),[2]}})})})},Stream.fromList=function(t){return Stream.create(function(e){t.forEach(function(t){return e.next(t)}),e.complete()})},Stream.merge=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0,o=e;n<o.length;n++){var i=o[n];t=Stream.mergeTwo(t,i)}return t},Stream.mergeTwo=function(n,o){return Stream.create(function(e){var t=0,r={onNext:function(t){return e.next(t)},onError:function(t){return e.throw(t)},onComplete:function(){2<=++t&&e.complete()}};n.subscribe(r),o.subscribe(r)})},Stream.prototype.toListFuture=function(){var i=this;return new Promise(function(t,e){var r=[],n={onNext:function(t){t&&r.push(t)},onError:function(t){e(t)},onComplete:function(){o(),t(r)}},o=i.subscribe(n)})},Stream.prototype.complete=function(){if(!this._hasEnded){this._hasEnded=!0;try{this._subscribers.forEach(function(t){return t.complete()})}catch(t){this.throw(t)}}},Stream.prototype.throw=function(e){if(!this._hasEnded)try{this._subscribers.forEach(function(t){return t.throw(e)})}catch(e){throw e}},Stream.prototype.next=function(e){if(!this._hasEnded)try{this._subscribers.forEach(function(t){return t.next(e)})}catch(t){this.throw(t)}},Stream.prototype.nextComplete=function(t){this.next(t),this.complete()},Stream.prototype.flatMap=function(n){return applyStreamMiddleware.call(this,function(e,t,r){return new c(function(t){n(t).subscribe({onNext:function(t){return e.next(t)},onError:function(t){return e.throw(t)}})},e.throw.bind(e))})},Stream.prototype.map=function(n){return applyStreamMiddleware.call(this,function(e,t,r){return new c(function(t){return e.next(n(t))},e.throw.bind(e),e.complete.bind(e))})},Stream.prototype.filter=function(n){return applyStreamMiddleware.call(this,function(e,t,r){return new c(function(t){return n(t)?e.next(t):null},e.throw.bind(e),e.complete.bind(e))})},Stream.prototype.distinctUntilChanged=function(){var n;return applyStreamMiddleware.call(this,function(e,t,r){return new c(function(t){n!==t&&e.next(t),n=t},e.throw.bind(e),e.complete.bind(e))})},Stream.prototype.take=function(n){var o=0;return applyStreamMiddleware.call(this,function(e,t,r){return new c(function(t){o++,r._hasEnded||e.next(t),n<=o&&r.complete()},e.throw.bind(e),e.complete.bind(e))})},Stream.prototype.scan=function(n,t){var o=0,i=t;return applyStreamMiddleware.call(this,function(e,t,r){return new c(function(t){i=n(i,t,o++),e.next(i)},e.throw.bind(e),e.complete.bind(e))})},Stream.prototype.zipWithIndex=function(){var n=0;return applyStreamMiddleware.call(this,function(e,t,r){return new c(function(t){e.next({_1:t,_2:n++})},e.throw.bind(e),e.complete.bind(e))})},Stream.prototype.do=function(r){return applyStreamMiddleware.call(this,function(e){return new c(function(t){return r(t),e.next(t)},e.throw.bind(e),e.complete.bind(e))})},Stream.prototype.subscribe=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=_subscriberFromArgs.apply(void 0,e);return this._subscribers.push(n),function(){return t._subscribers.splice(t._subscribers.indexOf(n),1)}},Stream}();function _subscriberFromArgs(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(0===e.length)throw Error("Cannot subscribe without listener");if(e[0]instanceof c)t=e[0];else if(e[0]instanceof l){var n=e[0];t=new c(n.next.bind(n),n.throw.bind(n),n.complete.bind(n))}else if(e[0].onNext)t=c.fromListener(e[0]);else{var o=e[0],i=e[1]||function(t){throw t},u=e[2]||function(){};t=new c(o,i,u)}return t}function applyStreamMiddleware(c){var a=this,s=new l,f=s.subscribe;return s.subscribe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=_subscriberFromArgs.apply(void 0,t),n=c(r,a,s),o=n.completeFn;n.completeFn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];o.apply(this,t),s.complete()};var i=a.subscribe(n),u=f.apply(s,[n]);return function(){u(),i()}},s}t.Observer=c,t.Stream=l,Object.defineProperty(t,"__esModule",{value:!0})});
