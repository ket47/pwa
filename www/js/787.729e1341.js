"use strict";(self["webpackChunktezkel_delivery"]=self["webpackChunktezkel_delivery"]||[]).push([[787],{4405:function(e,t,i){var o=i(2008);const n={deliveryCalculate(e){if(!e.locations||!e.locations[0]||!e.locations[0].distance)return null;const t=e.locations[0].distance,i=e.store_time_preparation||0;return n.deliveryTimeCalculate(t,i)},deliveryTimeCalculate(e,t){t=parseInt(t??o.Z.getters.settings.delivery.timePreparationDefault);const i=parseInt(o.Z.getters.settings.delivery.timeDelta),n=parseInt(o.Z.getters.settings.delivery.speed),a=5*Math.round(e/n*60/5)+t,r=a>i?a-i:a,s=r+i;return{time:a,timeMin:r,timeMax:s}}};t["Z"]=n},6210:function(e,t,i){i.d(t,{Z:function(){return p}});var o=i(6252),n=i(3577);const a={key:0},r={key:1},s={key:2};function l(e,t,i,l,d,c){const u=(0,o.up)("ion-chip");return 1==i.storeItem.is_opened?((0,o.wg)(),(0,o.j4)(u,{key:0,color:"success"},{default:(0,o.w5)((()=>[(0,o.Uk)("Открыт до "+(0,n.zw)(i.storeItem.store_time_closes)+":00",1)])),_:1})):((0,o.wg)(),(0,o.j4)(u,{key:1,color:"danger"},{default:(0,o.w5)((()=>[0==i.storeItem.is_working?((0,o.wg)(),(0,o.iD)("span",a,"Временно не работает")):i.storeItem.store_next_time_opens>0?((0,o.wg)(),(0,o.iD)("span",r,"Закрыт до "+(0,n.zw)(i.storeItem.store_next_time_opens)+":00",1)):((0,o.wg)(),(0,o.iD)("span",s,"Закрыт"))])),_:1}))}var d=i(9632),c={props:["storeItem"],components:{IonChip:d.hM}},u=i(3744);const m=(0,u.Z)(c,[["render",l]]);var p=m},1272:function(e,t,i){i.d(t,{Z:function(){return k}});var o=i(6252),n=i(3577);const a={class:"center"},r={key:0,class:"rightend"},s=(0,o.Uk)("мин"),l={key:1,class:"rightend"},d=(0,o.Uk)(" Выбрать адрес доставки ");function c(e,t,i,c,u,m){const p=(0,o.up)("ion-img"),_=(0,o.up)("ion-text"),h=(0,o.up)("ion-note"),g=(0,o.up)("ion-icon"),y=(0,o.up)("ion-label"),w=(0,o.up)("ion-item"),v=(0,o.up)("ion-textarea");return(0,o.wg)(),(0,o.iD)(o.HY,null,[m.isMainLocationSet?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:t[0]||(t[0]=e=>m.selectDeliveryAddress()),class:"selector"},[(0,o._)("div",a,[u.location_main.image_hash?((0,o.wg)(),(0,o.j4)(p,{key:0,src:e.$heap.state.hostname+"image/get.php/"+u.location_main.image_hash+".40.40.webp"},null,8,["src"])):(0,o.kq)("",!0),(0,o.Wm)(_,{style:{margin:"5px","font-size":"0.7em"},color:"dark"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$heap.state.user?.location_main?.location_address),1)])),_:1})]),i.deliveryTime?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(_,{style:{"font-size":"24px",color:"var(--ion-color-secondary-contrast)"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(i.deliveryTime.time),1)])),_:1}),(0,o.Wm)(h,{style:{"font-size":"10px",color:"var(--ion-color-secondary-contrast)"}},{default:(0,o.w5)((()=>[s])),_:1})])):((0,o.wg)(),(0,o.iD)("div",l))])):((0,o.wg)(),(0,o.j4)(w,{key:1,detail:"",button:"",onClick:t[1]||(t[1]=e=>m.selectDeliveryAddress()),class:"selector"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{slot:"start",style:{color:"var(--ion-color-primary)"},icon:c.location},null,8,["icon"]),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[d])),_:1})])),_:1})),i.showComment&&e.$heap.state.user.location_main?((0,o.wg)(),(0,o.j4)(w,{key:2},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{placeholder:"комментарий к адресу",onChange:t[2]||(t[2]=e=>m.locationCommentChanged()),modelValue:e.$heap.state.user.location_main.location_comment,"onUpdate:modelValue":t[3]||(t[3]=t=>e.$heap.state.user.location_main.location_comment=t)},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0)],64)}var u=i(9632),m=i(8903),p=i(2008),_=i(9023),h=i(9042),g=i(9755),y=i.n(g),w={props:["deliveryTime","showComment"],components:{IonIcon:u.gu,IonTextarea:u.g2,IonImg:u.Xz,IonText:u.yW,IonNote:u.uN,IonLabel:u.Q$,IonItem:u.Ie},setup(){return{location:m.xhW}},data(){return{location_main:p.Z.state.user.location_main}},created(){let e=this;h.Z.on("userMainLocationSet",(t=>{e.location_main=t})),h.Z.on("userGet",(t=>{e.location_main=t.location_main}))},methods:{selectDeliveryAddress(){_.Z.push("user-addresses")},async locationCommentChanged(){const e={location_id:p.Z.state.user.location_main.location_id,location_comment:p.Z.state.user.location_main.location_comment};y().post(this.$heap.state.hostname+"Location/itemUpdate",JSON.stringify(e))}},computed:{isSignedIn(){return p.Z.state.user.user_id&&p.Z.state.user.user_id>-1},isMainLocationSet(){return this.location_main?1:0}}},v=i(3744);const f=(0,v.Z)(w,[["render",c],["__scopeId","data-v-45e69907"]]);var k=f},6787:function(e,t,i){i.r(t),i.d(t,{default:function(){return X}});var o=i(6252);function n(e,t,i,n,a,r){const s=(0,o.up)("home-slider"),l=(0,o.up)("user-address-widget"),d=(0,o.up)("home-primary-category-widget"),c=(0,o.up)("store-list"),u=(0,o.up)("base-layout");return(0,o.wg)(),(0,o.j4)(u,{pageLogo:n.mainLogo},{default:(0,o.w5)((()=>[(0,o.Wm)(s),(0,o.Wm)(l,{deliveryTime:a.primaryDeliveryTime},null,8,["deliveryTime"]),(0,o.Wm)(d,{onDeliveryTimeGet:t[0]||(t[0]=e=>{a.primaryDeliveryTime=e})}),(0,o.Wm)(c)])),_:1},8,["pageLogo"])}var a=i(3577);const r=["src"],s={class:"home_slide"},l={style:{"font-size":"3em"}};function d(e,t,i,n,d,c){const u=(0,o.up)("swiper-slide"),m=(0,o.up)("swiper");return(0,o.wg)(),(0,o.j4)(m,{modules:e.modules,autoplay:{delay:6e3,disableOnInteraction:!1},loop:!0},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.home_slides,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e.title,style:(0,a.j5)(`background-color:${e.color};`)},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.image,class:"home_slide_img"},null,8,r),(0,o._)("div",s,[(0,o._)("h1",l,(0,a.zw)(e.title),1),(0,o._)("p",null,(0,a.zw)(e.description),1)])])),_:2},1032,["style"])))),128))])),_:1},8,["modules"])}var c=i(9755),u=i.n(c),m=i(702),p=i(3181),_=(0,o.aZ)({components:{Swiper:p.t,SwiperSlide:p.o},setup(){return{modules:[m.pt]}},data(){return{home_slides:[],error:""}},created(){this.getSlideList()},methods:{getSlideList(){var e=this;u().get("/assets/homeslider/conf.json").done((function(t){e.home_slides=t.slides})).fail((function(t){e.error=t.responseJSON.messages.error}))}}}),h=i(3744);const g=(0,h.Z)(_,[["render",d],["__scopeId","data-v-5b89e5e0"]]);var y=g;const w=e=>((0,o.dD)("data-v-2bd7c26f"),e=e(),(0,o.Cn)(),e),v=w((()=>(0,o._)("div",{class:"crop-to-fit",style:{"background-color":"var(--ion-color-light)"}},null,-1))),f=(0,o.Uk)("Вне зоны обслуживания"),k=(0,o.Uk)(" К сожалению, не найдено подходящих магазинов и ресторанов. "),I=w((()=>(0,o._)("br",null,null,-1))),C=(0,o.Uk)("Возможно вы находитесь вне радиуса доставки. "),L=["href"],D={class:"crop-to-fit"};function Z(e,t,i,n,r,s){const l=(0,o.up)("ion-skeleton-text"),d=(0,o.up)("ion-chip"),c=(0,o.up)("ion-item"),u=(0,o.up)("ion-card"),m=(0,o.up)("ion-list"),p=(0,o.up)("ion-card-title"),_=(0,o.up)("ion-card-header"),h=(0,o.up)("ion-card-content"),g=(0,o.up)("ion-img"),y=(0,o.up)("store-opened-indicator");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r.storeList?0==r.storeList.length?((0,o.wg)(),(0,o.j4)(u,{key:1,color:"warning"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[f])),_:1})])),_:1}),(0,o.Wm)(h,{style:{"font-family":"Roboto"}},{default:(0,o.w5)((()=>[k,I,C])),_:1})])),_:1})):(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(m,{key:0,class:"store-list"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)([1,1],(e=>(0,o.Wm)(u,{button:"",key:e},{default:(0,o.w5)((()=>[v,(0,o.Wm)(d,{color:"success"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{style:{width:"130px"},animated:""})])),_:1}),(0,o.Wm)(d,{color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{style:{width:"100px"},animated:""})])),_:1}),(0,o.Wm)(c,{lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{style:{width:"70%",height:"1.5em"},animated:""})])),_:1})])),_:2},1024))),64))])),_:1})),r.storeList&&r.storeList.length>0?((0,o.wg)(),(0,o.j4)(m,{key:2,class:"store-list",style:{"box-shadow":"0px 0px 15px #0004"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.storeList,(t=>((0,o.wg)(),(0,o.j4)(u,{button:"",key:t.store_id,onClick:i=>e.$router.push("store-"+t.store_id),class:(0,a.C_)(0==t.is_opened?"closed":"")},{default:(0,o.w5)((()=>[(0,o._)("a",{href:"#store-"+t.store_id},[(0,o._)("div",D,[t.image_hash?((0,o.wg)(),(0,o.j4)(g,{key:0,src:e.$heap.state.hostname+"/image/get.php/"+t.image_hash+".300.300.webp"},null,8,["src"])):(0,o.kq)("",!0)])],8,L),(0,o.Wm)(y,{storeItem:t},null,8,["storeItem"]),t.deliveryTime.timeMin?((0,o.wg)(),(0,o.j4)(d,{key:0,color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.deliveryTime.timeMin)+"-"+(0,a.zw)(t.deliveryTime.timeMax)+"мин",1)])),_:2},1024)):(0,o.kq)("",!0),(0,o.Wm)(c,{lines:"none"},{default:(0,o.w5)((()=>[(0,o._)("h3",null,(0,a.zw)(t.store_name),1)])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1})):(0,o.kq)("",!0)],64)}var W=i(9632),T=i(2008),S=i(4405),b=i(6210),z={components:{IonList:W.q_,IonImg:W.Xz,IonChip:W.hM,IonItem:W.Ie,IonCard:W.PM,IonCardHeader:W.Zi,IonCardTitle:W.Dq,IonCardContent:W.FN,IonSkeletonText:W.CK,StoreOpenedIndicator:b.Z},data(){return{storeList:null}},methods:{async listGet(){var e=T.Z.state.user.location_main;if(e)try{const t=await u().post(T.Z.state.hostname+"Store/listNearGet",{location_id:e.location_id});this.storeList=this.storeListCalculate(t)}catch{}},storeListCalculate(e){for(let t in e)e[t].deliveryTime=S.Z.deliveryTimeCalculate(e[t].distance,e[t].store_time_preparation);return e}},mounted(){this.$topic.on("userGet",(()=>{this.listGet()})),this.$topic.on("userMainLocationSet",(e=>{this.listGet()})),this.listGet()}};const G=(0,h.Z)(z,[["render",Z],["__scopeId","data-v-2bd7c26f"]]);var $=G,x=i(1272);const j={key:0,id:"hcat_widget_wrapper"},M={id:"hcat_widget_info"},U=(0,o.Uk)("опорный поставщик"),q={id:"hcat_widget_grid"},H=["onClick"];function N(e,t){const i=(0,o.up)("ion-title"),n=(0,o.up)("store-opened-indicator"),r=(0,o.up)("ion-chip"),s=(0,o.up)("ion-img"),l=(0,o.up)("ion-thumbnail"),d=(0,o.up)("ion-label");return e.productGroupList?((0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("div",{id:"hcat_widget_header",onClick:t[0]||(t[0]=t=>this.$router.push("store-"+e.primaryStoreData.store_id)),style:(0,a.j5)(`background-image:url(${e.$heap.state.hostname}image/get.php/${e.primaryStoreData.image_hash}.500.500.webp)`)},[(0,o._)("div",M,[(0,o.Wm)(i,{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.primaryStoreData.store_name),1)])),_:1}),(0,o.Wm)(i,{size:"small"},{default:(0,o.w5)((()=>[U])),_:1})])],4),(0,o.Wm)(n,{storeItem:e.primaryStoreData},null,8,["storeItem"]),e.deliveryTime.timeMin?((0,o.wg)(),(0,o.j4)(r,{key:0,color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)("доставка "+(0,a.zw)(e.deliveryTime.timeMin)+"-"+(0,a.zw)(e.deliveryTime.timeMax)+"мин",1)])),_:1})):(0,o.kq)("",!0),(0,o._)("div",q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.productGroupList,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.group_id,onClick:i=>e.$router.push(`store-${e.primaryStoreData.store_id}?parent_group_id=${t.group_id}`)},[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{src:e.$heap.state.hostname+"image/get.php/"+t.image_hash+".250.250.webp"},null,8,["src"])])),_:2},1024),(0,o.Wm)(d,{style:{height:"2em","text-align":"center",padding:"3px","font-size":"0.7em"},color:"dark"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.group_name),1)])),_:2},1024)],8,H)))),128))])])):(0,o.kq)("",!0)}i(9042);var Y=(0,o.aZ)({components:{IonImg:W.Xz,IonThumbnail:W.Bs,IonNote:W.uN,IonItem:W.Ie,IonLabel:W.Q$,IonTitle:W.wd,IonChip:W.hM,StoreOpenedIndicator:b.Z},data(){return{productGroupList:null,primaryStoreData:null,deliveryTime:{},main_location_id:null,old_location_id:-1}},mounted(){let e=this;this.$topic.on("userMainLocationSet",(t=>{e.main_location_id=t.location_id,e.productGroupListGet()})),this.$topic.on("userGet",(t=>{e.main_location_id=t.location_main.location_id,e.productGroupListGet()})),this.main_location_id=T.Z.state.user.location_main?T.Z.state.user.location_main.location_id:null,this.productGroupListGet()},methods:{async productGroupListGet(){if(this.main_location_id&&this.old_location_id!=this.main_location_id){this.old_location_id=this.main_location_id;try{const e=await u().get(T.Z.state.hostname+"Store/primaryNearGet",{location_id:this.main_location_id});this.productGroupList=e.category_list,this.deliveryTime=S.Z.deliveryTimeCalculate(e.distance,e.store_time_preparation),this.primaryStoreData=e,this.$emit("deliveryTimeGet",this.deliveryTime)}catch(e){this.productGroupList=null,this.primaryStoreData=null,this.$emit("deliveryTimeGet",null)}}}}});const K=(0,h.Z)(Y,[["render",N],["__scopeId","data-v-1cfcb30a"]]);var O=K,A=i(94),P={setup(){return{mainLogo:A}},components:{HomeSlider:y,StoreList:$,UserAddressWidget:x.Z,HomePrimaryCategoryWidget:O},data(){return{primaryDeliveryTime:null}}};const V=(0,h.Z)(P,[["render",n]]);var X=V}}]);
//# sourceMappingURL=787.729e1341.js.map