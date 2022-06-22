"use strict";(self["webpackChunktezkel_delivery"]=self["webpackChunktezkel_delivery"]||[]).push([[430],{2430:function(e,t,n){n.r(t),n.d(t,{default:function(){return Jn}});var i=n(6252);const o=(0,i.Uk)("Уведомления заблокированы вами"),r=(0,i.Uk)(" К сожалению, мы не сможем уведомлять вас о статусах заказов "),a=(0,i.Uk)("Подписаться на уведомления"),s=(0,i.Uk)("Уведомления не разрешены"),c=(0,i.Uk)(" Чтобы вовремя узнавать об изменениях статусов заказов, подпишитесь на уведомления "),u=(0,i.Uk)("Подписаться на уведомления"),d={key:2},p=(0,i.Uk)("Вы подписаны на уведомления"),f=(0,i._)("p",null,"Вам будут приходить некоторые уведомления",-1),l=(0,i.Uk)("Темы уведомлений"),g=(0,i.Uk)("Статусы заказов"),w=(0,i.Uk)("Начисленные бонусы");function h(e,t,n,h,m,b){const y=(0,i.up)("ion-card-title"),v=(0,i.up)("ion-card-header"),k=(0,i.up)("ion-button"),I=(0,i.up)("ion-card-content"),S=(0,i.up)("ion-card"),T=(0,i.up)("ion-item-divider"),D=(0,i.up)("ion-item"),C=(0,i.up)("ion-list"),E=(0,i.up)("base-layout");return(0,i.wg)(),(0,i.j4)(E,{pageTitle:"Уведомления"},{default:(0,i.w5)((()=>["denied"==m.permission?((0,i.wg)(),(0,i.j4)(S,{key:0,color:"danger"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[o])),_:1})])),_:1}),(0,i.Wm)(I,null,{default:(0,i.w5)((()=>[r,(0,i._)("p",null,[(0,i.Wm)(k,{onClick:t[0]||(t[0]=e=>b.subscribe()),expand:"full"},{default:(0,i.w5)((()=>[a])),_:1})])])),_:1})])),_:1})):(0,i.kq)("",!0),"default"==m.permission?((0,i.wg)(),(0,i.j4)(S,{key:1,color:"warning"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[s])),_:1})])),_:1}),(0,i.Wm)(I,null,{default:(0,i.w5)((()=>[c,(0,i._)("p",null,[(0,i.Wm)(k,{onClick:t[1]||(t[1]=e=>b.subscribe()),expand:"full"},{default:(0,i.w5)((()=>[u])),_:1})])])),_:1})])),_:1})):(0,i.kq)("",!0),m.registered?((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(S,{color:"success"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[p])),_:1})])),_:1}),(0,i.Wm)(I,null,{default:(0,i.w5)((()=>[f])),_:1})])),_:1}),(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(T,null,{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[w])),_:1})])),_:1})])):(0,i.kq)("",!0)])),_:1})}var m=n(5503),b=n(132),y=n(8463),v=n(4444);const k=(e,t)=>t.some((t=>e instanceof t));let I,S;function T(){return I||(I=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D(){return S||(S=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C=new WeakMap,E=new WeakMap,j=new WeakMap,_=new WeakMap,P=new WeakMap;function N(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(L(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&C.set(t,e)})).catch((()=>{})),P.set(t,e),t}function A(e){if(E.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));E.set(e,t)}let O={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return E.get(e);if("objectStoreNames"===t)return e.objectStoreNames||j.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return L(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function M(e){O=e(O)}function B(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?D().includes(e)?function(...t){return e.apply(x(this),t),L(C.get(this))}:function(...t){return L(e.apply(x(this),t))}:function(t,...n){const i=e.call(x(this),t,...n);return j.set(i,t.sort?t.sort():[t]),L(i)}}function K(e){return"function"===typeof e?B(e):(e instanceof IDBTransaction&&A(e),k(e,T())?new Proxy(e,O):e)}function L(e){if(e instanceof IDBRequest)return N(e);if(_.has(e))return _.get(e);const t=K(e);return t!==e&&(_.set(e,t),P.set(t,e)),t}const x=e=>P.get(e);function W(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=L(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(L(a.result),e.oldVersion,e.newVersion,L(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const $=["get","getKey","getAll","getAllKeys","count"],q=["put","add","delete","clear"],F=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(F.get(t))return F.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=q.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!$.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return F.set(t,r),r}M((e=>({...e,get:(t,n,i)=>R(t,n)||e.get(t,n,i),has:(t,n)=>!!R(t,n)||e.has(t,n)})));const H="@firebase/installations",U="0.5.10",V=1e4,G=`w:${U}`,z="FIS_v2",X="https://firebaseinstallations.googleapis.com/v1",J=36e5,Z="installations",Y="Installations",Q={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ee=new v.LL(Z,Y,Q);function te(e){return e instanceof v.ZR&&e.code.includes("request-failed")}
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
 */function ne({projectId:e}){return`${X}/projects/${e}/installations`}function ie(e){return{token:e.token,requestStatus:2,expiresIn:ce(e.expiresIn),creationTime:Date.now()}}async function oe(e,t){const n=await t.json(),i=n.error;return ee.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function re({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ae(e,{refreshToken:t}){const n=re(e);return n.append("Authorization",ue(t)),n}async function se(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ce(e){return Number(e.replace("s","000"))}function ue(e){return`${z} ${e}`}
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
 */async function de({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=ne(e),o=re(e),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={fid:n,authVersion:z,appId:e.appId,sdkVersion:G},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await se((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:ie(e.authToken)};return t}throw await oe("Create Installation",c)}
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
 */function pe(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */function fe(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const le=/^[cdef][\w-]{21}$/,ge="";function we(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=he(e);return le.test(n)?n:ge}catch(e){return ge}}function he(e){const t=fe(e);return t.substr(0,22)}
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
 */function me(e){return`${e.appName}!${e.appId}`}
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
 */const be=new Map;function ye(e,t){const n=me(e);ve(n,t),ke(n,t)}function ve(e,t){const n=be.get(e);if(n)for(const i of n)i(t)}function ke(e,t){const n=Se();n&&n.postMessage({key:e,fid:t}),Te()}let Ie=null;function Se(){return!Ie&&"BroadcastChannel"in self&&(Ie=new BroadcastChannel("[Firebase] FID Change"),Ie.onmessage=e=>{ve(e.data.key,e.data.fid)}),Ie}function Te(){0===be.size&&Ie&&(Ie.close(),Ie=null)}
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
 */const De="firebase-installations-database",Ce=1,Ee="firebase-installations-store";let je=null;function _e(){return je||(je=W(De,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ee)}}})),je}async function Pe(e,t){const n=me(e),i=await _e(),o=i.transaction(Ee,"readwrite"),r=o.objectStore(Ee),a=await r.get(n);return await r.put(t,n),await o.done,a&&a.fid===t.fid||ye(e,t.fid),t}async function Ne(e){const t=me(e),n=await _e(),i=n.transaction(Ee,"readwrite");await i.objectStore(Ee).delete(t),await i.done}async function Ae(e,t){const n=me(e),i=await _e(),o=i.transaction(Ee,"readwrite"),r=o.objectStore(Ee),a=await r.get(n),s=t(a);return void 0===s?await r.delete(n):await r.put(s,n),await o.done,!s||a&&a.fid===s.fid||ye(e,s.fid),s}
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
 */async function Oe(e){let t;const n=await Ae(e.appConfig,(n=>{const i=Me(n),o=Be(e,i);return t=o.registrationPromise,o.installationEntry}));return n.fid===ge?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Me(e){const t=e||{fid:we(),registrationStatus:0};return We(t)}function Be(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(ee.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Ke(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Le(e)}:{installationEntry:t}}async function Ke(e,t){try{const n=await de(e,t);return Pe(e.appConfig,n)}catch(n){throw te(n)&&409===n.customData.serverCode?await Ne(e.appConfig):await Pe(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Le(e){let t=await xe(e.appConfig);while(1===t.registrationStatus)await pe(100),t=await xe(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Oe(e);return n||t}return t}function xe(e){return Ae(e,(e=>{if(!e)throw ee.create("installation-not-found");return We(e)}))}function We(e){return $e(e)?{fid:e.fid,registrationStatus:0}:e}function $e(e){return 1===e.registrationStatus&&e.registrationTime+V<Date.now()}
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
 */async function qe({appConfig:e,heartbeatServiceProvider:t},n){const i=Fe(e,n),o=ae(e,n),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={installation:{sdkVersion:G,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await se((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t=ie(e);return t}throw await oe("Generate Auth Token",c)}function Fe(e,{fid:t}){return`${ne(e)}/${t}/authTokens:generate`}
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
 */async function Re(e,t=!1){let n;const i=await Ae(e.appConfig,(i=>{if(!Ge(i))throw ee.create("not-registered");const o=i.authToken;if(!t&&ze(o))return i;if(1===o.requestStatus)return n=He(e,t),i;{if(!navigator.onLine)throw ee.create("app-offline");const t=Je(i);return n=Ve(e,t),t}})),o=n?await n:i.authToken;return o}async function He(e,t){let n=await Ue(e.appConfig);while(1===n.authToken.requestStatus)await pe(100),n=await Ue(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Re(e,t):i}function Ue(e){return Ae(e,(e=>{if(!Ge(e))throw ee.create("not-registered");const t=e.authToken;return Ze(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Ve(e,t){try{const n=await qe(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Pe(e.appConfig,i),n}catch(n){if(!te(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pe(e.appConfig,n)}else await Ne(e.appConfig);throw n}}function Ge(e){return void 0!==e&&2===e.registrationStatus}function ze(e){return 2===e.requestStatus&&!Xe(e)}function Xe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+J}function Je(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ze(e){return 1===e.requestStatus&&e.requestTime+V<Date.now()}
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
 */async function Ye(e){const t=e,{installationEntry:n,registrationPromise:i}=await Oe(t);return i?i.catch(console.error):Re(t).catch(console.error),n.fid}
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
 */async function Qe(e,t=!1){const n=e;await et(n);const i=await Re(n,t);return i.token}async function et(e){const{registrationPromise:t}=await Oe(e);t&&await t}
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
function tt(e){if(!e||!e.options)throw nt("App Configuration");if(!e.name)throw nt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw nt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function nt(e){return ee.create("missing-app-config-values",{valueName:e})}
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
 */const it="installations",ot="installations-internal",rt=e=>{const t=e.getProvider("app").getImmediate(),n=tt(t),i=(0,b.qX)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},at=e=>{const t=e.getProvider("app").getImmediate(),n=(0,b.qX)(t,it).getImmediate(),i={getId:()=>Ye(n),getToken:e=>Qe(n,e)};return i};function st(){(0,b.Xd)(new y.wA(it,rt,"PUBLIC")),(0,b.Xd)(new y.wA(ot,at,"PRIVATE"))}st(),(0,b.KN)(H,U),(0,b.KN)(H,U,"esm2017");const ct=(e,t)=>t.some((t=>e instanceof t));let ut,dt;function pt(){return ut||(ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ft(){return dt||(dt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,gt=new WeakMap,wt=new WeakMap,ht=new WeakMap,mt=new WeakMap;function bt(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(Tt(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&lt.set(t,e)})).catch((()=>{})),mt.set(t,e),t}function yt(e){if(gt.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));gt.set(e,t)}let vt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return gt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||wt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function kt(e){vt=e(vt)}function It(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?ft().includes(e)?function(...t){return e.apply(Dt(this),t),Tt(lt.get(this))}:function(...t){return Tt(e.apply(Dt(this),t))}:function(t,...n){const i=e.call(Dt(this),t,...n);return wt.set(i,t.sort?t.sort():[t]),Tt(i)}}function St(e){return"function"===typeof e?It(e):(e instanceof IDBTransaction&&yt(e),ct(e,pt())?new Proxy(e,vt):e)}function Tt(e){if(e instanceof IDBRequest)return bt(e);if(ht.has(e))return ht.get(e);const t=St(e);return t!==e&&(ht.set(e,t),mt.set(t,e)),t}const Dt=e=>mt.get(e);function Ct(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=Tt(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(Tt(a.result),e.oldVersion,e.newVersion,Tt(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}function Et(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),Tt(n).then((()=>{}))}const jt=["get","getKey","getAll","getAllKeys","count"],_t=["put","add","delete","clear"],Pt=new Map;function Nt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Pt.get(t))return Pt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=_t.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!jt.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return Pt.set(t,r),r}kt((e=>({...e,get:(t,n,i)=>Nt(t,n)||e.get(t,n,i),has:(t,n)=>!!Nt(t,n)||e.has(t,n)})));
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
const At="/firebase-messaging-sw.js",Ot="/firebase-cloud-messaging-push-scope",Mt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Bt="https://fcmregistrations.googleapis.com/v1",Kt="google.c.a.c_id",Lt="google.c.a.c_l",xt="google.c.a.ts",Wt="google.c.a.e";var $t,qt;
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
function Ft(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Rt(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let r=0;r<i.length;++r)o[r]=i.charCodeAt(r);return o}
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
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})($t||($t={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(qt||(qt={}));const Ht="fcm_token_details_db",Ut=5,Vt="fcm_token_object_Store";async function Gt(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(Ht))return null}let t=null;const n=await Ct(Ht,Ut,{upgrade:async(n,i,o,r)=>{var a;if(i<2)return;if(!n.objectStoreNames.contains(Vt))return;const s=r.objectStore(Vt),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Ft(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ft(e.auth),p256dh:Ft(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ft(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ft(e.auth),p256dh:Ft(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ft(e.vapidKey)}}}}});return n.close(),await Et(Ht),await Et("fcm_vapid_details_db"),await Et("undefined"),zt(t)?t:null}function zt(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */const Xt="firebase-messaging-database",Jt=1,Zt="firebase-messaging-store";let Yt=null;function Qt(){return Yt||(Yt=Ct(Xt,Jt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Zt)}}})),Yt}async function en(e){const t=on(e),n=await Qt(),i=await n.transaction(Zt).objectStore(Zt).get(t);if(i)return i;{const t=await Gt(e.appConfig.senderId);if(t)return await tn(e,t),t}}async function tn(e,t){const n=on(e),i=await Qt(),o=i.transaction(Zt,"readwrite");return await o.objectStore(Zt).put(t,n),await o.done,t}async function nn(e){const t=on(e),n=await Qt(),i=n.transaction(Zt,"readwrite");await i.objectStore(Zt).delete(t),await i.done}function on({appConfig:e}){return e.appId}
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
 */const rn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new v.LL("messaging","Messaging",rn);
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
async function sn(e,t){const n=await pn(e),i=fn(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{const t=await fetch(dn(e.appConfig),o);r=await t.json()}catch(a){throw an.create("token-subscribe-failed",{errorInfo:a})}if(r.error){const e=r.error.message;throw an.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw an.create("token-subscribe-no-token");return r.token}async function cn(e,t){const n=await pn(e),i=fn(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{const n=await fetch(`${dn(e.appConfig)}/${t.token}`,o);r=await n.json()}catch(a){throw an.create("token-update-failed",{errorInfo:a})}if(r.error){const e=r.error.message;throw an.create("token-update-failed",{errorInfo:e})}if(!r.token)throw an.create("token-update-no-token");return r.token}async function un(e,t){const n=await pn(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${dn(e.appConfig)}/${t}`,i),o=await n.json();if(o.error){const e=o.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:e})}}catch(o){throw an.create("token-unsubscribe-failed",{errorInfo:o})}}function dn({projectId:e}){return`${Bt}/projects/${e}/registrations`}async function pn({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function fn({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==Mt&&(o.web.applicationPubKey=i),o}
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
 */const ln=6048e5;async function gn(e){const t=await bn(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ft(t.getKey("auth")),p256dh:Ft(t.getKey("p256dh"))},i=await en(e.firebaseDependencies);if(i){if(yn(i.subscriptionOptions,n))return Date.now()>=i.createTime+ln?hn(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await un(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return mn(e.firebaseDependencies,n)}return mn(e.firebaseDependencies,n)}async function wn(e){const t=await en(e.firebaseDependencies);t&&(await un(e.firebaseDependencies,t.token),await nn(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function hn(e,t){try{const n=await cn(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await tn(e.firebaseDependencies,i),n}catch(n){throw await wn(e),n}}async function mn(e,t){const n=await sn(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await tn(e,i),i.token}async function bn(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Rt(t)})}function yn(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&i&&o&&r}
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
 */function vn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return kn(t,e),In(t,e),Sn(t,e),t}function kn(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o)}function In(e,t){t.data&&(e.data=t.data)}function Sn(e,t){var n,i,o,r,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(o=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==o?o:null===(r=t.notification)||void 0===r?void 0:r.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */function Tn(e){return"object"===typeof e&&!!e&&Kt in e}
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
 */function Dn(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
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
 */function Cn(e){if(!e||!e.options)throw En("App Configuration Object");if(!e.name)throw En("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw En(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function En(e){return an.create("missing-app-config-values",{valueName:e})}
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
 */Dn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Dn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class jn{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Cn(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */async function _n(e){var t;try{e.swRegistration=await navigator.serviceWorker.register(At,{scope:Ot}),e.swRegistration.update().catch((()=>{}))}catch(n){throw an.create("failed-service-worker-registration",{browserErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}
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
 */async function Pn(e,t){if(t||e.swRegistration||await _n(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");e.swRegistration=t}}
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
 */async function Nn(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Mt)}
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
 */async function An(e,t){if(!navigator)throw an.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw an.create("permission-blocked");return await Nn(e,null===t||void 0===t?void 0:t.vapidKey),await Pn(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),gn(e)}
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
 */async function On(e,t,n){const i=Mn(t),o=await e.firebaseDependencies.analyticsProvider.get();o.logEvent(i,{message_id:n[Kt],message_name:n[Lt],message_time:n[xt],message_device_time:Math.floor(Date.now()/1e3)})}function Mn(e){switch(e){case qt.NOTIFICATION_CLICKED:return"notification_open";case qt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */async function Bn(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===qt.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(vn(n)):e.onMessageHandler.next(vn(n)));const i=n.data;Tn(i)&&"1"===i[Wt]&&await On(e,n.messageType,i)}const Kn="@firebase/messaging",Ln="0.9.14",xn=e=>{const t=new jn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>Bn(t,e))),t},Wn=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>An(t,e)};return n};function $n(){(0,b.Xd)(new y.wA("messaging",xn,"PUBLIC")),(0,b.Xd)(new y.wA("messaging-internal",Wn,"PRIVATE")),(0,b.KN)(Kn,Ln),(0,b.KN)(Kn,Ln,"esm2017")}
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
 */async function qn(){try{await(0,v.eu)()}catch(e){return!1}return"undefined"!==typeof window&&(0,v.hl)()&&(0,v.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
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
function Fn(e=(0,b.Mq)()){return qn().then((e=>{if(!e)throw an.create("unsupported-browser")}),(e=>{throw an.create("indexed-db-unsupported")})),(0,b.qX)((0,v.m9)(e),"messaging").getImmediate()}async function Rn(e,t){return e=(0,v.m9)(e),An(e,t)}$n();var Hn=n(9632),Un=n(9755),Vn=n.n(Un),Gn={components:{IonButton:Hn.YG,IonCard:Hn.PM,IonCardHeader:Hn.Zi,IonCardTitle:Hn.Dq,IonCardSubtitle:Hn.tO,IonCardContent:Hn.FN,IonList:Hn.q_,IonItem:Hn.Ie,IonItemDivider:Hn.rH},data(){return{permission:Notification.permission,registered:!1}},methods:{async saveNotificationToken(){if(this.$heap.state.user.user_id>0&&this.$heap.state.settings?.firebase&&!this.registered)try{const e=this.$heap.state.settings.firebase.vapidKey,t=Fn(),n=await Rn(t,{vapidKey:e}),i={type:"webpush",registration_id:n,user_agent:navigator.userAgent};await Vn().post(`${this.$heap.state.hostname}MessageSub/itemCreate`,i),this.registered=!0}catch(e){console.log(e)}},async subscribe(){try{this.permission=await Notification.requestPermission(),"granted"==this.permission&&this.saveNotificationToken()}catch(e){this.$flash("Вы не разрешили уведомлять вас")}},init(){this.$heap.state?.settings?.firebase&&(0,m.ZF)(this.$heap.state.settings.firebase)}},mounted(){const e=this;this.$topic.on("settingsGet",(function(){e.init(),e.saveNotificationToken()})),this.$topic.on("userGet",(function(){e.saveNotificationToken()})),e.init(),e.saveNotificationToken()}},zn=n(3744);const Xn=(0,zn.Z)(Gn,[["render",h]]);var Jn=Xn}}]);
//# sourceMappingURL=430.b51a5c2c.js.map