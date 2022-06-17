"use strict";(self["webpackChunktezkel_delivery"]=self["webpackChunktezkel_delivery"]||[]).push([[246],{7246:function(e,t,n){n.r(t),n.d(t,{default:function(){return Un}});var i=n(6252);const o=(0,i.Uk)("Уведомления заблокированы вами"),r=(0,i.Uk)(" К сожалению, мы не сможем уведомлять вас о статусах заказов "),a=(0,i.Uk)("Подписаться на уведомления"),s=(0,i.Uk)("Уведомления разрешены"),c=(0,i._)("p",null,"Вам будут приходить уведомления об изменениях статусов заказов",-1),u=(0,i.Uk)("Уведомления не разрешены"),d=(0,i.Uk)(" Чтобы вовремя узнавать об изменениях статусов заказов, подпишитесь на уведомления "),p=(0,i.Uk)("Подписаться на уведомления");function f(e,t,n,f,l,g){const w=(0,i.up)("ion-card-title"),h=(0,i.up)("ion-card-header"),m=(0,i.up)("ion-button"),b=(0,i.up)("ion-card-content"),y=(0,i.up)("ion-card"),v=(0,i.up)("base-layout");return(0,i.wg)(),(0,i.j4)(v,{pageTitle:"Уведомления"},{default:(0,i.w5)((()=>["denied"==l.permission?((0,i.wg)(),(0,i.j4)(y,{key:0,color:"danger"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[o])),_:1})])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[r,(0,i._)("p",null,[(0,i.Wm)(m,{onClick:t[0]||(t[0]=e=>g.subscribe()),expand:"full"},{default:(0,i.w5)((()=>[a])),_:1})])])),_:1})])),_:1})):(0,i.kq)("",!0),"granted"==l.permission?((0,i.wg)(),(0,i.j4)(y,{key:1,color:"success"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[s])),_:1})])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[c])),_:1})])),_:1})):(0,i.kq)("",!0),"default"==l.permission?((0,i.wg)(),(0,i.j4)(y,{key:2,color:"warning"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[u])),_:1})])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[d,(0,i._)("p",null,[(0,i.Wm)(m,{onClick:t[1]||(t[1]=e=>g.subscribe()),expand:"full"},{default:(0,i.w5)((()=>[p])),_:1})])])),_:1})])),_:1})):(0,i.kq)("",!0)])),_:1})}var l=n(5503),g=n(132),w=n(8463),h=n(4444);const m=(e,t)=>t.some((t=>e instanceof t));let b,y;function v(){return b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k(){return y||(y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I=new WeakMap,S=new WeakMap,D=new WeakMap,T=new WeakMap,C=new WeakMap;function E(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(O(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&I.set(t,e)})).catch((()=>{})),C.set(t,e),t}function j(e){if(S.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));S.set(e,t)}let _={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return S.get(e);if("objectStoreNames"===t)return e.objectStoreNames||D.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function P(e){_=e(_)}function A(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?k().includes(e)?function(...t){return e.apply(M(this),t),O(I.get(this))}:function(...t){return O(e.apply(M(this),t))}:function(t,...n){const i=e.call(M(this),t,...n);return D.set(i,t.sort?t.sort():[t]),O(i)}}function N(e){return"function"===typeof e?A(e):(e instanceof IDBTransaction&&j(e),m(e,v())?new Proxy(e,_):e)}function O(e){if(e instanceof IDBRequest)return E(e);if(T.has(e))return T.get(e);const t=N(e);return t!==e&&(T.set(e,t),C.set(t,e)),t}const M=e=>C.get(e);function B(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=O(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(O(a.result),e.oldVersion,e.newVersion,O(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const K=["get","getKey","getAll","getAllKeys","count"],L=["put","add","delete","clear"],x=new Map;function $(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=L.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!K.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return x.set(t,r),r}P((e=>({...e,get:(t,n,i)=>$(t,n)||e.get(t,n,i),has:(t,n)=>!!$(t,n)||e.has(t,n)})));const q="@firebase/installations",W="0.5.10",F=1e4,R=`w:${W}`,H="FIS_v2",V="https://firebaseinstallations.googleapis.com/v1",U=36e5,G="installations",z="Installations",X={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},J=new h.LL(G,z,X);function Z(e){return e instanceof h.ZR&&e.code.includes("request-failed")}
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
 */function Y({projectId:e}){return`${V}/projects/${e}/installations`}function Q(e){return{token:e.token,requestStatus:2,expiresIn:oe(e.expiresIn),creationTime:Date.now()}}async function ee(e,t){const n=await t.json(),i=n.error;return J.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function te({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ne(e,{refreshToken:t}){const n=te(e);return n.append("Authorization",re(t)),n}async function ie(e){const t=await e();return t.status>=500&&t.status<600?e():t}function oe(e){return Number(e.replace("s","000"))}function re(e){return`${H} ${e}`}
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
 */async function ae({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Y(e),o=te(e),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={fid:n,authVersion:H,appId:e.appId,sdkVersion:R},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await ie((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Q(e.authToken)};return t}throw await ee("Create Installation",c)}
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
 */function se(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */function ce(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const ue=/^[cdef][\w-]{21}$/,de="";function pe(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=fe(e);return ue.test(n)?n:de}catch(e){return de}}function fe(e){const t=ce(e);return t.substr(0,22)}
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
 */function le(e){return`${e.appName}!${e.appId}`}
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
 */const ge=new Map;function we(e,t){const n=le(e);he(n,t),me(n,t)}function he(e,t){const n=ge.get(e);if(n)for(const i of n)i(t)}function me(e,t){const n=ye();n&&n.postMessage({key:e,fid:t}),ve()}let be=null;function ye(){return!be&&"BroadcastChannel"in self&&(be=new BroadcastChannel("[Firebase] FID Change"),be.onmessage=e=>{he(e.data.key,e.data.fid)}),be}function ve(){0===ge.size&&be&&(be.close(),be=null)}
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
 */const ke="firebase-installations-database",Ie=1,Se="firebase-installations-store";let De=null;function Te(){return De||(De=B(ke,Ie,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Se)}}})),De}async function Ce(e,t){const n=le(e),i=await Te(),o=i.transaction(Se,"readwrite"),r=o.objectStore(Se),a=await r.get(n);return await r.put(t,n),await o.done,a&&a.fid===t.fid||we(e,t.fid),t}async function Ee(e){const t=le(e),n=await Te(),i=n.transaction(Se,"readwrite");await i.objectStore(Se).delete(t),await i.done}async function je(e,t){const n=le(e),i=await Te(),o=i.transaction(Se,"readwrite"),r=o.objectStore(Se),a=await r.get(n),s=t(a);return void 0===s?await r.delete(n):await r.put(s,n),await o.done,!s||a&&a.fid===s.fid||we(e,s.fid),s}
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
 */async function _e(e){let t;const n=await je(e.appConfig,(n=>{const i=Pe(n),o=Ae(e,i);return t=o.registrationPromise,o.installationEntry}));return n.fid===de?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Pe(e){const t=e||{fid:pe(),registrationStatus:0};return Be(t)}function Ae(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(J.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Ne(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Oe(e)}:{installationEntry:t}}async function Ne(e,t){try{const n=await ae(e,t);return Ce(e.appConfig,n)}catch(n){throw Z(n)&&409===n.customData.serverCode?await Ee(e.appConfig):await Ce(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Oe(e){let t=await Me(e.appConfig);while(1===t.registrationStatus)await se(100),t=await Me(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await _e(e);return n||t}return t}function Me(e){return je(e,(e=>{if(!e)throw J.create("installation-not-found");return Be(e)}))}function Be(e){return Ke(e)?{fid:e.fid,registrationStatus:0}:e}function Ke(e){return 1===e.registrationStatus&&e.registrationTime+F<Date.now()}
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
 */async function Le({appConfig:e,heartbeatServiceProvider:t},n){const i=xe(e,n),o=ne(e,n),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={installation:{sdkVersion:R,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await ie((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t=Q(e);return t}throw await ee("Generate Auth Token",c)}function xe(e,{fid:t}){return`${Y(e)}/${t}/authTokens:generate`}
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
 */async function $e(e,t=!1){let n;const i=await je(e.appConfig,(i=>{if(!Re(i))throw J.create("not-registered");const o=i.authToken;if(!t&&He(o))return i;if(1===o.requestStatus)return n=qe(e,t),i;{if(!navigator.onLine)throw J.create("app-offline");const t=Ue(i);return n=Fe(e,t),t}})),o=n?await n:i.authToken;return o}async function qe(e,t){let n=await We(e.appConfig);while(1===n.authToken.requestStatus)await se(100),n=await We(e.appConfig);const i=n.authToken;return 0===i.requestStatus?$e(e,t):i}function We(e){return je(e,(e=>{if(!Re(e))throw J.create("not-registered");const t=e.authToken;return Ge(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Fe(e,t){try{const n=await Le(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Ce(e.appConfig,i),n}catch(n){if(!Z(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ce(e.appConfig,n)}else await Ee(e.appConfig);throw n}}function Re(e){return void 0!==e&&2===e.registrationStatus}function He(e){return 2===e.requestStatus&&!Ve(e)}function Ve(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+U}function Ue(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ge(e){return 1===e.requestStatus&&e.requestTime+F<Date.now()}
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
 */async function ze(e){const t=e,{installationEntry:n,registrationPromise:i}=await _e(t);return i?i.catch(console.error):$e(t).catch(console.error),n.fid}
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
 */async function Xe(e,t=!1){const n=e;await Je(n);const i=await $e(n,t);return i.token}async function Je(e){const{registrationPromise:t}=await _e(e);t&&await t}
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
function Ze(e){if(!e||!e.options)throw Ye("App Configuration");if(!e.name)throw Ye("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ye(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ye(e){return J.create("missing-app-config-values",{valueName:e})}
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
 */const Qe="installations",et="installations-internal",tt=e=>{const t=e.getProvider("app").getImmediate(),n=Ze(t),i=(0,g.qX)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},nt=e=>{const t=e.getProvider("app").getImmediate(),n=(0,g.qX)(t,Qe).getImmediate(),i={getId:()=>ze(n),getToken:e=>Xe(n,e)};return i};function it(){(0,g.Xd)(new w.wA(Qe,tt,"PUBLIC")),(0,g.Xd)(new w.wA(et,nt,"PRIVATE"))}it(),(0,g.KN)(q,W),(0,g.KN)(q,W,"esm2017");const ot=(e,t)=>t.some((t=>e instanceof t));let rt,at;function st(){return rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ct(){return at||(at=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ut=new WeakMap,dt=new WeakMap,pt=new WeakMap,ft=new WeakMap,lt=new WeakMap;function gt(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(vt(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ut.set(t,e)})).catch((()=>{})),lt.set(t,e),t}function wt(e){if(dt.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));dt.set(e,t)}let ht={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return dt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||pt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function mt(e){ht=e(ht)}function bt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?ct().includes(e)?function(...t){return e.apply(kt(this),t),vt(ut.get(this))}:function(...t){return vt(e.apply(kt(this),t))}:function(t,...n){const i=e.call(kt(this),t,...n);return pt.set(i,t.sort?t.sort():[t]),vt(i)}}function yt(e){return"function"===typeof e?bt(e):(e instanceof IDBTransaction&&wt(e),ot(e,st())?new Proxy(e,ht):e)}function vt(e){if(e instanceof IDBRequest)return gt(e);if(ft.has(e))return ft.get(e);const t=yt(e);return t!==e&&(ft.set(e,t),lt.set(t,e)),t}const kt=e=>lt.get(e);function It(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const a=indexedDB.open(e,t),s=vt(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(vt(a.result),e.oldVersion,e.newVersion,vt(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}function St(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),vt(n).then((()=>{}))}const Dt=["get","getKey","getAll","getAllKeys","count"],Tt=["put","add","delete","clear"],Ct=new Map;function Et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Ct.get(t))return Ct.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=Tt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!Dt.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let a=r.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&r.done]))[0]};return Ct.set(t,r),r}mt((e=>({...e,get:(t,n,i)=>Et(t,n)||e.get(t,n,i),has:(t,n)=>!!Et(t,n)||e.has(t,n)})));
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
const jt="/firebase-messaging-sw.js",_t="/firebase-cloud-messaging-push-scope",Pt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",At="https://fcmregistrations.googleapis.com/v1",Nt="google.c.a.c_id",Ot="google.c.a.c_l",Mt="google.c.a.ts",Bt="google.c.a.e";var Kt,Lt;
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
function xt(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function $t(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let r=0;r<i.length;++r)o[r]=i.charCodeAt(r);return o}
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
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(Kt||(Kt={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Lt||(Lt={}));const qt="fcm_token_details_db",Wt=5,Ft="fcm_token_object_Store";async function Rt(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(qt))return null}let t=null;const n=await It(qt,Wt,{upgrade:async(n,i,o,r)=>{var a;if(i<2)return;if(!n.objectStoreNames.contains(Ft))return;const s=r.objectStore(Ft),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:xt(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:xt(e.auth),p256dh:xt(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:xt(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:xt(e.auth),p256dh:xt(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:xt(e.vapidKey)}}}}});return n.close(),await St(qt),await St("fcm_vapid_details_db"),await St("undefined"),Ht(t)?t:null}function Ht(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */const Vt="firebase-messaging-database",Ut=1,Gt="firebase-messaging-store";let zt=null;function Xt(){return zt||(zt=It(Vt,Ut,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gt)}}})),zt}async function Jt(e){const t=Qt(e),n=await Xt(),i=await n.transaction(Gt).objectStore(Gt).get(t);if(i)return i;{const t=await Rt(e.appConfig.senderId);if(t)return await Zt(e,t),t}}async function Zt(e,t){const n=Qt(e),i=await Xt(),o=i.transaction(Gt,"readwrite");return await o.objectStore(Gt).put(t,n),await o.done,t}async function Yt(e){const t=Qt(e),n=await Xt(),i=n.transaction(Gt,"readwrite");await i.objectStore(Gt).delete(t),await i.done}function Qt({appConfig:e}){return e.appId}
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
 */const en={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},tn=new h.LL("messaging","Messaging",en);
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
async function nn(e,t){const n=await sn(e),i=cn(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{const t=await fetch(an(e.appConfig),o);r=await t.json()}catch(a){throw tn.create("token-subscribe-failed",{errorInfo:a})}if(r.error){const e=r.error.message;throw tn.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw tn.create("token-subscribe-no-token");return r.token}async function on(e,t){const n=await sn(e),i=cn(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{const n=await fetch(`${an(e.appConfig)}/${t.token}`,o);r=await n.json()}catch(a){throw tn.create("token-update-failed",{errorInfo:a})}if(r.error){const e=r.error.message;throw tn.create("token-update-failed",{errorInfo:e})}if(!r.token)throw tn.create("token-update-no-token");return r.token}async function rn(e,t){const n=await sn(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${an(e.appConfig)}/${t}`,i),o=await n.json();if(o.error){const e=o.error.message;throw tn.create("token-unsubscribe-failed",{errorInfo:e})}}catch(o){throw tn.create("token-unsubscribe-failed",{errorInfo:o})}}function an({projectId:e}){return`${At}/projects/${e}/registrations`}async function sn({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function cn({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==Pt&&(o.web.applicationPubKey=i),o}
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
 */const un=6048e5;async function dn(e){const t=await gn(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:xt(t.getKey("auth")),p256dh:xt(t.getKey("p256dh"))},i=await Jt(e.firebaseDependencies);if(i){if(wn(i.subscriptionOptions,n))return Date.now()>=i.createTime+un?fn(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await rn(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return ln(e.firebaseDependencies,n)}return ln(e.firebaseDependencies,n)}async function pn(e){const t=await Jt(e.firebaseDependencies);t&&(await rn(e.firebaseDependencies,t.token),await Yt(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function fn(e,t){try{const n=await on(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Zt(e.firebaseDependencies,i),n}catch(n){throw await pn(e),n}}async function ln(e,t){const n=await nn(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await Zt(e,i),i.token}async function gn(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$t(t)})}function wn(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&i&&o&&r}
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
 */function hn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return mn(t,e),bn(t,e),yn(t,e),t}function mn(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o)}function bn(e,t){t.data&&(e.data=t.data)}function yn(e,t){var n,i,o,r,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(o=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==o?o:null===(r=t.notification)||void 0===r?void 0:r.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */function vn(e){return"object"===typeof e&&!!e&&Nt in e}
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
 */function kn(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
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
 */function In(e){if(!e||!e.options)throw Sn("App Configuration Object");if(!e.name)throw Sn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Sn(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Sn(e){return tn.create("missing-app-config-values",{valueName:e})}
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
 */kn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),kn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Dn{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=In(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */async function Tn(e){var t;try{e.swRegistration=await navigator.serviceWorker.register(jt,{scope:_t}),e.swRegistration.update().catch((()=>{}))}catch(n){throw tn.create("failed-service-worker-registration",{browserErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}
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
 */async function Cn(e,t){if(t||e.swRegistration||await Tn(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw tn.create("invalid-sw-registration");e.swRegistration=t}}
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
 */async function En(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Pt)}
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
 */async function jn(e,t){if(!navigator)throw tn.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw tn.create("permission-blocked");return await En(e,null===t||void 0===t?void 0:t.vapidKey),await Cn(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),dn(e)}
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
 */async function _n(e,t,n){const i=Pn(t),o=await e.firebaseDependencies.analyticsProvider.get();o.logEvent(i,{message_id:n[Nt],message_name:n[Ot],message_time:n[Mt],message_device_time:Math.floor(Date.now()/1e3)})}function Pn(e){switch(e){case Lt.NOTIFICATION_CLICKED:return"notification_open";case Lt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */async function An(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Lt.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(hn(n)):e.onMessageHandler.next(hn(n)));const i=n.data;vn(i)&&"1"===i[Bt]&&await _n(e,n.messageType,i)}const Nn="@firebase/messaging",On="0.9.14",Mn=e=>{const t=new Dn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>An(t,e))),t},Bn=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>jn(t,e)};return n};function Kn(){(0,g.Xd)(new w.wA("messaging",Mn,"PUBLIC")),(0,g.Xd)(new w.wA("messaging-internal",Bn,"PRIVATE")),(0,g.KN)(Nn,On),(0,g.KN)(Nn,On,"esm2017")}
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
 */async function Ln(){try{await(0,h.eu)()}catch(e){return!1}return"undefined"!==typeof window&&(0,h.hl)()&&(0,h.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
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
function xn(e=(0,g.Mq)()){return Ln().then((e=>{if(!e)throw tn.create("unsupported-browser")}),(e=>{throw tn.create("indexed-db-unsupported")})),(0,g.qX)((0,h.m9)(e),"messaging").getImmediate()}async function $n(e,t){return e=(0,h.m9)(e),jn(e,t)}Kn();var qn=n(3658),Wn=n(9755),Fn=n.n(Wn),Rn={components:{IonButton:qn.YG,IonCard:qn.PM,IonCardHeader:qn.Zi,IonCardTitle:qn.Dq,IonCardSubtitle:qn.tO,IonCardContent:qn.FN},data(){return{permission:Notification.permission}},methods:{async saveNotificationToken(){if(this.$heap.state.user.user_id>0&&this.$heap.state.settings?.firebase)try{const e=this.$heap.state.settings.firebase.vapidKey,t=xn(),n=await $n(t,{vapidKey:e}),i={type:"webpush",registration_id:n,user_agent:navigator.userAgent};await Fn().post(`${this.$heap.state.hostname}MessageSub/itemCreate`,i)}catch(e){console.log(e)}},async subscribe(){try{this.permission=await Notification.requestPermission(),"granted"==this.permission&&this.saveNotificationToken()}catch(e){this.$flash("Вы не разрешили уведомлять вас")}},init(){(0,l.ZF)(this.$heap.state.settings.firebase)}},created(){const e=this;this.$topic.on("settingsGet",(function(){e.init()})),this.$topic.on("userGet",(function(){}))},watch:{"Notification.permission":function(){this.permission=Notification.permission}}},Hn=n(3744);const Vn=(0,Hn.Z)(Rn,[["render",f]]);var Un=Vn}}]);
//# sourceMappingURL=246.043a9957.js.map