"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[168],{3168:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return s}});var o=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=e=>{let t,n,s,v=10*-u,f=0;const p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=e=>{v=(0,o.u)(e),b(e)},L=e=>{v=(0,o.u)(e),g(e)},w=e=>{const t=(0,o.u)(e)-u;v<t&&b(e)},E=e=>{const t=(0,o.u)(e)-u;v<t&&g(e)},k=e=>{g(e)},T=()=>{clearTimeout(s),s=void 0,t&&(y(!1),t=void 0)},b=e=>{t||R(i(e),e)},g=e=>{R(void 0,e)},R=(e,n)=>{if(e&&e===t)return;clearTimeout(s),s=void 0;const{x:i,y:c}=(0,o.q)(n);if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(r)||C(t,i,c),y(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e));const n=a(e)?0:d;e.classList.remove(r),s=setTimeout((()=>{C(e,i,c),s=void 0}),n)}t=e},C=(e,t,o)=>{f=Date.now(),e.classList.add(r);const s=p&&c(e);s&&s.addRipple&&(q(),n=s.addRipple(t,o))},q=()=>{void 0!==n&&(n.then((e=>e())),n=void 0)},y=e=>{q();const n=t;if(!n)return;const o=l-Date.now()+f;if(e&&o>0&&!a(n)){const e=setTimeout((()=>{n.classList.remove(r),h.delete(n)}),l);h.set(n,e)}else n.classList.remove(r)},S=document;S.addEventListener("ionGestureCaptured",T),S.addEventListener("touchstart",m,!0),S.addEventListener("touchcancel",L,!0),S.addEventListener("touchend",L,!0),S.addEventListener("pointercancel",T,!0),S.addEventListener("mousedown",w,!0),S.addEventListener("mouseup",E,!0),S.addEventListener("contextmenu",k,!0)},i=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(!(n instanceof ShadowRoot)&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=168.ede90048.js.map