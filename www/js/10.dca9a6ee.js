"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[10],{4405:function(t,e,o){var r=o(2008);const i={deliveryCalculate(t){if(!t.locations||!t.locations[0]||!t.locations[0].distance)return null;const e=t.locations[0].distance,o=t.store_time_preparation||0;return i.deliveryTimeCalculate(e,o)},deliveryTimeCalculate(t,e){e=parseInt(e??r.Z.getters.settings.delivery.timePreparationDefault);const o=parseInt(r.Z.getters.settings.delivery.timeDelta),i=parseInt(r.Z.getters.settings.delivery.speed),n=5*Math.round(t/i*60/5)+e,s=n>o?n-o:n,a=s+o;return{time:n,timeMin:s,timeMax:a}}};e["Z"]=i},3796:function(t,e,o){o.d(e,{Z:function(){return f}});var r=o(6252),i=o(3577);const n=["id"],s={class:"product_list_item_img"},a={style:{position:"relative",top:"-50%"}},u={style:{height:"4em",overflow:"hidden"}},l={key:0,style:{color:"var(--ion-color-danger)"}},d=(0,r.Uk)("   "),c={style:{color:"var(--ion-color-primary)"}},p=(0,r.Uk)(" / "),m={style:{color:"var(--ion-color-medium)"}};function _(t,e,o,_,h,I){const g=(0,r.up)("cart-add-buttons"),y=(0,r.up)("ion-img");return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(I.item_class),id:`product_list_item${o.productItem.product_id}`},[(0,r._)("div",s,[(0,r._)("div",a,[(0,r.Wm)(g,{buttonLayout:"vertical",productItem:o.productItem},null,8,["productItem"])]),(0,r.Wm)(y,{onClick:e[0]||(e[0]=e=>t.$router.push(`/catalog/product-${o.productItem.product_id}`)),src:`${t.$heap.state.hostname}image/get.php/${o.productItem.image_hash}.200.200.webp`},null,8,["src"])]),(0,r._)("div",u,[o.productItem.product_price!=o.productItem.product_final_price?((0,r.wg)(),(0,r.iD)("span",l,[(0,r._)("s",null,(0,i.zw)(o.productItem.product_price)+(0,i.zw)(t.$heap.state.currencySign),1),d])):(0,r.kq)("",!0),(0,r._)("span",c,(0,i.zw)(o.productItem.product_final_price)+(0,i.zw)(t.$heap.state.currencySign),1),p,(0,r._)("span",m,(0,i.zw)(o.productItem.product_unit),1),(0,r._)("div",{style:{color:"black",height:"2.4em","font-size":"1em",overflow:"hidden","line-height":"1.2em"},onClick:e[1]||(e[1]=e=>t.$router.push(`product-${o.productItem.product_id}`))},(0,i.zw)(o.productItem.product_name),1)])],10,n)}var h=o(3741),I=o(9162),g={components:{IonImg:h.Xz,CartAddButtons:I.Z},props:["productItem"],computed:{item_class(){return this.productItem.deleted_at?"deleted":1==this.productItem.disabled?"disabled":1==this.productItem.is_counted&&this.productItem.product_quantity-this.productItem.product_quantity_reserved<1?"absent":""}}},y=o(3744);const w=(0,y.Z)(g,[["render",_],["__scopeId","data-v-3dba7202"]]);var f=w},6210:function(t,e,o){o.d(e,{Z:function(){return m}});var r=o(6252),i=o(3577);const n={key:0},s={key:1},a={key:2};function u(t,e,o,u,l,d){const c=(0,r.up)("ion-chip");return 1==o.storeItem.is_opened?((0,r.wg)(),(0,r.j4)(c,{key:0,color:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)("Открыт до "+(0,i.zw)(o.storeItem.store_time_closes)+":00",1)])),_:1})):((0,r.wg)(),(0,r.j4)(c,{key:1,color:"danger"},{default:(0,r.w5)((()=>[0==o.storeItem.is_working?((0,r.wg)(),(0,r.iD)("span",n,"Временно не работает")):o.storeItem.store_next_time_opens>0?((0,r.wg)(),(0,r.iD)("span",s,"Закрыт до "+(0,i.zw)(o.storeItem.store_next_time_opens)+":00",1)):((0,r.wg)(),(0,r.iD)("span",a,"Закрыт"))])),_:1}))}var l=o(3741),d={props:["storeItem"],components:{IonChip:l.hM}},c=o(3744);const p=(0,c.Z)(d,[["render",u]]);var m=p},10:function(t,e,o){o.r(e),o.d(e,{default:function(){return k}});var r=o(6252),i=o(3577);const n={key:0,style:{"background-color":"var(--ion-color-light-tint)",padding:"10px"}},s=(0,r.Uk)("Найденные товары"),a={style:{"font-size":"1.1em"}},u={style:{margin:"10px",display:"grid","grid-template-columns":"repeat(auto-fit, 160px)"}},l={key:1},d=(0,r.Uk)("Ничего не найдено."),c=(0,r.Uk)("Возможно у нас нет того что вы ищите или вы находитель слишком далеко");function p(t,e,o,p,m,_){const h=(0,r.up)("ion-searchbar"),I=(0,r.up)("ion-title"),g=(0,r.up)("ion-img"),y=(0,r.up)("ion-thumbnail"),w=(0,r.up)("ion-note"),f=(0,r.up)("ion-item"),v=(0,r.up)("store-opened-indicator"),k=(0,r.up)("product-item"),b=(0,r.up)("ion-list"),C=(0,r.up)("ion-card-title"),$=(0,r.up)("ion-card-header"),z=(0,r.up)("ion-card-content"),D=(0,r.up)("ion-card"),W=(0,r.up)("base-layout");return(0,r.wg)(),(0,r.j4)(W,{"page-title":"Поиск товаров"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"search-container",modelValue:m.query,"onUpdate:modelValue":e[0]||(e[0]=t=>m.query=t),onInput:e[1]||(e[1]=t=>_.delayedListGet()),placeholder:"начните искать"},null,8,["modelValue"]),m.found?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(I,null,{default:(0,r.w5)((()=>[s])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.found.product_matches,(e=>((0,r.wg)(),(0,r.j4)(b,{key:e.store_id,style:{"border-radius":"10px","margin-top":"30px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{detail:"",button:"",onClick:o=>t.$router.push(`/search/store-${e.store_id}`),lines:"full"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{slot:"start"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{style:{"border-radius":"10px"},src:`${t.$heap.state.hostname}image/get.php/${e.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024),(0,r._)("p",a,(0,i.zw)(e?.store_name),1),(0,r.Wm)(w,{slot:"helper"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.store_description),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,r._)("div",null,[(0,r.Wm)(v,{storeItem:e},null,8,["storeItem"])]),(0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.matches,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.product_id},[(0,r.Wm)(k,{productItem:t,storeName:e.store_name},null,8,["productItem","storeName"])])))),128))])])),_:2},1024)))),128))])):((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(D,{color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)($,null,{default:(0,r.w5)((()=>[(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[d])),_:1})])),_:1}),(0,r.Wm)(z,null,{default:(0,r.w5)((()=>[c])),_:1})])),_:1})]))])),_:1})}var m=o(3741),_=o(9755),h=o.n(_),I=o(4405),g=o(3796),y=o(6210),w={components:{StoreOpenedIndicator:y.Z,IonSearchbar:m.VI,IonTitle:m.wd,IonImg:m.Xz,IonThumbnail:m.Bs,IonNote:m.uN,IonItem:m.Ie,IonList:m.q_,IonCard:m.PM,IonCardContent:m.FN,IonCardTitle:m.Dq,IonCardHeader:m.Zi,ProductItem:g.Z},data(){return{query:this.$route.query.q||"",found:null}},ionViewDidEnter(){this.delayedListGet()},created(){this.delayedListGet();let t=this;this.$topic.on("userGet",(e=>{this.found||t.listGet()}))},methods:{async listGet(){const t={query:this.query,in_products:1,in_stores:0,location_id:this.locMainGet()};if(t.location_id)try{const e=await h().get(this.$heap.state.hostname+"Search/listGet",t);this.found=this.storeListCalculate(e)}catch{this.found=null}},storeListCalculate(t){if(!t.product_matches?.length)return null;for(let e in t.product_matches)t.product_matches[e].deliveryTime=I.Z.deliveryTimeCalculate(t.product_matches[e].distance,t.product_matches[e].store_time_preparation);return t},locMainGet(){return this.$heap.state.user.location_main?this.$heap.state.user.location_main.location_id:null},delayedListGet(){clearTimeout(this.clock);const t=this;this.clock=setTimeout((()=>{t.listGet()}),200)}}},f=o(3744);const v=(0,f.Z)(w,[["render",p],["__scopeId","data-v-12a92722"]]);var k=v}}]);
//# sourceMappingURL=10.dca9a6ee.js.map