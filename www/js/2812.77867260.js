"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[2812],{5110:function(e,s,t){t.d(s,{Z:function(){return _}});t(7658);var l=t(6252);const n={validate:""},o=(0,l._)("div",{style:{padding:"15px","font-size":"0.8em",color:"#999"}}," Рекомендуем сначала проверить СМС сообщение с паролем, которое было выслано вам при регистрации в сервисе. ",-1),a=(0,l._)("u",{style:{color:"blue"}},"службу поддержки",-1);function r(e,s,t,r,u,i){const d=(0,l.up)("ion-title"),p=(0,l.up)("ion-icon"),h=(0,l.up)("ion-toolbar"),m=(0,l.up)("ion-header"),c=(0,l.up)("ion-input"),_=(0,l.up)("ion-item"),f=(0,l.up)("ion-list"),w=(0,l.up)("ion-button"),k=(0,l.up)("ion-content");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Восстановление пароля")])),_:1}),(0,l.Wm)(p,{slot:"end",onClick:s[0]||(s[0]=e=>{i.closeModal()}),icon:r.closeOutline,size:"large"},null,8,["icon"])])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l._)("form",n,[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"Ваш номер телефона","label-placement":"stacked",modelValue:u.userphone,"onUpdate:modelValue":s[1]||(s[1]=e=>u.userphone=e),placeholder:"Ваш телефон",required:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"Ваш ник","label-placement":"stacked",modelValue:u.username,"onUpdate:modelValue":s[2]||(s[2]=e=>u.username=e),placeholder:"Имя, указанное вами при регистрации"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(w,{onClick:s[3]||(s[3]=e=>i.passwordReset()),expand:"block"},{default:(0,l.w5)((()=>[(0,l.Uk)("Создать новый пароль")])),_:1})]),o,(0,l._)("div",{style:{padding:"15px","font-size":"0.8em"},onClick:s[4]||(s[4]=s=>e.$router.push("/page/contacts"))},[(0,l.Uk)(" Если у вас возникли сложности с восстановлением пароля, обращайтесь в "),a])])),_:1})],64)}var u=t(4929),i=t(8903),d=t(9755),p=t.n(d),h={components:{IonContent:u.W2,IonHeader:u.Gu,IonTitle:u.wd,IonToolbar:u.sr,IonList:u.q_,IonItem:u.Ie,IonInput:u.pK,IonButton:u.YG,IonIcon:u.gu},props:["phone"],setup(){return{closeOutline:i.fID}},data(){return{username:"",userphone:this.phone}},methods:{closeModal(){return u.Fy.dismiss()},async passwordReset(){if(this.userphone.replace(/\D/g,"").length<11)return void alert("Проверьте ваш номер телефона");if(!this.username)return void alert("Введите ваше имя при регистрации");let e={user_phone:"+"+this.userphone.replace(/\D/g,""),user_name:this.username};try{await p().post(`${this.$heap.state.hostname}User/passwordReset`,e),this.$flash(`Ваш новый пароль выслан на номер '${this.userphone}'`),this.closeModal()}catch(l){var s,t;const e=null===l||void 0===l||null===(s=l.responseJSON)||void 0===s||null===(t=s.messages)||void 0===t?void 0:t.error;"user_notfound"==e?this.$flash(`Пользователь с телефоном '${this.userphone}' и именем '${this.username}' не найден`):this.$flash("Не удалось восстановить пароль")}}},mouted(){this.$topic.on("dismissModal",(()=>{this.closeModal()}))}},m=t(3744);const c=(0,m.Z)(h,[["render",r]]);var _=c},2812:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var l=t(6252),n=t(3577),o=t(9963);const a={novalidate:""},r={style:{display:"grid","grid-template-columns":"100px auto"}},u={"padding-left":""},i={"padding-left":""},d={"padding-left":""};function p(e,s,t,p,h,m){const c=(0,l.up)("ion-card-title"),_=(0,l.up)("ion-card-header"),f=(0,l.up)("ion-card-content"),w=(0,l.up)("ion-card"),k=(0,l.up)("ion-label"),v=(0,l.up)("ion-input"),g=(0,l.up)("ion-text"),W=(0,l.up)("ion-item"),y=(0,l.up)("ion-list"),b=(0,l.up)("ion-chip"),I=(0,l.up)("ion-button"),x=(0,l.up)("ion-col"),V=(0,l.up)("ion-row"),$=(0,l.up)("base-layout");return(0,l.wg)(),(0,l.j4)($,{"page-title":"Регистрация нового пользователя",pageDefaultBackLink:"/user"},{default:(0,l.w5)((()=>[e.$heap.state.user.user_id>0?((0,l.wg)(),(0,l.j4)(w,{key:0,style:{"background-color":"var(--ion-color-success-tint)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.$heap.state.user.user_name)+" "+(0,n.zw)(e.$heap.state.user.user_surname)+" "+(0,n.zw)(e.$heap.state.user.user_middlename),1)])),_:1})])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Вы уже вошли в систему с номером телефона "),(0,l._)("b",null,(0,n.zw)(e.$heap.state.user.user_phone),1)])),_:1})])),_:1})):((0,l.wg)(),(0,l.j4)(w,{key:1,color:"light"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Простая регистрация ")])),_:1})])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Для регистрации необходим только ваш номер мобильного телефона и имя, чтобы мы знали как к вам обращаться. ")])),_:1})])),_:1})),(0,l._)("form",a,[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{lines:"full"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l._)("div",null,[(0,l.Wm)(k,{position:"stacked"},{default:(0,l.w5)((()=>[(0,l.Uk)("Код")])),_:1}),(0,l.Wm)(v,{readonly:""},{default:(0,l.w5)((()=>[(0,l.Uk)("+7")])),_:1})]),(0,l._)("div",null,[(0,l.Wm)(k,{position:"stacked"},{default:(0,l.w5)((()=>[(0,l.Uk)("Мобильный телефон*")])),_:1}),(0,l.Wm)(v,{modelValue:h.user_phone,"onUpdate:modelValue":s[0]||(s[0]=e=>h.user_phone=e),onIonChange:s[1]||(s[1]=e=>m.phoneFormat()),name:"phone",type:"tel",inputmode:"tel",placeholder:"(xxx)xxxxxxxxx",required:"",autocomplete:"tel-national"},null,8,["modelValue"]),(0,l.Wm)(g,{color:"danger",slot:"helper"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("p",u,"Неверный номер телефона",512),[[o.F8,!m.phoneValid&&1==h.submitted]])])),_:1})])])])),_:1}),(0,l.Wm)(W,{lines:"full"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{position:"stacked"},{default:(0,l.w5)((()=>[(0,l.Uk)("Ваш псевдоним*")])),_:1}),(0,l.Wm)(v,{modelValue:h.user_name,"onUpdate:modelValue":s[2]||(s[2]=e=>h.user_name=e),name:"username",type:"text",placeholder:"как к вам обращаться?",required:"",autocomplete:"name"},null,8,["modelValue"]),(0,l.Wm)(g,{color:"danger",slot:"helper"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("p",i,"Проверьте ваш псевдоним",512),[[o.F8,!m.usernameValid&&1==h.submitted]])])),_:1})])),_:1}),(0,l.Wm)(W,{lines:"full"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{position:"stacked"},{default:(0,l.w5)((()=>[(0,l.Uk)("Ваш е-маил (желательно заполнить)")])),_:1}),(0,l.Wm)(v,{modelValue:h.user_email,"onUpdate:modelValue":s[3]||(s[3]=e=>h.user_email=e),name:"email",type:"email",placeholder:"е-маил",required:"",autocomplete:"email"},null,8,["modelValue"])])),_:1})])),_:1}),h.user_pass==h.genpass?((0,l.wg)(),(0,l.j4)(w,{key:0,style:{"background-color":"var(--ion-color-primary-tint)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Мы придумали пароль "),(0,l.Wm)(b,{style:{"font-family":"monospace,serif"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(h.user_pass),1)])),_:1}),(0,l.Uk)(" для вас, но вы можете использовать свой вариант. Пароль будет сохранен на этом устройстве. ")])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(W,{lines:"full"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{position:"stacked"},{default:(0,l.w5)((()=>[(0,l.Uk)("Пароль (минимум 4 символа)*")])),_:1}),(0,l.Wm)(v,{modelValue:h.user_pass,"onUpdate:modelValue":s[4]||(s[4]=e=>h.user_pass=e),name:"password",type:"text",autocorrect:"off",placeholder:"пароль (минимум 4 символа)",required:"",style:{"font-family":"monospace,serif"},autocomplete:"new-password"},null,8,["modelValue"]),(0,l.Wm)(g,{color:"danger",slot:"helper"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("p",d,"Пароль должен содержать не менее 4 символов.",512),[[o.F8,!m.passwordValid&&1==h.submitted]])])),_:1})])),_:1}),(0,l.Wm)(V,{"responsive-sm":""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I,{onClick:m.onSubmit,expand:"block"},{default:(0,l.w5)((()=>[(0,l.Uk)("Зарегистрироваться")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,l.Wm)(V,{"responsive-sm":""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I,{color:"light",expand:"block",onClick:s[5]||(s[5]=s=>e.$router.replace("/user/sign-in"))},{default:(0,l.w5)((()=>[(0,l.Uk)("Уже есть учетная запись?")])),_:1})])),_:1})])),_:1})])])),_:1})}var h=t(4929),m=t(351),c=(t(9755),t(5110)),_={components:{IonLabel:h.Q$,IonInput:h.pK,IonItem:h.Ie,IonText:h.yW,IonList:h.q_,IonButton:h.YG,IonCard:h.PM,IonCardHeader:h.Zi,IonCardTitle:h.Dq,IonCardContent:h.FN,IonChip:h.hM,IonCol:h.wI,IonRow:h.Nd},data(){const e=this.passGenerate();return{submitted:!1,genpass:e,user_pass:e,user_pass_confirm:null,user_phone:null,user_phone_prefix:"7",user_name:null,user_email:null}},computed:{phoneValid(){var e;return 10==(null===(e=this.user_phone)||void 0===e?void 0:e.replace(/\D/g,"").length)},passwordValid(){var e;return(null===(e=this.user_pass)||void 0===e?void 0:e.length)>=4},usernameValid(){var e;return(null===(e=this.user_name)||void 0===e?void 0:e.length)>0}},methods:{async onSubmit(){var e;if(this.submitted=!0,!this.phoneValid||!this.passwordValid||!this.usernameValid)return;let s={user_phone:this.user_phone_prefix+this.user_phone,user_pass:this.user_pass,user_pass_confirm:this.user_pass,user_name:this.user_name.trim(),user_email:this.user_email,inviter_user_id:null!==(e=localStorage.inviter_user_id)&&void 0!==e?e:0};try{await m.Z.signUp(s),this.phoneVerify()}catch(n){var t,l;let e=null===n||void 0===n||null===(t=n.responseJSON)||void 0===t||null===(l=t.messages)||void 0===l?void 0:l.error;if("user_phone_unverified"==e)return void this.phoneVerify();e="unknown";try{const s=Object.keys(JSON.parse(n.responseJSON.messages.error))[0],t=Object.values(JSON.parse(n.responseJSON.messages.error))[0];e=s+"_"+t}catch{}switch(e){case"user_phone_notunique":this.$flash("Пользователь с таким телефоном уже зарегистрирован"),await this.forgotPassConfirm()&&this.forgotPassModal();break;case"user_phone_required":case"user_phone_invalid":case"user_phone_short":this.$flash("Проверьте номер телефона");break;case"user_name_required":case"user_name_short":this.$flash("Проверьте ваш псевдоним");break;case"user_email_invalid":this.$flash("Проверьте ваш е-маил");break;case"user_email_notunique":this.$flash("Такой е-маил уже используется");break;case"user_pass_required":this.$flash("Пароль обязателен для заполнения");break;case"user_pass_short":this.$flash("Пароль слишком короткий");break;case"user_pass_notmatches":this.$flash("Пароль не совпадает с подтверждением");break;default:this.$flash("Не удалось войти зарегистрироваться")}}},passGenerate(){let e="";const s=4,t="abcdefghijklmnopqrstuvwxyz12345678901234567890";for(let l=0;l<s;l++){const s=Math.floor(Math.random()*t.length);e+=t[s]}return e},phoneFormat(){this.user_phone||(this.user_phone="");try{let e=this.user_phone.replace(/\D/g,"");e.length>10&&(e=e.substring(e.length-10)),this.user_phone=e}catch{}},phoneVerify(){try{this.$heap.state.user.tmp_userphone=this.user_phone_prefix+this.user_phone,this.$go("/user/verify-phone")}catch{this.$flash("Не удалось выслать смс с подтверждением")}},async forgotPassModal(){var e,s;this.modalOpen=!0;const t=(null!==(e=this.user_phone_prefix)&&void 0!==e?e:"")+(null!==(s=this.user_phone)&&void 0!==s?s:""),l=await h.Fy.create({component:c.Z,componentProps:{phone:t},initialBreakpoint:.5,breakpoints:[.5,.75]});return l.present()},async forgotPassConfirm(){var e,s;const t=(null!==(e=this.user_phone_prefix)&&void 0!==e?e:"")+(null!==(s=this.user_phone)&&void 0!==s?s:""),l=await h.Cl.create({header:"Восстановить пароль?",message:`Возможно вы уже регистрировались с телефоном ${t}.\n\nМожем восстановить пароль.`,buttons:[{text:"Отменить",role:"cancel"},{text:"Восстановить",role:"confirm"}]});await l.present();const{role:n}=await l.onDidDismiss();return"confirm"==n}}},f=t(3744);const w=(0,f.Z)(_,[["render",p]]);var k=w}}]);
//# sourceMappingURL=2812.77867260.js.map