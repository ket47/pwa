"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[439],{4405:function(e,t,r){r(5306);var o=r(2008);const i={deliveryCalculate(e){if(!e.locations||!e.locations[0]||!e.locations[0].distance)return null;const t=e.locations[0].distance,r=e.store_time_preparation||0;return i.deliveryTimeCalculate(t,r)},deliveryTimeCalculate(e,t){var r;t=parseInt(null!==(r=t)&&void 0!==r?r:o.Z.getters.settings.delivery.timePreparationDefault);const i=parseInt(o.Z.getters.settings.delivery.timeDelta),n=parseInt(o.Z.getters.settings.delivery.speed),a=5*Math.round(e/n*60/5)+t,s=a>i?a-i:a,l=s+i;return{time:a,timeMin:s,timeMax:l}},render(e,t){for(let r in t)e=e.replace(`{{${r}}}`,t[r]);return e}};t["Z"]=i},5265:function(e,t,r){r.d(t,{Z:function(){return v}});var o=r(6252);const i=(0,o.Uk)("Привязка новой карты"),n=(0,o.Uk)("Оплата картой"),a=["src"],s={key:0,style:{position:"fixed",top:"200px",left:"calc( 50% - 50px )"}},l=["src"];function d(e,t,r,d,u,c){const m=(0,o.up)("ion-title"),p=(0,o.up)("ion-icon"),y=(0,o.up)("ion-toolbar"),_=(0,o.up)("ion-header"),h=(0,o.up)("ion-content");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{color:"secondary"},{default:(0,o.w5)((()=>["card_registering"==this.order_data?((0,o.wg)(),(0,o.j4)(m,{key:0},{default:(0,o.w5)((()=>[i])),_:1})):((0,o.wg)(),(0,o.j4)(m,{key:1},{default:(0,o.w5)((()=>[n])),_:1})),(0,o.Wm)(p,{icon:d.closeOutline,onClick:t[0]||(t[0]=e=>{d.closeModal()}),slot:"end",size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o._)("iframe",{src:u.paymentLink,id:"paymentFrame1",style:{width:"100%",height:"calc( 100% - 5px )",border:"none"},onLoad:t[1]||(t[1]=e=>c.onLoad())},null,40,a),u.loadAnimation?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("img",{src:d.loading},null,8,l)])):(0,o.kq)("",!0)])),_:1})],64)}var u=r(2066),c=r(8903),m=r(659),p=r(9755),y=r.n(p),_={components:{IonTitle:u.wd,IonIcon:u.gu,IonToolbar:u.sr,IonHeader:u.Gu,IonContent:u.W2},props:["order_data"],setup(){const e=function(){u.Fy.dismiss()};return{closeModal:e,closeOutline:c.fID,cardOutline:c.pvm,loading:m}},data(){return{paymentLink:null,loadAnimation:1}},mounted(){this.listenFrame(),this.postToIframe()},methods:{async postToIframe(){try{if("card_registering"==this.order_data)return void(this.paymentLink=await y().post(this.$heap.state.hostname+"CardAcquirer/cardRegisterLinkGet"));this.paymentLink=await y().post(this.$heap.state.hostname+"CardAcquirer/paymentLinkGet",this.order_data)}catch(r){var e,t;const o=null===r||void 0===r||null===(e=r.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;"nocardid"==o?this.$flash("Не удалось добавить карту"):this.$flash("Нет возможности принять оплату картой"),this.closeModal()}},onLoad(){this.loadAnimation=0},listenFrame(){let e=this;window.addEventListener("message",(t=>{"paymentOk"!=t.data&&"paymentNo"!=t.data||e.closeModal()}))}}},h=r(3744);const k=(0,h.Z)(_,[["render",d]]);var v=k},9064:function(e,t,r){r.d(t,{Z:function(){return b}});var o=r(6252),i=r(3577);const n={class:"delivery-adress",style:{"font-size":"1em"}},a={class:"center"},s=(0,o.Uk)("Адрес доставки заказа"),l={class:"center"},d={key:0,class:"delivery-time"},u=(0,o.Uk)("мин"),c=(0,o.Uk)(" Выбрать адрес доставки ");function m(e,t,r,m,p,y){const _=(0,o.up)("ion-text"),h=(0,o.up)("ion-icon"),k=(0,o.up)("ion-note"),v=(0,o.up)("ion-label"),f=(0,o.up)("ion-item"),w=(0,o.up)("ion-textarea");return(0,o.wg)(),(0,o.iD)(o.HY,null,[y.isMainLocationSet?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:t[0]||(t[0]=e=>y.selectDeliveryAddress()),class:"selector"},[(0,o._)("div",n,[(0,o._)("div",a,[(0,o.Wm)(_,{size:"small",color:"medium"},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(h,{icon:m.chevronDownOutline,color:"medium"},null,8,["icon"])]),(0,o._)("div",l,[(0,o.Wm)(h,{slot:"start",color:"secondary",icon:m.location},null,8,["icon"]),(0,o.Wm)(_,{color:"dark"},{default:(0,o.w5)((()=>{var t,r;return[(0,o._)("b",null,(0,i.zw)(null===(t=e.$heap.state.user)||void 0===t||null===(r=t.location_main)||void 0===r?void 0:r.location_address),1)]})),_:1})])]),r.deliveryTime?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(_,{style:{"font-size":"24px",color:"var(--ion-color-secondary-contrast)"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.deliveryTime.time),1)])),_:1}),(0,o.Wm)(k,{style:{"font-size":"10px",color:"var(--ion-color-secondary-contrast)"}},{default:(0,o.w5)((()=>[u])),_:1})])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.j4)(f,{key:1,detail:"",button:"",onClick:t[1]||(t[1]=e=>y.selectDeliveryAddress()),class:"selector"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{slot:"start",style:{color:"var(--ion-color-primary)"},icon:m.location},null,8,["icon"]),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1})),r.showComment&&e.$heap.state.user.location_main?((0,o.wg)(),(0,o.j4)(f,{key:2},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{rows:"1",placeholder:"комментарий к адресу",onChange:t[2]||(t[2]=e=>y.locationCommentChanged()),modelValue:e.$heap.state.user.location_main.location_comment,"onUpdate:modelValue":t[3]||(t[3]=t=>e.$heap.state.user.location_main.location_comment=t)},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0)],64)}r(8862);var p=r(2066),y=r(8903),_=r(2008),h=r(6488),k=r(9042),v=r(9755),f=r.n(v),w={props:["deliveryTime","showComment"],components:{IonIcon:p.gu,IonTextarea:p.g2,IonText:p.yW,IonNote:p.uN,IonLabel:p.Q$,IonItem:p.Ie},setup(){return{location:y.xhW,chevronDownOutline:y.Y$3}},data(){return{location_main:_.Z.state.user.location_main}},created(){let e=this;k.Z.on("userMainLocationSet",(t=>{e.location_main=t})),k.Z.on("userGet",(t=>{e.location_main=t.location_main}))},methods:{selectDeliveryAddress(){h.Z.push("/user/user-addresses")},async locationCommentChanged(){const e={location_id:_.Z.state.user.location_main.location_id,location_comment:_.Z.state.user.location_main.location_comment};f().post(this.$heap.state.hostname+"Location/itemUpdate",JSON.stringify(e))}},computed:{isSignedIn(){return _.Z.state.user.user_id&&_.Z.state.user.user_id>-1},isMainLocationSet(){return this.location_main?1:0}}},g=r(3744);const C=(0,g.Z)(w,[["render",m],["__scopeId","data-v-48384b7b"]]);var b=C},5439:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ce}});var o=r(6252),i=r(3577);const n=e=>((0,o.dD)("data-v-7109879b"),e=e(),(0,o.Cn)(),e),a=n((()=>(0,o._)("label",{for:"store_correction_allow",style:{"font-size":"0.9em"},color:"medium"}," Разрешить изменять заказ ",-1))),s=(0,o.Uk)("Способы доставки"),l={for:"delivery_by_courier"},d=(0,o.Uk)("Доставит "),u={slot:"end"},c=["checked"],m={for:"delivery_by_store"},p=(0,o.Uk)("Доставит "),y={slot:"end"},_=["checked"],h=n((()=>(0,o._)("label",{for:"pickup_by_customer"},"Самовывоз",-1))),k={slot:"end"},v=["checked"],f=(0,o.Uk)("Способы оплаты"),w=n((()=>(0,o._)("label",{for:"payment_cash"},"Оплата наличными",-1))),g={slot:"end"},C=["checked"],b=n((()=>(0,o._)("label",{for:"payment_cash_store"},"Оплата наличными продавцу",-1))),$={slot:"end"},W=["checked"],I={key:7},O=n((()=>(0,o._)("label",{for:"payment_card"},"Оплата картой без привязки",-1))),R={slot:"end"},B=["checked"],S={for:"use_card_recurrent"},T={slot:"end"},U=["checked"],L=(0,o.Uk)("Выбрать другую карту"),z=(0,o.Uk)("Привязать карту"),D=(0,o.Uk)("Итог"),j=(0,o.Uk)(" Сумма заказа "),q={key:8},x={slot:"start"},A={class:"righttop_badge"},Z={slot:"start"},G={class:"righttop_badge"},P=(0,o.Uk)(" Выберите скидку "),M={key:9},N={slot:"start"},V=(0,o.Uk)(" Скидка доступна при доставке "),F=(0,o.Uk)(" Доставка "),H=(0,o.Uk)(" Итого к оплате "),E=(0,o.Uk)(" Я согласен(на) с "),J=(0,o.Uk)("офертой об оказании услуг доставки"),Y=(0,o.Uk)("Оплатить картой"),K=(0,o.Uk)("Послать заказ");function Q(e,t,r,n,Q,X){const ee=(0,o.up)("user-address-widget"),te=(0,o.up)("ion-item-divider"),re=(0,o.up)("ion-textarea"),oe=(0,o.up)("ion-item"),ie=(0,o.up)("ion-checkbox"),ne=(0,o.up)("ion-icon"),ae=(0,o.up)("ion-img"),se=(0,o.up)("ion-label"),le=(0,o.up)("ion-text"),de=(0,o.up)("ion-badge"),ue=(0,o.up)("router-link"),ce=(0,o.up)("ion-list"),me=(0,o.up)("ion-card-content"),pe=(0,o.up)("ion-card"),ye=(0,o.up)("ion-button"),_e=(0,o.up)("base-layout");return(0,o.wg)(),(0,o.j4)(_e,{pageTitle:"Оформление заказа",pageDefaultBackLink:"/order/order-list"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{deliveryTime:Q.deliveryTime,showComment:"1"},null,8,["deliveryTime"]),Q.order?((0,o.wg)(),(0,o.j4)(ce,{key:0},{default:(0,o.w5)((()=>{var r;return[(0,o.Wm)(te,null,{default:(0,o.w5)((()=>{var e,t,r;return[(0,o.Uk)("Заказ #"+(0,i.zw)(null===(e=Q.order)||void 0===e?void 0:e.order_id)+' из "'+(0,i.zw)(null===(t=Q.order)||void 0===t||null===(r=t.store)||void 0===r?void 0:r.store_name)+'"',1)]})),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(re,{rows:"2",placeholder:"комментарий к заказу",onChange:t[0]||(t[0]=e=>X.orderDescriptionChanged()),modelValue:Q.order.order_description,"onUpdate:modelValue":t[1]||(t[1]=e=>Q.order.order_description=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[a,(0,o.Wm)(ie,{slot:"end",id:"store_correction_allow",modelValue:Q.storeCorrectionAllow,"onUpdate:modelValue":t[2]||(t[2]=e=>Q.storeCorrectionAllow=e)},null,8,["modelValue"])])),_:1}),Q.storeIsReady?((0,o.wg)(),(0,o.j4)(te,{key:0},{default:(0,o.w5)((()=>[s])),_:1})):(0,o.kq)("",!0),X.deliveryByCourierRule?((0,o.wg)(),(0,o.j4)(oe,{key:1,button:"",onClick:t[3]||(t[3]=e=>X.tariffRuleSet(X.deliveryByCourierRule))},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.rocketOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,o._)("label",l,[d,(0,o._)("b",null,(0,i.zw)(e.$heap.state.settings.app_title),1)]),(0,o._)("div",u,[(0,o._)("input",{type:"radio",name:"deliveryBy",id:"delivery_by_courier",value:"courier",checked:X.deliveryByCourierRuleChecked},null,8,c)])])),_:1})):(0,o.kq)("",!0),X.deliveryByStoreRule?((0,o.wg)(),(0,o.j4)(oe,{key:2,button:"",onClick:t[4]||(t[4]=e=>X.tariffRuleSet(X.deliveryByStoreRule))},{default:(0,o.w5)((()=>{var e,t;return[(0,o.Wm)(ne,{icon:n.rocketOutline,slot:"start"},null,8,["icon"]),(0,o._)("label",m,[p,(0,o._)("b",null,(0,i.zw)(null===(e=Q.order)||void 0===e||null===(t=e.store)||void 0===t?void 0:t.store_name),1)]),(0,o._)("div",y,[(0,o._)("input",{type:"radio",name:"deliveryBy",id:"delivery_by_store",value:"store",checked:X.deliveryByStoreRuleChecked},null,8,_)])]})),_:1})):(0,o.kq)("",!0),X.pickupByCustomerRule?((0,o.wg)(),(0,o.j4)(oe,{key:3,button:"",onClick:t[5]||(t[5]=e=>X.tariffRuleSet(X.pickupByCustomerRule))},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.storefrontOutline,slot:"start"},null,8,["icon"]),h,(0,o._)("div",k,[(0,o._)("input",{type:"radio",name:"deliveryBy",id:"pickup_by_customer",value:"store",checked:X.pickupByCustomerRuleChecked},null,8,v)])])),_:1})):(0,o.kq)("",!0),Q.storeIsReady?((0,o.wg)(),(0,o.j4)(te,{key:4},{default:(0,o.w5)((()=>[f])),_:1})):(0,o.kq)("",!0),1==Q.tariffRule.paymentByCash?((0,o.wg)(),(0,o.j4)(oe,{key:5,button:"",onClick:t[6]||(t[6]=e=>Q.paymentType="use_cash")},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.cashOutline,slot:"start",color:"primary"},null,8,["icon"]),w,(0,o._)("div",g,[(0,o._)("input",{type:"radio",name:"paymentType",id:"payment_cash",value:"cash",checked:"use_cash"==Q.paymentType},null,8,C)])])),_:1})):(0,o.kq)("",!0),1==Q.tariffRule.paymentByCashStore?((0,o.wg)(),(0,o.j4)(oe,{key:6,button:"",onClick:t[7]||(t[7]=e=>Q.paymentType="use_cash_store")},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.cashOutline,slot:"start",color:"primary"},null,8,["icon"]),b,(0,o._)("div",$,[(0,o._)("input",{type:"radio",name:"paymentType",id:"payment_cash_store",value:"cash",checked:"use_cash_store"==Q.paymentType},null,8,W)])])),_:1})):(0,o.kq)("",!0),1==Q.tariffRule.paymentByCard?((0,o.wg)(),(0,o.iD)("div",I,[(0,o.Wm)(oe,{button:"",onClick:t[8]||(t[8]=e=>Q.paymentType="use_card")},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.cardOutline,slot:"start",color:"primary"},null,8,["icon"]),O,(0,o._)("div",R,[(0,o._)("input",{type:"radio",name:"paymentType",id:"payment_card",value:"card",checked:"use_card"==Q.paymentType},null,8,B)])])),_:1}),null!==(r=Q.bankCard)&&void 0!==r&&r.card_type?((0,o.wg)(),(0,o.j4)(oe,{key:0,button:"",onClick:t[9]||(t[9]=e=>Q.paymentType="use_card_recurrent")},{default:(0,o.w5)((()=>{var e;return["mir"==Q.bankCard.card_type?((0,o.wg)(),(0,o.j4)(ae,{key:0,class:"card_type",src:`/img/icons/card-${Q.bankCard.card_type}.svg`,slot:"start"},null,8,["src"])):"visa"==Q.bankCard.card_type?((0,o.wg)(),(0,o.j4)(ae,{key:1,class:"card_type",src:`/img/icons/card-${Q.bankCard.card_type}.svg`,slot:"start"},null,8,["src"])):"mastercard"==Q.bankCard.card_type?((0,o.wg)(),(0,o.j4)(ae,{key:2,class:"card_type",src:`/img/icons/card-${Q.bankCard.card_type}.svg`,slot:"start"},null,8,["src"])):((0,o.wg)(),(0,o.j4)(ne,{key:3,src:n.cardOutline,slot:"start",color:"primary"},null,8,["src"])),(0,o._)("label",S,"Оплата картой "+(0,i.zw)(null===(e=Q.bankCard)||void 0===e?void 0:e.card_mask),1),(0,o._)("div",T,[(0,o._)("input",{type:"radio",name:"paymentType",id:"use_card_recurrent",value:"registered_card",checked:"use_card_recurrent"==Q.paymentType},null,8,U)])]})),_:1})):(0,o.kq)("",!0),Q.recurrentPaymentAllow?((0,o.wg)(),(0,o.j4)(oe,{key:1,button:"",detail:"",onClick:t[10]||(t[10]=t=>e.$router.push("/user/user-cards"))},{default:(0,o.w5)((()=>{var e;return[null!==(e=Q.bankCard)&&void 0!==e&&e.card_type?((0,o.wg)(),(0,o.j4)(se,{key:0,color:"medium"},{default:(0,o.w5)((()=>[L])),_:1})):((0,o.wg)(),(0,o.j4)(se,{key:1,color:"medium"},{default:(0,o.w5)((()=>[z])),_:1}))]})),_:1})):(0,o.kq)("",!0)])):(0,o.kq)("",!0),(0,o.Wm)(te,null,{default:(0,o.w5)((()=>[D])),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.cubeOutline,slot:"start",color:"primary"},null,8,["icon"]),j,(0,o.Wm)(le,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(Q.order.order_sum_product)+(0,i.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1}),X.deliveryByCourierRuleChecked?((0,o.wg)(),(0,o.iD)("div",q,[Q.promo?((0,o.wg)(),(0,o.j4)(oe,{key:0,button:"",onClick:t[11]||(t[11]=e=>X.promoPick()),color:"success"},{default:(0,o.w5)((()=>[(0,o._)("div",x,[(0,o.Wm)(ne,{icon:n.giftOutline,color:"primary",style:{"font-size":"1.5em"}},null,8,["icon"]),(0,o._)("sup",A,[Q.promoCount>0?((0,o.wg)(),(0,o.j4)(de,{key:0,color:"secondary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(Q.promoCount),1)])),_:1})):(0,o.kq)("",!0)])]),(0,o.Uk)(" "+(0,i.zw)(Q.promo.promo_name)+" ",1),(0,o.Wm)(le,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)("-"+(0,i.zw)(Q.order.order_sum_promo)+(0,i.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1})):((0,o.wg)(),(0,o.j4)(oe,{key:1,button:"",detail:"",onClick:t[12]||(t[12]=e=>X.promoPick())},{default:(0,o.w5)((()=>[(0,o._)("div",Z,[(0,o.Wm)(ne,{icon:n.giftOutline,color:"primary",style:{"font-size":"1.5em"}},null,8,["icon"]),(0,o._)("sup",G,[Q.promoCount>0?((0,o.wg)(),(0,o.j4)(de,{key:0,color:"secondary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(Q.promoCount),1)])),_:1})):(0,o.kq)("",!0)])]),P])),_:1}))])):((0,o.wg)(),(0,o.iD)("div",M,[(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o._)("div",N,[(0,o.Wm)(ne,{icon:n.giftOutline,color:"medium",style:{"font-size":"1.5em"}},null,8,["icon"])]),(0,o.Wm)(le,{color:"medium"},{default:(0,o.w5)((()=>[V,(0,o._)("b",null,(0,i.zw)(e.$heap.state.settings.app_title),1)])),_:1})])),_:1})])),Q.order_sum_delivery>0?((0,o.wg)(),(0,o.j4)(oe,{key:10},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.rocketOutline,slot:"start",color:"primary"},null,8,["icon"]),F,(0,o.Wm)(le,{slot:"end"},{default:(0,o.w5)((()=>{var t;return[(0,o.Uk)((0,i.zw)(null!==(t=Q.order_sum_delivery)&&void 0!==t?t:0)+(0,i.zw)(e.$heap.state.currencySign),1)]})),_:1})])),_:1})):(0,o.kq)("",!0),X.order_sum_total>0?((0,o.wg)(),(0,o.j4)(oe,{key:11},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{icon:n.walletOutline,slot:"start",color:"primary"},null,8,["icon"]),H,(0,o.Wm)(le,{slot:"end"},{default:(0,o.w5)((()=>[(0,o._)("b",null,(0,i.zw)(X.order_sum_total),1),(0,o.Uk)((0,i.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(oe,{lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(le,{style:{"font-size":"0.9em"}},{default:(0,o.w5)((()=>[E,(0,o.Wm)(ue,{to:"/page/rules-customer"},{default:(0,o.w5)((()=>[J])),_:1})])),_:1}),(0,o.Wm)(ie,{slot:"end",modelValue:Q.termsAccepted,"onUpdate:modelValue":t[13]||(t[13]=e=>Q.termsAccepted=e)},null,8,["modelValue"])])),_:1})]})),_:1})):(0,o.kq)("",!0),X.checkoutError?((0,o.wg)(),(0,o.j4)(pe,{key:1,color:"warning"},{default:(0,o.w5)((()=>[(0,o.Wm)(me,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(X.checkoutError),1)])),_:1})])),_:1})):(0,o.kq)("",!0),"use_card"==Q.paymentType||"use_card_recurrent"==Q.paymentType?((0,o.wg)(),(0,o.j4)(ye,{key:2,expand:"block",onClick:t[14]||(t[14]=e=>X.proceed()),disabled:X.checkoutError},{default:(0,o.w5)((()=>[Y])),_:1},8,["disabled"])):((0,o.wg)(),(0,o.j4)(ye,{key:3,expand:"block",onClick:t[15]||(t[15]=e=>X.proceed()),disabled:X.checkoutError},{default:(0,o.w5)((()=>[K])),_:1},8,["disabled"]))])),_:1})}r(8862);var X=r(7782),ee=r(4405),te=r(9042),re=r(6488),oe=r(9755),ie=r.n(oe),ne=r(8764),ae=r(8903),se=r(2066),le=r(9064),de=r(5265);const ue=(0,o.Uk)("Ваши доступные скидки"),ce=(0,o.Uk)("Без скидки"),me=(0,o.Uk)("К сожалению, доступных скидок нет."),pe=(0,o.Uk)("Показать все ваши скидки "),ye={key:0};function _e(e,t,r,n,a,s){const l=(0,o.up)("ion-title"),d=(0,o.up)("ion-icon"),u=(0,o.up)("ion-toolbar"),c=(0,o.up)("ion-header"),m=(0,o.up)("ion-skeleton-text"),p=(0,o.up)("ion-item"),y=(0,o.up)("ion-list"),_=(0,o.up)("ion-text"),h=(0,o.up)("ion-content");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"secondary"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[ue])),_:1}),(0,o.Wm)(d,{icon:n.closeOutline,onClick:t[0]||(t[0]=t=>e.$topic.publish("dismissModal")),slot:"end",size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[null==a.promoList?((0,o.wg)(),(0,o.j4)(y,{key:0},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)([1,2,3],(e=>(0,o.Wm)(p,{lines:"none",key:e},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{slot:"start",icon:n.giftOutline,color:"primary"},null,8,["icon"]),(0,o.Wm)(m,{style:{width:"70%"}}),(0,o.Wm)(m,{slot:"end",style:{width:"50px"}})])),_:2},1024))),64))])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>{var r;return[null!==(r=a.promoList)&&void 0!==r&&r.length?((0,o.wg)(),(0,o.j4)(p,{key:0,button:"",onClick:t[1]||(t[1]=e=>s.promoPick({}))},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{slot:"start",icon:n.banOutline,color:"danger"},null,8,["icon"]),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[ce])),_:1}),(0,o.Wm)(_,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)("0"+(0,i.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1})):((0,o.wg)(),(0,o.j4)(p,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{slot:"start",icon:n.giftOutline,color:"medium"},null,8,["icon"]),(0,o.Wm)(_,{color:"medium"},{default:(0,o.w5)((()=>[me])),_:1})])),_:1})),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.promoList,(t=>((0,o.wg)(),(0,o.j4)(p,{key:t.promo_id,button:"",onClick:e=>s.promoPick(t)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{slot:"start",icon:n.giftOutline,color:"primary"},null,8,["icon"]),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.promo_name),1)])),_:2},1024),(0,o.Wm)(_,{slot:"end",color:"success"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.promo_value)+(0,i.zw)(e.$heap.state.currencySign),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),(0,o.Wm)(p,{button:"",detail:"",onClick:t[2]||(t[2]=t=>{e.$router.push("/user/user-promo"),e.$topic.publish("dismissModal")})},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>{var e;return[pe,null!==(e=a.promoList)&&void 0!==e&&e.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",ye,"или получить ещё"))]})),_:1})])),_:1})]})),_:1})])),_:1})],64)}var he={components:{IonIcon:se.gu,IonToolbar:se.sr,IonHeader:se.Gu,IonContent:se.W2,IonTitle:se.wd,IonList:se.q_,IonItem:se.Ie,IonText:se.yW,IonSkeletonText:se.CK},setup(){return{giftOutline:ae._$o,closeOutline:ae.fID,banOutline:ae.L6S}},data(){return{promoList:null}},mounted(){this.listGet()},methods:{async listGet(){try{const e={type:"active",user_id:this.$heap.state.user.user_id};this.promoList=await ie().post(`${this.$heap.state.hostname}Promo/listGet`,e)}catch{}},promoPick(e){se.Fy.dismiss(e)}}},ke=r(3744);const ve=(0,ke.Z)(he,[["render",_e]]);var fe=ve,we={components:{UserAddressWidget:le.Z,IonTextarea:se.g2,IonItemDivider:se.rH,IonIcon:se.gu,IonItem:se.Ie,IonList:se.q_,IonText:se.yW,IonButton:se.YG,IonCheckbox:se.nz,IonCard:se.PM,IonCardContent:se.FN,IonBadge:se.yp,IonImg:se.Xz,IonLabel:se.Q$},setup(){return{cardOutline:ae.pvm,cashOutline:ae.zaw,giftOutline:ae._$o,cubeOutline:ae.XFf,walletOutline:ae.S5P,pieChartOutline:ae.qlh,storefrontOutline:ae.qRG,ordersIcon:ne,rocketOutline:ae.G$D,documentTextOutline:ae.L82}},data(){var e,t;return{order_id:this.$route.params.id,order:null,order_sum_delivery:0,storeCorrectionAllow:0==localStorage.storeCorrectionAllow?0:1,promo:null,promoCount:0,deliveryTime:{},termsAccepted:1,storeIsReady:0,errNotfound:0,paymentType:"use_card",bankCard:null,recurrentPaymentAllow:1==(null===(e=this.$heap.state.settings)||void 0===e||null===(t=e.other)||void 0===t?void 0:t.recurrentPaymentAllow)?1:0,tariffRule:{},tariffRuleList:[]}},computed:{checkoutError(){var e,t,r,o,i,n,a,s;return!!this.order&&(this.order_sum_total<2*this.order.order_sum_promo?`Сумма к оплате со скидкой ${this.order.order_sum_promo}${this.$heap.state.currencySign} должна быть больше чем ${2*this.order.order_sum_promo}${this.$heap.state.currencySign}`:1*this.order.order_sum_product<1*(null===(e=this.order)||void 0===e||null===(t=e.store)||void 0===t?void 0:t.store_minimal_order)?`Сумма заказа у "${null===(r=this.order)||void 0===r||null===(o=r.store)||void 0===o?void 0:o.store_name}" должна быть больше чем ${null===(i=this.order)||void 0===i||null===(n=i.store)||void 0===n?void 0:n.store_minimal_order}${this.$heap.state.currencySign}`:1*this.order_sum_total<=1*this.order_sum_delivery?`Сумма к оплате должна быть больше чем ${this.order_sum_delivery}${this.$heap.state.currencySign}`:this.order_sum_total<=10?"Сумма к оплате слишком маленькая":0==this.storeIsReady?`К сожалению, ${(null===(a=this.order)||void 0===a||null===(s=a.store)||void 0===s?void 0:s.store_name)||"продавец"} не готов к заказам`:0==this.termsAccepted?"К сожалению, мы не можем доставить вам заказ, без согласия с условиями":1==this.errNotfound?"Заказ удален":1==this.tariffRule.deliveryByCourier&&0==this.tariffRule.deliveryIsReady&&"К сожалению, нет доступных курьеров")},order_sum_total(){return this.order.order_sum_product-this.order.order_sum_promo+this.order_sum_delivery},deliveryByCourierRule(){var e;return null===(e=this.tariffRuleList)||void 0===e?void 0:e.filter((e=>1==e.deliveryByCourier)).shift()},deliveryByCourierRuleChecked(){return 1==this.tariffRule.deliveryByCourier},deliveryByStoreRule(){var e;return null===(e=this.tariffRuleList)||void 0===e?void 0:e.filter((e=>1==e.deliveryByStore)).shift()},deliveryByStoreRuleChecked(){return 1==this.tariffRule.deliveryByStore},pickupByCustomerRule(){var e;return null===(e=this.tariffRuleList)||void 0===e?void 0:e.filter((e=>1==e.pickupByCustomer)).shift()},pickupByCustomerRuleChecked(){return 1==this.tariffRule.pickupByCustomer}},mounted(){this.checkoutDataGet()},ionViewDidEnter(){this.checkoutDataGet()},methods:{async itemLoad(){try{this.order=await ie().post(`${this.$heap.state.hostname}Order/itemGet`,{order_id:this.order_id}),0==this.order_sum_delivery&&(this.order_sum_delivery,this.order.order_sum_delivery),this.$heap.commit("setCurrentOrder",this.order)}catch(e){}},async checkoutDataGet(){if(this.order=this.$heap.state.currentOrder,this.order||await this.itemLoad(),this.order)if("customer_confirmed"==this.order.stage_current)try{const e=await ie().post(`${this.$heap.state.hostname}Order/itemCheckoutDataGet`,{order_id:this.order.order_id});this.deliveryTime=ee.Z.deliveryTimeCalculate(e.Location_distanceHolderGet,null),this.promo=e.Promo_itemLinkGet,this.promoCount=e.Promo_listGet,this.storeIsReady=Array.isArray(e.Store_deliveryOptions)?1:0,this.bankCard=null===e||void 0===e?void 0:e.bankCard,this.tariffRuleList=e.Store_deliveryOptions,this.tariffRuleSet(this.tariffRuleList[0]||{})}catch(e){const t=null===e||void 0===e?void 0:e.responseJSON;if(!t)return!1;const r=t.messages.error;switch(r){case"not_ready":case"no_tariff":this.storeIsReady=0;break;default:this.errNotfound=1}return!1}else this.$router.push("order-"+this.order.order_id);else this.$flash("Заказ не найден")},tariffRuleSet(e){var t;this.tariffRule=e,this.order_sum_delivery=e.order_sum_delivery,this.paymentType="use_card",null!==(t=this.bankCard)&&void 0!==t&&t.card_type&&(this.paymentType="use_card_recurrent"),1==e.paymentByCashStore?this.paymentType="use_cash_store":1==e.paymentByCash&&(this.paymentType="use_cash"),1!=e.deliveryByCourier&&null!=this.promo&&(this.promoLink({order_id:this.order_id}),this.promo=null)},async orderDescriptionChanged(){const e={order_id:this.order.order_id,order_description:this.order.order_description};X.Z.api.itemUpdate(e)},async proceed(){const e={order_id:this.order.order_id,tariff_id:this.tariffRule.tariff_id,deliveryByStore:this.deliveryByStoreRuleChecked?1:0,deliveryByCourier:this.deliveryByCourierRuleChecked?1:0,pickupByCustomer:this.pickupByCustomerRuleChecked?1:0,paymentByCard:"use_card"==this.paymentType?1:0,paymentByCardRecurrent:"use_card_recurrent"==this.paymentType?1:0,paymentByCash:"use_cash"==this.paymentType?1:0,paymentByCashStore:"use_cash_store"==this.paymentType?1:0,storeCorrectionAllow:this.storeCorrectionAllow?1:0};localStorage.storeCorrectionAllow=this.storeCorrectionAllow?1:0;try{await ie().post(`${this.$heap.state.hostname}Order/itemCheckoutDataSet`,JSON.stringify(e))}catch(o){const e=null===o||void 0===o?void 0:o.responseJSON;if(!e)return!1;e.messages.error;return this.$flash("С заказом возникла проблема"),!1}if(1!=e.paymentByCard){if(1==e.paymentByCardRecurrent){const e={order_id:this.order.order_id,card_id:this.bankCard.card_id};try{await ie().post(`${this.$heap.state.hostname}CardAcquirer/paymentDo`,e)}catch(o){return this.$flash("Оплата привязанной картой не удалась"),!1}}try{await X.Z.api.itemStageCreate(this.order.order_id,"customer_start"),this.$router.push("/order/order-"+this.order.order_id)}catch(o){var t,r;const e=null===o||void 0===o||null===(t=o.responseJSON)||void 0===t||null===(r=t.messages)||void 0===r?void 0:r.error;switch(e){case"order_is_empty":this.$alert("К сожалению, товара не осталось в наличии &#9785;","Заказ пуст");break;case"address_not_set":this.$flash("Необходимо добавить адрес доставки"),this.$topic.publish("dismissModal"),this.$router.push("/user/user-addresses");break}return!1}}else this.paymentFormOpen({order_id:this.order.order_id,order_sum_total:this.order_sum_total,user_id:this.order.owner_id})},async cancel(){this.$router.push("order-"+this.order.order_id)},async paymentFormOpen(e){const t=this,r=await se.Fy.create({component:de.Z,componentProps:{order_data:e},initialBreakpoint:.85,breakpoints:[0,.85,.95]}),o=function(){r.dismiss()};return te.Z.on("dismissModal",o),r.onDidDismiss().then((()=>{t.paymentStatusCheck()})),r.present()},async paymentStatusCheck(){const e={order_id:this.order.order_id};try{const t=await ie().post(this.$heap.state.hostname+"CardAcquirer/statusGet",e);"OK"==t&&re.Z.push("order-"+this.order.order_id)}catch(o){var t,r;this.$flash("Данный заказ не может быть оплачен");const e=null===(t=o.responseJSON)||void 0===t||null===(r=t.messages)||void 0===r?void 0:r.error;"wrong_status"==e&&re.Z.push("order-"+this.order.order_id)}},async promoPick(){var e;const t=await se.Fy.create({component:fe,showBackdrop:!0,backdropDismiss:!0,initialBreakpoint:.6,breakpoints:[0,.6,.75]});t.present(),this.$topic.on("dismissModal",(()=>{t.dismiss()}));const r=await t.onDidDismiss();this.promoLink(r.data),null!==r&&void 0!==r&&null!==(e=r.data)&&void 0!==e&&e.promo_id?this.promo=r.data:this.promo=null},async promoLink(e){try{const t={promo_id:null===e||void 0===e?void 0:e.promo_id,order_id:this.order.order_id};await ie().post(`${this.$heap.state.hostname}Promo/itemLink`,t),this.itemLoad()}catch(t){}},async promoGet(){try{const e={order_id:this.order.order_id};return await ie().post(`${this.$heap.state.hostname}Promo/itemLinkGet`,e)}catch(e){}},async promoCountGet(){try{const e={mode:"count",type:"active",user_id:this.$heap.state.user.user_id};return await ie().post(`${this.$heap.state.hostname}Promo/listGet`,e)}catch(e){}}}};const ge=(0,ke.Z)(we,[["render",Q],["__scopeId","data-v-7109879b"]]);var Ce=ge},659:function(e,t,r){e.exports=r.p+"img/loading.30880178.svg"},8764:function(e,t,r){e.exports=r.p+"img/orders.ea36eab8.svg"}}]);
//# sourceMappingURL=439.895803bc.js.map