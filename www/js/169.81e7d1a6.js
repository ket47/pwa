"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[169],{7169:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=n(6252),i=n(3577);const l=["href"];function o(t,e,n,o,u,s){const r=(0,a.up)("ion-icon"),c=(0,a.up)("ion-row"),d=(0,a.up)("ion-col"),w=(0,a.up)("ion-grid"),m=(0,a.up)("ion-item"),p=(0,a.up)("ion-list"),_=(0,a.up)("ion-skeleton-text"),f=(0,a.up)("ion-label"),g=(0,a.up)("base-layout");return(0,a.wg)(),(0,a.j4)(g,{pageTitle:"Мои чеки"},{default:(0,a.w5)((()=>[u.invoiceList?((0,a.wg)(),(0,a.j4)(p,{key:0},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.invoiceList,(e=>((0,a.wg)(),(0,a.j4)(m,{key:e.trans_id,button:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{icon:o.receiptOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,a._)("a",{href:e?.trans_data?.Registration?.Link,target:"_system"},[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Фискальный чек "+(0,i.zw)(e?.trans_amount)+(0,i.zw)(t.$heap.state.currencySign),1)])),_:2},1024),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" №"+(0,i.zw)(e?.trans_data?.Registration?.FiscalData?.Document)+" от "+(0,i.zw)(e?.trans_data?.Registration?.FiscalData?.Date),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],8,l)])),_:2},1024)))),128))])),_:1})):((0,a.wg)(),(0,a.j4)(p,{key:1},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)([1,2,3],(t=>(0,a.Wm)(m,{key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{style:{"background-color":"var(--ion-color-light)"}}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,{animated:"",style:{width:"100%"}})])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{animated:"",style:{width:"100px"}})])),_:1})])),_:1})])),_:1})])),_:1})])),_:2},1024))),64))])),_:1}))])),_:1})}var u=n(3741),s=n(8903),r=n(9755),c=n.n(r),d={components:{IonList:u.q_,IonItem:u.Ie,IonGrid:u.jY,IonRow:u.Nd,IonCol:u.wI,IonSkeletonText:u.CK,IonLabel:u.Q$,IonIcon:u.gu},setup(){return{receiptOutline:s.d71}},data(){return{invoiceList:null}},methods:{async listGet(){try{const t={trans_tags:"#orderInvoice"};this.invoiceList=await c().post(this.$heap.state.hostname+"Transaction/itemFind",t)}catch{}}},mounted(){this.listGet()}},w=n(3744);const m=(0,w.Z)(d,[["render",o]]);var p=m}}]);
//# sourceMappingURL=169.81e7d1a6.js.map