"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[59],{5975:function(t,l,e){e.d(l,{Z:function(){return p}});var n=e(6252),i=e(3577);const u=(0,n.Uk)(" Чтобы вовремя узнавать об изменениях статусов заказов, подпишитесь на уведомления "),o=(0,n.Uk)("Подписаться"),r=(0,n.Uk)(" Уведомления не поддерживаются этим устройством. ");function a(t,l,e,a,s,c){const d=(0,n.up)("ion-button"),m=(0,n.up)("ion-card-content"),f=(0,n.up)("ion-card"),w=(0,n.up)("ion-icon"),p=(0,n.up)("ion-item");return(0,n.wg)(),(0,n.iD)(n.HY,null,["default"==s.permission?((0,n.wg)(),(0,n.j4)(f,{key:0,color:"light"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[u,(0,n._)("p",null,[(0,n.Wm)(d,{onClick:l[0]||(l[0]=t=>c.subscribe()),expand:"block"},{default:(0,n.w5)((()=>[o])),_:1})])])),_:1})])),_:1})):(0,n.kq)("",!0),"denied"==s.permission?((0,n.wg)(),(0,n.j4)(f,{key:1},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{src:a.notificationsOffOutline,color:"primary",slot:"start"},null,8,["src"]),(0,n.Uk)(" Уведомления от нашего сайта были заблокированы вами. Для полноценной работы приложения, рекомендуем влючить уведомления от сайта "+(0,i.zw)(t.$heap.state.hostname)+" в настройках вашего браузера. ",1)])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),"notsupported"==s.permission?((0,n.wg)(),(0,n.j4)(p,{key:2,lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{src:a.notificationsOffOutline,color:"primary",slot:"start"},null,8,["src"]),r])),_:1})):(0,n.kq)("",!0),(0,n.kq)("",!0)],64)}var s=e(351),c=e(8903),d=e(3716),m={components:{IonButton:d.YG,IonCard:d.PM,IonCardContent:d.FN,IonIcon:d.gu,IonItem:d.Ie},setup(){return{notificationsOutline:c.iZ5,notificationsOffOutline:c.nZf}},data(){let t="Notification"in window?Notification.permission:"notsupported";return{permission:t,wasRejected:0}},methods:{async subscribe(){if("Notification"in window)try{this.permission=await Notification.requestPermission(),"granted"==this.permission&&s.Z.firebase.saveNotificationToken()}catch(t){this.$flash("Вы не разрешили уведомлять вас")}else this.$flash("Ваше устройство не поддерживает уведомления")},reject(){localStorage.pushNotificationsWasRejected=this.wasRejected=1}}},f=e(3744);const w=(0,f.Z)(m,[["render",a]]);var p=w},1059:function(t,l,e){e.r(l),e.d(l,{default:function(){return pt}});var n=e(6252),i=e(3577);const u=t=>((0,n.dD)("data-v-7dffb9d4"),t=t(),(0,n.Cn)(),t),o={class:"user-dashboard-header"},r=(0,n.Uk)("Выйти"),a=(0,n.Uk)("Войти"),s=(0,n.Uk)("Зарегистрироваться"),c=(0,n.Uk)("Пользователь"),d=(0,n.Uk)("Мои адреса"),m=(0,n.Uk)("Мои заказы"),f=(0,n.Uk)("Мои скидки"),w=(0,n.Uk)("Мои чеки"),p=(0,n.Uk)("Мои карты"),k=(0,n.Uk)("Телеграм бот "),_=u((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),W=(0,n.Uk)("Администратор"),h=(0,n.Uk)("Редактирование страниц"),g=(0,n.Uk)("Модерация элементов"),b=(0,n.Uk)("Список тарифов"),y=(0,n.Uk)("Бухгалтерия"),O=(0,n.Uk)("Курьер"),C={key:0},U=(0,n.Uk)("Смена активна"),v=(0,n.Uk)("Вы можете брать задания на доставку "),I=u((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),$={key:1},S=(0,n.Uk)("Смена закрыта"),j=(0,n.Uk)("Воспользуйтесь telegram ботом "),D=u((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),Z=(0,n.Uk)(", чтобы начать смену"),q={key:2},z=(0,n.Uk)("Выполняется задание"),L=(0,n.Uk)("В процессе доставки заказа "),x=u((()=>(0,n._)("a",{href:"https://t.me/tezkelbot",target:"_new"},"@tezkelbot",-1))),N={key:3},T=(0,n.Uk)("Пока вы не курьер"),A=(0,n.Uk)("Подайте заявку, чтобы стать курьером"),G=(0,n.Uk)("Стать курьером"),H={key:4},M=(0,n.Uk)("Анкета курьера"),R=(0,n.Uk)("Статистика"),B=(0,n.Uk)("Продавец"),Y={key:0},E={key:1},P=(0,n.Uk)("Статистика"),X={key:2},F=(0,n.Uk)("Пока вы не продавец"),K=(0,n.Uk)("Зарегистрируйте свой магазин или ресторан"),V=(0,n.Uk)("Стать продавцом"),J=(0,n.Uk)("Информация"),Q=(0,n.Uk)("О нас"),tt=(0,n.Uk)("Контакты"),lt=(0,n.Uk)("Правила пользования"),et=(0,n.Uk)("Правила пользования для продавца"),nt=(0,n.Uk)("Правила пользования для курьера"),it=(0,n.Uk)("Политика конфиденциальности");function ut(t,l,e,u,ut,ot){const rt=(0,n.up)("ion-img"),at=(0,n.up)("ion-avatar"),st=(0,n.up)("ion-label"),ct=(0,n.up)("ion-icon"),dt=(0,n.up)("router-link"),mt=(0,n.up)("ion-item"),ft=(0,n.up)("ion-list"),wt=(0,n.up)("msg-subscription-comp"),pt=(0,n.up)("ion-item-divider"),kt=(0,n.up)("ion-item-group"),_t=(0,n.up)("ion-note"),Wt=(0,n.up)("ion-text"),ht=(0,n.up)("ion-button"),gt=(0,n.up)("ion-skeleton-text"),bt=(0,n.up)("base-layout");return(0,n.wg)(),(0,n.j4)(bt,{"page-title":"Личный кабинет"},{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n.Wm)(ft,null,{default:(0,n.w5)((()=>[ot.isSignedIn?((0,n.wg)(),(0,n.j4)(mt,{key:0,lines:"full",class:"avatar-row"},{default:(0,n.w5)((()=>[(0,n.Wm)(at,{slot:"start"},{default:(0,n.w5)((()=>[ut.user.user_avatar_name?((0,n.wg)(),(0,n.j4)(rt,{key:0,src:t.$heap.state.hostname+"img/avatar/"+ut.user.user_avatar_name+".png"},null,8,["src"])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(ut.user.user_name),1)])),_:1}),(0,n.Wm)(st,{slot:"end"},{default:(0,n.w5)((()=>[(0,n.Wm)(dt,{class:"section-button",to:"/user/user-edit",slot:"end"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.settingsOutline},null,8,["icon"])])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),ot.isSignedIn?((0,n.wg)(),(0,n.j4)(mt,{key:1,onClick:ot.signOut,lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.exitOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[r])),_:1})])),_:1},8,["onClick"])):((0,n.wg)(),(0,n.j4)(mt,{key:2,lines:"full",button:"",detail:"",onClick:l[0]||(l[0]=l=>t.$router.push("/user/sign-in"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.logInOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[a])),_:1})])),_:1})),ot.isSignedIn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(mt,{key:3,lines:"full",button:"",detail:"",onClick:l[1]||(l[1]=l=>t.$router.push("/user/sign-up"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.personAddOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[s])),_:1})])),_:1}))])),_:1})]),(0,n.Wm)(wt),(0,n.Wm)(ft,null,{default:(0,n.w5)((()=>[ot.isSignedIn?((0,n.wg)(),(0,n.j4)(kt,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[c])),_:1})])),_:1}),(0,n._)("div",null,[(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[2]||(l[2]=l=>t.$router.push("/user/user-addresses"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.locationOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[d])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[3]||(l[3]=l=>t.$router.push("/order/order-list"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.cartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[m])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[4]||(l[4]=l=>t.$router.push("/user/user-promo"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.giftOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[f])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[5]||(l[5]=l=>t.$router.push("/user/user-invoice"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.receiptOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[w])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[6]||(l[6]=l=>t.$router.push("/user/user-cards")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.cardOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[p])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",href:"https://t.me/tezkelbot",target:"_new"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.chatboxEllipsesOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[k,_])),_:1})])),_:1})]),ot.isAdmin?((0,n.wg)(),(0,n.j4)(kt,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[W])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[7]||(l[7]=l=>t.$router.push("/admin/text-list")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.documentTextOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[h])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[8]||(l[8]=l=>t.$router.push("/admin/list-moderation")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.ribbonOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[g])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[9]||(l[9]=l=>t.$router.push("/admin/tariff-list")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.briefcaseOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[b])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[10]||(l[10]=l=>t.$router.push("/admin/accounting")),lines:"full",button:"",detail:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.pieChartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[y])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0)])),_:1})):(0,n.kq)("",!0),ot.isSignedIn?((0,n.wg)(),(0,n.j4)(kt,{key:1},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[O])),_:1})])),_:1}),"ready"==ut.courierStatus?((0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-success-tint)"},lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[v,I])),_:1})])),_:1})])),_:1})])):"idle"==ut.courierStatus?((0,n.wg)(),(0,n.iD)("div",$,[(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-warning-tint)"},lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[S])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[j,D,Z])),_:1})])),_:1})])),_:1})])):"busy"==ut.courierStatus?((0,n.wg)(),(0,n.iD)("div",q,[(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-warning-tint)"},lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[z])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[L,x])),_:1})])),_:1})])),_:1}),(0,n.Wm)(mt,{style:{"--background":"var(--ion-color-warning-tint)"},button:"",lines:"full"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.rocketOutline,slot:"start"},null,8,["icon"])])),_:1})])):(0,n.kq)("",!0),"notcourier"==ut.courierStatus?((0,n.wg)(),(0,n.iD)("div",N,[(0,n.Wm)(mt,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[T])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[A])),_:1})])),_:1})])),_:1}),(0,n.Wm)(mt,{button:"",lines:"full",onClick:l[11]||(l[11]=l=>t.$router.push("/user/courier-dashboard"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.rocketOutline,slot:"start"},null,8,["icon"]),(0,n.Wm)(ht,{slot:"end",color:"light"},{default:(0,n.w5)((()=>[G])),_:1})])),_:1})])):((0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[12]||(l[12]=l=>t.$router.push("/user/courier-dashboard"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.documentTextOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[M])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[13]||(l[13]=l=>t.$router.push("/user/courier-statistics"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.pieChartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[R])),_:1})])),_:1})]))])),_:1})):(0,n.kq)("",!0),ot.isSignedIn?((0,n.wg)(),(0,n.j4)(kt,{key:2},{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[B])),_:1})])),_:1}),ut.storeList?ut.storeList.length>0?((0,n.wg)(),(0,n.iD)("div",E,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(ut.storeList,(l=>((0,n.wg)(),(0,n.j4)(mt,{key:l.store_id,detail:"",button:"",onClick:e=>t.$router.push(`/catalog/store-edit-${l.store_id}`)},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.storefrontOutline,slot:"start"},null,8,["icon"]),(0,n.Uk)(" "+(0,i.zw)(l.store_name||l.store_name_new||"- - -"),1)])),_:2},1032,["onClick"])))),128)),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[14]||(l[14]=l=>t.$router.push("/user/supplier-statistics"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.pieChartOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[P])),_:1})])),_:1})])):((0,n.wg)(),(0,n.iD)("div",X,[(0,n.Wm)(mt,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[F])),_:1}),(0,n.Wm)(_t,null,{default:(0,n.w5)((()=>[K])),_:1})])),_:1})])),_:1}),(0,n.Wm)(mt,{onClick:l[15]||(l[15]=l=>t.$router.push("/user/supplier-dashboard")),lines:"full"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.storefrontOutline,slot:"start"},null,8,["icon"]),(0,n.Wm)(ht,{slot:"end",color:"light"},{default:(0,n.w5)((()=>[V])),_:1})])),_:1})])):((0,n.wg)(),(0,n.iD)("div",Y,[(0,n.Wm)(mt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.storefrontOutline,slot:"start"},null,8,["icon"]),(0,n.Wm)(gt,{animated:""})])),_:1})]))])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(kt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(pt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(st,null,{default:(0,n.w5)((()=>[J])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[16]||(l[16]=l=>t.$router.push("/page/about-us"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[Q])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[17]||(l[17]=l=>t.$router.push("/page/contacts"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[tt])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[18]||(l[18]=l=>t.$router.push("/page/rules-customer"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[lt])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[19]||(l[19]=l=>t.$router.push("/page/rules-supplier"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[et])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[20]||(l[20]=l=>t.$router.push("/page/rules-courier"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[nt])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"full",button:"",detail:"",onClick:l[21]||(l[21]=l=>t.$router.push("/page/privacy_policy"))},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[it])),_:1})])),_:1}),(0,n.Wm)(mt,{lines:"none"},{default:(0,n.w5)((()=>[(0,n.Wm)(ct,{icon:u.informationCircleOutline,slot:"start",color:"primary"},null,8,["icon"]),(0,n.Wm)(Wt,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Версия приложения "+(0,i.zw)(ut.version),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var ot=e(3716),rt=e(8903),at=e(351),st=e(9042),ct=e(2008),dt=e(5975),mt={components:{IonIcon:ot.gu,IonAvatar:ot.BJ,IonImg:ot.Xz,IonLabel:ot.Q$,IonItem:ot.Ie,IonList:ot.q_,IonItemDivider:ot.rH,IonItemGroup:ot.Ub,IonNote:ot.uN,IonText:ot.yW,IonButton:ot.YG,IonSkeletonText:ot.CK,MsgSubscriptionComp:dt.Z},setup(){return{settingsOutline:rt.C$N,logInOutline:rt.Ohu,personCircleOutline:rt.XMB,exitOutline:rt.NmL,locationOutline:rt.Iv7,heartOutline:rt.gjX,helpCircle:rt.pvH,callOutline:rt.H7N,mailOutline:rt.xOl,cardOutline:rt.pvm,cartOutline:rt.Ox0,notifications:rt.N9d,chevronForwardOutline:rt.Dji,documentTextOutline:rt.L82,informationCircleOutline:rt.yo2,storefrontOutline:rt.qRG,chatboxEllipsesOutline:rt._Pt,giftOutline:rt._$o,personAddOutline:rt.$$h,ribbonOutline:rt.Muk,receiptOutline:rt.d71,rocketOutline:rt.G$D,briefcaseOutline:rt.SVL,pieChartOutline:rt.qlh}},data(){return{user:ct.Z.state.user,courierStatus:at.Z.courier.status,storeList:at.Z.supplier.storeList,version:this.toLocDateTime(document.lastModified)}},ionViewDidEnter(){at.Z.get("full")},mounted(){const t=this;st.Z.on("courierStatusChange",(l=>{t.courierStatus=l})),st.Z.on("userGet",(l=>{t.user=l,l.storeList&&(t.storeList=l.storeList)}))},computed:{isAdmin(){return at.Z.isAdmin()},isSignedIn(){var t;return(null===(t=this.user)||void 0===t?void 0:t.user_id)>0}},methods:{async signOut(){await at.Z.signOut(),this.user=await at.Z.get()},async courierStatusSet(t){try{await at.Z.courier.updateStatus(t)}catch(l){409==l.status&&this.$flash("Анкета удалена или не активна")}},toLocDateTime(t){const l=new Date(Date.parse(t)),e={month:"short",day:"numeric",hour:"numeric",hc:"h24",minute:"numeric",year:"numeric"};return l.toLocaleDateString("ru-RU",e)}},watch:{$route(t,l){t.path!=l.path&&(this.user=ct.Z.state.user)},courierStatus(t){"ready"==t||"busy"==t?at.Z.geo.trackingStart():at.Z.geo.trackingStop()}}},ft=e(3744);const wt=(0,ft.Z)(mt,[["render",ut],["__scopeId","data-v-7dffb9d4"]]);var pt=wt}}]);
//# sourceMappingURL=59.ca33d3b0.js.map