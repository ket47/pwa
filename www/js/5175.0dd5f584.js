"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[5175],{5175:function(e,t,o){o.r(t),o.d(t,{default:function(){return H}});var i=o(641),n=o(33);const l=["onClick"],s=(0,i.Lk)("h3",null,"Маршрут",-1),r=["onClick"],a={style:{display:"grid","grid-template-columns":"40px auto 20px",width:"100%","margin-bottom":"3px"}},d={style:{padding:"3px",color:"var(--ion-color-primary)"}},u={style:{padding:"3px",color:"#333"}},c={key:0,style:{padding:"3px",color:"#fff","background-color":"var(--ion-color-primary)","border-radius":"3px"}},_={key:1,style:{padding:"3px",color:"#999"}},h={style:{padding:"3px",color:"#333"}},b={key:3,style:{display:"flex","align-items":"center","justify-content":"center",height:"70vh"}},p={key:0,style:{width:"max-content","text-align":"center"}},k=(0,i.Lk)("br",null,null,-1),m={key:1,style:{width:"max-content","text-align":"center"}},f=(0,i.Lk)("br",null,null,-1);function v(e,t,o,v,g,y){const F=(0,i.g2)("ion-segment-button"),L=(0,i.g2)("ion-segment"),I=(0,i.g2)("ion-text"),j=(0,i.g2)("ion-label"),W=(0,i.g2)("ion-item"),C=(0,i.g2)("ion-icon"),x=(0,i.g2)("ion-chip"),$=(0,i.g2)("ion-img"),w=(0,i.g2)("ion-avatar"),O=(0,i.g2)("ion-list"),X=(0,i.g2)("ion-list-header"),D=(0,i.g2)("ion-skeleton-text"),T=(0,i.g2)("ion-note"),S=(0,i.g2)("ion-infinite-scroll-content"),z=(0,i.g2)("ion-infinite-scroll"),E=(0,i.g2)("base-layout");return(0,i.uX)(),(0,i.Wv)(E,{"page-title":"Заказы",hideBackLink:"true"},{default:(0,i.k6)((()=>{var o,E,J,Q;return[(0,i.bF)(L,{"swipe-gesture":"true",modelValue:g.orderType,"onUpdate:modelValue":t[0]||(t[0]=e=>g.orderType=e),onIonChange:t[1]||(t[1]=e=>y.listTypeChanged(e)),scrollable:!0},{default:(0,i.k6)((()=>[g.courierJobsInclude?((0,i.uX)(),(0,i.Wv)(F,{key:0,value:"jobs"},{default:(0,i.k6)((()=>[(0,i.eW)(" Задания ")])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(F,{value:"active"},{default:(0,i.k6)((()=>[(0,i.eW)(" Активные ")])),_:1}),(0,i.bF)(F,{value:"done"},{default:(0,i.k6)((()=>[(0,i.eW)(" Завершенные ")])),_:1})])),_:1},8,["modelValue"]),(null===(o=g.orderList)||void 0===o?void 0:o.length)>0?((0,i.uX)(),(0,i.Wv)(O,{key:0},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(y.orderListComputed,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.order_id,onClick:e=>y.itemClick(t)},[(0,i.bF)(W,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(I,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.eW)("#"+(0,n.v_)(t.order_id),1)])),_:2},1024),1==t.is_shipment?((0,i.uX)(),(0,i.Wv)(j,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)("Вызов курьера "+(0,n.v_)(t.store_name),1)])),_:2},1024)):((0,i.uX)(),(0,i.Wv)(j,{key:1},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.store_name),1)])),_:2},1024)),(0,i.bF)(I,{slot:"end"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.date),1)])),_:2},1024)])),_:2},1024),(0,i.bF)(W,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.bF)(C,{slot:"start",icon:t.icon,color:"primary"},null,8,["icon"]),(0,i.bF)(I,null,{default:(0,i.k6)((()=>[(0,i.bF)(j,null,{default:(0,i.k6)((()=>[(0,i.bF)(x,{color:"medium"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.order_sum_total)+(0,n.v_)(e.$heap.state.currencySign),1)])),_:2},1024),t.stage_current_name?((0,i.uX)(),(0,i.Wv)(x,{key:0,color:t.stage_color},{default:(0,i.k6)((()=>[1==t.is_canceled?((0,i.uX)(),(0,i.Wv)(C,{key:0,icon:v.banOutline},null,8,["icon"])):((0,i.uX)(),(0,i.Wv)(C,{key:1,icon:v.checkmarkOutline},null,8,["icon"])),(0,i.bF)(j,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(t.stage_current_name),1)])),_:2},1024)])),_:2},1032,["color"])):(0,i.Q3)("",!0)])),_:2},1024)])),_:2},1024),t.image_hash?((0,i.uX)(),(0,i.Wv)(w,{key:0,slot:"end"},{default:(0,i.k6)((()=>[(0,i.bF)($,{style:{"border-radius":"10px"},src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024)):(0,i.Q3)("",!0)])),_:2},1024)],8,l)))),128))])),_:1})):(0,i.Q3)("",!0),"jobs"==g.orderType&&y.routeListGroupped?((0,i.uX)(),(0,i.Wv)(O,{key:1,lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(X,null,{default:(0,i.k6)((()=>[s])),_:1}),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(y.routeListGroupped,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.courier_id},[(0,i.bF)(W,null,{default:(0,i.k6)((()=>[t.image_hash?((0,i.uX)(),(0,i.Wv)(w,{key:0,slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)($,{style:{"border-radius":"10px"},src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024)):(0,i.Q3)("",!0),(0,i.bF)(I,null,{default:(0,i.k6)((()=>[(0,i.Lk)("b",null,(0,n.v_)(t.courier_name),1)])),_:2},1024),(0,i.bF)(C,{slot:"end",icon:v.square,style:(0,n.Tr)(`color:${t.actual_color}`)},null,8,["icon","style"])])),_:2},1024),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.jobs,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.job_id,onClick:t=>y.itemClickConfirm(e)},[(0,i.bF)(W,{lines:"none",style:{"--inner-padding-bottom":"0px"}},{default:(0,i.k6)((()=>[e.finish_plan_scheduled_date?((0,i.uX)(),(0,i.Wv)(C,{key:0,icon:v.timeOutline,slot:"start"},null,8,["icon"])):(0,i.Q3)("",!0),(0,i.bF)(I,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(e.job_name),1)])),_:2},1024),(0,i.bF)(x,{slot:"end",color:e.stage_color},{default:(0,i.k6)((()=>[(0,i.bF)(C,{icon:v.checkmarkOutline},null,8,["icon"]),(0,i.bF)(j,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.Lk)("small",null,(0,n.v_)(e.stage_label),1)])),_:2},1024)])),_:2},1032,["color"])])),_:2},1024),(0,i.bF)(W,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",a,[(0,i.Lk)("div",d,[(0,i.Lk)("b",null,(0,n.v_)(e.start_plan_date),1)]),(0,i.Lk)("div",u,[(0,i.Lk)("small",null,(0,n.v_)(e.start_address),1)]),(0,i.Lk)("div",null,[(0,i.bF)(C,{icon:v.square,style:(0,n.Tr)(`color:${e.start_color}`)},null,8,["icon","style"])]),e.finish_plan_scheduled_date?((0,i.uX)(),(0,i.CE)("div",c,(0,n.v_)(e.finish_plan_scheduled_date),1)):((0,i.uX)(),(0,i.CE)("div",_,(0,n.v_)(e.finish_plan_date),1)),(0,i.Lk)("div",h,[(0,i.Lk)("small",null,(0,n.v_)(e.finish_address),1)]),(0,i.Lk)("div",null,[(0,i.bF)(C,{icon:v.square,style:(0,n.Tr)(`color:${e.finish_color}`)},null,8,["icon","style"])])])])),_:2},1024)],8,r)))),128))])))),128))])),_:1})):(0,i.Q3)("",!0),["active","done"].includes(g.orderType)&&null==g.orderList?((0,i.uX)(),(0,i.Wv)(O,{key:2},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)([1,2,3],(e=>(0,i.Lk)("div",{key:e},[(0,i.bF)(W,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(D,{style:{width:"50px"},slot:"start"}),(0,i.bF)(D,{style:{width:"100%"}}),(0,i.bF)(D,{style:{width:"50px"},slot:"end"})])),_:1}),(0,i.bF)(W,{lines:"full"},{default:(0,i.k6)((()=>[(0,i.bF)(D,{animated:"",style:{width:"30px",height:"30px","border-radius":"50px"},slot:"start"}),(0,i.bF)(x,{color:"medium"},{default:(0,i.k6)((()=>[(0,i.bF)(j,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.bF)(D,{animated:"",style:{width:"80px"}})])),_:1})])),_:1}),(0,i.bF)(x,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.bF)(C,{icon:v.checkmarkOutline},null,8,["icon"]),(0,i.bF)(j,{color:"dark"},{default:(0,i.k6)((()=>[(0,i.bF)(D,{animated:"",style:{width:"80px"}})])),_:1})])),_:1}),(0,i.bF)(D,{animated:"",style:{width:"40px",height:"40px","border-radius":"10px"},slot:"end"})])),_:1})]))),64))])),_:1})):g.orderList&&0!=(null===(E=g.orderList)||void 0===E?void 0:E.length)||g.jobList&&0!=(null===(J=g.jobList)||void 0===J?void 0:J.length)||g.routeList&&0!=(null===(Q=g.routeList)||void 0===Q?void 0:Q.length)?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",b,[e.$heap.getters.userIsLogged?((0,i.uX)(),(0,i.CE)("div",p,[(0,i.bF)(C,{icon:v.sparklesOutline,size:"large"},null,8,["icon"]),(0,i.bF)(j,null,{default:(0,i.k6)((()=>[(0,i.eW)("Заказов нет")])),_:1}),k,(0,i.bF)(T,{onClick:t[2]||(t[2]=t=>e.$router.replace("/")),style:{cursor:"pointer"},color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("но вы можете создать новый")])),_:1})])):((0,i.uX)(),(0,i.CE)("div",m,[(0,i.bF)(C,{icon:v.informationOutline,size:"large"},null,8,["icon"]),(0,i.bF)(j,null,{default:(0,i.k6)((()=>[(0,i.eW)("Необходимо войти в профиль")])),_:1}),f,(0,i.bF)(T,{onClick:t[3]||(t[3]=t=>e.$router.replace("/modal/user-authorize")),style:{cursor:"pointer"},color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("вход в профиль")])),_:1})]))])),(0,i.bF)(z,{onIonInfinite:t[4]||(t[4]=e=>y.listLoadMore(e)),id:"moderation-infinite-scroll"},{default:(0,i.k6)((()=>[(0,i.bF)(S,{"loading-spinner":"bubbles","loading-text":"Загрузка..."})])),_:1})]})),_:1})}o(4114);var g=o(5654),y=o(5480),F=o(1376),L=o(6028),I=o(8701),j=o(6859);const W={class:"center_chip"},C={class:"center_chip"},x={class:"center_chip"};function $(e,t,o,l,s,r){const a=(0,i.g2)("ion-title"),d=(0,i.g2)("ion-icon"),u=(0,i.g2)("ion-toolbar"),c=(0,i.g2)("ion-header"),_=(0,i.g2)("ion-avatar"),h=(0,i.g2)("ion-text"),b=(0,i.g2)("ion-label"),p=(0,i.g2)("ion-item"),k=(0,i.g2)("ion-chip"),m=(0,i.g2)("ion-note"),f=(0,i.g2)("ion-skeleton-text"),v=(0,i.g2)("ion-button"),g=(0,i.g2)("ion-item-group"),y=(0,i.g2)("ion-list"),F=(0,i.g2)("ion-content");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.eW)("Просмотр задания")])),_:1}),(0,i.bF)(d,{slot:"end",onClick:t[0]||(t[0]=e=>{r.close()}),icon:l.closeOutline,size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,i.bF)(F,null,{default:(0,i.k6)((()=>[o.orderData?((0,i.uX)(),(0,i.Wv)(y,{key:0},{default:(0,i.k6)((()=>[(0,i.bF)(p,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.locationOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(b,null,{default:(0,i.k6)((()=>[(0,i.bF)(h,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Курьер "+(0,n.v_)(e.$heap.state.user.user_name),1)])),_:1})])),_:1})])),_:1}),(0,i.bF)(p,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",W,[(0,i.bF)(k,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>{var e;return[(0,i.eW)((0,n.v_)(null===(e=o.orderData)||void 0===e?void 0:e.distance_km),1)]})),_:1})])),_:1})])])),_:1}),(0,i.bF)(p,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.storefrontOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(b,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.orderData.store_name),1)])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.orderData.location_address),1)])),_:1})])),_:1})])),_:1}),r.start_finish_distance_km?((0,i.uX)(),(0,i.Wv)(p,{key:0,lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",C,[(0,i.bF)(k,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(r.start_finish_distance_km),1)])),_:1})])),_:1})])])),_:1})):((0,i.uX)(),(0,i.Wv)(p,{key:1,lines:"none"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",x,[(0,i.bF)(k,{color:"success"},{default:(0,i.k6)((()=>[(0,i.bF)(f,{animated:"",style:{width:"100%"}})])),_:1})])])),_:1})),s.job?((0,i.uX)(),(0,i.Wv)(p,{key:2},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.flagOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(b,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Покупатель")])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>{var e,t;return[(0,i.eW)((0,n.v_)(null===(e=s.job.finish_location)||void 0===e?void 0:e.location_address)+(0,n.v_)(null===(t=s.job.finish_location)||void 0===t?void 0:t.location_comment),1)]})),_:1})])),_:1})])),_:1})):((0,i.uX)(),(0,i.Wv)(p,{key:3},{default:(0,i.k6)((()=>[(0,i.bF)(_,{slot:"start"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{icon:l.flagOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1}),(0,i.bF)(b,null,{default:(0,i.k6)((()=>[(0,i.bF)(h,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("Покупатель")])),_:1}),(0,i.bF)(f,{animated:"",style:{width:"60%"}}),(0,i.bF)(f,{animated:"",style:{width:"80%"}})])),_:1})])),_:1})),s.job?((0,i.uX)(),(0,i.Wv)(g,{key:4},{default:(0,i.k6)((()=>[(0,i.bF)(v,{onClick:t[1]||(t[1]=e=>r.deliveryStart()),expand:"block"},{default:(0,i.k6)((()=>[(0,i.eW)("Взять задание")])),_:1})])),_:1})):(0,i.Q3)("",!0)])),_:1})):(0,i.Q3)("",!0)])),_:1})],64)}var w={props:["orderData"],components:{IonList:g.nf,IonItemGroup:g.jh,IonTitle:g.BC,IonButton:g.Jm,IonSkeletonText:g.ds,IonNote:g.JI,IonChip:g.ZB,IonItem:g.uz,IonLabel:g.he,IonText:g.IO,IonAvatar:g.mC,IonIcon:g.iq,IonHeader:g.eU,IonToolbar:g.ai,IonContent:g.W9},setup(){return{storefrontOutline:y.te8,locationOutline:y.UN$,flagOutline:y.NBP,closeOutline:y.xfX}},data(){return{job:null}},mounted(){this.jobGet()},computed:{start_finish_distance_km(){var e,t;return null!==(e=this.job)&&void 0!==e&&e.start_finish_distance?Math.round((null===(t=this.job)||void 0===t?void 0:t.start_finish_distance)/1e3)+"км":"-"}},methods:{async jobGet(){try{let e=await L.A.api.itemJobGet(this.orderData.order_id);e.finish_location_address=e.finish_location_address.split(",").reverse().join(","),this.job=e}catch(o){var e,t;const i=null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;if("notfound"==i)return void this.$flash("Задание не найдено");if("notready"==i)return void this.$flash("Вы заняты или не открыли смену")}},async deliveryStart(){var e,t;const o=null===(e=I.A.courier)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.courier_id;try{await L.A.api.itemJobStart(this.orderData.order_id,o),1==this.job.is_shipment?this.$go("/order/shipment-"+this.orderData.order_id):this.$go("/order/order-"+this.orderData.order_id)}catch(l){var i,n;const e=null===(i=l.responseJSON)||void 0===i||null===(n=i.messages)||void 0===n?void 0:n.error;"notfound"==e&&this.$flash("Задание не найдено"),"notready"==e&&this.$flash("Смена курьера не открыта"),"notsearching"!=e&&"idle"!=e||this.$flash("Заданию уже назначен курьер")}j.A.publish("dismissModal")},close(){j.A.publish("dismissModal")}}},O=o(6262);const X=(0,O.A)(w,[["render",$],["__scopeId","data-v-1e3194ea"]]);var D=X;const T={style:{color:"#999"}},S=["href"],z={key:0},E={style:{border:"solid 2px var(--ion-color-primary)","border-radius":"3px",padding:"3px","background-color":"var(--ion-color-primary-tint)"}},J={key:1},Q=["href"],A=["href"];function G(e,t,o,l,s,r){const a=(0,i.g2)("ion-icon"),d=(0,i.g2)("ion-text"),u=(0,i.g2)("ion-item"),c=(0,i.g2)("ion-list"),_=(0,i.g2)("ion-card-subtitle"),h=(0,i.g2)("ion-card-header"),b=(0,i.g2)("ion-chip"),p=(0,i.g2)("ion-checkbox"),k=(0,i.g2)("ion-card-content"),m=(0,i.g2)("ion-card"),f=(0,i.g2)("ion-button"),v=(0,i.g2)("ion-content");return(0,i.uX)(),(0,i.Wv)(v,null,{default:(0,i.k6)((()=>[(0,i.bF)(c,{lines:"none"},{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[o.job.finish_plan_scheduled_date?((0,i.uX)(),(0,i.Wv)(a,{key:0,icon:l.timeOutline,slot:"start",style:{"font-size":"24px"}},null,8,["icon"])):(0,i.Q3)("",!0),(0,i.Lk)("h5",T,[(0,i.eW)((0,n.v_)(o.job.job_name)+" ",1),o.job.finish_plan_scheduled_date?((0,i.uX)(),(0,i.Wv)(d,{key:0,color:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(o.job.finish_plan_scheduled_date),1)])),_:1})):(0,i.Q3)("",!0),(0,i.eW)(" ["+(0,n.v_)(o.job.stage_label)+"]",1)])])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.Lk)("h6",null,"Забрать до "+(0,n.v_)(o.job.start_plan_date),1)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,{slot:"end",icon:l.square,size:"large",style:(0,n.Tr)(`color:${o.job.start_color}`)},null,8,["icon","style"]),(0,i.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.job.start_longitude},${o.job.start_latitude}&z=19&l=map,trf`,target:"_new",style:{color:"#999"}},(0,n.v_)(o.job.start_address),9,S)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[o.job.finish_plan_scheduled_date?((0,i.uX)(),(0,i.CE)("h6",z,[(0,i.eW)("Привезти до "),(0,i.Lk)("b",E,(0,n.v_)(o.job.finish_plan_scheduled_date),1)])):((0,i.uX)(),(0,i.CE)("h6",J,"Привезти до "+(0,n.v_)(o.job.finish_plan_date),1))])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,{slot:"end",icon:l.square,size:"large",style:(0,n.Tr)(`color:${o.job.finish_color}`)},null,8,["icon","style"]),(0,i.Lk)("a",{href:`https://yandex.ru/maps/?pt=${o.job.finish_longitude},${o.job.finish_latitude}&z=19&l=map,trf`,target:"_new",style:{color:"#999"}},(0,n.v_)(o.job.finish_address),9,Q)])),_:1})])),_:1}),"awaited"==o.job.stage&&1==o.job.payment_by_cash?((0,i.uX)(),(0,i.Wv)(m,{key:0,color:"light"},{default:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(_,null,{default:(0,i.k6)((()=>[(0,i.eW)("Заказ не оплачен")])),_:1})])),_:1}),s.customerDetails?((0,i.uX)(),(0,i.Wv)(k,{key:0},{default:(0,i.k6)((()=>[(0,i.Lk)("p",null,[(0,i.eW)("Созвонитесь с клиентом "),(0,i.Lk)("b",null,(0,n.v_)(s.customerDetails.user_name),1),(0,i.eW)(),(0,i.bF)(b,{color:"primary"},{default:(0,i.k6)((()=>[(0,i.Lk)("a",{href:`tel:+${s.customerDetails.user_phone}`},"+"+(0,n.v_)(s.customerDetails.user_phone),9,A)])),_:1})]),(0,i.Lk)("p",null,[(0,i.bF)(p,{onClick:t[0]||(t[0]=e=>s.confirmed=e.target.checked?0:1)},{default:(0,i.k6)((()=>[(0,i.eW)("Клиент на связи и готов ждать")])),_:1})])])),_:1})):(0,i.Q3)("",!0)])),_:1})):(0,i.Q3)("",!0),"awaited"==o.job.stage?((0,i.uX)(),(0,i.Wv)(f,{key:1,onClick:t[1]||(t[1]=e=>r.jobTake()),expand:"block",disabled:!s.confirmed},{default:(0,i.k6)((()=>[(0,i.eW)("Взять задание")])),_:1},8,["disabled"])):"scheduled"!=o.job.stage?((0,i.uX)(),(0,i.Wv)(f,{key:2,onClick:t[2]||(t[2]=e=>r.itemOpen()),expand:"block"},{default:(0,i.k6)((()=>[(0,i.eW)("Открыть заказ")])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(f,{onClick:t[3]||(t[3]=e=>r.close()),expand:"block",color:"light"},{default:(0,i.k6)((()=>[(0,i.eW)("Закрыть")])),_:1})])),_:1})}var q=o(2311),B=o.n(q),M={props:["job"],components:{IonList:g.nf,IonButton:g.Jm,IonItem:g.uz,IonIcon:g.iq,IonContent:g.W9,IonCard:g.b_,IonCardHeader:g.ME,IonCardContent:g.I9,IonCardSubtitle:g.HW,IonChip:g.ZB,IonCheckbox:g.eY},setup(){return{square:y.EwI,timeOutline:y.CVk}},data(){return{customerDetails:null,confirmed:0}},mounted(){"awaited"==this.job.stage&&1==this.job.payment_by_cash?(this.customerDetailsGet(),this.confirmed=0):this.confirmed=1},methods:{async jobTake(){try{const e={order_id:this.job.order_id};await B().post(`${this.$heap.state.hostname}DeliveryJob/itemTake`,e),this.itemOpen(),this.$topic.publish("dismissModal"),g.OZ.dismiss(null,"confirm")}catch(o){var e,t;const i=null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;"forbidden"==i&&this.$flash("Не хватает прав"),"notfound"==i&&this.$flash("Задание не найдено"),"notready"==i&&this.$flash("Ваш статус должен быть 'ГОТОВ'"),"notsearching"!=i&&"idle"!=i||this.$flash("Заданию уже назначен курьер")}},itemOpen(){1==this.job.is_shipment?this.$go(`/order/shipment-${this.job.order_id}`):this.$go(`/order/order-${this.job.order_id}`)},async customerDetailsGet(){this.customerDetails=null;const e={job_id:this.job.job_id};try{this.customerDetails=await B().post(`${this.$heap.state.hostname}DeliveryJob/itemCustomerDetailGet`,e)}catch{this.$flash("Данные клиента не найдены")}},close(){g.OZ.dismiss(null,"cancel")}}};const R=(0,O.A)(M,[["render",G],["__scopeId","data-v-a1259102"]]);var N=R,V={components:{IonSegment:g.Gp,IonSegmentButton:g.eP,IonIcon:g.iq,IonAvatar:g.mC,IonText:g.IO,IonLabel:g.he,IonItem:g.uz,IonList:g.nf,IonListHeader:g.AF,IonChip:g.ZB,IonNote:g.JI,IonImg:g.KW,IonInfiniteScroll:g.Ax,IonInfiniteScrollContent:g.Hp,IonSkeletonText:g.ds},setup(){return{sparklesOutline:y.isq,storefrontOutline:y.te8,timeOutline:y.CVk,ordersIcon:F,rocketOutline:y.hGQ,ribbonOutline:y.rp8,checkmarkOutline:y.g1L,informationOutline:y.Hzj,banOutline:y.Av6,square:y.EwI}},data(){return{jobList:null,routeList:null,orderList:null,orderType:"active",courierJobsInclude:null,clock:null}},computed:{orderListComputed(){for(let e of this.orderList){switch(e.user_role){case"customer":e.icon=F;break;case"admin":e.icon=y.rp8;break;case"courier":e.icon=y.hGQ;break;case"supplier":e.icon=y.te8;break}e.date=this.toLocDate(e.created_at),e.stage_color="customer_cart"==e.stage_current?"light":"primary",e.stage_color="1"==e.is_canceled?"danger":e.stage_color}return this.orderList},jobListComputed(){for(let e of this.jobList)e.location_address||(e.location_address=""),e.distance?e.distance_km=Math.round(e.distance/1e3)+"км":e.distance_km="",e.date_time=this.toLocDateTime(e.created_at);return this.jobList},routeListGroupped(){if(!this.routeList)return null;let e={};for(let n in this.routeList.open_shifts){let t=this.routeList.open_shifts[n];t.jobs=[],e["route_"+t.courier_id]=t}const t={scheduled:"Запланирован",awaited:"Очередь",inited:"Собирается",assigned:"Назначен",started:"В пути"};for(let n of this.routeList.delivery_jobs){var o,i;const l=new Date(1e3*(1*n.start_plan+1*n.finish_arrival_time)),s=new Date(1e3*n.start_plan);if(n.start_plan_date=s.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}),n.finish_plan_date=l.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}),n.stage_label=t[n.stage]||"-",n.stage_color=["scheduled","awaited"].includes(n.stage)?"light":"primary",n.is_courier_job=1,n.finish_plan_scheduled>0){const e=new Date(1e3*n.finish_plan_scheduled);n.finish_plan_scheduled_date=e.toLocaleDateString(void 0,{month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}n.courier_id||(n.courier_id=0,e["route_0"]||(e["route_0"]={courier_name:"",actual_color:"#fff",jobs:[]})),null===(o=e["route_"+n.courier_id])||void 0===o||null===(i=o.jobs)||void 0===i||i.push(n)}return e}},mounted(){this.$topic.on("courierStatusChange",(()=>{this.courierReadinessCheck()})),this.$topic.on("userGet",(()=>{this.listLoad(this.orderType,"reload")})),this.courierReadinessCheck()},methods:{toLocDate(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,o)},toLocDateTime(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString(void 0,o)},courierReadinessCheck(){this.courierJobsInclude=1==localStorage.user_is_courier||1==localStorage.user_is_admin,0==this.courierJobsInclude&&(this.orderType="active")},async listLoad(e,t="reload"){var o;if("jobs"==e)return this.autoReload(e),void this.listRouteLoad();let i="system_finish";"active"==e&&(this.autoReload(e),i="active_only");const n={order_group_type:i,offset:0,limit:(null===(o=this.orderList)||void 0===o?void 0:o.length)||10};var l,s;"append"==t&&(n.offset=null!==(l=null===(s=this.orderList)||void 0===s?void 0:s.length)&&void 0!==l?l:0,n.limit=10);let r=await L.A.api.listLoad(n);var a;(this.orderType=e,"append"==t)&&(null!==(a=this.orderList)&&void 0!==a||(this.orderList=[]),r=this.orderList.concat(r));this.orderList=r,this.jobList=null},async listLoadMore(e){await this.listLoad(this.orderType,"append"),e.target.complete()},listTypeChanged(e){const t=e.target.value;this.orderList=null,this.listLoad(t)},async listRouteLoad(){try{const e={};this.routeList=await B().post(`${this.$heap.state.hostname}DeliveryJob/routeListGet`,e)}catch(o){var e,t;null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t||t.error;console.log(o)}},autoReload(e){clearTimeout(this.clock);const t=12e4;"jobs"!=e&&"active"!=e||(this.clock=setTimeout((()=>{this.listLoad(this.orderType)}),t))},ionViewDidEnter(){this.courierReadinessCheck(),this.listLoad(this.orderType)},ionViewDidLeave(){clearTimeout(this.clock)},async itemClickConfirm(e){const t=await g.OZ.create({component:N,componentProps:{job:e},initialBreakpoint:.75,breakpoints:[.75,1]});this.$topic.on("dismissModal",(()=>{t.dismiss()})),await t.present();const{data:o,role:i}=await t.onDidDismiss();"confirm"==i&&this.itemOpen(e.order_id,e.is_shipment)},async itemClick(e){if(e.is_courier_job){const t=await g.OZ.create({component:D,componentProps:{orderData:e},initialBreakpoint:.75,breakpoints:[.5]}),o=function(){t.dismiss()};return j.A.on("dismissModal",o),t.present()}this.itemOpen(e.order_id,e.is_shipment)},itemOpen(e,t){1==t?this.$go(`/order/shipment-${e}`):this.$go(`/order/order-${e}`)}}};const Z=(0,O.A)(V,[["render",v]]);var H=Z}}]);
//# sourceMappingURL=5175.0dd5f584.js.map