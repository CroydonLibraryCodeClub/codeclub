!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return Object.keys(e).forEach(function(t){"number"==typeof e[t]&&(e[t]=String(e[t]))}),e}function o(e,t){var n=e.timing,o=e.memory,s={abTestId:t?t.abTestId:"",memory:{},timings:{},resources:[],redirectCount:void 0,documentWriteIntervention:!1,errorCount:0,firstPaint:0,firstContentfulPaint:0};if(u(n,s.timings),u(o,s.memory),s.redirectCount=e.navigation&&e.navigation.redirectCount,s.documentWriteIntervention=a(),s.firstPaint=i("first-paint"),s.firstContentfulPaint=i("first-contentful-paint"),s.errorCount=window.__cfErrCount||0,"function"==typeof e.getEntriesByType){var f=e.getEntriesByType("resource");s.resources=f.map(function(e){var t={n:e.name,s:c(e.startTime),d:c(e.duration),i:e.initiatorType,p:e.nextHopProtocol,rs:c(e.redirectStart),re:c(e.redirectEnd),fs:c(e.fetchStart),ds:c(e.domainLookupStart),de:c(e.domainLookupEnd),cs:c(e.connectStart),ce:c(e.connectEnd),qs:c(e.requestStart),ps:c(e.responseStart),pe:c(e.responseEnd),ws:c(e.workerStart),ss:c(e.secureConnectionStart),ts:e.transferSize,ec:e.encodedBodySize,dc:e.decodedBodySize};return window.__cfBeaconCustomTag&&(("object"!=typeof window.__cfBeaconCustomTag||Array.isArray(window.__cfBeaconCustomTag))&&console.warn('Invalid custom tag format. Please use the following format: { "first_key": "first_value", "second_key": "second_value" }'),t.ct=r(window.__cfBeaconCustomTag)),t})}return JSON.stringify(s).length>=64e3&&(s.resources=[]),s}function i(e){if("function"==typeof performance.getEntriesByType){var t=performance.getEntriesByType("paint").filter(function(t){return t.name===e})[0];return t?t.startTime:0}return 0}function a(){var e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);if(!e)return!1;var t=parseInt(e[2],10),n=navigator.connection;return t>=55&&!!n&&"cellular"===n.type&&n.downlinkMax<=.115}function c(e){return null==e?void 0:Math.round(1e3*e)/1e3}function u(e,t){for(var n in e){var r=e[n];"number"==typeof r&&(t[n]=r)}}t.__esModule=!0;var s=n(1);!function(){var e=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance,t="function"==typeof document.querySelector?document.querySelector("script[data-cf-beacon]"):void 0,n=window.__cfBeacon;if(t){var r=t.getAttribute("data-cf-beacon");if(r)try{n=JSON.parse(r)}catch(e){}}if(e&&n&&n.rayId){var i=function(){var t=o(e,n);t&&n&&s.sendObjectBeacon("/cdn-cgi/beacon/performance?req_id="+n.rayId,t)},a=function(){var e=window.__cfRl&&window.__cfRl.done||window.__cfQR&&window.__cfQR.done;e?e.then(i):i()};"complete"===window.document.readyState?a():window.addEventListener("load",function(){window.setTimeout(a)})}}()},function(e,t,n){"use strict";function r(e,t,n){var r=JSON.stringify(t),o=new XMLHttpRequest;n&&(o.onreadystatechange=function(){4==this.readyState&&204==this.status&&n()}),o.open("POST",e),o.setRequestHeader("content-type","application/json"),o.send(r)}t.__esModule=!0,t.sendObjectBeacon=r}]);
//# sourceMappingURL=performance.min.js.map