"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[463],{5942:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var o=n(6252),i=n(3577);const r=(0,o._)("hr",null,null,-1),u=(0,o._)("p",null,"Поступление СМС на ваш телефон может занять до 2 минут.",-1),a={novalidate:""};function l(e,t,n,l,s,d){const c=(0,o.up)("ion-card-title"),p=(0,o.up)("ion-card-header"),m=(0,o.up)("ion-card-content"),h=(0,o.up)("ion-card"),f=(0,o.up)("ion-label"),_=(0,o.up)("ion-input"),w=(0,o.up)("ion-col"),k=(0,o.up)("ion-row"),v=(0,o.up)("ion-item"),I=(0,o.up)("ion-list"),$=(0,o.up)("ion-button"),W=(0,o.up)("base-layout");return(0,o.wg)(),(0,o.j4)(W,{"page-title":"Подтверждение телефона",pageDefaultBackLink:"/user"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"light"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Подтверждение номера телефона ")])),_:1})])),_:1}),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o._)("p",null,[(0,o.Uk)("Мы выслали вам смс с кодом подтверждения на номер "),(0,o._)("b",null,(0,i.zw)(s.user_phone),1),(0,o.Uk)(". Введите 4 цифры из смс ниже")]),r,u])),_:1})])),_:1}),(0,o._)("form",a,[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{position:"stacked",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)("Код подтверждения из смс")])),_:1}),(0,o.Wm)(_,{modelValue:s.verification_code,"onUpdate:modelValue":t[0]||(t[0]=e=>s.verification_code=e),type:"numeric",inputmode:"numeric",placeholder:"- - - -",onIonInput:t[1]||(t[1]=e=>{s.verification_code=e.target.value,d.onSubmit()}),enterkeyhint:"go",required:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(k,{"responsive-sm":""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)($,{onClick:t[2]||(t[2]=e=>d.onSubmit()),expand:"block"},{default:(0,o.w5)((()=>[(0,o.Uk)("Подтвердить")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(k,{"responsive-sm":""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)($,{onClick:t[3]||(t[3]=e=>{s.is_sent=!1,d.smsSend()}),expand:"block",color:"light",disabled:s.timeToResend>0},{default:(0,o.w5)((()=>[(0,o.Uk)("Послать снова "+(0,i.zw)(d.timeLeft),1)])),_:1},8,["disabled"])])),_:1})])),_:1})])])),_:1})}var s=n(8534),d=(n(4916),n(5306),n(6964)),c=n(9755),p=n.n(c),m=n(351),h={name:"UserVerifyPhone",components:{IonLabel:d.Q$,IonCol:d.wI,IonInput:d.pK,IonRow:d.Nd,IonButton:d.YG,IonCard:d.PM,IonCardHeader:d.Zi,IonCardTitle:d.Dq,IonCardContent:d.FN,IonItem:d.Ie,IonList:d.q_},data(){return{verification_code:null,user_phone:this.$heap.state.user.tmp_userphone||this.$route.params.user_phone||this.$route.query.user_phone||"",is_sent:!1,timeToResend:120}},created(){this.smsSend()},ionViewDidEnter(){this.smsSend()},computed:{timeLeft(){const e=Math.floor(this.timeToResend/60),t=this.timeToResend-60*e;return`${e}:${t}`}},methods:{clockStart(){this.timeToResend<=0||(this.timeToResend--,setTimeout((()=>this.clockStart()),1e3))},smsSend(){var e=this;return(0,s.Z)((function*(){if(e.is_sent)return;if(!e.user_phone)return void e.$router.replace("/user");let t={user_phone:e.user_phone};try{e.is_sent=!0,yield p().post(`${e.$heap.state.hostname}User/phoneVerificationSend`,t),e.timeToResend=120,e.clockStart()}catch(n){}}))()},onSubmit(){var e=this;return(0,s.Z)((function*(){if(e.verification_code&&4==String(e.verification_code).length)try{yield p().post(`${e.$heap.state.hostname}/User/phoneVerificationCheck`,{user_phone:e.user_phone,verification_code:e.verification_code}),e.$flash("Номер телефона верифицирован"),e.$router.replace("/user"),yield m.Z.autoSignIn(),e.$go("/catalog")}catch(t){const n=t.responseJSON.messages.error;switch(n){case"verification_not_found":e.$flash("Код верификации устарел"),e.$router.replace("/user/sign-in");break}e.$flash("Не удалось верифицировать телефон")}}))()}}},f=n(3744);const _=(0,f.Z)(h,[["render",l]]);var w=_}}]);
//# sourceMappingURL=463-legacy.32672eb3.js.map