"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[1774],{1774:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var o=i(641),a=i(33);const s={key:0};function n(e,t,i,n,l,d){const r=(0,o.g2)("ion-searchbar"),c=(0,o.g2)("ion-input"),u=(0,o.g2)("ion-button"),m=(0,o.g2)("ion-item"),p=(0,o.g2)("ion-content"),h=(0,o.g2)("ion-popover"),_=(0,o.g2)("ion-img"),g=(0,o.g2)("ion-thumbnail"),b=(0,o.g2)("ion-text"),f=(0,o.g2)("ion-icon"),k=(0,o.g2)("ion-checkbox"),y=(0,o.g2)("ion-chip"),I=(0,o.g2)("ion-list"),v=(0,o.g2)("ion-skeleton-text"),C=(0,o.g2)("ion-card-content"),F=(0,o.g2)("ion-card"),$=(0,o.g2)("ion-infinite-scroll-content"),w=(0,o.g2)("ion-infinite-scroll"),D=(0,o.g2)("base-layout");return(0,o.uX)(),(0,o.Wv)(D,{pageDefaultBackLink:`/catalog/store-edit-${l.storeId}`,"page-title":"Управление товарами"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.bF)(r,{placeholder:"Фильтр",modelValue:l.filter,"onUpdate:modelValue":t[0]||(t[0]=e=>l.filter=e)},null,8,["modelValue"]),(0,o.bF)(h,{"is-open":l.editor_opened,onDidDismiss:t[2]||(t[2]=e=>l.editor_opened=0)},{default:(0,o.k6)((()=>[(0,o.bF)(p,{style:{}},{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(c,{placeholder:l.editor_placeholder,modelValue:l.editor_value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.editor_value=e),style:{"--border-width":"1px","--border-radius":"10px"}},null,8,["placeholder","modelValue"]),(0,o.bF)(u,{slot:"end"},{default:(0,o.k6)((()=>[(0,o.eW)("OK")])),_:1})])),_:1})])),_:1})])),_:1},8,["is-open"]),d.listComputed.length>0?((0,o.uX)(),(0,o.Wv)(I,{key:0},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(d.listComputed,(t=>((0,o.uX)(),(0,o.CE)("div",{key:t.item_id},[(0,o.bF)(m,{lines:"none",onClick:e=>d.itemEdit(t),button:"",detail:""},{default:(0,o.k6)((()=>[(0,o.bF)(g,{slot:"start",class:(0,a.C4)(t.class),style:{"border-radius":"10px"}},{default:(0,o.k6)((()=>[(0,o.bF)(_,{src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1032,["class"]),(0,o.bF)(b,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(t.item_name)+" ",1),1==t.is_counted&&1*t.product_quantity==0?((0,o.uX)(),(0,o.CE)("span",s," (нет в наличии)")):(0,o.Q3)("",!0)])),_:2},1024)])),_:2},1032,["onClick"]),(0,o.bF)(m,{lines:"full"},{default:(0,o.k6)((()=>[(0,o.bF)(y,{color:"medium"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{src:n.calculatorOutline},null,8,["src"]),(0,o.bF)(k,{"label-placement":"start",checked:1==t.is_counted,onIonChange:e=>d.itemUpdate(t.product_id,"is_counted",e.target.checked?1:0)},{default:(0,o.k6)((()=>[(0,o.eW)("учет")])),_:2},1032,["checked","onIonChange"]),(0,o.eW)("  ")])),_:2},1024),0==t.is_counted?((0,o.uX)(),(0,o.Wv)(y,{key:0,color:"medium"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{src:n.infiniteOutline},null,8,["src"]),(0,o.eW)("   ")])),_:1})):((0,o.uX)(),(0,o.Wv)(y,{key:1,color:t.product_quantity>0?"success":"danger",onClick:e=>d.itemPrompt(t,"product_quantity","введите остаток")},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(t.product_quantity||0)+(0,a.v_)(t.product_unit),1)])),_:2},1032,["color","onClick"])),(0,o.bF)(y,{color:"primary",onClick:e=>d.itemPrompt(t,"product_price","введите цену")},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(t.product_price)+(0,a.v_)(e.$heap.state.currencySign),1)])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])),_:1})):1==l.is_loading?((0,o.uX)(),(0,o.Wv)(I,{key:1},{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)([1,2,3],(e=>(0,o.bF)(m,{key:e,button:"",detail:""},{default:(0,o.k6)((()=>[(0,o.bF)(g,{slot:"start",style:{"background-color":"lightgray"}}),(0,o.bF)(v,{animated:""})])),_:2},1024))),64))])),_:1})):((0,o.uX)(),(0,o.Wv)(F,{key:2,color:"light"},{default:(0,o.k6)((()=>[(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)(" Ничего не найдено ")])),_:1})])),_:1})),(0,o.bF)(w,{onIonInfinite:t[3]||(t[3]=e=>d.listLoadMore(e)),id:"moderation-infinite-scroll"},{default:(0,o.k6)((()=>[(0,o.bF)($,{"loading-spinner":"bubbles","loading-text":"Loading more data..."})])),_:1})])])),_:1},8,["pageDefaultBackLink"])}i(3110);var l=i(972),d=i(2311),r=i.n(d),c=i(9119),u=i(5480),m={components:{IonInfiniteScroll:l.Ax,IonInfiniteScrollContent:l.Hp,IonItem:l.uz,IonList:l.nf,IonImg:l.KW,IonThumbnail:l.Zx,IonText:l.IO,IonSkeletonText:l.ds,IonCard:l.b_,IonCardContent:l.I9,IonSearchbar:l.S1,IonChip:l.ZB,IonCheckbox:l.eY,IonIcon:l.iq,IonPopover:l.CF,IonContent:l.W9,IonInput:l.$w,IonButton:l.Jm},setup(){return{infiniteOutline:u.p4N,calculatorOutline:u.N0h}},data(){return{storeId:this.$route.params.id,items:[],item_type:"active",filter:"",is_loading:0,moderationType:"products",holders:{store:"Поставщик",courier:"Курьер",product:"Товар",order:"Заказ",product_group_list:"Категория товара",location_group_list:"Категория местоп.",store_group_list:"Категория поставщ.",user_group_list:"Категория пользователя"},editor_opened:0,editor_value:null,editor_placeholder:""}},computed:{listComputed(){for(let t of this.items){var e;t.image_hash=t.image_hash||t.courier_photo_image_hash,t.item_id=t.image_id||t.store_id||t.courier_id||t.product_id,t.item_name=this.holders[t.image_holder]||(null!==(e=t.store_name)&&void 0!==e?e:t.store_name_new)||t.user_name||t.product_name,t.date_time=this.toLocDateTime(t.updated_at),t.class="",t.class+=t.deleted_at?"deleted ":"",t.class+=1==t.is_disabled?"disabled ":"",t.class+=1==t.is_counted&&0==t.product_quantity?"absent ":""}return this.items}},methods:{async listLoadMore(e){await this.listLoad(),e.target.complete()},async listReload(){this.items=[],this.listLoad()},async listLoad(){let e={is_disabled:"disabled"==this.item_type?1:0,is_active:"active"==this.item_type?1:0,is_deleted:"deleted"==this.item_type?1:0,name_query:this.filter,offset:this.items.length,limit:15};try{let t;if(this.is_loading=1,"products"==this.moderationType){e.name_query_fields="product_name",e.reverse="updated_at",e.store_id=this.storeId;const i=await r().post(`${this.$heap.state.hostname}Product/listGet`,e);t=i.product_list}this.is_loading=0,this.items=this.items.concat(t)}catch(t){}},listTypeChanged(e){e.target.value;this.items=[],this.listLoad()},listFilter(){clearTimeout(this.clock),this.clock=setTimeout((()=>{this.listReload()}),300)},toLocDate(e){const t=new Date(Date.parse(e)),i={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,i)},toLocDateTime(e){const t=new Date(Date.parse(e)),i={month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString(void 0,i)},async itemPrompt(e,t,i){const o=e[t],a=await l.TN.create({header:i,buttons:[{text:"Отмена",role:"cancel"},{text:"Ок",role:"confirm"}],inputs:[{type:"input",name:"comment",placeholder:i,value:o}]});await a.present();const{data:s,role:n}=await a.onDidDismiss();"cancel"!=n&&this.itemUpdate(e.product_id,t,s.values.comment)},async itemUpdate(e,t,i){try{const o={product_id:e,[t]:i};await r().post(`${this.$heap.state.hostname}Product/itemUpdate`,JSON.stringify(o)),this.itemAlter(e,t,i),this.$flash("💾 Сохранено")}catch(s){var o,a;const e=null===s||void 0===s||null===(o=s.responseJSON)||void 0===o||null===(a=o.messages)||void 0===a?void 0:a.error;if("idle"==e)return;this.$flash("Не сохранено")}},itemAlter(e,t,i){for(let o in this.items)this.items[o].product_id==e&&(this.items[o][t]=i)},itemEdit(e){"images"==this.moderationType&&this.imageEdit(e),"products"==this.moderationType&&this.$go("/catalog/product-edit-"+e.product_id),"stores"==this.moderationType&&this.$go("/catalog/store-edit-"+e.store_id),"couriers"==this.moderationType&&this.$go("/user/courier-dashboard?courier_id="+e.courier_id)},async imageEdit(e){const t={delete:["Удалить","danger"],postpone:["Потом","primary"],enable:["Ок","success"]},i=await l.OZ.create({component:c.A,componentProps:{image_hash:e.image_hash,actions:t},initialBreakpoint:.75,breakpoints:[.75,1]});this.$topic.on("dismissModal",(()=>{i.dismiss()})),i.present();const o=await i.onDidDismiss();"delete"==o.role&&await this.imageDelete(e),"enable"==o.role&&await this.imageEnable(e),"postpone"==o.role&&await this.imagePostpone(e),this.listReload()},async imageEnable(e){await r().post(`${this.$heap.state.hostname}Image/itemDisable`,{image_id:e.image_id,is_disabled:0})},async imagePostpone(e){await r().post(`${this.$heap.state.hostname}Image/itemDisable`,{image_id:e.image_id,is_disabled:0}),await r().post(`${this.$heap.state.hostname}Image/itemDisable`,{image_id:e.image_id,is_disabled:1})},async imageDelete(e){await r().post(`${this.$heap.state.hostname}Image/itemDelete`,{image_id:e.image_id})}},mounted(){this.listLoad()},watch:{filter:function(){this.listFilter()}}},p=i(6262);const h=(0,p.A)(m,[["render",n],["__scopeId","data-v-47fa0904"]]);var _=h}}]);
//# sourceMappingURL=1774.0007c538.js.map