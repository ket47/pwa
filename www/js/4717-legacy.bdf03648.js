"use strict";(self["webpackChunktezkel"]=self["webpackChunktezkel"]||[]).push([[4717],{3123:function(t,e,n){var r=n(2104),i=n(6916),o=n(1702),u=n(7007),l=n(7850),a=n(9670),c=n(4488),s=n(6707),d=n(1530),p=n(7466),m=n(1340),g=n(8173),f=n(1589),h=n(7651),_=n(2261),w=n(2999),v=n(7293),y=w.UNSUPPORTED_Y,I=4294967295,k=Math.min,b=[].push,W=o(/./.exec),x=o(b),z=o("".slice),C=!v((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));u("split",(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=m(c(this)),u=void 0===n?I:n>>>0;if(0===u)return[];if(void 0===t)return[o];if(!l(t))return i(e,o,t,u);var a,s,d,p=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,w=new RegExp(t.source,g+"g");while(a=i(_,w,o)){if(s=w.lastIndex,s>h&&(x(p,z(o,h,a.index)),a.length>1&&a.index<o.length&&r(b,p,f(a,1)),d=a[0].length,h=s,p.length>=u))break;w.lastIndex===a.index&&w.lastIndex++}return h===o.length?!d&&W(w,"")||x(p,""):x(p,z(o,h)),p.length>u?f(p,0,u):p}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e,[function(e,n){var r=c(this),u=void 0==e?void 0:g(e,t);return u?i(u,e,r,n):i(o,m(r),e,n)},function(t,r){var i=a(this),u=m(t),l=n(o,i,u,r,o!==e);if(l.done)return l.value;var c=s(i,RegExp),g=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(y?"g":"y"),_=new c(y?"^(?:"+i.source+")":i,f),w=void 0===r?I:r>>>0;if(0===w)return[];if(0===u.length)return null===h(_,u)?[u]:[];var v=0,b=0,W=[];while(b<u.length){_.lastIndex=y?0:b;var C,$=h(_,y?z(u,b):u);if(null===$||(C=k(p(_.lastIndex+(y?b:0)),u.length))===v)b=d(u,b,g);else{if(x(W,z(u,v,b)),W.length===w)return W;for(var U=1;U<=$.length-1;U++)if(x(W,$[U]),W.length===w)return W;b=v=C}}return x(W,z(u,v)),W}]}),!C,y)},4966:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(6252),i=n(3577),o={key:0,style:{position:"relative"}},u=["src"],l=["src"];function a(t,e,n,a,c,s){var d=(0,r.up)("ion-icon"),p=(0,r.up)("ion-fab-button"),m=(0,r.up)("ion-fab"),g=(0,r.up)("swiper-slide"),f=(0,r.up)("swiper");return c.expanded?((0,r.wg)(),(0,r.iD)("div",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.imageList,(function(e){return(0,r.wg)(),(0,r.iD)("div",{key:e.image_hash,style:{border:"2px solid var(--ion-color-primary)"}},[(0,r._)("img",{src:`${t.$heap.state.hostname}image/get.php/${e.image_hash}.1000.1000.webp`},null,8,u)])})),128)),(0,r.Wm)(m,{horizontal:"end",vertical:"top",slot:"fixed"},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{color:"light"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{src:a.contract,size:"large",onClick:e[0]||(e[0]=function(t){return s.minimize()})},null,8,["src"])]})),_:1})]})),_:1})])):((0,r.wg)(),(0,r.j4)(f,{key:1,modules:a.modules,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,effect:"fade",style:(0,i.j5)(`height: ${n.imgHeight||"100%"};`)},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.imageList,(function(e){return(0,r.wg)(),(0,r.j4)(g,{key:e.image_hash},{default:(0,r.w5)((function(){return[(0,r._)("div",{class:(0,i.C_)(`${n.mode?n.mode:""} cropper`),style:(0,i.j5)(`height: ${n.imgHeight+"px"||0};`)},[(0,r._)("img",{style:(0,i.j5)(`min-height: ${n.imgHeight+"px;"||0}`),src:`${t.$heap.state.hostname}image/get.php/${e.image_hash}.${4*n.imgHeight||1200}.${4*n.imgHeight||1200}.webp`},null,12,l)],6)]})),_:2},1024)})),128))]})),_:1},8,["modules","style"]))}var c=n(8903),s=n(8292),d=n(702),p=n(3181),m={components:{Swiper:p.t,SwiperSlide:p.o,IonFab:s.IJ,IonFabButton:s.W4,IonIcon:s.gu},props:["imageList","imgHeight","mode"],setup(){return{modules:[d.pt,d.xW],expand:c.jnR,contract:c.LJB}},data(){return{expanded:!1,vh:0,vw:0}},methods:{maximize(){this.expanded=!0,this.vh=document.getElementsByTagName("ion-content")[0].clientHeight,this.vw=document.getElementsByTagName("ion-content")[0].clientWidth},minimize(){this.expanded=!1,this.vh=document.getElementsByTagName("ion-content")[0].clientHeight,this.vw=document.getElementsByTagName("ion-content")[0].clientWidth}}},g=n(3744);const f=(0,g.Z)(m,[["render",a],["__scopeId","data-v-57ad0950"]]);var h=f},4717:function(t,e,n){n.r(e),n.d(e,{default:function(){return D}});n(4916),n(5306);var r=n(6252),i=n(3577),o={key:0,class:"product-images"},u={class:"blur-image"},l=["src"],a={style:{"font-size":"1.2em"}},c=(0,r.Uk)(),s={key:0},d=(0,r.Uk)(),p={key:1},m={key:2},g=(0,r.Uk)("Варианты"),f={key:0,style:{color:"var(--ion-color-danger)","font-size":"0.75em"}},h=(0,r.Uk)("   "),_=(0,r.Uk)("Не заказан"),w=(0,r.Uk)("Итог");function v(t,e,n,v,y,I){var k,b=(0,r.up)("image-slider-comp"),W=(0,r.up)("ion-list-header"),x=(0,r.up)("ion-text"),z=(0,r.up)("ion-item"),C=(0,r.up)("ion-list"),$=(0,r.up)("ion-accordion"),U=(0,r.up)("ion-accordion-group"),j=(0,r.up)("ion-icon"),O=(0,r.up)("ion-chip"),H=(0,r.up)("ion-label"),q=(0,r.up)("cart-add-buttons"),D=(0,r.up)("ion-textarea"),Z=(0,r.up)("base-layout");return(0,r.wg)(),(0,r.j4)(Z,{"page-title":null===(k=y.productItem)||void 0===k?void 0:k.product_name,pageDefaultBackLink:"/catalog",cartComponent:v.CartHeader},{default:(0,r.w5)((function(){var n;return[y.productItem?((0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",u,[(0,r._)("img",{src:`${t.$heap.state.hostname}image/get.php/${null===(n=y.productItem.images[0])||void 0===n?void 0:n.image_hash}.50.50.webp`},null,8,l)]),(0,r.Wm)(b,{imageList:y.productItem.images,imgHeight:400,mode:"save-aspect-ratio"},null,8,["imageList"])])):(0,r.kq)("",!0),y.productItem?((0,r.wg)(),(0,r.j4)(C,{key:1},{default:(0,r.w5)((function(){var n;return[(0,r.Wm)(W,{style:{"font-size":"1.2em"}},{default:(0,r.w5)((function(){return[(0,r._)("h3",a,[(0,r._)("b",null,(0,i.zw)(y.productItem.product_name),1),c,y.productItem.product_option?((0,r.wg)(),(0,r.iD)("b",s,"["+(0,i.zw)(y.productItem.product_option)+"]",1)):(0,r.kq)("",!0),d,I.isAvailable?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",p,"(Нет в наличии)"))])]})),_:1}),y.productItem.product_description?((0,r.wg)(),(0,r.j4)(U,{key:0,style:{width:"100%"}},{default:(0,r.w5)((function(){return[(0,r.Wm)($,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{slot:"header",lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"product-description",color:"medium"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(y.productItem.product_description),1)]})),_:1})]})),_:1}),(0,r.Wm)(C,{slot:"content"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{lines:"none"})]})),_:1})]})),_:1})]})),_:1})):(0,r.kq)("",!0),y.productItem.is_writable?((0,r.wg)(),(0,r.j4)(z,{key:1,lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(j,{slot:"end",color:"primary",src:v.settingsOutline,onClick:e[0]||(e[0]=function(e){return t.$router.push("/catalog/product-edit-"+y.productId)})},null,8,["src"])]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(z,{lines:"none"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(I.categories,(function(t){return(0,r.wg)(),(0,r.j4)(O,{outline:!0,color:"primary",key:t.group_id},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(t.group_name),1)]})),_:2},1024)})),128))]})),_:1}),null!==(n=y.productItem)&&void 0!==n&&n.options?((0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(z,{lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(j,{src:v.layersOutline,color:"primary",slot:"start"},null,8,["src"]),(0,r.Wm)(H,null,{default:(0,r.w5)((function(){return[g]})),_:1})]})),_:1}),(0,r.Wm)(z,{lines:"none"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(y.productItem.options,(function(e){return(0,r.wg)(),(0,r.j4)(O,{onClick:function(n){return t.$router.replace(`/catalog/product-${e.product_id}`)},color:"primary",key:e.product_id},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(e.product_option),1)]})),_:2},1032,["onClick"])})),128))]})),_:1})])):(0,r.kq)("",!0),y.productItem.product_price!=y.productItem.product_final_price?((0,r.wg)(),(0,r.j4)(z,{key:3,lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(j,{slot:"start",color:"primary",src:v.giftOutline},null,8,["src"]),(0,r.Wm)(H,null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Акция до "+(0,i.zw)(I.promoFinish),1)]})),_:1}),(0,r.Wm)(H,{slot:"end",color:"success",style:{"font-size":"1.2em"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("-"+(0,i.zw)(I.promoPercent)+"%",1)]})),_:1})]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(z,{lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(j,{slot:"start",color:"primary",src:v.pricetagOutline},null,8,["src"]),"порция"==y.productItem.product_unit?((0,r.wg)(),(0,r.j4)(H,{key:0},{default:(0,r.w5)((function(){return[(0,r.Uk)("Цена за "+(0,i.zw)(I.weight_in_gramms)+"г",1)]})),_:1})):"порция мл"==y.productItem.product_unit?((0,r.wg)(),(0,r.j4)(H,{key:1},{default:(0,r.w5)((function(){return[(0,r.Uk)("Цена за "+(0,i.zw)(I.weight_in_gramms)+"мл",1)]})),_:1})):((0,r.wg)(),(0,r.j4)(H,{key:2},{default:(0,r.w5)((function(){return[(0,r.Uk)("Цена за "+(0,i.zw)(y.productItem.product_unit),1)]})),_:1})),(0,r.Wm)(H,{slot:"end",color:"primary",style:{"font-size":"1.2em"}},{default:(0,r.w5)((function(){return[y.productItem.product_price!=y.productItem.product_final_price?((0,r.wg)(),(0,r.iD)("span",f,[(0,r._)("s",null,(0,i.zw)(y.productItem.product_price)+(0,i.zw)(t.$heap.state.currencySign),1),h])):(0,r.kq)("",!0),(0,r.Uk)(" "+(0,i.zw)(y.productItem.product_final_price)+(0,i.zw)(t.$heap.state.currencySign),1)]})),_:1})]})),_:1}),(0,r.Wm)(z,{lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(j,{slot:"start",color:"primary",src:v.cartOutline},null,8,["src"]),I.inCart?((0,r.wg)(),(0,r.j4)(H,{key:0},{default:(0,r.w5)((function(){return[(0,r.Uk)("В корзине ("+(0,i.zw)(y.productItem.product_unit)+")",1)]})),_:1})):((0,r.wg)(),(0,r.j4)(H,{key:1},{default:(0,r.w5)((function(){return[_]})),_:1})),(0,r.Wm)(q,{slot:"end",buttonLayout:"horizontal",display:"inline",productItem:y.productItem},null,8,["productItem"])]})),_:1}),I.inCart?((0,r.wg)(),(0,r.j4)(z,{key:4,lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(j,{slot:"start",color:"primary",src:v.walletOutline},null,8,["src"]),(0,r.Wm)(H,null,{default:(0,r.w5)((function(){return[w]})),_:1}),(0,r.Wm)(H,{slot:"end",color:"primary",style:{"font-size":"1.2em"}},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(I.inCart)+(0,i.zw)(t.$heap.state.currencySign),1)]})),_:1})]})),_:1})):(0,r.kq)("",!0),null!=I.inCartComment?((0,r.wg)(),(0,r.j4)(z,{key:5,lines:"none"},{default:(0,r.w5)((function(){return[(0,r.Wm)(j,{slot:"start",color:"primary",src:v.chatboxEllipsesOutline},null,8,["src"]),(0,r.Wm)(D,{value:I.inCartComment,onChange:e[1]||(e[1]=function(t){return I.cartCommentUpdate(t.target.value)}),placeholder:"заметка для продавца"},null,8,["value"])]})),_:1})):(0,r.kq)("",!0)]})),_:1})):(0,r.kq)("",!0)]})),_:1},8,["page-title","cartComponent"])}var y=n(6835),I=n(8534),k=(n(3123),n(5069),n(9755)),b=n.n(k),W=n(2008),x=n(8903),z=n(8292),C=n(4966),$=n(3387),U=n(9052),j=n(7782),O={components:{ImageSliderComp:C.Z,CartAddButtons:$.Z,IonTextarea:z.g2,IonListHeader:z.yh,IonText:z.yW,IonIcon:z.gu,IonItem:z.Ie,IonChip:z.hM,IonLabel:z.Q$,IonList:z.q_,IonAccordion:z.We,IonAccordionGroup:z.eh},setup(){return{CartHeader:U.Z,compassOutline:x.gmD,cartOutline:x.Ox0,pricetagOutline:x.TuG,giftOutline:x._$o,walletOutline:x.S5P,chatboxEllipsesOutline:x._Pt,settingsOutline:x.C$N,layersOutline:x.Y1P}},data(){return{productId:this.$route.params.id,productItem:null,is_loading:0}},mounted(){this.getProduct()},computed:{categories(){var t,e,n,r,i,o;if(null===(t=this.productItem)||void 0===t||null===(e=t.member_of_groups)||void 0===e||!e.group_ids)return[];var u=null===(n=this.productItem)||void 0===n||null===(r=n.member_of_groups)||void 0===r?void 0:r.group_ids.split(","),l=null===(i=this.productItem)||void 0===i||null===(o=i.member_of_groups)||void 0===o?void 0:o.group_names.split(","),a=[];for(var c in u)a.push({group_id:u[c],group_name:l[c]});return a},promoFinish(){try{return this.productItem.product_promo_finish.split(" ")[0].split("-").reverse().join(".")}catch(t){return null}},promoPercent(){return Math.round(100-this.productItem.product_final_price/this.productItem.product_price*100)},inCart(){var t=j.Z.cart.entryGet(this.productId);return t?t.data.entry_quantity*t.data.entry_price:0},inCartComment(){var t,e=j.Z.cart.entryGet(this.productId);return e?null!==(t=e.data.entry_comment)&&void 0!==t?t:"":null},isAvailable(){return 1!=this.productItem.is_counted||this.productItem.product_quantity-this.productItem.product_quantity_reserved>0},weight_in_gramms(){return 1e3*this.productItem.product_weight}},methods:{getProduct(){var t=this;return(0,I.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=t.is_loading){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.is_loading=1,e.next=6,b().post(W.Z.state.hostname+"Product/itemGet",{product_id:t.productId});case 6:t.productItem=e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](2);case 11:t.is_loading=0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},cartCommentUpdate(t){var e={product_id:this.productId,entry_comment:t};j.Z.cart.entryUpdate(e)}}},H=n(3744);const q=(0,H.Z)(O,[["render",v]]);var D=q}}]);
//# sourceMappingURL=4717-legacy.bdf03648.js.map