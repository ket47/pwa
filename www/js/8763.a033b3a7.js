"use strict";(self["webpackChunkTezkel"]=self["webpackChunkTezkel"]||[]).push([[8763],{8763:function(t,a,e){e.r(a),e.d(a,{default:function(){return vt}});var s=e(641);const i={class:"horizontalScroller"},n={id:"analysisPage"},l={class:"print-nonbreakable"},o=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Статистика действий по заказам"),(0,s.Lk)("p",null,"За последние 7 дней")],-1),r={class:"horizontalScroller"},d={class:"grid"},c={class:"row"},u={class:"col"},p={class:"col"},h={class:"print-nonbreakable"},v=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Рейтинг продавцов"),(0,s.Lk)("p",null,"За последние 7 дней")],-1),k={class:"horizontalScroller"},b={class:"grid"},g={class:"row"},m={class:"col"},L={class:"col"},y={class:"print-nonbreakable"},f=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Рейтинг товаров"),(0,s.Lk)("p",null,"За последние 7 дней")],-1),_={class:"horizontalScroller"},C={class:"grid"},w={class:"row"},x={class:"col"},R={class:"print-nonbreakable"},D=(0,s.Lk)("div",{class:"ion-padding-horizontal"},[(0,s.Lk)("h5",null,"Статистика отказов"),(0,s.Lk)("p",null,"За последние 7 дней")],-1);function E(t,a,e,E,P,S){const X=(0,s.g2)("ion-icon"),z=(0,s.g2)("ion-label"),F=(0,s.g2)("ion-chip"),A=(0,s.g2)("statistics-stacked-bar-timeline"),j=(0,s.g2)("statistics-radial-pie"),T=(0,s.g2)("statistics-rating-list"),W=(0,s.g2)("base-layout");return(0,s.uX)(),(0,s.Wv)(W,{pageTitle:"Общая статистика",pageDefaultBackLink:"/user"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",i,[(0,s.bF)(F,{onClick:a[0]||(a[0]=t=>S.reportPrint()),color:"medium"},{default:(0,s.k6)((()=>[(0,s.bF)(X,{src:E.printOutline},null,8,["src"]),(0,s.bF)(z,null,{default:(0,s.k6)((()=>[(0,s.eW)("Напечатать")])),_:1})])),_:1})]),(0,s.Lk)("div",n,[(0,s.Lk)("div",l,[o,(0,s.bF)(A,{label:"Воронка заказов",data:P.dataset,dates:P.totalDates},null,8,["data","dates"])]),(0,s.Lk)("div",r,[(0,s.Lk)("div",d,[(0,s.Lk)("div",c,[(0,s.Lk)("div",u,[P.datasetPie.pay?((0,s.uX)(),(0,s.Wv)(j,{key:0,label:"Успешные оплаты",data:P.datasetPie.pay},null,8,["data"])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",p,[P.datasetPie.completed?((0,s.uX)(),(0,s.Wv)(j,{key:0,label:"Отказы продавцов",data:P.datasetPie.completed},null,8,["data"])):(0,s.Q3)("",!0)])])])]),(0,s.Lk)("div",h,[v,(0,s.Lk)("div",k,[(0,s.Lk)("div",b,[(0,s.Lk)("div",g,[(0,s.Lk)("div",m,[P.datasetRatingLists.top_stores?((0,s.uX)(),(0,s.Wv)(T,{key:0,label:"Лучшие продавцы",data:P.datasetRatingLists.top_stores},null,8,["data"])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",L,[P.datasetRatingLists.antitop_stores?((0,s.uX)(),(0,s.Wv)(T,{key:0,label:"Худшие продавцы",data:P.datasetRatingLists.antitop_stores},null,8,["data"])):(0,s.Q3)("",!0)])])])])]),(0,s.Lk)("div",y,[f,(0,s.Lk)("div",_,[(0,s.Lk)("div",C,[(0,s.Lk)("div",w,[(0,s.Lk)("div",x,[P.datasetRatingLists.top_products?((0,s.uX)(),(0,s.Wv)(T,{key:0,label:"Лучшие товары",data:P.datasetRatingLists.top_products},null,8,["data"])):(0,s.Q3)("",!0)])])])])]),(0,s.Lk)("div",R,[D,(0,s.bF)(A,{label:"Отказы",data:P.datasetRejections,dates:P.rejectionDates,showTotal:!0,showDynamics:!0},null,8,["data","dates"])])])])),_:1})}e(4114);var P=e(5654),S=e(5480),X=e(33);const z={class:"ion-padding-horizontal"},F={key:1,class:"ion-padding ion-text-center"},A=(0,s.Lk)("h2",null,"Недостаточно данных",-1),j=(0,s.Lk)("p",null,"для показа статистики",-1),T=[A,j];function W(t,a,e,i,n,l){const o=(0,s.g2)("apexchart");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("h6",z,(0,X.v_)(e.label),1),e.data.series.length>0?((0,s.uX)(),(0,s.Wv)(o,{key:0,type:"pie",width:"380",options:n.chartOptions,series:n.series,ref:"apexChartElement"},null,8,["options","series"])):((0,s.uX)(),(0,s.CE)("div",F,T))],64)}var $=e(1079),I={components:{apexchart:$.A},props:["label","data","format","color","dates"],setup(){return{}},data(){var t;return{series:null===(t=this.data)||void 0===t?void 0:t.series,chartOptions:{chart:{width:380,type:"pie"},colors:["#00e396","#ff4560"],labels:this.data.labels,legend:{position:"bottom"}}}},methods:{initChart(){this.$refs.apexChartElement&&(this.$refs.apexChartElement.updateSeries(this.data.series),this.$refs.apexChartElement.updateOptions({labels:this.data.labels}))}},mounted(){setTimeout((()=>{this.initChart()}),100)},updated(){setTimeout((()=>{this.initChart()}),1)}},O=e(6262);const G=(0,O.A)(I,[["render",W]]);var Q=G;const B={class:"ion-padding-horizontal"},H={key:1,class:"ion-padding ion-text-center"},K=(0,s.Lk)("h2",null,"Недостаточно данных",-1),q=(0,s.Lk)("p",null,"для показа статистики",-1),M=[K,q];function Z(t,a,e,i,n,l){const o=(0,s.g2)("ion-icon"),r=(0,s.g2)("ion-label"),d=(0,s.g2)("ion-chip"),c=(0,s.g2)("apexchart");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("h6",B,[(0,s.eW)((0,X.v_)(e.label)+" ",1),e.showDynamics&&e.data.length>0?((0,s.uX)(),(0,s.Wv)(d,{key:0,outline:!0,color:l.dynamicsData.color,class:"ion-no-margin",style:{"font-size":"12px",border:"none"}},{default:(0,s.k6)((()=>[(0,s.bF)(o,{icon:l.dynamicsData.icon},null,8,["icon"]),(0,s.bF)(r,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,X.v_)(l.dynamicsData.value)+"%",1)])),_:1})])),_:1},8,["color"])):(0,s.Q3)("",!0)]),e.data.length>0?((0,s.uX)(),(0,s.Wv)(c,{key:0,type:"bar",height:"370",options:n.chartOptions,series:n.series,ref:"apexChartElement"},null,8,["options","series"])):((0,s.uX)(),(0,s.CE)("div",H,M))],64)}var U={components:{IonChip:P.ZB,IonLabel:P.he,IonIcon:P.iq,apexchart:$.A},props:["label","data","format","color","dates","showTotal","showDynamics"],setup(){return{caretUpOutline:S.rHB,caretDownOutline:S.mF9,caretForwardOutline:S.d2Q}},data(){return{value:0,series:this.data,chartOptions:{chart:{type:"bar",height:350,stacked:!0,zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"35%",dataLabels:{total:{enabled:this.showTotal,formatter:function(t,a){return"Всего: \n"+t},style:{fontSize:"13px"}}}}},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},fill:{opacity:1}}}},computed:{datesParsed(){return this.getDates(this.dates)},dynamicsData(){var t=0,a=0;for(var e in this.data){if(this.data[e].data.lenght<2)break;t+=this.data[e].data[this.data.length-1],a+=this.data[e].data[this.data.length-2]}const s=((t-a)/((t+a)/2)*100||0).toFixed(2);var i="medium",n=S.d2Q;return s>0&&(i="danger",n=S.rHB),s<0&&(i="success",n=S.mF9),{value:s,color:i,icon:n}}},methods:{initChart(){this.$refs.apexChartElement&&(this.$refs.apexChartElement.updateSeries(this.data),this.$refs.apexChartElement.updateOptions({xaxis:{categories:this.datesParsed}}))},getDates(t){let a=[];for(let e=0;e<t.length;e++)a.unshift(new Date(t[e]).toLocaleString("ru",{day:"numeric",month:"long"}));return a}},mounted(){setTimeout((()=>{this.initChart()}),100)},updated(){setTimeout((()=>{this.initChart()}),1)}};const V=(0,O.A)(U,[["render",Z]]);var Y=V;const J=t=>((0,s.Qi)("data-v-2996913c"),t=t(),(0,s.jt)(),t),N={class:"ion-padding-horizontal"},tt={key:0,class:"table",style:{"overflow-x":"auto"}},at=J((()=>(0,s.Lk)("div",{class:"table_h"},[(0,s.Lk)("div",null,"#"),(0,s.Lk)("div",null,"Продавец"),(0,s.Lk)("div",null,"Показы")],-1))),et={key:1,class:"ion-padding ion-text-center"},st=J((()=>(0,s.Lk)("h2",null,"Недостаточно данных",-1))),it=J((()=>(0,s.Lk)("p",null,"для показа статистики",-1))),nt=[st,it];function lt(t,a,e,i,n,l){const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("h6",N,(0,X.v_)(e.label),1),n.list.length>0?((0,s.uX)(),(0,s.CE)("div",tt,[at,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.list,((t,a)=>((0,s.uX)(),(0,s.CE)("div",{key:a,class:"table_r"},[(0,s.Lk)("div",null,(0,X.v_)(a+1),1),(0,s.Lk)("div",null,[(0,s.bF)(o,{to:`/catalog/${t.act_group}-${t.act_target_id}`},{default:(0,s.k6)((()=>[(0,s.eW)((0,X.v_)(t.act_description),1)])),_:2},1032,["to"])]),(0,s.Lk)("div",null,(0,X.v_)(t.total),1)])))),128))])):((0,s.uX)(),(0,s.CE)("div",et,nt))],64)}var ot={components:{},props:["label","data","format","color","dates"],setup(){return{}},data(){return{value:0,list:this.data}},methods:{}};const rt=(0,O.A)(ot,[["render",lt],["__scopeId","data-v-2996913c"]]);var dt=rt,ct=e(2311),ut=e.n(ct),pt={components:{IonChip:P.ZB,IonLabel:P.he,IonIcon:P.iq,StatisticsStackedBarTimeline:Y,StatisticsRadialPie:Q,StatisticsRatingList:dt},setup(){return{printOutline:S.SfY}},data(){return{dataset:[],totalDates:[],datasetPie:{},datasetRatingLists:{},datasetRejections:[],rejectionDates:[]}},async mounted(){await this.analysisGet(),await this.topRatingGet(),this.rejectionAnalysisGet()},methods:{async analysisGet(){const t=await ut().post(`${this.$heap.state.hostname}Statistics/totalOrderAnalysisGet`,{point_span:7,point_num:10});t.body.reverse(),this.parseAnalysisResponse(t.body),this.parsePieStatisticResponse(t.body),this.totalDates=this.parseDates(t.body)},async topRatingGet(){const t=await ut().post(`${this.$heap.state.hostname}Statistics/ratingAnalysisGet`,{point_span:7,point_num:10});this.datasetRatingLists=t.body},async rejectionAnalysisGet(){const t=await ut().post(`${this.$heap.state.hostname}Statistics/rejectionAnalysisGet`,{point_span:7,point_num:10});t.body.reverse(),this.parseRejectionResponse(t.body),this.rejectionDates=this.parseDates(t.body)},parseAnalysisResponse(t){const a={create:"Начало оформления",start:"Оформление",finish:"Завершение"},e={success:"Успех",failure:"Ошибка"};for(var s in a)for(var i in e){let l={name:a[s]+" ("+e[i]+")",group:s,data:[]};for(var n in t)l.data.push(1*t[n][s+"_"+i]);this.dataset.push(l)}},parsePieStatisticResponse(t){const a={pay:"Оплаты"},e={success:"Успех",failure:"Ошибка"},s=t[t.length-1];for(var i in a)for(var n in this.datasetPie[i]={labels:[],series:[]},e)s[i+"_"+n]&&(this.datasetPie[i].series.push(1*s[i+"_"+n]),this.datasetPie[i].labels.push(e[n]));this.datasetPie.completed={series:[1*s.finish_success-1*s.reject_success,1*s.reject_success],labels:["Исполнен","Отказ"]}},parseRejectionResponse(t){const a={home:"Главная",store:"Продавец",product:"Товар",location:"Локация",auth:"Вход"};for(var e in a){let i={name:a[e],data:[]};for(var s in t)i.data.push(1*t[s][e]);this.datasetRejections.push(i)}},parseDates(t){let a=[];for(var e in t)a.unshift(t[e].point_finish);return a},reportPrint(){var t;null===(t=document.getElementById("printPage"))||void 0===t||t.remove(),document.body.setAttribute("class","print");let a=document.getElementById("analysisPage"),e=document.createElement("DIV");e.setAttribute("id","printPage"),e.innerHTML=a.innerHTML,document.body.appendChild(e),setTimeout(window.print(),500)}}};const ht=(0,O.A)(pt,[["render",E]]);var vt=ht}}]);
//# sourceMappingURL=8763.a033b3a7.js.map