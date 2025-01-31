if(!self.define){let e,t={};const s=(s,n)=>(s=new URL(s+".js",n).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let c={};const a=e=>s(e,r),o={module:{uri:r},exports:c,require:a};t[r]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(i(...e),c)))}}define([],(function(){"use strict";try{self["workbox:core:6.5.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.5.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=s(e)}}class i extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let c=r&&r.handler;const a=e.method;if(!c&&this.i.has(a)&&(c=this.i.get(a)),!c)return;let o;try{o=c.handle({url:s,request:e,event:t,params:i})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:i})}catch(e){e instanceof Error&&(n=e)}if(this.o)return this.o.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const c=r.match({url:e,sameOrigin:t,request:s,event:n});if(c)return i=c,(Array.isArray(i)&&0===i.length||c.constructor===Object&&0===Object.keys(c).length||"boolean"==typeof c)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,s(e))}setCatchHandler(e){this.o=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let c;const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},o=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),h=e=>e||o(a.precache),u=e=>e||o(a.runtime);function f(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}function l(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class d{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class w{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this.h.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this.h=e}}let p;async function b(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const i=e.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},c=s?s(r):r,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?i.body:await i.blob();return new Response(a,c)}function y(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const v=new Set;try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}function m(e){return"string"==typeof e?new Request(e):e}class R{constructor(e,t){this.u={},Object.assign(this,t),this.event=t.event,this.l=e,this.p=new g,this.v=[],this.m=[...e.plugins],this.R=new Map;for(const e of this.m)this.R.set(e,{});this.event.waitUntil(this.p.promise)}async fetch(e){const{event:s}=this;let n=m(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this.l.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw i&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:i.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=m(e);let s;const{cacheName:n,matchOptions:i}=this.l,r=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,c);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const n=m(e);var i;await(i=0,new Promise((e=>setTimeout(e,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:(c=r.url,new URL(String(c),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var c;const a=await this._(s);if(!a)return!1;const{cacheName:o,matchOptions:h}=this.l,u=await self.caches.open(o),f=this.hasCallback("cacheDidUpdate"),l=f?await async function(e,t,s,n){const i=y(t.url,s);if(t.url===i)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),c=await e.keys(t,r);for(const t of c)if(i===y(t.url,s))return e.match(t,n)}(u,r.clone(),["__WB_REVISION__"],h):null;try{await u.put(r,f?a.clone():a)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of v)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:l,newResponse:a.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this.u[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=m(await e({mode:t,request:n,event:this.event,params:this.params}));this.u[s]=n}return this.u[s]}hasCallback(e){for(const t of this.l.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this.l.plugins)if("function"==typeof t[e]){const s=this.R.get(t),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return t[e](i)};yield n}}waitUntil(e){return this.v.push(e),e}async doneWaiting(){let e;for(;e=this.v.shift();)await e}destroy(){this.p.resolve(null)}async _(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class q{constructor(e={}){this.cacheName=u(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new R(this,{event:t,request:s,params:n}),r=this.q(i,s,t);return[r,this.U(r,i,s,t)]}async q(e,s,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.j(s,e),!i||"error"===i.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(i=await r({error:t,event:n,request:s}),i)break;if(!i)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))i=await t({event:n,request:s,response:i});return i}async U(e,t,s,n){let i,r;try{i=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),t.destroy(),r)throw r}}class x extends q{constructor(e={}){e.cacheName=h(e.cacheName),super(e),this.k=!1!==e.fallbackToNetwork,this.plugins.push(x.copyRedirectedCacheableResponsesPlugin)}async j(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this.L(e,t):await this.C(e,t))}async C(e,s){let n;const i=s.params||{};if(!this.k)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const t=i.integrity,r=e.integrity,c=!r||r===t;n=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||t:void 0})),t&&c&&"no-cors"!==e.mode&&(this.N(),await s.cachePut(e,n.clone()))}return n}async L(e,s){this.N();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}N(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==x.copyRedirectedCacheableResponsesPlugin&&(n===x.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(x.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}x.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},x.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await b(e):e};class U{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.O=new Map,this.M=new Map,this.P=new Map,this.l=new x({cacheName:h(e),plugins:[...t,new w({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.l}precache(e){this.addToCacheList(e),this.K||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.K=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=l(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.O.has(i)&&this.O.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.O.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.P.has(e)&&this.P.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.P.set(e,n.integrity)}if(this.O.set(i,e),this.M.set(i,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return f(e,(async()=>{const t=new d;this.strategy.plugins.push(t);for(const[t,s]of this.O){const n=this.P.get(s),i=this.M.get(t),r=new Request(t,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return f(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.O.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.O}getCachedURLs(){return[...this.O.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.O.get(t.href)}getIntegrityForCacheKey(e){return this.P.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let j;const k=()=>(j||(j=new U),j);class L extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const i of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(i);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}function E(e){const s=k();!function(e,s,a){let o;if("string"==typeof e){const t=new URL(e,location.href);o=new n((({url:e})=>e.href===t.href),s,a)}else if(e instanceof RegExp)o=new i(e,s,a);else if("function"==typeof e)o=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=e}(c||(c=new r,c.addFetchListener(),c.addCacheListener()),c).registerRoute(o)}(new L(s,e))}var C;self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),C={},function(e){k().precache(e)}([{url:"_next/static/chunks/4bd1b696-b54c66733e4d5abb.js",revision:"134c96f899922d29279b675e9fbee451"},{url:"_next/static/chunks/517-caa5c25c69255187.js",revision:"3cf4a4e569e234810f97ed0c0897a750"},{url:"_next/static/chunks/app/_not-found/page-0cb240f37ead8c1c.js",revision:"11428d238858bca6b3edb53af90a013f"},{url:"_next/static/chunks/app/no-pwa/layout-b4d1987adf840197.js",revision:"778dca7523d96e1d765014f24cad6c1d"},{url:"_next/static/chunks/app/no-pwa/page-025ae9584be5752a.js",revision:"778dca7523d96e1d765014f24cad6c1d"},{url:"_next/static/chunks/app/pwa/(all)/layout-92c6ca0fc37d7129.js",revision:"778dca7523d96e1d765014f24cad6c1d"},{url:"_next/static/chunks/app/pwa/(all)/login/page-b73c87cacd314a64.js",revision:"b300322a9ac68cdb59e89c3116bae7de"},{url:"_next/static/chunks/app/pwa/(authenticated)/fuga/page-a9e1599989b36d23.js",revision:"560c4459738e897b966daa73b98e88fb"},{url:"_next/static/chunks/app/pwa/(authenticated)/hoge/page-49195d236e186eb7.js",revision:"a4fb43995e6dc816e6f8316b0d275ddf"},{url:"_next/static/chunks/app/pwa/(authenticated)/layout-fc6daf0ef34dd076.js",revision:"778dca7523d96e1d765014f24cad6c1d"},{url:"_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"cd4061b5adde896bf2cde6c57e3098a9"},{url:"_next/static/chunks/main-app-8299980e215f3d1e.js",revision:"4edd70c58782e9122bdf8bf58f6109ff"},{url:"_next/static/chunks/main-ea0c450e71595898.js",revision:"a1eda8542d146bac2781eb1d26068fbb"},{url:"_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"7c192283bc380e9c048b969bc2e1dde2"},{url:"_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"dd01894f4bc1c8941a6cc87715d59ce3"},{url:"_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"_next/static/chunks/webpack-2f7b9ded6775055f.js",revision:"2055c86851fd3a0e0c3d8d2cb5076b2c"},{url:"_next/static/hasNFg1Y5UuMPHfYw-qVm/_buildManifest.js",revision:"3cb3546e0839618f89182d553ad99c11"},{url:"_next/static/hasNFg1Y5UuMPHfYw-qVm/_ssgManifest.js",revision:"b404e23d62d95bafd03ad7747cc0e88b"},{url:"404.html",revision:"62578e7016cfbbf4cf24f8eb57df64b4"},{url:"404/index.html",revision:"62578e7016cfbbf4cf24f8eb57df64b4"},{url:"icons/icon512_maskable.png",revision:"e4d11c5a9768cfb0ad6531069b7e4764"},{url:"icons/icon512_rounded.png",revision:"c0d5f9fcd709af58ce2b88607c0cb666"},{url:"no-pwa/index.html",revision:"bf44f88b43c966f887f3619d6f0ab865"},{url:"pwa/fuga/index.html",revision:"1b002c432bb8f0f6a40fa5402705bc89"},{url:"pwa/hoge/index.html",revision:"b4eab6923425fbdf655efc820448d6dc"},{url:"pwa/login/index.html",revision:"bd5924e9c9f141c21abc38167e8730e2"},{url:"sw.js",revision:"70853232918419fdc731dccedb51e1ea"}]),E(C)}));
//# sourceMappingURL=workbox-sw.js.map
