"use strict";(self["webpackChunktezkel_delivery"]=self["webpackChunktezkel_delivery"]||[]).push([[973],{5973:function(t,o,e){e.r(o),e.d(o,{default:function(){return k}});var a=e(6252),i=e(3577);const n=(0,a.Uk)(" Пока адреса не добавлены "),l=(0,a.Uk)("Добавить адрес");function s(t,o,e,s,r,c){const u=(0,a.up)("ion-img"),d=(0,a.up)("ion-label"),p=(0,a.up)("ion-icon"),_=(0,a.up)("ion-item"),m=(0,a.up)("ion-list"),h=(0,a.up)("ion-card-content"),g=(0,a.up)("ion-card"),f=(0,a.up)("ion-list-header"),w=(0,a.up)("base-layout");return(0,a.wg)(),(0,a.j4)(w,{"page-title":"Мои адреса","page-default-back-link":"/user-dashboard",ref:"UserAddressPage"},{default:(0,a.w5)((()=>[r.locationList.length?((0,a.wg)(),(0,a.j4)(m,{key:0,lines:"full"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.locationList,((o,e)=>((0,a.wg)(),(0,a.j4)(_,{key:o.location_id},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{slot:"start",src:`${t.$heap.state.hostname}/image/get.php/${o.image_hash}.32.32.png`},null,8,["src"]),(0,a.Wm)(d,{onClick:t=>c.locationSetMain(`${o.location_id}`,`${e}`),style:{"white-space":"normal",cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.location_address),1)])),_:2},1032,["onClick"]),(0,a.Wm)(p,{slot:"end",icon:s.trash,onClick:t=>c.locationDelete(`${o.location_id}`,`${e}`)},null,8,["icon","onClick"])])),_:2},1024)))),128))])),_:1})):((0,a.wg)(),(0,a.j4)(g,{key:1,color:"warning"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[n])),_:1})])),_:1})),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[l])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.locationGroupList,(o=>((0,a.wg)(),(0,a.j4)(_,{key:o.group_id,onClick:t=>c.modalLocationCreate(`${o.group_id}`,`${o.group_name}`),style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{src:`${t.$heap.state.hostname}/image/get.php/${o.image_hash}.32.32.png`},null,8,["src"]),(0,a.Wm)(d,{style:{"margin-left":"5px","padding-left":"5px","border-left":"solid 1px black","white-space":"normal"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.group_name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},512)}var r=e(853),c=e(1805),u=e(2008),d=e(9042),p=e(9755),_=e.n(p),m=e(3675),h=e(8903),g={name:"UserAddresses",components:{IonImg:r.Xz,IonLabel:r.Q$,IonItem:r.Ie,IonList:r.q_,IonNote:r.uN,IonListHeader:r.yh,IonIcon:r.gu,IonCard:r.PM,IonCardContent:r.FN},setup(){return{trash:h._Ij}},mounted(){this.locationListGet()},methods:{async modalLocationCreate(t,o){if(!u.Z.state.user.user_id)return this.$flash("Чтобы добавленные адреса сохранились, пожалуйста войдите в систему"),void c.Z.push({name:"UserSignIn"});var e=String(o).toLowerCase();const a=await r.Fy.create({component:m.Z,showBackdrop:!0,backdropDismiss:!0,swipeToClose:!0,cssClass:"update-profile-modal",presentingElement:this.$refs.UserAddressPage.$el,componentProps:{location_group_name_low:e}});return a.onDidDismiss().then((o=>{this.locationCreate(t,o.data)})),a.present()},locationListGet(){var t=this;_().get(u.Z.state.hostname+"User/locationListGet",{includeGroupList:1}).done((function(o){if(t.locationList=o.location_list,t.locationGroupList=o.location_group_list,t.locationList)for(let e of t.locationList)1==e.is_main&&(u.Z.state.user.location_main=e)}))},locationCreate(t,o){if(!o)return;let e={location_holder:"user",location_holder_id:u.Z.state.user.user_id,location_group_id:t,location_address:o.location_address,location_latitude:o.location_latitude,location_longitude:o.location_longitude};var a=this;_().post(u.Z.state.hostname+"User/locationCreate",e).done((function(t){a.locationListGet()})).fail((function(t){t.responseJSON&&"limit_exeeded"==t.responseJSON.messages.error&&a.$flash("Больше адресов добавить нельзя")}))},async locationSetMain(t,o){var e=this,a=e.locationList[o];u.Z.state.user.location_main={location_id:a.location_id,location_latitude:a.location_latitude,location_altitude:a.location_altitude,location_address:a.location_address,image_hash:a.image_hash},c.Z.go(-1),await _().post(u.Z.state.hostname+"User/locationSetMain",{location_id:t}),d.Z.publish("userMainLocationSet",u.Z.state.user.location_main)},locationDelete(t,o){var e=this;e.locationList.splice(o,1),_().post(u.Z.state.hostname+"User/locationDelete",{location_id:t}).done((function(t){e.locationListGet()}))}},data(){return{locationList:[],locationGroupList:[]}}},f=e(3744);const w=(0,f.Z)(g,[["render",s]]);var k=w}}]);
//# sourceMappingURL=973.45e6f510.js.map