"use strict";var precacheConfig=[["/mvp/index.html","e52c71ee46061be436df468031229aad"],["/mvp/static/css/app.b890b2f4.css","534d8fd03c8601080d6cdb689ad239c8"],["/mvp/static/js/assets.f229f34c.js","19aa270d9aa2665c0f6bc952a07be947"],["/mvp/static/js/d3.11e696c2.js","5d91a7a2fd6d882a5838bbffe62580b9"],["/mvp/static/media/MacbookPro.bf02f453.png","bf02f453bbb51e1a739b76f244b782ee"],["/mvp/static/media/Smartphone.d2d5eae8.png","d2d5eae8b2779d8af1187136b34ff03c"],["/mvp/static/media/converge.e0be28ac.jpg","e0be28ac08fa83ecc04a1c23e705e92a"],["/mvp/static/media/logo.b135463b.png","b135463b41cebb8bf2eacdf8b7474840"],["/mvp/static/media/mesh.a7cc8041.jpg","a7cc80418b4b28d514052f5780ee22ba"],["/mvp/static/media/punk.2ec2bccf.jpg","2ec2bccf98db48d5f572c0347ee5c900"],["/mvp/static/media/roboto-v15-latin-regular.16e1d930.woff","16e1d930cf13fb7a956372044b6d02d0"],["/mvp/static/media/roboto-v15-latin-regular.38861cba.ttf","38861cba61c66739c1452c3a71e39852"],["/mvp/static/media/roboto-v15-latin-regular.7e367be0.woff2","7e367be02cd17a96d513ab74846bafb3"],["/mvp/static/media/roboto-v15-latin-regular.9f916e33.eot","9f916e330c478bbfa2a0dd6614042046"],["/mvp/static/media/story.55ce2a05.jpg","55ce2a05e7a4767da697a4da320ef4fe"],["/mvp/static/media/teaching.8caf56ae.jpg","8caf56ae14b3f0254898ad07af1f5345"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/mvp/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});