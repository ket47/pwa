"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[9211],{9211:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var n=o(641),l=o(33);const i=(0,n.Lk)("p",null,[(0,n.eW)("Новый пользователь, зарегистриванный "),(0,n.Lk)("u",null,"на сайте"),(0,n.eW)(" по вашему приглашению, получит 5 скидок по 200руб.")],-1),a=(0,n.Lk)("p",null,"В качестве благодарности, мы начислим вам 5 скидок по 100руб.",-1),r=(0,n.Lk)("div",{slot:"content",style:{padding:"10px"}},[(0,n.Lk)("p",null," После регистрации, на сайте, нового клиента по вашему приглашению, мы начислим вам 5 скидок по 100руб. "),(0,n.Lk)("p",null," Эти скидки будут активироваться по мере того, как приглашённый вами друг, будет использовать свои скидки. ")],-1),u={style:{color:"#999"}},s={key:0},d={key:1};function c(e,t,o,c,p,_){const k=(0,n.g2)("ion-card-title"),m=(0,n.g2)("ion-card-header"),h=(0,n.g2)("ion-text"),g=(0,n.g2)("ion-item"),v=(0,n.g2)("ion-accordion"),b=(0,n.g2)("ion-accordion-group"),f=(0,n.g2)("ion-icon"),y=(0,n.g2)("ion-button"),F=(0,n.g2)("ion-card-content"),L=(0,n.g2)("ion-card"),I=(0,n.g2)("ion-title"),C=(0,n.g2)("ion-segment-button"),W=(0,n.g2)("ion-segment"),T=(0,n.g2)("ion-list"),w=(0,n.g2)("ion-skeleton-text"),x=(0,n.g2)("base-layout");return(0,n.uX)(),(0,n.Wv)(x,{pageTitle:"Ваши скидки",pageDefaultBackLink:"/user"},{default:(0,n.k6)((()=>{var o;return[(0,n.bF)(L,{color:"light"},{default:(0,n.k6)((()=>[(0,n.bF)(m,null,{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)(" Получите скидку ")])),_:1})])),_:1}),(0,n.bF)(F,null,{default:(0,n.k6)((()=>[i,a,(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(v,null,{default:(0,n.k6)((()=>[(0,n.bF)(g,{slot:"header",color:"light"},{default:(0,n.k6)((()=>[(0,n.bF)(h,{slot:"end",color:"medium"},{default:(0,n.k6)((()=>[(0,n.eW)("подробнее")])),_:1})])),_:1}),r])),_:1})])),_:1}),(0,n.Lk)("p",null,[(0,n.bF)(y,{onClick:t[0]||(t[0]=e=>_.shareInvitation()),expand:"block"},{default:(0,n.k6)((()=>[(0,n.bF)(f,{src:c.arrowRedoOutline},null,8,["src"]),(0,n.eW)("Пригласить друга")])),_:1})])])),_:1})])),_:1}),(0,n.bF)(I),(0,n.bF)(h),(0,n.bF)(W,{"swipe-gesture":"true",modelValue:p.promoType,"onUpdate:modelValue":t[1]||(t[1]=e=>p.promoType=e),onIonChange:t[2]||(t[2]=e=>_.listTypeChanged(e))},{default:(0,n.k6)((()=>[(0,n.bF)(C,{value:"active"},{default:(0,n.k6)((()=>[(0,n.eW)(" Доступные ")])),_:1}),(0,n.bF)(C,{value:"inactive"},{default:(0,n.k6)((()=>[(0,n.eW)(" Неактивные ")])),_:1})])),_:1},8,["modelValue"]),"active"==p.promoType?((0,n.uX)(),(0,n.Wv)(T,{key:0},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(_.compPromoList,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.promo_id},[(0,n.bF)(g,{lines:"none"},{default:(0,n.k6)((()=>[(0,n.bF)(f,{slot:"start",icon:c.giftOutline,color:"primary"},null,8,["icon"]),(0,n.bF)(h,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(t.promo_name)+" ",1),(0,n.Lk)("p",u,"мин. заказ "+(0,l.v_)(t.min_order_sum_product)+(0,l.v_)(e.$heap.state.currencySign)+"; до "+(0,l.v_)(t.expiration),1)])),_:2},1024),(0,n.bF)(h,{slot:"end",color:"success"},{default:(0,n.k6)((()=>[(0,n.Lk)("b",null,(0,l.v_)(t.promo_value)+(0,l.v_)(e.$heap.state.currencySign),1)])),_:2},1024)])),_:2},1024)])))),128))])),_:1})):(0,n.Q3)("",!0),"inactive"==p.promoType?((0,n.uX)(),(0,n.Wv)(T,{key:1},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(_.compPromoList,(o=>((0,n.uX)(),(0,n.CE)("div",{key:o.promo_id},[(0,n.bF)(g,{lines:"none"},{default:(0,n.k6)((()=>[(0,n.bF)(f,{slot:"start",icon:c.giftOutline,color:"medium"},null,8,["icon"]),(0,n.bF)(h,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(o.promo_name)+" до "+(0,l.v_)(o.exp_date_time),1)])),_:2},1024),(0,n.bF)(h,{slot:"end"},{default:(0,n.k6)((()=>[(0,n.Lk)("b",null,(0,l.v_)(o.promo_value)+(0,l.v_)(e.$heap.state.currencySign),1)])),_:2},1024)])),_:2},1024),(0,n.bF)(g,null,{default:(0,n.k6)((()=>[1==o.is_expired?((0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(h,{color:"danger"},{default:(0,n.k6)((()=>[(0,n.eW)("просрочена")])),_:1})])):1==o.is_disabled?((0,n.uX)(),(0,n.CE)("div",d,[(0,n.bF)(h,{color:"warning",style:{cursor:"pointer"},onClick:t[3]||(t[3]=e=>_.helpNotActive())},{default:(0,n.k6)((()=>[(0,n.eW)("не активирована")])),_:1}),(0,n.bF)(f,{color:"warning",icon:c.helpCircle,onClick:t[4]||(t[4]=e=>_.helpNotActive()),style:{cursor:"pointer"}},null,8,["icon"])])):(0,n.Q3)("",!0),o.promo_order_id?((0,n.uX)(),(0,n.Wv)(h,{key:2},{default:(0,n.k6)((()=>[(0,n.eW)("использована в заказе #"+(0,l.v_)(o.promo_order_id),1)])),_:2},1024)):(0,n.Q3)("",!0)])),_:2},1024)])))),128))])),_:1})):(0,n.Q3)("",!0),null==p.promoList?((0,n.uX)(),(0,n.Wv)(T,{key:2},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)([1,2,3],(e=>(0,n.Lk)("div",{key:e},[(0,n.bF)(g,{lines:"none"},{default:(0,n.k6)((()=>[(0,n.bF)(f,{slot:"start",icon:c.giftOutline,color:"medium"},null,8,["icon"]),(0,n.bF)(w,{style:{width:"70%"}}),(0,n.bF)(w,{slot:"end",style:{width:"50px"}})])),_:1}),(0,n.bF)(g,null,{default:(0,n.k6)((()=>[(0,n.bF)(w,{style:{width:"70%"}})])),_:1})]))),64))])),_:1})):(0,n.Q3)("",!0),0===(null===(o=p.promoList)||void 0===o?void 0:o.length)?((0,n.uX)(),(0,n.Wv)(T,{key:3},{default:(0,n.k6)((()=>[(0,n.bF)(g,{lines:"none"},{default:(0,n.k6)((()=>[(0,n.eW)(" Скидок нет, но вы можете получить их пригласив друга ")])),_:1})])),_:1})):(0,n.Q3)("",!0)]})),_:1})}o(4114);var p=o(5654),_=o(5480),k=o(2311),m=o.n(k),h=o(962),g={components:{IonIcon:p.iq,IonTitle:p.BC,IonList:p.nf,IonItem:p.uz,IonText:p.IO,IonSegment:p.Gp,IonSegmentButton:p.eP,IonCard:p.b_,IonCardHeader:p.ME,IonCardTitle:p.tN,IonCardContent:p.I9,IonButton:p.Jm,IonSkeletonText:p.ds,IonAccordion:p.xk,IonAccordionGroup:p.YH},setup(){return{giftOutline:_.Lsq,closeOutline:_.xfX,banOutline:_.Av6,helpCircle:_.MGW,arrowRedoOutline:_.Kgq}},data(){return{promoType:"active",promoList:null}},mounted(){this.listGet()},computed:{compPromoList(){let e=[];if(this.promoList)for(let t of this.promoList)t.exp_date_time=this.toLocDate(t.expired_at),t.date_time=this.toLocDate(t.created_at),e.push(t);return e}},methods:{async listGet(){try{this.promoList=[];const e={user_id:this.$heap.state.user.user_id,type:this.promoType};this.promoList=await m().post(`${this.$heap.state.hostname}Promo/listGet`,e)}catch{}},listTypeChanged(e){const t=e.target.value;this.listGet(t)},toLocDate(e){const t=new Date(Date.parse(e)),o={month:"short",day:"numeric",year:"numeric"};return t.toLocaleDateString(void 0,o)},async shareInvitation(){try{const e=this.$heap.state.settings.app_title,t="Присоединяйтесь и получите 5 сертификатов по 200руб",o=await h.S.canShare(),n=`${this.$heap.getters.settings.app.frontendUrl}invitation.html?inviter_user_id=${this.$heap.state.user.user_id}`;o?await h.S.share({title:e,text:t,url:n,dialogTitle:e}):navigator.clipboard?(await navigator.clipboard.writeText(n),this.$alert("Теперь вы можете поделиться ей с друзьями в социальных сетях или мессенджерах.","Ссылка на страницу скопирована")):this.$alert("Устройство не поддерживает функцию поделиться","")}catch(e){}},helpNotActive(){this.$alert("Эта скидка будет активирована, когда приглашённый вами друг воспользуется начисленной ему скидкой. Не забудьте напомнить😉")}}},v=o(6262);const b=(0,v.A)(g,[["render",c]]);var f=b}}]);
//# sourceMappingURL=9211.51497be9.js.map