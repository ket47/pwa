"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[957],{4535:function(e,t,l){l.d(t,{Z:function(){return v}});var n=l(6252),a=l(3577);const u=(0,n.Uk)("Баланс"),o=(0,n.Uk)("Настройки"),i=(0,n.Uk)("Начальная дата"),d={slot:"end",style:{display:"grid","grid-template-columns":"120px 100px"}},r=(0,n.Uk)("Обороты"),s={slot:"end",style:{display:"grid","grid-template-columns":"120px 100px"}},c=(0,n.Uk)("Конечная дата"),m={slot:"end",style:{display:"grid","grid-template-columns":"120px 100px"}},p=(0,n.Uk)(" Нет операций в данном периоде ");function g(e,t,l,g,w,_){const h=(0,n.up)("ion-title"),f=(0,n.up)("ion-text"),k=(0,n.up)("ion-item"),y=(0,n.up)("ion-list"),W=(0,n.up)("ion-icon"),I=(0,n.up)("ion-input"),v=(0,n.up)("ion-accordion"),b=(0,n.up)("ion-accordion-group"),$=(0,n.up)("ion-searchbar"),U=(0,n.up)("ion-skeleton-text"),C=(0,n.up)("ion-label");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[u])),_:1}),w.balance>0?((0,n.wg)(),(0,n.j4)(f,{key:0,slot:"end",color:"success"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(w.balance)+(0,a.zw)(e.$heap.state.currencySign),1)])),_:1})):((0,n.wg)(),(0,n.j4)(f,{key:1,slot:"end"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(w.balance)+(0,a.zw)(e.$heap.state.currencySign),1)])),_:1}))])),_:1})])),_:1}),(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,{slot:"header"},{default:(0,n.w5)((()=>[(0,n.Wm)(W,{icon:g.settingsOutline,slot:"start"},null,8,["icon"]),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[o])),_:1})])),_:1}),(0,n.Wm)(y,{slot:"content"},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{color:"light"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[i])),_:1}),(0,n._)("div",d,[(0,n.Wm)(I,{type:"date",modelValue:w.start_at,"onUpdate:modelValue":t[0]||(t[0]=e=>w.start_at=e),onIonChange:t[1]||(t[1]=e=>_.listGet())},null,8,["modelValue"]),w.meta.sum_start?((0,n.wg)(),(0,n.j4)(I,{key:0,type:"text",style:{"text-align":"right"},color:"medium",value:`${w.meta.sum_start}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,n.kq)("",!0)])])),_:1}),(0,n.Wm)(k,{color:"light"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[r])),_:1}),(0,n._)("div",s,[w.meta.sum_debit?((0,n.wg)(),(0,n.j4)(I,{key:0,type:"text",style:{"text-align":"right"},color:"medium",value:`+${w.meta.sum_debit}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,n.kq)("",!0),w.meta.sum_credit?((0,n.wg)(),(0,n.j4)(I,{key:1,type:"text",style:{"text-align":"right"},color:"medium",value:`-${w.meta.sum_credit}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,n.kq)("",!0)])])),_:1}),(0,n.Wm)(k,{color:"light"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[c])),_:1}),(0,n._)("div",m,[(0,n.Wm)(I,{type:"date",modelValue:w.finish_at,"onUpdate:modelValue":t[2]||(t[2]=e=>w.finish_at=e)},null,8,["modelValue"]),w.meta.sum_finish?((0,n.wg)(),(0,n.j4)(I,{key:0,type:"text",style:{"text-align":"right"},color:"medium",value:`${w.meta.sum_finish}${e.$heap.state.currencySign}`,readonly:""},null,8,["value"])):(0,n.kq)("",!0)])])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)($,{modelValue:w.q,"onUpdate:modelValue":t[3]||(t[3]=e=>w.q=e),placeholder:"Поиск по сумме или описанию",onIonChange:t[4]||(t[4]=e=>_.listGet())},null,8,["modelValue"]),null==w.ledger?((0,n.wg)(),(0,n.j4)(y,{key:0},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)([1,2,3],(e=>(0,n.Wm)(k,{key:e},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{slot:"start"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,{animated:"",style:{width:"50px"}})])),_:1}),(0,n.Wm)(C,null,{default:(0,n.w5)((()=>[(0,n.Wm)(U,{animated:"",style:{width:"100%"}})])),_:1}),(0,n.Wm)(C,{slot:"end",color:"success"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,{animated:"",style:{width:"50px"}})])),_:1})])),_:2},1024))),64))])),_:1})):w.ledger.length>0?((0,n.wg)(),(0,n.j4)(y,{key:1},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.ledgerCalc,(e=>((0,n.wg)(),(0,n.j4)(k,{key:e.trans_id,onClick:t=>_.itemClick(e.trans_id),detail:_.is_admin},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{slot:"start"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.date),1)])),_:2},1024),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.trans_description),1)])),_:2},1024),1==e.is_debit?((0,n.wg)(),(0,n.j4)(C,{key:0,slot:"end",color:"success"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.trans_amount),1)])),_:2},1024)):((0,n.wg)(),(0,n.j4)(C,{key:1,slot:"end",color:"danger"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.trans_amount),1)])),_:2},1024))])),_:2},1032,["onClick","detail"])))),128))])),_:1})):((0,n.wg)(),(0,n.j4)(y,{key:2},{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[p])),_:1})])),_:1}))])}var w=l(2066),_=l(8903),h=l(9755),f=l.n(h),k=l(351),y={components:{IonIcon:w.gu,IonTitle:w.wd,IonLabel:w.Q$,IonItem:w.Ie,IonInput:w.pK,IonList:w.q_,IonAccordion:w.We,IonAccordionGroup:w.eh,IonText:w.yW,IonSkeletonText:w.CK,IonSearchbar:w.VI},props:["account"],setup(){return{settingsOutline:_.C$N}},data(){const e=new Date,t=new Date(Date.parse(`${e.getFullYear()}-${e.getMonth()+1}-1`));return{balance:"-",start_at:t.toISOString().slice(0,10),finish_at:e.toISOString().slice(0,10),q:"",ledger:null,meta:{},today:e}},computed:{ledgerCalc(){if(null==this.ledger)return null;let e=[];for(let t of this.ledger)t.date=this.toLocDate(t.trans_date),e.push(t);return e},is_admin(){return k.Z.isAdmin()}},watch:{account:function(){this.listGet()}},methods:{async listGet(){try{const e={start_at:this.start_at,finish_at:this.finish_at,account:this.account,q:this.q},t=await f().post(`${this.$heap.state.hostname}Transaction/listGet`,e);this.ledger=t.ledger,this.meta=t.meta,this.finish_at==this.today.toISOString().slice(0,10)&&(this.balance=t.meta.sum_finish)}catch(e){const t=e.responseJSON,l=t.messages.error;switch(l){case"no_account":this.$flash("Ошибка получения выписки");break;case"large_interval":this.$flash("Период должен быть не больше 3 месяцев");break}return this.ledger=[],this.balance=0,!1}},toLocDate(e){const t=new Date(Date.parse(e)),l={month:"short",day:"numeric"};return t.toLocaleDateString(void 0,l)},itemClick(e){k.Z.isAdmin()&&this.$router.push(`/admin/transaction-edit-${e}`)}},mounted(){this.listGet()}},W=l(3744);const I=(0,W.Z)(y,[["render",g]]);var v=I},2957:function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var n=l(6252);const a=(0,n.Uk)(" Проводки "),u={key:0},o=(0,n.Uk)("Выписка по счету"),i=(0,n.Uk)("Счет"),d=(0,n.Uk)("Прибыль"),r=(0,n.Uk)("Продавцы"),s=(0,n.Uk)("Курьеры"),c=(0,n.Uk)("Добавить проводку");function m(e,t,l,m,p,g){const w=(0,n.up)("ion-segment-button"),_=(0,n.up)("ion-segment"),h=(0,n.up)("ion-card-title"),f=(0,n.up)("ion-card-header"),k=(0,n.up)("ion-label"),y=(0,n.up)("ion-select-option"),W=(0,n.up)("ion-select"),I=(0,n.up)("ion-item"),v=(0,n.up)("ion-icon"),b=(0,n.up)("ion-list"),$=(0,n.up)("ion-card-content"),U=(0,n.up)("ion-card"),C=(0,n.up)("ledger-comp"),x=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(x,{pageDefaultBackLink:"/user","page-title":"Бухгалтерия"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{"swipe-gesture":"true",modelValue:p.activeTab,"onUpdate:modelValue":t[0]||(t[0]=e=>p.activeTab=e),onIonChange:t[1]||(t[1]=t=>e.listTypeChanged(t))},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{value:"ledger"},{default:(0,n.w5)((()=>[a])),_:1})])),_:1},8,["modelValue"]),"ledger"==p.activeTab?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[o])),_:1})])),_:1}),(0,n.Wm)($,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(I,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(W,{modelValue:p.ledgerAccount,"onUpdate:modelValue":t[2]||(t[2]=e=>p.ledgerAccount=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{value:"profit"},{default:(0,n.w5)((()=>[d])),_:1}),(0,n.Wm)(y,{value:"supplier"},{default:(0,n.w5)((()=>[r])),_:1}),(0,n.Wm)(y,{value:"courier"},{default:(0,n.w5)((()=>[s])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(I,{button:"",detail:"",onClick:t[3]||(t[3]=e=>g.itemCreate())},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{slot:"start",src:m.addOutline},null,8,["src"]),(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[c])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(C,{account:p.ledgerAccount,holder:p.ledgerHolder,holderId:p.ledgerHolderId},null,8,["account","holder","holderId"])])):(0,n.kq)("",!0)])),_:1})}var p=l(2066),g=l(8903),w=(l(9755),l(4535)),_={components:{LedgerComp:w.Z,IonSegmentButton:p.GO,IonSegment:p.cJ,IonSelect:p.t9,IonSelectOption:p.n0,IonList:p.q_,IonItem:p.Ie,IonLabel:p.Q$,IonCard:p.PM,IonCardHeader:p.Zi,IonCardTitle:p.Dq,IonCardContent:p.FN,IonIcon:p.gu},setup(){return{addOutline:g.s6O}},data(){return{activeTab:"ledger",ledgerAccount:"supplier",ledgerHolder:null,ledgerHolderId:null}},computed:{},methods:{itemCreate(){this.$router.push("/admin/transaction-edit-0")}}},h=l(3744);const f=(0,h.Z)(_,[["render",m],["__scopeId","data-v-5e95aff8"]]);var k=f}}]);
//# sourceMappingURL=957.17d46f3c.js.map