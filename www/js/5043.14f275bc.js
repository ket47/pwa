"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[5043],{4405:function(t,e,o){o(4916),o(5306);var i=o(2008);const r={deliveryCalculate(t){if(!t.locations||!t.locations[0]||!t.locations[0].distance)return null;const e=t.locations[0].distance,o=t.store_time_preparation||0;return r.deliveryTimeCalculate(e,o)},deliveryTimeCalculate(t,e){var o;e=parseInt(null!==(o=e)&&void 0!==o?o:i.Z.getters.settings.delivery.timePreparationDefault);const r=parseInt(i.Z.getters.settings.delivery.timeDelta),l=parseInt(i.Z.getters.settings.delivery.speed),n=5*Math.round(t/l*60/5)+e,s=n>r?n-r:n,a=s+r;return{time:n,timeMin:s,timeMax:a}},render(t,e){for(let o in e)t=t.replace(`{{${o}}}`,e[o]);return t=t.replace(/{{\.}}/,"-"),t}};e["Z"]=r},8336:function(t,e,o){o.d(e,{Z:function(){return D}});var i=o(6252),r=o(3577);const l=t=>((0,i.dD)("data-v-094a8799"),t=t(),(0,i.Cn)(),t),n=["id"],s={key:0,style:{position:"relative"}},a=l((()=>(0,i._)("div",{class:"product_list_item_img",style:{position:"absolute",border:"#9ac solid 2px",top:"-8px",left:"8px","z-index":"-1"}},null,-1))),u=l((()=>(0,i._)("div",{class:"product_list_item_img",style:{position:"absolute",border:"#cde solid 2px",top:"-4px",left:"4px","z-index":"-1"}},null,-1))),d=[a,u],c={key:0,style:{position:"relative",top:"-50%"}},p={style:{height:"5em",overflow:"hidden"}},m={key:0,style:{color:"var(--ion-color-danger)"}},_=(0,i.Uk)("   "),h={style:{color:"var(--ion-color-primary)"}},w={style:{"font-weight":"bold",margin:"0","font-size":"1.4em"}},g={style:{"font-weight":"bold",margin:"0","font-size":"1.2em"}},y=(0,i.Uk)(" / "),f={key:1,style:{color:"var(--ion-color-medium)"}},I={key:2,style:{color:"var(--ion-color-medium)"}},v={key:3,style:{color:"var(--ion-color-medium)"}};function k(t,e,o,l,a,u){const k=(0,i.up)("cart-add-buttons"),b=(0,i.up)("ion-img"),W=(0,i.up)("ion-icon");return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(u.item_class),id:`product_list_item${o.productItem.product_id}`},[u.options?((0,i.wg)(),(0,i.iD)("div",s,d)):(0,i.kq)("",!0),(0,i._)("div",{class:"product_list_item_img",style:(0,r.j5)(u.options?"border:#def solid 2px;":"")},["0"!=o.productItem.is_disabled||o.productItem.deleted_at?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(k,{buttonLayout:"vertical",productItem:o.productItem},null,8,["productItem"])])),(0,i.Wm)(b,{class:"blur-image",src:`${t.$heap.state.hostname}image/get.php/${o.productItem.image_hash}.200.200.webp`},null,8,["src"]),(0,i.Wm)(b,{onClick:e[0]||(e[0]=e=>t.$router.push(`/catalog/product-${o.productItem.product_id}`)),src:`${t.$heap.state.hostname}image/get.php/${o.productItem.image_hash}.200.200.webp`},null,8,["src"]),u.options?((0,i.wg)(),(0,i.j4)(W,{key:1,src:l.layersOutline,color:"primary",size:"large",style:{position:"absolute",bottom:"3px",right:"3px"}},null,8,["src"])):(0,i.kq)("",!0)],4),(0,i._)("div",p,[(0,i._)("div",{style:{color:"black",height:"3em","font-size":"1em",overflow:"hidden","line-height":"1.4em","font-weight":"bold"},onClick:e[1]||(e[1]=e=>t.$router.push(`/catalog/product-${o.productItem.product_id}`))},(0,r.zw)(o.productItem.product_name),1),o.productItem.product_price!=o.productItem.product_final_price?((0,i.wg)(),(0,i.iD)("span",m,[(0,i._)("s",null,(0,r.zw)(o.productItem.product_price)+(0,r.zw)(t.$heap.state.currencySign),1),_])):(0,i.kq)("",!0),(0,i._)("span",h,[(0,i._)("b",w,(0,r.zw)(o.productItem.product_final_price),1),(0,i._)("b",g,(0,r.zw)(t.$heap.state.currencySign),1)]),y,"порция"==o.productItem.product_unit?((0,i.wg)(),(0,i.iD)("span",f,(0,r.zw)(u.weight_in_gramms)+"г",1)):"порция мл"==o.productItem.product_unit?((0,i.wg)(),(0,i.iD)("span",I,(0,r.zw)(u.weight_in_gramms)+"мл",1)):((0,i.wg)(),(0,i.iD)("span",v,(0,r.zw)(o.productItem.product_unit),1))])],10,n)}o(4916);var b=o(8292),W=o(3387),x=o(8903),$={components:{IonImg:b.Xz,IonIcon:b.gu,CartAddButtons:W.Z},props:["productItem"],setup(){return{layersOutline:x.Y1P}},computed:{item_class(){return this.productItem.deleted_at?"deleted":this.productItem.product_final_price!=this.productItem.product_price?"promo":1==this.productItem.is_disabled?"disabled":1==this.productItem.is_counted&&this.productItem.product_quantity-this.productItem.product_quantity_reserved<1?"absent":""},weight_in_gramms(){return 1e3*this.productItem.product_weight},options(){var t;return null!==(t=this.productItem)&&void 0!==t&&t.product_options?this.productItem.product_options.split("~|~"):null}}},z=o(3744);const C=(0,z.Z)($,[["render",k],["__scopeId","data-v-094a8799"]]);var D=C},6181:function(t,e,o){o.d(e,{Z:function(){return I}});var i=o(6252),r=o(3577);const l=(0,i.Uk)(" ◉ "),n={key:0},s=(0,i.Uk)(" ◉ "),a=(0,i.Uk)("Временно не работает"),u={key:1},d=(0,i.Uk)(" ◉ "),c={key:2},p=(0,i.Uk)(" ◉ "),m=(0,i.Uk)("Закрыт");function _(t,e,o,_,h,w){const g=(0,i.up)("ion-text"),y=(0,i.up)("ion-chip");return 1==o.storeItem.is_opened?((0,i.wg)(),(0,i.j4)(y,{key:0,color:"medium"},{default:(0,i.w5)((()=>[(0,i._)("label",null,[(0,i.Wm)(g,{color:"success"},{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Uk)("Открыт до "+(0,r.zw)(o.storeItem.store_time_closes)+":00",1)])])),_:1})):((0,i.wg)(),(0,i.j4)(y,{key:1,color:"medium"},{default:(0,i.w5)((()=>[0==o.storeItem.is_working?((0,i.wg)(),(0,i.iD)("label",n,[(0,i.Wm)(g,{color:"medium"},{default:(0,i.w5)((()=>[s])),_:1}),a])):o.storeItem.store_next_time_opens>0?((0,i.wg)(),(0,i.iD)("label",u,[(0,i.Wm)(g,{color:"danger"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Uk)("Закрыт до "+(0,r.zw)(o.storeItem.store_next_time_opens)+":00",1)])):((0,i.wg)(),(0,i.iD)("label",c,[(0,i.Wm)(g,{color:"danger"},{default:(0,i.w5)((()=>[p])),_:1}),m]))])),_:1}))}var h=o(8292),w=o(8903),g={props:["storeItem"],components:{IonChip:h.hM,IonText:h.yW},setup(){return{ellipse:w.Hpm}}},y=o(3744);const f=(0,y.Z)(g,[["render",_]]);var I=f},5043:function(t,e,o){o.r(e),o.d(e,{default:function(){return x}});var i=o(6252),r=o(3577);const l={key:0},n=(0,i.Uk)("Найденные товары"),s={style:{"font-size":"1.1em"}},a={style:{display:"grid","grid-template-columns":"repeat(auto-fit, 150px)"}},u={key:1},d=(0,i.Uk)("Найденные товары"),c={style:{display:"grid","grid-template-columns":"repeat(auto-fit, 150px)"}},p={key:2},m=(0,i.Uk)("Ничего не найдено."),_=(0,i.Uk)("Возможно у нас нет того что вы ищите или вы находитель за пределами зоны доставки");function h(t,e,o,h,w,g){const y=(0,i.up)("ion-searchbar"),f=(0,i.up)("ion-title"),I=(0,i.up)("ion-img"),v=(0,i.up)("ion-thumbnail"),k=(0,i.up)("ion-note"),b=(0,i.up)("ion-item"),W=(0,i.up)("ion-card-header"),x=(0,i.up)("store-opened-indicator"),$=(0,i.up)("product-item"),z=(0,i.up)("ion-card-content"),C=(0,i.up)("ion-card"),D=(0,i.up)("ion-skeleton-text"),U=(0,i.up)("ion-chip"),q=(0,i.up)("ion-card-title"),Z=(0,i.up)("base-layout");return(0,i.wg)(),(0,i.j4)(Z,{"page-title":"Поиск товаров"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{class:"search-container",modelValue:w.query,"onUpdate:modelValue":e[0]||(e[0]=t=>w.query=t),onInput:e[1]||(e[1]=t=>g.delayedListGet()),placeholder:"начните искать"},null,8,["modelValue"]),w.found?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[n])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(w.found.product_matches,(e=>((0,i.wg)(),(0,i.j4)(C,{key:e.store_id},{default:(0,i.w5)((()=>[(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b,{detail:"",button:"",onClick:o=>t.$router.push(`/search/store-${e.store_id}`),lines:"full"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{slot:"start"},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{style:{"border-radius":"10px"},src:`${t.$heap.state.hostname}image/get.php/${e.image_hash}.150.150.webp`},null,8,["src"])])),_:2},1024),(0,i._)("p",s,(0,r.zw)(null===e||void 0===e?void 0:e.store_name),1),(0,i.Wm)(k,{slot:"helper"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(e.store_description),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024),(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(x,{storeItem:e},null,8,["storeItem"])]),(0,i._)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.matches,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.product_id},[(0,i.Wm)($,{productItem:t,storeName:e.store_name},null,8,["productItem","storeName"])])))),128))])])),_:2},1024)])),_:2},1024)))),128))])):null==w.found?((0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b,{detail:"",lines:"full"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{slot:"start"},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{style:{width:"50px",height:"50px"},animated:""})])),_:1}),(0,i.Wm)(D,{style:{width:"300px",height:"30px"},animated:""}),(0,i.Wm)(k,{slot:"helper"},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{style:{width:"300px"}})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(D,{style:{width:"100px"}})])),_:1}),(0,i._)("div",c,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([1,2,3,4],(t=>(0,i._)("div",{key:t},[(0,i.Wm)(D,{style:{width:"120px",height:"120px"},animated:""}),(0,i.Wm)(D,{style:{width:"120px",height:"30px"},animated:""})]))),64))])])),_:1})])),_:1})])):((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(C,{color:"light"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[m])),_:1})])),_:1}),(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[_])),_:1})])),_:1})]))])),_:1})}var w=o(8292),g=o(9755),y=o.n(g),f=o(4405),I=o(8336),v=o(6181),k={components:{StoreOpenedIndicator:v.Z,IonSearchbar:w.VI,IonTitle:w.wd,IonImg:w.Xz,IonThumbnail:w.Bs,IonNote:w.uN,IonItem:w.Ie,IonCard:w.PM,IonCardContent:w.FN,IonCardTitle:w.Dq,IonCardHeader:w.Zi,IonSkeletonText:w.CK,IonChip:w.hM,ProductItem:I.Z},data(){return{query:this.$route.query.q||"",found:null}},ionViewDidEnter(){this.delayedListGet()},created(){this.delayedListGet();let t=this;this.$topic.on("userGet",(e=>{this.found||t.listGet()}))},methods:{async listGet(){const t={query:this.query,in_products:1,in_stores:0,location_id:this.locMainGet()};if(t.location_id)try{const e=await y().get(this.$heap.state.hostname+"Search/listGet",t);this.found=this.storeListCalculate(e)}catch(e){this.found=null}},storeListCalculate(t){var e;if(null===(e=t.product_matches)||void 0===e||!e.length)return null;for(let o in t.product_matches)t.product_matches[o].deliveryTime=f.Z.deliveryTimeCalculate(t.product_matches[o].distance,t.product_matches[o].store_time_preparation);return t},locMainGet(){return this.$heap.state.user.location_main?this.$heap.state.user.location_main.location_id:null},delayedListGet(){clearTimeout(this.clock);const t=this;this.clock=setTimeout((()=>{t.listGet()}),200)}}},b=o(3744);const W=(0,b.Z)(k,[["render",h],["__scopeId","data-v-a2c630cc"]]);var x=W}}]);
//# sourceMappingURL=5043.14f275bc.js.map