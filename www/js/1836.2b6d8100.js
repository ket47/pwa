"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[1836],{1836:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var a=s(641),l=s(33);const o={key:0},i=["href"],n={key:1};function d(t,e,s,d,r,u){var m,p;const _=(0,a.g2)("ion-text"),h=(0,a.g2)("ion-card-content"),c=(0,a.g2)("ion-card"),b=(0,a.g2)("ion-icon"),g=(0,a.g2)("ion-toggle"),f=(0,a.g2)("ion-item"),I=(0,a.g2)("ion-list"),k=(0,a.g2)("ion-label"),y=(0,a.g2)("ion-item-divider"),F=(0,a.g2)("ion-radio"),v=(0,a.g2)("ion-radio-group"),P=(0,a.g2)("image-tile-comp"),V=(0,a.g2)("ion-button"),C=(0,a.g2)("ion-input"),O=(0,a.g2)("ion-textarea"),$=(0,a.g2)("ion-item-group"),w=(0,a.g2)("base-layout");return(0,a.uX)(),(0,a.Wv)(w,{"page-title":null!==(m=null===(p=r.postItem)||void 0===p?void 0:p.post_title)&&void 0!==m?m:"Пост"},{default:(0,a.k6)((()=>[r.postItem?((0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(h,{class:(0,l.C4)(u.messageClass)},{default:(0,a.k6)((()=>[(0,a.bF)(_,{color:"dark"},{default:(0,a.k6)((()=>[(0,a.eW)((0,l.v_)(u.message),1)])),_:1})])),_:1},8,["class"])])),_:1}),(0,a.bF)(I,null,{default:(0,a.k6)((()=>[(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(b,{src:d.trashOutline,color:"primary",slot:"start"},null,8,["src"]),(0,a.bF)(g,{modelValue:r.is_deleted,"onUpdate:modelValue":e[0]||(e[0]=t=>r.is_deleted=t),color:"danger",onIonChange:e[1]||(e[1]=t=>u.itemDelete(t.target.checked?1:0))},{default:(0,a.k6)((()=>[(0,a.eW)("Удален")])),_:1},8,["modelValue"])])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(b,{src:d.ribbonOutline,color:"primary",slot:"start"},null,8,["src"]),(0,a.bF)(g,{modelValue:r.is_promoted,"onUpdate:modelValue":e[2]||(e[2]=t=>r.is_promoted=t),onIonChange:e[3]||(e[3]=t=>u.save("is_promoted",r.is_promoted))},{default:(0,a.k6)((()=>[(0,a.eW)("Promoted")])),_:1},8,["modelValue"])])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(b,{src:d.ribbonOutline,color:"primary",slot:"start"},null,8,["src"]),(0,a.bF)(g,{modelValue:r.is_disabled,"onUpdate:modelValue":e[4]||(e[4]=t=>r.is_disabled=t),onIonChange:e[5]||(e[5]=t=>u.itemDisable(t.target.checked?1:0))},{default:(0,a.k6)((()=>[(0,a.eW)("На модерации")])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,a.Lk)("form",{onChange:e[16]||(e[16]=(...t)=>u.saveForm&&u.saveForm(...t))},[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.eW)("Тип поста")])),_:1})])),_:1}),(0,a.bF)(I,null,{default:(0,a.k6)((()=>[(0,a.bF)(v,{modelValue:r.postItem.post_type,"onUpdate:modelValue":e[7]||(e[7]=t=>r.postItem.post_type=t),onIonChange:u.saveForm,name:"post_type"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.postTypes,(t=>((0,a.uX)(),(0,a.Wv)(f,{key:t.post_type,onClick:e[6]||(e[6]=t=>u.itemImageParamsSet())},{default:(0,a.k6)((()=>[(0,a.eW)((0,l.v_)(t.post_type_name)+" ",1),(0,a.bF)(F,{color:"primary",slot:"end",value:t.post_type},null,8,["value"])])),_:2},1024)))),128))])),_:1},8,["modelValue","onIonChange"])])),_:1}),r.imageParams?((0,a.uX)(),(0,a.Wv)(I,{key:0},{default:(0,a.k6)((()=>[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.eW)("Изображения*")])),_:1})])),_:1}),(0,a.bF)(P,{images:r.postItem.images,image_holder_id:r.postItem.post_id,params:r.imageParams,title:"Фото поста",controller:"Post",ref:"postImgs"},null,8,["images","image_holder_id","params"]),(0,a.bF)(V,{onClick:e[8]||(e[8]=e=>t.$refs.postImgs.take_photo()),color:"light",expand:"block"},{default:(0,a.k6)((()=>[(0,a.bF)(b,{src:d.cameraOutline,slot:"start"},null,8,["src"]),(0,a.eW)(" Добавить фото в пост ")])),_:1})])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(I,null,{default:(0,a.k6)((()=>[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.eW)("Holder*")])),_:1})])),_:1}),r.pickedStore?((0,a.uX)(),(0,a.Wv)(f,{key:0,button:"",onClick:e[9]||(e[9]=t=>u.storePick()),color:"primary"},{default:(0,a.k6)((()=>[(0,a.bF)(b,{slot:"start",src:d.storefrontOutline},null,8,["src"]),(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,l.v_)(r.pickedStore.store_name),1)])),_:1})])),_:1})):((0,a.uX)(),(0,a.Wv)(f,{key:1,button:"",onClick:e[10]||(e[10]=t=>u.storePick()),color:"warning"},{default:(0,a.k6)((()=>[(0,a.bF)(b,{slot:"start",src:d.storefrontOutline},null,8,["src"]),(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.eW)("Выбрать продавца")])),_:1})])),_:1}))])),_:1}),r.imageParams?((0,a.uX)(),(0,a.Wv)(I,{key:1,lines:"full"},{default:(0,a.k6)((()=>[(0,a.bF)($,null,{default:(0,a.k6)((()=>[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.eW)("Основные настройки")])),_:1})])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(C,{modelValue:r.postItem.post_title,"onUpdate:modelValue":e[11]||(e[11]=t=>r.postItem.post_title=t),label:"Заголовок*",labelPlacement:"stacked",name:"post_title",placeholder:"заголовок",clearInput:"true"},null,8,["modelValue"])])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(O,{modelValue:r.postItem.post_content,"onUpdate:modelValue":e[12]||(e[12]=t=>r.postItem.post_content=t),label:"Содержание*",labelPlacement:"stacked",name:"post_content",rows:"6",placeholder:"текст"},null,8,["modelValue"])])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(C,{modelValue:r.postItem.post_route,"onUpdate:modelValue":e[13]||(e[13]=t=>r.postItem.post_route=t),label:"Ссылка*",labelPlacement:"stacked",name:"post_route",placeholder:"ссылка",clearInput:"true"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})):(0,a.Q3)("",!0),r.imageParams?((0,a.uX)(),(0,a.Wv)(I,{key:2,lines:"full"},{default:(0,a.k6)((()=>[(0,a.bF)($,null,{default:(0,a.k6)((()=>[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.eW)("Время действия")])),_:1})])),_:1})])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(C,{type:"date",modelValue:r.postItem.started_at,"onUpdate:modelValue":e[14]||(e[14]=t=>r.postItem.started_at=t),label:"Начало показа",labelPlacement:"stacked",name:"started_at"},null,8,["modelValue"])])),_:1}),(0,a.bF)(f,null,{default:(0,a.k6)((()=>[(0,a.bF)(C,{type:"date",modelValue:r.postItem.finished_at,"onUpdate:modelValue":e[15]||(e[15]=t=>r.postItem.finished_at=t),label:"Конец показа",labelPlacement:"stacked",name:"finished_at"},null,8,["modelValue"])])),_:1})])),_:1})):(0,a.Q3)("",!0)],32),r.postItem&&r.postItem.updated_user?((0,a.uX)(),(0,a.Wv)(I,{key:0},{default:(0,a.k6)((()=>[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(k)])),_:1}),(0,a.bF)(f,{lines:"none"},{default:(0,a.k6)((()=>[(0,a.eW)(" Изменен "+(0,l.v_)(r.postItem.updated_at)+" ",1),(0,a.Lk)("a",{slot:"end",href:`tel:+${r.postItem.updated_user.user_phone}`},(0,l.v_)(r.postItem.updated_user.user_name),9,i)])),_:1})])),_:1})):(0,a.Q3)("",!0)])):((0,a.uX)(),(0,a.CE)("div",n," loading "))])),_:1},8,["page-title"])}s(4114);var r=s(5654),u=s(5480),m=s(9144),p=s(2311),_=s.n(p),h=s(2715),c={components:{IonInput:r.$w,IonTextarea:r.nc,IonCard:r.b_,IonCardContent:r.I9,IonToggle:r.BY,IonIcon:r.iq,IonItem:r.uz,IonList:r.nf,IonLabel:r.he,IonItemDivider:r.Dg,IonItemGroup:r.jh,IonButton:r.Jm,IonText:r.IO,imageTileComp:m.A,IonRadio:r.KO,IonRadioGroup:r.f0},setup(){return{cameraOutline:u.GOB,trashOutline:u.P1A,banOutline:u.Av6,personOutline:u.wAZ,addOutline:u.EKF,calculatorOutline:u.N0h,compassOutline:u.Hy9,chevronBack:u.fcl,layersOutline:u.z8i,ribbonOutline:u.rp8,eyeOffOutline:u.f_X,storefrontOutline:u.te8}},data(){return{postId:this.$route.params.id,postItem:null,imageParams:null,pickedStore:null,postTypes:[{post_type:"slide",post_type_name:"Слайд 1920x700",image_height:700,image_width:1920},{post_type:"story",post_type_name:"История 1500x3200",image_height:3200,image_width:1500}],is_deleted:0,is_disabled:0,is_promoted:0}},computed:{messageCardSeverity(){var t,e;return(null===(t=this.postItem)||void 0===t?void 0:t.validity)<50?"danger":(null===(e=this.postItem)||void 0===e?void 0:e.validity)<this.validity_min?"warning":"primary"},message(){return this.postItem?this.postItem.deleted_at?"Пост не активен и будет удален. Вы еще можете отменить удаление":1==this.postItem.is_disabled?"Пост не активен и находится на рассмотрении у администратора":1==this.postItem.is_hidden?"Пост скрыт со стены.":"Пост активен":""},messageClass(){var t,e;return this.postItem?null!==(t=this.postItem)&&void 0!==t&&t.deleted_at?"pdeleted":1==(null===(e=this.postItem)||void 0===e?void 0:e.is_disabled)?"pdisabled":"pactive":""},categoryList(){let t=[];try{let e=this.postItem.member_of_groups.group_ids.split(","),s=this.postItem.member_of_groups.group_names.split(",");for(let a in e)t.push({group_id:e[a],group_name:s[a]})}catch{}return t}},created(){this.itemGet()},methods:{async itemGet(){try{if(0==this.postId)return void await this.itemCreate();let t=await _().post(`${this.$heap.state.hostname}Post/itemGet`,{post_id:this.postId});this.postItem=this.itemPrepare(t),this.itemParseFlags(),this.itemImageParamsSet(),"store"==t.post_holder&&(this.pickedStore=t.holder)}catch(t){}},itemImageParamsSet(){if(this.postItem.post_type)for(let t of this.postTypes)t.post_type==this.postItem.post_type&&(this.imageParams={image_width:t.image_width,image_height:t.image_height})},itemPrepare(t){return t.started_at&&(t.started_at=t.started_at.split(" ")[0]),t.finished_at&&(t.finished_at=t.finished_at.split(" ")[0]),t},itemParseFlags(){this.is_deleted=null==this.postItem.deleted_at?0:1,this.is_disabled=0==this.postItem.is_disabled?0:1,this.is_promoted=0==this.postItem.is_promoted?0:1},async itemCreate(){const t={post_title:"Черновик"};try{const e=await _().post(`${this.$heap.state.hostname}Post/itemCreate`,t);e&&this.$router.replace(`/wall/post-edit-${e}`)}catch{}},async itemDelete(t){const e=t?"itemDelete":"itemUnDelete";try{await _().post(`${this.$heap.state.hostname}Post/${e}`,{post_id:this.postId}),this.postItem.deleted_at=t?1:null}catch{this.itemGet()}},async itemDisable(t){if(this.postItem.is_disabled!=t)try{await _().post(`${this.$heap.state.hostname}Post/itemDisable`,{post_id:this.postId,is_disabled:t}),this.postItem.is_disabled=t}catch{this.$flash("Изменение не сохранено"),this.itemGet()}},async itemUpdate(t){try{return await _().post(`${this.$heap.state.hostname}Post/itemUpdate`,JSON.stringify(t)),this.$flash("💾 сохранено"),!0}catch(e){const t=e.responseJSON.messages.error;return null!==t&&void 0!==t&&t.includes("post_content")?this.$flash("Описание слишком короткое"):null!==t&&void 0!==t&&t.includes("post_title")?this.$flash("Заголовок слишком короткий"):this.$flash("Изменение не сохранено"),this.itemGet(),!1}},saveForm(t){const e=t.target.name,s=this.postItem[e]=t.target.value;this.save(e,s)},async save(t,e){if(!this.postItem.post_id)return;let s={post_id:this.postItem.post_id,[t]:e};this.itemUpdate(s)&&(this.postItem[t]=e,this.itemParseFlags())},async storePick(){const t=await r.OZ.create({component:h.A,componentProps:{itemType:"store"},initialBreakpoint:.75,breakpoints:[.75,1],canDissmiss:!0});t.present(),this.$topic.on("dismissModal",(()=>{t.dismiss()}));const e=await t.onDidDismiss();if(!e.data)return;const s={post_id:this.postItem.post_id,post_holder:"store",post_holder_id:e.data.store_id};await this.itemUpdate(s),await this.itemGet()}}},b=s(6262);const g=(0,b.A)(c,[["render",d],["__scopeId","data-v-1985defb"]]);var f=g}}]);
//# sourceMappingURL=1836.2b6d8100.js.map