"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[711],{4405:function(e,t,o){var i=o(2008);const r={deliveryCalculate(e){if(!e.locations||!e.locations[0]||!e.locations[0].distance)return null;const t=e.locations[0].distance,o=e.store_time_preparation||0;return r.deliveryTimeCalculate(t,o)},deliveryTimeCalculate(e,t){var o;t=parseInt(null!==(o=t)&&void 0!==o?o:i.Z.getters.settings.delivery.timePreparationDefault);const r=parseInt(i.Z.getters.settings.delivery.timeDelta),n=parseInt(i.Z.getters.settings.delivery.speed),a=5*Math.round(e/n*60/5)+t,l=a>r?a-r:a,s=l+r;return{time:a,timeMin:l,timeMax:s}}};t["Z"]=r},7327:function(e,t,o){o.d(t,{Z:function(){return m}});var i=o(6252),r=o(3577);const n=(0,i.Uk)("Просмотр фотографии");function a(e,t,o,a,l,s){const d=(0,i.up)("ion-title"),c=(0,i.up)("ion-icon"),u=(0,i.up)("ion-toolbar"),m=(0,i.up)("ion-header"),_=(0,i.up)("ion-button"),p=(0,i.up)("ion-col"),h=(0,i.up)("ion-row"),f=(0,i.up)("ion-grid"),w=(0,i.up)("ion-img"),g=(0,i.up)("ion-content");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{color:"secondary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[n])),_:1}),(0,i.Wm)(c,{icon:a.closeOutline,onClick:t[0]||(t[0]=e=>{a.closeModal()}),slot:"end",size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[o.actions?((0,i.wg)(),(0,i.j4)(f,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.actions,((e,t)=>((0,i.wg)(),(0,i.j4)(p,{key:t},{default:(0,i.w5)((()=>{var o;return[e[0]?((0,i.wg)(),(0,i.j4)(_,{key:0,onClick:o=>s.actionCreate(t,e[1]),expand:"block",color:null!==(o=e[1])&&void 0!==o?o:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(e[0]),1)])),_:2},1032,["onClick","color"])):(0,i.kq)("",!0)]})),_:2},1024)))),128))])),_:1})])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(w,{src:e.$heap.state.hostname+"image/get.php/"+o.image_hash+".1000.1000.webp"},null,8,["src"])])),_:1})],64)}var l=o(8903),s=o(2066),d={props:["image_hash","actions"],components:{IonIcon:s.gu,IonToolbar:s.sr,IonHeader:s.Gu,IonImg:s.Xz,IonContent:s.W2,IonTitle:s.wd,IonButton:s.YG,IonCol:s.wI,IonRow:s.Nd,IonGrid:s.jY},setup(){const e=function(){s.Fy.dismiss()};return{closeModal:e,closeOutline:l.fID}},methods:{actionCreate(e,t){("danger"!=t||confirm("Вы уверены?"))&&s.Fy.dismiss(null,e)}}},c=o(3744);const u=(0,c.Z)(d,[["render",a]]);var m=u},2226:function(e,t,o){o.d(t,{Z:function(){return b}});var i=o(6252),r=o(3577);const n=(0,i.Uk)("Фотографии"),a={key:0,class:"image_grid"},l=["onClick"],s={key:0},d={key:1},c={key:0,class:"image_controls"},u=["id"];function m(e,t,o,m,_,p){var h;const f=(0,i.up)("ion-label"),w=(0,i.up)("ion-icon"),g=(0,i.up)("ion-item"),k=(0,i.up)("ion-img"),y=(0,i.up)("ion-avatar");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(g,{lines:"none",onClick:t[0]||(t[0]=e=>{_.editMode=!_.editMode,_.editMode&&p.load()})},{default:(0,i.w5)((()=>[o.title?((0,i.wg)(),(0,i.j4)(f,{key:0,color:"imageList?.length?'':medium"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(o.title),1)])),_:1})):((0,i.wg)(),(0,i.j4)(f,{key:1,color:"imageList?.length?'':medium"},{default:(0,i.w5)((()=>[n])),_:1})),_.editMode?((0,i.wg)(),(0,i.j4)(w,{key:2,slot:"end",icon:m.settingsSharp,color:"primary"},null,8,["icon"])):((0,i.wg)(),(0,i.j4)(w,{key:3,slot:"end",icon:m.settingsOutline},null,8,["icon"]))])),_:1}),null!==(h=p.imageList)&&void 0!==h&&h.length?((0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.imageList,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.image_id,style:{position:"relative"}},[(0,i._)("div",{style:{position:"absolute",top:"0px","background-color":"#fffc","font-size":"0.75em"},onClick:e=>p.imagePreview(t.image_hash)},[t.deleted_at?((0,i.wg)(),(0,i.iD)("div",s,"будет удалено")):1==t.is_disabled?((0,i.wg)(),(0,i.iD)("div",d,"на модерации")):(0,i.kq)("",!0)],8,l),(0,i.Wm)(y,{onClick:e=>p.imagePreview(t.image_hash),class:(0,r.C_)(t.class)},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{src:e.$heap.state.hostname+"image/get.php/"+t.image_hash+".100.100.webp"},null,8,["src"])])),_:2},1032,["onClick","class"]),_.editMode?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(w,{icon:m.chevronBackCircleOutline,onClick:e=>p.back(t)},null,8,["icon","onClick"]),p.isAdmin&&1==t.is_disabled?((0,i.wg)(),(0,i.j4)(w,{key:0,icon:m.checkmarkCircle,color:"success",onClick:e=>p.enable(t)},null,8,["icon","onClick"])):(0,i.kq)("",!0),t.deleted_at?((0,i.wg)(),(0,i.j4)(w,{key:1,icon:m.addCircle,color:"success",onClick:e=>p.restore(t)},null,8,["icon","onClick"])):((0,i.wg)(),(0,i.j4)(w,{key:2,icon:m.trash,color:"danger",onClick:e=>p.remove(t)},null,8,["icon","onClick"])),(0,i.Wm)(w,{icon:m.chevronForwardCircleOutline,onClick:e=>p.forward(t)},null,8,["icon","onClick"])])):(0,i.kq)("",!0)])))),128))])):(0,i.kq)("",!0),(0,i._)("input",{type:"file",id:_.fileUploaderId,accept:".png, .jpg, .jpeg, .webp, .gif",onChange:t[1]||(t[1]=e=>p.uploadImage(e)),style:{display:"none"}},null,40,u)])}var _=o(8903),p=o(2066),h=o(7327),f=o(9755),w=o.n(f),g=o(9042),k=o(351),y={props:["images","image_holder","image_holder_id","controller","title"],components:{IonLabel:p.Q$,IonIcon:p.gu,IonItem:p.Ie,IonImg:p.Xz,IonAvatar:p.BJ},setup(){return{settingsOutline:_.C$N,settingsSharp:_.kiF,chevronBackCircleOutline:_.CK0,chevronForwardCircleOutline:_.esm,trash:_._Ij,addCircle:_.ZWo,checkmarkCircle:_.I1A}},data(){var e;return{images_loaded:null,editMode:!1,fileUploaderId:(null!==(e=this.image_holder)&&void 0!==e?e:this.controller)+this.image_holder_id}},computed:{imageList(){let e=this.images_loaded||this.images,t=[];for(let o in e)e[o].deleted_at?(e[o].class=" deleted",this.editMode&&t.push(e[o])):1==e[o].is_disabled?(e[o].class=" disabled",this.editMode&&t.push(e[o])):t.push(e[o]);return t},isAdmin(){return k.Z.isAdmin()}},methods:{async back(e){try{await w().post(this.$heap.state.hostname+"Image/itemUpdateOrder",{image_id:e.image_id,dir:"up"}),this.load()}catch{}},async forward(e){try{await w().post(this.$heap.state.hostname+"Image/itemUpdateOrder",{image_id:e.image_id,dir:"down"}),this.load()}catch{}},async remove(e){try{await w().post(this.$heap.state.hostname+"Image/itemDelete",{image_id:e.image_id}),this.load(),this.$flash("Фото перемещено в корзину и будет удалено")}catch{}},async restore(e){try{await w().post(this.$heap.state.hostname+"Image/itemUnDelete",{image_id:e.image_id}),this.load(),this.$flash("Фото перемещено извлечено из корзины")}catch{}},async enable(e){try{await w().post(this.$heap.state.hostname+"Image/itemDisable",{image_id:e.image_id,is_disabled:0}),this.load()}catch{}},async load(){var e;const t={image_holder_id:this.image_holder_id,image_holder:null!==(e=this.image_holder)&&void 0!==e?e:this.controller,is_disabled:1,is_deleted:1,is_active:1};this.images_loaded=await w().post(this.$heap.state.hostname+"Image/listGet",t)},async imagePreview(e){const t=await p.Fy.create({component:h.Z,componentProps:{image_hash:e},initialBreakpoint:.5,breakpoints:[.5,1]}),o=function(){t.dismiss()};return g.Z.on("dismissModal",o),t.present()},async uploadImage(e){let t=new FormData;t.append("files[]",e.target.files[0]),t.set("image_holder_id",this.image_holder_id),this.image_holder&&t.set("image_holder",this.image_holder);const o={url:this.$heap.state.hostname+this.controller+"/fileUpload",type:"POST",data:t,processData:!1,contentType:!1};try{await w().ajax(o),this.load()}catch(l){var i,r,n,a;if("limit_exeeded"==(null===l||void 0===l||null===(i=l.responseJSON)||void 0===i||null===(r=i.messages)||void 0===r?void 0:r.error))return void this.$flash("Уже загружено максимальное количество фото");if("no_valid_images"==(null===l||void 0===l||null===(n=l.responseJSON)||void 0===n||null===(a=n.messages)||void 0===a?void 0:a.error))return void this.$flash("Формат файла не поддерживается");this.$flash("Не удалось загрузить фото")}},take_photo(){w()(`#${this.fileUploaderId}`).trigger("click"),this.editMode=!0}}},v=o(3744);const I=(0,v.Z)(y,[["render",m],["__scopeId","data-v-5ec0cc30"]]);var b=I},132:function(e,t,o){o.d(t,{Z:function(){return h}});var i=o(6252);const r=(0,i.Uk)("Фискальный чек"),n=["src"],a={key:0,style:{position:"fixed",top:"200px",left:"calc( 50% - 50px )"}},l=["src"];function s(e,t,o,s,d,c){const u=(0,i.up)("ion-icon"),m=(0,i.up)("ion-title"),_=(0,i.up)("ion-toolbar"),p=(0,i.up)("ion-header"),h=(0,i.up)("ion-content");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,{color:"secondary"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{icon:s.receiptOutline,slot:"start"},null,8,["icon"]),(0,i.Wm)(m,{slot:"start"},{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(u,{icon:s.closeOutline,onClick:t[0]||(t[0]=e=>{s.closeModal()}),slot:"end",size:"large"},null,8,["icon"])])),_:1})])),_:1})])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i._)("iframe",{src:o.billLink,style:{width:"100%",height:"85%",border:"none"},onLoad:t[1]||(t[1]=e=>c.onLoad())},null,40,n),d.loadAnimation?((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("img",{src:s.loading},null,8,l)])):(0,i.kq)("",!0)])),_:1})],64)}var d=o(2066),c=o(659),u=o(8903),m={components:{IonTitle:d.wd,IonIcon:d.gu,IonToolbar:d.sr,IonHeader:d.Gu,IonContent:d.W2},props:["billLink"],setup(){const e=function(){d.Fy.dismiss()};return{closeModal:e,closeOutline:u.fID,receiptOutline:u.d71,loading:c}},data(){return{loadAnimation:1}},methods:{onLoad(){this.loadAnimation=0}}},_=o(3744);const p=(0,_.Z)(m,[["render",s]]);var h=p},826:function(e,t,o){o.d(t,{Z:function(){return m}});var i=o(6252);const r=(0,i.Uk)(" Чтобы вовремя узнавать об изменениях статусов заказов, подпишитесь на уведомления "),n=(0,i.Uk)("Подписаться");function a(e,t,o,a,l,s){const d=(0,i.up)("ion-button"),c=(0,i.up)("ion-card-content"),u=(0,i.up)("ion-card");return"default"!=l.permission||l.wasRejected?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0,color:"light"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[r,(0,i._)("p",null,[(0,i.Wm)(d,{onClick:t[0]||(t[0]=e=>s.subscribe()),expand:"block"},{default:(0,i.w5)((()=>[n])),_:1})])])),_:1})])),_:1}))}var l=o(351),s=o(2066),d={components:{IonButton:s.YG,IonCard:s.PM,IonCardContent:s.FN},data(){let e="Notification"in window?Notification.permission:"notsupported";return{permission:e,wasRejected:0}},methods:{async subscribe(){if("Notification"in window)try{this.permission=await Notification.requestPermission(),"granted"==this.permission&&l.Z.firebase.saveNotificationToken()}catch(e){this.$flash("Вы не разрешили уведомлять вас")}else this.$flash("Ваше устройство не поддерживает уведомления")},reject(){localStorage.pushNotificationsWasRejected=this.wasRejected=1}}},c=o(3744);const u=(0,c.Z)(d,[["render",a]]);var m=u},2711:function(e,t,o){o.r(t),o.d(t,{default:function(){return ve}});var i=o(6252);const r={key:0,style:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},n={style:{width:"max-content","text-align":"center"}},a=(0,i.Uk)("Заказ не найден"),l=(0,i._)("br",null,null,-1),s=(0,i._)("a",{href:"/order/order-list"},"список заказов",-1),d=(0,i.Uk)("Отказ клиента"),c=(0,i.Uk)("Заказ не готов/не соответствует"),u=(0,i.Uk)("Поломка в пути"),m=(0,i.Uk)("Заказ испорчен");function _(e,t,o,_,p,h){const f=(0,i.up)("ion-icon"),w=(0,i.up)("ion-label"),g=(0,i.up)("order-comp"),k=(0,i.up)("order-info-comp"),y=(0,i.up)("order-tracking-comp"),v=(0,i.up)("image-tile-comp"),I=(0,i.up)("order-history-comp"),b=(0,i.up)("msg-subscription-comp"),W=(0,i.up)("order-meta-comp"),D=(0,i.up)("ion-item"),j=(0,i.up)("ion-list"),C=(0,i.up)("ion-content"),$=(0,i.up)("ion-popover"),O=(0,i.up)("base-layout");return(0,i.wg)(),(0,i.j4)(O,{pageTitle:`Заказ #${p.order_id}`,pageDefaultBackLink:"/order/order-list"},{default:(0,i.w5)((()=>{var e,o,O;return["notfound"==p.order?((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",n,[(0,i.Wm)(f,{icon:_.sparklesOutline,size:"large"},null,8,["icon"]),(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[a])),_:1}),l,s])])):(0,i.kq)("",!0),(0,i.Wm)(g,{orderData:p.order,onStageCreate:h.onStageCreate,onOrderRefresh:h.itemGet},null,8,["orderData","onStageCreate","onOrderRefresh"]),(0,i.Wm)(k,{orderData:p.order},null,8,["orderData"]),(0,i.Wm)(y,{orderData:p.order},null,8,["orderData"]),p.order?((0,i.wg)(),(0,i.j4)(v,{key:1,images:null===(e=p.order)||void 0===e?void 0:e.images,image_holder_id:null===(o=p.order)||void 0===o?void 0:o.order_id,controller:"Order",ref:"orderImgs"},null,8,["images","image_holder_id"])):(0,i.kq)("",!0),(0,i.Wm)(I,{orderData:p.order},null,8,["orderData"]),(0,i.Wm)(b),"system_finish"==(null===(O=p.order)||void 0===O?void 0:O.stage_current)?((0,i.wg)(),(0,i.j4)(W,{key:2,orderId:p.order_id},null,8,["orderId"])):(0,i.kq)("",!0),(0,i.Wm)($,{"is-open":p.isOpenDeliveryRejectionPopover,onDidDismiss:t[4]||(t[4]=e=>p.isOpenDeliveryRejectionPopover=!1)},{default:(0,i.w5)((()=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.Wm)(D,{button:!0,detail:!1,onClick:t[0]||(t[0]=e=>h.action_rejected_reason("ОТКАЗ КУРЬЕРА: Отказ клиента"))},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[d])),_:1})])),_:1}),(0,i.Wm)(D,{button:!0,detail:!1,onClick:t[1]||(t[1]=e=>h.action_rejected_reason("ОТКАЗ КУРЬЕРА: Заказ не готов/не соответствует"))},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[c])),_:1})])),_:1}),(0,i.Wm)(D,{button:!0,detail:!1,onClick:t[2]||(t[2]=e=>h.action_rejected_reason("ОТКАЗ КУРЬЕРА: Поломка в пути"))},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[u])),_:1})])),_:1}),(0,i.Wm)(D,{button:!0,detail:!1,onClick:t[3]||(t[3]=e=>h.action_rejected_reason("ОТКАЗ КУРЬЕРА: Заказ испорчен"))},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[m])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-open"])]})),_:1},8,["pageTitle"])}o(6699);var p=o(8903),h=o(2066),f=o(7782),w=o(7479),g=o(3577);const k=(0,i.Uk)("История заказа");function y(e,t,o,r,n,a){var l;const s=(0,i.up)("ion-label"),d=(0,i.up)("ion-item"),c=(0,i.up)("ion-icon"),u=(0,i.up)("ion-text"),m=(0,i.up)("ion-note"),_=(0,i.up)("ion-list"),p=(0,i.up)("ion-accordion"),h=(0,i.up)("ion-accordion-group");return null!==(l=o.orderData)&&void 0!==l&&l.stages?((0,i.wg)(),(0,i.j4)(h,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{slot:"header"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[k])),_:1})])),_:1}),(0,i.Wm)(_,{slot:"content"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.orderData.stages,(e=>((0,i.wg)(),(0,i.j4)(d,{key:e.group_id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{slot:"start",icon:r.checkmarkOutline,size:"small",color:"success"},null,8,["icon"]),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(e.group_name),1)])),_:2},1024),(0,i.Wm)(m,{slot:"end",style:{width:"80px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(e.created_at),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0)}var v={props:["orderData"],components:{IonIcon:h.gu,IonText:h.yW,IonLabel:h.Q$,IonItem:h.Ie,IonList:h.q_,IonNote:h.uN,IonAccordion:h.We,IonAccordionGroup:h.eh},setup(){return{checkmarkOutline:p.TjA}}},I=o(3744);const b=(0,I.Z)(v,[["render",y]]);var W=b;const D=(0,i.Uk)("Покупатель "),j=["href"],C=["href"],$=["href"],O=(0,i.Uk)("Курьер "),z=["href"],q=["href"],U=["href"],x=(0,i.Uk)("Продавец "),L=["href"],Z=["href"],G=["href"];function M(e,t,o,r,n,a){const l=(0,i.up)("ion-label"),s=(0,i.up)("ion-item"),d=(0,i.up)("ion-icon"),c=(0,i.up)("ion-chip"),u=(0,i.up)("ion-accordion"),m=(0,i.up)("ion-accordion-group");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((()=>{var e,t,n,a,m,_;return[null!==(e=o.orderData)&&void 0!==e&&null!==(t=e.info)&&void 0!==t&&t.customer_name?((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{slot:"header"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[D,(0,i._)("b",null,(0,g.zw)(o.orderData.info.customer_name),1)])),_:1})])),_:1}),(0,i.Wm)(s,{slot:"content"},{default:(0,i.w5)((()=>[o.orderData.info.customer_phone?((0,i.wg)(),(0,i.j4)(c,{key:0,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.callOutline},null,8,["src"]),(0,i._)("a",{href:`tel:${o.orderData.info.customer_phone}`},(0,g.zw)(o.orderData.info.customer_phone),9,j)])),_:1})):(0,i.kq)("",!0),o.orderData.info.customer_email?((0,i.wg)(),(0,i.j4)(c,{key:1,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.mailOutline},null,8,["src"]),(0,i._)("a",{href:`mailto:${o.orderData.info.customer_email}`},(0,g.zw)(o.orderData.info.customer_email),9,C)])),_:1})):(0,i.kq)("",!0),o.orderData.info.customer_location_address?((0,i.wg)(),(0,i.j4)(c,{key:2,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.locationOutline},null,8,["src"]),(0,i._)("a",{href:`https://yandex.ru/maps/?pt=${o.orderData.info.customer_location_longitude},${o.orderData.info.customer_location_latitude}&z=19&l=map,trf`,target:"_new"},(0,g.zw)(o.orderData.info.customer_location_address)+(0,g.zw)(o.orderData.info.customer_location_comment),9,$)])),_:1})):(0,i.kq)("",!0)])),_:1})])),_:1})):(0,i.kq)("",!0),null!==(n=o.orderData)&&void 0!==n&&null!==(a=n.info)&&void 0!==a&&a.courier_name?((0,i.wg)(),(0,i.j4)(u,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{slot:"header"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[O,(0,i._)("b",null,(0,g.zw)(o.orderData.info.courier_name),1)])),_:1})])),_:1}),(0,i.Wm)(s,{slot:"content"},{default:(0,i.w5)((()=>[o.orderData.info.courier_phone?((0,i.wg)(),(0,i.j4)(c,{key:0,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.callOutline},null,8,["src"]),(0,i._)("a",{href:`tel:${o.orderData.info.courier_phone}`},(0,g.zw)(o.orderData.info.courier_phone),9,z)])),_:1})):(0,i.kq)("",!0),o.orderData.info.courier_email?((0,i.wg)(),(0,i.j4)(c,{key:1,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.mailOutline},null,8,["src"]),(0,i._)("a",{href:`mailto:${o.orderData.info.courier_email}`},(0,g.zw)(o.orderData.info.courier_email),9,q)])),_:1})):(0,i.kq)("",!0),o.orderData.info.courier_location_address?((0,i.wg)(),(0,i.j4)(c,{key:2,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.locationOutline},null,8,["src"]),(0,i._)("a",{href:`https://yandex.ru/maps/?pt=${o.orderData.info.courier_location_longitude},${o.orderData.info.customer_location_latitude}&z=19&l=map,trf`,target:"_new"},(0,g.zw)(o.orderData.info.courier_location_address)+" "+(0,g.zw)(o.orderData.info.courier_location_comment),9,U)])),_:1})):(0,i.kq)("",!0)])),_:1})])),_:1})):(0,i.kq)("",!0),null!==(m=o.orderData)&&void 0!==m&&null!==(_=m.info)&&void 0!==_&&_.supplier_name?((0,i.wg)(),(0,i.j4)(u,{key:2},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{slot:"header"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[x,(0,i._)("b",null,(0,g.zw)(o.orderData.info.supplier_name),1)])),_:1})])),_:1}),(0,i.Wm)(s,{slot:"content"},{default:(0,i.w5)((()=>[o.orderData.info.supplier_phone?((0,i.wg)(),(0,i.j4)(c,{key:0,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.callOutline},null,8,["src"]),(0,i._)("a",{href:`tel:${o.orderData.info.supplier_phone}`},(0,g.zw)(o.orderData.info.supplier_phone),9,L)])),_:1})):(0,i.kq)("",!0),o.orderData.info.supplier_email?((0,i.wg)(),(0,i.j4)(c,{key:1,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.mailOutline},null,8,["src"]),(0,i._)("a",{href:`mailto:${o.orderData.info.supplier_email}`},(0,g.zw)(o.orderData.info.supplier_email),9,Z)])),_:1})):(0,i.kq)("",!0),o.orderData.info.supplier_location_address?((0,i.wg)(),(0,i.j4)(c,{key:2,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.locationOutline},null,8,["src"]),(0,i._)("a",{href:`https://yandex.ru/maps/?pt=${o.orderData.info.supplier_location_longitude},${o.orderData.info.supplier_location_latitude}&z=19&l=map,trf`,target:"_new"},(0,g.zw)(o.orderData.info.supplier_location_address)+" "+(0,g.zw)(o.orderData.info.supplier_location_comment),9,G)])),_:1})):(0,i.kq)("",!0)])),_:1})])),_:1})):(0,i.kq)("",!0)]})),_:1})}var S={props:["orderData"],components:{IonIcon:h.gu,IonChip:h.hM,IonLabel:h.Q$,IonItem:h.Ie,IonAccordion:h.We,IonAccordionGroup:h.eh},setup(){return{locationOutline:p.Iv7,callOutline:p.H7N,mailOutline:p.xOl}},data(){return{}},computed:{},methods:{}};const T=(0,I.Z)(S,[["render",M],["__scopeId","data-v-064140ae"]]);var P=T;const A=(0,i.Uk)("Дополнительно"),F={slot:"content",class:"ion-padding"},N={key:0},H={key:1},Y={key:2};function B(e,t,o,r,n,a){const l=(0,i.up)("ion-label"),s=(0,i.up)("ion-item"),d=(0,i.up)("ion-icon"),c=(0,i.up)("ion-text"),u=(0,i.up)("ion-chip"),m=(0,i.up)("ion-button"),_=(0,i.up)("ion-list"),p=(0,i.up)("ion-accordion"),h=(0,i.up)("ion-accordion-group");return(0,i.wg)(),(0,i.j4)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{slot:"header",onClick:t[0]||(t[0]=e=>a.itemMetaGet())},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[A])),_:1})])),_:1}),(0,i._)("div",F,[n.meta.payment_card_fixate_sum>0?((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.cardOutline},null,8,["src"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Предоплата "+(0,g.zw)(n.meta.payment_card_fixate_sum)+(0,g.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1})):(0,i.kq)("",!0),n.meta.payment_card_refund_sum>0?((0,i.wg)(),(0,i.j4)(u,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.cardOutline},null,8,["src"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Сдача "+(0,g.zw)(n.meta.payment_card_refund_sum)+(0,g.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1})):(0,i.kq)("",!0),n.meta.payment_card_confirm_sum>0?((0,i.wg)(),(0,i.j4)(u,{key:2},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.cardOutline},null,8,["src"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Оплачено "+(0,g.zw)(n.meta.payment_card_confirm_sum)+(0,g.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1})):(0,i.kq)("",!0),n.meta.delivery_by_courier||n.meta.delivery_by_store||n.meta.pickup_by_customer?((0,i.wg)(),(0,i.j4)(u,{key:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.rocketOutline},null,8,["src"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[n.meta.delivery_by_courier?((0,i.wg)(),(0,i.iD)("span",N,"Курьер")):(0,i.kq)("",!0),n.meta.delivery_by_store?((0,i.wg)(),(0,i.iD)("span",H,"Продавец")):(0,i.kq)("",!0),n.meta.pickup_by_customer?((0,i.wg)(),(0,i.iD)("span",Y,"Самовывоз")):(0,i.kq)("",!0)])),_:1})])),_:1})):(0,i.kq)("",!0),n.meta.invoice_link?((0,i.wg)(),(0,i.j4)(m,{key:4,color:"light",onClick:t[1]||(t[1]=e=>a.billOpen(n.meta.invoice_link)),expand:"block"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{src:r.receiptOutline,slot:"start"},null,8,["src"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Открыть чек на "+(0,g.zw)(n.meta.invoice_sum)+(0,g.zw)(e.$heap.state.currencySign),1)])),_:1})])),_:1})):(0,i.kq)("",!0),a.ledgerCalc.length>0?((0,i.wg)(),(0,i.j4)(_,{key:5},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.ledgerCalc,(e=>((0,i.wg)(),(0,i.j4)(s,{key:e.trans_id},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(e.trans_description),1)])),_:2},1024),(0,i.Wm)(c,{slot:"end",color:e.trans_amount>0?"normal":"danger"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(e.trans_amount),1)])),_:2},1032,["color"])])),_:2},1024)))),128))])),_:1})):(0,i.kq)("",!0)])])),_:1})])),_:1})}var R=o(132),Q=o(9755),J=o.n(Q),K={props:["orderId"],components:{IonIcon:h.gu,IonText:h.yW,IonLabel:h.Q$,IonButton:h.YG,IonItem:h.Ie,IonList:h.q_,IonAccordion:h.We,IonAccordionGroup:h.eh,IonChip:h.hM},setup(){return{cardOutline:p.pvm,rocketOutline:p.G$D,receiptOutline:p.d71}},data(){return{meta:{}}},computed:{ledgerCalc(){if(!this.meta.transactions)return[];let e=[];for(let t of this.meta.transactions)t.date=this.toLocDate(t.trans_date),e.push(t);return e}},methods:{async itemMetaGet(){try{this.meta=await J().post(`${this.$heap.state.hostname}Order/itemMetaGet`,{order_id:this.orderId})}catch(o){var e,t;const i=null===o||void 0===o||null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;switch(i){case"forbidden":case"notfound":default:this.meta={}}return!1}},toLocDate(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,o)},async billOpen(e){if(!e)return void this.$flash("Невозможно открыть чек");const t=await h.Fy.create({component:R.Z,componentProps:{billLink:e},initialBreakpoint:.85,breakpoints:[0,.85,1]}),o=function(){t.dismiss()};return this.$topic.on("dismissModal",o),t.present()}}};const V=(0,I.Z)(K,[["render",B]]);var X=V;const E=(0,i.Uk)("Отслеживание заказа");function ee(e,t,o,r,n,a){const l=(0,i.up)("ion-label"),s=(0,i.up)("ion-item"),d=(0,i.up)("ion-icon"),c=(0,i.up)("ion-chip"),u=(0,i.up)("ion-progress-bar"),m=(0,i.up)("ion-list"),_=(0,i.up)("ion-accordion"),p=(0,i.up)("ion-accordion-group");return a.isDelivering()?((0,i.wg)(),(0,i.j4)(p,{key:0,value:"tracking",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{value:"tracking"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{slot:"header"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[E])),_:1})])),_:1}),(0,i.Wm)(m,{slot:"content"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{lines:"none"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{color:"primary",slot:"start",icon:r.locationOutline,style:{"font-size":"30px"}},null,8,["icon"]),(0,i.Wm)(l,null,{default:(0,i.w5)((()=>{var e;return[(0,i.Uk)("Курьер, "+(0,g.zw)(null===(e=n.job)||void 0===e?void 0:e.courier_name),1)]})),_:1})])),_:1}),a.courier_finish_distance_km?((0,i.wg)(),(0,i.j4)(s,{key:0,lines:"none"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{slot:"start",color:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(a.courier_finish_distance_km),1)])),_:1}),(0,i.Wm)(c,{slot:"end",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(a.courier_finish_time_min.timeMin)+"-"+(0,g.zw)(a.courier_finish_time_min.timeMax)+"мин ",1)])),_:1})])),_:1})):(0,i.kq)("",!0),a.courier_finish_distance_km?((0,i.wg)(),(0,i.j4)(s,{key:1,lines:"none"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{color:"secondary",value:a.courier_progress,reversed:"true"},null,8,["value"])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(s,{lines:"none"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{style:{"text-align":"right"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Клиент, "+(0,g.zw)(e.$heap.state.user.user_name),1)])),_:1}),(0,i.Wm)(d,{color:"primary",slot:"end",icon:r.flagOutline,style:{"font-size":"30px"}},null,8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0)}var te=o(4405),oe={props:["orderData"],components:{IonList:h.q_,IonChip:h.hM,IonItem:h.Ie,IonLabel:h.Q$,IonIcon:h.gu,IonAccordionGroup:h.eh,IonAccordion:h.We,IonProgressBar:h.X7},setup(){return{storefrontOutline:p.qRG,locationOutline:p.Iv7,flagOutline:p.FMn}},data(){return{job:null,refreshInterval:6e4,clock:null}},computed:{courier_finish_distance_km(){var e,t;return null!==(e=this.job)&&void 0!==e&&e.courier_finish_distance?Math.round((null===(t=this.job)||void 0===t?void 0:t.courier_finish_distance)/100)/10+"км":"-"},courier_finish_time_min(){var e;return te.Z.deliveryTimeCalculate(null===(e=this.job)||void 0===e?void 0:e.courier_finish_distance,0)},courier_progress(){var e,t;return(null===(e=this.job)||void 0===e?void 0:e.courier_finish_distance)/(null===(t=this.job)||void 0===t?void 0:t.start_finish_distance)}},methods:{async jobGet(){if(this.isDelivering())try{if(this.job=await f.Z.api.itemJobTrack(this.orderData.order_id),"delivery_start"==this.job.group_type){clearTimeout(this.clock);const e=this;this.clock=setTimeout((()=>{e.jobGet()}),this.refreshInterval)}}catch(o){var e,t;const i=null===(e=o.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;if("notfound"==i)return void this.$flash("Задание не найдено");if("notready"==i)return void this.$flash("Смена курьера не открыта")}},isDelivering(){var e;return"delivery_start"==(null===(e=this.orderData)||void 0===e?void 0:e.stage_current)}},watch:{orderData:function(){this.jobGet()}}};const ie=(0,I.Z)(oe,[["render",ee],["__scopeId","data-v-3b3e367b"]]);var re=ie;const ne=(0,i.Uk)("Возражение"),ae=(0,i.Uk)("Сохранить возражение"),le=(0,i.Uk)("Закрыть без возражения");function se(e,t,o,r,n,a){const l=(0,i.up)("ion-title"),s=(0,i.up)("ion-toolbar"),d=(0,i.up)("ion-header"),c=(0,i.up)("ion-label"),u=(0,i.up)("ion-textarea"),m=(0,i.up)("ion-item"),_=(0,i.up)("ion-list"),p=(0,i.up)("ion-button"),h=(0,i.up)("ion-content");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{color:"secondary"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[ne])),_:1})])),_:1})])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{position:"stacked"}),(0,i.Wm)(u,{rows:"6",modelValue:n.objection_text,"onUpdate:modelValue":t[0]||(t[0]=e=>n.objection_text=e),placeholder:"опишите суть возражения к исполнению заказа (минимум 10 букв)"},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.Wm)(p,{onClick:t[1]||(t[1]=e=>a.save()),color:"primary",disabled:!n.objection_text||n.objection_text.length<10,expand:"full"},{default:(0,i.w5)((()=>[ae])),_:1},8,["disabled"]),(0,i.Wm)(p,{onClick:t[2]||(t[2]=e=>a.close()),color:"light",expand:"full"},{default:(0,i.w5)((()=>[le])),_:1})])),_:1})],64)}var de={components:{IonTextarea:h.g2,IonButton:h.YG,IonHeader:h.Gu,IonToolbar:h.sr,IonTitle:h.wd,IonContent:h.W2,IonList:h.q_,IonItem:h.Ie,IonLabel:h.Q$},data(){return{objection_text:null}},methods:{close(){h.Fy.dismiss()},save(){h.Fy.dismiss(this.objection_text)}}};const ce=(0,I.Z)(de,[["render",se]]);var ue=ce;const me=(0,i.Uk)("Добавить товар");function _e(e,t,o,r,n,a){const l=(0,i.up)("ion-title"),s=(0,i.up)("ion-toolbar"),d=(0,i.up)("ion-header"),c=(0,i.up)("ion-searchbar"),u=(0,i.up)("ion-img"),m=(0,i.up)("ion-label"),_=(0,i.up)("ion-item"),p=(0,i.up)("ion-list"),h=(0,i.up)("ion-content");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{color:"secondary"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[me])),_:1})])),_:1})])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onInput:t[0]||(t[0]=e=>a.listGet({name_query:e.target.value,name_query_fields:"product_name,product_code"})),style:{"border-radius":"10px",color:"black"},placeholder:"Поиск в этом предприятии"}),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.productList,(t=>((0,i.wg)(),(0,i.j4)(_,{key:t.product_id,onClick:e=>a.itemCreate(t.product_id)},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{slot:"start",src:e.$heap.state.hostname+"image/get.php/"+t.image_hash+".50.50.webp"},null,8,["src"]),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(t.product_name),1)])),_:2},1024),(0,i.Wm)(m,{slot:"end",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,g.zw)(t.product_final_price)+(0,g.zw)(e.$heap.state.currencySign),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})],64)}var pe={components:{IonHeader:h.Gu,IonToolbar:h.sr,IonTitle:h.wd,IonContent:h.W2,IonSearchbar:h.VI,IonList:h.q_,IonItem:h.Ie,IonLabel:h.Q$,IonImg:h.Xz},props:["store_id","order_id"],data(){return{productList:[]}},mounted(){this.listGet()},methods:{async listGet(e={}){e.store_id=this.store_id,e.is_active=1,e.limit=5;let t={};try{t=await J().post(`${this.$heap.state.hostname}Product/listGet`,e)}catch(o){}this.productList=t.product_list},async itemCreate(e){let t={order_id:this.order_id,product_id:e,product_quantity:prompt("Введите количество",1)||1};try{await J().post(`${this.$heap.state.hostname}Entry/itemCreate`,t)}catch(o){this.$flash("Не удалось добавить товар")}h.Fy.dismiss()}}};const he=(0,I.Z)(pe,[["render",_e]]);var fe=he,we=o(2226),ge=o(826),ke={components:{OrderComp:w.Z,OrderHistoryComp:W,OrderMetaComp:X,OrderInfoComp:P,OrderTrackingComp:re,MsgSubscriptionComp:ge.Z,ImageTileComp:we.Z,IonLabel:h.Q$,IonIcon:h.gu,IonContent:h.W2,IonItem:h.Ie,IonList:h.q_,IonPopover:h.d8},setup(){return{sparklesOutline:p.Fcs}},data(){return{order_id:this.$route.params.id,order:null,orderIsLoading:!1,isOpenDeliveryRejectionPopover:!1}},methods:{async itemGet(){if(!this.orderIsLoading){try{this.orderIsLoading=!0,this.order=await f.Z.api.itemGet(this.order_id)}catch(e){switch(e.status){case 404:this.$flash("Заказ не найден"),this.order="notfound",this.$router.push("/order/order-list");break}}this.orderIsLoading=!1}},async onStageCreate(e,t){if(t.includes("action")){t=t.split("_").splice(1).join("_");try{this[t](e)}catch{console.log("stage handler not found"+t)}}else try{const o=await f.Z.api.itemStageCreate(e,t);if("ok"==o){if("customer_purged"==t)return this.$flash("Заказ удален"),this.order=null,this.$router.push("/order/order-list"),void f.Z.cart.itemDelete(e);if(await this.itemGet(),"customer_cart"==t){let e={order_store_id:this.order.order_store_id,order_id:this.order.order_id,entries:this.order.entries,stage_current_name:this.order.stage_current_name,stage_next:this.order.stage_next,store:{store_name:this.order.store.store_name}};f.Z.cart.itemSet(e)}return!0}}catch(o){const e=o.responseJSON,t=e.messages.error;switch(t){case"wrong_courier_status":this.$flash("Смена курьера не открыта");break;case"order_is_empty":this.$alert("К сожалению, товара не осталось в наличии &#9785;","Заказ пуст");break;case"photos_must_be_made":this.$flash("Необходимо сфотографировать заказ"),this.action_take_photo();break;case"address_not_set":this.$flash("Необходимо добавить адрес доставки"),this.$router.push("/user/user-addresses");break;case"order_sum_exceeded":this.$flash("Сумма заказа должна быть меньше предоплаты");break;case"order_sum_zero":this.$flash("Нельзя завершить пустой заказ, от него можно отказаться.");break;case"forbidden_bycustomer":this.$flash("Запрещено покупателем");break;default:this.$flash("Не удалось изменить статус заказа");break}return!1}},async action_confirm(e){const t=await this.onStageCreate(e,"customer_confirmed");t&&this.action_checkout()},async action_checkout(){this.$heap.commit("setCurrentOrder",this.order),this.$router.push(`/order/order-checkout-${this.order_id}`)},async action_add(){const e=await h.Fy.create({component:fe,componentProps:{store_id:this.order.order_store_id,order_id:this.order_id},initialBreakpoint:.5,breakpoints:[.5,1],canDissmiss:!0});e.present();await e.onDidDismiss();this.itemGet()},async action_objection(){const e=await h.Fy.create({component:ue,initialBreakpoint:.5,breakpoints:[.5,1],canDissmiss:!0});e.present();const t=await e.onDidDismiss();if(t.data){const e=`ВОЗРАЖЕНИЕ ПОКУПАТЕЛЯ: ${t.data}`,o=await f.Z.api.itemUpdate({order_id:this.order_id,order_objection:e});if("ok"==o){const e=await this.onStageCreate(this.order_id,"customer_disputed");e&&(this.$flash("Ваше возражение принято и будет рассмотрено администратором."),alert("Необходимо сфотографировать заказ"),this.action_take_photo())}}},action_rejected(){this.isOpenDeliveryRejectionPopover=!0},async action_rejected_reason(e){this.isOpenDeliveryRejectionPopover=!1;try{await f.Z.api.itemUpdate({order_id:this.order_id,order_objection:e}),await this.onStageCreate(this.order_id,"delivery_rejected"),this.$flash("Вы отказались от доставки")}catch{}},action_take_photo(){this.$refs.orderImgs.take_photo()},action_call_customer(){location.href=`tel:+${this.order.customer.user_phone}`}},ionViewDidEnter(){null==this.order&&this.itemGet()},ionViewDidLeave(){this.order=null},created(){const e=this;e.itemGet(),this.$topic.on("orderSumChanged",(()=>{e.itemGet()})),this.$topic.on("pushStageChanged",(t=>{var o;(null===(o=e.order)||void 0===o?void 0:o.order_id)==(null===t||void 0===t?void 0:t.order_id)&&e.order.stage_current!=t.stage&&e.itemGet()}))}};const ye=(0,I.Z)(ke,[["render",_]]);var ve=ye},659:function(e,t,o){e.exports=o.p+"img/loading.30880178.svg"}}]);
//# sourceMappingURL=711.eb64d5bd.js.map