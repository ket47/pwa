"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[4717],{5069:function(t,e,o){var r=o(2109),i=o(1702),n=o(3157),u=i([].reverse),l=[1,2];r({target:"Array",proto:!0,forced:String(l)===String(l.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),u(this)}})},4966:function(t,e,o){o.d(e,{Z:function(){return h}});var r=o(6252),i=o(3577);const n={key:0,style:{position:"relative"}},u=["src"],l=["src"];function a(t,e,o,a,s,c){const d=(0,r.up)("ion-icon"),p=(0,r.up)("ion-fab-button"),m=(0,r.up)("ion-fab"),g=(0,r.up)("swiper-slide"),_=(0,r.up)("swiper");return s.expanded?((0,r.wg)(),(0,r.iD)("div",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.imageList,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.image_hash,style:{border:"2px solid var(--ion-color-primary)"}},[(0,r._)("img",{src:`${t.$heap.state.hostname}image/get.php/${e.image_hash}.1000.1000.webp`},null,8,u)])))),128)),(0,r.Wm)(m,{horizontal:"end",vertical:"top",slot:"fixed"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{src:a.contract,size:"large",onClick:e[0]||(e[0]=t=>c.minimize())},null,8,["src"])])),_:1})])),_:1})])):((0,r.wg)(),(0,r.j4)(_,{key:1,modules:a.modules,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,effect:"fade",style:(0,i.j5)(`height: ${o.imgHeight||"100%"};`)},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.imageList,(e=>((0,r.wg)(),(0,r.j4)(g,{key:e.image_hash},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,i.C_)(`${o.mode?o.mode:""} cropper`),style:(0,i.j5)(`height: ${o.imgHeight+"px"||0};`)},[(0,r._)("img",{style:(0,i.j5)(`min-height: ${o.imgHeight+"px;"||0}`),src:`${t.$heap.state.hostname}image/get.php/${e.image_hash}.${4*o.imgHeight||1200}.${4*o.imgHeight||1200}.webp`},null,12,l)],6)])),_:2},1024)))),128))])),_:1},8,["modules","style"]))}var s=o(8903),c=o(8292),d=o(702),p=o(3181),m={components:{Swiper:p.t,SwiperSlide:p.o,IonFab:c.IJ,IonFabButton:c.W4,IonIcon:c.gu},props:["imageList","imgHeight","mode"],setup(){return{modules:[d.pt,d.xW],expand:s.jnR,contract:s.LJB}},data(){return{expanded:!1,vh:0,vw:0}},methods:{maximize(){this.expanded=!0,this.vh=document.getElementsByTagName("ion-content")[0].clientHeight,this.vw=document.getElementsByTagName("ion-content")[0].clientWidth},minimize(){this.expanded=!1,this.vh=document.getElementsByTagName("ion-content")[0].clientHeight,this.vw=document.getElementsByTagName("ion-content")[0].clientWidth}}},g=o(3744);const _=(0,g.Z)(m,[["render",a],["__scopeId","data-v-57ad0950"]]);var h=_},4717:function(t,e,o){o.r(e),o.d(e,{default:function(){return H}});o(4916),o(5306);var r=o(6252),i=o(3577);const n={key:0,class:"product-images"},u={class:"blur-image"},l=["src"],a={style:{"font-size":"1.2em"}},s=(0,r.Uk)(),c={key:0},d=(0,r.Uk)(),p={key:1},m={key:2},g=(0,r.Uk)("Варианты"),_={key:0,style:{color:"var(--ion-color-danger)","font-size":"0.75em"}},h=(0,r.Uk)("   "),w=(0,r.Uk)("Не заказан"),y=(0,r.Uk)("Итог");function f(t,e,o,f,I,k){var v;const W=(0,r.up)("image-slider-comp"),z=(0,r.up)("ion-list-header"),b=(0,r.up)("ion-text"),C=(0,r.up)("ion-item"),$=(0,r.up)("ion-list"),j=(0,r.up)("ion-accordion"),U=(0,r.up)("ion-accordion-group"),x=(0,r.up)("ion-icon"),O=(0,r.up)("ion-chip"),H=(0,r.up)("ion-label"),q=(0,r.up)("cart-add-buttons"),D=(0,r.up)("ion-textarea"),L=(0,r.up)("base-layout");return(0,r.wg)(),(0,r.j4)(L,{"page-title":null===(v=I.productItem)||void 0===v?void 0:v.product_name,pageDefaultBackLink:"/catalog",cartComponent:f.CartHeader},{default:(0,r.w5)((()=>{var o;return[I.productItem?((0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",u,[(0,r._)("img",{src:`${t.$heap.state.hostname}image/get.php/${null===(o=I.productItem.images[0])||void 0===o?void 0:o.image_hash}.50.50.webp`},null,8,l)]),(0,r.Wm)(W,{imageList:I.productItem.images,imgHeight:400,mode:"save-aspect-ratio"},null,8,["imageList"])])):(0,r.kq)("",!0),I.productItem?((0,r.wg)(),(0,r.j4)($,{key:1},{default:(0,r.w5)((()=>{var o;return[(0,r.Wm)(z,{style:{"font-size":"1.2em"}},{default:(0,r.w5)((()=>[(0,r._)("h3",a,[(0,r._)("b",null,(0,i.zw)(I.productItem.product_name),1),s,I.productItem.product_option?((0,r.wg)(),(0,r.iD)("b",c,"["+(0,i.zw)(I.productItem.product_option)+"]",1)):(0,r.kq)("",!0),d,k.isAvailable?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",p,"(Нет в наличии)"))])])),_:1}),I.productItem.product_description?((0,r.wg)(),(0,r.j4)(U,{key:0,style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[(0,r.Wm)(C,{slot:"header",lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"product-description",color:"medium"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(I.productItem.product_description),1)])),_:1})])),_:1}),(0,r.Wm)($,{slot:"content"},{default:(0,r.w5)((()=>[(0,r.Wm)(C,{lines:"none"})])),_:1})])),_:1})])),_:1})):(0,r.kq)("",!0),I.productItem.is_writable?((0,r.wg)(),(0,r.j4)(C,{key:1,lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{slot:"end",color:"primary",src:f.settingsOutline,onClick:e[0]||(e[0]=e=>t.$router.push("/catalog/product-edit-"+I.productId))},null,8,["src"])])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(C,{lines:"none"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(k.categories,(t=>((0,r.wg)(),(0,r.j4)(O,{outline:!0,color:"primary",key:t.group_id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.group_name),1)])),_:2},1024)))),128))])),_:1}),null!==(o=I.productItem)&&void 0!==o&&o.options?((0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(C,{lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{src:f.layersOutline,color:"primary",slot:"start"},null,8,["src"]),(0,r.Wm)(H,null,{default:(0,r.w5)((()=>[g])),_:1})])),_:1}),(0,r.Wm)(C,{lines:"none"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(I.productItem.options,(e=>((0,r.wg)(),(0,r.j4)(O,{onClick:o=>t.$router.replace(`/catalog/product-${e.product_id}`),color:"primary",key:e.product_id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.product_option),1)])),_:2},1032,["onClick"])))),128))])),_:1})])):(0,r.kq)("",!0),I.productItem.product_price!=I.productItem.product_final_price?((0,r.wg)(),(0,r.j4)(C,{key:3,lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{slot:"start",color:"primary",src:f.giftOutline},null,8,["src"]),(0,r.Wm)(H,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Акция до "+(0,i.zw)(k.promoFinish),1)])),_:1}),(0,r.Wm)(H,{slot:"end",color:"success",style:{"font-size":"1.2em"}},{default:(0,r.w5)((()=>[(0,r.Uk)("-"+(0,i.zw)(k.promoPercent)+"%",1)])),_:1})])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(C,{lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{slot:"start",color:"primary",src:f.pricetagOutline},null,8,["src"]),"порция"==I.productItem.product_unit?((0,r.wg)(),(0,r.j4)(H,{key:0},{default:(0,r.w5)((()=>[(0,r.Uk)("Цена за "+(0,i.zw)(k.weight_in_gramms)+"г",1)])),_:1})):"порция мл"==I.productItem.product_unit?((0,r.wg)(),(0,r.j4)(H,{key:1},{default:(0,r.w5)((()=>[(0,r.Uk)("Цена за "+(0,i.zw)(k.weight_in_gramms)+"мл",1)])),_:1})):((0,r.wg)(),(0,r.j4)(H,{key:2},{default:(0,r.w5)((()=>[(0,r.Uk)("Цена за "+(0,i.zw)(I.productItem.product_unit),1)])),_:1})),(0,r.Wm)(H,{slot:"end",color:"primary",style:{"font-size":"1.2em"}},{default:(0,r.w5)((()=>[I.productItem.product_price!=I.productItem.product_final_price?((0,r.wg)(),(0,r.iD)("span",_,[(0,r._)("s",null,(0,i.zw)(I.productItem.product_price)+(0,i.zw)(t.$heap.state.currencySign),1),h])):(0,r.kq)("",!0),(0,r.Uk)(" "+(0,i.zw)(I.productItem.product_final_price)+(0,i.zw)(t.$heap.state.currencySign),1)])),_:1})])),_:1}),(0,r.Wm)(C,{lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{slot:"start",color:"primary",src:f.cartOutline},null,8,["src"]),k.inCart?((0,r.wg)(),(0,r.j4)(H,{key:0},{default:(0,r.w5)((()=>[(0,r.Uk)("В корзине ("+(0,i.zw)(I.productItem.product_unit)+")",1)])),_:1})):((0,r.wg)(),(0,r.j4)(H,{key:1},{default:(0,r.w5)((()=>[w])),_:1})),(0,r.Wm)(q,{slot:"end",buttonLayout:"horizontal",display:"inline",productItem:I.productItem},null,8,["productItem"])])),_:1}),k.inCart?((0,r.wg)(),(0,r.j4)(C,{key:4,lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{slot:"start",color:"primary",src:f.walletOutline},null,8,["src"]),(0,r.Wm)(H,null,{default:(0,r.w5)((()=>[y])),_:1}),(0,r.Wm)(H,{slot:"end",color:"primary",style:{"font-size":"1.2em"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(k.inCart)+(0,i.zw)(t.$heap.state.currencySign),1)])),_:1})])),_:1})):(0,r.kq)("",!0),null!=k.inCartComment?((0,r.wg)(),(0,r.j4)(C,{key:5,lines:"none"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{slot:"start",color:"primary",src:f.chatboxEllipsesOutline},null,8,["src"]),(0,r.Wm)(D,{value:k.inCartComment,onChange:e[1]||(e[1]=t=>k.cartCommentUpdate(t.target.value)),placeholder:"заметка для продавца"},null,8,["value"])])),_:1})):(0,r.kq)("",!0)]})),_:1})):(0,r.kq)("",!0)]})),_:1},8,["page-title","cartComponent"])}o(5069);var I=o(9755),k=o.n(I),v=o(2008),W=o(8903),z=o(8292),b=o(4966),C=o(3387),$=o(9052),j=o(7782),U={components:{ImageSliderComp:b.Z,CartAddButtons:C.Z,IonTextarea:z.g2,IonListHeader:z.yh,IonText:z.yW,IonIcon:z.gu,IonItem:z.Ie,IonChip:z.hM,IonLabel:z.Q$,IonList:z.q_,IonAccordion:z.We,IonAccordionGroup:z.eh},setup(){return{CartHeader:$.Z,compassOutline:W.gmD,cartOutline:W.Ox0,pricetagOutline:W.TuG,giftOutline:W._$o,walletOutline:W.S5P,chatboxEllipsesOutline:W._Pt,settingsOutline:W.C$N,layersOutline:W.Y1P}},data(){return{productId:this.$route.params.id,productItem:null,is_loading:0}},mounted(){this.getProduct()},computed:{categories(){var t,e,o,r,i,n;if(null===(t=this.productItem)||void 0===t||null===(e=t.member_of_groups)||void 0===e||!e.group_ids)return[];const u=null===(o=this.productItem)||void 0===o||null===(r=o.member_of_groups)||void 0===r?void 0:r.group_ids.split(","),l=null===(i=this.productItem)||void 0===i||null===(n=i.member_of_groups)||void 0===n?void 0:n.group_names.split(",");let a=[];for(let s in u)a.push({group_id:u[s],group_name:l[s]});return a},promoFinish(){try{return this.productItem.product_promo_finish.split(" ")[0].split("-").reverse().join(".")}catch(t){return null}},promoPercent(){return Math.round(100-this.productItem.product_final_price/this.productItem.product_price*100)},inCart(){const t=j.Z.cart.entryGet(this.productId);return t?t.data.entry_quantity*t.data.entry_price:0},inCartComment(){var t;const e=j.Z.cart.entryGet(this.productId);return e?null!==(t=e.data.entry_comment)&&void 0!==t?t:"":null},isAvailable(){return 1!=this.productItem.is_counted||this.productItem.product_quantity-this.productItem.product_quantity_reserved>0},weight_in_gramms(){return 1e3*this.productItem.product_weight}},methods:{async getProduct(){if(1!=this.is_loading){try{this.is_loading=1,this.productItem=await k().post(v.Z.state.hostname+"Product/itemGet",{product_id:this.productId})}catch(t){}this.is_loading=0}},cartCommentUpdate(t){const e={product_id:this.productId,entry_comment:t};j.Z.cart.entryUpdate(e)}}},x=o(3744);const O=(0,x.Z)(U,[["render",f]]);var H=O}}]);
//# sourceMappingURL=4717.b8c8330c.js.map