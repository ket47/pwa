"use strict";(self["webpackChunktezkel_delivery"]=self["webpackChunktezkel_delivery"]||[]).push([[351],{2351:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var i=a(6252);const n={key:0,style:{padding:"20px"}},d=(0,i._)("h6",null,"Страница не найдена",-1),m=[d],p={key:1,style:{padding:"20px"}},l=(0,i._)("br",null,null,-1),s={key:2,style:{padding:"10px"}};function r(e,t,a,d,r,g){const u=(0,i.up)("ion-skeleton-text"),h=(0,i.up)("ion-text"),o=(0,i.up)("base-layout");return(0,i.wg)(),(0,i.j4)(o,{pageTitle:r.page?.page_title||e.$heap.state.settings.app_title},{default:(0,i.w5)((()=>["error"==r.page?((0,i.wg)(),(0,i.iD)("div",n,m)):null==r.page?((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(u,{animated:"",style:{height:"2em",width:"40%"}}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),l,(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""}),(0,i.Wm)(u,{animated:""})])):((0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(h,{innerHTML:r.page.page_content},null,8,["innerHTML"])]))])),_:1},8,["pageTitle"])}var g=a(853),u=a(9755),h=a.n(u),o={components:{IonText:g.yW,IonSkeletonText:g.CK},data(){return{page:null}},created(){this.page_id=this.$route.params.id??0,this.itemGet(this.page_id)},methods:{async itemGet(){let e=null,t=null;Number.isInteger(this.page_id)?e=this.page_id:t=this.page_id;try{this.page=await h().post(this.$heap.state.hostname+"Page/itemGet",{page_id:e,page_name:t})}catch{this.page="error"}}}},W=a(3744);const c=(0,W.Z)(o,[["render",r]]);var _=c}}]);
//# sourceMappingURL=351.77c58339.js.map