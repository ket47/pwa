"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[3711],{3711:function(t,a,e){e.r(a),e.d(a,{default:function(){return ut}});var s=e(641);const i={class:"horizontalScroller"},n={id:"analysisPage"},o={class:"print-nonbreakable"},l=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Статистика действий по заказам"),(0,s.Lk)("p",null,"За последние 7 дней")],-1),r={class:"grid"},d={class:"row"},c={class:"col"},u={class:"col"},p={class:"print-nonbreakable"},h=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Рейтинг продавцов"),(0,s.Lk)("p",null,"За последние 7 дней")],-1),v={class:"grid"},k={class:"row"},g={class:"col"},m={class:"col"},b={class:"print-nonbreakable"},L=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Рейтинг товаров"),(0,s.Lk)("p",null,"За последние 7 дней")],-1),y={class:"grid"},f={class:"row"},_={class:"col"},C={class:"print-nonbreakable"},w=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Статистика отказов"),(0,s.Lk)("p",null,"За последние 7 дней")],-1);function x(t,a,e,x,R,D){const E=(0,s.g2)("ion-icon"),P=(0,s.g2)("ion-label"),X=(0,s.g2)("ion-chip"),F=(0,s.g2)("statistics-stacked-bar-timeline"),A=(0,s.g2)("statistics-radial-pie"),S=(0,s.g2)("statistics-rating-list"),j=(0,s.g2)("base-layout");return(0,s.uX)(),(0,s.Wv)(j,{pageTitle:"Общая статистика",pageDefaultBackLink:"/user"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",i,[(0,s.bF)(X,{onClick:a[0]||(a[0]=t=>D.reportPrint()),color:"medium"},{default:(0,s.k6)((()=>[(0,s.bF)(E,{src:x.printOutline},null,8,["src"]),(0,s.bF)(P,null,{default:(0,s.k6)((()=>[(0,s.eW)("Напечатать")])),_:1})])),_:1})]),(0,s.Lk)("div",n,[(0,s.Lk)("div",o,[l,(0,s.bF)(F,{label:"Воронка заказов",data:R.dataset,dates:R.totalDates},null,8,["data","dates"])]),(0,s.Lk)("div",r,[(0,s.Lk)("div",d,[(0,s.Lk)("div",c,[R.datasetPie.pay?((0,s.uX)(),(0,s.Wv)(A,{key:0,label:"Успешные оплаты",data:R.datasetPie.pay},null,8,["data"])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",u,[R.datasetPie.completed?((0,s.uX)(),(0,s.Wv)(A,{key:0,label:"Отказы продавцов",data:R.datasetPie.completed},null,8,["data"])):(0,s.Q3)("",!0)])])]),(0,s.Lk)("div",p,[h,(0,s.Lk)("div",v,[(0,s.Lk)("div",k,[(0,s.Lk)("div",g,[R.datasetRatingLists.top_stores?((0,s.uX)(),(0,s.Wv)(S,{key:0,label:"Лучшие продавцы",data:R.datasetRatingLists.top_stores},null,8,["data"])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",m,[R.datasetRatingLists.antitop_stores?((0,s.uX)(),(0,s.Wv)(S,{key:0,label:"Худшие продавцы",data:R.datasetRatingLists.antitop_stores},null,8,["data"])):(0,s.Q3)("",!0)])])])]),(0,s.Lk)("div",b,[L,(0,s.Lk)("div",y,[(0,s.Lk)("div",f,[(0,s.Lk)("div",_,[R.datasetRatingLists.top_products?((0,s.uX)(),(0,s.Wv)(S,{key:0,label:"Лучшие товары",data:R.datasetRatingLists.top_products},null,8,["data"])):(0,s.Q3)("",!0)])])])]),(0,s.Lk)("div",C,[w,(0,s.bF)(F,{label:"Отказы",data:R.datasetRejections,dates:R.rejectionDates,showTotal:!0,showDynamics:!0},null,8,["data","dates"])])])])),_:1})}e(4114),e(3609);var R=e(5654),D=e(5480),E=e(33);const P={class:"ion-padding-horizontal"},X={key:1,class:"ion-padding ion-text-center"},F=(0,s.Lk)("h2",null,"Недостаточно данных",-1),A=(0,s.Lk)("p",null,"для показа статистики",-1),S=[F,A];function j(t,a,e,i,n,o){const l=(0,s.g2)("apexchart");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("h6",P,(0,E.v_)(e.label),1),e.data.series.length>0?((0,s.uX)(),(0,s.Wv)(l,{key:0,type:"pie",width:"380",options:n.chartOptions,series:n.series,ref:"apexChartElement"},null,8,["options","series"])):((0,s.uX)(),(0,s.CE)("div",X,S))],64)}var z=e(1079),T={components:{apexchart:z.A},props:["label","data","format","color","dates"],setup(){return{}},data(){var t;return{series:null===(t=this.data)||void 0===t?void 0:t.series,chartOptions:{chart:{width:380,type:"pie"},colors:["#00e396","#ff4560"],labels:this.data.labels,legend:{position:"bottom"}}}},methods:{initChart(){this.$refs.apexChartElement&&(this.$refs.apexChartElement.updateSeries(this.data.series),this.$refs.apexChartElement.updateOptions({labels:this.data.labels}))}},mounted(){setTimeout((()=>{this.initChart()}),100)},updated(){setTimeout((()=>{this.initChart()}),1)}},W=e(6262);const $=(0,W.A)(T,[["render",j]]);var I=$;const O={class:"ion-padding-horizontal"},G={key:1,class:"ion-padding ion-text-center"},Q=(0,s.Lk)("h2",null,"Недостаточно данных",-1),B=(0,s.Lk)("p",null,"для показа статистики",-1),H=[Q,B];function K(t,a,e,i,n,o){const l=(0,s.g2)("ion-icon"),r=(0,s.g2)("ion-label"),d=(0,s.g2)("ion-chip"),c=(0,s.g2)("apexchart");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("h6",O,[(0,s.eW)((0,E.v_)(e.label)+" ",1),e.showDynamics&&e.data.length>0?((0,s.uX)(),(0,s.Wv)(d,{key:0,outline:!0,color:o.dynamicsData.color,class:"ion-no-margin",style:{"font-size":"12px",border:"none"}},{default:(0,s.k6)((()=>[(0,s.bF)(l,{icon:o.dynamicsData.icon},null,8,["icon"]),(0,s.bF)(r,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,E.v_)(o.dynamicsData.value)+"%",1)])),_:1})])),_:1},8,["color"])):(0,s.Q3)("",!0)]),e.data.length>0?((0,s.uX)(),(0,s.Wv)(c,{key:0,type:"bar",height:"370",options:n.chartOptions,series:n.series,ref:"apexChartElement"},null,8,["options","series"])):((0,s.uX)(),(0,s.CE)("div",G,H))],64)}var q={components:{IonChip:R.ZB,IonLabel:R.he,IonIcon:R.iq,apexchart:z.A},props:["label","data","format","color","dates","showTotal","showDynamics"],setup(){return{caretUpOutline:D.rHB,caretDownOutline:D.mF9,caretForwardOutline:D.d2Q}},data(){return{value:0,series:this.data,chartOptions:{chart:{type:"bar",height:350,stacked:!0,zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"35%",dataLabels:{total:{enabled:this.showTotal,formatter:function(t,a){return"Всего: \n"+t},style:{fontSize:"13px"}}}}},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},fill:{opacity:1}}}},computed:{datesParsed(){return this.getDates(this.dates)},dynamicsData(){var t=0,a=0;for(var e in this.data){if(this.data[e].data.lenght<2)break;t+=this.data[e].data[this.data.length-1],a+=this.data[e].data[this.data.length-2]}const s=((t-a)/((t+a)/2)*100||0).toFixed(2);var i="medium",n=D.d2Q;return s>0&&(i="danger",n=D.rHB),s<0&&(i="success",n=D.mF9),{value:s,color:i,icon:n}}},methods:{initChart(){this.$refs.apexChartElement&&(this.$refs.apexChartElement.updateSeries(this.data),this.$refs.apexChartElement.updateOptions({xaxis:{categories:this.datesParsed}}))},getDates(t){let a=[];for(let e=0;e<t.length;e++)a.unshift(new Date(t[e]).toLocaleString("ru",{day:"numeric",month:"long"}));return a}},mounted(){setTimeout((()=>{this.initChart()}),100)},updated(){setTimeout((()=>{this.initChart()}),1)}};const M=(0,W.A)(q,[["render",K]]);var Z=M;const U=t=>((0,s.Qi)("data-v-2996913c"),t=t(),(0,s.jt)(),t),V={class:"ion-padding-horizontal"},Y={key:0,class:"table",style:{"overflow-x":"auto"}},J=U((()=>(0,s.Lk)("div",{class:"table_h"},[(0,s.Lk)("div",null,"#"),(0,s.Lk)("div",null,"Продавец"),(0,s.Lk)("div",null,"Показы")],-1))),N={key:1,class:"ion-padding ion-text-center"},tt=U((()=>(0,s.Lk)("h2",null,"Недостаточно данных",-1))),at=U((()=>(0,s.Lk)("p",null,"для показа статистики",-1))),et=[tt,at];function st(t,a,e,i,n,o){const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("h6",V,(0,E.v_)(e.label),1),n.list.length>0?((0,s.uX)(),(0,s.CE)("div",Y,[J,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.list,((t,a)=>((0,s.uX)(),(0,s.CE)("div",{key:a,class:"table_r"},[(0,s.Lk)("div",null,(0,E.v_)(a+1),1),(0,s.Lk)("div",null,[(0,s.bF)(l,{to:`/catalog/${t.act_group}-${t.act_target_id}`},{default:(0,s.k6)((()=>[(0,s.eW)((0,E.v_)(t.act_description),1)])),_:2},1032,["to"])]),(0,s.Lk)("div",null,(0,E.v_)(t.total),1)])))),128))])):((0,s.uX)(),(0,s.CE)("div",N,et))],64)}var it={components:{},props:["label","data","format","color","dates"],setup(){return{}},data(){return{value:0,list:this.data}},methods:{}};const nt=(0,W.A)(it,[["render",st],["__scopeId","data-v-2996913c"]]);var ot=nt,lt=e(2311),rt=e.n(lt),dt={components:{IonChip:R.ZB,IonLabel:R.he,IonIcon:R.iq,StatisticsStackedBarTimeline:Z,StatisticsRadialPie:I,StatisticsRatingList:ot},setup(){return{printOutline:D.SfY}},data(){return{dataset:[],totalDates:[],datasetPie:{},datasetRatingLists:{},datasetRejections:[],rejectionDates:[]}},async mounted(){await this.analysisGet(),await this.topRatingGet(),this.rejectionAnalysisGet()},methods:{async analysisGet(){const t=await rt().post(`${this.$heap.state.hostname}Statistics/totalOrderAnalysisGet`,{point_span:7,point_num:10});t.body.reverse(),this.parseAnalysisResponse(t.body),this.parsePieStatisticResponse(t.body),this.totalDates=this.parseDates(t.body)},async topRatingGet(){const t=await rt().post(`${this.$heap.state.hostname}Statistics/ratingAnalysisGet`,{point_span:7,point_num:10});this.datasetRatingLists=t.body},async rejectionAnalysisGet(){const t=await rt().post(`${this.$heap.state.hostname}Statistics/rejectionAnalysisGet`,{point_span:7,point_num:10});t.body.reverse(),this.parseRejectionResponse(t.body),this.rejectionDates=this.parseDates(t.body)},parseAnalysisResponse(t){const a={create:"Начало оформления",start:"Оформление",finish:"Завершение"},e={success:"Успех",failure:"Ошибка"};for(var s in a)for(var i in e){let o={name:a[s]+" ("+e[i]+")",group:s,data:[]};for(var n in t)o.data.push(1*t[n][s+"_"+i]);this.dataset.push(o)}},parsePieStatisticResponse(t){const a={pay:"Оплаты"},e={success:"Успех",failure:"Ошибка"},s=t[t.length-1];for(var i in a)for(var n in this.datasetPie[i]={labels:[],series:[]},e)s[i+"_"+n]&&(this.datasetPie[i].series.push(1*s[i+"_"+n]),this.datasetPie[i].labels.push(e[n]));this.datasetPie.completed={series:[1*s.finish_success-1*s.reject_success,1*s.reject_success],labels:["Исполнен","Отказ"]}},parseRejectionResponse(t){const a={home:"Главная",store:"Продавец",product:"Товар",location:"Локация",auth:"Вход"};for(var e in a){let i={name:a[e],data:[]};for(var s in t)i.data.push(1*t[s][e]);this.datasetRejections.push(i)}},parseDates(t){let a=[];for(var e in t)a.unshift(t[e].point_finish);return a},reportPrint(){var t;null===(t=document.getElementById("printPage"))||void 0===t||t.remove(),document.body.setAttribute("class","print");let a=document.getElementById("analysisPage"),e=document.createElement("DIV");e.setAttribute("id","printPage"),e.innerHTML=a.innerHTML,document.body.appendChild(e),setTimeout(window.print(),500)}}};const ct=(0,W.A)(dt,[["render",x]]);var ut=ct}}]);
//# sourceMappingURL=3711.9cb0c489.js.map