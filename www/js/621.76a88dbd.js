"use strict";(self["webpackChunktezkel_delivery"]=self["webpackChunktezkel_delivery"]||[]).push([[621],{5621:function(e,t,n){n.d(t,{KL:function(){return En},LP:function(){return jn}});var i=n(132),r=n(8463),o=n(4444);const a=(e,t)=>t.some((t=>e instanceof t));let s,c;function u(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p=new WeakMap,f=new WeakMap,l=new WeakMap,g=new WeakMap,w=new WeakMap;function h(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(I(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&p.set(t,e)})).catch((()=>{})),w.set(t,e),t}function m(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));f.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){b=e(b)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?d().includes(e)?function(...t){return e.apply(S(this),t),I(p.get(this))}:function(...t){return I(e.apply(S(this),t))}:function(t,...n){const i=e.call(S(this),t,...n);return l.set(i,t.sort?t.sort():[t]),I(i)}}function k(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&m(e),a(e,u())?new Proxy(e,b):e)}function I(e){if(e instanceof IDBRequest)return h(e);if(g.has(e))return g.get(e);const t=k(e);return t!==e&&(g.set(e,t),w.set(t,e)),t}const S=e=>w.get(e);function D(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),s=I(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(I(a.result),e.oldVersion,e.newVersion,I(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}const T=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],E=new Map;function j(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(E.get(t))return E.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=C.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!T.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let a=o.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&o.done]))[0]};return E.set(t,o),o}y((e=>({...e,get:(t,n,i)=>j(t,n)||e.get(t,n,i),has:(t,n)=>!!j(t,n)||e.has(t,n)})));const P="@firebase/installations",A="0.5.10",O=1e4,B=`w:${A}`,K="FIS_v2",M="https://firebaseinstallations.googleapis.com/v1",L=36e5,N="installations",_="Installations",x={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},q=new o.LL(N,_,x);function $(e){return e instanceof o.ZR&&e.code.includes("request-failed")}
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
 */function F({projectId:e}){return`${M}/projects/${e}/installations`}function R(e){return{token:e.token,requestStatus:2,expiresIn:z(e.expiresIn),creationTime:Date.now()}}async function W(e,t){const n=await t.json(),i=n.error;return q.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function H({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function V(e,{refreshToken:t}){const n=H(e);return n.append("Authorization",X(t)),n}async function U(e){const t=await e();return t.status>=500&&t.status<600?e():t}function z(e){return Number(e.replace("s","000"))}function X(e){return`${K} ${e}`}
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
 */async function G({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=F(e),r=H(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const a={fid:n,authVersion:K,appId:e.appId,sdkVersion:B},s={method:"POST",headers:r,body:JSON.stringify(a)},c=await U((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:R(e.authToken)};return t}throw await W("Create Installation",c)}
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
 */function J(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */function Y(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const Q=/^[cdef][\w-]{21}$/,Z="";function ee(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=te(e);return Q.test(n)?n:Z}catch(e){return Z}}function te(e){const t=Y(e);return t.substr(0,22)}
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
 */function ne(e){return`${e.appName}!${e.appId}`}
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
 */const ie=new Map;function re(e,t){const n=ne(e);oe(n,t),ae(n,t)}function oe(e,t){const n=ie.get(e);if(n)for(const i of n)i(t)}function ae(e,t){const n=ce();n&&n.postMessage({key:e,fid:t}),ue()}let se=null;function ce(){return!se&&"BroadcastChannel"in self&&(se=new BroadcastChannel("[Firebase] FID Change"),se.onmessage=e=>{oe(e.data.key,e.data.fid)}),se}function ue(){0===ie.size&&se&&(se.close(),se=null)}
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
 */const de="firebase-installations-database",pe=1,fe="firebase-installations-store";let le=null;function ge(){return le||(le=D(de,pe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fe)}}})),le}async function we(e,t){const n=ne(e),i=await ge(),r=i.transaction(fe,"readwrite"),o=r.objectStore(fe),a=await o.get(n);return await o.put(t,n),await r.done,a&&a.fid===t.fid||re(e,t.fid),t}async function he(e){const t=ne(e),n=await ge(),i=n.transaction(fe,"readwrite");await i.objectStore(fe).delete(t),await i.done}async function me(e,t){const n=ne(e),i=await ge(),r=i.transaction(fe,"readwrite"),o=r.objectStore(fe),a=await o.get(n),s=t(a);return void 0===s?await o.delete(n):await o.put(s,n),await r.done,!s||a&&a.fid===s.fid||re(e,s.fid),s}
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
 */async function be(e){let t;const n=await me(e.appConfig,(n=>{const i=ye(n),r=ve(e,i);return t=r.registrationPromise,r.installationEntry}));return n.fid===Z?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ye(e){const t=e||{fid:ee(),registrationStatus:0};return De(t)}function ve(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(q.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=ke(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ie(e)}:{installationEntry:t}}async function ke(e,t){try{const n=await G(e,t);return we(e.appConfig,n)}catch(n){throw $(n)&&409===n.customData.serverCode?await he(e.appConfig):await we(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ie(e){let t=await Se(e.appConfig);while(1===t.registrationStatus)await J(100),t=await Se(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await be(e);return n||t}return t}function Se(e){return me(e,(e=>{if(!e)throw q.create("installation-not-found");return De(e)}))}function De(e){return Te(e)?{fid:e.fid,registrationStatus:0}:e}function Te(e){return 1===e.registrationStatus&&e.registrationTime+O<Date.now()}
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
 */async function Ce({appConfig:e,heartbeatServiceProvider:t},n){const i=Ee(e,n),r=V(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const a={installation:{sdkVersion:B,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(a)},c=await U((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t=R(e);return t}throw await W("Generate Auth Token",c)}function Ee(e,{fid:t}){return`${F(e)}/${t}/authTokens:generate`}
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
 */async function je(e,t=!1){let n;const i=await me(e.appConfig,(i=>{if(!Be(i))throw q.create("not-registered");const r=i.authToken;if(!t&&Ke(r))return i;if(1===r.requestStatus)return n=Pe(e,t),i;{if(!navigator.onLine)throw q.create("app-offline");const t=Le(i);return n=Oe(e,t),t}})),r=n?await n:i.authToken;return r}async function Pe(e,t){let n=await Ae(e.appConfig);while(1===n.authToken.requestStatus)await J(100),n=await Ae(e.appConfig);const i=n.authToken;return 0===i.requestStatus?je(e,t):i}function Ae(e){return me(e,(e=>{if(!Be(e))throw q.create("not-registered");const t=e.authToken;return Ne(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Oe(e,t){try{const n=await Ce(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await we(e.appConfig,i),n}catch(n){if(!$(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await we(e.appConfig,n)}else await he(e.appConfig);throw n}}function Be(e){return void 0!==e&&2===e.registrationStatus}function Ke(e){return 2===e.requestStatus&&!Me(e)}function Me(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+L}function Le(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ne(e){return 1===e.requestStatus&&e.requestTime+O<Date.now()}
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
 */async function _e(e){const t=e,{installationEntry:n,registrationPromise:i}=await be(t);return i?i.catch(console.error):je(t).catch(console.error),n.fid}
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
 */async function xe(e,t=!1){const n=e;await qe(n);const i=await je(n,t);return i.token}async function qe(e){const{registrationPromise:t}=await be(e);t&&await t}
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
function $e(e){if(!e||!e.options)throw Fe("App Configuration");if(!e.name)throw Fe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Fe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Fe(e){return q.create("missing-app-config-values",{valueName:e})}
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
 */const Re="installations",We="installations-internal",He=e=>{const t=e.getProvider("app").getImmediate(),n=$e(t),r=(0,i.qX)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return o},Ve=e=>{const t=e.getProvider("app").getImmediate(),n=(0,i.qX)(t,Re).getImmediate(),r={getId:()=>_e(n),getToken:e=>xe(n,e)};return r};function Ue(){(0,i.Xd)(new r.wA(Re,He,"PUBLIC")),(0,i.Xd)(new r.wA(We,Ve,"PRIVATE"))}Ue(),(0,i.KN)(P,A),(0,i.KN)(P,A,"esm2017");const ze=(e,t)=>t.some((t=>e instanceof t));let Xe,Ge;function Je(){return Xe||(Xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ye(){return Ge||(Ge=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qe=new WeakMap,Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap;function it(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(ut(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Qe.set(t,e)})).catch((()=>{})),nt.set(t,e),t}function rt(e){if(Ze.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));Ze.set(e,t)}let ot={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ze.get(e);if("objectStoreNames"===t)return e.objectStoreNames||et.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function at(e){ot=e(ot)}function st(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Ye().includes(e)?function(...t){return e.apply(dt(this),t),ut(Qe.get(this))}:function(...t){return ut(e.apply(dt(this),t))}:function(t,...n){const i=e.call(dt(this),t,...n);return et.set(i,t.sort?t.sort():[t]),ut(i)}}function ct(e){return"function"===typeof e?st(e):(e instanceof IDBTransaction&&rt(e),ze(e,Je())?new Proxy(e,ot):e)}function ut(e){if(e instanceof IDBRequest)return it(e);if(tt.has(e))return tt.get(e);const t=ct(e);return t!==e&&(tt.set(e,t),nt.set(t,e)),t}const dt=e=>nt.get(e);function pt(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),s=ut(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(ut(a.result),e.oldVersion,e.newVersion,ut(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}function ft(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),ut(n).then((()=>{}))}const lt=["get","getKey","getAll","getAllKeys","count"],gt=["put","add","delete","clear"],wt=new Map;function ht(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(wt.get(t))return wt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=gt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!lt.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let a=o.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&o.done]))[0]};return wt.set(t,o),o}at((e=>({...e,get:(t,n,i)=>ht(t,n)||e.get(t,n,i),has:(t,n)=>!!ht(t,n)||e.has(t,n)})));
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
const mt="/firebase-messaging-sw.js",bt="/firebase-cloud-messaging-push-scope",yt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",vt="https://fcmregistrations.googleapis.com/v1",kt="google.c.a.c_id",It="google.c.a.c_l",St="google.c.a.ts",Dt="google.c.a.e";var Tt,Ct;
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
function Et(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function jt(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let o=0;o<i.length;++o)r[o]=i.charCodeAt(o);return r}
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
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(Tt||(Tt={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Ct||(Ct={}));const Pt="fcm_token_details_db",At=5,Ot="fcm_token_object_Store";async function Bt(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(Pt))return null}let t=null;const n=await pt(Pt,At,{upgrade:async(n,i,r,o)=>{var a;if(i<2)return;if(!n.objectStoreNames.contains(Ot))return;const s=o.objectStore(Ot),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Et(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Et(e.auth),p256dh:Et(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Et(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Et(e.auth),p256dh:Et(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Et(e.vapidKey)}}}}});return n.close(),await ft(Pt),await ft("fcm_vapid_details_db"),await ft("undefined"),Kt(t)?t:null}function Kt(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */const Mt="firebase-messaging-database",Lt=1,Nt="firebase-messaging-store";let _t=null;function xt(){return _t||(_t=pt(Mt,Lt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Nt)}}})),_t}async function qt(e){const t=Rt(e),n=await xt(),i=await n.transaction(Nt).objectStore(Nt).get(t);if(i)return i;{const t=await Bt(e.appConfig.senderId);if(t)return await $t(e,t),t}}async function $t(e,t){const n=Rt(e),i=await xt(),r=i.transaction(Nt,"readwrite");return await r.objectStore(Nt).put(t,n),await r.done,t}async function Ft(e){const t=Rt(e),n=await xt(),i=n.transaction(Nt,"readwrite");await i.objectStore(Nt).delete(t),await i.done}function Rt({appConfig:e}){return e.appId}
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
 */const Wt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ht=new o.LL("messaging","Messaging",Wt);
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
async function Vt(e,t){const n=await Gt(e),i=Jt(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let o;try{const t=await fetch(Xt(e.appConfig),r);o=await t.json()}catch(a){throw Ht.create("token-subscribe-failed",{errorInfo:a})}if(o.error){const e=o.error.message;throw Ht.create("token-subscribe-failed",{errorInfo:e})}if(!o.token)throw Ht.create("token-subscribe-no-token");return o.token}async function Ut(e,t){const n=await Gt(e),i=Jt(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let o;try{const n=await fetch(`${Xt(e.appConfig)}/${t.token}`,r);o=await n.json()}catch(a){throw Ht.create("token-update-failed",{errorInfo:a})}if(o.error){const e=o.error.message;throw Ht.create("token-update-failed",{errorInfo:e})}if(!o.token)throw Ht.create("token-update-no-token");return o.token}async function zt(e,t){const n=await Gt(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${Xt(e.appConfig)}/${t}`,i),r=await n.json();if(r.error){const e=r.error.message;throw Ht.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw Ht.create("token-unsubscribe-failed",{errorInfo:r})}}function Xt({projectId:e}){return`${vt}/projects/${e}/registrations`}async function Gt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Jt({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==yt&&(r.web.applicationPubKey=i),r}
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
 */const Yt=6048e5;async function Qt(e){const t=await nn(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Et(t.getKey("auth")),p256dh:Et(t.getKey("p256dh"))},i=await qt(e.firebaseDependencies);if(i){if(rn(i.subscriptionOptions,n))return Date.now()>=i.createTime+Yt?en(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await zt(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return tn(e.firebaseDependencies,n)}return tn(e.firebaseDependencies,n)}async function Zt(e){const t=await qt(e.firebaseDependencies);t&&(await zt(e.firebaseDependencies,t.token),await Ft(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function en(e,t){try{const n=await Ut(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await $t(e.firebaseDependencies,i),n}catch(n){throw await Zt(e),n}}async function tn(e,t){const n=await Vt(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await $t(e,i),i.token}async function nn(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:jt(t)})}function rn(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&i&&r&&o}
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
 */function on(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return an(t,e),sn(t,e),cn(t,e),t}function an(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r)}function sn(e,t){t.data&&(e.data=t.data)}function cn(e,t){var n,i,r,o,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(r=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(o=t.notification)||void 0===o?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */function un(e){return"object"===typeof e&&!!e&&kt in e}
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
 */function dn(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
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
 */function pn(e){if(!e||!e.options)throw fn("App Configuration Object");if(!e.name)throw fn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw fn(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function fn(e){return Ht.create("missing-app-config-values",{valueName:e})}
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
 */dn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),dn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ln{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=pn(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */async function gn(e){var t;try{e.swRegistration=await navigator.serviceWorker.register(mt,{scope:bt}),e.swRegistration.update().catch((()=>{}))}catch(n){throw Ht.create("failed-service-worker-registration",{browserErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}
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
 */async function wn(e,t){if(t||e.swRegistration||await gn(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Ht.create("invalid-sw-registration");e.swRegistration=t}}
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
 */async function hn(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=yt)}
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
 */async function mn(e,t){if(!navigator)throw Ht.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Ht.create("permission-blocked");return await hn(e,null===t||void 0===t?void 0:t.vapidKey),await wn(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),Qt(e)}
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
 */async function bn(e,t,n){const i=yn(t),r=await e.firebaseDependencies.analyticsProvider.get();r.logEvent(i,{message_id:n[kt],message_name:n[It],message_time:n[St],message_device_time:Math.floor(Date.now()/1e3)})}function yn(e){switch(e){case Ct.NOTIFICATION_CLICKED:return"notification_open";case Ct.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */async function vn(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Ct.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(on(n)):e.onMessageHandler.next(on(n)));const i=n.data;un(i)&&"1"===i[Dt]&&await bn(e,n.messageType,i)}const kn="@firebase/messaging",In="0.9.14",Sn=e=>{const t=new ln(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>vn(t,e))),t},Dn=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>mn(t,e)};return n};function Tn(){(0,i.Xd)(new r.wA("messaging",Sn,"PUBLIC")),(0,i.Xd)(new r.wA("messaging-internal",Dn,"PRIVATE")),(0,i.KN)(kn,In),(0,i.KN)(kn,In,"esm2017")}
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
 */async function Cn(){try{await(0,o.eu)()}catch(e){return!1}return"undefined"!==typeof window&&(0,o.hl)()&&(0,o.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
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
function En(e=(0,i.Mq)()){return Cn().then((e=>{if(!e)throw Ht.create("unsupported-browser")}),(e=>{throw Ht.create("indexed-db-unsupported")})),(0,i.qX)((0,o.m9)(e),"messaging").getImmediate()}async function jn(e,t){return e=(0,o.m9)(e),mn(e,t)}Tn()}}]);
//# sourceMappingURL=621.76a88dbd.js.map