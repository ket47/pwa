"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[2956],{5265:function(t,e,a){a.d(e,{Z:function(){return w}});var n=a(6252);const i=(0,n.Uk)("Привязка новой карты"),s=(0,n.Uk)("Оплата картой"),o=["src"],r={key:0,style:{position:"fixed",top:"200px",left:"calc( 50% - 50px )"}},l=["src"];function c(t,e,a,c,d,u){const m=(0,n.up)("ion-title"),p=(0,n.up)("ion-icon"),h=(0,n.up)("ion-toolbar"),g=(0,n.up)("ion-header"),k=(0,n.up)("ion-content");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,{color:"secondary"},{default:(0,n.w5)((()=>["card_registering"==this.order_data?((0,n.wg)(),(0,n.j4)(m,{key:0},{default:(0,n.w5)((()=>[i])),_:1})):((0,n.wg)(),(0,n.j4)(m,{key:1},{default:(0,n.w5)((()=>[s])),_:1})),(0,n.Wm)(p,{icon:c.closeOutline,onClick:e[0]||(e[0]=t=>{c.closeModal()}),slot:"end",size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n._)("iframe",{src:d.paymentLink,id:"paymentFrame1",style:{width:"100%",height:"calc( 100% - 5px )",border:"none"},onLoad:e[1]||(e[1]=t=>u.onLoad())},null,40,o),d.loadAnimation?((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("img",{src:c.loading},null,8,l)])):(0,n.kq)("",!0)])),_:1})],64)}var d=a(8292),u=a(8903),m=a(659),p=a(9755),h=a.n(p),g={components:{IonTitle:d.wd,IonIcon:d.gu,IonToolbar:d.sr,IonHeader:d.Gu,IonContent:d.W2},props:["order_data"],setup(){const t=function(){d.Fy.dismiss()};return{closeModal:t,closeOutline:u.fID,cardOutline:u.pvm,loading:m}},data(){return{paymentLink:null,loadAnimation:1}},mounted(){this.listenFrame(),this.postToIframe()},methods:{async postToIframe(){try{if("card_registering"==this.order_data)return void(this.paymentLink=await h().post(this.$heap.state.hostname+"CardAcquirer/cardRegisterLinkGet"));this.paymentLink=await h().post(this.$heap.state.hostname+"CardAcquirer/paymentLinkGet",this.order_data)}catch(a){var t,e;const n=null===a||void 0===a||null===(t=a.responseJSON)||void 0===t||null===(e=t.messages)||void 0===e?void 0:e.error;"nocardid"==n?this.$flash("Не удалось добавить карту"):this.$flash("Нет возможности принять оплату картой"),this.closeModal()}},onLoad(){this.loadAnimation=0},listenFrame(){let t=this;window.addEventListener("message",(e=>{"paymentOk"!=e.data&&"paymentNo"!=e.data||t.closeModal()}))}}},k=a(3744);const y=(0,k.Z)(g,[["render",c]]);var w=y},2956:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var n=a(6252),i=a(3577);const s=(0,n.Uk)("Привязанных карт нет"),o=(0,n.Uk)(" Добавить новую карту ");function r(t,e,a,r,l,c){const d=(0,n.up)("ion-icon"),u=(0,n.up)("ion-skeleton-text"),m=(0,n.up)("ion-item"),p=(0,n.up)("ion-list"),h=(0,n.up)("ion-img"),g=(0,n.up)("ion-label"),k=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(k,{pageTitle:"Мои банковские карты",pageDefaultBackLink:"/user"},{default:(0,n.w5)((()=>{var t;return[null==l.cardList?((0,n.wg)(),(0,n.j4)(p,{key:0},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)([1],(t=>(0,n.Wm)(m,{key:t},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{style:{"background-color":"var(--ion-color-light)"},slot:"start"}),(0,n.Wm)(u,{animated:"",style:{width:"100%"}}),(0,n.Wm)(d,{style:{"background-color":"var(--ion-color-light)"},slot:"end"})])),_:2},1024))),64))])),_:1})):(null===(t=l.cardList)||void 0===t?void 0:t.length)>0?((0,n.wg)(),(0,n.j4)(p,{key:1},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.cardList,((t,e)=>((0,n.wg)(),(0,n.j4)(m,{key:t.order_id,button:""},{default:(0,n.w5)((()=>["mir"==t.card_type?((0,n.wg)(),(0,n.j4)(h,{key:0,class:"card_type",src:`/img/icons/card-${t.card_type}.svg`,slot:"start"},null,8,["src"])):"visa"==t.card_type?((0,n.wg)(),(0,n.j4)(h,{key:1,class:"card_type",src:`/img/icons/card-${t.card_type}.svg`,slot:"start"},null,8,["src"])):"mastercard"==t.card_type?((0,n.wg)(),(0,n.j4)(h,{key:2,class:"card_type",src:`/img/icons/card-${t.card_type}.svg`,slot:"start"},null,8,["src"])):((0,n.wg)(),(0,n.j4)(d,{key:3,src:r.cardOutline,slot:"start",color:"primary"},null,8,["src"])),(0,n.Wm)(g,{onClick:a=>0!=e&&c.itemMainSet(t.card_id),class:(0,i.C_)(0==e?"is_main":"")},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(t.card_mask),1)])),_:2},1032,["onClick","class"]),(0,n.Wm)(d,{icon:r.trashOutline,slot:"end",onClick:e=>c.itemDelete(t.card_id)},null,8,["icon","onClick"])])),_:2},1024)))),128))])),_:1})):((0,n.wg)(),(0,n.j4)(p,{key:2},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,{color:"medium"},{default:(0,n.w5)((()=>[s])),_:1})])),_:1})])),_:1})),(0,n.Wm)(m,{button:"",onClick:e[0]||(e[0]=t=>c.cardRegistrationOpen())},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{icon:r.addOutline,slot:"start"},null,8,["icon"]),o])),_:1})]})),_:1})}var l=a(8292),c=a(8903),d=a(5265),u=a(9042),m=a(9755),p=a.n(m),h={components:{IonList:l.q_,IonItem:l.Ie,IonSkeletonText:l.CK,IonLabel:l.Q$,IonIcon:l.gu,IonImg:l.Xz},setup(){return{cardOutline:c.pvm,addOutline:c.s6O,trashOutline:c.gtu}},data(){return{cardList:null,isOpen:!1,billLink:""}},methods:{async listGet(){try{this.cardList=await p().post(this.$heap.state.hostname+"UserCards/listGet")}catch(t){}},async itemMainSet(t){const e={card_id:t};try{await p().post(`${this.$heap.state.hostname}UserCards/itemMainSet`,e),this.listGet()}catch(a){}},async itemDelete(t){if(!confirm("Вы уверенны?"))return;const e={card_id:t};try{await p().post(`${this.$heap.state.hostname}UserCards/itemDelete`,e),this.listGet()}catch(a){this.flash("Не удалось открепить карту")}},async cardRegistrationOpen(){const t="card_registering",e=this,a=await l.Fy.create({component:d.Z,componentProps:{order_data:t},initialBreakpoint:.85,breakpoints:[0,.85,.95]}),n=function(){a.dismiss()};return u.Z.on("dismissModal",n),a.onDidDismiss().then((()=>{e.cardRegistrationCheck()})),a.present()},async cardRegistrationCheck(){try{const t=await p().post(this.$heap.state.hostname+"CardAcquirer/cardRegisterActivate");"ok"==t&&(this.$flash("Карта успешно привязана"),this.listGet())}catch(t){this.$flash("Не удалось привязать карту")}}},mounted(){this.listGet()}},g=a(3744);const k=(0,g.Z)(h,[["render",r],["__scopeId","data-v-2e696c9d"]]);var y=k},659:function(t,e,a){t.exports=a.p+"img/loading.30880178.svg"}}]);
//# sourceMappingURL=2956.a8a98d62.js.map