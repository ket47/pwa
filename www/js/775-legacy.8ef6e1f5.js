"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[775],{8775:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return P}});var o,i=n(8487),r=n(6587),s=n(9461);(function(e){e["Body"]="body",e["Ionic"]="ionic",e["Native"]="native",e["None"]="none"})(o||(o={}));const a={getEngine(){var e;return(null===(e=null===s.w||void 0===s.w?void 0:s.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null===s.w||void 0===s.w?void 0:s.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},d=new WeakMap,l=(e,t,n,o=0,i=!1)=>{d.has(e)!==n&&(n?u(e,t,o,i):v(e,t))},c=e=>e===e.getRootNode().activeElement,u=(e,t,n,o=!1)=>{const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),i.appendChild(r),d.set(e,r);const s=e.ownerDocument,a="rtl"===s.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},v=(e,t)=>{const n=d.get(e);n&&(d.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},m=50,f=(e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{c(t)&&l(e,t,n)},i=()=>l(e,t,!1),s=()=>o(!0),a=()=>o(!1);return(0,r.a)(n,"ionScrollStart",s),(0,r.a)(n,"ionScrollEnd",a),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",s),(0,r.b)(n,"ionScrollEnd",a),t.removeEventListener("blur",i)}},w="input, textarea, [no-blur], [contenteditable]",p=()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},s=o=>{if(t)return void(t=!1);const i=n.activeElement;if(!i)return;if(i.matches(w))return;const r=o.target;r!==i&&(r.matches(w)||r.closest(w)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};return(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",s,!1),()=>{(0,r.b)(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",s,!1)}},g=.3,y=(e,t,n)=>{var o;const i=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return h(i.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},h=(e,t,n,o)=>{const i=e.top,r=e.bottom,s=t.top,a=Math.min(t.bottom,o-n),d=s+15,l=a-m,c=l-r,u=d-i,v=Math.round(c<0?-c:u>0?-u:0),f=Math.min(v,i-s),w=Math.abs(f),p=w/g,y=Math.min(400,Math.max(150,p));return{scrollAmount:f,scrollDuration:y,scrollPadding:n,inputSafeY:4-(i-d)}},b="$ionPaddingTimer",E=(e,t,n)=>{const o=e[b];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[b]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},S=(e,t,n)=>{const o=()=>{t&&E(t,0,n)};e.addEventListener("focusout",o,{once:!0})};let L=0;const M=(e,t,n,i,r,s,a,d=!1)=>{const l=s&&(void 0===a||a.mode===o.None),c=async()=>{k(e,t,n,i,r,l,d)};return e.addEventListener("focusin",c,!0),()=>{e.removeEventListener("focusin",c,!0)}},k=async(e,t,n,o,s,a,d=!1)=>{if(!n&&!o)return;const c=y(e,n||o,s);if(n&&Math.abs(c.scrollAmount)<4)return t.focus(),void(a&&null!==n&&(L+=c.scrollPadding,E(n,L),S(t,n,(()=>L=0))));if(l(e,t,!0,c.inputSafeY,d),t.focus(),(0,r.r)((()=>e.click())),a&&n&&(L+=c.scrollPadding,E(n,L)),"undefined"!==typeof window){let o;const r=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),n&&await(0,i.c)(n,0,c.scrollAmount,c.scrollDuration),l(e,t,!1,c.inputSafeY),t.focus(),a&&S(t,n,(()=>L=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await(0,i.g)(n),a=e.scrollHeight-e.clientHeight;if(c.scrollAmount>a-e.scrollTop)return"password"===t.type?(c.scrollAmount+=m,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(o=setTimeout(r,1e3))}r()}},D=!0,P=async(e,t)=>{const n=document,o="ios"===t,s="android"===t,d=e.getNumber("keyboardHeight",290),l=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",o),u=e.getBoolean("inputBlurring",o),v=e.getBoolean("scrollPadding",!0),m=Array.from(n.querySelectorAll("ion-input, ion-textarea")),w=new WeakMap,g=new WeakMap,y=await a.getResizeMode(),h=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),o=(0,i.a)(e),a=o?null:e.closest("ion-footer");if(!n)return;if(o&&c&&!w.has(e)){const t=f(e,n,o);w.set(e,t)}const u="date"===n.type||"datetime-local"===n.type;if(!u&&(o||a)&&l&&!g.has(e)){const t=M(e,n,o,a,d,v,y,s);g.set(e,t)}},b=e=>{if(c){const t=w.get(e);t&&t(),w.delete(e)}if(l){const t=g.get(e);t&&t(),g.delete(e)}};u&&D&&p();for(const i of m)h(i);n.addEventListener("ionInputDidLoad",(e=>{h(e.detail)})),n.addEventListener("ionInputDidUnload",(e=>{b(e.detail)}))}}}]);
//# sourceMappingURL=775-legacy.8ef6e1f5.js.map