"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[6688],{1776:function(t,l,e){e.d(l,{Z:function(){return k}});var n=e(6252);const u=(0,n.Uk)(" Чтобы вовремя узнавать об изменениях статусов заказов, подпишитесь на уведомления "),i=(0,n.Uk)("Подписаться"),o=(0,n._)("p",null," Уведомления от нашего сайта были заблокированы вами. Для полноценной работы приложения рекомендуем влючить уведомления от сайта tezkel.com в настройках вашего браузера. ",-1),r=(0,n._)("p",null," Уведомления не поддерживаются этим устройством. ",-1),a=(0,n._)("p",null," Уведомления включены ",-1);function s(t,l,e,s,c,d){const m=(0,n.up)("ion-button"),f=(0,n.up)("ion-card-content"),w=(0,n.up)("ion-card");return(0,n.wg)(),(0,n.iD)(n.HY,null,["default"==c.permission?((0,n.wg)(),(0,n.j4)(w,{key:0,color:"light"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[u,(0,n._)("p",null,[(0,n.Wm)(m,{onClick:l[0]||(l[0]=t=>d.subscribe()),expand:"block"},{default:(0,n.w5)((()=>[i])),_:1})])])),_:1})])),_:1})):(0,n.kq)("",!0),"denied"==c.permission?((0,n.wg)(),(0,n.j4)(w,{key:1},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[o])),_:1})])),_:1})):(0,n.kq)("",!0),"notsupported"==c.permission?((0,n.wg)(),(0,n.j4)(w,{key:2},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[r])),_:1})])),_:1})):(0,n.kq)("",!0),"granted"==c.permission?((0,n.wg)(),(0,n.j4)(w,{key:3},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[a])),_:1})])),_:1})):(0,n.kq)("",!0)],64)}var c=e(8534),d=e(351),m=e(8292),f={components:{IonButton:m.YG,IonCard:m.PM,IonCardContent:m.FN},data(){let t="Notification"in window?Notification.permission:"notsupported";return{permission:t,wasRejected:0}},methods:{subscribe(){var t=this;return(0,c.Z)((function*(){if("Notification"in window)try{t.permission=yield Notification.requestPermission(),"granted"==t.permission&&d.Z.firebase.saveNotificationToken()}catch(l){t.$flash("Вы не разрешили уведомлять вас")}else t.$flash("Ваше устройство не поддерживает уведомления")}))()},reject(){localStorage.pushNotificationsWasRejected=this.wasRejected=1}}},w=e(3744);const p=(0,w.Z)(f,[["render",s]]);var k=p},6688:function(t,l,e){e.r(l),e.d(l,{default:function(){return kt}});var n=e(6252),u=e(3577);const i=t=>((0,n.dD)("data-v-023337a9"),t=t(),(0,n.Cn)(),t),o={class:"user-dashboard-header"},r=(0,n.Uk)("Выйти"),a=(0,n.Uk)("Войти"),s=(0,n.Uk)("Зарегистрироваться"),c=(0,n.Uk)("Пользователь"),d=(0,n.Uk)("Мои адреса"),m=(0,n.Uk)("Мои заказы"),f=(0,n.Uk)("Мои скидки"),w=(0,n.Uk)("Мои чеки"),p=(0,n.Uk)("Мои карты"),k=(0,n.Uk)("Телеграм бот "),_=i((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),W=(0,n.Uk)("Администратор"),g=(0,n.Uk)("Редактирование страниц"),h=(0,n.Uk)("Модерация элементов"),b=(0,n.Uk)("Список тарифов"),y=(0,n.Uk)("Бухгалтерия"),O=(0,n.Uk)("Курьер"),C={key:0},U=(0,n.Uk)("Смена активна"),v=(0,n.Uk)("Вы можете брать задания на доставку "),$=i((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),I={key:1},S=(0,n.Uk)("Смена закрыта"),Z=(0,n.Uk)("Воспользуйтесь telegram ботом "),j=i((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),D=(0,n.Uk)(", чтобы начать смену"),q={key:2},z=(0,n.Uk)("Выполняется задание"),L=(0,n.Uk)("В процессе доставки заказа "),x=i((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),N={key:3},T=(0,n.Uk)("Пока вы не курьер"),A=(0,n.Uk)("Подайте заявку, чтобы стать курьером"),G=(0,n.Uk)("Стать курьером"),H={key:4},M=(0,n.Uk)("Анкета курьера"),R=(0,n.Uk)("Статистика"),B=(0,n.Uk)("Продавец"),E={key:0},Y={key:1},K=(0,n.Uk)("Статистика"),P={key:2},X=(0,n.Uk)("Пока вы не продавец"),F=(0,n.Uk)("Зарегистрируйте свой магазин или ресторан"),V=(0,n.Uk)("Стать продавцом"),J=(0,n.Uk)("Информация"),Q=(0,n.Uk)("О нас"),tt=(0,n.Uk)("Контакты"),lt=(0,n.Uk)("Правила пользования"),et=(0,n.Uk)("Правила пользования для продавца"),nt=(0,n.Uk)("Правила пользования для курьера"),ut=(0,n.Uk)("Политика конфиденциальности");function it(t,l,e,i,it,ot){const rt=(0,n.up)("ion-img"),at=(0,n.up)("ion-avatar"),st=(0,n.up)("ion-label"),ct=(0,n.up)("ion-icon"),dt=(0,n.up)("router-link"),mt=(0,n.up)("ion-item"),ft=(0,n.up)("ion-list"),wt=(0,n.up)("msg-subscription-comp"),pt=(0,n.up)("ion-item-divider"),kt=(0,n.up)("ion-item-group"),_t=(0,n.up)("ion-note"),Wt=(0,n.up)("ion-text"),gt=(0,n.up)("ion-button"),ht=(0,n.up)("ion-skeleton-text"),bt=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(bt,{"page-title":"Личный кабинет"},{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n.Wm)(ft,null,{default:(0,n.w5)((()=>[ot.isSignedIn?((0,n.wg)(),(0,n.j4)(mt,{key:0,lines:"full",class:"avatar-row"},{default:(0,n.w5)((()=>[(0,n.Wm)(at,{slot:"start"},{default:(0,n.w5)((()=>[it.user.user_avatar_name?((0,n.wg)(),(0,n.j4)(rt,{key:0,src:t.$heap.state.hostname+"img/avatar/"+it.user.user_avatar_name+".png"},null,8,["src"])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(it.user.user_name),1)])),_:1}),(0,n.Wm)(st,{slot:"end"},{default:(0,n.w5)((()=>[(0,n.Wm)(dt,{class:"section-button",to:"/user/user-edit",slot:"end"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.settingsOutline},null,8,["icon"])])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),ot.isSignedIn?((0,n.wg)(),(0,n.j4)(mt,{key:1,onClick:ot.signOut,lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.exitOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[r])),_:1})])),_:1},8,["onClick"])):((0,n.wg)(),(0,n.j4)(mt,{key:2,lines:"full",button:"",detail:"",onClick:l[0]||(l[0]=l=>t.$router.push("sign-in"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.logInOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[a])),_:1})])),_:1})),ot.isSignedIn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(mt,{key:3,lines:"full",button:"",detail:"",onClick:l[1]||(l[1]=l=>t.$router.push("sign-up"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.personAddOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[s])),_:1})])),_:1}))])),_:1})]),(0,n.Wm)(wt),(0,n.Wm)(ft,null,{default:(0,n.w5)((()=>[ot.isSignedIn?((0,n.wg)(),(0,n.j4)(kt,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[c])),_:1})])),_:1}),(0,n._)("div",null,[(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[2]||(l[2]=l=>t.$router.push("/user/user-addresses"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.locationOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[d])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[3]||(l[3]=l=>t.$router.push("/order/order-list"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.cartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[m])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[4]||(l[4]=l=>t.$router.push("/user/user-promo"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.giftOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[f])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[5]||(l[5]=l=>t.$router.push("/user/user-invoice"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.receiptOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[w])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[6]||(l[6]=l=>t.$router.push("/user/user-cards")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.cardOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[p])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",href:"https://t.me/tezkelbot",target:"_new"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.chatboxEllipsesOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[k,_])),_:1})])),_:1})]),ot.isAdmin?((0,n.wg)(),(0,n.j4)(kt,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[W])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[7]||(l[7]=l=>t.$router.push("text-list")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.documentTextOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[g])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[8]||(l[8]=l=>t.$router.push("admin-moderation")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.ribbonOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[h])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[9]||(l[9]=l=>t.$router.push("/user/admin-tariff-list")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.briefcaseOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[b])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[10]||(l[10]=l=>t.$router.push("/admin/accounting")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.pieChartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[y])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0)])),_:1})):(0,n.kq)("",!0),ot.isSignedIn?((0,n.wg)(),(0,n.j4)(kt,{key:1},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[O])),_:1})])),_:1}),"ready"==it.courierStatus?((0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-success-tint)"},lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[v,$])),_:1})])),_:1})])),_:1})])):"idle"==it.courierStatus?((0,n.wg)(),(0,n.iD)("div",I,[(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-warning-tint)"},lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[S])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[Z,j,D])),_:1})])),_:1})])),_:1})])):"busy"==it.courierStatus?((0,n.wg)(),(0,n.iD)("div",q,[(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-warning-tint)"},lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[z])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[L,x])),_:1})])),_:1})])),_:1}),(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-warning-tint)"},button:"",lines:"full"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.rocketOutline,slot:"start"},null,8,["icon"])])),_:1})])):(0,n.kq)("",!0),"notcourier"==it.courierStatus?((0,n.wg)(),(0,n.iD)("div",N,[(0,n.Wm)(mt,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[T])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[A])),_:1})])),_:1})])),_:1}),(0,n.Wm)(mt,{button:"",lines:"full",onClick:l[11]||(l[11]=l=>t.$router.push("/user/courier-dashboard"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.rocketOutline,slot:"start"},null,8,["icon"]),(0,n.Wm)(gt,{slot:"end",color:"light"},{default:(0,n.w5)((()=>[G])),_:1})])),_:1})])):((0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[12]||(l[12]=l=>t.$router.push("/user/courier-dashboard"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.documentTextOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[M])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[13]||(l[13]=l=>t.$router.push("/user/courier-statistics"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.pieChartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[R])),_:1})])),_:1})]))])),_:1})):(0,n.kq)("",!0),ot.isSignedIn?((0,n.wg)(),(0,n.j4)(kt,{key:2},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[B])),_:1})])),_:1}),it.storeList?it.storeList.length>0?((0,n.wg)(),(0,n.iD)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(it.storeList,(l=>((0,n.wg)(),(0,n.j4)(mt,{key:l.store_id,detail:"",button:"",onClick:e=>t.$router.push(`/catalog/store-edit-${l.store_id}`)},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.storefrontOutline,slot:"start"},null,8,["icon"]),(0,n.Uk)(" "+(0,u.zw)(l.store_name||l.store_name_new||"- - -"),1)])),_:2},1032,["onClick"])))),128)),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[14]||(l[14]=l=>t.$router.push("/user/supplier-statistics"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.pieChartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[K])),_:1})])),_:1})])):((0,n.wg)(),(0,n.iD)("div",P,[(0,n.Wm)(mt,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[X])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[F])),_:1})])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[15]||(l[15]=l=>t.$router.push("/user/supplier-dashboard")),lines:"full"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.storefrontOutline,slot:"start"},null,8,["icon"]),(0,n.Wm)(gt,{slot:"end",color:"light"},{default:(0,n.w5)((()=>[V])),_:1})])),_:1})])):((0,n.wg)(),(0,n.iD)("div",E,[(0,n.Wm)(mt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.storefrontOutline,slot:"start"},null,8,["icon"]),(0,n.Wm)(ht,{animated:""})])),_:1})]))])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(kt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[J])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[16]||(l[16]=l=>t.$router.push("/page/about-us"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[Q])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[17]||(l[17]=l=>t.$router.push("/page/contacts"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[tt])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[18]||(l[18]=l=>t.$router.push("/page/rules-customer"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[lt])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[19]||(l[19]=l=>t.$router.push("/page/rules-supplier"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[et])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[20]||(l[20]=l=>t.$router.push("/page/rules-courier"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[nt])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[21]||(l[21]=l=>t.$router.push("/page/privacy_policy"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[ut])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:i.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Версия приложения "+(0,u.zw)(it.version),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var ot=e(8534),rt=e(8292),at=e(8903),st=e(351),ct=e(9042),dt=e(2008),mt=e(1776),ft={components:{IonIcon:rt.gu,IonAvatar:rt.BJ,IonImg:rt.Xz,IonLabel:rt.Q$,IonItem:rt.Ie,IonList:rt.q_,IonItemDivider:rt.rH,IonItemGroup:rt.Ub,IonNote:rt.uN,IonText:rt.yW,IonButton:rt.YG,IonSkeletonText:rt.CK,MsgSubscriptionComp:mt.Z},setup(){return{settingsOutline:at.C$N,logInOutline:at.Ohu,personCircleOutline:at.XMB,exitOutline:at.NmL,locationOutline:at.Iv7,heartOutline:at.gjX,helpCircle:at.pvH,callOutline:at.H7N,mailOutline:at.xOl,cardOutline:at.pvm,cartOutline:at.Ox0,notifications:at.N9d,chevronForwardOutline:at.Dji,documentTextOutline:at.L82,informationCircleOutline:at.yo2,storefrontOutline:at.qRG,chatboxEllipsesOutline:at._Pt,giftOutline:at._$o,personAddOutline:at.$$h,ribbonOutline:at.Muk,receiptOutline:at.d71,rocketOutline:at.G$D,briefcaseOutline:at.SVL,pieChartOutline:at.qlh}},data(){return{user:dt.Z.state.user,courierStatus:st.Z.courier.status,storeList:st.Z.supplier.storeList,version:this.toLocDateTime(document.lastModified)}},ionViewDidEnter(){st.Z.get("full")},mounted(){const t=this;ct.Z.on("courierStatusChange",(l=>{t.courierStatus=l})),ct.Z.on("userGet",(l=>{t.user=l,l.storeList&&(t.storeList=l.storeList)}))},computed:{isAdmin(){return st.Z.isAdmin()},isSignedIn(){var t;return(null===(t=this.user)||void 0===t?void 0:t.user_id)>0}},methods:{signOut(){var t=this;return(0,ot.Z)((function*(){yield st.Z.signOut(),t.user=yield st.Z.get()}))()},courierStatusSet(t){var l=this;return(0,ot.Z)((function*(){try{yield st.Z.courier.updateStatus(t)}catch(e){409==e.status&&l.$flash("Анкета удалена или не активна")}}))()},toLocDateTime(t){const l=new Date(Date.parse(t)),e={month:"short",day:"numeric",hour:"numeric",hc:"h24",minute:"numeric",year:"numeric",timeZone:"Europe/Kyiv"};return l.toLocaleDateString("ru-RU",e)}},watch:{$route(t,l){t.path!=l.path&&(this.user=dt.Z.state.user)},courierStatus(t){"ready"==t||"busy"==t?st.Z.geo.trackingStart():st.Z.geo.trackingStop()}}},wt=e(3744);const pt=(0,wt.Z)(ft,[["render",it],["__scopeId","data-v-023337a9"]]);var kt=pt}}]);
//# sourceMappingURL=6688-legacy.d9461af7.js.map