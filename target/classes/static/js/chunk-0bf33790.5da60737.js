(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf33790"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function a(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,n){var i=a(),s=t-i,u=20,c=0;e="undefined"===typeof e?500:e;var l=function t(){c+=u;var a=Math.easeInOutQuad(c,i,s,e);o(a),c<e?r(t):n&&"function"===typeof n&&n()};l()}},"122f":function(t,e,n){"use strict";var r=n("9636"),o=n.n(r);o.a},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d8e8"),a=n("4bf8"),i=n("79e5"),s=[].sort,u=[1,2,3];r(r.P+r.F*(i((function(){u.sort(void 0)}))||!i((function(){u.sort(null)}))||!n("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),o(t))}})},6724:function(t,e,n){"use strict";n("8d41");var r="@@wavesContext";function o(t,e){function n(n){var r=Object.assign({},e.value),o=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),a=o.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var i=a.getBoundingClientRect(),s=a.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(i.width,i.height)+"px",a.appendChild(s)),o.type){case"center":s.style.top=i.height/2-s.offsetHeight/2+"px",s.style.left=i.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-i.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-i.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=o.color,s.className="waves-ripple z-active",!1}}return t[r]?t[r].removeHandle=n:t[r]={removeHandle:n},n}var a={bind:function(t,e){t.addEventListener("click",o(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[r].removeHandle,!1),t.addEventListener("click",o(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[r].removeHandle,!1),t[r]=null,delete t[r]}},i=function(t){t.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(i)),a.install=i;e["a"]=a},"8d41":function(t,e,n){},9636:function(t,e,n){},b3c2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",[n("div",{staticClass:"components-container"},[n("aside",[n("strong",[t._v("Start Operation")])]),t._v(" "),n("div",{staticClass:"mixin-components-container"},[n("el-row",[n("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"},attrs:{id:"barcode"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[n("i",{staticClass:"el-icon-full-screen"}),t._v(" "),n("span",[t._v("Scan Assy Barcode")])])]),t._v(" "),n("el-row",[n("el-col",{staticStyle:{"padding-right":"20px"},attrs:{sm:24,md:24,lg:12}},[n("el-input",{ref:"barcode",staticClass:"input-required-yellow",staticStyle:{"font-size":"1rem"},attrs:{size:"large",placeholder:"Please enter an Assy Barcode",clearable:"",autofocus:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.barcodeScan(e)}},model:{value:t.inputBarcode,callback:function(e){t.inputBarcode="string"===typeof e?e.trim():e},expression:"inputBarcode"}})],1)],1)],1),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px","padding-bottom":"20px"},attrs:{id:"result"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-col",{staticStyle:{"padding-right":"20px"},attrs:{sm:24,md:24,lg:12}},[n("el-input",{staticClass:"resultbox",staticStyle:{"font-size":"1rem"},attrs:{size:"large",placeholder:"Item Number",readonly:""},model:{value:t.inputItem,callback:function(e){t.inputItem=e},expression:"inputItem"}})],1),t._v(" "),n("el-col",{staticStyle:{"padding-right":"20px"},attrs:{sm:24,md:24,lg:12}},[n("el-input",{staticClass:"resultbox",staticStyle:{"font-size":"1rem"},attrs:{size:"large",placeholder:"Serial Number",readonly:""},model:{value:t.inputSerial,callback:function(e){t.inputSerial=e},expression:"inputSerial"}})],1)],1),t._v(" "),n("div",[n("el-col",{attrs:{span:24}},[n("resultbox",{attrs:{data:t.data,placeholder:"Scan Result"},model:{value:t.inputResult,callback:function(e){t.inputResult=e},expression:"inputResult"}})],1)],1)]),t._v(" "),n("el-card",{staticClass:"box-card",attrs:{id:"history"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[n("i",{staticClass:"el-icon-files"}),t._v(" "),n("span",[t._v("Operation History")])])]),t._v(" "),n("historytable",{ref:t.historyData,attrs:{data:t.historyData,"list-loading":t.listLoading,cols:t.cols},on:{"sort-change":t.sortChange}}),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.historyQuery.page,limit:t.historyQuery.limit},on:{"update:page":function(e){return t.$set(t.historyQuery,"page",e)},"update:limit":function(e){return t.$set(t.historyQuery,"limit",e)},pagination:t.getOpHistories}})],1)],1)],1)])])],1)},o=[],a=(n("96cf"),n("1da1")),i=n("5530"),s=(n("55dd"),n("2f62")),u=n("83d6"),c=n.n(u),l=n("c356"),d=n("d9b2"),p=n("333d"),f=n("e12e"),m=c.a.op_sol,h=c.a.historyTableDefault,b=[{prop:"dispatchId",label:"Job ID",width:90},{prop:"lineName",label:"Line",width:90},{prop:"itemNumber",label:"Item",width:120},{prop:"serialNumber",label:"Serial",width:150},{prop:"timestampStr",label:"Timestamp",width:170},{prop:"recentFlag",label:"Recent Flag",width:100}],g={name:"OperationSol",components:{Historytable:d["a"],Pagination:p["a"],Resultbox:f["a"]},data:function(){return{inputBarcode:"",inputItem:"",inputSerial:"",inputResult:"",tableKey:0,total:0,listLoading:!0,cols:b,data:null,historyData:null,historyQuery:{userid:null,optype:m,dateFlag:"TODAY",recent_flag:"All",page:1,limit:10,sort:h.sort,sortprop:h.sortprop}}},computed:Object(i["a"])({},Object(s["b"])(["userid","lang"])),mounted:function(){this.$refs.barcode.focus(),this.getOpHistories()},methods:{barcodeScan:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.inputBarcode){t.next=4;break}this.$message({message:"Assy Barcode is required.",type:"error",duration:1500}),t.next=15;break;case 4:return e={p_barcode:this.fieldUpperCase(this.inputBarcode),p_lang:this.lang,p_operation:m,p_user_id:this.userid,p_operation_chk:"Y",p_previous_operation_chk:"Y",p_work_station:"",p_comments:""},t.next=7,Object(l["g"])(e);case 7:n=t.sent,this.inputItem=n.x_item_number,this.inputSerial=n.x_serial_number,this.data=n.x_result,"OK"===n.x_result?this.inputResult="["+n.x_result+"] "+this.inputBarcode:this.inputResult="["+n.x_result+"] "+n.x_message,this.getOpHistories(),this.inputBarcode="",this.$refs.barcode.focus();case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getOpHistories:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,this.historyQuery.userid=this.userid,t.next=4,Object(l["p"])(this.historyQuery);case 4:e=t.sent,this.historyData=e.items,this.total=e.total,this.listLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sortChange:function(t){this.historyQuery.sortprop=t.column,this.historyQuery.sort=t.order,this.getOpHistories()},fieldUpperCase:function(t){return t?t.toUpperCase().trim():null}}},y=g,v=(n("122f"),n("2877")),O=Object(v["a"])(y,r,o,!1,null,"a58add66",null);e["default"]=O.exports},c356:function(t,e,n){"use strict";n.d(e,"r",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"m",(function(){return i})),n.d(e,"q",(function(){return s})),n.d(e,"u",(function(){return u})),n.d(e,"v",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"d",(function(){return f})),n.d(e,"p",(function(){return m})),n.d(e,"n",(function(){return h})),n.d(e,"t",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"i",(function(){return y})),n.d(e,"k",(function(){return v})),n.d(e,"h",(function(){return O})),n.d(e,"o",(function(){return w})),n.d(e,"w",(function(){return x})),n.d(e,"c",(function(){return _})),n.d(e,"f",(function(){return j})),n.d(e,"x",(function(){return k})),n.d(e,"l",(function(){return S})),n.d(e,"s",(function(){return C}));var r=n("b775");function o(t){return Object(r["a"])({url:"/operation/partStatus",method:"get",params:{id:t}})}function a(t,e){return Object(r["a"])({url:"/operation/assyBarcodeCheck",method:"post",data:{p_barcode:t,p_lang:e}})}function i(t){return Object(r["a"])({url:"/operation/getInLineList",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/operation/packing",method:"get",params:{packing_number:t}})}function u(t){return Object(r["a"])({url:"/operation/packing",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/operation/packing",method:"put",data:t})}function l(t){return Object(r["a"])({url:"/operation/packing",method:"delete",data:t})}function d(t){return Object(r["a"])({url:"/operation/createInspectionOperation",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/operation/solScanBarcode",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/operation/eolScanBarcode",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/operation/jobDispatchOpHistoriesView",method:"get",params:t})}function h(t){return Object(r["a"])({url:"/operation/operationSettingList",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/operation/userOperation",method:"get",params:t})}function g(t){return Object(r["a"])({url:"/operation/userOperation/"+t,method:"delete"})}function y(t){return Object(r["a"])({url:"/operation/userOperation",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/operation/dispatchOpHisChk",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/operation/createTraceOpHistory",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/operation/getOpFailed",method:"get",params:t})}function x(t,e,n){return Object(r["a"])({url:"/operation/repairHistoryView",method:"get",params:{item:t,serial:e,inspection:n}})}function _(t,e){return Object(r["a"])({url:"/operation/boxBarcodeCheck",method:"post",data:{p_barcode:t,p_lang:e}})}function j(t){return Object(r["a"])({url:"/operation/createRepairOperation",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/operation/updateRepairOperation",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/operation/defectcodelist",method:"get",params:{defect:t}})}function C(t){return Object(r["a"])({url:"/operation/repaircodelist",method:"get",params:{repair:t}})}}}]);