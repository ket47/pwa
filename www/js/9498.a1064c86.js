"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[9498],{9498:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(641);const i={key:0,style:{padding:"20px"}},d=(0,n.Lk)("h6",null,"Страница не найдена",-1),l=[d],s={key:1,style:{padding:"20px"}},p=(0,n.Lk)("br",null,null,-1),r={key:2,style:{padding:"10px"}};function u(e,t,a,d,u,g){var m;const o=(0,n.g2)("ion-skeleton-text"),h=(0,n.g2)("ion-text"),b=(0,n.g2)("base-layout");return(0,n.uX)(),(0,n.Wv)(b,{pageTitle:(null===(m=u.page)||void 0===m?void 0:m.page_title)||e.$heap.state.settings.app_title,pageDefaultBackLink:"/user"},{default:(0,n.k6)((()=>["error"==u.page?((0,n.uX)(),(0,n.CE)("div",i,l)):null==u.page?((0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(o,{animated:"",style:{height:"2em",width:"40%"}}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),p,(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""}),(0,n.bF)(o,{animated:""})])):((0,n.uX)(),(0,n.CE)("div",r,[(0,n.bF)(h,{innerHTML:u.page.page_content},null,8,["innerHTML"])]))])),_:1},8,["pageTitle"])}var g=a(5654),m=a(2311),o=a.n(m),h={components:{IonText:g.IO,IonSkeletonText:g.ds},data(){return{page:null}},created(){var e;this.page_id=null!==(e=this.$route.params.id)&&void 0!==e?e:0,this.itemGet(this.page_id)},methods:{async itemGet(){let e=null,t=null;Number.isInteger(this.page_id)?e=this.page_id:t=this.page_id;try{this.page=await o().post(this.$heap.state.hostname+"Page/itemGet",{page_id:e,page_name:t})}catch{this.page="error"}}}},b=a(6262);const c=(0,b.A)(h,[["render",u]]);var k=c}}]);
//# sourceMappingURL=9498.a1064c86.js.map