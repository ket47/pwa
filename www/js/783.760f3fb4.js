"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[783],{7208:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(6252),l=a(3577);const n={class:"ion-page"};function s(e,t,a,s,o,r){const u=(0,i.up)("ion-title"),d=(0,i.up)("ion-icon"),m=(0,i.up)("ion-toolbar"),c=(0,i.up)("ion-header"),h=(0,i.up)("ion-searchbar"),p=(0,i.up)("ion-skeleton-text"),_=(0,i.up)("ion-item"),g=(0,i.up)("ion-list"),y=(0,i.up)("ion-img"),w=(0,i.up)("ion-avatar"),f=(0,i.up)("ion-content");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{color:"secondary"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Выбрать "+(0,l.zw)(o.itemTypeName),1)])),_:1}),(0,i.Wm)(d,{icon:s.closeOutline,onClick:t[0]||(t[0]=e=>{r.closeModal()}),slot:"end",size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>{var a;return["acc"!=o.itemTypeLabel?((0,i.wg)(),(0,i.j4)(h,{key:0,modelValue:o.query,"onUpdate:modelValue":t[1]||(t[1]=e=>o.query=e),placeholder:"поиск",debounce:100,onIonInput:t[2]||(t[2]=e=>r.listGet())},null,8,["modelValue"])):(0,i.kq)("",!0),o.itemList?null!==(a=o.itemList)&&void 0!==a&&a.length?((0,i.wg)(),(0,i.j4)(g,{key:2},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.itemList,(t=>((0,i.wg)(),(0,i.j4)(_,{key:t.id,button:"",detail:"",onClick:e=>r.itemPick(t)},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{slot:"start"},{default:(0,i.w5)((()=>[t.image_hash?((0,i.wg)(),(0,i.j4)(y,{key:0,src:`${e.$heap.state.hostname}image/get.php/${t.image_hash}.50.50.webp`},null,8,["src"])):(0,i.kq)("",!0)])),_:2},1024),(0,i.Uk)(" "+(0,l.zw)(t.name),1)])),_:2},1032,["onClick"])))),128))])),_:1})):((0,i.wg)(),(0,i.j4)(g,{key:3},{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Ничего не найдено ")])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(g,{key:1},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([0,1,2,3,4,5,6,7,8,9],(e=>(0,i.Wm)(_,{key:e,button:"",detail:""},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{style:{height:"35px",width:"40px"},animated:""}),(0,i.Wm)(p,{style:{width:"100%"},animated:""})])),_:2},1024))),64))])),_:1}))]})),_:1})])}var o=a(8903),r=a(6964),u=a(9755),d=a.n(u),m={props:["itemType"],components:{IonContent:r.W2,IonHeader:r.Gu,IonToolbar:r.sr,IonTitle:r.wd,IonIcon:r.gu,IonImg:r.Xz,IonList:r.q_,IonItem:r.Ie,IonSearchbar:r.VI,IonSkeletonText:r.CK,IonAvatar:r.BJ},setup(){return{closeOutline:o.fID}},data(){const e=this.itemType?this.itemType:"order";return{query:null,itemList:null,itemTypeLabel:e,itemTypeName:""}},mounted(){this.listGet()},methods:{async listGet(){"order"==this.itemTypeLabel?(this.itemTypeName="Заказ",this.ordersGet()):"store"==this.itemTypeLabel?(this.itemTypeName="Продавец",this.storesGet()):"courier"==this.itemTypeLabel?(this.itemTypeName="Курьер",this.couriersGet()):"acc"==this.itemTypeLabel?(this.itemTypeName="Счет",this.accountsGet()):this.$flash("unknown item type "+this.itemTypeLabel)},async storesGet(){const e={name_query:this.query,name_query_fields:"store_name",limit:10};try{let t=await d().post(`${this.$heap.state.hostname}Store/listGet`,e);this.itemList=t.map((e=>(e.name=`продавец ${e.store_name}`,e.id=e.store_id,e)))}catch{}},async couriersGet(){const e={name_query:this.query,name_query_fields:"user_name,user_phone",limit:10};try{let t=await d().post(`${this.$heap.state.hostname}Courier/listGet`,e);this.itemList=t.map((e=>(e.name=`курьер ${e.user_name} ${e.user_phone}`,e.id=e.courier_id,e.image_hash=e.courier_photo_image_hash,e)))}catch{}},async ordersGet(){const e={name_query:this.query,name_query_fields:"store_name,order_id,user_name",limit:10};try{let t=await d().post(`${this.$heap.state.hostname}Order/listGet`,e);this.itemList=t.map((e=>(e.name=`заказ#${e.order_id} ${e.store_name} > ${e.user_name}`,e.id=e.order_id,e)))}catch{}},async accountsGet(){const e={group_table:"transaction_account_list"};try{let t=await d().post(`${this.$heap.state.hostname}Admin/GroupManager/listGet`,e);this.itemList=t.map((e=>(e.name=`${e.group_name}`,e.type=e.group_type,e)))}catch{}},itemPick(e){r.Fy.dismiss(e)},closeModal(){r.Fy.dismiss()}}},c=a(3744);const h=(0,c.Z)(m,[["render",s]]);var p=h},6783:function(e,t,a){a.d(t,{Z:function(){return f}});var i=a(6252),l=a(3577);const n={slot:"end",style:{display:"grid","grid-template-columns":"120px 100px"}},s={slot:"end",style:{display:"grid","grid-template-columns":"120px 100px"}},o={slot:"end",style:{display:"grid","grid-template-columns":"120px 100px"}},r=["onClick"];function u(e,t,a,u,d,m){const c=(0,i.up)("ion-title"),h=(0,i.up)("ion-text"),p=(0,i.up)("ion-item"),_=(0,i.up)("ion-list"),g=(0,i.up)("ion-icon"),y=(0,i.up)("ion-input"),w=(0,i.up)("ion-accordion"),f=(0,i.up)("ion-chip"),k=(0,i.up)("ion-label"),v=(0,i.up)("ion-accordion-group"),W=(0,i.up)("ion-searchbar"),$=(0,i.up)("ion-skeleton-text"),I=(0,i.up)("ion-infinite-scroll-content"),T=(0,i.up)("ion-infinite-scroll");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Баланс")])),_:1}),d.balance>0?((0,i.wg)(),(0,i.j4)(h,{key:0,slot:"end",color:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(d.balance)+(0,l.zw)(e.$heap.state.currencySign),1)])),_:1})):((0,i.wg)(),(0,i.j4)(h,{key:1,slot:"end"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(d.balance)+(0,l.zw)(e.$heap.state.currencySign),1)])),_:1}))])),_:1})])),_:1}),(0,i.Wm)(v,{value:d.settingsType},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{value:"period"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{slot:"header"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{icon:u.calendarOutline,slot:"start"},null,8,["icon"]),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Период")])),_:1})])),_:1}),(0,i.Wm)(_,{slot:"content"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Начальная дата")])),_:1}),(0,i._)("div",n,[(0,i.Wm)(y,{type:"date",modelValue:d.start_at,"onUpdate:modelValue":t[0]||(t[0]=e=>d.start_at=e),onIonChange:t[1]||(t[1]=e=>m.listGet())},null,8,["modelValue"]),d.meta.sum_start?((0,i.wg)(),(0,i.j4)(y,{key:0,type:"text",style:{"text-align":"right"},color:"medium",value:`${d.meta.sum_start}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,i.kq)("",!0)])])),_:1}),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Обороты")])),_:1}),(0,i._)("div",s,[d.meta.sum_debit?((0,i.wg)(),(0,i.j4)(y,{key:0,type:"text",style:{"text-align":"right"},color:"medium",value:`+${d.meta.sum_debit}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,i.kq)("",!0),d.meta.sum_credit?((0,i.wg)(),(0,i.j4)(y,{key:1,type:"text",style:{"text-align":"right"},color:"medium",value:`-${d.meta.sum_credit}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,i.kq)("",!0)])])),_:1}),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Конечная дата")])),_:1}),(0,i._)("div",o,[(0,i.Wm)(y,{type:"date",modelValue:d.finish_at,"onUpdate:modelValue":t[2]||(t[2]=e=>d.finish_at=e),onIonChange:t[3]||(t[3]=e=>m.listGet())},null,8,["modelValue"]),d.meta.sum_finish?((0,i.wg)(),(0,i.j4)(y,{key:0,type:"text",style:{"text-align":"right"},color:"medium",value:`${d.meta.sum_finish}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,i.kq)("",!0)])])),_:1})])),_:1})])),_:1}),(0,i.Wm)(w,{value:"tags"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{slot:"header"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{icon:u.pricetagOutline,slot:"start"},null,8,["icon"]),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Фильтр по тегам")])),_:1})])),_:1}),(0,i.Wm)(_,{slot:"content"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{lines:"none"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.tagDict,((e,t)=>((0,i.wg)(),(0,i.j4)(f,{key:t,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)("#"+(0,l.zw)(e)+" ",1),(0,i.Wm)(g,{src:u.closeCircle,onClick:e=>m.itemTagRemove(t)},null,8,["src","onClick"])])),_:2},1024)))),128)),m.is_admin?((0,i.wg)(),(0,i.j4)(f,{key:0,onClick:t[4]||(t[4]=e=>m.itemTagCreate()),color:"medium"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{src:u.addOutline},null,8,["src"]),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить #тег")])),_:1})])),_:1})):(0,i.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["value"]),(0,i.Wm)(W,{modelValue:d.searchQuery,"onUpdate:modelValue":t[5]||(t[5]=e=>d.searchQuery=e),placeholder:"Поиск по сумме или описанию",debounce:"300",onIonInput:t[6]||(t[6]=e=>m.listGet())},null,8,["modelValue"]),null==d.ledger?((0,i.wg)(),(0,i.j4)(_,{key:0},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([1,2,3],(e=>(0,i.Wm)(p,{key:e},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{slot:"start"},{default:(0,i.w5)((()=>[(0,i.Wm)($,{animated:"",style:{width:"50px"}})])),_:1}),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)($,{animated:"",style:{width:"100%"}})])),_:1}),(0,i.Wm)(k,{slot:"end",color:"success"},{default:(0,i.w5)((()=>[(0,i.Wm)($,{animated:"",style:{width:"50px"}})])),_:1})])),_:2},1024))),64))])),_:1})):d.ledger.length>0?((0,i.wg)(),(0,i.j4)(_,{key:1},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.ledgerCalc,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.trans_id},[(0,i.Wm)(p,{detail:m.is_admin,lines:"none",onClick:t=>m.itemClick(e.trans_id)},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{slot:"start"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.date),1)])),_:2},1024),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.trans_description),1)])),_:2},1024),e.amount_sign*e.trans_amount>0?((0,i.wg)(),(0,i.j4)(k,{key:0,slot:"end",color:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.trans_amount),1)])),_:2},1024)):e.amount_sign*e.trans_amount<0?((0,i.wg)(),(0,i.j4)(k,{key:1,slot:"end",color:"danger"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.trans_amount),1)])),_:2},1024)):((0,i.wg)(),(0,i.j4)(k,{key:2,slot:"end",color:"medium"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.trans_amount),1)])),_:2},1024))])),_:2},1032,["detail","onClick"]),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.tag_list,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"tag",key:t,onClick:t=>m.itemTagAdd(e)},"#"+(0,l.zw)(e[1]),9,r)))),128))])),_:2},1024)])),_:2},1024)])))),128))])),_:1})):((0,i.wg)(),(0,i.j4)(_,{key:2},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Нет операций в данном периоде ")])),_:1})])),_:1})),(0,i.Wm)(T,{onIonInfinite:t[7]||(t[7]=e=>m.listLoadMore(e)),id:"moderation-infinite-scroll"},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{"loading-spinner":"bubbles","loading-text":"Загрузка..."})])),_:1})])}a(3948);var d=a(6964),m=a(8903),c=a(9755),h=a.n(c),p=a(351),_=a(7208),g={components:{IonIcon:d.gu,IonTitle:d.wd,IonLabel:d.Q$,IonItem:d.Ie,IonInput:d.pK,IonList:d.q_,IonAccordion:d.We,IonAccordionGroup:d.eh,IonText:d.yW,IonSkeletonText:d.CK,IonSearchbar:d.VI,IonChip:d.hM,IonInfiniteScroll:d.ju,IonInfiniteScrollContent:d.MB},props:["permanentTag"],setup(){return{calendarOutline:m.rom,addOutline:m.s6O,closeCircle:m.XZx,pricetagOutline:m.TuG}},data(){console.log(this.query);const e=new Date,t=new Date(Date.parse(`${e.getFullYear()}-${e.getMonth()+1}-1`));return{balance:"-",start_at:t.toISOString().slice(0,10),finish_at:e.toISOString().slice(0,10),searchQuery:"",tagQuery:"",tagDict:null,ledger:null,meta:{},today:e,settingsType:null,can_reload_at:0}},computed:{ledgerCalc(){if(null==this.ledger)return null;let e=[];for(let n of this.ledger){var t,a,i,l;n.date=this.toLocDate(n.trans_date),n.tag_list=null===(t=n.tags)||void 0===t||null===(a=t.substring(1))||void 0===a||null===(i=a.toLowerCase())||void 0===i||null===(l=i.split("|"))||void 0===l?void 0:l.map((e=>e.split("#"))),e.push(n)}return e},is_admin(){return p.Z.isAdmin()}},watch:{query:function(){this.listGet()}},methods:{async listLoadMore(e){await this.listGet("append"),e.target.complete()},async listGet(e){const t=Date.now();if(e||!(this.can_reload_at>t)){this.can_reload_at=t+1e3;try{var a,i,l;const t=null===(a=Object.keys(null!==(i=this.tagDict)&&void 0!==i?i:{}))||void 0===a?void 0:a.join(" "),r={start_at:this.start_at,finish_at:this.finish_at,tagQuery:`${t} ${null!==(l=this.permanentTag)&&void 0!==l?l:""}`,searchQuery:this.searchQuery,limit:10};var n,s;if("append"==e)r.offset=null!==(n=null===(s=this.ledger)||void 0===s?void 0:s.length)&&void 0!==n?n:0,r.limit=10;const u=await h().post(`${this.$heap.state.hostname}Transaction/listGet`,r);var o;if("append"==e)null!==(o=this.ledger)&&void 0!==o||(this.ledger=[]),u.ledger=this.ledger.concat(u.ledger);this.ledger=u.ledger,this.meta=u.meta,this.finish_at==this.today.toISOString().slice(0,10)&&(this.balance=u.meta.sum_finish)}catch(d){var r,u;const e=null===d||void 0===d||null===(r=d.responseJSON)||void 0===r||null===(u=r.messages)||void 0===u?void 0:u.error;switch(e){case"large_interval":this.$flash("Период должен быть не больше 3 месяцев");break;default:this.$flash("Ошибка получения выписки");break}return this.ledger=[],this.balance=0,!1}}},toLocDate(e){const t=new Date(Date.parse(e)),a={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,a)},itemClick(e){p.Z.isAdmin()&&this.$go(`/admin/transaction-edit-${e}`)},async itemTagPick(e){var t,a,i,l;const n=await d.Fy.create({component:_.Z,componentProps:{itemType:e},initialBreakpoint:.75,breakpoints:[.75,1],canDissmiss:!0});n.present(),this.$topic.on("dismissModal",(()=>{n.dismiss()}));const s=await n.onDidDismiss();s.data&&(null!==(t=s.data.order_id)&&void 0!==t&&t&&this.itemTagAdd([`order:${s.data.order_id}`,`заказ ${s.data.order_id}`]),null!==(a=s.data.store_id)&&void 0!==a&&a&&this.itemTagAdd([`store:${s.data.store_id}`,`продавец ${s.data.store_name}`]),null!==(i=s.data.courier_id)&&void 0!==i&&i&&this.itemTagAdd([`courier:${s.data.courier_id}`,`курьер ${s.data.courier_name}`]),null!==(l=s.data.type)&&void 0!==l&&l&&this.itemTagAdd([`acc::${s.data.type}`,`счет ${s.data.name}`]))},async itemTagCreate(){const e=await d.BO.create({header:"Тип тега",buttons:[{text:"Заказ",role:"destructive",data:"order"},{text:"Продавец",role:"destructive",data:"store"},{text:"Курьер",role:"destructive",data:"courier"},{text:"Счет",role:"destructive",data:"acc"}]});await e.present();const t=await e.onDidDismiss();null!==t&&void 0!==t&&t.data&&this.itemTagPick(null===t||void 0===t?void 0:t.data)},itemTagAdd(e){var t;let a=null!==(t=this.tagDict)&&void 0!==t?t:{};a[e[0]]=e[1],this.tagDict=a,this.listGet(),this.settingsType="tags"},itemTagRemove(e){var t;let a=null!==(t=this.tagDict)&&void 0!==t?t:{};a[e]&&delete a[e];const i=Object.keys(a).length;this.tagDict=i?a:null,this.listGet(),this.settingsType="tags"}},mounted(){this.listGet()}},y=a(3744);const w=(0,y.Z)(g,[["render",u]]);var f=w}}]);
//# sourceMappingURL=783.760f3fb4.js.map