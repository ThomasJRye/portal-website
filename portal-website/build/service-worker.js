"use strict";var precacheConfig=[["/index.html","aababac02dfdb86dda957c1211134795"],["/static/js/0.a6798f5b.chunk.js","bd7447e9af74c9700f71e1b4289ba1fb"],["/static/js/main.fe8365b2.js","a648248f35d6a327b60187ebc8799caf"],["/static/media/4Dspace.cf3e74c0.png","cf3e74c076be22d8eb6ab02116133719"],["/static/media/Anders_Brennhagen.77612f48.jpg","77612f48c237507741c14a5b58f4b0b9"],["/static/media/Avionics.fe873ad2.png","fe873ad2a450b719d9ec89d3fd711c7f"],["/static/media/Boom.95fee87e.png","95fee87eeda7185eaef8e29a912ff901"],["/static/media/Earth.b9291ea2.jpg","b9291ea25e0e425e54b0af5813a96d9d"],["/static/media/Eirik.617a6217.png","617a62170ceb8b693dd4601ed5e9316d"],["/static/media/Ellingsen.c53ddf2e.png","c53ddf2e39a3a02442a9a93cef164612"],["/static/media/Even.d74e2af4.jpg","d74e2af4c17f8c0e49336e0aaf9c73ea"],["/static/media/IMG_20200806_221617.7f598bf3.jpg","7f598bf3d8d6794e26658a85d3b69fec"],["/static/media/Insj.9641ed3c.png","9641ed3c850a5002052d704e735ff22e"],["/static/media/Ketil_Røed.91e38e93.jpeg","91e38e938fdcbed90b1b2a87847310f3"],["/static/media/Kjeller.dbccb6e8.jpg","dbccb6e8883c76c719e1a73a3a043ce1"],["/static/media/Logo-Norsk-Romsenter-rgb-hvit-300 1.823a2a3b.png","823a2a3bd91cdc685f2e1a58de42c815"],["/static/media/Logo.662dea50.png","662dea50ddc4c01d41e1f4c35311f91f"],["/static/media/Meteor.55d65011.png","55d65011f86e309d7797a8bfbc060c81"],["/static/media/OsloMET.353ae500.jpg","353ae500a2c147e2d4ae3ede86e25754"],["/static/media/Rasmus.aaf9cada.jpg","aaf9cada1902f7a05c94e85655ac6cdb"],["/static/media/Rocket.2454a8ab.png","2454a8ab0da1a86129df0649b93a8387"],["/static/media/UIOBlack.3a288451.png","3a2884515227943714954554fbb972c0"],["/static/media/engagement.c871f995.png","c871f99549253b4fc77e4178402cca42"],["/static/media/engagementMobile.5370506a.png","5370506ab3d2b7aed0ace4ab616d4a8f"],["/static/media/groups.0e1beeaa.png","0e1beeaaabe3f4ec05776f4fa5b32ae3"],["/static/media/plumbing.d91d0eb2.png","d91d0eb225574ab6c170e97fcae86758"],["/static/media/sveising.bcc035a1.png","bcc035a1a197f83a2cc0a6d84386ed59"],["/static/media/vectorControl.c8cdb638.png","c8cdb638e333564d976263e37dcb3da6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});