"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[661],{5661:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});n(7658);var t=n(6252),l=n(3577),o=n(9963);const a={novalidate:""},u={style:{display:"grid","grid-template-columns":"100px auto",width:"100%"}},r={"padding-left":""},i={"padding-left":""},p={"padding-left":""};function d(e,s,n,d,h,c){const _=(0,t.up)("ion-card-title"),m=(0,t.up)("ion-card-header"),f=(0,t.up)("ion-card-content"),w=(0,t.up)("ion-card"),g=(0,t.up)("ion-input"),k=(0,t.up)("ion-text"),b=(0,t.up)("ion-item"),v=(0,t.up)("ion-list"),I=(0,t.up)("ion-button"),W=(0,t.up)("ion-col"),y=(0,t.up)("ion-row"),x=(0,t.up)("ion-grid"),$=(0,t.up)("base-layout");return(0,t.wg)(),(0,t.j4)($,{"page-title":"Вход в систему",pageDefaultBackLink:"/user"},{default:(0,t.w5)((()=>[e.$heap.state.user.user_id>0?((0,t.wg)(),(0,t.j4)(w,{key:0,style:{"background-color":"var(--ion-color-success-tint)"}},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,{color:"primary"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.$heap.state.user.user_name)+" "+(0,l.zw)(e.$heap.state.user.user_surname)+" "+(0,l.zw)(e.$heap.state.user.user_middlename),1)])),_:1})])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Вы уже вошли в систему с номером телефона "),(0,t._)("b",null,(0,l.zw)(e.$heap.state.user.user_phone),1)])),_:1})])),_:1})):(0,t.kq)("",!0),(0,t._)("form",a,[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{lines:"full"},{default:(0,t.w5)((()=>[(0,t._)("div",u,[(0,t._)("div",null,[(0,t.Wm)(g,{readonly:"",label:"Код",labelPlacement:"stacked"},{default:(0,t.w5)((()=>[(0,t.Uk)("+7")])),_:1})]),(0,t._)("div",null,[(0,t.Wm)(g,{modelValue:h.user_phone,"onUpdate:modelValue":s[0]||(s[0]=e=>h.user_phone=e),onIonChange:s[1]||(s[1]=e=>c.phoneFormat()),name:"phone",type:"tel",inputmode:"tel",placeholder:"(xxx)xxxxxxxxx",required:"",label:"Мобильный телефон*",labelPlacement:"stacked"},null,8,["modelValue"]),(0,t.Wm)(k,{color:"danger",slot:"helper"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("p",r,"Неверный номер телефона",512),[[o.F8,!c.phoneValid&&1==h.submitted]])])),_:1})])]),(0,t.Wm)(k,{color:"danger",slot:"helper"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("p",i,"Неверный номер телефона",512),[[o.F8,!c.phoneValid&&1==h.submitted]])])),_:1})])),_:1}),(0,t.Wm)(b,{lines:"full"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{modelValue:h.user_pass,"onUpdate:modelValue":s[2]||(s[2]=e=>h.user_pass=e),name:"password",type:"password",autocorrect:"off",placeholder:"Пароль (Минимум 4 символа)",required:"",label:"Пароль (Минимум 4 символа)*",labelPlacement:"stacked"},null,8,["modelValue"]),(0,t.Wm)(k,{color:"danger",slot:"helper"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("p",p,"Пароль должен содержать не менее 4 символов.",512),[[o.F8,!c.passwordValid&&1==h.submitted]])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[(0,t.Wm)(y,{"responsive-sm":""},{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{onClick:c.onSubmit,expand:"block"},{default:(0,t.w5)((()=>[(0,t.Uk)("Войти")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,t.Wm)(y,{"responsive-sm":""},{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{color:"light",expand:"block",onClick:s[3]||(s[3]=s=>e.$router.push({path:"/user/sign-up"}))},{default:(0,t.w5)((()=>[(0,t.Uk)("Зарегистрироваться")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(y,{"responsive-sm":""},{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{onClick:c.openModal,color:"light",expand:"block"},{default:(0,t.w5)((()=>[(0,t.Uk)("Забыли пароль?")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])])),_:1})}n(4916),n(5306),n(8862);var h=n(2824);const c={novalidate:""},_=(0,t._)("div",{style:{padding:"15px","font-size":"0.8em",color:"#999"}}," Рекомендуем сначала проверить СМС сообщение с паролем, которое было выслано вам при регистрации в сервисе. ",-1),m=(0,t._)("a",{href:"#"},"службу поддержки",-1);function f(e,s,n,l,o,a){const u=(0,t.up)("ion-title"),r=(0,t.up)("ion-icon"),i=(0,t.up)("ion-toolbar"),p=(0,t.up)("ion-header"),d=(0,t.up)("ion-input"),h=(0,t.up)("ion-item"),f=(0,t.up)("ion-list"),w=(0,t.up)("ion-button"),g=(0,t.up)("ion-content");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Восстановление пароля")])),_:1}),(0,t.Wm)(r,{slot:"end",onClick:s[0]||(s[0]=e=>{a.closeModal()}),icon:l.closeOutline,size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t._)("form",c,[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{label:"Ваш номер телефона","label-placement":"stacked",modelValue:o.userphone,"onUpdate:modelValue":s[1]||(s[1]=e=>o.userphone=e),placeholder:"Ваш телефон"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{label:"Ваш ник","label-placement":"stacked",modelValue:o.username,"onUpdate:modelValue":s[2]||(s[2]=e=>o.username=e),placeholder:"Имя, указанное вами при регистрации"},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)(w,{onClick:s[3]||(s[3]=e=>a.passwordReset()),expand:"full"},{default:(0,t.w5)((()=>[(0,t.Uk)("Создать новый пароль")])),_:1})]),_,(0,t._)("div",{style:{padding:"15px","font-size":"0.8em"},onClick:s[4]||(s[4]=s=>e.$router.push("page/contacts"))},[(0,t.Uk)(" Если у вас возникли сложности с восстановлением пароля, обращайтесь в "),m])])),_:1})],64)}var w=n(8903),g=n(9755),k=n.n(g),b={components:{IonContent:h.W2,IonHeader:h.Gu,IonTitle:h.wd,IonToolbar:h.sr,IonList:h.q_,IonItem:h.Ie,IonInput:h.pK,IonButton:h.YG,IonIcon:h.gu},props:["phone"],setup(){return{closeOutline:w.fID}},data(){return{username:"",userphone:this.phone}},methods:{closeModal(){return h.Fy.dismiss()},async passwordReset(){let e={user_phone:"+"+this.userphone.replace(/\D/g,""),user_name:this.username};try{await k().post(`${this.$heap.state.hostname}User/passwordReset`,e),this.$flash(`Ваш новый пароль выслан на номер '${this.userphone}'`)}catch(t){var s,n;const e=null===t||void 0===t||null===(s=t.responseJSON)||void 0===s||null===(n=s.messages)||void 0===n?void 0:n.error;"user_notfound"==e?this.$flash(`Пользователь с телефоном '${this.userphone}' и именем '${this.username}' не найден`):this.$flash("Не удалось восстановить пароль")}this.closeModal()}}},v=n(3744);const I=(0,v.Z)(b,[["render",f]]);var W=I,y=n(351),x=n(8288),$={components:{IonCol:h.wI,IonInput:h.pK,IonRow:h.Nd,IonText:h.yW,IonButton:h.YG,IonGrid:h.jY,IonCard:h.PM,IonCardHeader:h.Zi,IonCardTitle:h.Dq,IonCardContent:h.FN,IonList:h.q_,IonItem:h.Ie},data(){return{submitted:!1,user_pass:null,user_phone:null,user_phone_prefix:"7",modalOpen:!1}},computed:{phoneValid(){var e;return 10==(null===(e=this.user_phone)||void 0===e?void 0:e.replace(/\D/g,"").length)},passwordValid(){var e;return(null===(e=this.user_pass)||void 0===e?void 0:e.length)>=4}},created(){var e;const s=JSON.parse(null!==(e=localStorage.signInData)&&void 0!==e?e:"{}");s&&s.user_phone&&(this.user_phone=s.user_phone,this.phoneFormat()),s&&s.user_pass&&(this.user_pass=s.user_pass)},methods:{async onSubmit(){if(this.submitted=!0,!this.phoneValid||!this.passwordValid)return!1;let e={user_phone:this.user_phone_prefix+this.user_phone,user_pass:this.user_pass,user_pass_confirm:this.user_pass};try{await y.Z.signIn(e),await y.Z.get(),x.Z.go(-1)}catch(s){const e=s.responseJSON,n=e.messages.error;switch(n){case"user_not_found":this.$flash("Пользователь не найден. Пройдите регистрацию.");break;case"user_pass_wrong":this.$flash("Неверный пароль");break;case"user_is_disabled":this.$flash("Пользователь отключен. Обратитесь к администратору");break;case"user_is_deleted":this.$flash("Пользователь удален. Обратитесь к администратору");break;case"user_phone_unverified":this.$flash("Номер телефона не подтвержден"),localStorage.signInData=JSON.stringify({user_phone:this.user_phone_prefix+this.user_phone,user_pass:this.user_pass}),this.phoneVerify();break;default:this.$flash("Не удалось войти в систему")}}},phoneFormat(){this.user_phone||(this.user_phone="");try{let e=this.user_phone.replace(/\D/g,"");e.length>10&&(e=e.substring(e.length-10)),this.user_phone=e}catch(e){}},async openModal(){var e,s;this.modalOpen=!0;const n=null!==(e=null!==(s=this.user_phone_prefix)&&void 0!==s?s:""+this.user_phone)&&void 0!==e?e:"",t=await h.Fy.create({component:W,componentProps:{phone:n},initialBreakpoint:.5,breakpoints:[.5,.75]});return t.present()},phoneVerify(){try{this.$heap.state.user.tmp_userphone=this.user_phone_prefix+this.user_phone,this.$go("/user/verify-phone")}catch(e){this.$flash("Не удалось выслать смс с подтверждением")}}}};const V=(0,v.Z)($,[["render",d],["__scopeId","data-v-6793e2b8"]]);var C=V}}]);
//# sourceMappingURL=661.cc175ce2.js.map