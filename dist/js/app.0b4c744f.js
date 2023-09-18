(function(){"use strict";var e={7739:function(e,t,n){var r=n(9242),o=n(3396);const a=(0,o._)("h1",null,"成績表示",-1),i={key:0},l={id:"csvSelect"},u={id:"generateOptions"},c=(0,o._)("div",null,[(0,o._)("p",null,"ファイルを選択してください")],-1),s={key:1};function p(e,t,n,r,p,d){const f=(0,o.up)("FileSelector"),h=(0,o.up)("SelectYear"),g=(0,o.up)("CheckBoxes"),v=(0,o.up)("HelpNote"),m=(0,o.up)("GradeTable"),C=(0,o.up)("GPASection"),b=(0,o.up)("GradeGraph"),_=(0,o.up)("DeleteButton"),w=(0,o.up)("BottomFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,e.isFileUploaded?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(m),(0,o.Wm)(C),(0,o.Wm)(b),(0,o.Wm)(_,{onButtonClick:e.deleteFile},null,8,["onButtonClick"])])):((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",l,[(0,o.Wm)(f,{onFileContentChange:e.updateFileContent},null,8,["onFileContentChange"])]),(0,o._)("div",u,[(0,o.Uk)(" 年度を選択 "),(0,o.Wm)(h,{onChangeOption:e.updateYearOption},null,8,["onChangeOption"]),(0,o.Wm)(g,{onChangeOption:e.updateCheckbox},null,8,["onChangeOption"])]),c,(0,o.Wm)(v)])),(0,o.Wm)(w)],64)}var d=n(4870),f=n(65);const h=new f.ZP.Store({state:{courses:[],year:"all"},mutations:{setCourses(e,t){e.courses=t},setYear(e,t){e.year=t}}}),g={for:"fileSelect"};function v(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("label",g,[(0,o.Uk)("ファイルを選択 "),(0,o._)("input",{type:"file",id:"fileSelect",onChange:t[0]||(t[0]=(...t)=>e.handleFileUpload&&e.handleFileUpload(...t)),accept:".csv"},null,32)])])}var m=(0,o.aZ)({props:{fileContent:{type:String}},setup(e,{emit:t}){const n=e=>{const n=e.target.files?.[0];if(n){const e=new FileReader;e.onload=e=>{t("file-content-change",e.target?.result)},e.readAsText(n)}};return{handleFileUpload:n}}}),C=n(89);const b=(0,C.Z)(m,[["render",v]]);var _=b,w=n(7139);const G=(0,o._)("option",{value:"all",selected:""},"全て",-1),y=["value"];function k(e,t,n,a,i,l){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("select",{id:"year","onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedOption=t),onChange:t[1]||(t[1]=t=>e.$emit("change-option",e.selectedOption))},[G,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.lastFourYears,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e,value:e},(0,w.zw)(e),9,y)))),128))],544)),[[r.bM,e.selectedOption]])}var A=(0,o.aZ)({emits:["change-option"],setup(){const e=(new Date).getFullYear(),t=Array.from({length:4},((t,n)=>e-n)).map((e=>e.toString())),n=(0,d.iH)("all");return{lastFourYears:t,selectedOption:n}}});const O=(0,C.Z)(A,[["render",k]]);var D=O;const F={for:"teachingCurriculumToGraph"},Y={for:"teachingCurriculumToGPA"};function P(e,t,n,a,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("label",F,[(0,o.Uk)(" 教職をグラフに含める "),(0,o.wy)((0,o._)("input",{type:"checkbox",id:"teachingCurriculumToGraph","onUpdate:modelValue":t[0]||(t[0]=t=>e.includeCurriculumToGraph=t),onChange:t[1]||(t[1]=t=>e.$emit("change-option",e.includeCurriculumToGraph,"graph"))},null,544),[[r.e8,e.includeCurriculumToGraph]])]),(0,o._)("label",Y,[(0,o.Uk)(" 教職をGPAに含める "),(0,o.wy)((0,o._)("input",{type:"checkbox",id:"teachingCurriculumToGPA","onUpdate:modelValue":t[2]||(t[2]=t=>e.includeCurriculumToGPA=t),onChange:t[3]||(t[3]=t=>e.$emit("change-option",e.includeCurriculumToGraph,"gpa"))},null,544),[[r.e8,e.includeCurriculumToGPA]])])])}var T=(0,o.aZ)({emits:["change-option"],setup(){const e=(0,d.iH)(!1),t=(0,d.iH)(!1);return{includeCurriculumToGraph:e,includeCurriculumToGPA:t}}});const Z=(0,C.Z)(T,[["render",P],["__scopeId","data-v-54e41952"]]);var U=Z;const S=(0,o._)("p",null,"修得単位数",-1),x=(0,o._)("p",null,"あなたのGPA",-1);function H(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null,[S,(0,o._)("p",null,(0,w.zw)(e.acquiredUnits)+"/"+(0,w.zw)(e.registeredUnits),1),x,(0,o._)("p",null,(0,w.zw)(e.GPA),1)])}const B={"A+":4.3,A:4,B:3,C:2,D:0},j=e=>Object.keys(B).includes(e.grade),W=(e,t)=>{"all"!==t&&(e=e.filter((e=>e.registrationYear===t)));let n=0,r=0;return e.forEach((e=>{n+=e.units,j(e)&&(r+=e.units)})),[n,r]},z=(e,t)=>{"all"!==t&&(e=e.filter((e=>e.registrationYear===t)));let n=0,r=0;return e.forEach((e=>{j(e)&&(n+=e.units,r+=B[e.grade]*e.units)})),0===n?0:Math.round(r/n*100)/100};var M=(0,o.aZ)({setup(){const e=z(h.state.courses,h.state.year),[t,n]=W(h.state.courses,h.state.year);return{store:h,GPA:e,registeredUnits:t,acquiredUnits:n}}});const V=(0,C.Z)(M,[["render",H]]);var E=V;const N=(0,o._)("h2",null,"成績一覧",-1),$={id:"grade-table"},q=(0,o._)("th",{class:"left"},"科目名",-1),I=(0,o._)("th",null,"単位数",-1),K=(0,o._)("th",null,"成績",-1),Q={key:0},R={class:"left"},J={key:0},L=(0,o._)("div",{id:"unit-sum"},null,-1);function X(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[N,(0,o._)("table",$,[(0,o._)("tr",null,[q,I,K,e.isYearAll(e.year)?((0,o.wg)(),(0,o.iD)("th",Q,"履修年度")):(0,o.kq)("",!0)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.courses,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.grade,class:(0,w.C_)(e.getGradeClassName(t.grade))},[(0,o._)("td",R,(0,w.zw)(t.name),1),(0,o._)("td",null,(0,w.zw)(t.units),1),(0,o._)("td",null,(0,w.zw)(t.grade),1),e.isYearAll(e.year)?((0,o.wg)(),(0,o.iD)("td",J,(0,w.zw)(t.registrationYear),1)):(0,o.kq)("",!0)],2)))),128))]),L],64)}const ee=["A+","A","B","C","D","P","F","認","履修中"],te=e=>{const t=e.sort(((e,t)=>ee.indexOf(e.grade)-ee.indexOf(t.grade)));return console.log(t),t};var ne=te,re=(0,o.aZ)({setup(){const e=h.state.year;let t;t="all"===e?h.state.courses:h.state.courses.filter((t=>t.registrationYear===e));const n={"A+":"a-plus",A:"a",B:"b",C:"c",D:"d",P:"p",F:"f","認":"nin","履修中":"ryu"},r=e=>n[e],o=e=>"all"==e;return t=ne(t),{courses:t,year:e,getGradeClassName:r,isYearAll:o}}});const oe=(0,C.Z)(re,[["render",X]]);var ae=oe;n(7658);const ie=e=>{let t=e.split("\n");return t.shift(),t.pop(),t=t.map((e=>e.replace(/"/g,""))),t.join("\n")},le=e=>{const t=ie(e),n=t.split("\n"),r=[];return n.forEach((e=>{const t=e.split(",")[2],n=e.split(",")[3],o=e.split(",")[9],a=e.split(",")[4],i=e.split(",")[7],l={id:t,name:n,registrationYear:o,units:Number(a),grade:i};r.push(l)})),r};var ue=le;const ce=(0,o.uE)('<div id="help"><h1>使い方</h1><p> TWINSの成績から、成績のCSVファイルをダウンロードして、そのファイルを選択してください </p></div><div id="note"><h1>注意</h1><div id="warnings"><p>このページで算出されるGPAは、対象外を考慮していません</p><p>このページは有志の学生によって作成されています。</p><p> このツールの使用により生じた不利益等について、開発者は一切の責任を負いません </p><p>使用したCSVファイルが外部に保存されることはありません</p></div></div><div id="updte-notice"><p> 現在<a href="https://github.com/Mimori256/Grade-Graph-Old" target="_blank" rel="noreferrer">旧版のGrade-Graph</a>から、Vue.jsを使って作り直しています </p><p>現在更新を進めているため、一部実装されていない機能があります</p><p>旧版を使いたい場合は、上のリンクからアクセスしてください</p></div>',3);function se(e,t,n,r,o,a){return ce}var pe=(0,o.aZ)({setup(){return{}}});const de=(0,C.Z)(pe,[["render",se]]);var fe=de;function he(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("button",{class:"close-button",onClick:t[0]||(t[0]=t=>e.$emit("button-click"))},"戻る")}var ge=(0,o.aZ)({emits:["button-click"],setup(){return{}}});const ve=(0,C.Z)(ge,[["render",he]]);var me=ve;function Ce(e,t,n,r,a,i){const l=(0,o.up)("GChart");return(0,o.wg)(),(0,o.j4)(l,{type:"PieChart",data:e.data,options:e.options},null,8,["data","options"])}var be=n(739);const _e=["A+","A","B","C","D","P","F","認","履修中"],we=["#ff9999","#ffcc99","#99ccff","#ffff99","#99ff99","#ffccd8","#e599ff","#ffddcc","#cccccc"],Ge=(e,t)=>{const n=[0,0,0,0,0,0,0,0,0];return e.forEach((e=>{"all"!==t&&e.registrationYear!==t||(n[_e.indexOf(e.grade)]+=e.units)})),n},ye=(e,t)=>{const n=Ge(e,t),r=n.reduce(((e,t)=>e+t),0),o=n.map((e=>Math.round(e/r*100)));return o},ke=(e,t)=>{const n=Ge(e,t),r=ye(e,t),o=[["Grade","Units"]];for(let a=0;a<n.length;a++)o.push([`${_e[a]}: ${r[a]}%`,n[a]]);return o};var Ae=(0,o.aZ)({components:{GChart:be.PQ},setup(){const e=h.state.courses,t=h.state.year,n=ke(e,t),r={colors:we,backgroundColor:"#eeeeee",pieSliceText:"none",chartArea:{width:"100%",height:"80%"},legend:{position:"bottom"}};return console.log(n),{data:n,options:r}}});const Oe=(0,C.Z)(Ae,[["render",Ce]]);var De=Oe;const Fe=e=>((0,o.dD)("data-v-26d60b79"),e=e(),(0,o.Cn)(),e),Ye=Fe((()=>(0,o._)("hr",null,null,-1))),Pe=Fe((()=>(0,o._)("p",null,[(0,o.Uk)(" Source code is availabe on "),(0,o._)("a",{href:"https://github.com/Mimori256/Grade-Graph",target:"_blank",rel:"noreferrer"},"GitHub")],-1))),Te=Fe((()=>(0,o._)("p",null,[(0,o.Uk)(" Contributed by: "),(0,o._)("a",{href:"https://github.com/Mimori256",target:"_blank",rel:"noreferrer"},"Mimori256")],-1))),Ze=[Ye,Pe,Te];function Ue(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("footer",null,Ze)}var Se=(0,o.aZ)({setup(){return{}}});const xe=(0,C.Z)(Se,[["render",Ue],["__scopeId","data-v-26d60b79"]]);var He=xe,Be=(0,o.aZ)({name:"App",components:{FileSelector:_,SelectYear:D,CheckBoxes:U,GPASection:E,GradeTable:ae,HelpNote:fe,DeleteButton:me,GradeGraph:De,BottomFooter:He},setup(){const e=(0,d.iH)(null),t=(0,d.iH)("all"),n=(0,d.iH)(!1),r=(0,d.iH)(!0),o=(0,d.iH)(!0),a=t=>{n.value=!0,e.value=t,h.commit("setCourses",ue(t))},i=e=>{t.value=e,h.commit("setYear",e)},l=(e,t)=>{"graph"===t?r.value=e:"gpa"===t&&(o.value=e)},u=()=>{n.value=!1,e.value=null,h.commit("setCourses",[]),h.commit("setYear","all")};return{selected:t,includeCurriculumToGraph:r,includeCurriculumToGPA:o,updateYearOption:i,updateCheckbox:l,isFileUploaded:n,fileContent:e,deleteFile:u,parseCSV:ue,updateFileContent:a,store:h}}});const je=(0,C.Z)(Be,[["render",p]]);var We=je;(0,r.ri)(We).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var l=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],l=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var s=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkgrade_graph"]=self["webpackChunkgrade_graph"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7739)}));r=n.O(r)})();
//# sourceMappingURL=app.0b4c744f.js.map