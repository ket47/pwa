"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[6489],{6489:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var o=l(641),n=l(33);const a=e=>((0,o.Qi)("data-v-daea44fc"),e=e(),(0,o.jt)(),e),i={class:"header-image-container main-block"},s={class:"main-block-content",style:{transform:"rotate(-7deg)"}},r={class:"text",style:{color:"white"}},u=a((()=>(0,o.Lk)("h2",{style:{color:"rgb(235, 192, 0)","font-size":"42px",margin:"0",filter:"drop-shadow(-2px 2px 2px #042c4f)"}},"Узнайте преимущества",-1))),d=a((()=>(0,o.Lk)("h4",{style:{"font-size":"24px","margin-top":"5px"}},"работы с нашей платформой",-1))),c=a((()=>(0,o.Lk)("b",null,"Презентация",-1))),k={key:0},p=a((()=>(0,o.Lk)("h4",{style:{color:"var(--ion-color-primary)"}},"Регистрация нового продавца",-1)));function f(e,t,l,a,f,b){const h=(0,o.g2)("ion-button"),_=(0,o.g2)("ion-item"),m=(0,o.g2)("ion-input"),g=(0,o.g2)("router-link"),v=(0,o.g2)("ion-text"),C=(0,o.g2)("ion-checkbox"),F=(0,o.g2)("ion-card-title"),I=(0,o.g2)("ion-card-header"),y=(0,o.g2)("ion-card-content"),x=(0,o.g2)("ion-card"),$=(0,o.g2)("ion-icon"),L=(0,o.g2)("base-layout");return(0,o.uX)(),(0,o.Wv)(L,{"page-title":"Панель управления продавца"},{default:(0,o.k6)((()=>{var l;return[(0,o.Lk)("div",i,[(0,o.Lk)("div",s,[(0,o.Lk)("div",r,[u,d,(0,o.bF)(h,{color:"light",onClick:t[0]||(t[0]=t=>e.$go("/page/supplier-guide"))},{default:(0,o.k6)((()=>[c])),_:1})])])]),e.$heap.state.user.user_id>1?((0,o.uX)(),(0,o.CE)("div",k,[(0,o.bF)(_,{lines:"none"},{default:(0,o.k6)((()=>[p])),_:1}),(0,o.bF)(_,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,{modelValue:f.store_name,"onUpdate:modelValue":t[1]||(t[1]=e=>f.store_name=e),label:"Название магазина или ресторана*",labelPlacement:"stacked",placeholder:"Название*"},null,8,["modelValue"])])),_:1}),(0,o.bF)(_,{lines:"none"},{default:(0,o.k6)((()=>[(0,o.bF)(v,{style:{"font-size":"0.9em"}},{default:(0,o.k6)((()=>[(0,o.eW)(" Я согласен(на) на условия "),(0,o.bF)(g,{to:"/page/rules-supplier"},{default:(0,o.k6)((()=>[(0,o.eW)("Договора оказания услуг")])),_:1})])),_:1}),(0,o.bF)(C,{slot:"end",modelValue:f.contractAccepted,"onUpdate:modelValue":t[2]||(t[2]=e=>f.contractAccepted=e),"aria-label":""},null,8,["modelValue"])])),_:1}),(0,o.bF)(h,{expand:"block",onClick:t[3]||(t[3]=e=>b.itemCreate()),disabled:!f.contractAccepted||!f.store_name},{default:(0,o.k6)((()=>[(0,o.eW)("Стать продавцом")])),_:1},8,["disabled"])])):((0,o.uX)(),(0,o.Wv)(x,{key:1,color:"light"},{default:(0,o.k6)((()=>[(0,o.bF)(I,null,{default:(0,o.k6)((()=>[(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.eW)("Необходимо зарегистрироваться")])),_:1})])),_:1}),(0,o.bF)(y,null,{default:(0,o.k6)((()=>[(0,o.eW)(" Чтобы стать продавцом, нужно быть зарегистрированным пользователем. Вы можете зарегистрироваться за 2 минуты. "),(0,o.bF)(h,{expand:"block",onClick:t[4]||(t[4]=t=>e.$go("/user/sign-up"))},{default:(0,o.k6)((()=>[(0,o.eW)("Зарегистрироваться")])),_:1})])),_:1})])),_:1})),(null===(l=f.storeList)||void 0===l?void 0:l.length)>0?((0,o.uX)(),(0,o.Wv)(x,{key:2,color:"light"},{default:(0,o.k6)((()=>[(0,o.bF)(I,null,{default:(0,o.k6)((()=>[(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.eW)("Зарегистрированые магазины")])),_:1})])),_:1}),(0,o.bF)(y,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(f.storeList,(t=>((0,o.uX)(),(0,o.Wv)(_,{key:t.store_id,detail:"",button:"",onClick:l=>e.$go(`/catalog/store-edit-${t.store_id}`)},{default:(0,o.k6)((()=>[(0,o.bF)($,{icon:a.storefrontOutline,slot:"start"},null,8,["icon"]),(0,o.eW)(" "+(0,n.v_)(t.store_name||t.store_name_new||"- - -"),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):(0,o.Q3)("",!0)]})),_:1})}var b=l(972),h=l(5480),_=(l(2311),l(5538),l(8701)),m={components:{IonInput:b.$w,IonCard:b.b_,IonCardHeader:b.ME,IonCardTitle:b.tN,IonCardContent:b.I9,IonItem:b.uz,IonButton:b.Jm,IonCheckbox:b.eY,IonText:b.IO,IonIcon:b.iq},setup(){return{storefrontOutline:h.te8}},data(){return{supprier:_.A.supplier.status,store_name:null,contractAccepted:0,storeList:null}},mounted(){const e=this;this.listGet(),this.$topic.on("userGet",(function(){e.storeList||e.listGet()}))},methods:{async itemCreate(){try{if(!this.store_name)return void this.$flash("Название обязательно");const e=await _.A.supplier.storeItemCreate(this.store_name);if(!e)return void this.$flash("Не удалось создать магазин или ресторан");this.$go(`/catalog/store-edit-${e}`)}catch(l){var e,t;const o=null===(e=l.responseJSON)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.error;"limit_exeeded"==o&&this.$flash("У вас зарегистрировано максимальное количество магазинов"),this.$flash("Не удалось создать магазин или ресторан")}},async listGet(){this.storeList=await _.A.supplier.listGet()}}},g=l(6262);const v=(0,g.A)(m,[["render",f],["__scopeId","data-v-daea44fc"]]);var C=v}}]);
//# sourceMappingURL=6489.8e2f448f.js.map