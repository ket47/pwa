"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[597],{5597:function(t,e,o){o.r(e),o.d(e,{default:function(){return g}});var n=o(6252),l=o(3577);const i=(0,n._)("p",null,"Новый пользователь, зарегистриванный по вашему приглашению, получит 5 скидок по 200руб.",-1),a=(0,n._)("p",null,"В качестве благодарности, мы начислим вам 5 скидок по 100руб.",-1),u=(0,n._)("p",{slot:"content",style:{padding:"10px"}}," После регистрации нового клиента по вашему приглашению, мы начислим вам 5 скидок по 100руб. Эти скидки будут активироваться по мере того, как приглашённый вами друг, будет использовать свои скидки. ",-1),r={key:0},s={key:1};function d(t,e,o,d,p,m){const c=(0,n.up)("ion-card-title"),_=(0,n.up)("ion-card-header"),w=(0,n.up)("ion-text"),h=(0,n.up)("ion-item"),f=(0,n.up)("ion-accordion"),g=(0,n.up)("ion-accordion-group"),k=(0,n.up)("ion-button"),W=(0,n.up)("ion-card-content"),y=(0,n.up)("ion-card"),v=(0,n.up)("ion-title"),I=(0,n.up)("ion-segment-button"),L=(0,n.up)("ion-segment"),C=(0,n.up)("ion-icon"),D=(0,n.up)("ion-list"),$=(0,n.up)("ion-skeleton-text"),x=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(x,{pageTitle:"Ваши скидки",pageDefaultBackLink:"/user"},{default:(0,n.w5)((()=>{var o;return[(0,n.Wm)(y,{color:"light"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Получите скидку ")])),_:1})])),_:1}),(0,n.Wm)(W,null,{default:(0,n.w5)((()=>[i,a,(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,{slot:"header",color:"light"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{slot:"end",color:"medium"},{default:(0,n.w5)((()=>[(0,n.Uk)("подробнее")])),_:1})])),_:1}),u])),_:1})])),_:1}),(0,n._)("p",null,[(0,n.Wm)(k,{onClick:e[0]||(e[0]=t=>m.shareInvitation()),expand:"full"},{default:(0,n.w5)((()=>[(0,n.Uk)("Пригласить друга")])),_:1})])])),_:1})])),_:1}),(0,n.Wm)(v),(0,n.Wm)(w),(0,n.Wm)(L,{"swipe-gesture":"true",modelValue:p.promoType,"onUpdate:modelValue":e[1]||(e[1]=t=>p.promoType=t),onIonChange:e[2]||(e[2]=t=>m.listTypeChanged(t))},{default:(0,n.w5)((()=>[(0,n.Wm)(I,{value:"active"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Доступные ")])),_:1}),(0,n.Wm)(I,{value:"inactive"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Неактивные ")])),_:1})])),_:1},8,["modelValue"]),"active"==p.promoType?((0,n.wg)(),(0,n.j4)(D,{key:0},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.compPromoList,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.promo_id},[(0,n.Wm)(h,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{slot:"start",icon:d.giftOutline,color:"primary"},null,8,["icon"]),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.promo_name),1)])),_:2},1024),(0,n.Wm)(w,{slot:"end",color:"success"},{default:(0,n.w5)((()=>[(0,n._)("b",null,(0,l.zw)(e.promo_value)+(0,l.zw)(t.$heap.state.currencySign),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("действительна до: "+(0,l.zw)(e.exp_date_time),1)])),_:2},1024)])),_:2},1024)])))),128))])),_:1})):(0,n.kq)("",!0),"inactive"==p.promoType?((0,n.wg)(),(0,n.j4)(D,{key:1},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.compPromoList,(o=>((0,n.wg)(),(0,n.iD)("div",{key:o.promo_id},[(0,n.Wm)(h,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{slot:"start",icon:d.giftOutline,color:"medium"},null,8,["icon"]),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(o.promo_name)+" до "+(0,l.zw)(o.exp_date_time),1)])),_:2},1024),(0,n.Wm)(w,{slot:"end"},{default:(0,n.w5)((()=>[(0,n._)("b",null,(0,l.zw)(o.promo_value)+(0,l.zw)(t.$heap.state.currencySign),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[1==o.is_expired?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(w,{color:"danger"},{default:(0,n.w5)((()=>[(0,n.Uk)("просрочена")])),_:1})])):1==o.is_disabled?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(w,{color:"warning",style:{cursor:"pointer"},onClick:e[3]||(e[3]=t=>m.helpNotActive())},{default:(0,n.w5)((()=>[(0,n.Uk)("не активирована")])),_:1}),(0,n.Wm)(C,{color:"warning",icon:d.helpCircle,onClick:e[4]||(e[4]=t=>m.helpNotActive()),style:{cursor:"pointer"}},null,8,["icon"])])):(0,n.kq)("",!0),o.promo_order_id?((0,n.wg)(),(0,n.j4)(w,{key:2},{default:(0,n.w5)((()=>[(0,n.Uk)("использована в заказе #"+(0,l.zw)(o.promo_order_id),1)])),_:2},1024)):(0,n.kq)("",!0)])),_:2},1024)])))),128))])),_:1})):(0,n.kq)("",!0),null==p.promoList?((0,n.wg)(),(0,n.j4)(D,{key:2},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)([1,2,3],(t=>(0,n._)("div",{key:t},[(0,n.Wm)(h,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{slot:"start",icon:d.giftOutline,color:"medium"},null,8,["icon"]),(0,n.Wm)($,{style:{width:"70%"}}),(0,n.Wm)($,{slot:"end",style:{width:"50px"}})])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)($,{style:{width:"70%"}})])),_:1})]))),64))])),_:1})):(0,n.kq)("",!0),0===(null===(o=p.promoList)||void 0===o?void 0:o.length)?((0,n.wg)(),(0,n.j4)(D,{key:3},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Скидок нет, но вы можете получить их пригласив друга ")])),_:1})])),_:1})):(0,n.kq)("",!0)]})),_:1})}o(3948);var p=o(6964),m=o(8903),c=o(9755),_=o.n(c),w={components:{IonIcon:p.gu,IonTitle:p.wd,IonList:p.q_,IonItem:p.Ie,IonText:p.yW,IonSegment:p.cJ,IonSegmentButton:p.GO,IonCard:p.PM,IonCardHeader:p.Zi,IonCardTitle:p.Dq,IonCardContent:p.FN,IonButton:p.YG,IonSkeletonText:p.CK,IonAccordion:p.We,IonAccordionGroup:p.eh},setup(){return{giftOutline:m._$o,closeOutline:m.fID,banOutline:m.L6S,helpCircle:m.pvH}},data(){return{promoType:"active",promoList:null}},mounted(){this.listGet()},computed:{compPromoList(){let t=[];if(this.promoList)for(let e of this.promoList)e.exp_date_time=this.toLocDate(e.expired_at),e.date_time=this.toLocDate(e.created_at),t.push(e);return t}},methods:{async listGet(){try{this.promoList=[];const t={user_id:this.$heap.state.user.user_id,type:this.promoType};this.promoList=await _().post(`${this.$heap.state.hostname}Promo/listGet`,t)}catch{}},listTypeChanged(t){const e=t.target.value;this.listGet(e)},toLocDate(t){const e=new Date(Date.parse(t)),o={month:"short",day:"numeric",year:"numeric"};return e.toLocaleDateString(void 0,o)},async shareInvitation(){var t;if(null!==(t=this.$heap.state.user)&&void 0!==t&&t.user_id)try{const t=`${this.$heap.state.settings.app.frontendUrl}invitation.html?inviter_user_id=${this.$heap.state.user.user_id}`;if(navigator.share){const e={title:this.$heap.state.settings.app_title,text:"Присоединяйтесь и получите 5 сертификатов по 200руб",url:t};await navigator.share(e)}else await navigator.clipboard.writeText(t),this.$alert("Ссылка с приглашением скопирована. Теперь вы можете поделиться ей с друзьями в социальных сетях или мессенджерах.","Готово")}catch(e){}else this.$flash("Вы не авторизированы")},helpNotActive(){this.$alert("Эта скидка будет активирована, когда приглашённый вами друг воспользуется начисленной ему скидкой. Не забудьте напомнить😉")}}},h=o(3744);const f=(0,h.Z)(w,[["render",d]]);var g=f}}]);
//# sourceMappingURL=597.2b84767b.js.map