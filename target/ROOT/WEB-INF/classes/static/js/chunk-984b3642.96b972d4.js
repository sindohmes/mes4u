(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-984b3642"],{"09f4":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),Math.easeInOutQuad=function(t,e,r,n){return t/=n/2,t<1?r/2*t*t+e:(t--,-r/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function a(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,r){var i=a(),s=t-i,u=20,c=0;e="undefined"===typeof e?500:e;var l=function t(){c+=u;var a=Math.easeInOutQuad(c,i,s,e);o(a),c<e?n(t):r&&"function"===typeof r&&r()};l()}},"2f21":function(t,e,r){"use strict";var n=r("79e5");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"41bb":function(t,e,r){},"55dd":function(t,e,r){"use strict";var n=r("5ca1"),o=r("d8e8"),a=r("4bf8"),i=r("79e5"),s=[].sort,u=[1,2,3];n(n.P+n.F*(i((function(){u.sort(void 0)}))||!i((function(){u.sort(null)}))||!r("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),o(t))}})},6724:function(t,e,r){"use strict";r("8d41");var n="@@wavesContext";function o(t,e){function r(r){var n=Object.assign({},e.value),o=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),a=o.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var i=a.getBoundingClientRect(),s=a.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(i.width,i.height)+"px",a.appendChild(s)),o.type){case"center":s.style.top=i.height/2-s.offsetHeight/2+"px",s.style.left=i.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(r.pageY-i.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(r.pageX-i.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=o.color,s.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=r:t[n]={removeHandle:r},r}var a={bind:function(t,e){t.addEventListener("click",o(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",o(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},i=function(t){t.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(i)),a.install=i;e["a"]=a},"8d41":function(t,e,r){},b3c2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",[r("el-col",[r("div",{staticClass:"components-container"},[r("aside",[r("strong",[t._v("Start of Line")])]),t._v(" "),r("div",{staticClass:"mixin-components-container"},[r("el-row",[r("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"},attrs:{id:"barcode"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("strong",[r("i",{staticClass:"el-icon-full-screen"}),t._v(" "),r("span",[t._v("Scan Assy Barcode")])])]),t._v(" "),r("el-row",[r("el-col",{staticStyle:{"padding-right":"20px"},attrs:{sm:24,md:24,lg:12}},[r("el-input",{ref:"barcode",staticClass:"input-required-yellow",staticStyle:{"font-size":"1rem"},attrs:{size:"large",placeholder:"Please enter an Assy Barcode",clearable:"",autofocus:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.barcodeScan(e)}},model:{value:t.inputBarcode,callback:function(e){t.inputBarcode="string"===typeof e?e.trim():e},expression:"inputBarcode"}})],1)],1)],1),t._v(" "),r("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px","padding-bottom":"20px"},attrs:{id:"result"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-col",{staticStyle:{"padding-right":"20px"},attrs:{sm:24,md:24,lg:12}},[r("el-input",{staticClass:"resultbox",staticStyle:{"font-size":"1rem"},attrs:{size:"large",placeholder:"Item Number",readonly:""},model:{value:t.inputItem,callback:function(e){t.inputItem=e},expression:"inputItem"}})],1),t._v(" "),r("el-col",{staticStyle:{"padding-right":"20px"},attrs:{sm:24,md:24,lg:12}},[r("el-input",{staticClass:"resultbox",staticStyle:{"font-size":"1rem"},attrs:{size:"large",placeholder:"Serial Number",readonly:""},model:{value:t.inputSerial,callback:function(e){t.inputSerial=e},expression:"inputSerial"}})],1)],1),t._v(" "),r("div",[r("el-col",{attrs:{span:24}},[r("resultbox",{attrs:{data:t.data,placeholder:"Scan Result"},model:{value:t.inputResult,callback:function(e){t.inputResult=e},expression:"inputResult"}})],1)],1)]),t._v(" "),r("el-card",{staticClass:"box-card",attrs:{id:"history"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("strong",[r("i",{staticClass:"el-icon-files"}),t._v(" "),r("span",[t._v("Operation History")])])]),t._v(" "),r("historytable",{ref:t.historyData,attrs:{data:t.historyData,"list-loading":t.listLoading,cols:t.cols},on:{"sort-change":t.sortChange}}),t._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.historyQuery.page,limit:t.historyQuery.limit},on:{"update:page":function(e){return t.$set(t.historyQuery,"page",e)},"update:limit":function(e){return t.$set(t.historyQuery,"limit",e)},pagination:t.getOpHistories}})],1)],1)],1)])])],1)},o=[],a=(r("96cf"),r("1da1")),i=r("5530"),s=(r("55dd"),r("2f62")),u=r("83d6"),c=r.n(u),l=r("c356"),p=r("d9b2"),d=r("333d"),m=r("e12e"),f=c.a.op_sol,h=c.a.op_sol_desc,b=c.a.historyTableDefault,g=[{prop:"dispatchId",label:"Job ID",width:90},{prop:"lineName",label:"Line",width:90},{prop:"itemNumber",label:"Item",width:120},{prop:"serialNumber",label:"Serial",width:150},{prop:"timestampStr",label:"Timestamp",width:170},{prop:"recentFlag",label:"Recent Flag",width:100}],y={name:"OperationSol",components:{Historytable:p["a"],Pagination:d["a"],Resultbox:m["a"]},data:function(){return{inputBarcode:"",inputItem:"",inputSerial:"",inputResult:"",tableKey:0,total:0,listLoading:!0,cols:g,data:null,historyData:null,historyQuery:{userid:null,optype:f,dateFlag:"Today",recent_flag:"All",page:1,limit:10,sort:b.sort,sortprop:b.sortprop}}},computed:Object(i["a"])({},Object(s["b"])(["userid","lang"])),mounted:function(){this.$refs.barcode.focus(),this.getOpHistories()},methods:{barcodeScan:function(){var t=this;""===this.inputBarcode?this.$message({message:"Assy Barcode is required.",type:"error",duration:1500}):(this.inputBarcode=this.fieldUpperCase(this.inputBarcode),Object(l["g"])(this.inputBarcode,this.lang,h,this.userid,"Y","Y","","").then((function(e){t.inputItem=e.x_item_number,t.inputSerial=e.x_serial_number,t.data=e.x_result,"OK"===e.x_result?t.inputResult="["+e.x_result+"] "+t.inputBarcode:t.inputResult="["+e.x_result+"] "+e.x_message,t.getOpHistories(),t.inputBarcode="",t.$refs.barcode.focus()})))},getOpHistories:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,this.historyQuery.userid=this.userid,t.next=4,Object(l["p"])(this.historyQuery);case 4:e=t.sent,this.historyData=e.items,this.total=e.total,this.listLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sortChange:function(t){this.historyQuery.sortprop=t.column,this.historyQuery.sort=t.order,this.getOpHistories()},fieldUpperCase:function(t){return t?t.toUpperCase().trim():null}}},v=y,_=(r("f7b8"),r("2877")),O=Object(_["a"])(v,n,o,!1,null,"7766f8ee",null);e["default"]=O.exports},c356:function(t,e,r){"use strict";r.d(e,"r",(function(){return o})),r.d(e,"b",(function(){return a})),r.d(e,"m",(function(){return i})),r.d(e,"q",(function(){return s})),r.d(e,"u",(function(){return u})),r.d(e,"v",(function(){return c})),r.d(e,"a",(function(){return l})),r.d(e,"e",(function(){return p})),r.d(e,"g",(function(){return d})),r.d(e,"d",(function(){return m})),r.d(e,"p",(function(){return f})),r.d(e,"n",(function(){return h})),r.d(e,"t",(function(){return b})),r.d(e,"j",(function(){return g})),r.d(e,"i",(function(){return y})),r.d(e,"k",(function(){return v})),r.d(e,"h",(function(){return _})),r.d(e,"o",(function(){return O})),r.d(e,"w",(function(){return w})),r.d(e,"c",(function(){return x})),r.d(e,"f",(function(){return k})),r.d(e,"x",(function(){return j})),r.d(e,"l",(function(){return S})),r.d(e,"s",(function(){return C}));var n=r("b775");function o(t){return Object(n["a"])({url:"/operation/partStatus",method:"get",params:{id:t}})}function a(t,e){return Object(n["a"])({url:"/operation/assyBarcodeCheck",method:"post",params:{p_barcode:t,p_lang:e}})}function i(t,e){return Object(n["a"])({url:"/operation/getInLineList",method:"get",params:{p_item_number:t,p_serial_number:e}})}function s(t){return Object(n["a"])({url:"/operation/packing",method:"get",params:{packing_number:t}})}function u(t,e,r,o,a){return Object(n["a"])({url:"/operation/packing",method:"post",params:{scan_data:t,mfg_site_id:r,packing_number_in:e,userlang:o,user_id:a}})}function c(t,e,r){return Object(n["a"])({url:"/operation/packing",method:"put",params:{packing_id:t,user_id:e,userlang:r}})}function l(t,e,r){return Object(n["a"])({url:"/operation/packing",method:"delete",params:{packing_number:t,user_id:e,userlang:r}})}function p(t){return Object(n["a"])({url:"/operation/createInspectionOperation",method:"post",params:t})}function d(t,e,r,o,a,i,s,u){return Object(n["a"])({url:"/operation/solScanBarcode",method:"post",params:{p_barcode:t,p_lang:e,p_operation_desc:r,p_user_id:o,p_operation_chk:a,p_previous_operation_chk:i,p_work_station:s,p_comments:u}})}function m(t,e,r){return Object(n["a"])({url:"/operation/eolScanBarcode",method:"post",params:{p_barcode:t,p_lang:e,p_user_id:r}})}function f(t){return Object(n["a"])({url:"/operation/jobDispatchOpHistoriesView",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/operation/operationSettingList",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/operation/userOperation",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/operation/userOperation/"+t,method:"delete"})}function y(t){return Object(n["a"])({url:"/operation/userOperation",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/operation/dispatchOpHisChk",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/operation/createTraceOpHistory",method:"post",data:t})}function O(t,e){return Object(n["a"])({url:"/operation/getOpFailed",method:"get",params:{p_item_number:t,p_serial_number:e}})}function w(t,e,r){return Object(n["a"])({url:"/operation/repairHistoryView",method:"get",params:{item:t,serial:e,inspection:r}})}function x(t,e){return Object(n["a"])({url:"/operation/boxBarcodeCheck",method:"post",params:{p_barcode:t,p_lang:e}})}function k(t){return Object(n["a"])({url:"/operation/createRepairOperation",method:"post",params:t})}function j(t){return Object(n["a"])({url:"/operation/updateRepairOperation",method:"post",params:t})}function S(t){return Object(n["a"])({url:"/operation/defectcodelist",method:"get",params:{defect:t}})}function C(t){return Object(n["a"])({url:"/operation/repaircodelist",method:"get",params:{repair:t}})}},f7b8:function(t,e,r){"use strict";var n=r("41bb"),o=r.n(n);o.a}}]);