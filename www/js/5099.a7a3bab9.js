"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[5099],{5099:function(e,t,o){o.r(t),o.d(t,{default:function(){return K}});var i=o(641),n=o(33);const l=["onClick"],s=(0,i.Lk)("h3",null,"Маршрут",-1),r=["onClick"],a={key:0,style:{color:"var(--ion-color-primary)"}},d={style:{display:"grid","grid-template-columns":"40px auto 20px",width:"100%","margin-bottom":"3px"}},u={style:{padding:"3px",color:"var(--ion-color-primary)"}},c={style:{padding:"3px",color:"#333"}},_={key:0,style:{padding:"3px",color:"#fff","background-color":"var(--ion-color-primary)","border-radius":"3px"}},h={key:1,style:{padding:"3px",color:"#999"}},p={style:{padding:"3px",color:"#333"}},b={key:3,style:{display:"flex","align-items":"center","justify-content":"center",height:"70vh"}},k={key:0,style:{width:"max-content","text-align":"center"}},m=(0,i.Lk)("br",null,null,-1),f={key:1,style:{width:"max-content","text-align":"center"}},v=(0,i.Lk)("br",null,null,-1);function g(e,t,o,g,y,F){const L=(0,i.g2)("ion-segment-button"),I=(0,i.g2)("ion-segment"),j=(0,i.g2)("ion-text"),C=(0,i.g2)("ion-label"),W=(0,i.g2)("ion-item"),x=(0,i.g2)("ion-icon"),$=(0,i.g2)("ion-chip"),w=(0,i.g2)("ion-img"),X=(0,i.g2)("ion-avatar"),O=(0,i.g2)("ion-list"),D=(0,i.g2)("ion-list-header"),T=(0,i.g2)("ion-skeleton-text"),S=(0,i.g2)("ion-note"),E=(0,i.g2)("ion-infinite-scroll-content"),z=(0,i.g2)("ion-infinite-scroll"),Q=(0,i.g2)("base-layout");return(0,i.uX)(),(0,i.Wv)(Q,{"page-title":"Заказы",hideBackLink:"true"},{default:(0,i.k6)((()=>{var o,Q,J,A;return[(0,i.bF)(I,{"swipe-gesture":"true",modelValue:y.orderType,"onUpdate:modelValue":t[0]||(t[0]=e=>y.orderType=e),onIonChange:t[1]||(t[1]=e=>F.listTypeChanged(e)),scrollable:!0},{default:(0,i.k6)((()=>[y.courierJobsInclude?((0,i.uX)(),(0,i.Wv)(L,{key:0,value:"jobs"},{default:(0,i.k6)((()=>[(0,i.eW)(" Задания ")])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(L,{value:"active"},{default:(0,i.k6)((()=>[(0,i.eW)(" Активные ")])),_:1}),(0,i.bF)(L,{value:"done"},{default:(0,i.k6)((()=>[(0,i.eW)(" Завершенные ")])),_:1})])),_:1},8,["modelValue"]),(null===(o=y.orderList)||void 0===o?void 0:o.length)>0?((0,i.uX)(),(0,i.Wv)(O,{key:0},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(F.orderListComputed,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.order_id,onClick:e=>F.itemClick(t)},[(0,i.bF)(W,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(j,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.eW)("#"+(0,n.v_)(t.order_id),1)])),_:2},1024),1==t.is_shipment?((0,i.uX)(),(0,i.Wv)(C,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)("Вызов курьера "+(0,n.v_)(t.store_name),1)])),_:2},1024)):((0,i.uX)(),(0,i.Wv)(C,{key:1},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.store_name),1)])),_:2},1024)),(0,i.bF)(j,{slot:"end"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.date),1)])),_:2},1024)])),_:2},1024),(0,i.bF)(W,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.bF)(x,{slot:"start",icon:t.icon,color:"primary"},null,8,["icon"]),(0,i.bF)(j,null,{default:(0,i.k6)((()=>[(0,i.bF)(C,null,{default:(0,i.k6)((()=>[(0,i.bF)($,{color:"medium"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.order_sum_total)+(0,n.v_)(e.$heap.state.currencySign),1)])),_:2},1024),t.stage_current_name?((0,i.uX)(),(0,i.Wv)($,{key:0,color:t.stage_color},{default:(0,i.k6)((()=>[1==t.is_canceled?((0,i.uX)(),(0,i.Wv)(x,{key:0,icon:g.banOutline},null,8,["icon"])):((0,i.uX)(),(0,i.Wv)(x,{key:1,icon:g.checkmarkOutline},null,8,["icon"])),(0,i.bF)(C,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.stage_current_name),1)])),_:2},1024)])),_:2},1032,["color"])):(0,i.Q3)("",!0)])),_:2},1024)])),_:2},1024),t.image_hash?((0,i.uX)(),(0,i.Wv)(X,{key:0,slot:"end"},{default:(0,i.k6)((()=>[(0,i.bF)(w,{style:{"border-radius":"10px"},src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024)):(0,i.Q3)("",!0)])),_:2},1024)],8,l)))),128))])),_:1})):(0,i.Q3)("",!0),"jobs"==y.orderType&&F.routeListGroupped?((0,i.uX)(),(0,i.Wv)(O,{key:1,lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(D,null,{default:(0,i.k6)((()=>[s])),_:1}),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(F.routeListGroupped,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.courier_id},[(0,i.bF)(W,null,{default:(0,i.k6)((()=>[t.image_hash?((0,i.uX)(),(0,i.Wv)(X,{key:0,slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(w,{style:{"border-radius":"10px"},src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024)):(0,i.Q3)("",!0),(0,i.bF)(j,null,{default:(0,i.k6)((()=>[(0,i.Lk)("b",null,(0,n.v_)(t.courier_name),1)])),_:2},1024),(0,i.bF)(x,{slot:"end",icon:g.square,style:(0,n.Tr)(`color:${t.actual_color}`)},null,8,["icon","style"])])),_:2},1024),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.jobs,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.job_id,onClick:t=>F.itemClickConfirm(e)},[(0,i.bF)(W,{lines:"none",style:{"--inner-padding-bottom":"0px"}},{default:(0,i.k6)((()=>[e.finish_plan_scheduled_date?((0,i.uX)(),(0,i.Wv)(x,{key:0,icon:g.timeOutline,slot:"start"},null,8,["icon"])):(0,i.Q3)("",!0),(0,i.bF)(j,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(e.job_name)+" ",1),e.finish_plan_scheduled_date?((0,i.uX)(),(0,i.CE)("b",a,(0,n.v_)(e.finish_plan_scheduled_date),1)):(0,i.Q3)("",!0)])),_:2},1024),(0,i.bF)($,{slot:"end",color:e.stage_color},{default:(0,i.k6)((()=>[(0,i.bF)(x,{icon:g.checkmarkOutline},null,8,["icon"]),(0,i.bF)(C,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.Lk)("small",null,(0,n.v_)(e.stage_label),1)])),_:2},1024)])),_:2},1032,["color"])])),_:2},1024),(0,i.bF)(W,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",d,[(0,i.Lk)("div",u,[(0,i.Lk)("b",null,(0,n.v_)(e.start_plan_date),1)]),(0,i.Lk)("div",c,[(0,i.Lk)("small",null,(0,n.v_)(e.start_address),1)]),(0,i.Lk)("div",null,[(0,i.bF)(x,{icon:g.square,style:(0,n.Tr)(`color:${e.start_color}`)},null,8,["icon","style"])]),e.finish_plan_scheduled_date?((0,i.uX)(),(0,i.CE)("div",_,(0,n.v_)(e.finish_plan_scheduled_date),1)):((0,i.uX)(),(0,i.CE)("div",h,(0,n.v_)(e.finish_plan_date),1)),(0,i.Lk)("div",p,[(0,i.Lk)("small",null,(0,n.v_)(e.finish_address),1)]),(0,i.Lk)("div",null,[(0,i.bF)(x,{icon:g.square,style:(0,n.Tr)(`color:${e.finish_color}`)},null,8,["icon","style"])])])])),_:2},1024)],8,r)))),128))])))),128))])),_:1})):(0,i.Q3)("",!0),["active","done"].includes(y.orderType)&&null==y.orderList?((0,i.uX)(),(0,i.Wv)(O,{key:2},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)([1,2,3],(e=>(0,i.Lk)("div",{key:e},[(0,i.bF)(W,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(T,{style:{width:"50px"},slot:"start"}),(0,i.bF)(T,{style:{width:"100%"}}),(0,i.bF)(T,{style:{width:"50px"},slot:"end"})])),_:1}),(0,i.bF)(W,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.bF)(T,{animated:"",style:{width:"30px",height:"30px","border-radius":"50px"},slot:"start"}),(0,i.bF)($,{color:"medium"},{default:(0,i.k6)((()=>[(0,i.bF)(C,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.bF)(T,{animated:"",style:{width:"80px"}})])),_:1})])),_:1}),(0,i.bF)($,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.bF)(x,{icon:g.checkmarkOutline},null,8,["icon"]),(0,i.bF)(C,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.bF)(T,{animated:"",style:{width:"80px"}})])),_:1})])),_:1}),(0,i.bF)(T,{animated:"",style:{width:"40px",height:"40px","border-radius":"10px"},slot:"end"})])),_:1})]))),64))])),_:1})):y.orderList&&0!=(null===(Q=y.orderList)||void 0===Q?void 0:Q.length)||y.jobList&&0!=(null===(J=y.jobList)||void 0===J?void 0:J.length)||y.routeList&&0!=(null===(A=y.routeList)||void 0===A?void 0:A.length)?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",b,[e.$heap.getters.userIsLogged?((0,i.uX)(),(0,i.CE)("div",k,[(0,i.bF)(x,{icon:g.sparklesOutline,size:"large"},null,8,["icon"]),(0,i.bF)(C,null,{default:(0,i.k6)((()=>[(0,i.eW)("Заказов нет")])),_:1}),m,(0,i.bF)(S,{onClick:t[2]||(t[2]=t=>e.$router.replace("/")),style:{cursor:"pointer"},color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("но вы можете создать новый")])),_:1})])):((0,i.uX)(),(0,i.CE)("div",f,[(0,i.bF)(x,{icon:g.informationOutline,size:"large"},null,8,["icon"]),(0,i.bF)(C,null,{default:(0,i.k6)((()=>[(0,i.eW)("Необходимо войти в профиль")])),_:1}),v,(0,i.bF)(S,{onClick:t[3]||(t[3]=t=>e.$router.replace("/modal/user-authorize")),style:{cursor:"pointer"},color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("вход в профиль")])),_:1})]))])),(0,i.bF)(z,{onIonInfinite:t[4]||(t[4]=e=>F.listLoadMore(e)),id:"moderation-infinite-scroll"},{default:(0,i.k6)((()=>[(0,i.bF)(E,{"loading-spinner":"bubbles","loading-text":"Загрузка..."})])),_:1})]})),_:1})}o(4114);var y=o(5654),F=o(5480),L=o(1376),I=o(6028),j=o(8701),C=o(6859);const W={class:"center_chip"},x={class:"center_chip"},$={class:"center_chip"};function w(e,t,o,l,s,r){const a=(0,i.g2)("ion-title"),d=(0,i.g2)("ion-icon"),u=(0,i.g2)("ion-toolbar"),c=(0,i.g2)("ion-header"),_=(0,i.g2)("ion-avatar"),h=(0,i.g2)("ion-text"),p=(0,i.g2)("ion-label"),b=(0,i.g2)("ion-item"),k=(0,i.g2)("ion-chip"),m=(0,i.g2)("ion-note"),f=(0,i.g2)("ion-skeleton-text"),v=(0,i.g2)("ion-button"),g=(0,i.g2)("ion-item-group"),y=(0,i.g2)("ion-list"),F=(0,i.g2)("ion-content");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.eW)("Просмотр задания")])),_:1}),(0,i.bF)(d,{slot:"end",onClick:t[0]||(t[0]=e=>{r.close()}),icon:l.closeOutline,size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,i.bF)(F,null,{default:(0,i.k6)((()=>[o.orderData?((0,i.uX)(),(0,i.Wv)(y,{key:0},{default:(0,i.k6)((()=>[(0,i.bF)(b,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.locationOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(h,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Курьер "+(0,n.v_)(e.$heap.state.user.user_name),1)])),_:1})])),_:1})])),_:1}),(0,i.bF)(b,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",W,[(0,i.bF)(k,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>{var e;return[(0,i.eW)((0,n.v_)(null===(e=o.orderData)||void 0===e?void 0:e.distance_km),1)]})),_:1})])),_:1})])])),_:1}),(0,i.bF)(b,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.storefrontOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(p,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.orderData.store_name),1)])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.orderData.location_address),1)])),_:1})])),_:1})])),_:1}),r.start_finish_distance_km?((0,i.uX)(),(0,i.Wv)(b,{key:0,lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",x,[(0,i.bF)(k,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(r.start_finish_distance_km),1)])),_:1})])),_:1})])])),_:1})):((0,i.uX)(),(0,i.Wv)(b,{key:1,lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",$,[(0,i.bF)(k,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(f,{animated:"",style:{width:"100%"}})])),_:1})])])),_:1})),s.job?((0,i.uX)(),(0,i.Wv)(b,{key:2},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.flagOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(p,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Покупатель")])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>{var e,t;return[(0,i.eW)((0,n.v_)(null===(e=s.job.finish_location)||void 0===e?void 0:e.location_address)+(0,n.v_)(null===(t=s.job.finish_location)||void 0===t?void 0:t.location_comment),1)]})),_:1})])),_:1})])),_:1})):((0,i.uX)(),(0,i.Wv)(b,{key:3},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.flagOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(h,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Покупатель")])),_:1}),(0,i.bF)(f,{animated:"",style:{width:"60%"}}),(0,i.bF)(f,{animated:"",style:{width:"80%"}})])),_:1})])),_:1})),s.job?((0,i.uX)(),(0,i.Wv)(g,{key:4},{default:(0,i.k6)((()=>[(0,i.bF)(v,{onClick:t[1]||(t[1]=e=>r.deliveryStart()),expand:"block"},{default:(0,i.k6)((()=>[(0,i.eW)("Взять задание")])),_:1})])),_:1})):(0,i.Q3)("",!0)])),_:1})):(0,i.Q3)("",!0)])),_:1})],64)}var X={props:["orderData"],components:{IonList:y.nf,IonItemGroup:y.jh,IonTitle:y.BC,IonButton:y.Jm,IonSkeletonText:y.ds,IonNote:y.JI,IonChip:y.ZB,IonItem:y.uz,IonLabel:y.he,IonText:y.IO,IonAvatar:y.mC,IonIcon:y.iq,IonHeader:y.eU,IonToolbar:y.ai,IonContent:y.W9},setup(){return{storefrontOutline:F.te8,locationOutline:F.UN$,flagOutline:F.NBP,closeOutline:F.xfX}},data(){return{job:null}},mounted(){this.jobGet()},computed:{start_finish_distance_km(){var e,t;return null!==(e=this.job)&&void 0!==e&&e.start_finish_distance?Math.round((null===(t=this.job)||void 0===t?void 0:t.start_finish_distance)/1e3)+"км":"-"}},methods:{async jobGet(){try{let e=await I.A.api.itemJobGet(this.orderData.order_id);e.finish_location_address=e.finish_location_address.split(",").reverse().join(","),this.job=e}catch(o){var e,t;const i=null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;if("notfound"==i)return void this.$flash("Задание не найдено");if("notready"==i)return void this.$flash("Вы заняты или не открыли смену")}},async deliveryStart(){var e,t;const o=null===(e=j.A.courier)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.courier_id;try{await I.A.api.itemJobStart(this.orderData.order_id,o),1==this.job.is_shipment?this.$go("/order/shipment-"+this.orderData.order_id):this.$go("/order/order-"+this.orderData.order_id)}catch(l){var i,n;const e=null===(i=l.responseJSON)||void 0===i||null===(n=i.messages)||void 0===n?void 0:n.error;"notfound"==e&&this.$flash("Задание не найдено"),"notready"==e&&this.$flash("Смена курьера не открыта"),"notsearching"!=e&&"idle"!=e||this.$flash("Заданию уже назначен курьер")}C.A.publish("dismissModal")},close(){C.A.publish("dismissModal")}}},O=o(6262);const D=(0,O.A)(X,[["render",w],["__scopeId","data-v-1e3194ea"]]);var T=D;const S={style:{color:"#999"}},E=["href"],z={key:0},Q={style:{border:"solid 2px var(--ion-color-primary)","border-radius":"3px",padding:"3px","background-color":"var(--ion-color-primary-tint)"}},J={key:1},A=["href"],G=["href"];function q(e,t,o,l,s,r){const a=(0,i.g2)("ion-icon"),d=(0,i.g2)("ion-text"),u=(0,i.g2)("ion-item"),c=(0,i.g2)("ion-list"),_=(0,i.g2)("ion-card-subtitle"),h=(0,i.g2)("ion-card-header"),p=(0,i.g2)("ion-chip"),b=(0,i.g2)("ion-checkbox"),k=(0,i.g2)("ion-card-content"),m=(0,i.g2)("ion-card"),f=(0,i.g2)("ion-button"),v=(0,i.g2)("ion-content");return(0,i.uX)(),(0,i.Wv)(v,null,{default:(0,i.k6)((()=>[(0,i.bF)(c,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[o.job.finish_plan_scheduled_date?((0,i.uX)(),(0,i.Wv)(a,{key:0,icon:l.timeOutline,slot:"start",style:{"font-size":"24px"}},null,8,["icon"])):(0,i.Q3)("",!0),(0,i.Lk)("h5",S,[(0,i.eW)((0,n.v_)(o.job.job_name)+" ",1),o.job.finish_plan_scheduled_date?((0,i.uX)(),(0,i.Wv)(d,{key:0,color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.job.finish_plan_scheduled_date),1)])),_:1})):(0,i.Q3)("",!0),(0,i.eW)(" ["+(0,n.v_)(o.job.stage_label)+"]",1)])])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.Lk)("h6",null,"Забрать до "+(0,n.v_)(o.job.start_plan_date),1)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,{slot:"end",icon:l.square,size:"large",style:(0,n.Tr)(`color:${o.job.start_color}`)},null,8,["icon","style"]),(0,i.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.job.start_longitude},${o.job.start_latitude}&z=19&l=map,trf`,target:"_new",style:{color:"#999"}},(0,n.v_)(o.job.start_address),9,E)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[o.job.finish_plan_scheduled_date?((0,i.uX)(),(0,i.CE)("h6",z,[(0,i.eW)("Привезти до "),(0,i.Lk)("b",Q,(0,n.v_)(o.job.finish_plan_scheduled_date),1)])):((0,i.uX)(),(0,i.CE)("h6",J,"Привезти до "+(0,n.v_)(o.job.finish_plan_date),1))])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,{slot:"end",icon:l.square,size:"large",style:(0,n.Tr)(`color:${o.job.finish_color}`)},null,8,["icon","style"]),(0,i.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.job.finish_longitude},${o.job.finish_latitude}&z=19&l=map,trf`,target:"_new",style:{color:"#999"}},(0,n.v_)(o.job.finish_address),9,A)])),_:1})])),_:1}),"awaited"==o.job.stage&&1==o.job.payment_by_cash?((0,i.uX)(),(0,i.Wv)(m,{key:0,color:"light"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(_,null,{default:(0,i.k6)((()=>[(0,i.eW)("Заказ не оплачен")])),_:1})])),_:1}),s.customerDetails?((0,i.uX)(),(0,i.Wv)(k,{key:0},{default:(0,i.k6)((()=>[(0,i.Lk)("p",null,[(0,i.eW)("Созвонитесь с клиентом "),(0,i.Lk)("b",null,(0,n.v_)(s.customerDetails.user_name),1),(0,i.eW)(),(0,i.bF)(p,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.Lk)("a",{href:`tel:+${s.customerDetails.user_phone}`},"+"+(0,n.v_)(s.customerDetails.user_phone),9,G)])),_:1})]),(0,i.Lk)("p",null,[(0,i.bF)(b,{onClick:t[0]||(t[0]=e=>s.confirmed=e.target.checked?0:1)},{default:(0,i.k6)((()=>[(0,i.eW)("Клиент на связи и готов ждать")])),_:1})])])),_:1})):(0,i.Q3)("",!0)])),_:1})):(0,i.Q3)("",!0),"awaited"==o.job.stage?((0,i.uX)(),(0,i.Wv)(f,{key:1,onClick:t[1]||(t[1]=e=>r.jobTake()),expand:"block",disabled:!s.confirmed},{default:(0,i.k6)((()=>[(0,i.eW)("Взять задание")])),_:1},8,["disabled"])):"scheduled"!=o.job.stage?((0,i.uX)(),(0,i.Wv)(f,{key:2,onClick:t[2]||(t[2]=e=>r.itemOpen()),expand:"block"},{default:(0,i.k6)((()=>[(0,i.eW)("Открыть заказ")])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(f,{onClick:t[3]||(t[3]=e=>r.close()),expand:"block",color:"light"},{default:(0,i.k6)((()=>[(0,i.eW)("Закрыть")])),_:1})])),_:1})}var B=o(2311),M=o.n(B),R={props:["job"],components:{IonList:y.nf,IonButton:y.Jm,IonItem:y.uz,IonIcon:y.iq,IonContent:y.W9,IonCard:y.b_,IonCardHeader:y.ME,IonCardContent:y.I9,IonCardSubtitle:y.HW,IonChip:y.ZB,IonCheckbox:y.eY},setup(){return{square:F.EwI,timeOutline:F.CVk}},data(){return{customerDetails:null,confirmed:0}},mounted(){"awaited"==this.job.stage&&1==this.job.payment_by_cash?(this.customerDetailsGet(),this.confirmed=0):this.confirmed=1},methods:{async jobTake(){try{const e={order_id:this.job.order_id};await M().post(`${this.$heap.state.hostname}DeliveryJob/itemTake`,e),this.itemOpen(),this.$topic.publish("dismissModal"),y.OZ.dismiss(null,"confirm")}catch(o){var e,t;const i=null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;"forbidden"==i&&this.$flash("Не хватает прав"),"notfound"==i&&this.$flash("Задание не найдено"),"notready"==i&&this.$flash("Ваш статус должен быть 'ГОТОВ'"),"notsearching"!=i&&"idle"!=i||this.$flash("Заданию уже назначен курьер")}},itemOpen(){1==this.job.is_shipment?this.$go(`/order/shipment-${this.job.order_id}`):this.$go(`/order/order-${this.job.order_id}`)},async customerDetailsGet(){this.customerDetails=null;const e={job_id:this.job.job_id};try{this.customerDetails=await M().post(`${this.$heap.state.hostname}DeliveryJob/itemCustomerDetailGet`,e)}catch{this.$flash("Данные клиента не найдены")}},close(){y.OZ.dismiss(null,"cancel")}}};const N=(0,O.A)(R,[["render",q],["__scopeId","data-v-a1259102"]]);var V=N,Z={components:{IonSegment:y.Gp,IonSegmentButton:y.eP,IonIcon:y.iq,IonAvatar:y.mC,IonText:y.IO,IonLabel:y.he,IonItem:y.uz,IonList:y.nf,IonListHeader:y.AF,IonChip:y.ZB,IonNote:y.JI,IonImg:y.KW,IonInfiniteScroll:y.Ax,IonInfiniteScrollContent:y.Hp,IonSkeletonText:y.ds},setup(){return{sparklesOutline:F.isq,storefrontOutline:F.te8,timeOutline:F.CVk,ordersIcon:L,rocketOutline:F.hGQ,ribbonOutline:F.rp8,checkmarkOutline:F.g1L,informationOutline:F.Hzj,banOutline:F.Av6,square:F.EwI}},data(){return{jobList:null,routeList:null,orderList:null,orderType:"active",courierJobsInclude:null,clock:null}},computed:{orderListComputed(){for(let e of this.orderList){switch(e.user_role){case"customer":e.icon=L;break;case"admin":e.icon=F.rp8;break;case"courier":e.icon=F.hGQ;break;case"supplier":e.icon=F.te8;break}e.date=this.toLocDate(e.created_at),e.stage_color="customer_cart"==e.stage_current?"light":"primary",e.stage_color="1"==e.is_canceled?"danger":e.stage_color}return this.orderList},jobListComputed(){for(let e of this.jobList)e.location_address||(e.location_address=""),e.distance?e.distance_km=Math.round(e.distance/1e3)+"км":e.distance_km="",e.date_time=this.toLocDateTime(e.created_at);return this.jobList},routeListGroupped(){if(!this.routeList)return null;let e={};for(let n in this.routeList.open_shifts){let t=this.routeList.open_shifts[n];t.jobs=[],e["route_"+t.courier_id]=t}const t={scheduled:"Запланирован",awaited:"Очередь",inited:"Собирается",assigned:"Назначен",started:"В пути"};for(let n of this.routeList.delivery_jobs){var o,i;const l=new Date(1e3*(1*n.start_plan+1*n.finish_arrival_time)),s=new Date(1e3*n.start_plan);if(n.start_plan_date=s.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}),n.finish_plan_date=l.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}),n.stage_label=t[n.stage]||"-",n.stage_color=["scheduled","awaited"].includes(n.stage)?"light":"primary",n.is_courier_job=1,n.finish_plan_scheduled>0){const e=new Date(1e3*n.finish_plan_scheduled);n.finish_plan_scheduled_date=e.toLocaleDateString(void 0,{month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}n.courier_id||(n.courier_id=0,e["route_0"]||(e["route_0"]={courier_name:"",actual_color:"#fff",jobs:[]})),null===(o=e["route_"+n.courier_id])||void 0===o||null===(i=o.jobs)||void 0===i||i.push(n)}return e}},mounted(){this.$topic.on("courierStatusChange",(()=>{this.courierReadinessCheck()})),this.$topic.on("userGet",(()=>{this.listLoad(this.orderType,"reload")})),this.courierReadinessCheck()},methods:{toLocDate(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,o)},toLocDateTime(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString(void 0,o)},courierReadinessCheck(){this.courierJobsInclude=1==localStorage.user_is_courier||1==localStorage.user_is_admin,0==this.courierJobsInclude&&(this.orderType="active")},async listLoad(e,t="reload"){var o;if("jobs"==e)return this.autoReload(e),void this.listRouteLoad();let i="system_finish";"active"==e&&(this.autoReload(e),i="active_only");const n={order_group_type:i,offset:0,limit:(null===(o=this.orderList)||void 0===o?void 0:o.length)||10};var l,s;"append"==t&&(n.offset=null!==(l=null===(s=this.orderList)||void 0===s?void 0:s.length)&&void 0!==l?l:0,n.limit=10);let r=await I.A.api.listLoad(n);var a;(this.orderType=e,"append"==t)&&(null!==(a=this.orderList)&&void 0!==a||(this.orderList=[]),r=this.orderList.concat(r));this.orderList=r,this.jobList=null},async listLoadMore(e){await this.listLoad(this.orderType,"append"),e.target.complete()},listTypeChanged(e){const t=e.target.value;this.orderList=null,this.listLoad(t)},async listRouteLoad(){try{const e={};this.routeList=await M().post(`${this.$heap.state.hostname}DeliveryJob/routeListGet`,e)}catch(o){var e,t;null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t||t.error;console.log(o)}},autoReload(e){clearTimeout(this.clock);const t=12e4;"jobs"!=e&&"active"!=e||(this.clock=setTimeout((()=>{this.listLoad(this.orderType)}),t))},ionViewDidEnter(){this.courierReadinessCheck(),this.listLoad(this.orderType)},ionViewDidLeave(){clearTimeout(this.clock)},async itemClickConfirm(e){const t=await y.OZ.create({component:V,componentProps:{job:e},initialBreakpoint:.75,breakpoints:[.75,1]});this.$topic.on("dismissModal",(()=>{t.dismiss()})),await t.present();const{data:o,role:i}=await t.onDidDismiss();"confirm"==i&&this.itemOpen(e.order_id,e.is_shipment)},async itemClick(e){if(e.is_courier_job){const t=await y.OZ.create({component:T,componentProps:{orderData:e},initialBreakpoint:.75,breakpoints:[.5]}),o=function(){t.dismiss()};return C.A.on("dismissModal",o),t.present()}this.itemOpen(e.order_id,e.is_shipment)},itemOpen(e,t){1==t?this.$go(`/order/shipment-${e}`):this.$go(`/order/order-${e}`)}}};const H=(0,O.A)(Z,[["render",g]]);var K=H}}]);
//# sourceMappingURL=5099.a7a3bab9.js.map