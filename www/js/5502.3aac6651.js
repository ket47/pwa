"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[5502],{5502:function(e,t,o){o.r(t),o.d(t,{default:function(){return z}});var a=o(641);const r={key:0,style:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},i={style:{width:"max-content","text-align":"center"}},n=(0,a.Lk)("br",null,null,-1),l=(0,a.Lk)("a",{href:"/order/order-list"},"список заказов",-1);function s(e,t,o,s,d,c){var u;const h=(0,a.g2)("ion-icon"),_=(0,a.g2)("ion-label"),m=(0,a.g2)("shipment-comp"),p=(0,a.g2)("order-tracking-comp"),k=(0,a.g2)("order-info-comp"),f=(0,a.g2)("image-tile-comp"),b=(0,a.g2)("order-history-comp"),g=(0,a.g2)("order-meta-comp"),v=(0,a.g2)("ion-item"),y=(0,a.g2)("ion-list"),F=(0,a.g2)("ion-content"),D=(0,a.g2)("ion-popover"),$=(0,a.g2)("base-layout");return(0,a.uX)(),(0,a.Wv)($,{pageTitle:`Вызов курьера #${d.order_id} ${null!==(u=d.order)&&void 0!==u&&u.deleted_at?"(Удален)":""}`,pageDefaultBackLink:"/order/order-list"},{default:(0,a.k6)((()=>{var e,o,u,$;return["notfound"==d.order?((0,a.uX)(),(0,a.CE)("div",r,[(0,a.Lk)("div",i,[(0,a.bF)(h,{icon:s.sparklesOutline,size:"large"},null,8,["icon"]),(0,a.bF)(_,null,{default:(0,a.k6)((()=>[(0,a.eW)("Заказ не найден")])),_:1}),n,l])])):(0,a.Q3)("",!0),(0,a.bF)(m,{orderData:d.order,onStageCreate:c.onStageCreate,onOrderRefresh:c.itemGet},null,8,["orderData","onStageCreate","onOrderRefresh"]),(0,a.bF)(p,{orderData:d.order},null,8,["orderData"]),(0,a.bF)(k,{orderData:d.order},null,8,["orderData"]),null!==(e=d.order)&&void 0!==e&&e.images?((0,a.uX)(),(0,a.Wv)(f,{key:1,images:null===(o=d.order)||void 0===o?void 0:o.images,image_holder_id:null===(u=d.order)||void 0===u?void 0:u.order_id,controller:"Order",ref:"orderImgs"},null,8,["images","image_holder_id"])):(0,a.Q3)("",!0),(0,a.bF)(b,{orderData:d.order},null,8,["orderData"]),"system_finish"==(null===($=d.order)||void 0===$?void 0:$.stage_current)?((0,a.uX)(),(0,a.Wv)(g,{key:2,orderId:d.order_id},null,8,["orderId"])):(0,a.Q3)("",!0),(0,a.bF)(D,{"is-open":d.isOpenDeliveryRejectionPopover,onDidDismiss:t[3]||(t[3]=e=>d.isOpenDeliveryRejectionPopover=!1)},{default:(0,a.k6)((()=>[(0,a.bF)(F,null,{default:(0,a.k6)((()=>[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(v,{button:!0,detail:!1,onClick:t[0]||(t[0]=e=>c.action_rejected_reason("ДОСТАВКА НЕ УДАЛАСЬ: Отказ клиента"))},{default:(0,a.k6)((()=>[(0,a.bF)(_,null,{default:(0,a.k6)((()=>[(0,a.eW)("Отказ клиента")])),_:1})])),_:1}),(0,a.bF)(v,{button:!0,detail:!1,onClick:t[1]||(t[1]=e=>c.action_rejected_reason("ДОСТАВКА НЕ УДАЛАСЬ: Поломка в пути"))},{default:(0,a.k6)((()=>[(0,a.bF)(_,null,{default:(0,a.k6)((()=>[(0,a.eW)("Поломка в пути")])),_:1})])),_:1}),(0,a.bF)(v,{button:!0,detail:!1,onClick:t[2]||(t[2]=e=>c.action_rejected_reason("ДОСТАВКА НЕ УДАЛАСЬ: Заказ испорчен"))},{default:(0,a.k6)((()=>[(0,a.bF)(_,null,{default:(0,a.k6)((()=>[(0,a.eW)("Заказ испорчен")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-open"])]})),_:1},8,["pageTitle"])}o(3110);var d=o(5480),c=o(5654),u=o(33);const h=e=>((0,a.Qi)("data-v-5deeb742"),e=e(),(0,a.jt)(),e),_={key:0},m=h((()=>(0,a.Lk)("small",null,"Запланированое время доставки",-1))),p=["href"],k={key:0,style:{padding:"10px","background-color":"var(--ion-color-light)",color:"#666","border-radius":"10px",display:"inline-block"}},f=["href"],b=["href"],g={key:0,style:{padding:"10px","background-color":"var(--ion-color-light)",color:"#333","border-radius":"10px",display:"inline-block"}},v=["href"],y={key:1},F=h((()=>(0,a.Lk)("div",{slot:"end",style:{position:"relative",width:"120px","min-height":"48px","background-color":"var(--ion-color-light)"}},null,-1)));function D(e,t,o,r,i,n){const l=(0,a.g2)("ion-icon"),s=(0,a.g2)("ion-label"),d=(0,a.g2)("ion-chip"),c=(0,a.g2)("ion-item"),h=(0,a.g2)("ion-text"),D=(0,a.g2)("ion-item-divider"),$=(0,a.g2)("ion-card-content"),C=(0,a.g2)("ion-card"),O=(0,a.g2)("ion-img"),I=(0,a.g2)("ion-thumbnail"),w=(0,a.g2)("ion-list"),S=(0,a.g2)("ion-accordion"),W=(0,a.g2)("ion-accordion-group"),x=(0,a.g2)("ion-card-title"),X=(0,a.g2)("ion-card-header"),A=(0,a.g2)("ion-button"),L=(0,a.g2)("ion-col"),j=(0,a.g2)("ion-row"),Q=(0,a.g2)("ion-grid"),T=(0,a.g2)("ion-skeleton-text");return o.orderData?((0,a.uX)(),(0,a.CE)("div",_,[(0,a.bF)(w,{lines:"none"},{default:(0,a.k6)((()=>{var i;return[(0,a.bF)(c,null,{default:(0,a.k6)((()=>[o.orderData.stage_current_name?((0,a.uX)(),(0,a.Wv)(d,{key:0,color:"primary",slot:"end"},{default:(0,a.k6)((()=>[(0,a.bF)(l,{icon:r.checkmarkOutline},null,8,["icon"]),(0,a.bF)(s,{color:"dark"},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(o.orderData.stage_current_name),1)])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1}),(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.eW)(" Доставка посылки ")])),_:1}),(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,{src:r.cubeOutline,slot:"start",size:"large",color:"medium",style:{"font-size":"2em"}},null,8,["src"]),(0,a.bF)(h,{color:"dark"},{default:(0,a.k6)((()=>[(0,a.Lk)("b",null,(0,u.v_)(o.orderData.order_description),1)])),_:1})])),_:1}),(0,a.bF)(D,null,{default:(0,a.k6)((()=>[(0,a.eW)("Детали перевозки")])),_:1}),null!==(i=o.orderData)&&void 0!==i&&i.finish_plan_scheduled?((0,a.uX)(),(0,a.Wv)(C,{key:0,color:"primary",onClick:t[0]||(t[0]=e=>n.timePlanInfo())},{default:(0,a.k6)((()=>[(0,a.bF)($,null,{default:(0,a.k6)((()=>{var e;return[m,(0,a.eW)(),(0,a.Lk)("b",null,(0,u.v_)(null===(e=o.orderData)||void 0===e?void 0:e.finish_plan_scheduled),1)]})),_:1})])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,{color:"medium",src:r.locationOutline,slot:"start"},null,8,["src"]),(0,a.eW)(" Откуда ")])),_:1}),(0,a.bF)(c,null,{default:(0,a.k6)((()=>{var t;return[null!==(t=o.orderData.locationStart)&&void 0!==t&&t.image_hash?((0,a.uX)(),(0,a.Wv)(I,{key:0,slot:"start",style:{"--size":"20px"}},{default:(0,a.k6)((()=>{var t;return[(0,a.bF)(O,{src:`${e.$heap.state.hostname}image/get.php/${null===(t=o.orderData.locationStart)||void 0===t?void 0:t.image_hash}.150.150.webp`},null,8,["src"])]})),_:1})):((0,a.uX)(),(0,a.Wv)(l,{key:1,color:"primary",src:r.locationOutline,slot:"start"},null,8,["src"])),(0,a.bF)(h,null,{default:(0,a.k6)((()=>[(0,a.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.orderData.locationStart.location_longitude},${o.orderData.locationStart.location_latitude}&z=19&l=map,trf`,target:"_new"},(0,u.v_)(o.orderData.locationStart.location_address),9,p)])),_:1})]})),_:1}),o.orderData.locationStart.location_comment||o.orderData.locationStart.location_phone>0?((0,a.uX)(),(0,a.Wv)(c,{key:1},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[o.orderData.locationStart.location_comment?((0,a.uX)(),(0,a.CE)("div",k,(0,u.v_)(o.orderData.locationStart.location_comment),1)):(0,a.Q3)("",!0),o.orderData.locationStart.location_phone>0?((0,a.uX)(),(0,a.Wv)(d,{key:1,color:"medium"},{default:(0,a.k6)((()=>[(0,a.bF)(l,{src:r.callOutline},null,8,["src"]),(0,a.Lk)("a",{href:"tel:+"+o.orderData.locationStart.location_phone},"+"+(0,u.v_)(o.orderData.locationStart.location_phone),9,f)])),_:1})):(0,a.Q3)("",!0)])])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(l,{color:"medium",src:r.flagOutline,slot:"start"},null,8,["src"]),(0,a.eW)(" Куда ")])),_:1}),(0,a.bF)(c,null,{default:(0,a.k6)((()=>{var t;return[null!==(t=o.orderData.locationFinish)&&void 0!==t&&t.image_hash?((0,a.uX)(),(0,a.Wv)(I,{key:0,slot:"start",style:{"--size":"20px"}},{default:(0,a.k6)((()=>{var t;return[(0,a.bF)(O,{src:`${e.$heap.state.hostname}image/get.php/${null===(t=o.orderData.locationFinish)||void 0===t?void 0:t.image_hash}.150.150.webp`},null,8,["src"])]})),_:1})):((0,a.uX)(),(0,a.Wv)(l,{key:1,color:"primary",src:r.flagOutline,slot:"start"},null,8,["src"])),(0,a.bF)(h,null,{default:(0,a.k6)((()=>[(0,a.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.orderData.locationFinish.location_longitude},${o.orderData.locationFinish.location_latitude}&z=19&l=map,trf`,target:"_new"},(0,u.v_)(o.orderData.locationFinish.location_address),9,b)])),_:1})]})),_:1}),o.orderData.locationFinish.location_comment||o.orderData.locationFinish.location_phone>0?((0,a.uX)(),(0,a.Wv)(c,{key:2},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,[o.orderData.locationFinish.location_comment?((0,a.uX)(),(0,a.CE)("div",g,(0,u.v_)(o.orderData.locationFinish.location_comment),1)):(0,a.Q3)("",!0),o.orderData.locationFinish.location_phone>0?((0,a.uX)(),(0,a.Wv)(d,{key:1,color:"medium"},{default:(0,a.k6)((()=>[(0,a.bF)(l,{src:r.callOutline},null,8,["src"]),(0,a.Lk)("a",{href:"tel:+"+o.orderData.locationFinish.location_phone},"+"+(0,u.v_)(o.orderData.locationFinish.location_phone),9,v)])),_:1})):(0,a.Q3)("",!0)])])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(D,null,{default:(0,a.k6)((()=>[(0,a.eW)("Итог")])),_:1}),(0,a.bF)(W,null,{default:(0,a.k6)((()=>[(0,a.bF)(S,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{slot:"header"},{default:(0,a.k6)((()=>[(0,a.bF)(l,{icon:r.walletOutline,slot:"start",color:"medium"},null,8,["icon"]),(0,a.bF)(h,{color:"medium"},{default:(0,a.k6)((()=>[(0,a.eW)("Итого: ")])),_:1}),(0,a.bF)(s,{slot:"end",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(o.orderData.order_sum_total)+(0,u.v_)(e.$heap.state.currencySign),1)])),_:1})])),_:1}),(0,a.bF)(w,{slot:"content"},{default:(0,a.k6)((()=>[(0,a.bF)(c,{lines:"none"},{default:(0,a.k6)((()=>[(0,a.bF)(h,{color:"medium"},{default:(0,a.k6)((()=>[(0,a.eW)("Доставка")])),_:1}),(0,a.bF)(s,{slot:"end",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(o.orderData.order_sum_delivery)+(0,u.v_)(e.$heap.state.currencySign),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})]})),_:1}),(0,a.Q3)("",!0),o.orderData.order_objection?((0,a.uX)(),(0,a.Wv)(C,{key:1,color:"warning"},{default:(0,a.k6)((()=>[(0,a.bF)(X,null,{default:(0,a.k6)((()=>[(0,a.bF)(x,null,{default:(0,a.k6)((()=>[(0,a.eW)("Проблема с заказом")])),_:1})])),_:1}),(0,a.bF)($,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(o.orderData.order_objection),1)])),_:1})])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(Q,null,{default:(0,a.k6)((()=>[(0,a.bF)(j,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.nextStageButtons,((e,t)=>((0,a.uX)(),(0,a.Wv)(L,{key:t},{default:(0,a.k6)((()=>{var r,i;return[e[0]?((0,a.uX)(),(0,a.Wv)(A,{key:0,onClick:a=>n.stageCreate(o.orderData.order_id,t,e[1]),expand:"block",color:null!==(r=e[1])&&void 0!==r?r:"primary",fill:null!==(i=e[2])&&void 0!==i?i:"solid"},{default:(0,a.k6)((()=>[(0,a.bF)(l,{slot:"start",src:e.icon},null,8,["src"]),(0,a.eW)(" "+(0,u.v_)(e[0]),1)])),_:2},1032,["onClick","color","fill"])):(0,a.Q3)("",!0)]})),_:2},1024)))),128))])),_:1})])),_:1})])):((0,a.uX)(),(0,a.CE)("div",y,[(0,a.bF)(c,{detail:"",button:"",lines:"none"},{default:(0,a.k6)((()=>[(0,a.bF)(l,{slot:"start",icon:r.storefrontOutline},null,8,["icon"]),(0,a.bF)(T,{animated:"",style:{width:"200px"}})])),_:1}),(0,a.bF)(w,null,{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)([1,2,3],(e=>(0,a.bF)(c,{key:e},{default:(0,a.k6)((()=>[(0,a.bF)(I,{style:{"background-color":"var(--ion-color-light)"}}),(0,a.bF)(Q,null,{default:(0,a.k6)((()=>[(0,a.bF)(L,null,{default:(0,a.k6)((()=>[(0,a.bF)(j,null,{default:(0,a.k6)((()=>[(0,a.bF)(T,{animated:"",style:{width:"100%"}})])),_:1}),(0,a.bF)(j,null,{default:(0,a.k6)((()=>[(0,a.bF)(s,{color:"primary"},{default:(0,a.k6)((()=>[(0,a.bF)(T,{animated:"",style:{width:"100px"}})])),_:1})])),_:1})])),_:1})])),_:1}),F])),_:2},1024))),64))])),_:1}),(0,a.bF)(Q,null,{default:(0,a.k6)((()=>[(0,a.bF)(j,null,{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)([1,2],(e=>(0,a.bF)(L,{key:e},{default:(0,a.k6)((()=>[(0,a.bF)(A,{color:"light",style:{width:"100%"}})])),_:2},1024))),64))])),_:1})])),_:1})]))}var $={props:["orderData"],components:{IonIcon:c.iq,IonText:c.IO,IonLabel:c.he,IonItem:c.uz,IonList:c.nf,IonImg:c.KW,IonThumbnail:c.Zx,IonButton:c.Jm,IonCol:c.hU,IonRow:c.ln,IonGrid:c.lO,IonSkeletonText:c.ds,IonCard:c.b_,IonCardHeader:c.ME,IonCardContent:c.I9,IonCardTitle:c.tN,IonItemDivider:c.Dg,IonAccordion:c.xk,IonAccordionGroup:c.YH,IonChip:c.ZB},setup(){return{add:d.WQq,remove:d.TFI,trash:d.dco,rocketOutline:d.hGQ,storefrontOutline:d.te8,checkmarkOutline:d.g1L,cubeOutline:d.a7r,walletOutline:d.eF1,banOutline:d.Av6,giftOutline:d.Lsq,cardOutline:d.VR9,ribbonOutline:d.rp8,chatboxEllipsesOutline:d.Pkp,locationOutline:d.UN$,flagOutline:d.NBP,chevronDown:d.uaq,addOutline:d.EKF,checkmark:d.AIp,cashOutline:d.A3w,businessOutline:d.FL4,alertCircleOutline:d.ndb,helpCircleOutline:d.W2C,callOutline:d.bNN}},computed:{nextStageButtons(){let e={};for(let t in this.orderData.stage_next)this.orderData.stage_next[t][0]&&(e[t]=this.orderData.stage_next[t],e[t].icon=d.g1L,t.includes("admin")?e[t].icon=d.rp8:t.includes("delivery")?e[t].icon=d.hGQ:t.includes("supplier")&&(e[t].icon=d.te8));return e}},methods:{stageCreate(e,t,o){("danger"!=o||confirm("Вы уверены?"))&&this.$emit("stageCreate",e,t)},async timePlanInfo(){const e=await c.TN.create({header:"Время доставки",message:"Указано приблизительное время. На него влияют длительность приготовления заказа, пробки и другие факторы.",buttons:[{text:"Ок",role:"confirm"}]});await e.present();const{role:t}=await e.onDidDismiss();return"confirm"==t}}},C=o(6262);const O=(0,C.A)($,[["render",D],["__scopeId","data-v-5deeb742"]]);var I=O,w=o(3545),S=o(5251),W=o(3954),x=o(8897),X=o(2943),A=o(7175),L=o(2715),j=o(3201),Q=o(2311),T=o.n(Q),E={components:{ShipmentComp:I,OrderHistoryComp:w.A,OrderMetaComp:W.A,OrderInfoComp:S.A,OrderTrackingComp:x.A,ImageTileComp:A.A,IonLabel:c.he,IonIcon:c.iq,IonContent:c.W9,IonItem:c.uz,IonList:c.nf,IonPopover:c.CF},setup(){return{sparklesOutline:d.isq,chatboxOutline:d.ml_}},data(){return{order_id:this.$route.params.id,order:null,orderAutoloadClock:null,isOpenDeliveryRejectionPopover:!1}},methods:{async itemGet(){try{this.order=await j.A.prePost(`${this.$heap.state.hostname}Shipment/itemGet`,{order_id:this.order_id}),this.order=await j.A.post(`${this.$heap.state.hostname}Shipment/itemGet`,{order_id:this.order_id}),this.itemAutoReload()}catch(e){switch(e.status){case 404:this.$flash("Заказ не найден"),this.order=null,this.$go("/order/order-list");break}}},itemAutoReload(){clearTimeout(this.orderAutoloadClock),this.orderAutoloadClock=setTimeout((()=>{}),6e4)},async onStageCreate(e,t){if(t.includes("action")){t=t.split("_").splice(1).join("_");try{this[t](e)}catch(o){console.log("stage handler not found "+t+": ",o)}}else try{const e={order_id:this.order_id,new_stage:t},o=await T().post(`${this.$heap.state.hostname}Shipment/itemStageCreate`,e);if("ok"==o)return"customer_purged"==t||"customer_deleted"==t?(this.$flash("Заказ удален"),this.order=null,void this.$go("/order/order-list")):(await this.itemGet(),!0)}catch(o){const e=o.responseJSON,t=e.messages.error;switch(t){case"wrong_courier_status":this.$flash("Смена курьера не открыта");break;case"order_is_empty":this.$alert("К сожалению, товара не осталось в наличии &#9785;","Заказ пуст");break;case"photos_must_be_made":this.$flash("Необходимо сфотографировать заказ"),this.action_take_photo();break;case"address_not_set":this.$flash("Необходимо добавить адрес доставки"),this.$go("/modal/user-addresses");break;case"order_sum_exceeded":this.$flash("Сумма заказа должна быть меньше предоплаты");break;case"order_sum_zero":this.$flash("Нельзя завершить пустой заказ, от него можно отказаться.");break;case"forbidden_bycustomer":this.$flash("Запрещено покупателем");break;case"already_payed":this.$flash("Заказ уже оплачен");break;default:this.$flash("Не удалось изменить статус заказа");break}return!1}},async action_confirm(e){const t=await this.onStageCreate(e,"customer_confirmed");t&&this.action_checkout()},async action_checkout(){this.$go(`/modal/shipment-checkout-${this.order_id}`)},async action_objection(){const e=await c.OZ.create({component:X.A,initialBreakpoint:.5,breakpoints:[.5,1],canDissmiss:!0});e.present();const t=await e.onDidDismiss();if(t.data){const e=`ВОЗРАЖЕНИЕ ПОКУПАТЕЛЯ: ${t.data}`,o={order_id:this.order_id,order_objection:e},a=await T().post(`${this.$heap.state.hostname}Shipment/itemUpdate`,o);if("ok"==a){const e=await this.onStageCreate(this.order_id,"customer_disputed");e&&(this.$flash("Ваше возражение принято и будет рассмотрено администратором."),alert("Необходимо сфотографировать заказ"),this.action_take_photo())}}},action_rejected(){this.isOpenDeliveryRejectionPopover=!0},async action_rejected_reason(e){this.isOpenDeliveryRejectionPopover=!1;const t={order_id:this.order_id,order_objection:e};try{await T().post(`${this.$heap.state.hostname}Shipment/itemUpdate`,JSON.stringify(t));await this.onStageCreate(this.order_id,"delivery_rejected"),this.$flash("Вы отказались от доставки")}catch{}},action_take_photo(){this.$refs.orderImgs.take_photo()},async action_courier_assign(){const e="courier",t={status:"ready||busy"},o=await c.OZ.create({component:L.A,componentProps:{itemType:e,filter:t},initialBreakpoint:.75,breakpoints:[.75,1],canDissmiss:!0});o.present(),this.$topic.on("dismissModal",(()=>{o.dismiss()}));const a=await o.onDidDismiss();if(a.data)try{const e={order_id:this.order_id,courier_id:a.data.courier_id};await T().post(`${this.$heap.state.hostname}DeliveryJob/itemAssign`,e),await this.itemGet(),this.$flash("Курьер назначен")}catch{this.$flash("Не удалось назначить курьера")}},async action_customer_start(){this.onStageCreate(this.order_id,"customer_start")},async itemUpdate(e){this.order.deliveryCalculation=await this.itemTotalEstimate()},async itemTotalEstimate(e,t){if(!e||!t)return;const o={start_location_id:e,finish_location_id:t};try{return await T().post(`${this.$heap.state.hostname}Shipment/itemDeliverySumEstimate`,o)}catch(a){}}},ionViewDidEnter(){this.itemGet()},ionViewDidLeave(){clearTimeout(this.orderAutoloadClock)},created(){this.itemGet(),this.$topic.on("orderSumChanged",(()=>this.itemGet("skipCaching"))),this.$topic.on("pushStageChanged",(e=>{var t;(null===(t=this.order)||void 0===t?void 0:t.order_id)==(null===e||void 0===e?void 0:e.order_id)&&this.order.stage_current!=e.stage&&this.itemGet()}))}};const G=(0,C.A)(E,[["render",s]]);var z=G}}]);
//# sourceMappingURL=5502.3aac6651.js.map