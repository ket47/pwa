(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[3158],{4699:function(e,r,a){var s=a(9781),l=a(1702),n=a(1956),t=a(5656),u=a(5296).f,o=l(u),i=l([].push),p=function(e){return function(r){var a,l=t(r),u=n(l),p=u.length,d=0,_=[];while(p>d)a=u[d++],s&&!o(l,a)||i(_,e?[a,l[a]]:l[a]);return _}};e.exports={entries:p(!0),values:p(!1)}},2479:function(e,r,a){var s=a(2109),l=a(4699).values;s({target:"Object",stat:!0},{values:function(e){return l(e)}})},3158:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return C}});var s=a(6252),l=a(3577),n=a(9963);const t=(0,s.Uk)(" Вы уже вошли в систему с номером телефона "),u=(0,s.Uk)(" Простая регистрация "),o=(0,s.Uk)(" Для регистрации необходим только ваш номер мобильного телефона и имя, чтобы мы знали как обращаться к вам. "),i={novalidate:""},p=(0,s.Uk)("Код"),d=(0,s.Uk)("+7 "),_=(0,s.Uk)("Мобильный телефон*"),m={"padding-left":""},c=(0,s.Uk)("Ваш псевдоним*"),h={"padding-left":""},f=(0,s.Uk)("Ваш е-маил (желательно заполнить)"),w=(0,s.Uk)(" Мы придумали пароль "),k=(0,s.Uk)(" для вас, но вы можете использовать свой вариант. Пароль будет сохранен на этом устройстве. "),v=(0,s.Uk)("Пароль (минимум 4 символа)*"),g={"padding-left":""},y=(0,s.Uk)("Зарегистрироваться"),W=(0,s.Uk)("Уже есть учетная запись?");function b(e,r,a,b,x,V){const I=(0,s.up)("ion-card-title"),U=(0,s.up)("ion-card-header"),$=(0,s.up)("ion-card-content"),q=(0,s.up)("ion-card"),C=(0,s.up)("ion-label"),S=(0,s.up)("ion-select-option"),z=(0,s.up)("ion-select"),O=(0,s.up)("ion-col"),j=(0,s.up)("ion-input"),N=(0,s.up)("ion-row"),F=(0,s.up)("ion-grid"),J=(0,s.up)("ion-text"),D=(0,s.up)("ion-item"),Z=(0,s.up)("ion-list"),G=(0,s.up)("ion-chip"),M=(0,s.up)("ion-button"),L=(0,s.up)("router-link"),B=(0,s.up)("base-layout");return(0,s.wg)(),(0,s.j4)(B,{"page-title":"Регистрация нового пользователя",pageDefaultBackLink:"/user"},{default:(0,s.w5)((()=>[e.$heap.state.user.user_id>0?((0,s.wg)(),(0,s.j4)(q,{key:0,style:{"background-color":"var(--ion-color-success-tint)"}},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I,{color:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.$heap.state.user.user_name)+" "+(0,l.zw)(e.$heap.state.user.user_surname)+" "+(0,l.zw)(e.$heap.state.user.user_middlename),1)])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[t,(0,s._)("b",null,(0,l.zw)(e.$heap.state.user.user_phone),1)])),_:1})])),_:1})):((0,s.wg)(),(0,s.j4)(q,{key:1,color:"light"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I,{color:"primary"},{default:(0,s.w5)((()=>[u])),_:1})])),_:1}),(0,s.Wm)($,null,{default:(0,s.w5)((()=>[o])),_:1})])),_:1})),(0,s._)("form",i,[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,{style:{width:"100%"}},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{size:"4"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{position:"stacked",color:"primary"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(z,{value:x.user_phone_prefix},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{value:"7",selected:""},{default:(0,s.w5)((()=>[d])),_:1})])),_:1},8,["value"])])),_:1}),(0,s.Wm)(O,{size:"8"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{position:"stacked",color:"primary"},{default:(0,s.w5)((()=>[_])),_:1}),(0,s.Wm)(j,{modelValue:x.user_phone,"onUpdate:modelValue":r[0]||(r[0]=e=>x.user_phone=e),onIonChange:r[1]||(r[1]=e=>V.phoneFormat()),name:"phone",type:"tel",inputmode:"tel",placeholder:"(xxx)xxxxxxxxx",required:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(J,{color:"danger",slot:"helper"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("p",m,"Неверный номер телефона",512),[[n.F8,!V.phoneValid&&1==x.submitted]])])),_:1})])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,{position:"stacked",color:"primary"},{default:(0,s.w5)((()=>[c])),_:1}),(0,s.Wm)(j,{modelValue:x.user_name,"onUpdate:modelValue":r[2]||(r[2]=e=>x.user_name=e),name:"username",type:"text",placeholder:"как к вам обращаться?",required:""},null,8,["modelValue"]),(0,s.Wm)(J,{color:"danger",slot:"helper"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("p",h,"Проверьте ваш псевдоним",512),[[n.F8,!V.usernameValid&&1==x.submitted]])])),_:1})])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,{position:"stacked",color:"primary"},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(j,{modelValue:x.user_email,"onUpdate:modelValue":r[3]||(r[3]=e=>x.user_email=e),name:"email",type:"email",placeholder:"е-маил",required:""},null,8,["modelValue"])])),_:1})])),_:1}),x.user_pass==x.genpass?((0,s.wg)(),(0,s.j4)(q,{key:0,style:{"background-color":"var(--ion-color-primary-tint)"}},{default:(0,s.w5)((()=>[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[w,(0,s.Wm)(G,{style:{"font-family":"monospace,serif"}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(x.user_pass),1)])),_:1}),k])),_:1})])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,{position:"stacked",color:"primary"},{default:(0,s.w5)((()=>[v])),_:1}),(0,s.Wm)(j,{modelValue:x.user_pass,"onUpdate:modelValue":r[4]||(r[4]=e=>x.user_pass=e),name:"password",type:"text",autocorrect:"off",placeholder:"пароль (минимум 4 символа)",required:"",style:{"font-family":"monospace,serif"}},null,8,["modelValue"]),(0,s.Wm)(J,{color:"danger",slot:"helper"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("p",g,"Пароль должен содержать не менее 4 символов.",512),[[n.F8,!V.passwordValid&&1==x.submitted]])])),_:1})])),_:1}),(0,s.Wm)(N,{"responsive-sm":""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(M,{onClick:V.onSubmit,expand:"block"},{default:(0,s.w5)((()=>[y])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,s.Wm)(N,{"responsive-sm":""},{default:(0,s.w5)((()=>[(0,s.Wm)(O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(L,{to:"/user/sign-in"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{color:"light",expand:"block"},{default:(0,s.w5)((()=>[W])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1})}var x=a(8534),V=(a(4916),a(5306),a(8862),a(2479),a(8292)),I=a(351),U=(a(9755),{components:{IonGrid:V.jY,IonRow:V.Nd,IonCol:V.wI,IonSelect:V.t9,IonSelectOption:V.n0,IonLabel:V.Q$,IonInput:V.pK,IonItem:V.Ie,IonText:V.yW,IonList:V.q_,IonButton:V.YG,IonCard:V.PM,IonCardHeader:V.Zi,IonCardTitle:V.Dq,IonCardContent:V.FN,IonChip:V.hM},data(){const e=this.passGenerate();return{submitted:!1,genpass:e,user_pass:e,user_pass_confirm:null,user_phone:null,user_phone_prefix:"7",user_name:null,user_email:null}},computed:{phoneValid(){var e;return 10==(null===(e=this.user_phone)||void 0===e?void 0:e.replace(/\D/g,"").length)},passwordValid(){var e;return(null===(e=this.user_pass)||void 0===e?void 0:e.length)>=4},usernameValid(){var e;return(null===(e=this.user_name)||void 0===e?void 0:e.length)>0}},methods:{onSubmit(){var e=this;return(0,x.Z)((function*(){var r;if(e.submitted=!0,!e.phoneValid||!e.passwordValid||!e.usernameValid)return;let a={user_phone:e.user_phone_prefix+e.user_phone,user_pass:e.user_pass,user_pass_confirm:e.user_pass,user_name:e.user_name,user_email:e.user_email,inviter_user_id:null!==(r=localStorage.inviter_user_id)&&void 0!==r?r:0};try{yield I.Z.signUp(a),e.phoneVerify(),localStorage.signInData=JSON.stringify({user_phone:e.user_phone_prefix+e.user_phone,user_pass:e.user_pass})}catch(n){var s,l;let r=null===n||void 0===n||null===(s=n.responseJSON)||void 0===s||null===(l=s.messages)||void 0===l?void 0:l.error;if("user_phone_unverified"==r)return void e.phoneVerify();r="unknown";try{const e=Object.keys(JSON.parse(n.responseJSON.messages.error))[0],a=Object.values(JSON.parse(n.responseJSON.messages.error))[0];r=e+"_"+a}catch(t){}switch(r){case"user_phone_notunique":e.$flash("Пользователь с таким телефоном уже зарегистрирован");break;case"user_phone_required":case"user_phone_invalid":case"user_phone_short":e.$flash("Проверьте номер телефона");break;case"user_name_required":case"user_name_short":e.$flash("Проверьте ваш псевдоним");break;case"user_email_invalid":e.$flash("Проверьте ваш е-маил");break;case"user_email_notunique":e.$flash("Такой е-маил уже используется");break;case"user_pass_required":e.$flash("Пароль обязателен для заполнения");break;case"user_pass_short":e.$flash("Пароль слишком короткий");break;case"user_pass_notmatches":e.$flash("Пароль не совпадает с подтверждением");break;default:e.$flash("Не удалось войти зарегистрироваться")}}}))()},passGenerate(){let e="";const r=4,a="abcdefghijklmnopqrstuvwxyz1234567890";for(let s=0;s<r;s++){const r=Math.floor(Math.random()*a.length);e+=a[r]}return e},phoneFormat(){this.user_phone||(this.user_phone="");try{let e=this.user_phone.replace(/\D/g,"");e.length>10&&(e=e.substring(e.length-10)),this.user_phone=e}catch(e){}},phoneVerify(){var e=this;return(0,x.Z)((function*(){let r={user_phone:e.user_phone_prefix+e.user_phone};try{e.$router.push({name:"UserVerifyPhone",params:r})}catch(a){e.$flash("Не удалось выслать смс с подтверждением")}}))()}}}),$=a(3744);const q=(0,$.Z)(U,[["render",b]]);var C=q}}]);
//# sourceMappingURL=3158-legacy.16994265.js.map