"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[760],{8379:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return o}});var r=n(9185),c=n(3183),i=n(2635);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,t,n,o,s)=>{const a=e.ownerDocument.defaultView;let u=(0,c.i)(e);const l=e=>{const t=50,{startX:n}=e;return u?n>=a.innerWidth-t:n<=t},h=e=>u?-e.deltaX:e.deltaX,d=e=>u?-e.velocityX:e.velocityX,k=n=>(u=(0,c.i)(e),l(n)&&t()),f=e=>{const t=h(e),n=t/a.innerWidth;o(n)},w=e=>{const t=h(e),n=a.innerWidth,c=t/n,i=d(e),o=n/2,u=i>=0&&(i>.2||t>o),l=u?1-c:c,k=l*n;let f=0;if(k>5){const e=k/Math.abs(i);f=Math.min(e,540)}s(u,c<=0?.01:(0,r.f)(0,c,.9999),f)};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:k,onStart:n,onMove:f,onEnd:w})}}}]);
//# sourceMappingURL=760.c29b4a87.js.map