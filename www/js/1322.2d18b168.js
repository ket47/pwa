"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[1322],{1322:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var r=s(641),i=s(33);const o=["innerHTML"],a={key:1,class:"ion-padding"},n=["href"],d={style:{display:"grid","grid-template-columns":"repeat(auto-fill, minmax(1fr,600px))"},class:"ion-padding"},h=["href"],l=["src"];function p(e,t,s,p,u,m){const _=(0,r.g2)("base-layout");return(0,r.uX)(),(0,r.Wv)(_,{pageTitle:`Условия доставки ${u.store.store_name||""}`},{default:(0,r.k6)((()=>[u.store_delivery_methods?((0,r.uX)(),(0,r.CE)("div",{key:0,innerHTML:u.store_delivery_methods,class:"ion-padding"},null,8,o)):((0,r.uX)(),(0,r.CE)("div",a,[(0,r.eW)("Для уточнения условий доставки свяжитесь с продавцом "),(0,r.Lk)("a",{href:`tel:${u.store.store_phone}`},(0,i.v_)(u.store.store_phone),9,n)])),(0,r.Lk)("div",d,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.store.images,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t.image_id},[(0,r.Lk)("a",{href:`${e.$heap.state.hostname}/image/get.php/${t.image_hash}.1200.1200.webp`,target:"_new"},[(0,r.Lk)("img",{style:{"border-radius":"10px"},src:`${e.$heap.state.hostname}/image/get.php/${t.image_hash}.1000.1000.webp`},null,8,l)],8,h)])))),128))])])),_:1},8,["pageTitle"])}var u=s(2311),m=s.n(u),_={components:{},setup(){return{}},data(){var e;return{store_id:null!==(e=this.$route.params.id)&&void 0!==e?e:0,store:{},store_delivery_methods:""}},mounted(){this.itemGet()},methods:{async itemGet(){const e={store_id:this.store_id};try{this.store=await m().post(`${this.$heap.state.hostname}Store/itemDeliveryMethodsGet`,e),this.store.store_delivery_methods&&(this.store_delivery_methods=this.store.store_delivery_methods)}catch{}}}},c=s(6262);const g=(0,c.A)(_,[["render",p]]);var v=g}}]);
//# sourceMappingURL=1322.2d18b168.js.map