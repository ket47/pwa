"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[9028],{9028:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t=r(6252),u=r(3577),o=r(9963),a=(0,t.Uk)(" Вы уже вошли в систему с номером телефона "),s={novalidate:""},l=(0,t.Uk)("Код"),i=(0,t.Uk)("+7 "),p=(0,t.Uk)("Мобильный телефон*"),c={"padding-left":""},d=(0,t.Uk)("Пароль (Минимум 4 символа)*"),f={"padding-left":""},h=(0,t.Uk)("Войти"),_=(0,t.Uk)("Зарегистрироваться"),m=(0,t.Uk)("Забыли пароль?");function w(e,n,r,w,k,v){var W=(0,t.up)("ion-card-title"),b=(0,t.up)("ion-card-header"),I=(0,t.up)("ion-card-content"),g=(0,t.up)("ion-card"),x=(0,t.up)("ion-label"),y=(0,t.up)("ion-select-option"),$=(0,t.up)("ion-select"),V=(0,t.up)("ion-col"),U=(0,t.up)("ion-input"),C=(0,t.up)("ion-row"),Z=(0,t.up)("ion-grid"),S=(0,t.up)("ion-text"),z=(0,t.up)("ion-item"),D=(0,t.up)("ion-list"),O=(0,t.up)("ion-button"),F=(0,t.up)("base-layout");return(0,t.wg)(),(0,t.j4)(F,{"page-title":"Вход в систему",pageDefaultBackLink:"/user"},{default:(0,t.w5)((function(){return[e.$heap.state.user.user_id>0?((0,t.wg)(),(0,t.j4)(g,{key:0,style:{"background-color":"var(--ion-color-success-tint)"}},{default:(0,t.w5)((function(){return[(0,t.Wm)(b,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(W,{color:"primary"},{default:(0,t.w5)((function(){return[(0,t.Uk)((0,u.zw)(e.$heap.state.user.user_name)+" "+(0,u.zw)(e.$heap.state.user.user_surname)+" "+(0,u.zw)(e.$heap.state.user.user_middlename),1)]})),_:1})]})),_:1}),(0,t.Wm)(I,null,{default:(0,t.w5)((function(){return[a,(0,t._)("b",null,(0,u.zw)(e.$heap.state.user.user_phone),1)]})),_:1})]})),_:1})):(0,t.kq)("",!0),(0,t._)("form",s,[(0,t.Wm)(D,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(Z,{style:{width:"100%"}},{default:(0,t.w5)((function(){return[(0,t.Wm)(C,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(V,{size:"5"},{default:(0,t.w5)((function(){return[(0,t.Wm)(x,{position:"stacked",color:"primary"},{default:(0,t.w5)((function(){return[l]})),_:1}),(0,t.Wm)($,{value:k.user_phone_prefix},{default:(0,t.w5)((function(){return[(0,t.Wm)(y,{value:"7",selected:""},{default:(0,t.w5)((function(){return[i]})),_:1})]})),_:1},8,["value"])]})),_:1}),(0,t.Wm)(V,{size:"7"},{default:(0,t.w5)((function(){return[(0,t.Wm)(x,{position:"stacked",color:"primary"},{default:(0,t.w5)((function(){return[p]})),_:1}),(0,t.Wm)(U,{modelValue:k.user_phone,"onUpdate:modelValue":n[0]||(n[0]=function(e){return k.user_phone=e}),onIonChange:n[1]||(n[1]=function(e){return v.phoneFormat()}),name:"phone",type:"tel",inputmode:"tel",placeholder:"(xxx)xxxxxxxxx",required:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),(0,t.Wm)(S,{color:"danger",slot:"helper"},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("p",c,"Неверный номер телефона",512),[[o.F8,!v.phoneValid&&1==k.submitted]])]})),_:1})]})),_:1}),(0,t.Wm)(z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(x,{position:"stacked",color:"primary"},{default:(0,t.w5)((function(){return[d]})),_:1}),(0,t.Wm)(U,{modelValue:k.user_pass,"onUpdate:modelValue":n[2]||(n[2]=function(e){return k.user_pass=e}),name:"password",type:"password",autocorrect:"off",placeholder:"Пароль (Минимум 4 символа)",required:""},null,8,["modelValue"]),(0,t.Wm)(S,{color:"danger",slot:"helper"},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("p",f,"Пароль должен содержать не менее 4 символов.",512),[[o.F8,!v.passwordValid&&1==k.submitted]])]})),_:1})]})),_:1})]})),_:1}),(0,t.Wm)(Z,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(C,{"responsive-sm":""},{default:(0,t.w5)((function(){return[(0,t.Wm)(V,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(O,{onClick:v.onSubmit,expand:"block"},{default:(0,t.w5)((function(){return[h]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),(0,t.Wm)(C,{"responsive-sm":""},{default:(0,t.w5)((function(){return[(0,t.Wm)(V,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(O,{color:"light",expand:"block",onClick:n[3]||(n[3]=function(n){return e.$router.push({path:"/user/sign-up"})})},{default:(0,t.w5)((function(){return[_]})),_:1})]})),_:1})]})),_:1}),(0,t.Wm)(C,{"responsive-sm":""},{default:(0,t.w5)((function(){return[(0,t.Wm)(V,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(O,{onClick:v.openModal,color:"light",expand:"block"},{default:(0,t.w5)((function(){return[m]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1})}var k=r(6835),v=r(8534),W=(r(4916),r(5306),r(8862),r(8292)),b=(0,t.Uk)("Напоминание пароля"),I={novalidate:""},g=(0,t.Uk)("Номер телефона"),x=(0,t.Uk)("Имя пользователя"),y=(0,t.Uk)("Выслать пароль");function $(e,n,r,u,o,a){var s=(0,t.up)("ion-title"),l=(0,t.up)("ion-icon"),i=(0,t.up)("ion-toolbar"),p=(0,t.up)("ion-header"),c=(0,t.up)("ion-label"),d=(0,t.up)("ion-input"),f=(0,t.up)("ion-item"),h=(0,t.up)("ion-list"),_=(0,t.up)("ion-button"),m=(0,t.up)("ion-content");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(p,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(i,{color:"secondary"},{default:(0,t.w5)((function(){return[(0,t.Wm)(s,null,{default:(0,t.w5)((function(){return[b]})),_:1}),(0,t.Wm)(l,{slot:"end",onClick:n[0]||(n[0]=function(e){a.closeModal()}),icon:u.closeOutline,size:"large"},null,8,["icon"])]})),_:1})]})),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((function(){return[(0,t._)("form",I,[(0,t.Wm)(h,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(f,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{position:"stacked",color:"primary"},{default:(0,t.w5)((function(){return[g]})),_:1}),(0,t.Wm)(d,{modelValue:o.userphone,"onUpdate:modelValue":n[1]||(n[1]=function(e){return o.userphone=e}),placeholder:"Ваш телефон"},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{position:"stacked",color:"primary"},{default:(0,t.w5)((function(){return[x]})),_:1}),(0,t.Wm)(d,{modelValue:o.username,"onUpdate:modelValue":n[2]||(n[2]=function(e){return o.username=e}),placeholder:"Введите имя пользователя..."},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,t.Wm)(_,{onClick:n[3]||(n[3]=function(e){return a.passwordReset()}),expand:"full"},{default:(0,t.w5)((function(){return[y]})),_:1})])]})),_:1})],64)}var V=r(8903),U=r(9755),C=r.n(U),Z={components:{IonContent:W.W2,IonHeader:W.Gu,IonTitle:W.wd,IonToolbar:W.sr,IonList:W.q_,IonItem:W.Ie,IonInput:W.pK,IonButton:W.YG,IonIcon:W.gu,IonLabel:W.Q$},props:["phone"],setup(){return{closeOutline:V.fID}},data(){return{username:"",userphone:this.phone}},methods:{closeModal(){return W.Fy.dismiss()},passwordReset(){var e=this;return(0,v.Z)((0,k.Z)().mark((function n(){var r,t,u,o;return(0,k.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={user_phone:"+"+e.userphone.replace(/\D/g,""),user_name:e.username},n.prev=1,n.next=4,C().post(`${e.$heap.state.hostname}User/passwordReset`,r);case 4:e.$flash(`Ваш новый пароль выслан на номер '${e.userphone}'`),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](1),o=null===n.t0||void 0===n.t0||null===(t=n.t0.responseJSON)||void 0===t||null===(u=t.messages)||void 0===u?void 0:u.error,"user_notfound"==o?e.$flash(`Пользователь с телефоном '${e.userphone}' и именем '${e.username}' не найден`):e.$flash("Не удалось восстановить пароль");case 11:e.closeModal();case 12:case"end":return n.stop()}}),n,null,[[1,7]])})))()}}},S=r(3744);const z=(0,S.Z)(Z,[["render",$]]);var D=z,O=r(351),F=r(6488),q={components:{IonLabel:W.Q$,IonSelectOption:W.n0,IonSelect:W.t9,IonCol:W.wI,IonInput:W.pK,IonRow:W.Nd,IonText:W.yW,IonButton:W.YG,IonGrid:W.jY,IonCard:W.PM,IonCardHeader:W.Zi,IonCardTitle:W.Dq,IonCardContent:W.FN,IonList:W.q_,IonItem:W.Ie},data(){return{submitted:!1,user_pass:null,user_phone:null,user_phone_prefix:"7",modalOpen:!1}},computed:{phoneValid(){var e;return 10==(null===(e=this.user_phone)||void 0===e?void 0:e.replace(/\D/g,"").length)},passwordValid(){var e;return(null===(e=this.user_pass)||void 0===e?void 0:e.length)>=4}},created(){var e,n=JSON.parse(null!==(e=localStorage.signInData)&&void 0!==e?e:"{}");n&&n.user_phone&&(this.user_phone=n.user_phone,this.phoneFormat()),n&&n.user_pass&&(this.user_pass=n.user_pass)},methods:{onSubmit(){var e=this;return(0,v.Z)((0,k.Z)().mark((function n(){var r,t,u;return(0,k.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.submitted=!0,e.phoneValid&&e.passwordValid){n.next=3;break}return n.abrupt("return",!1);case 3:return r={user_phone:e.user_phone_prefix+e.user_phone,user_pass:e.user_pass,user_pass_confirm:e.user_pass},n.prev=4,n.next=7,O.Z.signIn(r);case 7:return n.next=9,O.Z.get();case 9:F.Z.go(-1),n.next=32;break;case 12:n.prev=12,n.t0=n["catch"](4),t=n.t0.responseJSON,u=t.messages.error,n.t1=u,n.next="user_not_found"===n.t1?19:"user_pass_wrong"===n.t1?21:"user_is_disabled"===n.t1?23:"user_is_deleted"===n.t1?25:"user_phone_unverified"===n.t1?27:31;break;case 19:return e.$flash("Пользователь не найден. Пройдите регистрацию."),n.abrupt("break",32);case 21:return e.$flash("Неверный пароль"),n.abrupt("break",32);case 23:return e.$flash("Пользователь отключен. Обратитесь к администратору"),n.abrupt("break",32);case 25:return e.$flash("Пользователь удален. Обратитесь к администратору"),n.abrupt("break",32);case 27:return e.$flash("Номер телефона не подтвержден"),localStorage.signInData=JSON.stringify({user_phone:e.user_phone_prefix+e.user_phone,user_pass:e.user_pass}),e.phoneVerify(),n.abrupt("break",32);case 31:e.$flash("Не удалось войти в систему");case 32:case"end":return n.stop()}}),n,null,[[4,12]])})))()},phoneFormat(){this.user_phone||(this.user_phone="");try{var e=this.user_phone.replace(/\D/g,"");e.length>10&&(e=e.substring(e.length-10)),this.user_phone=e}catch(n){}},openModal(){var e=this;return(0,v.Z)((0,k.Z)().mark((function n(){var r,t,u,o;return(0,k.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.modalOpen=!0,u=null!==(r=null!==(t=e.user_phone_prefix)&&void 0!==t?t:""+e.user_phone)&&void 0!==r?r:"",n.next=4,W.Fy.create({component:D,componentProps:{phone:u},initialBreakpoint:.5,breakpoints:[.5,.75]});case 4:return o=n.sent,n.abrupt("return",o.present());case 6:case"end":return n.stop()}}),n)})))()},phoneVerify(){var e={user_phone:this.user_phone_prefix+this.user_phone};try{this.$router.push({name:"UserVerifyPhone",query:e})}catch(n){this.$flash("Не удалось выслать смс с подтверждением")}}}};const M=(0,S.Z)(q,[["render",w],["__scopeId","data-v-38480332"]]);var N=M}}]);
//# sourceMappingURL=9028-legacy.3f78bd1b.js.map