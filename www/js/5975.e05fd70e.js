"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[5975],{5975:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a=i(641),s=i(33);const o={key:1},l=["href"];function n(e,t,i,n,d,r){const u=(0,a.g2)("ion-segment-button"),m=(0,a.g2)("ion-segment"),_=(0,a.g2)("ion-select-option"),c=(0,a.g2)("ion-select"),h=(0,a.g2)("ion-item"),p=(0,a.g2)("ion-searchbar"),g=(0,a.g2)("ion-icon"),b=(0,a.g2)("ion-text"),f=(0,a.g2)("ion-img"),y=(0,a.g2)("ion-avatar"),k=(0,a.g2)("ion-label"),v=(0,a.g2)("ion-chip"),I=(0,a.g2)("ion-list"),F=(0,a.g2)("ion-thumbnail"),T=(0,a.g2)("ion-skeleton-text"),$=(0,a.g2)("ion-card-content"),C=(0,a.g2)("ion-card"),W=(0,a.g2)("ion-infinite-scroll-content"),w=(0,a.g2)("ion-infinite-scroll"),D=(0,a.g2)("base-layout");return(0,a.uX)(),(0,a.Wv)(D,{pageDefaultBackLink:"/user","page-title":"Элементы"},{default:(0,a.k6)((()=>[(0,a.bF)(m,{scrollable:!0,modelValue:d.moderationType,"onUpdate:modelValue":t[1]||(t[1]=e=>d.moderationType=e),onIonChange:t[2]||(t[2]=e=>r.listTypeChanged(e))},{default:(0,a.k6)((()=>[(0,a.bF)(u,{value:"images"},{default:(0,a.k6)((()=>[(0,a.eW)(" Картинки ")])),_:1}),(0,a.bF)(u,{value:"products"},{default:(0,a.k6)((()=>[(0,a.eW)(" Товары ")])),_:1}),(0,a.bF)(u,{value:"stores"},{default:(0,a.k6)((()=>[(0,a.eW)(" Магазины ")])),_:1}),(0,a.bF)(u,{value:"users",onClick:t[0]||(t[0]=e=>d.item_type="active")},{default:(0,a.k6)((()=>[(0,a.eW)(" Пользователи ")])),_:1}),(0,a.bF)(u,{value:"couriers"},{default:(0,a.k6)((()=>[(0,a.eW)(" Курьеры ")])),_:1})])),_:1},8,["modelValue"]),(0,a.Lk)("div",null,[(0,a.bF)(h,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{modelValue:d.item_type,"onUpdate:modelValue":t[3]||(t[3]=e=>d.item_type=e),value:"disabled",label:"Тип элементов","label-placement":"stacked",onIonChange:t[4]||(t[4]=e=>r.listReload())},{default:(0,a.k6)((()=>[(0,a.bF)(_,{value:"active"},{default:(0,a.k6)((()=>[(0,a.eW)("активные")])),_:1}),(0,a.bF)(_,{value:"disabled"},{default:(0,a.k6)((()=>[(0,a.eW)("выключенные")])),_:1}),(0,a.bF)(_,{value:"deleted"},{default:(0,a.k6)((()=>[(0,a.eW)("удаленные")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"stores"==d.moderationType||"products"==d.moderationType||"couriers"==d.moderationType||"users"==d.moderationType?((0,a.uX)(),(0,a.Wv)(p,{key:0,placeholder:"Фильтр",modelValue:d.filter,"onUpdate:modelValue":t[5]||(t[5]=e=>d.filter=e)},null,8,["modelValue"])):(0,a.Q3)("",!0),r.listComputed.length>0?((0,a.uX)(),(0,a.CE)("div",o,["users"==d.moderationType?((0,a.uX)(),(0,a.Wv)(I,{key:0},{default:(0,a.k6)((()=>[(0,a.bF)(h,{button:"",detail:"",onClick:t[6]||(t[6]=e=>r.itemEdit({user_id:0}))},{default:(0,a.k6)((()=>[(0,a.bF)(g,{src:n.addOutline,slot:"start"},null,8,["src"]),(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.eW)("Добавить нового пользователя")])),_:1})])),_:1}),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.listComputed,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.item_id},[(0,a.bF)(h,{button:"",detail:"",onClick:e=>r.itemEdit(t),lines:"none"},{default:(0,a.k6)((()=>[(0,a.bF)(y,{slot:"start"},{default:(0,a.k6)((()=>[t.user_avatar_name?((0,a.uX)(),(0,a.Wv)(f,{key:0,src:`${e.$heap.state.settings.app.backendUrl}img/avatar/${t.user_avatar_name}.png`},null,8,["src"])):(0,a.Q3)("",!0)])),_:2},1024),(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(t.item_name),1)])),_:2},1024),(0,a.bF)(k,{slot:"end"},{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(t.date_dmy),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,a.bF)(h,null,{default:(0,a.k6)((()=>[(0,a.bF)(v,{color:"primary"},{default:(0,a.k6)((()=>[(0,a.bF)(g,{src:n.callOutline},null,8,["src"]),(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.Lk)("a",{href:`tel:${t.user_phone}`},(0,s.v_)(t.user_phone),9,l)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))])),_:1})):((0,a.uX)(),(0,a.Wv)(I,{key:1},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.listComputed,(t=>((0,a.uX)(),(0,a.Wv)(h,{key:t.item_id,button:"",detail:"",onClick:e=>r.itemEdit(t)},{default:(0,a.k6)((()=>[t.image_hash?((0,a.uX)(),(0,a.Wv)(F,{key:0,slot:"start",class:(0,s.C4)(t.class)},{default:(0,a.k6)((()=>[(0,a.bF)(f,{src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1032,["class"])):(0,a.Q3)("",!0),(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(t.item_name),1)])),_:2},1024),(0,a.bF)(k,{slot:"end"},{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(t.date_time),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}))])):1==d.is_loading?((0,a.uX)(),(0,a.Wv)(I,{key:2},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)([1,2,3],(e=>(0,a.bF)(h,{key:e,button:"",detail:""},{default:(0,a.k6)((()=>[(0,a.bF)(F,{slot:"start",style:{"background-color":"lightgray"}}),(0,a.bF)(T,{animated:""})])),_:2},1024))),64))])),_:1})):((0,a.uX)(),(0,a.Wv)(C,{key:3,color:"light"},{default:(0,a.k6)((()=>[(0,a.bF)($,null,{default:(0,a.k6)((()=>[(0,a.eW)(" Ничего не найдено ")])),_:1})])),_:1})),d.is_items_left?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(h,{key:4,lines:"none"})),(0,a.bF)(w,{onIonInfinite:t[7]||(t[7]=e=>r.listLoadMore(e)),id:"moderation-infinite-scroll"},{default:(0,a.k6)((()=>[(0,a.bF)(W,{"loading-spinner":"bubbles","loading-text":"Загрузка"})])),_:1})])])),_:1})}var d=i(5654),r=i(2311),u=i.n(r),m=i(9119),_=i(5480),c={components:{IonInfiniteScroll:d.Ax,IonInfiniteScrollContent:d.Hp,IonItem:d.uz,IonLabel:d.he,IonList:d.nf,IonSegmentButton:d.eP,IonSegment:d.Gp,IonImg:d.KW,IonThumbnail:d.Zx,IonText:d.IO,IonSkeletonText:d.ds,IonCard:d.b_,IonCardContent:d.I9,IonSearchbar:d.S1,IonSelect:d.Nm,IonSelectOption:d.Ip,IonChip:d.ZB,IonAvatar:d.mC,IonIcon:d.iq},setup(){return{addOutline:_.EKF,callOutline:_.bNN}},data(){return{items:[],item_type:"disabled",filter:"",is_loading:0,is_items_left:1,moderationType:localStorage.listModerationLastType||"images",holders:{store:"Поставщик",courier:"Курьер",product:"Товар",order:"Заказ",product_group_list:"Категория товара",location_group_list:"Категория местоп.",store_group_list:"Категория поставщ.",user_group_list:"Категория пользователя"}}},computed:{listComputed(){for(let t of this.items){var e;t.image_hash=t.image_hash||t.courier_photo_image_hash,t.item_id=t.image_id||t.store_id||t.courier_id||t.product_id,t.item_name=this.holders[t.image_holder]||(null!==(e=t.store_name)&&void 0!==e?e:t.store_name_new)||t.user_name||t.product_name,t.date_time=this.toLocDateTime(t.updated_at),t.date_dmy=this.toDmy(t.updated_at),t.class=t.deleted_at?"deleted":""}return this.items}},methods:{async listLoadMore(e){this.is_items_left&&await this.listLoad(),e.target.complete()},async listReload(){this.is_items_left=1,this.items=[],this.listLoad()},async listLoad(){let e={is_disabled:"disabled"==this.item_type?1:0,is_active:"active"==this.item_type?1:0,is_deleted:"deleted"==this.item_type?1:0,name_query:this.filter,offset:this.items.length,limit:15};try{let t;if(this.is_loading=1,"images"==this.moderationType)e.order="updated_at",t=await u().post(`${this.$heap.state.hostname}Image/listGet`,e);else if("products"==this.moderationType){e.name_query_fields="product_name,product_description,product_barcode,product_code",e.reverse="validity";const i=await u().post(`${this.$heap.state.hostname}Product/listGet`,e);t=i.product_list}else"stores"==this.moderationType?(e.name_query_fields="store_name,store_description",e.reverse="validity",t=await u().post(`${this.$heap.state.hostname}Store/listGet`,e)):"couriers"==this.moderationType?(e.name_query_fields="courier_vehicle,user_phone,user_name",e.order="courier_list.updated_at",t=await u().post(`${this.$heap.state.hostname}Courier/listGet`,e)):"users"==this.moderationType&&(e.name_query_fields="user_phone,user_name",e.order="signed_in_at",t=await u().post(`${this.$heap.state.hostname}User/listGet`,e));this.is_loading=0,this.items=this.items.concat(t),t.length<e.limit&&(this.is_items_left=0)}catch(t){}},listTypeChanged(e){localStorage.listModerationLastType=e.target.value,this.items=[],this.is_items_left=1,this.listLoad()},listFilter(){clearTimeout(this.clock),this.clock=setTimeout((()=>{this.listReload()}),300)},toLocDate(e){const t=new Date(Date.parse(e)),i={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,i)},toLocDateTime(e){const t=new Date(Date.parse(e)),i={month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString(void 0,i)},toDmy(e){try{return e.split(" ")[0].split("-").reverse().join(".")}catch{return""}},itemEdit(e){"images"==this.moderationType&&this.imageEdit(e),"products"==this.moderationType&&this.$go("/catalog/product-edit-"+e.product_id),"stores"==this.moderationType&&this.$go("/catalog/store-edit-"+e.store_id),"couriers"==this.moderationType&&this.$go("/user/courier-dashboard?courier_id="+e.courier_id),"users"==this.moderationType&&this.$go("/user/user-management?user_id="+e.user_id)},async imageEdit(e){const t={delete:["Удалить","danger"],postpone:["Потом","primary"],enable:["Ок","success"]},i=await d.OZ.create({component:m.A,componentProps:{image_hash:e.image_hash,actions:t},initialBreakpoint:.75,breakpoints:[.75,1]});this.$topic.on("dismissModal",(()=>{i.dismiss()})),i.present();const a=await i.onDidDismiss();"delete"==a.role&&await this.imageDelete(e),"enable"==a.role&&await this.imageEnable(e),"postpone"==a.role&&await this.imagePostpone(e),this.listReload()},async imageEnable(e){await u().post(`${this.$heap.state.hostname}Image/itemDisable`,{image_id:e.image_id,is_disabled:0})},async imagePostpone(e){await u().post(`${this.$heap.state.hostname}Image/itemDisable`,{image_id:e.image_id,is_disabled:0}),await u().post(`${this.$heap.state.hostname}Image/itemDisable`,{image_id:e.image_id,is_disabled:1})},async imageDelete(e){await u().post(`${this.$heap.state.hostname}Image/itemDelete`,{image_id:e.image_id})}},mounted(){"users"==this.moderationType&&(this.item_type="active"),this.listLoad()},watch:{filter:function(){this.listFilter()}}},h=i(6262);const p=(0,h.A)(c,[["render",n],["__scopeId","data-v-03c73e5f"]]);var g=p}}]);
//# sourceMappingURL=5975.e05fd70e.js.map