"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[11],{4405:function(e,t,r){r(5306);var o=r(2008);const i={deliveryCalculate(e){if(!e.locations||!e.locations[0]||!e.locations[0].distance)return null;const t=e.locations[0].distance,r=e.store_time_preparation||0;return i.deliveryTimeCalculate(t,r)},deliveryTimeCalculate(e,t){var r;t=parseInt(null!==(r=t)&&void 0!==r?r:o.Z.getters.settings.delivery.timePreparationDefault);const i=parseInt(o.Z.getters.settings.delivery.timeDelta),s=parseInt(o.Z.getters.settings.delivery.speed),l=5*Math.round(e/s*60/5)+t,n=l>i?l-i:l,a=n+i;return{time:l,timeMin:n,timeMax:a}},render(e,t){for(let r in t)e=e.replace(`{{${r}}}`,t[r]);return e=e.replace(/{{\.}}/,"-"),e}};t["Z"]=i},2927:function(e,t,r){r.d(t,{Z:function(){return _}});var o=r(6252),i=r(3577);const s=e=>((0,o.dD)("data-v-0e00b8d4"),e=e(),(0,o.Cn)(),e),l={class:"slide-title"},n=s((()=>(0,o._)("div",{id:"hcat_widget_grid"},null,-1)));function a(e,t,r,s,a,u){const d=(0,o.up)("ion-img"),c=(0,o.up)("ion-thumbnail"),p=(0,o.up)("swiper-slide"),m=(0,o.up)("swiper");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m,{id:"hcat_widget_grid","slides-per-view":4.5,"space-between":10},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.groupList,(t=>((0,o.wg)(),(0,o.j4)(p,{key:t.group_id,onClick:()=>e.onClick(t.group_id)},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{style:{width:"70px",height:"70px"}},{default:(0,o.w5)((()=>[t.image_hash?((0,o.wg)(),(0,o.j4)(d,{key:0,style:{"border-radius":"10px",border:"1px solid #ddd"},src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])):(0,o.kq)("",!0)])),_:2},1024),(0,o._)("div",l,(0,i.zw)(t.group_name),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["slides-per-view"]),n],64)}var u=r(4852),d=r(3181),c=(0,o.aZ)({components:{IonImg:u.Xz,IonThumbnail:u.Bs,Swiper:d.t,SwiperSlide:d.o},props:["groupList","onClick"]}),p=r(3744);const m=(0,p.Z)(c,[["render",a],["__scopeId","data-v-0e00b8d4"]]);var _=m},7526:function(e,t,r){r.d(t,{Z:function(){return g}});var o=r(6252),i=r(3577);const s={class:"blur-image"},l=["src"],n=["src"];function a(e,t,r,a,u,d){const c=(0,o.up)("swiper-slide"),p=(0,o.up)("swiper");return(0,o.wg)(),(0,o.j4)(p,{modules:a.modules,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,effect:"fade",style:(0,i.j5)(`height: ${r.imgHeight||"100%"};`)},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.imageList,(t=>((0,o.wg)(),(0,o.j4)(c,{key:t.image_hash},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,i.C_)(`${r.mode?r.mode:""} cropper`),style:(0,i.j5)(`height: ${r.imgHeight+"px"||0}`)},[(0,o._)("div",s,[(0,o._)("img",{src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.${4*r.imgHeight||1200}.${4*r.imgHeight||1200}.webp`},null,8,l)]),(0,o._)("img",{style:(0,i.j5)(`min-height: ${r.imgHeight+"px;"||0};max-height:50vh`),src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.${4*r.imgHeight||1200}.${4*r.imgHeight||1200}.webp`},null,12,n)],6)])),_:2},1024)))),128))])),_:1},8,["modules","style"])}var u=r(8903),d=r(702),c=r(3181),p={components:{Swiper:c.t,SwiperSlide:c.o},props:["imageList","imgHeight","mode"],setup(){return{modules:[d.pt,d.xW],expand:u.jnR,contract:u.LJB}},data(){return{expanded:!1,vh:0,vw:0}},methods:{maximize(){this.expanded=!0,this.vh=document.getElementsByTagName("ion-content")[0].clientHeight,this.vw=document.getElementsByTagName("ion-content")[0].clientWidth},minimize(){this.expanded=!1,this.vh=document.getElementsByTagName("ion-content")[0].clientHeight,this.vw=document.getElementsByTagName("ion-content")[0].clientWidth}}},m=r(3744);const _=(0,m.Z)(p,[["render",a],["__scopeId","data-v-8c3c7a70"]]);var g=_},6761:function(e,t,r){r.d(t,{Z:function(){return C}});var o=r(6252),i=r(3577);const s=e=>((0,o.dD)("data-v-1c5866bc"),e=e(),(0,o.Cn)(),e),l=["id"],n={key:0,style:{position:"relative"}},a=s((()=>(0,o._)("div",{class:"product_list_item_img",style:{position:"absolute",border:"#9ac solid 2px",top:"-8px",left:"8px","z-index":"-1"}},null,-1))),u=s((()=>(0,o._)("div",{class:"product_list_item_img",style:{position:"absolute",border:"#cde solid 2px",top:"-4px",left:"4px","z-index":"-1"}},null,-1))),d=[a,u],c={key:0,style:{position:"relative",top:"-50%"}},p={style:{height:"5em",overflow:"hidden"}},m={key:0,style:{color:"var(--ion-color-danger)"}},_=(0,o.Uk)("   "),g={style:{color:"var(--ion-color-primary)"}},h={style:{"font-weight":"bold",margin:"0","font-size":"1.4em"}},w={style:{"font-weight":"bold",margin:"0","font-size":"1.2em"}},y=(0,o.Uk)(" / "),f={key:1,style:{color:"var(--ion-color-medium)"}},v={key:2,style:{color:"var(--ion-color-medium)"}},I={key:3,style:{color:"var(--ion-color-medium)"}};function k(e,t,r,s,a,u){const k=(0,o.up)("cart-add-buttons"),b=(0,o.up)("ion-img"),x=(0,o.up)("ion-icon");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(u.item_class),id:`product_list_item${r.productItem.product_id}`},[r.productItem.options?((0,o.wg)(),(0,o.iD)("div",n,d)):(0,o.kq)("",!0),(0,o._)("div",{class:"product_list_item_img",style:(0,i.j5)(r.productItem.options?"border:#def solid 2px;":"")},["0"!=r.productItem.is_disabled||r.productItem.deleted_at?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(k,{buttonLayout:"vertical",productItem:r.productItem},null,8,["productItem"])])),(0,o.Wm)(b,{class:"blur-image",src:`${e.$heap.state.hostname}image/get.php/${r.productItem.image_hash}.200.200.webp`},null,8,["src"]),(0,o.Wm)(b,{onClick:t[0]||(t[0]=t=>e.$router.push(`/catalog/product-${r.productItem.product_id}`)),src:`${e.$heap.state.hostname}image/get.php/${r.productItem.image_hash}.200.200.webp`},null,8,["src"]),r.productItem.options?((0,o.wg)(),(0,o.j4)(x,{key:1,src:s.layersOutline,color:"primary",size:"large",style:{position:"absolute",bottom:"3px",right:"3px"}},null,8,["src"])):(0,o.kq)("",!0)],4),(0,o._)("div",p,[(0,o._)("div",{style:{color:"black",height:"3em","font-size":"1em",overflow:"hidden","line-height":"1.4em","font-weight":"bold"},onClick:t[1]||(t[1]=t=>e.$router.push(`/catalog/product-${r.productItem.product_id}`))},(0,i.zw)(r.productItem.product_name),1),r.productItem.product_price!=r.productItem.product_final_price?((0,o.wg)(),(0,o.iD)("span",m,[(0,o._)("s",null,(0,i.zw)(r.productItem.product_price)+(0,i.zw)(e.$heap.state.currencySign),1),_])):(0,o.kq)("",!0),(0,o._)("span",g,[(0,o._)("b",h,(0,i.zw)(r.productItem.product_final_price),1),(0,o._)("b",w,(0,i.zw)(e.$heap.state.currencySign),1)]),y,"порция"==r.productItem.product_unit?((0,o.wg)(),(0,o.iD)("span",f,(0,i.zw)(u.weight_in_gramms)+"г",1)):"порция мл"==r.productItem.product_unit?((0,o.wg)(),(0,o.iD)("span",v,(0,i.zw)(u.weight_in_gramms)+"мл",1)):((0,o.wg)(),(0,o.iD)("span",I,(0,i.zw)(r.productItem.product_unit),1))])],10,l)}var b=r(4852),x=r(3991),W=r(8903),$={components:{IonImg:b.Xz,IonIcon:b.gu,CartAddButtons:x.Z},props:["productItem"],setup(){return{layersOutline:W.Y1P}},computed:{item_class(){return this.productItem.deleted_at?"deleted":this.productItem.product_final_price!=this.productItem.product_price?"promo":1==this.productItem.is_disabled?"disabled":1==this.productItem.is_counted&&this.productItem.product_quantity-this.productItem.product_quantity_reserved<1?"absent":""},weight_in_gramms(){return 1e3*this.productItem.product_weight}}},z=r(3744);const S=(0,z.Z)($,[["render",k],["__scopeId","data-v-1c5866bc"]]);var C=S},6181:function(e,t,r){r.d(t,{Z:function(){return v}});var o=r(6252),i=r(3577);const s=(0,o.Uk)(" ◉ "),l={key:0},n=(0,o.Uk)(" ◉ "),a=(0,o.Uk)("Временно не работает"),u={key:1},d=(0,o.Uk)(" ◉ "),c={key:2},p=(0,o.Uk)(" ◉ "),m=(0,o.Uk)("Закрыт");function _(e,t,r,_,g,h){const w=(0,o.up)("ion-text"),y=(0,o.up)("ion-chip");return 1==r.storeItem.is_opened?((0,o.wg)(),(0,o.j4)(y,{key:0,color:"medium"},{default:(0,o.w5)((()=>[(0,o._)("label",null,[(0,o.Wm)(w,{color:"success"},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Uk)("Открыт до "+(0,i.zw)(r.storeItem.store_time_closes)+":00",1)])])),_:1})):((0,o.wg)(),(0,o.j4)(y,{key:1,color:"medium"},{default:(0,o.w5)((()=>[0==r.storeItem.is_working?((0,o.wg)(),(0,o.iD)("label",l,[(0,o.Wm)(w,{color:"medium"},{default:(0,o.w5)((()=>[n])),_:1}),a])):r.storeItem.store_next_time_opens>0?((0,o.wg)(),(0,o.iD)("label",u,[(0,o.Wm)(w,{color:"danger"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Uk)("Закрыт до "+(0,i.zw)(r.storeItem.store_next_time_opens)+":00",1)])):((0,o.wg)(),(0,o.iD)("label",c,[(0,o.Wm)(w,{color:"danger"},{default:(0,o.w5)((()=>[p])),_:1}),m]))])),_:1}))}var g=r(4852),h=r(8903),w={props:["storeItem"],components:{IonChip:g.hM,IonText:g.yW},setup(){return{ellipse:h.Hpm}}},y=r(3744);const f=(0,y.Z)(w,[["render",_]]);var v=f},6011:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var o=r(6252),i=r(3577);const s=e=>((0,o.dD)("data-v-13bf24ef"),e=e(),(0,o.Cn)(),e),l={class:"store-info-container"},n={key:0,slot:"start",class:"avatar-container"},a={class:"avatar"},u=["src"],d=(0,o.Uk)("подробнее"),c=(0,o.Uk)("ИНН"),p=(0,o.Uk)("Телефон"),m={style:{"scrollbar-width":"none","overflow-x":"scroll",display:"flex"}},_={key:0,class:"delivery-variant"},g=s((()=>(0,o._)("br",null,null,-1))),h={key:1,class:"delivery-variant"},w=s((()=>(0,o._)("br",null,null,-1))),y={key:2,class:"delivery-variant"},f=(0,o.Uk)("Самовывоз"),v=s((()=>(0,o._)("br",null,null,-1))),I=s((()=>(0,o._)("b",null,"0₽",-1))),k={key:0,class:"group-fixed-block hidden-block"},b={key:1},x=s((()=>(0,o._)("h4",{style:{margin:"8px 16px"}},[(0,o._)("b",null,"Категории")],-1))),W={style:{margin:"0"}},$=(0,o.Uk)("добавить "),z=(0,o.Uk)(" К сожалению, в "),S=(0,o.Uk)(" по запросу "),C=(0,o.Uk)(" ничего не найдено. "),G=(0,o.Uk)("Сбросить фильтр"),D={key:3},q={style:{margin:"8px 16px"}},j={style:{margin:"0"}};function U(e,t,r,s,U,P){var Z;const H=(0,o.up)("image-slider-comp"),L=(0,o.up)("ion-text"),T=(0,o.up)("ion-icon"),O=(0,o.up)("ion-item"),F=(0,o.up)("ion-label"),M=(0,o.up)("ion-list"),Y=(0,o.up)("ion-accordion"),B=(0,o.up)("ion-accordion-group"),K=(0,o.up)("store-opened-indicator"),Q=(0,o.up)("ion-col"),V=(0,o.up)("ion-chip"),A=(0,o.up)("ion-row"),N=(0,o.up)("ion-grid"),E=(0,o.up)("ion-segment-button"),J=(0,o.up)("ion-segment"),R=(0,o.up)("ion-searchbar"),X=(0,o.up)("group-list"),ee=(0,o.up)("product-list"),te=(0,o.up)("swiper-slide"),re=(0,o.up)("swiper"),oe=(0,o.up)("ion-skeleton-text"),ie=(0,o.up)("base-layout");return(0,o.wg)(),(0,o.j4)(ie,{pageDefaultBackLink:"/catalog","page-class":"store-page","page-title":null!==(Z=this.storeItem.store_name)&&void 0!==Z?Z:"Магазин"},{default:(0,o.w5)((()=>{var r,Z;return[(0,o._)("div",null,[(0,o._)("div",l,[(0,o.Wm)(H,{imageList:U.storeItem.images,imgHeight:300,mode:"crop-to-fit"},null,8,["imageList"]),(0,o.Wm)(M,{class:"store-info"},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{lines:"none"},{default:(0,o.w5)((()=>[U.storeItem.avatarImage?((0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",a,[(0,o._)("img",{src:e.$heap.state.hostname+"image/get.php/"+U.storeItem.avatarImage+".200.200.webp"},null,8,u)])])):(0,o.kq)("",!0),(0,o.Wm)(L,{style:{"font-size":"1.2em"}},{default:(0,o.w5)((()=>[(0,o._)("b",null,(0,i.zw)(U.storeItem.store_name),1)])),_:1}),U.storeItem.is_writable?((0,o.wg)(),(0,o.j4)(T,{key:1,slot:"end",color:"primary",onClick:t[0]||(t[0]=t=>e.$router.push(`/catalog/store-edit-${U.storeItem.store_id}`)),icon:s.settingsOutline,style:{"font-size":"24px"}},null,8,["icon"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(B,{style:{width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{slot:"header",lines:"none"},{default:(0,o.w5)((()=>[U.storeItem.store_description?((0,o.wg)(),(0,o.j4)(L,{key:0,class:"store-description",color:"medium"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(U.storeItem.store_description),1)])),_:1})):((0,o.wg)(),(0,o.j4)(L,{key:1,color:"medium"},{default:(0,o.w5)((()=>[d])),_:1}))])),_:1}),(0,o.Wm)(M,{slot:"content"},{default:(0,o.w5)((()=>{var e;return[U.storeItem.store_company_name?((0,o.wg)(),(0,o.j4)(O,{key:0,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o._)("b",null,(0,i.zw)(U.storeItem.store_company_name),1)])),_:1})])),_:1})):(0,o.kq)("",!0),U.storeItem.store_tax_num?((0,o.wg)(),(0,o.j4)(O,{key:1,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(F,{color:"medium"},{default:(0,o.w5)((()=>[c])),_:1}),(0,o.Wm)(L,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(U.storeItem.store_tax_num),1)])),_:1})])),_:1})):(0,o.kq)("",!0),U.storeItem.store_phone?((0,o.wg)(),(0,o.j4)(O,{key:2,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(F,{color:"medium"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(L,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(U.storeItem.store_phone),1)])),_:1})])),_:1})):(0,o.kq)("",!0),(null===(e=U.storeItem.locations)||void 0===e?void 0:e.length)>0?((0,o.wg)(),(0,o.j4)(O,{key:3,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{color:"dark"},{default:(0,o.w5)((()=>{var e;return[(0,o.Uk)((0,i.zw)(null===(e=U.storeItem.locations)||void 0===e?void 0:e[0].location_address),1)]})),_:1})])),_:1})):(0,o.kq)("",!0)]})),_:1})])),_:1})])),_:1}),(0,o.Wm)(N,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{class:"ion-justify-content-between"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{size:"auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{storeItem:U.storeItem},null,8,["storeItem"])])),_:1}),(0,o.Wm)(Q,{size:"auto"},{default:(0,o.w5)((()=>[U.storeItem.store_group_names?((0,o.wg)(),(0,o.j4)(V,{key:0,color:"medium",background:"transparent"},{default:(0,o.w5)((()=>[(0,o._)("label",null,(0,i.zw)(U.storeItem.store_group_names),1)])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,o._)("div",m,[U.storeItem.delivery_cost>0?((0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",null,[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Доставит "+(0,i.zw)(e.$heap.getters.settings.app_title),1)])),_:1}),g,null!==(r=U.storeItem)&&void 0!==r&&null!==(Z=r.deliveryTime)&&void 0!==Z&&Z.timeMin?((0,o.wg)(),(0,o.j4)(L,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(U.storeItem.deliveryTime.timeMin)+"-"+(0,i.zw)(U.storeItem.deliveryTime.timeMax)+"мин",1)])),_:1})):(0,o.kq)("",!0)]),(0,o._)("div",null,[U.storeItem.delivery_cost>0?((0,o.wg)(),(0,o.j4)(L,{key:0},{default:(0,o.w5)((()=>[(0,o._)("b",null,(0,i.zw)(U.storeItem.delivery_cost)+"₽",1)])),_:1})):(0,o.kq)("",!0)])])):(0,o.kq)("",!0),1==U.storeItem.store_delivery_allow?((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",null,[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Доставит "+(0,i.zw)(U.storeItem.member_of_groups.group_names),1)])),_:1}),w]),(0,o._)("div",null,[U.storeItem.delivery_cost>0?((0,o.wg)(),(0,o.j4)(L,{key:0},{default:(0,o.w5)((()=>[(0,o._)("b",null,(0,i.zw)(U.storeItem.store_delivery_cost)+"₽",1)])),_:1})):(0,o.kq)("",!0)])])):(0,o.kq)("",!0),1==U.storeItem.store_pickup_allow?((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",null,[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[f])),_:1}),v]),(0,o._)("div",null,[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[I])),_:1})])])):(0,o.kq)("",!0)])]),P.storeGroupsFiltered?((0,o.wg)(),(0,o.iD)("div",k,[(0,o.Wm)(J,{modelValue:U.groupSelectedParentId,"onUpdate:modelValue":t[1]||(t[1]=e=>U.groupSelectedParentId=e),scrollable:"",style:{"scrollbar-width":"none"},class:"groups-container"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.storeGroupsFiltered,(e=>((0,o.wg)(),(0,o.j4)(E,{key:e.group_id,value:e.group_id,onClick:t=>P.groupSelectParent(e.group_id,1),ref_for:!0,ref:"group-tab-"+e.group_id},{default:(0,o.w5)((()=>[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.group_name),1)])),_:2},1024)])),_:2},1032,["value","onClick"])))),128))])),_:1},8,["modelValue"])])):(0,o.kq)("",!0),(0,o.Wm)(R,{class:"search-container",modelValue:U.searchQuery,"onUpdate:modelValue":t[2]||(t[2]=e=>U.searchQuery=e),placeholder:"Поиск у этого продавца"},null,8,["modelValue"]),P.storeGroupsFiltered?((0,o.wg)(),(0,o.iD)("div",b,[x,(0,o.Wm)(X,{groupList:P.storeGroupsFiltered,onClick:e=>{P.groupSelectParent(e,!0)}},null,8,["groupList","onClick"]),(0,o.Wm)(re,{pager:"true",initialSlide:0,speed:400,watchSlidesProgress:!1,grabCursor:!0,touchStartForcePreventDefault:!0,slidesPerView:1.1,pagination:!1,centeredSlides:!1,class:"product-list-slider",onSlideChange:t[3]||(t[3]=e=>P.groupSliderChanged(e))},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.storeGroupsFiltered,(e=>((0,o.wg)(),(0,o.j4)(te,{key:e.group_id},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{class:"product-list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.children,(e=>((0,o.wg)(),(0,o.j4)(A,{key:e.group_id,ref_for:!0,ref:"group-"+e.group_id,"data-group_id":e.group_id},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{class:"group-title",size:"12"},{default:(0,o.w5)((()=>[(0,o._)("h5",W,[(0,o.Uk)((0,i.zw)(e.group_name)+" ",1),1==U.storeItem.is_writable?((0,o.wg)(),(0,o.j4)(V,{key:0,onClick:t=>P.productItemCreate(e.group_id)},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{src:s.addOutline},null,8,["src"]),$])),_:2},1032,["onClick"])):(0,o.kq)("",!0)])])),_:2},1024),(0,o.Wm)(Q,{size:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{productList:P.storeProductsFiltered[e.group_id]},null,8,["productList"])])),_:2},1024)])),_:2},1032,["data-group_id"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["slidesPerView"])])):U.searchQuery?((0,o.wg)(),(0,o.j4)(F,{key:2},{default:(0,o.w5)((()=>[z,(0,o._)("b",null,(0,i.zw)(U.storeItem.store_name),1),S,(0,o._)("b",null,'"'+(0,i.zw)(U.searchQuery)+'"',1),C,(0,o.Wm)(V,{onClick:t[4]||(t[4]=e=>this.searchQuery=null)},{default:(0,o.w5)((()=>[G])),_:1})])),_:1})):P.storeGroupsFiltered?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("h4",q,[(0,o._)("b",null,[(0,o.Wm)(oe,{style:{height:"30px",width:"150px"}})])]),(0,o._)("div",null,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)([1,2,3,4],(e=>(0,o._)("div",{key:e,style:{display:"inline-block",margin:"10px"}},[(0,o.Wm)(oe,{style:{height:"70px",width:"70px"},animated:""})]))),64))]),(0,o.Wm)(N,{class:"product-list"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{class:"group-title",size:"12"},{default:(0,o.w5)((()=>[(0,o._)("h5",j,[(0,o.Wm)(oe,{style:{height:"20px",width:"120px"}})])])),_:1}),(0,o.Wm)(Q,{size:"12"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)([1,2,3,4],(e=>(0,o._)("div",{key:e,style:{display:"inline-block",margin:"10px"}},[(0,o.Wm)(oe,{style:{height:"120px",width:"120px"},animated:""})]))),64))])),_:1})])),_:1})])),_:1})]))])]})),_:1},8,["page-title"])}r(3948),r(5306);var P=r(4852),Z=r(702),H=r(3181),L=r(8903),T=r(7526),O=r(2927);const F={class:"product_list_widget_grid"};function M(e,t,r,i,s,l){const n=(0,o.up)("product-item");return(0,o.wg)(),(0,o.iD)("div",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.productList,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.product_id},[(0,o.Wm)(n,{productItem:e},null,8,["productItem"])])))),128))])}var Y=r(6761),B={props:["productList"],components:{ProductItem:Y.Z}},K=r(3744);const Q=(0,K.Z)(B,[["render",M],["__scopeId","data-v-fcf4f40a"]]);var V=Q,A=r(6181),N=r(9755),E=r.n(N),J=r(2008),R=r(4405),X={components:{IonText:P.yW,IonCol:P.wI,IonIcon:P.gu,IonRow:P.Nd,IonGrid:P.jY,IonLabel:P.Q$,IonSegmentButton:P.GO,IonSegment:P.cJ,IonChip:P.hM,IonSearchbar:P.VI,IonAccordion:P.We,IonAccordionGroup:P.eh,IonList:P.q_,IonItem:P.Ie,ImageSliderComp:T.Z,StoreOpenedIndicator:A.Z,Swiper:H.t,SwiperSlide:H.o,GroupList:O.Z,ProductList:V,IonSkeletonText:P.CK},setup(){return{search:L.yC4,settingsOutline:L.C$N,rocketOutline:L.G$D,compassOutline:L.gmD,addOutline:L.s6O,slideModules:[Z.pt]}},data(){return{storeId:this.$route.params.id,query:this.$route.query,searchQuery:null,storeItem:[],productList:[],storeGroups:null,groupSelectedParentId:-1,sliderMaxHeight:500,offsetModificator:150,can_reload_at:0}},computed:{storeGroupsFiltered(){if(!this.storeProductsFiltered||!this.storeGroups)return null;const e=Object.keys(this.storeProductsFiltered);let t=null;for(let r in this.storeGroups)for(let o in this.storeGroups[r].children){const i=this.storeGroups[r].children[o];e.includes(o)&&(t||(t={}),t[r]||(t[r]={group_id:this.storeGroups[r].group_id,group_name:this.storeGroups[r].group_name,image_hash:this.storeGroups[r].image_hash,children:[]}),t[r].children.push(i))}return t},storeProductsFiltered(){let e=1,t={};for(let l of this.productList){var r;if(this.searchQuery)try{var o,i,s;const e=new RegExp(this.searchQuery.replace(/^[\w\d\s]/,"").replace(/\s/g,".*"),"im");if((null===(o=l.product_name)||void 0===o||!o.match(e))&&(null===(i=l.product_code)||void 0===i||!i.match(e))&&(null===(s=l.product_description)||void 0===s||!s.match(e)))continue}catch{}const n=null!==(r=l.group_id)&&void 0!==r?r:0;this.storeGroups&&(t[n]||(t[n]=[],t[n].category_order=e++)),t[n].push(l)}return t}},methods:{async itemGet(){const e=Date.now();if(!(this.can_reload_at>e)){this.can_reload_at=e+1e4;try{const e=await E().post(`${J.Z.state.hostname}Store/itemGet`,{store_id:this.storeId,distance_include:1});this.storeItem=this.itemPrepare(e),this.storeId=e.store_id,this.groupTreeGet({store_id:this.storeId}),J.Z.commit("setCurrentStore",this.storeItem)}catch(o){var t,r;const e=null===o||void 0===o||null===(t=o.responseJSON)||void 0===t||null===(r=t.messages)||void 0===r?void 0:r.error;switch(e){case"notfound":this.$flash("Продавец не найден"),this.$router.replace("/catalog");break}return!1}}},itemPrepare(e){var t;return e.member_of_groups.group_names&&(e.store_group_names=e.member_of_groups.group_names),e.deliveryTime={},null!==(t=e.locations[0])&&void 0!==t&&t.distance&&(e.deliveryTime=R.Z.deliveryTimeCalculate(e.locations[0].distance,e.store_time_preparation)),e.avatarImage="",e.avatar.length>0&&(e.avatarImage=e.avatar[0].image_hash),e},async productListGet(e={}){if(e.store_id=this.storeId,e.is_active=1,e.name_query&&""==e.name_query)return void this.groupTreeGet({store_id:this.storeId});e.limit=200;let t={};try{t=await E().post(J.Z.state.hostname+"Product/listGet",e)}catch(r){}this.productList=t.product_list,this.groupOtherAdd(),setTimeout((()=>{this.groupSelect()}),0)},async productItemCreate(e){try{const t={store_id:this.storeId,product_name:"Новый товар",product_price:1e3,product_promo_price:1e3},r=await E().post(`${J.Z.state.hostname}Product/itemCreate`,t);e&&await E().post(`${J.Z.state.hostname}Product/itemUpdateGroup`,{product_id:r,group_id:e,is_joined:1}),this.$router.push(`/catalog/product-edit-${r}`),this.$flash("Добавлен 'Новый товар'")}catch{this.$flash("Не удалось создать товар")}},async groupTreeGet(e){try{const t=await E().get(`${J.Z.state.hostname}Product/groupTreeGet`,{store_id:e.store_id});let r=[];for(let e in t)r[t[e].order]=t[e];this.storeGroups=r,this.productListGet()}catch(t){}},groupOtherAdd(){if(this.storeProductsFiltered[0]){const e=this.storeGroups.filter((e=>"other"==e.group_id));if(e.length>0)return;this.storeGroups.push({group_id:"other",group_name:"Другое",image_hash:"",children:{0:{group_id:0,group_name:"другое",group_parent_id:0,group_path:"",image_hash:""}}})}},groupSelect(){let e=this.query.parent_group_id,t=this.query.sub_group_id;if(t)e:for(let i in this.storeGroups)for(let r in this.storeGroups[i].children)if(r==t){e=i;break e}var r;e||(e=null===(r=this.storeGroups[0])||void 0===r?void 0:r.group_id);const o=!1;this.groupSelectParent(e,o)},groupSelectParent(e,t=!1){if(this.groupSelectedParentId==e||!document.querySelector(".product-list-slider"))return;this.groupSelectedParentId=e;const r=document.querySelector(".product-list-slider").swiper,o=this.storeGroups.findIndex((t=>t.group_id==e));o>=0&&(r.slideTo(o,100,!1),this.groupSliderAdjustHeight())},groupSliderChanged(e){const t=e.activeIndex,r=this.storeGroups[t].group_id;this.groupSelectParent(r,1)},groupSliderAdjustHeight(){var e;const t=null===(e=document.querySelector(".product-list-slider .swiper-slide.swiper-slide-active"))||void 0===e?void 0:e.scrollHeight;document.querySelector(".product-list-slider.swiper").style.maxHeight=t>0?t+"px":""}},mounted(){this.query=this.$route.query,this.itemGet()},watch:{$route(e){this.storeId=e.params.id}}};const ee=(0,K.Z)(X,[["render",U],["__scopeId","data-v-13bf24ef"]]);var te=ee}}]);
//# sourceMappingURL=11.36038dc0.js.map