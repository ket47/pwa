"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[620],{6620:function(e,s,a){a.r(s),a.d(s,{default:function(){return C}});var t=a(6252),l=a(3577),r=a(9963);const n=(0,t.Uk)(" Вы уже вошли в систему с номером телефона "),u=(0,t.Uk)(" Простая регистрация "),o=(0,t.Uk)(" Для регистрации необходим только ваш номер мобильного телефона и имя, чтобы мы знали как обращаться к вам. "),i={novalidate:""},p={style:{display:"grid","grid-template-columns":"100px auto"}},d=(0,t.Uk)("Код"),_=(0,t.Uk)("+7 "),h=(0,t.Uk)("Мобильный телефон*"),m={"padding-left":""},c=(0,t.Uk)("Ваш псевдоним*"),f={"padding-left":""},w=(0,t.Uk)("Ваш е-маил (желательно заполнить)"),k=(0,t.Uk)(" Мы придумали пароль "),g=(0,t.Uk)(" для вас, но вы можете использовать свой вариант. Пароль будет сохранен на этом устройстве. "),v=(0,t.Uk)("Пароль (минимум 4 символа)*"),y={"padding-left":""},W=(0,t.Uk)("Зарегистрироваться"),b=(0,t.Uk)("Уже есть учетная запись?");function x(e,s,a,x,V,I){const U=(0,t.up)("ion-card-title"),$=(0,t.up)("ion-card-header"),q=(0,t.up)("ion-card-content"),C=(0,t.up)("ion-card"),S=(0,t.up)("ion-label"),O=(0,t.up)("ion-select-option"),z=(0,t.up)("ion-select"),N=(0,t.up)("ion-input"),j=(0,t.up)("ion-text"),F=(0,t.up)("ion-item"),J=(0,t.up)("ion-list"),D=(0,t.up)("ion-chip"),M=(0,t.up)("ion-button"),G=(0,t.up)("ion-col"),L=(0,t.up)("ion-row"),Z=(0,t.up)("base-layout");return(0,t.wg)(),(0,t.j4)(Z,{"page-title":"Регистрация нового пользователя",pageDefaultBackLink:"/user"},{default:(0,t.w5)((()=>[e.$heap.state.user.user_id>0?((0,t.wg)(),(0,t.j4)(C,{key:0,style:{"background-color":"var(--ion-color-success-tint)"}},{default:(0,t.w5)((()=>[(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(U,{color:"primary"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.$heap.state.user.user_name)+" "+(0,l.zw)(e.$heap.state.user.user_surname)+" "+(0,l.zw)(e.$heap.state.user.user_middlename),1)])),_:1})])),_:1}),(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[n,(0,t._)("b",null,(0,l.zw)(e.$heap.state.user.user_phone),1)])),_:1})])),_:1})):((0,t.wg)(),(0,t.j4)(C,{key:1,color:"light"},{default:(0,t.w5)((()=>[(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(U,{color:"primary"},{default:(0,t.w5)((()=>[u])),_:1})])),_:1}),(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[o])),_:1})])),_:1})),(0,t._)("form",i,[(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[(0,t.Wm)(F,{lines:"full"},{default:(0,t.w5)((()=>[(0,t._)("div",p,[(0,t._)("div",null,[(0,t.Wm)(S,{position:"stacked"},{default:(0,t.w5)((()=>[d])),_:1}),(0,t.Wm)(z,{value:V.user_phone_prefix},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{value:"7",selected:""},{default:(0,t.w5)((()=>[_])),_:1})])),_:1},8,["value"])]),(0,t._)("div",null,[(0,t.Wm)(S,{position:"stacked"},{default:(0,t.w5)((()=>[h])),_:1}),(0,t.Wm)(N,{modelValue:V.user_phone,"onUpdate:modelValue":s[0]||(s[0]=e=>V.user_phone=e),onIonChange:s[1]||(s[1]=e=>I.phoneFormat()),name:"phone",type:"tel",inputmode:"tel",placeholder:"(xxx)xxxxxxxxx",required:""},null,8,["modelValue"]),(0,t.Wm)(j,{color:"danger",slot:"helper"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("p",m,"Неверный номер телефона",512),[[r.F8,!I.phoneValid&&1==V.submitted]])])),_:1})])])])),_:1}),(0,t.Wm)(F,{lines:"full"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{position:"stacked"},{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)(N,{modelValue:V.user_name,"onUpdate:modelValue":s[2]||(s[2]=e=>V.user_name=e),name:"username",type:"text",placeholder:"как к вам обращаться?",required:""},null,8,["modelValue"]),(0,t.Wm)(j,{color:"danger",slot:"helper"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("p",f,"Проверьте ваш псевдоним",512),[[r.F8,!I.usernameValid&&1==V.submitted]])])),_:1})])),_:1}),(0,t.Wm)(F,{lines:"full"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{position:"stacked"},{default:(0,t.w5)((()=>[w])),_:1}),(0,t.Wm)(N,{modelValue:V.user_email,"onUpdate:modelValue":s[3]||(s[3]=e=>V.user_email=e),name:"email",type:"email",placeholder:"е-маил",required:""},null,8,["modelValue"])])),_:1})])),_:1}),V.user_pass==V.genpass?((0,t.wg)(),(0,t.j4)(C,{key:0,style:{"background-color":"var(--ion-color-primary-tint)"}},{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[k,(0,t.Wm)(D,{style:{"font-family":"monospace,serif"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(V.user_pass),1)])),_:1}),g])),_:1})])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(F,{lines:"full"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{position:"stacked"},{default:(0,t.w5)((()=>[v])),_:1}),(0,t.Wm)(N,{modelValue:V.user_pass,"onUpdate:modelValue":s[4]||(s[4]=e=>V.user_pass=e),name:"password",type:"text",autocorrect:"off",placeholder:"пароль (минимум 4 символа)",required:"",style:{"font-family":"monospace,serif"}},null,8,["modelValue"]),(0,t.Wm)(j,{color:"danger",slot:"helper"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("p",y,"Пароль должен содержать не менее 4 символов.",512),[[r.F8,!I.passwordValid&&1==V.submitted]])])),_:1})])),_:1}),(0,t.Wm)(L,{"responsive-sm":""},{default:(0,t.w5)((()=>[(0,t.Wm)(G,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{onClick:I.onSubmit,expand:"block"},{default:(0,t.w5)((()=>[W])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,t.Wm)(L,{"responsive-sm":""},{default:(0,t.w5)((()=>[(0,t.Wm)(G,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{color:"light",expand:"block",onClick:s[5]||(s[5]=s=>e.$router.push("/user/sign-in"))},{default:(0,t.w5)((()=>[b])),_:1})])),_:1})])),_:1})])])),_:1})}a(5306);var V=a(3716),I=a(351),U=(a(9755),{components:{IonSelect:V.t9,IonSelectOption:V.n0,IonLabel:V.Q$,IonInput:V.pK,IonItem:V.Ie,IonText:V.yW,IonList:V.q_,IonButton:V.YG,IonCard:V.PM,IonCardHeader:V.Zi,IonCardTitle:V.Dq,IonCardContent:V.FN,IonChip:V.hM,IonCol:V.wI,IonRow:V.Nd},data(){const e=this.passGenerate();return{submitted:!1,genpass:e,user_pass:e,user_pass_confirm:null,user_phone:null,user_phone_prefix:"7",user_name:null,user_email:null}},computed:{phoneValid(){var e;return 10==(null===(e=this.user_phone)||void 0===e?void 0:e.replace(/\D/g,"").length)},passwordValid(){var e;return(null===(e=this.user_pass)||void 0===e?void 0:e.length)>=4},usernameValid(){var e;return(null===(e=this.user_name)||void 0===e?void 0:e.length)>0}},methods:{async onSubmit(){var e;if(this.submitted=!0,!this.phoneValid||!this.passwordValid||!this.usernameValid)return;let s={user_phone:this.user_phone_prefix+this.user_phone,user_pass:this.user_pass,user_pass_confirm:this.user_pass,user_name:this.user_name,user_email:this.user_email,inviter_user_id:null!==(e=localStorage.inviter_user_id)&&void 0!==e?e:0};try{await I.Z.signUp(s),this.phoneVerify(),localStorage.signInData=JSON.stringify({user_phone:this.user_phone_prefix+this.user_phone,user_pass:this.user_pass})}catch(l){var a,t;let e=null===l||void 0===l||null===(a=l.responseJSON)||void 0===a||null===(t=a.messages)||void 0===t?void 0:t.error;if("user_phone_unverified"==e)return void this.phoneVerify();e="unknown";try{const s=Object.keys(JSON.parse(l.responseJSON.messages.error))[0],a=Object.values(JSON.parse(l.responseJSON.messages.error))[0];e=s+"_"+a}catch{}switch(e){case"user_phone_notunique":this.$flash("Пользователь с таким телефоном уже зарегистрирован");break;case"user_phone_required":case"user_phone_invalid":case"user_phone_short":this.$flash("Проверьте номер телефона");break;case"user_name_required":case"user_name_short":this.$flash("Проверьте ваш псевдоним");break;case"user_email_invalid":this.$flash("Проверьте ваш е-маил");break;case"user_email_notunique":this.$flash("Такой е-маил уже используется");break;case"user_pass_required":this.$flash("Пароль обязателен для заполнения");break;case"user_pass_short":this.$flash("Пароль слишком короткий");break;case"user_pass_notmatches":this.$flash("Пароль не совпадает с подтверждением");break;default:this.$flash("Не удалось войти зарегистрироваться")}}},passGenerate(){let e="";const s=4,a="abcdefghijklmnopqrstuvwxyz12345678901234567890";for(let t=0;t<s;t++){const s=Math.floor(Math.random()*a.length);e+=a[s]}return e},phoneFormat(){this.user_phone||(this.user_phone="");try{let e=this.user_phone.replace(/\D/g,"");e.length>10&&(e=e.substring(e.length-10)),this.user_phone=e}catch{}},async phoneVerify(){let e={user_phone:this.user_phone_prefix+this.user_phone};try{this.$router.replace({name:"UserVerifyPhone",params:e})}catch{this.$flash("Не удалось выслать смс с подтверждением")}}}}),$=a(3744);const q=(0,$.Z)(U,[["render",x]]);var C=q}}]);
//# sourceMappingURL=620.456fcc29.js.map