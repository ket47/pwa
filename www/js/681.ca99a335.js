"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[681],{4405:function(e,t,o){o(5306);var n=o(2008);const i={deliveryCalculate(e){if(!e.locations||!e.locations[0]||!e.locations[0].distance)return null;const t=e.locations[0].distance,o=e.store_time_preparation||0;return i.deliveryTimeCalculate(t,o)},deliveryTimeCalculate(e,t){var o;t=parseInt(null!==(o=t)&&void 0!==o?o:n.Z.getters.settings.delivery.timePreparationDefault);const i=parseInt(n.Z.getters.settings.delivery.timeDelta),l=parseInt(n.Z.getters.settings.delivery.speed),s=5*Math.round(e/l*60/5)+t,a=s>i?s-i:s,r=a+i;return{time:s,timeMin:a,timeMax:r}},render(e,t){for(let o in t)e=e.replace(`{{${o}}}`,t[o]);return e=e.replace(/{{\.}}/,"-"),e}};t["Z"]=i},6181:function(e,t,o){o.d(t,{Z:function(){return y}});var n=o(6252),i=o(3577);const l=(0,n.Uk)(" ◉ "),s={key:0},a=(0,n.Uk)(" ◉ "),r=(0,n.Uk)("Временно не работает"),u={key:1},d=(0,n.Uk)(" ◉ "),c={key:2},m=(0,n.Uk)(" ◉ "),p=(0,n.Uk)("Закрыт");function _(e,t,o,_,w,h){const g=(0,n.up)("ion-text"),f=(0,n.up)("ion-chip");return 1==o.storeItem.is_opened?((0,n.wg)(),(0,n.j4)(f,{key:0,color:"medium"},{default:(0,n.w5)((()=>[(0,n._)("label",null,[(0,n.Wm)(g,{color:"success"},{default:(0,n.w5)((()=>[l])),_:1}),(0,n.Uk)("Открыт до "+(0,i.zw)(o.storeItem.store_time_closes)+":00",1)])])),_:1})):((0,n.wg)(),(0,n.j4)(f,{key:1,color:"medium"},{default:(0,n.w5)((()=>[0==o.storeItem.is_working?((0,n.wg)(),(0,n.iD)("label",s,[(0,n.Wm)(g,{color:"medium"},{default:(0,n.w5)((()=>[a])),_:1}),r])):o.storeItem.store_next_time_opens>0?((0,n.wg)(),(0,n.iD)("label",u,[(0,n.Wm)(g,{color:"danger"},{default:(0,n.w5)((()=>[d])),_:1}),(0,n.Uk)("Закрыт до "+(0,i.zw)(o.storeItem.store_next_time_opens)+":00",1)])):((0,n.wg)(),(0,n.iD)("label",c,[(0,n.Wm)(g,{color:"danger"},{default:(0,n.w5)((()=>[m])),_:1}),p]))])),_:1}))}var w=o(4852),h=o(8903),g={props:["storeItem"],components:{IonChip:w.hM,IonText:w.yW},setup(){return{ellipse:h.Hpm}}},f=o(3744);const k=(0,f.Z)(g,[["render",_]]);var y=k},5567:function(e,t,o){o.d(t,{Z:function(){return f}});var n=o(6252),i=o(3577);const l=(0,n.Uk)("Ваше местоположение"),s=(0,n.Uk)("Адрес доставки заказа");function a(e,t,o,a,r,u){const d=(0,n.up)("ion-text"),c=(0,n.up)("ion-icon"),m=(0,n.up)("ion-item"),p=(0,n.up)("ion-img"),_=(0,n.up)("ion-thumbnail"),w=(0,n.up)("ion-chip"),h=(0,n.up)("ion-list"),g=(0,n.up)("ion-textarea");return(0,n.wg)(),(0,n.iD)(n.HY,null,[u.isMainLocationSet?((0,n.wg)(),(0,n.j4)(h,{key:0,onClick:t[0]||(t[0]=e=>u.selectDeliveryAddress())},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{lines:"none"},{default:(0,n.w5)((()=>["Current"==r.location_shown.group_name?((0,n.wg)(),(0,n.j4)(d,{key:0,color:"medium"},{default:(0,n.w5)((()=>[l])),_:1})):((0,n.wg)(),(0,n.j4)(d,{key:1,color:"medium"},{default:(0,n.w5)((()=>[s])),_:1})),(0,n.Wm)(c,{slot:"end",icon:a.chevronDownOutline},null,8,["icon"])])),_:1}),(0,n.Wm)(m,{lines:"none"},{default:(0,n.w5)((()=>{var t;return[r.location_shown.image_hash?((0,n.wg)(),(0,n.j4)(_,{key:0,slot:"start",style:{width:"30px",height:"30px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{src:`${e.$heap.state.hostname}/image/get.php/${r.location_shown.image_hash}.32.32.png`},null,8,["src"])])),_:1})):((0,n.wg)(),(0,n.j4)(c,{key:1,slot:"start",color:"primary",icon:a.locationOutline},null,8,["icon"])),(0,n.Wm)(d,{color:"dark"},{default:(0,n.w5)((()=>{var e;return[(0,n.Uk)((0,i.zw)(null===(e=r.location_shown)||void 0===e?void 0:e.location_address),1)]})),_:1}),(null===(t=o.deliveryTime)||void 0===t?void 0:t.time)>0?((0,n.wg)(),(0,n.j4)(w,{key:2,slot:"end",color:"medium",background:"transparent"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{src:a.timeOutline},null,8,["src"]),(0,n._)("label",null,(0,i.zw)(o.deliveryTime.time),1)])),_:1})):(0,n.kq)("",!0)]})),_:1})])),_:1})):(0,n.kq)("",!0),o.showComment&&r.location_shown?((0,n.wg)(),(0,n.j4)(h,{key:1},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,{rows:"1",placeholder:"комментарий к адресу",onChange:t[1]||(t[1]=e=>u.locationCommentChanged()),modelValue:r.location_shown.location_comment,"onUpdate:modelValue":t[2]||(t[2]=e=>r.location_shown.location_comment=e)},null,8,["modelValue"])])),_:1})])),_:1})):(0,n.kq)("",!0)],64)}var r=o(4852),u=o(8903),d=o(2008),c=o(1008),m=o(9042),p=o(9755),_=o.n(p),w={props:["deliveryTime","showComment"],components:{IonImg:r.Xz,IonIcon:r.gu,IonTextarea:r.g2,IonText:r.yW,IonItem:r.Ie,IonList:r.q_,IonThumbnail:r.Bs,IonChip:r.hM},setup(){return{locationOutline:u.Iv7,chevronDownOutline:u.Y$3,timeOutline:u.bdY}},data(){return{location_shown:d.Z.state.user.location_main}},created(){m.Z.on("userMainLocationSet",(e=>this.location_shown=e)),m.Z.on("userCurrentLocationSet",(e=>this.location_shown=e))},methods:{selectDeliveryAddress(){c.Z.push("/user/user-addresses")},async locationCommentChanged(){const e={location_id:this.location_shown.location_id,location_comment:this.location_shown.location_comment};_().post(this.$heap.state.hostname+"Location/itemUpdate",JSON.stringify(e))}},computed:{isSignedIn(){return d.Z.state.user.user_id&&d.Z.state.user.user_id>-1},isMainLocationSet(){return this.location_shown?1:0}}},h=o(3744);const g=(0,h.Z)(w,[["render",a],["__scopeId","data-v-46eebf16"]]);var f=g},7681:function(e,t,o){o.r(t),o.d(t,{default:function(){return M}});var n=o(6252);function i(e,t,o,i,l,s){const a=(0,n.up)("home-slider"),r=(0,n.up)("user-address-widget"),u=(0,n.up)("store-list"),d=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(d,{pageLogo:i.mainLogo},{default:(0,n.w5)((()=>[(0,n.Wm)(a),(0,n.Wm)(r,{deliveryTime:l.primaryDeliveryTime},null,8,["deliveryTime"]),(0,n.Wm)(u,{ref:"homeStoreList"},null,512)])),_:1},8,["pageLogo"])}var l=o(3577);const s={class:"home_slide"},a={style:{"font-size":"3em"}};function r(e,t,o,i,r,u){const d=(0,n.up)("ion-img"),c=(0,n.up)("swiper-slide"),m=(0,n.up)("swiper");return(0,n.wg)(),(0,n.j4)(m,{modules:e.modules,autoplay:{delay:6e3,disableOnInteraction:!1},loop:!0,class:"home-swiper"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.home_slides,(e=>((0,n.wg)(),(0,n.j4)(c,{key:e.title,style:(0,l.j5)(`background-color:${e.color};`)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{src:e.image,class:"home_slide_img",alt:e.alt},null,8,["src","alt"]),(0,n._)("div",s,[(0,n._)("h1",a,(0,l.zw)(e.title),1),(0,n._)("p",null,(0,l.zw)(e.description),1)])])),_:2},1032,["style"])))),128))])),_:1},8,["modules"])}var u=o(9755),d=o.n(u),c=o(702),m=o(3181),p=o(4852),_=(0,n.aZ)({components:{Swiper:m.t,SwiperSlide:m.o,IonImg:p.Xz},setup(){return{modules:[c.pt]}},data(){return{home_slides:[],error:""}},created(){this.getSlideList()},methods:{getSlideList(){var e=this;d().get("/assets/homeslider/conf.json").done((function(t){e.home_slides=t.slides})).fail((function(t){e.error=t.responseJSON.messages.error}))}}}),w=o(3744);const h=(0,w.Z)(_,[["render",r],["__scopeId","data-v-40079abe"]]);var g=h;const f=e=>((0,n.dD)("data-v-4e43ac12"),e=e(),(0,n.Cn)(),e),k=f((()=>(0,n._)("div",{class:"crop-to-fit",style:{"background-color":"var(--ion-color-light)"}},null,-1))),y=(0,n.Uk)("Вне зоны обслуживания"),v=(0,n.Uk)(" Поблизости к адресу "),I=(0,n.Uk)(", который вы выбрали, пока нет нет подходящих ресторанов и магазинов. Попробуйте другой адрес. "),W=f((()=>(0,n._)("h5",{class:"section-title"},"Магазины и рестораны",-1))),b={class:"crop-to-fit",style:{height:"180px"}};function L(e,t,o,i,s,a){const r=(0,n.up)("ion-skeleton-text"),u=(0,n.up)("ion-chip"),d=(0,n.up)("ion-item"),c=(0,n.up)("ion-card"),m=(0,n.up)("ion-list"),p=(0,n.up)("ion-card-title"),_=(0,n.up)("ion-card-header"),w=(0,n.up)("ion-card-content"),h=(0,n.up)("ion-col"),g=(0,n.up)("ion-icon"),f=(0,n.up)("ion-row"),L=(0,n.up)("ion-grid"),C=(0,n.up)("ion-img"),j=(0,n.up)("router-link"),Z=(0,n.up)("store-opened-indicator"),x=(0,n.up)("ion-thumbnail"),D=(0,n.up)("ion-text"),z=(0,n.up)("swiper-slide"),S=(0,n.up)("swiper");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s.storeList?0==s.storeList.length?((0,n.wg)(),(0,n.j4)(c,{key:1,color:"warning"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[y])),_:1})])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>{var t;return[v,(0,n._)("b",null,(0,l.zw)(null!==(t=e.$heap.state.user.location_main.location_address)&&void 0!==t?t:"доставки заказа"),1),I]})),_:1})])),_:1})):(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(m,{key:0,class:"store-list"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)([1,1,1,1],(e=>(0,n.Wm)(c,{button:"",key:e},{default:(0,n.w5)((()=>[k,(0,n.Wm)(u,{color:"medium"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{style:{width:"130px"},animated:""})])),_:1}),(0,n.Wm)(u,{color:"primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{style:{width:"100px"},animated:""})])),_:1}),(0,n.Wm)(d,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{style:{width:"70%",height:"1.5em"},animated:""})])),_:1})])),_:2},1024))),64))])),_:1})),s.storeList&&s.storeList.length>0?((0,n.wg)(),(0,n.j4)(L,{key:2,class:"ion-justify-content-between ion-align-items-center",style:{padding:"0 16px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,{size:"10"},{default:(0,n.w5)((()=>[W])),_:1}),(0,n.Wm)(h,{size:"2",class:"ion-align-self-end"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{style:{"font-size":"20px"},icon:i.searchOutline},null,8,["icon"])])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),s.storeList&&s.storeList.length>0?((0,n.wg)(),(0,n.j4)(m,{key:3,class:"store-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.storeList,((t,o)=>((0,n.wg)(),(0,n.j4)(c,{style:{position:"relative",height:"fit-content"},key:t.store_id,class:(0,l.C_)(0==t.is_opened?"closed":"")},{default:(0,n.w5)((()=>[(0,n.Wm)(j,{to:`/catalog/store-${t.store_id}`},{default:(0,n.w5)((()=>[(0,n._)("div",b,[t.image_hash?((0,n.wg)(),(0,n.j4)(C,{key:0,src:e.$heap.state.hostname+"/image/get.php/"+t.image_hash+".500.500.webp"},null,8,["src"])):(0,n.kq)("",!0)])])),_:2},1032,["to"]),a.store_perks[o].length>0?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"perk-row",style:(0,l.j5)(`width:${50*a.store_perks[o].length}px`)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.store_perks[o],(t=>((0,n.wg)(),(0,n.iD)("span",{key:t.image_hash,class:"perk"},[t.image_hash?((0,n.wg)(),(0,n.j4)(C,{key:0,src:""+(e.$heap.state.hostname+"/image/get.php/"+t.image_hash+".80.80.png")},null,8,["src"])):((0,n.wg)(),(0,n.j4)(C,{key:1,src:`/img/perks/${t.image_url}`},null,8,["src"]))])))),128))],4)):(0,n.kq)("",!0),(0,n.Wm)(j,{to:`/catalog/store-${t.store_id}`,style:{"text-decoration":"none"}},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{lines:"none",class:"store-title"},{default:(0,n.w5)((()=>[(0,n._)("b",null,(0,l.zw)(t.store_name),1)])),_:2},1024),(0,n.Wm)(L,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"ion-justify-content-between"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{size:"auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(Z,{storeItem:t},null,8,["storeItem"])])),_:2},1024),(0,n.Wm)(h,{size:"auto"},{default:(0,n.w5)((()=>[t.deliveryTime.timeMin?((0,n.wg)(),(0,n.j4)(u,{key:0,color:"medium",background:"transparent"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{icon:i.timeOutline},null,8,["icon"]),(0,n._)("label",null,(0,l.zw)(t.deliveryTime.timeMin)+"-"+(0,l.zw)(t.deliveryTime.timeMax)+"мин",1)])),_:2},1024)):(0,n.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"]),a.store_perks_slider[o].length>0?((0,n.wg)(),(0,n.j4)(S,{key:1,class:"perk-slider",modules:i.modules,speed:1e3,slidesPerView:1,navigation:!1,autoplay:{delay:3e3,disableOnInteraction:!0}},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.store_perks_slider[o],((t,o)=>((0,n.wg)(),(0,n.j4)(z,{key:o},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{onClick:o=>e.$router.push(`/catalog/product-${t.product_id}`),button:"",detail:"false",lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{slot:"start"},{default:(0,n.w5)((()=>[t.image_hash?((0,n.wg)(),(0,n.j4)(C,{key:0,src:""+(e.$heap.state.hostname+"/image/get.php/"+t.image_hash+".100.100.webp"),style:{"border-radius":"10px"}},null,8,["src"])):(0,n.kq)("",!0)])),_:2},1024),(0,n.Wm)(D,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.perk_title),1)])),_:2},1024),(0,n.Wm)(D,{slot:"end"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{color:"success",outline:""},{default:(0,n.w5)((()=>[(0,n._)("b",null,(0,l.zw)(t.perk_label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:2},1032,["modules"])):(0,n.kq)("",!0)])),_:2},1032,["class"])))),128))])),_:1})):(0,n.kq)("",!0)],64)}var C=o(8903),j=o(2008),Z=o(4405),x=o(6181),D={components:{IonList:p.q_,IonImg:p.Xz,IonChip:p.hM,IonGrid:p.jY,IonRow:p.Nd,IonCol:p.wI,IonItem:p.Ie,IonCard:p.PM,IonIcon:p.gu,IonCardHeader:p.Zi,IonCardTitle:p.Dq,IonCardContent:p.FN,IonSkeletonText:p.CK,Swiper:m.t,SwiperSlide:m.o,StoreOpenedIndicator:x.Z,IonThumbnail:p.Bs,IonText:p.yW},setup(){return{modules:[c.pt,c.W_],timeOutline:C.bdY,searchOutline:C.W6I}},data(){return{storeList:null,can_reload_at:0,loadedLocation:{}}},computed:{store_perks(){return this.storeList.map((function(e){return e.perks.filter((e=>"perk"==e.slot))}))},store_perks_slider(){return this.storeList.map((function(e){return e.perks.filter((e=>"slider"==e.slot))}))}},methods:{async listNearGet(e){const t=Date.now();if((null===e||void 0===e?void 0:e.location_latitude)==this.loadedLocation.location_latitude&&(null===e||void 0===e?void 0:e.location_latitude)==this.loadedLocation.location_latitude||(this.can_reload_at=0),!(this.can_reload_at>t)){this.can_reload_at=t+1e4;try{const t={location_id:e.location_id,location_latitude:e.location_latitude,location_longitude:e.location_longitude},o=await d().post(j.Z.state.hostname+"Store/listNearGet",t);this.storeList=this.storeListCalculate(o),this.loadedLocation=t}catch{}}},storeListCalculate(e){for(let t in e)e[t].deliveryTime=Z.Z.deliveryTimeCalculate(e[t].distance,e[t].store_time_preparation);return e}},mounted(){this.$topic.on("userMainLocationSet",(e=>{this.listNearGet(e)})),this.$topic.on("userCurrentLocationSet",(e=>{this.listNearGet(e)})),this.listNearGet(j.Z.state.user.location_main)}};const z=(0,w.Z)(D,[["render",L],["__scopeId","data-v-4e43ac12"]]);var S=z,T=o(5567),$=o(94),U=o(351),O={setup(){return{mainLogo:$}},components:{HomeSlider:g,StoreList:S,UserAddressWidget:T.Z},data(){return{primaryDeliveryTime:null}},ionViewDidEnter(){U.Z.geo["switch"]()}};const q=(0,w.Z)(O,[["render",i]]);var M=q}}]);
//# sourceMappingURL=681.ca99a335.js.map