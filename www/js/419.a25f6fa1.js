"use strict";(self["webpackChunktezkel_delivery"]=self["webpackChunktezkel_delivery"]||[]).push([[419],{8419:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ea}});var r={};n.r(r);var a=n(6252);const i=(0,a.Uk)(" mesajlar ");function o(e,t,n,r,o,s){const c=(0,a.up)("base-layout");return(0,a.wg)(),(0,a.j4)(c,{pageTitle:"Сообщения"},{default:(0,a.w5)((()=>[i,(0,a._)("button",{onClick:t[0]||(t[0]=e=>s.subscribe())},"SUBSCRIBE")])),_:1})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296===(64512&a)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},c=function(e){const t=[];let n=0,r=0;while(n<e.length){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=e[n++],o=e[n++],s=e[n++],c=((7&a)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const t=e[a],i=a+1<e.length,o=i?e[a+1]:0,s=a+2<e.length,c=s?e[a+2]:0,u=t>>2,d=(3&t)<<4|o>>4;let l=(15&o)<<2|c>>6,p=63&c;s||(p=64,i||(l=64)),r.push(n[u],n[d],n[l],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const t=n[e.charAt(a++)],i=a<e.length,o=i?n[e.charAt(a)]:0;++a;const s=a<e.length,c=s?n[e.charAt(a)]:64;++a;const u=a<e.length,d=u?n[e.charAt(a)]:64;if(++a,null==t||null==o||null==c||null==d)throw Error();const l=t<<2|o>>4;if(r.push(l),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==d){const e=c<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},d=function(e){const t=s(e);return u.encodeByteArray(t,!0)},l=function(e){return d(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return"object"===typeof indexedDB}function f(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="FirebaseError";class g extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=h,Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?m(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,s=new g(r,o,n);return s}}function m(e,t){return e.replace(w,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const w=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=[];var I;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(I||(I={}));const S={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},E=I.INFO,D={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},k=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=D[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};class _{constructor(e){this.name=e,this._logLevel=E,this._logHandler=k,this._userLogHandler=null,v.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const C=(e,t)=>t.some((t=>e instanceof t));let T,A;function B(){return T||(T=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O(){return A||(A=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L=new WeakMap,N=new WeakMap,M=new WeakMap,P=new WeakMap,j=new WeakMap;function $(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(W(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&L.set(t,e)})).catch((()=>{})),j.set(t,e),t}function H(e){if(N.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));N.set(e,t)}let R={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return N.get(e);if("objectStoreNames"===t)return e.objectStoreNames||M.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return W(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function x(e){R=e(R)}function K(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?O().includes(e)?function(...t){return e.apply(F(this),t),W(L.get(this))}:function(...t){return W(e.apply(F(this),t))}:function(t,...n){const r=e.call(F(this),t,...n);return M.set(r,t.sort?t.sort():[t]),W(r)}}function V(e){return"function"===typeof e?K(e):(e instanceof IDBTransaction&&H(e),C(e,B())?new Proxy(e,R):e)}function W(e){if(e instanceof IDBRequest)return $(e);if(P.has(e))return P.get(e);const t=V(e);return t!==e&&(P.set(e,t),j.set(t,e)),t}const F=e=>j.get(e);function U(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=W(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(W(o.result),e.oldVersion,e.newVersion,W(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),s}const q=["get","getKey","getAll","getAllKeys","count"],z=["put","add","delete","clear"],G=new Map;function J(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(G.get(t))return G.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=z.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!q.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return G.set(t,i),i}x((e=>({...e,get:(t,n,r)=>J(t,n)||e.get(t,n,r),has:(t,n)=>!!J(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Z(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Z(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Q="@firebase/app",X="0.7.26",ee=new _("@firebase/app"),te="@firebase/app-compat",ne="@firebase/analytics-compat",re="@firebase/analytics",ae="@firebase/app-check-compat",ie="@firebase/app-check",oe="@firebase/auth",se="@firebase/auth-compat",ce="@firebase/database",ue="@firebase/database-compat",de="@firebase/functions",le="@firebase/functions-compat",pe="@firebase/installations",fe="@firebase/installations-compat",he="@firebase/messaging",ge="@firebase/messaging-compat",be="@firebase/performance",me="@firebase/performance-compat",we="@firebase/remote-config",ye="@firebase/remote-config-compat",ve="@firebase/storage",Ie="@firebase/storage-compat",Se="@firebase/firestore",Ee="@firebase/firestore-compat",De="firebase",ke={[Q]:"fire-core",[te]:"fire-core-compat",[re]:"fire-analytics",[ne]:"fire-analytics-compat",[ie]:"fire-app-check",[ae]:"fire-app-check-compat",[oe]:"fire-auth",[se]:"fire-auth-compat",[ce]:"fire-rtdb",[ue]:"fire-rtdb-compat",[de]:"fire-fn",[le]:"fire-fn-compat",[pe]:"fire-iid",[fe]:"fire-iid-compat",[he]:"fire-fcm",[ge]:"fire-fcm-compat",[be]:"fire-perf",[me]:"fire-perf-compat",[we]:"fire-rc",[ye]:"fire-rc-compat",[ve]:"fire-gcs",[Ie]:"fire-gcs-compat",[Se]:"fire-fst",[Ee]:"fire-fst-compat","fire-js":"fire-js",[De]:"fire-js-all"},_e=new Map,Ce=new Map;function Te(e,t){try{e.container.addComponent(t)}catch(n){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ae(e){const t=e.name;if(Ce.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Ce.set(t,e);for(const n of _e.values())Te(n,e);return!0}function Be(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Le=new b("app","Firebase",Oe);function Ne(e,t,n){var r;let a=null!==(r=ke[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${a}" with version "${t}":`];return i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ee.warn(e.join(" "))}Ae(new y(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Me="firebase-heartbeat-database",Pe=1,je="firebase-heartbeat-store";let $e=null;function He(){return $e||($e=U(Me,Pe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(je)}}}).catch((e=>{throw Le.create("storage-open",{originalErrorMessage:e.message})}))),$e}async function Re(e){var t;try{const t=await He();return t.transaction(je).objectStore(je).get(Ke(e))}catch(n){throw Le.create("storage-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}async function xe(e,t){var n;try{const n=await He(),r=n.transaction(je,"readwrite"),a=r.objectStore(je);return await a.put(t,Ke(e)),r.done}catch(r){throw Le.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function Ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=1024,We=2592e6;class Fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ze(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ue();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=We})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ue(),{heartbeatsToSend:t,unsentEntries:n}=qe(this._heartbeatsCache.heartbeats),r=l(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ue(){const e=new Date;return e.toISOString().substring(0,10)}function qe(e,t=Ve){const n=[];let r=e.slice();for(const a of e){const e=n.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),Ge(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ge(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ze{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!p()&&f().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ge(e){return l(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){Ae(new y("platform-logger",(e=>new Y(e)),"PRIVATE")),Ae(new y("heartbeat",(e=>new Fe(e)),"PRIVATE")),Ne(Q,X,e),Ne(Q,X,"esm2017"),Ne("fire-js","")}Je("");var Ye="firebase",Ze="9.8.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ne(Ye,Ze,"app");const Qe=(e,t)=>t.some((t=>e instanceof t));let Xe,et;function tt(){return Xe||(Xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nt(){return et||(et=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rt=new WeakMap,at=new WeakMap,it=new WeakMap,ot=new WeakMap,st=new WeakMap;function ct(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(ht(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&rt.set(t,e)})).catch((()=>{})),st.set(t,e),t}function ut(e){if(at.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));at.set(e,t)}let dt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return at.get(e);if("objectStoreNames"===t)return e.objectStoreNames||it.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function lt(e){dt=e(dt)}function pt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?nt().includes(e)?function(...t){return e.apply(gt(this),t),ht(rt.get(this))}:function(...t){return ht(e.apply(gt(this),t))}:function(t,...n){const r=e.call(gt(this),t,...n);return it.set(r,t.sort?t.sort():[t]),ht(r)}}function ft(e){return"function"===typeof e?pt(e):(e instanceof IDBTransaction&&ut(e),Qe(e,tt())?new Proxy(e,dt):e)}function ht(e){if(e instanceof IDBRequest)return ct(e);if(ot.has(e))return ot.get(e);const t=ft(e);return t!==e&&(ot.set(e,t),st.set(t,e)),t}const gt=e=>st.get(e);function bt(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=ht(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ht(o.result),e.oldVersion,e.newVersion,ht(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),s}const mt=["get","getKey","getAll","getAllKeys","count"],wt=["put","add","delete","clear"],yt=new Map;function vt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(yt.get(t))return yt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=wt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!mt.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return yt.set(t,i),i}lt((e=>({...e,get:(t,n,r)=>vt(t,n)||e.get(t,n,r),has:(t,n)=>!!vt(t,n)||e.has(t,n)})));const It="@firebase/installations",St="0.5.10",Et=1e4,Dt=`w:${St}`,kt="FIS_v2",_t="https://firebaseinstallations.googleapis.com/v1",Ct=36e5,Tt="installations",At="Installations",Bt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ot=new b(Tt,At,Bt);function Lt(e){return e instanceof g&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt({projectId:e}){return`${_t}/projects/${e}/installations`}function Mt(e){return{token:e.token,requestStatus:2,expiresIn:Rt(e.expiresIn),creationTime:Date.now()}}async function Pt(e,t){const n=await t.json(),r=n.error;return Ot.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $t(e,{refreshToken:t}){const n=jt(e);return n.append("Authorization",xt(t)),n}async function Ht(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Rt(e){return Number(e.replace("s","000"))}function xt(e){return`${kt} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Nt(e),a=jt(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={fid:n,authVersion:kt,appId:e.appId,sdkVersion:Dt},s={method:"POST",headers:a,body:JSON.stringify(o)},c=await Ht((()=>fetch(r,s)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Mt(e.authToken)};return t}throw await Pt("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=/^[cdef][\w-]{21}$/,Ut="";function qt(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=zt(e);return Ft.test(n)?n:Ut}catch(e){return Ut}}function zt(e){const t=Wt(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Map;function Yt(e,t){const n=Gt(e);Zt(n,t),Qt(n,t)}function Zt(e,t){const n=Jt.get(e);if(n)for(const r of n)r(t)}function Qt(e,t){const n=en();n&&n.postMessage({key:e,fid:t}),tn()}let Xt=null;function en(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=e=>{Zt(e.data.key,e.data.fid)}),Xt}function tn(){0===Jt.size&&Xt&&(Xt.close(),Xt=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="firebase-installations-database",rn=1,an="firebase-installations-store";let on=null;function sn(){return on||(on=bt(nn,rn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(an)}}})),on}async function cn(e,t){const n=Gt(e),r=await sn(),a=r.transaction(an,"readwrite"),i=a.objectStore(an),o=await i.get(n);return await i.put(t,n),await a.done,o&&o.fid===t.fid||Yt(e,t.fid),t}async function un(e){const t=Gt(e),n=await sn(),r=n.transaction(an,"readwrite");await r.objectStore(an).delete(t),await r.done}async function dn(e,t){const n=Gt(e),r=await sn(),a=r.transaction(an,"readwrite"),i=a.objectStore(an),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await a.done,!s||o&&o.fid===s.fid||Yt(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(e){let t;const n=await dn(e.appConfig,(n=>{const r=pn(n),a=fn(e,r);return t=a.registrationPromise,a.installationEntry}));return n.fid===Ut?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pn(e){const t=e||{fid:qt(),registrationStatus:0};return mn(t)}function fn(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(Ot.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=hn(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:gn(e)}:{installationEntry:t}}async function hn(e,t){try{const n=await Kt(e,t);return cn(e.appConfig,n)}catch(n){throw Lt(n)&&409===n.customData.serverCode?await un(e.appConfig):await cn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function gn(e){let t=await bn(e.appConfig);while(1===t.registrationStatus)await Vt(100),t=await bn(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ln(e);return n||t}return t}function bn(e){return dn(e,(e=>{if(!e)throw Ot.create("installation-not-found");return mn(e)}))}function mn(e){return wn(e)?{fid:e.fid,registrationStatus:0}:e}function wn(e){return 1===e.registrationStatus&&e.registrationTime+Et<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn({appConfig:e,heartbeatServiceProvider:t},n){const r=vn(e,n),a=$t(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const o={installation:{sdkVersion:Dt,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(o)},c=await Ht((()=>fetch(r,s)));if(c.ok){const e=await c.json(),t=Mt(e);return t}throw await Pt("Generate Auth Token",c)}function vn(e,{fid:t}){return`${Nt(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t=!1){let n;const r=await dn(e.appConfig,(r=>{if(!kn(r))throw Ot.create("not-registered");const a=r.authToken;if(!t&&_n(a))return r;if(1===a.requestStatus)return n=Sn(e,t),r;{if(!navigator.onLine)throw Ot.create("app-offline");const t=Tn(r);return n=Dn(e,t),t}})),a=n?await n:r.authToken;return a}async function Sn(e,t){let n=await En(e.appConfig);while(1===n.authToken.requestStatus)await Vt(100),n=await En(e.appConfig);const r=n.authToken;return 0===r.requestStatus?In(e,t):r}function En(e){return dn(e,(e=>{if(!kn(e))throw Ot.create("not-registered");const t=e.authToken;return An(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Dn(e,t){try{const n=await yn(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await cn(e.appConfig,r),n}catch(n){if(!Lt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await cn(e.appConfig,n)}else await un(e.appConfig);throw n}}function kn(e){return void 0!==e&&2===e.registrationStatus}function _n(e){return 2===e.requestStatus&&!Cn(e)}function Cn(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ct}function Tn(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function An(e){return 1===e.requestStatus&&e.requestTime+Et<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e){const t=e,{installationEntry:n,registrationPromise:r}=await ln(t);return r?r.catch(console.error):In(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(e,t=!1){const n=e;await Ln(n);const r=await In(n,t);return r.token}async function Ln(e){const{registrationPromise:t}=await ln(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e){if(!e||!e.options)throw Mn("App Configuration");if(!e.name)throw Mn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Mn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Mn(e){return Ot.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="installations",jn="installations-internal",$n=e=>{const t=e.getProvider("app").getImmediate(),n=Nn(t),r=Be(t,"heartbeat"),a={app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return a},Hn=e=>{const t=e.getProvider("app").getImmediate(),n=Be(t,Pn).getImmediate(),r={getId:()=>Bn(n),getToken:e=>On(n,e)};return r};function Rn(){Ae(new y(Pn,$n,"PUBLIC")),Ae(new y(jn,Hn,"PRIVATE"))}Rn(),Ne(It,St),Ne(It,St,"esm2017");const xn=(e,t)=>t.some((t=>e instanceof t));let Kn,Vn;function Wn(){return Kn||(Kn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fn(){return Vn||(Vn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Un=new WeakMap,qn=new WeakMap,zn=new WeakMap,Gn=new WeakMap,Jn=new WeakMap;function Yn(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(nr(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Un.set(t,e)})).catch((()=>{})),Jn.set(t,e),t}function Zn(e){if(qn.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));qn.set(e,t)}let Qn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return qn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||zn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Xn(e){Qn=e(Qn)}function er(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Fn().includes(e)?function(...t){return e.apply(rr(this),t),nr(Un.get(this))}:function(...t){return nr(e.apply(rr(this),t))}:function(t,...n){const r=e.call(rr(this),t,...n);return zn.set(r,t.sort?t.sort():[t]),nr(r)}}function tr(e){return"function"===typeof e?er(e):(e instanceof IDBTransaction&&Zn(e),xn(e,Wn())?new Proxy(e,Qn):e)}function nr(e){if(e instanceof IDBRequest)return Yn(e);if(Gn.has(e))return Gn.get(e);const t=tr(e);return t!==e&&(Gn.set(e,t),Jn.set(t,e)),t}const rr=e=>Jn.get(e);function ar(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=nr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(nr(o.result),e.oldVersion,e.newVersion,nr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),s}function ir(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),nr(n).then((()=>{}))}const or=["get","getKey","getAll","getAllKeys","count"],sr=["put","add","delete","clear"],cr=new Map;function ur(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(cr.get(t))return cr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=sr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!or.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return cr.set(t,i),i}Xn((e=>({...e,get:(t,n,r)=>ur(t,n)||e.get(t,n,r),has:(t,n)=>!!ur(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dr="/firebase-messaging-sw.js",lr="/firebase-cloud-messaging-push-scope",pr="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",fr="https://fcmregistrations.googleapis.com/v1",hr="google.c.a.c_id",gr="google.c.a.c_l",br="google.c.a.ts",mr="google.c.a.e";var wr,yr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vr(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ir(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;++i)a[i]=r.charCodeAt(i);return a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(wr||(wr={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(yr||(yr={}));const Sr="fcm_token_details_db",Er=5,Dr="fcm_token_object_Store";async function kr(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(Sr))return null}let t=null;const n=await ar(Sr,Er,{upgrade:async(n,r,a,i)=>{var o;if(r<2)return;if(!n.objectStoreNames.contains(Dr))return;const s=i.objectStore(Dr),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:vr(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:vr(e.auth),p256dh:vr(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:vr(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:vr(e.auth),p256dh:vr(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:vr(e.vapidKey)}}}}});return n.close(),await ir(Sr),await ir("fcm_vapid_details_db"),await ir("undefined"),_r(t)?t:null}function _r(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="firebase-messaging-database",Tr=1,Ar="firebase-messaging-store";let Br=null;function Or(){return Br||(Br=ar(Cr,Tr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ar)}}})),Br}async function Lr(e){const t=Pr(e),n=await Or(),r=await n.transaction(Ar).objectStore(Ar).get(t);if(r)return r;{const t=await kr(e.appConfig.senderId);if(t)return await Nr(e,t),t}}async function Nr(e,t){const n=Pr(e),r=await Or(),a=r.transaction(Ar,"readwrite");return await a.objectStore(Ar).put(t,n),await a.done,t}async function Mr(e){const t=Pr(e),n=await Or(),r=n.transaction(Ar,"readwrite");await r.objectStore(Ar).delete(t),await r.done}function Pr({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$r=new b("messaging","Messaging",jr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hr(e,t){const n=await Vr(e),r=Wr(t),a={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{const t=await fetch(Kr(e.appConfig),a);i=await t.json()}catch(o){throw $r.create("token-subscribe-failed",{errorInfo:o})}if(i.error){const e=i.error.message;throw $r.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw $r.create("token-subscribe-no-token");return i.token}async function Rr(e,t){const n=await Vr(e),r=Wr(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{const n=await fetch(`${Kr(e.appConfig)}/${t.token}`,a);i=await n.json()}catch(o){throw $r.create("token-update-failed",{errorInfo:o})}if(i.error){const e=i.error.message;throw $r.create("token-update-failed",{errorInfo:e})}if(!i.token)throw $r.create("token-update-no-token");return i.token}async function xr(e,t){const n=await Vr(e),r={method:"DELETE",headers:n};try{const n=await fetch(`${Kr(e.appConfig)}/${t}`,r),a=await n.json();if(a.error){const e=a.error.message;throw $r.create("token-unsubscribe-failed",{errorInfo:e})}}catch(a){throw $r.create("token-unsubscribe-failed",{errorInfo:a})}}function Kr({projectId:e}){return`${fr}/projects/${e}/registrations`}async function Vr({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Wr({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const a={web:{endpoint:n,auth:t,p256dh:e}};return r!==pr&&(a.web.applicationPubKey=r),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=6048e5;async function Ur(e){const t=await Jr(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:vr(t.getKey("auth")),p256dh:vr(t.getKey("p256dh"))},r=await Lr(e.firebaseDependencies);if(r){if(Yr(r.subscriptionOptions,n))return Date.now()>=r.createTime+Fr?zr(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await xr(e.firebaseDependencies,r.token)}catch(a){console.warn(a)}return Gr(e.firebaseDependencies,n)}return Gr(e.firebaseDependencies,n)}async function qr(e){const t=await Lr(e.firebaseDependencies);t&&(await xr(e.firebaseDependencies,t.token),await Mr(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function zr(e,t){try{const n=await Rr(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Nr(e.firebaseDependencies,r),n}catch(n){throw await qr(e),n}}async function Gr(e,t){const n=await Hr(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await Nr(e,r),r.token}async function Jr(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ir(t)})}function Yr(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&a&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Qr(t,e),Xr(t,e),ea(t,e),t}function Qr(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const a=t.notification.image;a&&(e.notification.image=a)}function Xr(e,t){t.data&&(e.data=t.data)}function ea(e,t){var n,r,a,i,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(a=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==a?a:null===(i=t.notification)||void 0===i?void 0:i.click_action;s&&(e.fcmOptions.link=s);const c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){return"object"===typeof e&&!!e&&hr in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){if(!e||!e.options)throw aa("App Configuration Object");if(!e.name)throw aa("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw aa(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function aa(e){return $r.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */na("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),na("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ia{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=ra(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(e){var t;try{e.swRegistration=await navigator.serviceWorker.register(dr,{scope:lr}),e.swRegistration.update().catch((()=>{}))}catch(n){throw $r.create("failed-service-worker-registration",{browserErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(e,t){if(t||e.swRegistration||await oa(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw $r.create("invalid-sw-registration");e.swRegistration=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=pr)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(e,t){if(!navigator)throw $r.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw $r.create("permission-blocked");return await ca(e,null===t||void 0===t?void 0:t.vapidKey),await sa(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),Ur(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(e,t,n){const r=la(t),a=await e.firebaseDependencies.analyticsProvider.get();a.logEvent(r,{message_id:n[hr],message_name:n[gr],message_time:n[br],message_device_time:Math.floor(Date.now()/1e3)})}function la(e){switch(e){case yr.NOTIFICATION_CLICKED:return"notification_open";case yr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===yr.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(Zr(n)):e.onMessageHandler.next(Zr(n)));const r=n.data;ta(r)&&"1"===r[mr]&&await da(e,n.messageType,r)}const fa="@firebase/messaging",ha="0.9.14",ga=e=>{const t=new ia(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>pa(t,e))),t},ba=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>ua(t,e)};return n};function ma(){Ae(new y("messaging",ga,"PUBLIC")),Ae(new y("messaging-internal",ba,"PRIVATE")),Ne(fa,ha),Ne(fa,ha,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ma();var wa=n(9755),ya=n.n(wa),va={data(){return{messaging:{}}},methods:{async saveNotificationToken(e){if(!(this.$heap.state.user_id>0))return this.$flash("Необходимо авторизироваться"),void this.$router.push("sign-in");try{const t={user_id:this.$heap.state.user_id,type:"web",registration_id:e},n=await ya().post(`${this.$heap.state.hostname}Message/recieverCreate`,t);console.log("saveNotificationToken",n)}catch(t){console.log(t)}},async subscribe(){try{await this.messaging.requestPermission(),console.log("Notification permission granted."),this.messaging.getToken().then((e=>{console.log("New token created: ",e),this.saveNotificationToken(e)}))}catch(e){this.$alert("Не удалось подключить уведомления"),console.log("Unable to get permission to notify.",e)}}},mounted(){const e={apiKey:"AIzaSyDHDeSPsSoJHE_HYKQ_vgOvSfJIN_8Y2Uc",authDomain:"tezkel-8e371.firebaseapp.com",projectId:"tezkel-8e371",storageBucket:"tezkel-8e371.appspot.com",messagingSenderId:"359468869452",appId:"1:359468869452:web:8db6fe690d192b427891e9"};r["default"].initializeApp(e),this.messaging=r["default"].messaging(),this.messaging.usePublicVapidKey("BLzv4oK1EGxAxwPtlAXvMNzaYvMJK1qvx92D0f1U89wlUPxUU4gAtes7c__wcTwvmEyds6e7-p0Oy4bVYZo1Igg");const t=this;this.messaging.onTokenRefresh((async function(e){try{await t.messaging.getToken(),t.saveNotificationToken(e)}catch(n){console.log("Unable to retrieve refreshed token ",n)}}))}},Ia=n(3744);const Sa=(0,Ia.Z)(va,[["render",o]]);var Ea=Sa}}]);
//# sourceMappingURL=419.a25f6fa1.js.map