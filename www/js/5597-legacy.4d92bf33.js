"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[5597],{5597:function(t,e,n){n.r(e),n.d(e,{default:function(){return $}});var r=n(6252),o=n(3577),u=(0,r.Uk)(" Получите скидку "),i=(0,r._)("p",null,"Новый пользователь, зарегистриванный по вашему приглашению, получит 5 скидок по 200руб.",-1),l=(0,r._)("p",null,"В качестве благодарности, мы начислим вам 5 скидок по 100руб.",-1),a=(0,r.Uk)("подробнее"),c=(0,r._)("p",{slot:"content",style:{padding:"10px"}}," После регистрации нового клиента по вашему приглашению, мы начислим вам 5 скидок по 100руб. Эти скидки будут активироваться по мере того, как приглашённый вами друг, будет использовать свои скидки. ",-1),s=(0,r.Uk)("Пригласить друга"),d=(0,r.Uk)(" Доступные "),p=(0,r.Uk)(" Неактивные "),f={key:0},m=(0,r.Uk)("просрочена"),w={key:1},_=(0,r.Uk)("не активирована"),h=(0,r.Uk)(" Скидок нет, но вы можете получить их пригласив друга ");function v(t,e,n,v,k,g){var W=(0,r.up)("ion-card-title"),y=(0,r.up)("ion-card-header"),x=(0,r.up)("ion-text"),I=(0,r.up)("ion-item"),L=(0,r.up)("ion-accordion"),b=(0,r.up)("ion-accordion-group"),C=(0,r.up)("ion-button"),D=(0,r.up)("ion-card-content"),$=(0,r.up)("ion-card"),T=(0,r.up)("ion-title"),U=(0,r.up)("ion-segment-button"),z=(0,r.up)("ion-segment"),Z=(0,r.up)("ion-icon"),q=(0,r.up)("ion-list"),G=(0,r.up)("ion-skeleton-text"),O=(0,r.up)("base-layout");return(0,r.wg)(),(0,r.j4)(O,{pageTitle:"Ваши скидки",pageDefaultBackLink:"/user"},{default:(0,r.w5)((function(){var n;return[(0,r.Wm)($,{color:"light"},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(W,null,{default:(0,r.w5)((function(){return[u]})),_:1})]})),_:1}),(0,r.Wm)(D,null,{default:(0,r.w5)((function(){return[i,l,(0,r.Wm)(b,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(L,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(I,{slot:"header",color:"light"},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{slot:"end",color:"medium"},{default:(0,r.w5)((function(){return[a]})),_:1})]})),_:1}),c]})),_:1})]})),_:1}),(0,r._)("p",null,[(0,r.Wm)(C,{onClick:e[0]||(e[0]=function(t){return g.shareInvitation()}),expand:"full"},{default:(0,r.w5)((function(){return[s]})),_:1})])]})),_:1})]})),_:1}),(0,r.Wm)(T),(0,r.Wm)(x),(0,r.Wm)(z,{"swipe-gesture":"true",modelValue:k.promoType,"onUpdate:modelValue":e[1]||(e[1]=function(t){return k.promoType=t}),onIonChange:e[2]||(e[2]=function(t){return g.listTypeChanged(t)})},{default:(0,r.w5)((function(){return[(0,r.Wm)(U,{value:"active"},{default:(0,r.w5)((function(){return[d]})),_:1}),(0,r.Wm)(U,{value:"inactive"},{default:(0,r.w5)((function(){return[p]})),_:1})]})),_:1},8,["modelValue"]),"active"==k.promoType?((0,r.wg)(),(0,r.j4)(q,{key:0},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.compPromoList,(function(e){return(0,r.wg)(),(0,r.iD)("div",{key:e.promo_id},[(0,r.Wm)(I,{lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(Z,{slot:"start",icon:v.giftOutline,color:"primary"},null,8,["icon"]),(0,r.Wm)(x,null,{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(e.promo_name),1)]})),_:2},1024),(0,r.Wm)(x,{slot:"end",color:"success"},{default:(0,r.w5)((function(){return[(0,r._)("b",null,(0,o.zw)(e.promo_value)+(0,o.zw)(t.$heap.state.currencySign),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(I,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(x,null,{default:(0,r.w5)((function(){return[(0,r.Uk)("действительна до: "+(0,o.zw)(e.exp_date_time),1)]})),_:2},1024)]})),_:2},1024)])})),128))]})),_:1})):(0,r.kq)("",!0),"inactive"==k.promoType?((0,r.wg)(),(0,r.j4)(q,{key:1},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.compPromoList,(function(n){return(0,r.wg)(),(0,r.iD)("div",{key:n.promo_id},[(0,r.Wm)(I,{lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(Z,{slot:"start",icon:v.giftOutline,color:"medium"},null,8,["icon"]),(0,r.Wm)(x,null,{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(n.promo_name)+" до "+(0,o.zw)(n.exp_date_time),1)]})),_:2},1024),(0,r.Wm)(x,{slot:"end"},{default:(0,r.w5)((function(){return[(0,r._)("b",null,(0,o.zw)(n.promo_value)+(0,o.zw)(t.$heap.state.currencySign),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(I,null,{default:(0,r.w5)((function(){return[1==n.is_expired?((0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(x,{color:"danger"},{default:(0,r.w5)((function(){return[m]})),_:1})])):1==n.is_disabled?((0,r.wg)(),(0,r.iD)("div",w,[(0,r.Wm)(x,{color:"warning",style:{cursor:"pointer"},onClick:e[3]||(e[3]=function(t){return g.helpNotActive()})},{default:(0,r.w5)((function(){return[_]})),_:1}),(0,r.Wm)(Z,{color:"warning",icon:v.helpCircle,onClick:e[4]||(e[4]=function(t){return g.helpNotActive()}),style:{cursor:"pointer"}},null,8,["icon"])])):(0,r.kq)("",!0),n.promo_order_id?((0,r.wg)(),(0,r.j4)(x,{key:2},{default:(0,r.w5)((function(){return[(0,r.Uk)("использована в заказе #"+(0,o.zw)(n.promo_order_id),1)]})),_:2},1024)):(0,r.kq)("",!0)]})),_:2},1024)])})),128))]})),_:1})):(0,r.kq)("",!0),null==k.promoList?((0,r.wg)(),(0,r.j4)(q,{key:2},{default:(0,r.w5)((function(){return[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)([1,2,3],(function(t){return(0,r._)("div",{key:t},[(0,r.Wm)(I,{lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(Z,{slot:"start",icon:v.giftOutline,color:"medium"},null,8,["icon"]),(0,r.Wm)(G,{style:{width:"70%"}}),(0,r.Wm)(G,{slot:"end",style:{width:"50px"}})]})),_:1}),(0,r.Wm)(I,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(G,{style:{width:"70%"}})]})),_:1})])})),64))]})),_:1})):(0,r.kq)("",!0),0===(null===(n=k.promoList)||void 0===n?void 0:n.length)?((0,r.wg)(),(0,r.j4)(q,{key:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(I,{lines:"none"},{default:(0,r.w5)((function(){return[h]})),_:1})]})),_:1})):(0,r.kq)("",!0)]})),_:1})}var k=n(6835),g=n(8534),W=n(8439),y=n(8292),x=n(8903),I=n(9755),L=n.n(I),b={components:{IonIcon:y.gu,IonTitle:y.wd,IonList:y.q_,IonItem:y.Ie,IonText:y.yW,IonSegment:y.cJ,IonSegmentButton:y.GO,IonCard:y.PM,IonCardHeader:y.Zi,IonCardTitle:y.Dq,IonCardContent:y.FN,IonButton:y.YG,IonSkeletonText:y.CK,IonAccordion:y.We,IonAccordionGroup:y.eh},setup(){return{giftOutline:x._$o,closeOutline:x.fID,banOutline:x.L6S,helpCircle:x.pvH}},data(){return{promoType:"active",promoList:null}},mounted(){this.listGet()},computed:{compPromoList(){var t=[];if(this.promoList){var e,n=(0,W.Z)(this.promoList);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.exp_date_time=this.toLocDate(r.expired_at),r.date_time=this.toLocDate(r.created_at),t.push(r)}}catch(o){n.e(o)}finally{n.f()}}return t}},methods:{listGet(){var t=this;return(0,g.Z)((0,k.Z)().mark((function e(){var n;return(0,k.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.promoList=[],n={user_id:t.$heap.state.user.user_id,type:t.promoType},e.next=5,L().post(`${t.$heap.state.hostname}Promo/listGet`,n);case 5:t.promoList=e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},listTypeChanged(t){var e=t.target.value;this.listGet(e)},toLocDate(t){var e=new Date(Date.parse(t)),n={month:"short",day:"numeric",year:"numeric"};return e.toLocaleDateString(void 0,n)},shareInvitation(){var t=this;return(0,g.Z)((0,k.Z)().mark((function e(){var n,r,o;return(0,k.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==(n=t.$heap.state.user)&&void 0!==n&&n.user_id){e.next=3;break}return t.$flash("Вы не авторизированы"),e.abrupt("return");case 3:if(e.prev=3,r=`${t.$heap.state.settings.app.frontendUrl}invitation.html?inviter_user_id=${t.$heap.state.user.user_id}`,!navigator.share){e.next=11;break}return o={title:t.$heap.state.settings.app_title,text:"Присоединяйтесь и получите 5 сертификатов по 200руб",url:r},e.next=9,navigator.share(o);case 9:e.next=14;break;case 11:return e.next=13,navigator.clipboard.writeText(r);case 13:t.$alert("Ссылка с приглашением скопирована. Теперь вы можете поделиться ей с друзьями в социальных сетях или мессенджерах.","Готово");case 14:e.next=18;break;case 16:e.prev=16,e.t0=e["catch"](3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})))()},helpNotActive(){this.$alert("Эта скидка будет активирована, когда приглашённый вами друг воспользуется начисленной ему скидкой. Не забудьте напомнить😉")}}},C=n(3744);const D=(0,C.Z)(b,[["render",v]]);var $=D}}]);
//# sourceMappingURL=5597-legacy.4d92bf33.js.map