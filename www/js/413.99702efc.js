"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[413],{3227:function(e,t,i){i.d(t,{Z:function(){return k}});var o=i(6252),n=i(3577);const a={class:"center"},s={key:0,class:"rightend"},r=(0,o.Uk)("мин"),l={key:1,class:"rightend"},c=(0,o.Uk)(" Выбрать адрес доставки ");function d(e,t,i,d,u,m){const p=(0,o.up)("ion-img"),_=(0,o.up)("ion-text"),h=(0,o.up)("ion-note"),g=(0,o.up)("ion-icon"),y=(0,o.up)("ion-label"),w=(0,o.up)("ion-item"),v=(0,o.up)("ion-textarea");return(0,o.wg)(),(0,o.iD)(o.HY,null,[m.isMainLocationSet?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:t[0]||(t[0]=e=>m.selectDeliveryAddress()),class:"selector"},[(0,o._)("div",a,[u.location_main.image_hash?((0,o.wg)(),(0,o.j4)(p,{key:0,src:e.$heap.state.hostname+"image/get.php/"+u.location_main.image_hash+".32.32.webp"},null,8,["src"])):(0,o.kq)("",!0),(0,o.Wm)(_,{style:{margin:"5px"},color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$heap.state.user?.location_main?.location_address),1)])),_:1})]),i.deliveryTime?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(_,{style:{"font-size":"24px"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(i.deliveryTime.time),1)])),_:1}),(0,o.Wm)(h,{style:{"font-size":"10px"}},{default:(0,o.w5)((()=>[r])),_:1})])):((0,o.wg)(),(0,o.iD)("div",l))])):((0,o.wg)(),(0,o.j4)(w,{key:1,detail:"",button:"",onClick:t[1]||(t[1]=e=>m.selectDeliveryAddress())},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{slot:"start",style:{color:"var(--ion-color-primary)"},icon:d.location},null,8,["icon"]),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1})),i.showComment?((0,o.wg)(),(0,o.j4)(w,{key:2},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{placeholder:"комментарий к адресу",onChange:t[2]||(t[2]=e=>m.locationCommentChanged()),modelValue:e.$heap.state.user.location_main.location_comment,"onUpdate:modelValue":t[3]||(t[3]=t=>e.$heap.state.user.location_main.location_comment=t)},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0)],64)}var u=i(4508),m=i(8903),p=i(2008),_=i(1933),h=i(9042),g=i(9755),y=i.n(g),w={props:["deliveryTime","showComment"],components:{IonIcon:u.gu,IonTextarea:u.g2,IonImg:u.Xz,IonText:u.yW,IonNote:u.uN,IonLabel:u.Q$,IonItem:u.Ie},setup(){return{location:m.xhW}},data(){return{location_main:p.Z.state.user.location_main}},created(){let e=this;h.Z.on("userMainLocationSet",(t=>{e.location_main=t})),h.Z.on("userGet",(t=>{e.location_main=t.location_main}))},methods:{selectDeliveryAddress(){_.Z.push("user-addresses")},async locationCommentChanged(){const e={location_id:p.Z.state.user.location_main.location_id,location_comment:p.Z.state.user.location_main.location_comment};y().post(this.$heap.state.hostname+"Location/itemUpdate",JSON.stringify(e))}},computed:{isSignedIn(){return p.Z.state.user.user_id&&p.Z.state.user.user_id>-1},isMainLocationSet(){return this.location_main?1:0}}},v=i(3744);const f=(0,v.Z)(w,[["render",d],["__scopeId","data-v-107d07d6"]]);var k=f},3413:function(e,t,i){i.r(t),i.d(t,{default:function(){return H}});var o=i(6252);function n(e,t,i,n,a,s){const r=(0,o.up)("home-slider"),l=(0,o.up)("user-address-widget"),c=(0,o.up)("home-primary-category-widget"),d=(0,o.up)("store-list"),u=(0,o.up)("base-layout");return(0,o.wg)(),(0,o.j4)(u,{pageLogo:"./assets/icon/tezkel_logo.png"},{default:(0,o.w5)((()=>[(0,o.Wm)(r),(0,o.Wm)(l,{deliveryTime:a.primaryDeliveryTime},null,8,["deliveryTime"]),(0,o.Wm)(c,{onDeliveryTimeGet:t[0]||(t[0]=e=>{a.primaryDeliveryTime=e})}),(0,o.Wm)(d)])),_:1})}var a=i(3577);const s=["src"],r={class:"home_slide"},l={style:{"font-size":"3em"}};function c(e,t,i,n,c,d){const u=(0,o.up)("swiper-slide"),m=(0,o.up)("swiper");return(0,o.wg)(),(0,o.j4)(m,{modules:e.modules,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,effect:"fade"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.home_slides,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e.title,style:(0,a.j5)(`background-color:${e.color};`)},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.image,class:"home_slide_img"},null,8,s),(0,o._)("div",r,[(0,o._)("h1",l,(0,a.zw)(e.title),1),(0,o._)("p",null,(0,a.zw)(e.description),1)])])),_:2},1032,["style"])))),128))])),_:1},8,["modules"])}var d=i(9755),u=i.n(d),m=i(702),p=i(3181),_=(0,o.aZ)({components:{Swiper:p.t,SwiperSlide:p.o},setup(){return{modules:[m.pt,m.xW]}},data(){return{home_slides:[],error:""}},created(){this.getSlideList()},methods:{getSlideList(){var e=this;u().get("/assets/homeslider/conf.json").done((function(t){e.home_slides=t.slides})).fail((function(t){e.error=t.responseJSON.messages.error}))}}}),h=i(3744);const g=(0,h.Z)(_,[["render",c],["__scopeId","data-v-13bbb445"]]);var y=g;const w={class:"crop-to-fit"},v={key:0},f={key:1},k={key:2},I=(0,o.Uk)("Подходящих поставщиков не нашлось"),T=(0,o.Uk)(" К сожалению, не найдено подходящих предприятий. Возможно вы находитесь вне радиуса доставки. ");function C(e,t,i,n,s,r){const l=(0,o.up)("ion-img"),c=(0,o.up)("ion-chip"),d=(0,o.up)("ion-item"),u=(0,o.up)("ion-card"),m=(0,o.up)("ion-list"),p=(0,o.up)("ion-card-title"),_=(0,o.up)("ion-card-header"),h=(0,o.up)("ion-card-content");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s.storeList?((0,o.wg)(),(0,o.j4)(m,{key:0,class:"store-list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.storeList,(t=>((0,o.wg)(),(0,o.j4)(u,{button:"",key:t.store_id,onClick:i=>e.$router.push("store-"+t.store_id),class:(0,a.C_)(0==t.is_opened?"closed":"")},{default:(0,o.w5)((()=>[(0,o._)("div",w,[t.image_hash?((0,o.wg)(),(0,o.j4)(l,{key:0,src:e.$heap.state.hostname+"/image/get.php/"+t.image_hash+".300.300.webp"},null,8,["src"])):(0,o.kq)("",!0)]),1==t.is_opened?((0,o.wg)(),(0,o.j4)(c,{key:0,color:"success"},{default:(0,o.w5)((()=>[(0,o.Uk)("Открыт до "+(0,a.zw)(t.store_time_closes)+":00",1)])),_:2},1024)):((0,o.wg)(),(0,o.j4)(c,{key:1,color:"danger"},{default:(0,o.w5)((()=>[0==t.is_working?((0,o.wg)(),(0,o.iD)("span",v,"Временно не работает")):t.store_next_time_opens>0?((0,o.wg)(),(0,o.iD)("span",f,"Закрыт до "+(0,a.zw)(t.store_next_time_opens)+":00",1)):((0,o.wg)(),(0,o.iD)("span",k,"Закрыт"))])),_:2},1024)),t.deliveryTime.timeMin?((0,o.wg)(),(0,o.j4)(c,{key:2,color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.deliveryTime.timeMin)+"-"+(0,a.zw)(t.deliveryTime.timeMax)+"мин",1)])),_:2},1024)):(0,o.kq)("",!0),(0,o.Wm)(d,{lines:"none"},{default:(0,o.w5)((()=>[(0,o._)("h3",null,(0,a.zw)(t.store_name),1)])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1})):(0,o.kq)("",!0),s.storeList&&0!=s.storeList.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[I])),_:1})])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[T])),_:1})])),_:1}))],64)}var L=i(4508),Z=i(2008),D=i(4405),S={components:{IonList:L.q_,IonImg:L.Xz,IonChip:L.hM,IonItem:L.Ie,IonCard:L.PM,IonCardHeader:L.Zi,IonCardTitle:L.Dq,IonCardContent:L.FN},data(){return{storeList:null}},methods:{async listGet(){var e=Z.Z.state.user.location_main;if(e)try{const t=await u().post(Z.Z.state.hostname+"Store/listNearGet",{location_id:e.location_id});this.storeList=this.storeListCalculate(t)}catch{}},storeListCalculate(e){for(let t in e)e[t].deliveryTime=D.Z.deliveryTimeCalculate(e[t].distance,e[t].store_time_preparation);return e}},mounted(){this.$topic.on("userGet",(()=>{this.listGet()})),this.$topic.on("userMainLocationSet",(e=>{this.listGet()})),this.listGet()}};const W=(0,h.Z)(S,[["render",C],["__scopeId","data-v-fc13ff1a"]]);var G=W,z=i(3227);const b={key:0,id:"hcat_widget_wrapper"},$={id:"hcat_widget_grid"};function j(e,t){const i=(0,o.up)("ion-note"),n=(0,o.up)("ion-item"),s=(0,o.up)("ion-img"),r=(0,o.up)("ion-thumbnail"),l=(0,o.up)("ion-label");return e.productGroupList?((0,o.wg)(),(0,o.iD)("div",b,[(0,o.Wm)(n,{button:"",detail:"",lines:"none",color:"light",onClick:t[0]||(t[0]=t=>this.$router.push("store-"+e.primaryStoreData.store_id))},{default:(0,o.w5)((()=>[(0,o._)("h4",null,(0,a.zw)(e.primaryStoreData.store_name),1),(0,o.Wm)(i,{slot:"helper"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Доставка за "+(0,a.zw)(e.deliveryTime.timeMin)+"-"+(0,a.zw)(e.deliveryTime.timeMax)+"мин ",1)])),_:1})])),_:1}),(0,o._)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.productGroupList,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.group_id},[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{src:e.$heap.state.hostname+"image/get.php/"+t.image_hash+".100.100.webp"},null,8,["src"])])),_:2},1024),(0,o.Wm)(l,{style:{height:"2em","text-align":"center"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.group_name),1)])),_:2},1024)])))),128))])])):(0,o.kq)("",!0)}i(9042);var x=(0,o.aZ)({components:{IonImg:L.Xz,IonThumbnail:L.Bs,IonNote:L.uN,IonItem:L.Ie,IonLabel:L.Q$},data(){return{productGroupList:null,primaryStoreData:null,deliveryTime:{},main_location_id:null}},created(){let e=this;this.$topic.on("userMainLocationSet",(t=>{e.main_location_id=t.location_id,e.productGroupListGet()})),this.$topic.on("userGet",(t=>{e.main_location_id=t.location_main.location_id,e.productGroupListGet()})),this.main_location_id=Z.Z.state.user.location_main?Z.Z.state.user.location_main.location_id:null,this.productGroupListGet()},methods:{async productGroupListGet(){if(this.main_location_id)try{const e=await u().get(Z.Z.state.hostname+"Store/primaryNearGet",{location_id:this.main_location_id});this.productGroupList=e.category_list,this.deliveryTime=D.Z.deliveryTimeCalculate(e.distance,e.store_time_preparation),this.primaryStoreData=e,this.$emit("deliveryTimeGet",this.deliveryTime)}catch(e){}}}});const M=(0,h.Z)(x,[["render",j],["__scopeId","data-v-bfd59d50"]]);var U=M,q={components:{HomeSlider:y,StoreList:G,UserAddressWidget:z.Z,HomePrimaryCategoryWidget:U},data(){return{primaryDeliveryTime:null}}};const N=(0,h.Z)(q,[["render",n]]);var H=N},4405:function(e,t,i){var o=i(2008);const n={deliveryCalculate(e){if(!e.locations||!e.locations[0]||!e.locations[0].distance)return null;const t=e.locations[0].distance,i=e.store_time_preparation||0;return n.deliveryTimeCalculate(t,i)},deliveryTimeCalculate(e,t){t=t??o.Z.state.deliverySettings.defaultPreparationTime;const i=o.Z.state.deliverySettings.deliveryTimeDelta,n=5*Math.round(e/o.Z.state.deliverySettings.courierVelocity*60/5)+parseInt(t),a=n>i?n-i:n,s=a+i;return{time:n,timeMin:a,timeMax:s}}};t["Z"]=n}}]);
//# sourceMappingURL=413.99702efc.js.map