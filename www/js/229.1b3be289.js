"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[229],{7537:function(t,e,r){r.d(e,{Z:function(){return d}});var o=r(6252),n=r(3577);const u=["src"];function i(t,e,r,i,l,a){const c=(0,o.up)("swiper-slide"),p=(0,o.up)("swiper");return(0,o.wg)(),(0,o.j4)(p,{modules:i.modules,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,effect:"fade"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.imageList,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.image_hash},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"crop-to-fit",style:(0,n.j5)(`height: ${r.imgHeight||300}px;`)},[(0,o._)("img",{style:(0,n.j5)(`min-height: ${r.imgHeight||300}px;`),src:`${t.$heap.state.hostname}image/get.php/${e.image_hash}.${4*r.imgHeight||1200}.${r.imgHeight||300}.webp`},null,12,u)],4)])),_:2},1024)))),128))])),_:1},8,["modules"])}var l=r(702),a=r(3181),c={components:{Swiper:a.t,SwiperSlide:a.o},props:["imageList","imgHeight"],setup(){return{modules:[l.pt,l.xW]}}},p=r(3744);const s=(0,p.Z)(c,[["render",i],["__scopeId","data-v-f830f732"]]);var d=s},9229:function(t,e,r){r.r(e),r.d(e,{default:function(){return W}});var o=r(6252),n=r(3577);const u={key:0},i={key:0,style:{color:"var(--ion-color-danger)","font-size":"0.75em"}},l=(0,o.Uk)("   "),a=(0,o.Uk)("Не заказан"),c=(0,o.Uk)("Итог");function p(t,e,r,p,s,d){const m=(0,o.up)("image-slider"),g=(0,o.up)("ion-list-header"),_=(0,o.up)("ion-text"),w=(0,o.up)("ion-icon"),h=(0,o.up)("ion-item"),f=(0,o.up)("ion-chip"),I=(0,o.up)("ion-label"),y=(0,o.up)("cart-add-buttons"),k=(0,o.up)("ion-textarea"),C=(0,o.up)("ion-list"),W=(0,o.up)("base-layout");return(0,o.wg)(),(0,o.j4)(W,{"page-title":s.productItem?.product_name,"page-default-back-link":"/store-"+s.productItem?.store_id,cartComponent:p.CartHeader},{default:(0,o.w5)((()=>[s.productItem?((0,o.wg)(),(0,o.j4)(m,{key:0,imageList:s.productItem.images,imgHeight:"200"},null,8,["imageList"])):(0,o.kq)("",!0),s.productItem?((0,o.wg)(),(0,o.j4)(C,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o._)("h2",null,[(0,o.Uk)((0,n.zw)(s.productItem.product_name)+" ",1),s.productItem.is_counted&&s.productItem.product_quantity>0?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",u,"(Нет в наличии)"))])])),_:1}),(0,o.Wm)(h,{lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{color:"medium"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(s.productItem.product_description),1)])),_:1}),s.productItem?.is_writable?((0,o.wg)(),(0,o.j4)(w,{key:0,slot:"end",src:p.settingsOutline,color:"primary",onClick:e[0]||(e[0]=e=>t.$router.push("product-edit-"+s.productId))},null,8,["src"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(h,{lines:"none"}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{slot:"start",color:"primary",src:p.compassOutline},null,8,["src"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.categories,(t=>((0,o.wg)(),(0,o.j4)(f,{key:t.group_id},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.group_name),1)])),_:2},1024)))),128))])),_:1}),s.productItem.product_price!=s.productItem.product_final_price?((0,o.wg)(),(0,o.j4)(h,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{slot:"start",color:"primary",src:p.giftOutline},null,8,["src"]),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Акция до "+(0,n.zw)(d.promoFinish),1)])),_:1}),(0,o.Wm)(I,{slot:"end",color:"success",style:{"font-size":"1.2em"}},{default:(0,o.w5)((()=>[(0,o.Uk)("-"+(0,n.zw)(d.promoPercent)+"%",1)])),_:1})])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{slot:"start",color:"primary",src:p.pricetagOutline},null,8,["src"]),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Цена за "+(0,n.zw)(s.productItem.product_unit),1)])),_:1}),(0,o.Wm)(I,{slot:"end",color:"primary",style:{"font-size":"1.2em"}},{default:(0,o.w5)((()=>[s.productItem.product_price!=s.productItem.product_final_price?((0,o.wg)(),(0,o.iD)("span",i,[(0,o._)("s",null,(0,n.zw)(s.productItem.product_price)+(0,n.zw)(t.$heap.state.currencySign),1),l])):(0,o.kq)("",!0),(0,o.Uk)(" "+(0,n.zw)(s.productItem.product_final_price)+(0,n.zw)(t.$heap.state.currencySign),1)])),_:1})])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{slot:"start",color:"primary",src:p.cartOutline},null,8,["src"]),d.inCart?((0,o.wg)(),(0,o.j4)(I,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)("В корзине "+(0,n.zw)(s.productItem.product_unit),1)])),_:1})):((0,o.wg)(),(0,o.j4)(I,{key:1},{default:(0,o.w5)((()=>[a])),_:1})),(0,o.Wm)(y,{slot:"end",buttonLayout:"horizontal",display:"inline",productItem:s.productItem},null,8,["productItem"])])),_:1}),d.inCart?((0,o.wg)(),(0,o.j4)(h,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{slot:"start",color:"primary",src:p.walletOutline},null,8,["src"]),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[c])),_:1}),(0,o.Wm)(I,{slot:"end",color:"primary",style:{"font-size":"1.2em"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(d.inCart)+(0,n.zw)(t.$heap.state.currencySign),1)])),_:1})])),_:1})):(0,o.kq)("",!0),null!=d.inCartComment?((0,o.wg)(),(0,o.j4)(h,{key:2},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{slot:"start",color:"primary",src:p.chatboxEllipsesOutline},null,8,["src"]),(0,o.Wm)(k,{modelValue:d.inCartComment,"onUpdate:modelValue":e[1]||(e[1]=t=>d.inCartComment=t),onIonChange:e[2]||(e[2]=t=>d.cartCommentUpdate(t.target.value)),placeholder:"заметка для продавца"},null,8,["modelValue"])])),_:1})):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0)])),_:1},8,["page-title","page-default-back-link","cartComponent"])}var s=r(9755),d=r.n(s),m=r(2008),g=r(8903),_=r(5731),w=r(7537),h=r(2410),f=r(6050),I=r(7782),y={components:{ImageSlider:w.Z,CartAddButtons:h.Z,IonTextarea:_.g2,IonListHeader:_.yh,IonText:_.yW,IonIcon:_.gu,IonItem:_.Ie,IonChip:_.hM,IonLabel:_.Q$,IonList:_.q_},setup(){return{CartHeader:f.Z,compassOutline:g.gmD,cartOutline:g.Ox0,pricetagOutline:g.TuG,giftOutline:g._$o,walletOutline:g.S5P,chatboxEllipsesOutline:g._Pt,settingsOutline:g.C$N}},data(){return{productId:this.$route.params.id,productItem:null}},created(){},computed:{categories(){if(!this.productItem?.member_of_groups?.group_ids)return[];const t=this.productItem?.member_of_groups?.group_ids.split(","),e=this.productItem?.member_of_groups?.group_names.split(",");let r=[];for(let o in t)r.push({group_id:t[o],group_name:e[o]});return r},promoFinish(){try{return this.productItem.product_promo_finish.split(" ")[0].split("-").reverse().join(".")}catch{return null}},promoPercent(){return Math.round(100-this.productItem.product_final_price/this.productItem.product_price*100)},inCart(){const t=I.Z.cart.entryGet(this.productId);return t?t.data.entry_quantity*t.data.entry_price:0},inCartComment(){const t=I.Z.cart.entryGet(this.productId);return t?t.data.entry_comment??"":null}},ionViewDidEnter(){this.getProduct()},methods:{async getProduct(){try{this.productItem=await d().post(m.Z.state.hostname+"Product/itemGet",{product_id:this.productId})}catch{}},cartCommentUpdate(t){const e={product_id:this.productId,entry_comment:t};I.Z.cart.entryUpdate(e)}}},k=r(3744);const C=(0,k.Z)(y,[["render",p]]);var W=C}}]);
//# sourceMappingURL=229.1b3be289.js.map