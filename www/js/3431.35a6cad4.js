"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[3431],{3431:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var i=o(641),n=o(33);const l=["onClick"],r=["onClick"],s={slot:"start"},a={style:{color:"var(--ion-color-primary)"}},d={style:{padding:"5px"}},u={key:0,style:{padding:"5px"}},c=(0,i.Lk)("b",null,"Доставить:",-1),_={key:1,style:{padding:"10px","background-color":"#eee",color:"#333","border-radius":"10px"}},h=(0,i.Lk)("h3",null,"Маршрут",-1),k={style:{color:"var(--ion-color-primary)"}},b={style:{display:"grid","grid-template-columns":"40px auto 20px",width:"100%"}},p={style:{padding:"3px",color:"var(--ion-color-primary)"}},m={style:{padding:"3px",color:"#333"}},f={style:{padding:"3px",color:"#999"}},v={style:{padding:"3px",color:"#333"}},g={key:4,style:{display:"flex","align-items":"center","justify-content":"center",height:"70vh"}},y={key:0,style:{width:"max-content","text-align":"center"}},F=(0,i.Lk)("br",null,null,-1),L={key:1,style:{width:"max-content","text-align":"center"}},W=(0,i.Lk)("br",null,null,-1);function I(e,t,o,I,j,C){const x=(0,i.g2)("ion-segment-button"),$=(0,i.g2)("ion-segment"),w=(0,i.g2)("ion-text"),X=(0,i.g2)("ion-label"),D=(0,i.g2)("ion-item"),O=(0,i.g2)("ion-icon"),T=(0,i.g2)("ion-chip"),S=(0,i.g2)("ion-img"),E=(0,i.g2)("ion-avatar"),Q=(0,i.g2)("ion-list"),z=(0,i.g2)("ion-note"),J=(0,i.g2)("ion-accordion"),A=(0,i.g2)("ion-accordion-group"),G=(0,i.g2)("ion-list-header"),q=(0,i.g2)("ion-skeleton-text"),B=(0,i.g2)("ion-infinite-scroll-content"),M=(0,i.g2)("ion-infinite-scroll"),R=(0,i.g2)("base-layout");return(0,i.uX)(),(0,i.Wv)(R,{"page-title":"Заказы",hideBackLink:"true"},{default:(0,i.k6)((()=>{var o,R,N,K,V;return[(0,i.bF)($,{"swipe-gesture":"true",modelValue:j.orderType,"onUpdate:modelValue":t[0]||(t[0]=e=>j.orderType=e),onIonChange:t[1]||(t[1]=e=>C.listTypeChanged(e)),scrollable:!0},{default:(0,i.k6)((()=>[j.courierJobsInclude?((0,i.uX)(),(0,i.Wv)(x,{key:0,value:"jobs"},{default:(0,i.k6)((()=>[(0,i.eW)(" Задания ")])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(x,{value:"active"},{default:(0,i.k6)((()=>[(0,i.eW)(" Активные ")])),_:1}),(0,i.bF)(x,{value:"done"},{default:(0,i.k6)((()=>[(0,i.eW)(" Завершенные ")])),_:1})])),_:1},8,["modelValue"]),(null===(o=j.orderList)||void 0===o?void 0:o.length)>0?((0,i.uX)(),(0,i.Wv)(Q,{key:0},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(C.orderListComputed,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.order_id,onClick:e=>C.itemClick(t)},[(0,i.bF)(D,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(w,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.eW)("#"+(0,n.v_)(t.order_id),1)])),_:2},1024),1==t.is_shipment?((0,i.uX)(),(0,i.Wv)(X,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)("Вызов курьера "+(0,n.v_)(t.store_name),1)])),_:2},1024)):((0,i.uX)(),(0,i.Wv)(X,{key:1},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.store_name),1)])),_:2},1024)),(0,i.bF)(w,{slot:"end"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.date),1)])),_:2},1024)])),_:2},1024),(0,i.bF)(D,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.bF)(O,{slot:"start",icon:t.icon,color:"primary"},null,8,["icon"]),(0,i.bF)(w,null,{default:(0,i.k6)((()=>[(0,i.bF)(X,null,{default:(0,i.k6)((()=>[(0,i.bF)(T,{color:"medium"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.order_sum_total)+(0,n.v_)(e.$heap.state.currencySign),1)])),_:2},1024),t.stage_current_name?((0,i.uX)(),(0,i.Wv)(T,{key:0,color:t.stage_color},{default:(0,i.k6)((()=>[1==t.is_canceled?((0,i.uX)(),(0,i.Wv)(O,{key:0,icon:I.banOutline},null,8,["icon"])):((0,i.uX)(),(0,i.Wv)(O,{key:1,icon:I.checkmarkOutline},null,8,["icon"])),(0,i.bF)(X,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.stage_current_name),1)])),_:2},1024)])),_:2},1032,["color"])):(0,i.Q3)("",!0)])),_:2},1024)])),_:2},1024),t.image_hash?((0,i.uX)(),(0,i.Wv)(E,{key:0,slot:"end"},{default:(0,i.k6)((()=>[(0,i.bF)(S,{style:{"border-radius":"10px"},src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024)):(0,i.Q3)("",!0)])),_:2},1024)],8,l)))),128))])),_:1})):(0,i.Q3)("",!0),"jobs"==j.orderType&&(null===(R=j.jobList)||void 0===R?void 0:R.length)>0?((0,i.uX)(),(0,i.Wv)(A,{key:1},{default:(0,i.k6)((()=>[(0,i.bF)(J,{value:"oldjobs"},{default:(0,i.k6)((()=>[(0,i.bF)(D,{slot:"header",color:"light"},{default:(0,i.k6)((()=>[(0,i.bF)(X,null,{default:(0,i.k6)((()=>[(0,i.eW)("Задания")])),_:1})])),_:1}),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(C.jobListComputed,(e=>((0,i.uX)(),(0,i.CE)("div",{slot:"content",key:e.order_id,onClick:t=>C.itemClick(e)},[(0,i.bF)(D,{lines:"none",color:"light"},{default:(0,i.k6)((()=>[(0,i.bF)(O,{slot:"start",icon:I.rocketOutline,color:"primary"},null,8,["icon"]),1==e.is_shipment?((0,i.uX)(),(0,i.Wv)(X,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)("Вызов курьера "+(0,n.v_)(e.store_name),1)])),_:2},1024)):((0,i.uX)(),(0,i.Wv)(X,{key:1},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(e.store_name),1)])),_:2},1024)),(0,i.bF)(w,{slot:"end"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(e.date_time),1)])),_:2},1024)])),_:2},1024),(0,i.bF)(D,{lines:"full",color:"light"},{default:(0,i.k6)((()=>[(0,i.Lk)("b",s,[(0,i.Lk)("b",a,(0,n.v_)(e.distance_km),1)]),(0,i.bF)(w,{style:{"margin-bottom":"3px"}},{default:(0,i.k6)((()=>[(0,i.Lk)("div",d,[(0,i.eW)((0,n.v_)(e.location_address)+" ",1),e.location_comment?((0,i.uX)(),(0,i.Wv)(z,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(e.location_comment),1)])),_:2},1024)):(0,i.Q3)("",!0)]),e.finish_location_address?((0,i.uX)(),(0,i.CE)("div",u,[c,(0,i.eW)(" "+(0,n.v_)(e.finish_location_address)+" ",1),e.finish_location_comment?((0,i.uX)(),(0,i.Wv)(z,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(e.finish_location_comment),1)])),_:2},1024)):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0),e.order_description?((0,i.uX)(),(0,i.CE)("div",_,(0,n.v_)(e.order_description),1)):(0,i.Q3)("",!0)])),_:2},1024)])),_:2},1024)],8,r)))),128))])),_:1})])),_:1})):(0,i.Q3)("",!0),"jobs"==j.orderType&&C.routeListGroupped?((0,i.uX)(),(0,i.Wv)(Q,{key:2},{default:(0,i.k6)((()=>[(0,i.bF)(G,null,{default:(0,i.k6)((()=>[h])),_:1}),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(C.routeListGroupped,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.courier_id},[(0,i.bF)(D,{lines:"none"},{default:(0,i.k6)((()=>[t.image_hash?((0,i.uX)(),(0,i.Wv)(E,{key:0,slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(S,{style:{"border-radius":"10px"},src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024)):(0,i.Q3)("",!0),(0,i.bF)(w,null,{default:(0,i.k6)((()=>[(0,i.Lk)("b",null,(0,n.v_)(t.courier_name),1)])),_:2},1024),(0,i.bF)(O,{slot:"end",icon:I.square,style:(0,n.Tr)(`color:${t.actual_color}`)},null,8,["icon","style"])])),_:2},1024),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.jobs,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.job_id},[(0,i.bF)(D,{lines:"none",style:{"--inner-padding-bottom":"0px"},onClick:t=>C.itemClickConfirm(e)},{default:(0,i.k6)((()=>[(0,i.bF)(w,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(e.job_name)+" ",1),(0,i.Lk)("b",k,(0,n.v_)(e.finish_plan_scheduled_date),1)])),_:2},1024),(0,i.bF)(T,{slot:"end",color:e.stage_color},{default:(0,i.k6)((()=>[(0,i.bF)(O,{icon:I.checkmarkOutline},null,8,["icon"]),(0,i.bF)(X,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.Lk)("small",null,(0,n.v_)(e.stage_label),1)])),_:2},1024)])),_:2},1032,["color"])])),_:2},1032,["onClick"]),(0,i.bF)(D,{lines:"full",onClick:t=>C.itemClickConfirm(e)},{default:(0,i.k6)((()=>[(0,i.Lk)("div",b,[(0,i.Lk)("div",p,[(0,i.Lk)("b",null,(0,n.v_)(e.start_plan_date),1)]),(0,i.Lk)("div",m,[(0,i.Lk)("small",null,(0,n.v_)(e.start_address),1)]),(0,i.Lk)("div",null,[(0,i.bF)(O,{icon:I.square,style:(0,n.Tr)(`color:${e.start_color}`)},null,8,["icon","style"])]),(0,i.Lk)("div",f,(0,n.v_)(e.finish_plan_date),1),(0,i.Lk)("div",v,[(0,i.Lk)("small",null,(0,n.v_)(e.finish_address),1)]),(0,i.Lk)("div",null,[(0,i.bF)(O,{icon:I.square,style:(0,n.Tr)(`color:${e.finish_color}`)},null,8,["icon","style"])])])])),_:2},1032,["onClick"])])))),128))])))),128))])),_:1})):(0,i.Q3)("",!0),["active","done"].includes(j.orderType)&&null==j.orderList?((0,i.uX)(),(0,i.Wv)(Q,{key:3},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)([1,2,3],(e=>(0,i.Lk)("div",{key:e},[(0,i.bF)(D,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(q,{style:{width:"50px"},slot:"start"}),(0,i.bF)(q,{style:{width:"100%"}}),(0,i.bF)(q,{style:{width:"50px"},slot:"end"})])),_:1}),(0,i.bF)(D,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.bF)(q,{animated:"",style:{width:"30px",height:"30px","border-radius":"50px"},slot:"start"}),(0,i.bF)(T,{color:"medium"},{default:(0,i.k6)((()=>[(0,i.bF)(X,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.bF)(q,{animated:"",style:{width:"80px"}})])),_:1})])),_:1}),(0,i.bF)(T,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.bF)(O,{icon:I.checkmarkOutline},null,8,["icon"]),(0,i.bF)(X,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.bF)(q,{animated:"",style:{width:"80px"}})])),_:1})])),_:1}),(0,i.bF)(q,{animated:"",style:{width:"40px",height:"40px","border-radius":"10px"},slot:"end"})])),_:1})]))),64))])),_:1})):j.orderList&&0!=(null===(N=j.orderList)||void 0===N?void 0:N.length)||j.jobList&&0!=(null===(K=j.jobList)||void 0===K?void 0:K.length)||j.routeList&&0!=(null===(V=j.routeList)||void 0===V?void 0:V.length)?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",g,[e.$heap.getters.userIsLogged?((0,i.uX)(),(0,i.CE)("div",y,[(0,i.bF)(O,{icon:I.sparklesOutline,size:"large"},null,8,["icon"]),(0,i.bF)(X,null,{default:(0,i.k6)((()=>[(0,i.eW)("Заказов нет")])),_:1}),F,(0,i.bF)(z,{onClick:t[2]||(t[2]=t=>e.$router.replace("/")),style:{cursor:"pointer"},color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("но вы можете создать новый")])),_:1})])):((0,i.uX)(),(0,i.CE)("div",L,[(0,i.bF)(O,{icon:I.informationOutline,size:"large"},null,8,["icon"]),(0,i.bF)(X,null,{default:(0,i.k6)((()=>[(0,i.eW)("Необходимо войти в систему")])),_:1}),W,(0,i.bF)(z,{onClick:t[3]||(t[3]=t=>e.$router.replace("/user/sign-in")),style:{cursor:"pointer"},color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("вход в систему")])),_:1})]))])),(0,i.bF)(M,{onIonInfinite:t[4]||(t[4]=e=>C.listLoadMore(e)),id:"moderation-infinite-scroll"},{default:(0,i.k6)((()=>[(0,i.bF)(B,{"loading-spinner":"bubbles","loading-text":"Загрузка..."})])),_:1})]})),_:1})}o(4114);var j=o(972),C=o(5480),x=o(1376),$=o(6028),w=o(8701),X=o(6859);const D={class:"center_chip"},O={class:"center_chip"},T={class:"center_chip"};function S(e,t,o,l,r,s){const a=(0,i.g2)("ion-title"),d=(0,i.g2)("ion-icon"),u=(0,i.g2)("ion-toolbar"),c=(0,i.g2)("ion-header"),_=(0,i.g2)("ion-avatar"),h=(0,i.g2)("ion-text"),k=(0,i.g2)("ion-label"),b=(0,i.g2)("ion-item"),p=(0,i.g2)("ion-chip"),m=(0,i.g2)("ion-note"),f=(0,i.g2)("ion-skeleton-text"),v=(0,i.g2)("ion-button"),g=(0,i.g2)("ion-item-group"),y=(0,i.g2)("ion-list"),F=(0,i.g2)("ion-content");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.eW)("Просмотр задания")])),_:1}),(0,i.bF)(d,{slot:"end",onClick:t[0]||(t[0]=e=>{s.close()}),icon:l.closeOutline,size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,i.bF)(F,null,{default:(0,i.k6)((()=>[o.orderData?((0,i.uX)(),(0,i.Wv)(y,{key:0},{default:(0,i.k6)((()=>[(0,i.bF)(b,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.locationOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(k,null,{default:(0,i.k6)((()=>[(0,i.bF)(h,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Курьер "+(0,n.v_)(e.$heap.state.user.user_name),1)])),_:1})])),_:1})])),_:1}),(0,i.bF)(b,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",D,[(0,i.bF)(p,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>{var e;return[(0,i.eW)((0,n.v_)(null===(e=o.orderData)||void 0===e?void 0:e.distance_km),1)]})),_:1})])),_:1})])])),_:1}),(0,i.bF)(b,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.storefrontOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(k,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.orderData.store_name),1)])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.orderData.location_address),1)])),_:1})])),_:1})])),_:1}),s.start_finish_distance_km?((0,i.uX)(),(0,i.Wv)(b,{key:0,lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",O,[(0,i.bF)(p,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(s.start_finish_distance_km),1)])),_:1})])),_:1})])])),_:1})):((0,i.uX)(),(0,i.Wv)(b,{key:1,lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",T,[(0,i.bF)(p,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(f,{animated:"",style:{width:"100%"}})])),_:1})])])),_:1})),r.job?((0,i.uX)(),(0,i.Wv)(b,{key:2},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.flagOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(k,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Покупатель")])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>{var e,t;return[(0,i.eW)((0,n.v_)(null===(e=r.job.finish_location)||void 0===e?void 0:e.location_address)+(0,n.v_)(null===(t=r.job.finish_location)||void 0===t?void 0:t.location_comment),1)]})),_:1})])),_:1})])),_:1})):((0,i.uX)(),(0,i.Wv)(b,{key:3},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.flagOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(k,null,{default:(0,i.k6)((()=>[(0,i.bF)(h,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Покупатель")])),_:1}),(0,i.bF)(f,{animated:"",style:{width:"60%"}}),(0,i.bF)(f,{animated:"",style:{width:"80%"}})])),_:1})])),_:1})),r.job?((0,i.uX)(),(0,i.Wv)(g,{key:4},{default:(0,i.k6)((()=>[(0,i.bF)(v,{onClick:t[1]||(t[1]=e=>s.deliveryStart()),expand:"block"},{default:(0,i.k6)((()=>[(0,i.eW)("Взять задание")])),_:1})])),_:1})):(0,i.Q3)("",!0)])),_:1})):(0,i.Q3)("",!0)])),_:1})],64)}var E={props:["orderData"],components:{IonList:j.nf,IonItemGroup:j.jh,IonTitle:j.BC,IonButton:j.Jm,IonSkeletonText:j.ds,IonNote:j.JI,IonChip:j.ZB,IonItem:j.uz,IonLabel:j.he,IonText:j.IO,IonAvatar:j.mC,IonIcon:j.iq,IonHeader:j.eU,IonToolbar:j.ai,IonContent:j.W9},setup(){return{storefrontOutline:C.te8,locationOutline:C.UN$,flagOutline:C.NBP,closeOutline:C.xfX}},data(){return{job:null}},mounted(){this.jobGet()},computed:{start_finish_distance_km(){var e,t;return null!==(e=this.job)&&void 0!==e&&e.start_finish_distance?Math.round((null===(t=this.job)||void 0===t?void 0:t.start_finish_distance)/1e3)+"км":"-"}},methods:{async jobGet(){try{let e=await $.A.api.itemJobGet(this.orderData.order_id);e.finish_location_address=e.finish_location_address.split(",").reverse().join(","),this.job=e}catch(o){var e,t;const i=null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;if("notfound"==i)return void this.$flash("Задание не найдено");if("notready"==i)return void this.$flash("Вы заняты или не открыли смену")}},async deliveryStart(){var e,t;const o=null===(e=w.A.courier)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.courier_id;try{await $.A.api.itemJobStart(this.orderData.order_id,o),1==this.job.is_shipment?this.$go("/order/shipment-"+this.orderData.order_id):this.$go("/order/order-"+this.orderData.order_id)}catch(l){var i,n;const e=null===(i=l.responseJSON)||void 0===i||null===(n=i.messages)||void 0===n?void 0:n.error;"notfound"==e&&this.$flash("Задание не найдено"),"notready"==e&&this.$flash("Смена курьера не открыта"),"notsearching"!=e&&"idle"!=e||this.$flash("Заданию уже назначен курьер")}X.A.publish("dismissModal")},close(){X.A.publish("dismissModal")}}},Q=o(6262);const z=(0,Q.A)(E,[["render",S],["__scopeId","data-v-1e3194ea"]]);var J=z;const A={style:{color:"#999"}},G=["href"],q=["href"],B=["href"];function M(e,t,o,l,r,s){const a=(0,i.g2)("ion-item"),d=(0,i.g2)("ion-icon"),u=(0,i.g2)("ion-list"),c=(0,i.g2)("ion-card-subtitle"),_=(0,i.g2)("ion-card-header"),h=(0,i.g2)("ion-chip"),k=(0,i.g2)("ion-checkbox"),b=(0,i.g2)("ion-card-content"),p=(0,i.g2)("ion-card"),m=(0,i.g2)("ion-button"),f=(0,i.g2)("ion-content");return(0,i.uX)(),(0,i.Wv)(f,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.Lk)("h4",A,(0,n.v_)(o.job.job_name)+" ["+(0,n.v_)(o.job.stage_label)+"]",1)])),_:1}),(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.Lk)("h6",null,"Забрать до "+(0,n.v_)(o.job.start_plan_date),1)])),_:1}),(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.bF)(d,{slot:"end",icon:l.square,size:"large",style:(0,n.Tr)(`color:${o.job.start_color}`)},null,8,["icon","style"]),(0,i.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.job.start_longitude},${o.job.start_latitude}&z=19&l=map,trf`,target:"_new",style:{color:"#999"}},(0,n.v_)(o.job.start_address),9,G)])),_:1}),(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.Lk)("h6",null,"Привезти до "+(0,n.v_)(o.job.finish_plan_date),1)])),_:1}),(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.bF)(d,{slot:"end",icon:l.square,size:"large",style:(0,n.Tr)(`color:${o.job.finish_color}`)},null,8,["icon","style"]),(0,i.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.job.finish_longitude},${o.job.finish_latitude}&z=19&l=map,trf`,target:"_new",style:{color:"#999"}},(0,n.v_)(o.job.finish_address),9,q)])),_:1})])),_:1}),1==o.job.payment_by_cash?((0,i.uX)(),(0,i.Wv)(p,{key:0,color:"light"},{default:(0,i.k6)((()=>[(0,i.bF)(_,null,{default:(0,i.k6)((()=>[(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Заказ не оплачен")])),_:1})])),_:1}),r.customerDetails?((0,i.uX)(),(0,i.Wv)(b,{key:0},{default:(0,i.k6)((()=>[(0,i.Lk)("p",null,[(0,i.eW)("Созвонитесь с клиентом "),(0,i.Lk)("b",null,(0,n.v_)(r.customerDetails.user_name),1),(0,i.eW)(),(0,i.bF)(h,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.Lk)("a",{href:`tel:+${r.customerDetails.user_phone}`},"+"+(0,n.v_)(r.customerDetails.user_phone),9,B)])),_:1})]),(0,i.Lk)("p",null,[(0,i.bF)(k,{onClick:t[0]||(t[0]=e=>r.confirmed=e.target.checked?0:1)},{default:(0,i.k6)((()=>[(0,i.eW)("Клиент на связи и готов ждать")])),_:1})])])),_:1})):(0,i.Q3)("",!0)])),_:1})):(0,i.Q3)("",!0),"awaited"==o.job.stage?((0,i.uX)(),(0,i.Wv)(m,{key:1,onClick:t[1]||(t[1]=e=>s.jobTake()),expand:"block",disabled:!r.confirmed},{default:(0,i.k6)((()=>[(0,i.eW)("Взять задание")])),_:1},8,["disabled"])):((0,i.uX)(),(0,i.Wv)(m,{key:2,onClick:t[2]||(t[2]=e=>s.itemOpen()),expand:"block"},{default:(0,i.k6)((()=>[(0,i.eW)("Открыть заказ")])),_:1})),(0,i.bF)(m,{onClick:t[3]||(t[3]=e=>s.close()),expand:"block",color:"light"},{default:(0,i.k6)((()=>[(0,i.eW)("Закрыть")])),_:1})])),_:1})}var R=o(2311),N=o.n(R),K={props:["job"],components:{IonList:j.nf,IonButton:j.Jm,IonItem:j.uz,IonIcon:j.iq,IonContent:j.W9},setup(){return{square:C.EwI}},data(){return{customerDetails:null,confirmed:0}},mounted(){this.customerDetailsGet(),1==this.job.payment_by_cash?this.confirmed=0:this.confirmed=1},methods:{async jobTake(){try{const e={order_id:this.job.order_id};await N().post(`${this.$heap.state.hostname}DeliveryJob/itemTake`,e),this.itemOpen(),this.$topic.publish("dismissModal"),j.OZ.dismiss(null,"confirm")}catch(o){var e,t;const i=null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;"forbidden"==i&&this.$flash("Не хватает прав"),"notfound"==i&&this.$flash("Задание не найдено"),"notready"==i&&this.$flash("Ваш статус должен быть 'ГОТОВ'"),"notsearching"!=i&&"idle"!=i||this.$flash("Заданию уже назначен курьер")}},itemOpen(){1==this.job.is_shipment?this.$go(`/order/shipment-${this.job.order_id}`):this.$go(`/order/order-${this.job.order_id}`)},async customerDetailsGet(){this.customerDetails=null;const e={job_id:this.job.job_id};this.customerDetails=await N().post(`${this.$heap.state.hostname}DeliveryJob/itemCustomerDetailGet`,e)},close(){j.OZ.dismiss(null,"cancel")}}};const V=(0,Q.A)(K,[["render",M],["__scopeId","data-v-28d37b0a"]]);var Z=V,H={components:{IonSegment:j.Gp,IonSegmentButton:j.eP,IonIcon:j.iq,IonAvatar:j.mC,IonText:j.IO,IonLabel:j.he,IonItem:j.uz,IonList:j.nf,IonChip:j.ZB,IonNote:j.JI,IonImg:j.KW,IonInfiniteScroll:j.Ax,IonInfiniteScrollContent:j.Hp,IonSkeletonText:j.ds,IonAccordionGroup:j.YH,IonAccordion:j.xk},setup(){return{sparklesOutline:C.isq,storefrontOutline:C.te8,timeOutline:C.CVk,ordersIcon:x,rocketOutline:C.hGQ,ribbonOutline:C.rp8,checkmarkOutline:C.g1L,informationOutline:C.Hzj,banOutline:C.Av6,square:C.EwI}},data(){return{jobList:null,routeList:null,orderList:null,orderType:"active",courierJobsInclude:null,clock:null}},computed:{orderListComputed(){for(let e of this.orderList){switch(e.user_role){case"customer":e.icon=x;break;case"admin":e.icon=C.rp8;break;case"courier":e.icon=C.hGQ;break;case"supplier":e.icon=C.te8;break}e.date=this.toLocDate(e.created_at),e.stage_color="customer_cart"==e.stage_current?"light":"primary",e.stage_color="1"==e.is_canceled?"danger":e.stage_color}return this.orderList},jobListComputed(){for(let e of this.jobList)e.location_address||(e.location_address=""),e.distance?e.distance_km=Math.round(e.distance/1e3)+"км":e.distance_km="",e.date_time=this.toLocDateTime(e.created_at);return this.jobList},routeListGroupped(){if(!this.routeList)return null;let e={};for(let n in this.routeList.open_shifts){let t=this.routeList.open_shifts[n];t.jobs=[],e["route_"+t.courier_id]=t}const t={scheduled:"Запланирован",awaited:"Очередь",inited:"Собирается",assigned:"Назначен",started:"В пути"};for(let n of this.routeList.delivery_jobs){var o,i;const l=new Date(1e3*(1*n.start_plan+1*n.finish_arrival_time)),r=new Date(1e3*n.start_plan);if(n.start_plan_date=r.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}),n.finish_plan_date=l.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}),n.stage_label=t[n.stage]||"-",n.stage_color=["scheduled","awaited"].includes(n.stage)?"light":"primary",n.is_courier_job=1,n.finish_plan_scheduled>0){const e=new Date(1e3*n.finish_plan_scheduled);n.finish_plan_scheduled_date=e.toLocaleDateString(void 0,{month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}n.courier_id||(n.courier_id=0,e["route_0"]||(e["route_0"]={courier_name:"",actual_color:"#fff",jobs:[]})),null===(o=e["route_"+n.courier_id])||void 0===o||null===(i=o.jobs)||void 0===i||i.push(n)}return e}},mounted(){this.$topic.on("courierStatusChange",(()=>{this.courierReadinessCheck()})),this.$topic.on("userGet",(()=>{this.listLoad(this.orderType,"reload")})),this.courierReadinessCheck()},methods:{toLocDate(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,o)},toLocDateTime(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString(void 0,o)},courierReadinessCheck(){this.courierJobsInclude=localStorage.user_is_courier||localStorage.user_is_admin,0==this.courierJobsInclude&&(this.orderType="active")},async listLoad(e,t="reload"){var o;if("jobs"==e)return this.autoReload(e),void this.listRouteLoad();let i="system_finish";"active"==e&&(this.autoReload(e),i="active_only");const n={order_group_type:i,offset:0,limit:(null===(o=this.orderList)||void 0===o?void 0:o.length)||10};var l,r;"append"==t&&(n.offset=null!==(l=null===(r=this.orderList)||void 0===r?void 0:r.length)&&void 0!==l?l:0,n.limit=10);let s=await $.A.api.listLoad(n);var a;(this.orderType=e,"append"==t)&&(null!==(a=this.orderList)&&void 0!==a||(this.orderList=[]),s=this.orderList.concat(s));this.orderList=s,this.jobList=null},async listLoadMore(e){await this.listLoad(this.orderType,"append"),e.target.complete()},listTypeChanged(e){const t=e.target.value;this.orderList=null,this.listLoad(t)},async listRouteLoad(){try{const e={};this.routeList=await N().post(`${this.$heap.state.hostname}DeliveryJob/routeListGet`,e)}catch(o){var e,t;null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t||t.error;console.log(o)}},autoReload(e){clearTimeout(this.clock);const t=12e4;"jobs"!=e&&"active"!=e||(this.clock=setTimeout((()=>{this.listLoad(this.orderType)}),t))},ionViewDidEnter(){this.courierReadinessCheck(),this.listLoad(this.orderType)},ionViewDidLeave(){clearTimeout(this.clock)},async itemClickConfirm(e){const t=await j.OZ.create({component:Z,componentProps:{job:e},initialBreakpoint:.75,breakpoints:[.75,1]});this.$topic.on("dismissModal",(()=>{t.dismiss()})),await t.present();const{data:o,role:i}=await t.onDidDismiss();"confirm"==i&&this.itemOpen(e.order_id,e.is_shipment)},async itemClick(e){if(e.is_courier_job){const t=await j.OZ.create({component:J,componentProps:{orderData:e},initialBreakpoint:.75,breakpoints:[.5]}),o=function(){t.dismiss()};return X.A.on("dismissModal",o),t.present()}this.itemOpen(e.order_id,e.is_shipment)},itemOpen(e,t){1==t?this.$go(`/order/shipment-${e}`):this.$go(`/order/order-${e}`)}}};const P=(0,Q.A)(H,[["render",I]]);var U=P}}]);
//# sourceMappingURL=3431.35a6cad4.js.map