0\r�m��      ���    45!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).firebase=t()}(this,function(){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=d(e[r],t[r]));return e}var e,t,o,f=(o=Error,r(e=a,t=o),void(e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)),a);function i(){this.constructor=e}function a(e,t){var r=o.call(this,t)||this;return r.code=e,r.name="FirebaseError",Object.setPrototypeOf(r,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,s.prototype.create),r}var s=(c.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?function(e,n){return e.replace(h,function(e,t){var r=n[t];return null!=r?r.toString():"<"+t+"?>"})}(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",c=new f(o,s),p=0,l=Object.keys(n);p<l.length;p++){var u=l[p];"_"!==u.slice(-1)&&(u in c&&console.warn('Overwriting FirebaseError base field "'+u+'" can cause unexpected behavior.'),c[u]=n[u])}return c},c);function c(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var h=/\{\$([^}]+)}/g;function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function p(e,t){var r=new b(e,t);return r.subscribe.bind(r)}var l,u,b=(y.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},y.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},y.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},y.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=g),void 0===n.error&&(n.error=g),void 0===n.complete&&(n.complete=g);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}}),this.observers.push(n),i},y.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},y.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},y.prototype.sendOne=function(e,t){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},y.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},y);function y(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then