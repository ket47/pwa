"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[9078],{2562:function(t,e,o){o.d(e,{Z:function(){return _}});var l=o(6252),i=o(3577);const n={style:{position:"absolute",top:"30px",width:"100%","--ion-item-background":"#ffffffdd","border-radius":"10px"}},a={slot:"end",style:{color:"#666"}};function r(t,e,o,r,s,c){const d=(0,l.up)("ymap-marker"),u=(0,l.up)("yandex-map"),m=(0,l.up)("ion-searchbar"),h=(0,l.up)("ion-item"),p=(0,l.up)("ion-content"),_=(0,l.up)("ion-textarea"),g=(0,l.up)("ion-icon"),w=(0,l.up)("ion-button"),f=(0,l.up)("ion-toolbar");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{onClick:e[0]||(e[0]=t=>c.onClick(t)),style:{height:"100%"},coords:s.coords,zoom:16,settings:s.settings,controls:["zoomControl"]},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{coords:s.coords,"marker-id":"1",properties:s.placemarkProperties},null,8,["coords","properties"])])),_:1},8,["coords","settings"]),(0,l._)("div",n,[(0,l.Wm)(m,{debounce:"500",modelValue:s.addressSearchQuery,"onUpdate:modelValue":e[1]||(e[1]=t=>s.addressSearchQuery=t),onIonInput:e[2]||(e[2]=t=>c.suggestionsGet()),placeholder:"поиск по адресу",color:"light"},null,8,["modelValue"]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.suggestions,((t,e)=>((0,l.wg)(),(0,l.j4)(h,{key:e,onClick:e=>c.suggestionSelect(`${t.subtitle.text}, ${t.title.text}`,t.uri),style:{"margin-right":"10px","margin-left":"10px"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(t.subtitle.text)+" "+(0,i.zw)(t.title.text)+" ",1),(0,l._)("span",a,(0,i.zw)(t.distance.text),1)])),_:2},1032,["onClick"])))),128))])])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{label:"комментарий к адресу","label-placement":"floating",modelValue:s.addressComment,"onUpdate:modelValue":e[3]||(e[3]=t=>s.addressComment=t)},null,8,["modelValue"]),(0,l.Wm)(w,{strong:!0,onClick:e[4]||(e[4]=t=>c.pickAddress()),color:"primary",expand:"block"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{src:r.checkmark,slot:"start"},null,8,["src"]),(0,l.Uk)(" Ок ")])),_:1}),(0,l.Wm)(w,{onClick:e[5]||(e[5]=t=>r.closeModal()),color:"light",expand:"block"},{default:(0,l.w5)((()=>[(0,l.Uk)("Закрыть")])),_:1})])),_:1})],64)}o(7658);var s=o(4929),c=o(5836),d=o(8903),u=o(351),m={components:{IonContent:s.W2,IonToolbar:s.sr,IonButton:s.YG,IonSearchbar:s.VI,IonIcon:s.gu,IonItem:s.Ie,IonTextarea:s.g2,yandexMap:c.xR,ymapMarker:c.Jk},setup(){const t=function(){s.Fy.dismiss()};return{closeModal:t,locationOutline:d.Iv7,closeOutline:d.fID,checkmark:d.d29}},props:{location_group_name_low:String,location_group_id:Number},data(){let t=this.location_group_name_low+" адрес",e=this.$heap.state.settings.location,o=JSON.parse(e.mapCenter);return{settings:{apiKey:e.ymapApiKey,lang:"ru_RU",coordorder:"latlong",version:"2.1"},placemarkProperties:{iconCaption:t},suggestions:[],addressSearchQuery:null,markDeviceOnMap:!0,locationType:t,locSettings:e,selectedPlacemark:0,selectedAddress:"",selectedCoords:[],coords:o,addressComment:""}},methods:{async pickAddress(){try{if(!this.selectedAddress){var t;const e=await window.ymaps.geocode(this.coords);this.selectedAddress=null===(t=e.geoObjects.get(0))||void 0===t?void 0:t.getAddressLine()}}catch(o){}var e={location_address:this.filterAddress(this.selectedAddress),location_latitude:this.coords[0],location_longitude:this.coords[1],location_comment:this.addressComment};s.Fy.dismiss(e)},filterAddress(t){const e=this.locSettings.addressErase.split(", "),o=t.split(", ");let l=[];for(const i of o)e.find((t=>t==i))||l.push(i);return l.reverse().join(", ")},onClick(t){t&&t.get&&(this.markDeviceOnMap=!1,this.suggestions=[],this.selectedAddress=null,this.coords=t.get("coords"))},async suggestionsGet(){if(this.markDeviceOnMap=!1,this.addressSearchQuery)try{const t=this.$heap.state.settings.location.ymapSuggestionApiKey,e=this.coords.slice().reverse().join(","),o=await fetch(`https://suggest-maps.yandex.ru/v1/suggest?apikey=${t}&lang=ru_RU&ll=${e}&spn=1,1&attrs=uri&types=house&results=5&text=${this.addressSearchQuery}`),l=await o.json();this.suggestions=l.results||[]}catch{}else this.suggestions=[]},async suggestionSelect(t,e){this.selectedAddress=t,this.geocode(e)},async geocode(t){try{this.suggestions=[];const e=this.$heap.state.settings.location.ymapApiKey,o=await fetch(`https://geocode-maps.yandex.ru/1.x?apikey=${e}&format=json&results=1&uri=${t}`),l=await o.json(),i=l.response.GeoObjectCollection.featureMember[0].GeoObject;this.coords=i.Point.pos.split(" ").reverse()}catch(e){console.log(e)}}},async mounted(){await(0,c.xk)();const t=u.Z.geo.lastStoredGet();null!==t&&void 0!==t&&t.location_latitude&&(this.coords=[t.location_latitude,t.location_longitude]);const e=await u.Z.geo.get();if(this.markDeviceOnMap&&e){const{coords:t}=e;this.coords=[t.latitude,t.longitude],this.$flash("На карте отмечено ваше местоположение")}}},h=o(3744);const p=(0,h.Z)(m,[["render",r]]);var _=p},9078:function(t,e,o){o.r(e),o.d(e,{default:function(){return $}});var l=o(6252);function i(t,e,o,i,n,a){const r=(0,l.up)("shipment-draft-comp"),s=(0,l.up)("base-layout");return(0,l.wg)(),(0,l.j4)(s,{"page-title":"Вызов курьера"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{orderData:n.order,onStageCreate:a.onStageCreate,onOrderUpdate:a.itemUpdate,onLocationUpdate:a.locationUpdate},null,8,["orderData","onStageCreate","onOrderUpdate","onLocationUpdate"])])),_:1})}o(8862),o(7658);var n=o(9755),a=o.n(n),r=(o(1817),o(3577));const s=t=>((0,l.dD)("data-v-675aadbe"),t=t(),(0,l.Cn)(),t),c={key:0},d=s((()=>(0,l._)("h1",null,"Ваш заказ",-1))),u=s((()=>(0,l._)("p",null,[(0,l._)("b",null,"Курьер отвезет вашу посылку")],-1))),m={key:0},h={key:2},p={key:1},_=s((()=>(0,l._)("div",{slot:"end",style:{position:"relative",width:"120px","min-height":"48px","background-color":"var(--ion-color-light)"}},null,-1)));function g(t,e,o,i,n,a){const s=(0,l.up)("ion-label"),g=(0,l.up)("ion-item"),w=(0,l.up)("ion-textarea"),f=(0,l.up)("ion-item-divider"),k=(0,l.up)("ion-icon"),y=(0,l.up)("ion-img"),v=(0,l.up)("ion-thumbnail"),W=(0,l.up)("ion-text"),C=(0,l.up)("ion-chip"),S=(0,l.up)("ion-list"),D=(0,l.up)("ion-accordion"),b=(0,l.up)("ion-accordion-group"),L=(0,l.up)("ion-checkbox"),x=(0,l.up)("ion-card-content"),O=(0,l.up)("ion-card"),I=(0,l.up)("ion-button"),U=(0,l.up)("ion-col"),$=(0,l.up)("ion-row"),V=(0,l.up)("ion-grid"),j=(0,l.up)("ion-skeleton-text");return o.orderData?((0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(S,{lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[d,u])),_:1})])),_:1}),(0,l.Wm)(g,{lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{ref:"description",modelValue:n.orderLocal.order_description,"onUpdate:modelValue":e[0]||(e[0]=t=>n.orderLocal.order_description=t),rows:"5",label:"",placeholder:"напишите, что будем везти",style:{"background-color":"var(--ion-color-light)","border-radius":"10px"},onIonInput:e[1]||(e[1]=t=>a.itemUpdate()),debounce:"50"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Детали перевозки")])),_:1}),n.orderLocal.locationStart?((0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{color:"medium",src:i.locationOutline,slot:"start"},null,8,["src"]),(0,l.Uk)(" Откуда ")])),_:1}),(0,l.Wm)(g,{button:"",detail:"",onClick:e[2]||(e[2]=t=>a.locationStartSelect())},{default:(0,l.w5)((()=>{var e;return[null!==(e=n.orderLocal.locationStart)&&void 0!==e&&e.image_hash?((0,l.wg)(),(0,l.j4)(v,{key:0,slot:"start",style:{"--size":"20px"}},{default:(0,l.w5)((()=>{var e;return[(0,l.Wm)(y,{src:`${t.$heap.state.hostname}image/get.php/${null===(e=n.orderLocal.locationStart)||void 0===e?void 0:e.image_hash}.150.150.webp`},null,8,["src"])]})),_:1})):((0,l.wg)(),(0,l.j4)(k,{key:1,color:"primary",src:i.locationOutline,slot:"start"},null,8,["src"])),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(n.orderLocal.locationStart.location_address),1)])),_:1})]})),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,[n.orderLocal.locationStart.location_comment?((0,l.wg)(),(0,l.iD)("div",{key:0,onClick:e[3]||(e[3]=t=>a.locationCommentEdit("locationStart")),style:{padding:"10px","background-color":"var(--ion-color-light)",color:"#666","border-radius":"10px",display:"inline-block"}},(0,r.zw)(n.orderLocal.locationStart.location_comment),1)):((0,l.wg)(),(0,l.j4)(C,{key:1,color:"medium",onClick:e[4]||(e[4]=t=>a.locationCommentEdit("locationStart"))},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.addOutline},null,8,["src"]),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("комментарий")])),_:1})])),_:1})),n.orderLocal.locationStart.location_phone?((0,l.wg)(),(0,l.j4)(C,{key:2,color:"medium",onClick:e[5]||(e[5]=t=>a.locationPhoneEdit("locationStart"))},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.callOutline},null,8,["src"]),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(n.orderLocal.locationStart.location_phone),1)])),_:1})])),_:1})):((0,l.wg)(),(0,l.j4)(C,{key:3,color:"medium",onClick:e[6]||(e[6]=t=>a.locationPhoneEdit("locationStart"))},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.addOutline},null,8,["src"]),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("телефон")])),_:1})])),_:1}))])])),_:1})])):((0,l.wg)(),(0,l.j4)(g,{key:1,button:"","detail-icon":i.addOutline,onClick:e[7]||(e[7]=t=>a.locationStartSelect())},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{color:"medium",src:i.locationOutline,slot:"start"},null,8,["src"]),(0,l.Wm)(W,{color:"medium"},{default:(0,l.w5)((()=>[(0,l.Uk)("Откуда забрать?")])),_:1}),(0,l.Wm)(k,{color:"warning",src:i.alertCircleOutline,slot:"end"},null,8,["src"])])),_:1},8,["detail-icon"])),n.orderLocal.locationFinish?((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{color:"medium",src:i.flagOutline,slot:"start"},null,8,["src"]),(0,l.Uk)(" Куда ")])),_:1}),(0,l.Wm)(g,{button:"",detail:"",onClick:e[8]||(e[8]=t=>a.locationFinishSelect())},{default:(0,l.w5)((()=>{var e;return[null!==(e=o.orderData.locationFinish)&&void 0!==e&&e.image_hash?((0,l.wg)(),(0,l.j4)(v,{key:0,slot:"start",style:{"--size":"20px"}},{default:(0,l.w5)((()=>{var e;return[(0,l.Wm)(y,{src:`${t.$heap.state.hostname}image/get.php/${null===(e=o.orderData.locationFinish)||void 0===e?void 0:e.image_hash}.150.150.webp`},null,8,["src"])]})),_:1})):((0,l.wg)(),(0,l.j4)(k,{key:1,color:"primary",src:i.flagOutline,slot:"start"},null,8,["src"])),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(o.orderData.locationFinish.location_address),1)])),_:1})]})),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,[n.orderLocal.locationFinish.location_comment?((0,l.wg)(),(0,l.iD)("div",{key:0,onClick:e[9]||(e[9]=t=>a.locationCommentEdit("locationFinish")),style:{padding:"10px","background-color":"var(--ion-color-light)",color:"#666","border-radius":"10px",display:"inline-block"}},(0,r.zw)(n.orderLocal.locationFinish.location_comment),1)):((0,l.wg)(),(0,l.j4)(C,{key:1,color:"medium",onClick:e[10]||(e[10]=t=>a.locationCommentEdit("locationFinish"))},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.addOutline},null,8,["src"]),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("комментарий")])),_:1})])),_:1})),n.orderLocal.locationFinish.location_phone?((0,l.wg)(),(0,l.j4)(C,{key:2,color:"medium",onClick:e[11]||(e[11]=t=>a.locationPhoneEdit("locationFinish"))},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.callOutline},null,8,["src"]),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(n.orderLocal.locationFinish.location_phone),1)])),_:1})])),_:1})):((0,l.wg)(),(0,l.j4)(C,{key:3,color:"medium",onClick:e[12]||(e[12]=t=>a.locationPhoneEdit("locationFinish"))},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.addOutline},null,8,["src"]),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("телефон")])),_:1})])),_:1}))])])),_:1})])):((0,l.wg)(),(0,l.j4)(g,{key:3,button:"","detail-icon":i.addOutline,onClick:e[13]||(e[13]=t=>a.locationFinishSelect())},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{color:"medium",src:i.flagOutline,slot:"start"},null,8,["src"]),(0,l.Wm)(W,{color:"medium"},{default:(0,l.w5)((()=>[(0,l.Uk)("Куда отвезти?")])),_:1}),(0,l.Wm)(k,{color:"warning",src:i.alertCircleOutline,slot:"end"},null,8,["src"])])),_:1},8,["detail-icon"])),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Итог")])),_:1}),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{slot:"header",lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{icon:i.walletOutline,slot:"start",color:"medium"},null,8,["icon"]),(0,l.Wm)(W,{color:"medium"},{default:(0,l.w5)((()=>[(0,l.Uk)("Итого: ")])),_:1}),(0,l.Wm)(s,{slot:"end",color:"primary"},{default:(0,l.w5)((()=>{var e,o;return[(0,l.Uk)((0,r.zw)(null!==(e=null===(o=n.orderLocal.deliveryCalculation)||void 0===o?void 0:o.sum)&&void 0!==e?e:0)+(0,r.zw)(t.$heap.state.currencySign),1)]})),_:1})])),_:1}),(0,l.Wm)(S,{slot:"content"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{color:"medium"},{default:(0,l.w5)((()=>[(0,l.Uk)("Вызов курьера")])),_:1}),(0,l.Wm)(s,{slot:"end",color:"primary"},{default:(0,l.w5)((()=>{var e,o;return[(0,l.Uk)((0,r.zw)(null!==(e=null===(o=n.orderLocal.deliveryCalculation)||void 0===o?void 0:o.cost)&&void 0!==e?e:0)+(0,r.zw)(t.$heap.state.currencySign),1)]})),_:1})])),_:1}),(0,l.Wm)(g,{lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{color:"medium"},{default:(0,l.w5)((()=>{var e,o;return[(0,l.Uk)("Расстояние по карте "+(0,r.zw)(a.deliveryDistanceKm)+"км по "+(0,r.zw)(null!==(e=null===(o=n.orderLocal.deliveryCalculation)||void 0===o?void 0:o.fee)&&void 0!==e?e:0)+(0,r.zw)(t.$heap.state.currencySign),1)]})),_:1}),(0,l.Wm)(s,{slot:"end",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(a.deliveryFeeTotal)+(0,r.zw)(t.$heap.state.currencySign),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{"toggle-icon-slot":"start"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{slot:"header",lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{checked:a.isValidAll,onIonChange:e[14]||(e[14]=t=>a.toggleValid(t.target.checked))},{default:(0,l.w5)((()=>[(0,l.Uk)("Посылка отвечает условиям")])),_:1},8,["checked"])])),_:1}),(0,l.Wm)(S,{slot:"content"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.helpCircleOutline,slot:"start",onClick:e[15]||(e[15]=e=>t.$router.push("/page/rules-customer#dimentions"))},null,8,["src"]),(0,l.Wm)(L,{modelValue:n.isValidDimention,"onUpdate:modelValue":e[16]||(e[16]=t=>n.isValidDimention=t)},{default:(0,l.w5)((()=>[(0,l.Uk)("Меньше 40 × 40 × 25 см")])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.helpCircleOutline,slot:"start",onClick:e[17]||(e[17]=e=>t.$router.push("/page/rules-customer#dimentions"))},null,8,["src"]),(0,l.Wm)(L,{modelValue:n.isValidDimention,"onUpdate:modelValue":e[18]||(e[18]=t=>n.isValidDimention=t)},{default:(0,l.w5)((()=>[(0,l.Uk)("Легче 8кг")])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.helpCircleOutline,slot:"start",onClick:e[19]||(e[19]=e=>t.$router.push("/page/rules-customer#contents"))},null,8,["src"]),(0,l.Wm)(L,{modelValue:n.isValidContent,"onUpdate:modelValue":e[20]||(e[20]=t=>n.isValidContent=t)},{default:(0,l.w5)((()=>[(0,l.Uk)("Без запрещенных вещей")])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{src:i.helpCircleOutline,slot:"start",onClick:e[21]||(e[21]=e=>t.$router.push("/page/rules-customer#contents"))},null,8,["src"]),(0,l.Wm)(L,{modelValue:n.isValidReadyness,"onUpdate:modelValue":e[22]||(e[22]=t=>n.isValidReadyness=t)},{default:(0,l.w5)((()=>[(0,l.Uk)("Уже готова к перевозке")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),a.checkoutError?((0,l.wg)(),(0,l.j4)(O,{key:0,color:"warning"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(a.checkoutError),1)])),_:1})])),_:1})):(0,l.kq)("",!0),a.isReadyToCheckout?((0,l.wg)(),(0,l.j4)(V,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)($,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.nextStageButtons,((t,e)=>((0,l.wg)(),(0,l.j4)(U,{key:e},{default:(0,l.w5)((()=>{var i,n;return[t[0]?((0,l.wg)(),(0,l.j4)(I,{key:0,onClick:l=>a.stageCreate(o.orderData.order_id,e,t[1]),expand:"block",color:null!==(i=t[1])&&void 0!==i?i:"primary",fill:null!==(n=t[2])&&void 0!==n?n:"solid"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{slot:"start",src:t.icon},null,8,["src"]),(0,l.Uk)(" "+(0,r.zw)(t[0]),1)])),_:2},1032,["onClick","color","fill"])):(0,l.kq)("",!0)]})),_:2},1024)))),128))])),_:1})])),_:1})):((0,l.wg)(),(0,l.j4)(V,{key:2},{default:(0,l.w5)((()=>[(0,l.Wm)($,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[o.orderData.order_description?o.orderData.locationStart?o.orderData.locationFinish?a.isValidAll?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(I,{key:3,onClick:e[26]||(e[26]=t=>a.toggleValid(1)),expand:"block",color:"light"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Согласиться с условиями ")])),_:1})):((0,l.wg)(),(0,l.j4)(I,{key:2,onClick:e[25]||(e[25]=t=>a.locationFinishSelect()),expand:"block",color:"light"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Куда отвезти ")])),_:1})):((0,l.wg)(),(0,l.j4)(I,{key:1,onClick:e[24]||(e[24]=t=>a.locationStartSelect()),expand:"block",color:"light"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Откуда забрать ")])),_:1})):((0,l.wg)(),(0,l.j4)(I,{key:0,onClick:e[23]||(e[23]=e=>t.$refs.description.$el.setFocus()),expand:"block",color:"light"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Заполнить описание ")])),_:1}))])),_:1})])),_:1})])),_:1}))])):((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(g,{detail:"",button:"",lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{slot:"start",icon:i.storefrontOutline},null,8,["icon"]),(0,l.Wm)(j,{animated:"",style:{width:"200px"}})])),_:1}),(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([1,2,3],(t=>(0,l.Wm)(g,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{style:{"background-color":"var(--ion-color-light)"}}),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)($,null,{default:(0,l.w5)((()=>[(0,l.Wm)(j,{animated:"",style:{width:"100%"}})])),_:1}),(0,l.Wm)($,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(j,{animated:"",style:{width:"100px"}})])),_:1})])),_:1})])),_:1})])),_:1}),_])),_:2},1024))),64))])),_:1}),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)($,null,{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([1,2],(t=>(0,l.Wm)(U,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{color:"light",style:{width:"100%"}})])),_:2},1024))),64))])),_:1})])),_:1})]))}var w=o(4929),f=o(8903);function k(t,e,o,i,n,a){const s=(0,l.up)("ion-title"),c=(0,l.up)("ion-icon"),d=(0,l.up)("ion-item"),u=(0,l.up)("ion-toolbar"),m=(0,l.up)("ion-header"),h=(0,l.up)("ion-img"),p=(0,l.up)("ion-label"),_=(0,l.up)("ion-list"),g=(0,l.up)("ion-list-header"),w=(0,l.up)("ion-content");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{lines:"none"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Мои адреса")])),_:1}),(0,l.Wm)(c,{slot:"end",onClick:e[0]||(e[0]=t=>{a.modalClose()}),icon:i.closeOutline,size:"large"},null,8,["icon"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[n.locationList.length?((0,l.wg)(),(0,l.j4)(_,{key:0,lines:"full"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.locationList,((e,o)=>((0,l.wg)(),(0,l.j4)(d,{key:e.location_id},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{slot:"start",alt:"location icon",src:`${t.$heap.state.hostname}/image/get.php/${e.image_hash}.60.60.png`,style:{height:"24px"}},null,8,["src"]),(0,l.Wm)(p,{onClick:t=>a.locationSelect(e),style:{"white-space":"normal",cursor:"pointer"},class:(0,r.C_)(1==e.is_main?"is_main":"")},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.location_address),1)])),_:2},1032,["onClick","class"]),(0,l.Wm)(c,{slot:"end",icon:i.trashOutline,onClick:t=>a.locationDelete(`${e.location_id}`,`${o}`)},null,8,["icon","onClick"])])),_:2},1024)))),128))])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Добавить адрес")])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.locationGroupList,(e=>((0,l.wg)(),(0,l.j4)(d,{key:e.group_id,onClick:t=>a.modalLocationCreate(`${e.group_id}`,`${e.group_name}`),style:{cursor:"pointer"}},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{src:`${t.$heap.state.hostname}/image/get.php/${e.image_hash}.60.60.png`,style:{height:"24px"},slot:"start"},null,8,["src"]),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.group_name),1)])),_:2},1024),(0,l.Wm)(c,{src:i.addOutline,slot:"end"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})],64)}var y=o(2008),v=o(351),W=o(2562),C={components:{IonImg:w.Xz,IonLabel:w.Q$,IonItem:w.Ie,IonList:w.q_,IonListHeader:w.yh,IonIcon:w.gu,IonHeader:w.Gu,IonToolbar:w.sr,IonTitle:w.wd,IonContent:w.W2},setup(){return{locationOutline:f.Iv7,trashOutline:f.gtu,addOutline:f.s6O,closeOutline:f.fID}},data(){return{locationList:[],locationGroupList:[]}},mounted(){this.locationListGet()},computed:{mainAddress(){var t;return null===(t=this.locationList)||void 0===t?void 0:t.find((t=>1==t.is_main))}},methods:{modalClose(){w.Fy.dismiss(null,"cancel")},async modalLocationCreate(t,e){if(!y.Z.getters.userIsLogged)return void(confirm("Чтобы добавленный адрес сохранился, необходимо авторизироваться")&&this.$go("/user/sign-in"));var o=String(e).toLowerCase();const l=await w.Fy.create({component:W.Z,showBackdrop:!0,componentProps:{location_group_name_low:o}});return l.onDidDismiss().then((e=>{this.locationCreate(t,e.data)})),l.present()},async locationListGet(){try{let t=null;const e=await a().get(y.Z.state.hostname+"User/locationListGet",{includeGroupList:1});if(this.locationList=e.location_list,this.locationGroupList=e.location_group_list,this.locationList)for(let o of this.locationList)1==o.is_main&&(t=o);if(!t)return void v.Z.get()}catch{}},async locationCreate(t,e){if(!e)return;let o={location_holder:"user",location_holder_id:y.Z.state.user.user_id,location_group_id:t,location_address:e.location_address,location_latitude:e.location_latitude,location_longitude:e.location_longitude};try{await a().post(y.Z.state.hostname+"User/locationCreate",o),this.locationListGet()}catch(l){const t=l.responseJSON,e=t.messages.error;switch(e){case"limit_exeeded":this.$flash("Больше адресов добавить нельзя");break}return!1}},locationSelect(t){w.Fy.dismiss(t,"confirm")},async locationDelete(t,e){if(confirm("Удалить адрес доставки?")){try{this.locationList.splice(e,1),await a().post(y.Z.state.hostname+"User/locationDelete",{location_id:t})}catch{}this.locationListGet()}}}},S=o(3744);const D=(0,S.Z)(C,[["render",k],["__scopeId","data-v-7fd5fc7e"]]);var b=D,L={props:["orderData"],components:{IonIcon:w.gu,IonText:w.yW,IonLabel:w.Q$,IonItem:w.Ie,IonList:w.q_,IonImg:w.Xz,IonThumbnail:w.Bs,IonButton:w.YG,IonCol:w.wI,IonRow:w.Nd,IonGrid:w.jY,IonSkeletonText:w.CK,IonCard:w.PM,IonCardContent:w.FN,IonItemDivider:w.rH,IonTextarea:w.g2,IonAccordion:w.We,IonAccordionGroup:w.eh,IonChip:w.hM,IonCheckbox:w.nz},setup(){return{add:f.IHx,remove:f.OdJ,trash:f._Ij,rocketOutline:f.G$D,storefrontOutline:f.qRG,checkmarkOutline:f.TjA,cubeOutline:f.XFf,walletOutline:f.S5P,banOutline:f.L6S,giftOutline:f._$o,cardOutline:f.pvm,ribbonOutline:f.Muk,chatboxEllipsesOutline:f._Pt,locationOutline:f.Iv7,flagOutline:f.FMn,chevronDown:f.Dd1,addOutline:f.s6O,checkmark:f.d29,cashOutline:f.zaw,businessOutline:f.c1X,alertCircleOutline:f.nLD,helpCircleOutline:f.Sm,callOutline:f.H7N}},data(){return{isValidReadyness:1,isValidDimention:1,isValidWeight:1,isValidContent:1,orderLocal:{}}},computed:{checkoutError(){var t,e,o,l,i,n;const a=null!==(t=null===(e=this.orderLocal.deliveryCalculation)||void 0===e?void 0:e.error)&&void 0!==t?t:null;if("no_input"==a||!this.orderData.locationStart||!this.orderData.locationFinish)return"Выберите адрес отправителя и получателя";if("start_center_toofar"==a)return"Адрес отправителя посылки слишком удален";if("finish_center_toofar"==a)return"Адрес получателя посылки слишком удален";if("start_finish_toofar"==a){var r;const t=Math.round((null===(r=this.orderLocal.deliveryCalculation)||void 0===r?void 0:r.max_distance)/100)/10;return`Расстояние по карте между адресами ${this.deliveryDistanceKm}км, больше максимального в ${t}км`}return null!==(o=null===(l=this.orderLocal.deliveryCalculation)||void 0===l?void 0:l.fee)&&void 0!==o&&o?null!==(i=null===(n=this.orderLocal.deliveryCalculation)||void 0===n?void 0:n.deliveryDistance)&&void 0!==i&&i?null:"Отправитель и получатель в одной точке":"Тариф доставки не установлен"},deliveryDistanceKm(){var t;return Math.round((null===(t=this.orderLocal.deliveryCalculation)||void 0===t?void 0:t.deliveryDistance)/100)/10||0},deliveryFeeTotal(){var t,e;const o=null!==(t=null===(e=this.orderLocal.deliveryCalculation)||void 0===e?void 0:e.fee)&&void 0!==t?t:0;return Math.round(o*this.deliveryDistanceKm)},isReadyToCheckout(){return this.orderData.order_description&&this.orderData.locationStart&&this.orderData.locationFinish&&!this.checkoutError&&this.isValidAll},isValidAll(){return this.isValidContent&&this.isValidDimention&&this.isValidReadyness&&this.isValidWeight},nextStageButtons(){let t={};for(let e in this.orderData.stage_next)this.orderData.stage_next[e][0]&&(t[e]=this.orderData.stage_next[e],t[e].icon=f.TjA,e.includes("admin")?t[e].icon=f.Muk:e.includes("delivery")?t[e].icon=f.G$D:e.includes("supplier")&&(t[e].icon=f.qRG));return t}},methods:{stageCreate(t,e,o){("danger"!=o||confirm("Вы уверены?"))&&this.$emit("stageCreate",t,e)},async itemUpdate(t="skipRefresh"){const e=this.orderLocal;e.mode=t,this.$emit("orderUpdate",e)},async locationSelect(){try{const t=document.querySelector("ion-router-outlet"),e=await w.Fy.create({component:b,canDismiss:!0,backdropDismiss:!0,keyboardClose:!0,presentingElement:t});e.present();const{data:o,role:l}=await e.onWillDismiss();return o}catch{}},async locationStartSelect(){var t;this.orderLocal.locationStart=await this.locationSelect(),this.orderLocal.start_location_id=null===(t=this.orderLocal.locationStart)||void 0===t?void 0:t.location_id,this.itemUpdate("refreshTotalEstimates")},async locationFinishSelect(){var t;this.orderLocal.locationFinish=await this.locationSelect(),this.orderLocal.finish_location_id=null===(t=this.orderLocal.locationFinish)||void 0===t?void 0:t.location_id,this.itemUpdate("refreshTotalEstimates")},async locationPhoneEdit(t){var e;let o=null!==(e=this.orderLocal[t].location_phone)&&void 0!==e?e:"";const l=await w.Cl.create({header:"Напишите номер телефона",buttons:[{text:"Удалить",role:"cancel"},{text:"OK",role:"confirm"}],inputs:[{name:"phone",placeholder:"+7 xxxxxxxxxx",value:o}]});try{await l.present();const{data:e,role:i}=await l.onDidDismiss();"confirm"==i&&(o=e.values.phone.replace(/\D/g,"").replace(/^7/,""),o&&(10!=o.length&&this.$flash("Проверьте правильность телефона"),o="+7"+o)),"cancel"==i&&(o=""),this.orderLocal[t].location_phone=o;const n=this.orderLocal[t],a={location_id:n.location_id,location_phone:o};this.$emit("locationUpdate",a),this.itemUpdate()}catch(i){console.log(i)}},async locationCommentEdit(t){var e;let o=null!==(e=this.orderLocal[t].location_comment)&&void 0!==e?e:"";const l=await w.Cl.create({header:"Комментарий к адресу",buttons:[{text:"Удалить",role:"cancel"},{text:"OK",role:"confirm"}],inputs:[{type:"textarea",name:"comment",placeholder:"напишите комментарий",value:o}]});try{await l.present();const{data:e,role:i}=await l.onDidDismiss();o=e.values.comment,"cancel"==i&&(o=""),this.orderLocal[t].location_comment=o;const n=this.orderLocal[t],a={location_id:n.location_id,location_comment:o};this.$emit("locationUpdate",a),this.itemUpdate()}catch(i){console.log(i)}},toggleValid(t){this.isValidContent=this.isValidDimention=this.isValidWeight=this.isValidReadyness=t}},async created(){this.orderLocal=this.orderData},watch:{orderData:async function(t){this.orderLocal=t,this.orderLocal}}};const x=(0,S.Z)(L,[["render",g],["__scopeId","data-v-675aadbe"]]);var O=x,I={components:{ShipmentDraftComp:O},data(){return{order:null,errorCode:null}},methods:{async itemCreate(){const t=new Date,e={order_store_id:null,order_id:0,entries:[],created_at:t.toISOString().replace(/[T]/g," ").replace(/.\d\d\dZ/,""),stage_next:{customer_confirmed:["Перейти к оформлению"],customer_deleted:["Удалить","danger","clear"]},stage_current:"customer_cart",user_role:"customer"};this.itemSave(e)},async itemLoad(){try{const t=JSON.parse(localStorage.shipmentDraft);if(t)return t.deliveryCalculation=await this.itemTotalEstimate(t.start_location_id,t.finish_location_id),void(this.order=t)}catch{}this.itemCreate()},itemSave(t){this.order=t,localStorage.shipmentDraft=JSON.stringify(t)},async itemUpdate(t){console.log(t.mode),"refreshTotalEstimates"==t.mode&&(t.deliveryCalculation=await this.itemTotalEstimate(t.start_location_id,t.finish_location_id)),this.itemSave(Object.assign({},this.order,t))},async locationUpdate(t){try{await a().post(`${this.$heap.state.hostname}Location/itemUpdate`,JSON.stringify(t)),this.$flash("сохранено")}catch{}},async itemTotalEstimate(t,e){if(!t||!e)return;const o={start_location_id:t,finish_location_id:e};try{return await a().post(`${this.$heap.state.hostname}Shipment/itemDeliverySumEstimate`,o)}catch(l){}},async onStageCreate(t,e){if("customer_purged"==e||"customer_deleted"==e)return localStorage.removeItem("shipmentDraft"),void this.$router.replace("/order/order-list");"customer_action_confirm"==e&&(e="customer_confirmed");try{const t={is_shopping:0,order_description:this.order.order_description,order_start_location_id:this.order.start_location_id,order_finish_location_id:this.order.finish_location_id,order_sum_delivery:this.order.deliveryCalculation.sum},e=await a().post(`${this.$heap.state.hostname}Shipment/itemSync`,JSON.stringify(t));e>0&&this.$router.push(`/modal/shipment-checkout-${e}`)}catch(i){var o,l;const e=null===i||void 0===i||null===(o=i.responseJSON)||void 0===o||null===(l=o.messages)||void 0===l?void 0:l.error;if(!e)return!1;switch(e){case"order_is_empty":this.$alert("К сожалению, товара не осталось в наличии ☹️","Заказ пуст");break;case"address_not_set":this.$flash("Необходимо добавить адрес доставки"),this.$topic.publish("dismissModal"),this.$go("/modal/user-addresses"),this.$heap.state.next_route="/order/order-"+t;break}return!1}}},mounted(){this.itemLoad()}};const U=(0,S.Z)(I,[["render",i]]);var $=U}}]);
//# sourceMappingURL=9078.ef8a46f8.js.map