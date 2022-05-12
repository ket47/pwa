"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[990],{8990:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return s}});var r=n(6587),a=n(6453);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(e,t,n,s,c)=>{const o=e.ownerDocument.defaultView,i=e=>e.startX<=50&&t(),u=e=>{const t=e.deltaX,n=t/o.innerWidth;s(n)},l=e=>{const t=e.deltaX,n=o.innerWidth,a=t/n,s=e.velocityX,i=n/2,u=s>=0&&(s>.2||e.deltaX>i),l=u?1-a:a,d=l*n;let h=0;if(d>5){const e=d/Math.abs(s);h=Math.min(e,540)}c(u,a<=0?.01:(0,r.d)(0,a,.9999),h)};return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i,onStart:n,onMove:u,onEnd:l})}}}]);
//# sourceMappingURL=990.5ab3e613.js.map