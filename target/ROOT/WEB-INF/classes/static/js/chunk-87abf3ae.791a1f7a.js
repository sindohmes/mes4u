(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87abf3ae"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function a(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,n){var o=a(),s=t-o,u=20,c=0;e="undefined"===typeof e?500:e;var l=function t(){c+=u;var a=Math.easeInOutQuad(c,o,s,e);i(a),c<e?r(t):n&&"function"===typeof n&&n()};l()}},1633:function(t,e,n){},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d8e8"),a=n("4bf8"),o=n("79e5"),s=[].sort,u=[1,2,3];r(r.P+r.F*(o((function(){u.sort(void 0)}))||!o((function(){u.sort(null)}))||!n("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),i(t))}})},6724:function(t,e,n){"use strict";n("8d41");var r="@@wavesContext";function i(t,e){function n(n){var r=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),a=i.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var o=a.getBoundingClientRect(),s=a.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",a.appendChild(s)),i.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return t[r]?t[r].removeHandle=n:t[r]={removeHandle:n},n}var a={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[r].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[r].removeHandle,!1),t[r]=null,delete t[r]}},o=function(t){t.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(o)),a.install=o;e["a"]=a},"7c58":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("el-row",[n("el-col",{attrs:{sm:24,md:24,lg:14}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[n("i",{staticClass:"el-icon-full-screen"}),t._v(" "),n("span",[t._v("Scan Assy Barcode")])])]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"15px"},attrs:{id:"barcode"}},[n("el-row",[n("el-col",{staticClass:"text-center",attrs:{xs:24,sm:24,md:6}},[n("Btn",{attrs:{id:"reset",name:"reset",icon:"el-icon-setting"},on:{click:t.resetInfo}})],1),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:18}},[n("el-input",{ref:"config",staticClass:"toupper",attrs:{size:"large",placeholder:"Please input Config Label",clearable:"",autofocus:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.checkAssyInfo(e)}},model:{value:t.inputConfig,callback:function(e){t.inputConfig=e},expression:"inputConfig"}})],1)],1)],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"50px"}},[n("resultbox",{attrs:{id:"result",data:t.data,placeholder:"Scan Result"},model:{value:t.out_message,callback:function(e){t.out_message=e},expression:"out_message"}}),t._v(" "),n("el-table",{ref:"tableData",staticStyle:{width:"100%"},attrs:{id:"inspectionlist",data:t.tableData,border:"","highlight-current-row":"","row-class-name":t.tableRowClassName},on:{select:t.handleSelection,"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"operation_desc",label:"Operation Name",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{label:"Result"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return n("div",{},[[n("el-input",{ref:"result"+r.index,staticClass:"toupper",attrs:{readonly:r.isReadonly},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createInspection(r.index)}},model:{value:r.result,callback:function(e){t.$set(r,"result",e)},expression:"row.result"}})]],2)}}])})],1)],1)])],1),t._v(" "),n("el-col",{attrs:{id:"inspectionitem",sm:24,md:24,lg:10}},[n("el-form",{staticClass:"form-container",attrs:{"label-width":"30%"}},[n("el-form-item",{attrs:{label:"Item Number"}},[n("el-input",{staticClass:"resultbox",staticStyle:{width:"80%"},attrs:{placeholder:"Item Number",readonly:""},model:{value:t.itemNumber,callback:function(e){t.itemNumber=e},expression:"itemNumber"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Serial Number"}},[n("el-input",{staticClass:"resultbox",staticStyle:{width:"80%"},attrs:{placeholder:"Serial Number",readonly:""},model:{value:t.serialNumber,callback:function(e){t.serialNumber=e},expression:"serialNumber"}})],1)],1)],1),t._v(" "),n("el-col",{attrs:{sm:24,md:24,lg:24}},[n("el-card",{staticClass:"box-card",attrs:{id:"history"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[n("span",[n("i",{staticClass:"el-icon-reading"}),t._v(" [Today] Inspection Histories  ")])])]),t._v(" "),n("historytable",{attrs:{data:t.historyData,cols:t.cols,"list-loading":t.listLoading},on:{"sort-change":t.sortChange}}),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.historyQuery.page,limit:t.historyQuery.limit},on:{"update:page":function(e){return t.$set(t.historyQuery,"page",e)},"update:limit":function(e){return t.$set(t.historyQuery,"limit",e)},pagination:t.getOpHistories}})],1)],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[n("strong",[t._v("Inline Inspection")])])}],a=(n("ac6a"),n("96cf"),n("1da1")),o=n("5530"),s=(n("55dd"),n("c356")),u=n("c1df"),c=n.n(u),l=n("83d6"),p=n.n(l),d=n("2f62"),m=n("d9b2"),h=n("333d"),f=n("e12e"),b=n("14e0"),g=p.a.op_inspection,_=p.a.historyTableDefault,w=[{prop:"dispatchId",label:"Job ID",width:90},{prop:"lineName",label:"Line",width:90},{prop:"itemNumber",label:"Item",width:120},{prop:"serialNumber",label:"Serial",width:150},{prop:"operationDesc",label:"Desc",width:220},{prop:"timestampStr",label:"Timestamp",width:170},{prop:"passfail",label:"Passfail",width:100}],v={name:"OperationInspection",components:{Historytable:m["a"],Pagination:h["a"],Resultbox:f["a"],Btn:b["a"]},data:function(){return{inputConfig:"",itemNumber:"",serialNumber:"",consecutiveFlag:!1,out_message:"Scan Assy Barcode",currentRow:0,tableData:[],historyData:[],resultDefault:!0,resultSuccess:!1,resultError:!1,data:null,cols:w,total:0,listLoading:!1,historyQuery:{userid:null,optype:g,dateFlag:"Today",page:1,limit:10,sort:_.sort,sortprop:_.sortprop,recentFlag:"All"}}},computed:Object(o["a"])({},Object(d["b"])(["token","mfgid","lang"])),mounted:function(){this.getOpHistories()},methods:{resetInfo:function(){this.inputConfig="",this.itemNumber="",this.serialNumber="",this.out_message="",this.currentRow=0,this.tableData=[],this.historyData=[],this.consecutiveFlag=!1},moment:function(t){return c()(t).format("YYYY-MM-DD")},createInspection:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.currentRow=e+1,n=this.moment(new Date),r={p_item_number:this.itemNumber,p_lang:this.lang,p_serial_number:this.serialNumber,p_passfail:this.fieldUpperCase(this.tableData[this.currentRow-1].result),p_operation_id:this.tableData[this.currentRow-1].operation_id,p_user_id:this.token,p_txn_date:n,p_op_chk_flag:"Y"},t.next=5,Object(s["e"])(r);case 5:i=t.sent,this.data=i.x_result,"OK"===i.x_result?(this.out_message="["+i.x_result+"] "+this.tableData[this.currentRow-1].result.toUpperCase(),this.tableData[this.currentRow-1].result="",this.nextInspection(),this.getOpHistories()):(this.tableData[this.currentRow-1].result="",this.out_message="["+i.x_result+"] "+i.x_message);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getOpHistories:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,this.historyQuery.userid=this.token,t.next=4,Object(s["p"])(this.historyQuery);case 4:e=t.sent,this.historyData=e.items,this.total=e.total,this.listLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkAssyInfo:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.inputConfig=this.fieldUpperCase(this.inputConfig),t.next=3,Object(s["b"])(this.inputConfig,this.lang);case 3:if(e=t.sent,this.itemNumber===e.x_item_number?this.consecutiveFlag=!0:this.consecutiveFlag=!1,this.itemNumber=e.x_item_number,this.serialNumber=e.x_serial_number,this.data=e.x_result,"OK"!==e.x_result){t.next=20;break}return this.out_message="["+e.x_result+"] "+this.serialNumber,t.next=12,Object(s["m"])(e.x_item_number,e.x_serial_number);case 12:n=t.sent,0===n.length&&(this.data="NG",this.out_message="[NG] There is no inspection operation for this item."),this.consecutiveFlag||(this.tableData=n),this.currentRow=0,this.nextInspection(!this.consecutiveFlag),this.getOpHistories(),t.next=21;break;case 20:this.out_message="["+e.x_result+"] "+e.x_message;case 21:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),tableRowClassName:function(t){var e=t.row,n=t.rowIndex;return e.index=n,""},handleSelection:function(t,e){this.tableData[e.index].isReadonly=!this.tableData[e.index].isReadonly},handleSelectionChange:function(t){this.multipleSelection=t},nextInspection:function(t){this.currentRow===this.tableData.length?(this.currentRow=0,this.$refs.config.focus(),this.inputConfig="",this.$refs.tableData.setCurrentRow()):(this.$refs.tableData.setCurrentRow(this.tableData[this.currentRow]),t&&this.$nextTick((function(){var t=this;this.tableData&&this.tableData.forEach((function(e,n){t.$refs.tableData.toggleRowSelection(e),e.isReadonly=!1}))})),this.$nextTick((function(){!0===this.tableData[this.currentRow].isReadonly?(this.currentRow=this.currentRow+1,this.nextInspection()):(this.$refs["result"+this.currentRow].focus(),this.currentRow=this.currentRow+1)})))},sortChange:function(t){this.historyQuery.sortprop=t.column,this.historyQuery.sort=t.order,this.getOpHistories()},fieldUpperCase:function(t){return t?t.toUpperCase().trim():null}}},y=v,x=(n("cf90"),n("2877")),O=Object(x["a"])(y,r,i,!1,null,"0265401e",null);e["default"]=O.exports},"8d41":function(t,e,n){},c356:function(t,e,n){"use strict";n.d(e,"r",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"m",(function(){return o})),n.d(e,"q",(function(){return s})),n.d(e,"u",(function(){return u})),n.d(e,"v",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"g",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"p",(function(){return h})),n.d(e,"n",(function(){return f})),n.d(e,"t",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"i",(function(){return _})),n.d(e,"k",(function(){return w})),n.d(e,"h",(function(){return v})),n.d(e,"o",(function(){return y})),n.d(e,"w",(function(){return x})),n.d(e,"c",(function(){return O})),n.d(e,"f",(function(){return k})),n.d(e,"x",(function(){return C})),n.d(e,"l",(function(){return R})),n.d(e,"s",(function(){return j}));var r=n("b775");function i(t){return Object(r["a"])({url:"/operation/partStatus",method:"get",params:{id:t}})}function a(t,e){return Object(r["a"])({url:"/operation/assyBarcodeCheck",method:"post",params:{p_barcode:t,p_lang:e}})}function o(t,e){return Object(r["a"])({url:"/operation/getInLineList",method:"get",params:{p_item_number:t,p_serial_number:e}})}function s(t){return Object(r["a"])({url:"/operation/packing",method:"get",params:{packing_number:t}})}function u(t,e,n,i,a){return Object(r["a"])({url:"/operation/packing",method:"post",params:{scan_data:t,mfg_site_id:n,packing_number_in:e,userlang:i,user_id:a}})}function c(t,e,n){return Object(r["a"])({url:"/operation/packing",method:"put",params:{packing_id:t,user_id:e,userlang:n}})}function l(t,e,n){return Object(r["a"])({url:"/operation/packing",method:"delete",params:{packing_number:t,user_id:e,userlang:n}})}function p(t){return Object(r["a"])({url:"/operation/createInspectionOperation",method:"post",params:t})}function d(t,e,n,i,a,o,s,u){return Object(r["a"])({url:"/operation/solScanBarcode",method:"post",params:{p_barcode:t,p_lang:e,p_operation_desc:n,p_user_id:i,p_operation_chk:a,p_previous_operation_chk:o,p_work_station:s,p_comments:u}})}function m(t,e,n){return Object(r["a"])({url:"/operation/eolScanBarcode",method:"post",params:{p_barcode:t,p_lang:e,p_user_id:n}})}function h(t){return Object(r["a"])({url:"/operation/jobDispatchOpHistoriesView",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/operation/operationSettingList",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/operation/userOperation",method:"get",params:t})}function g(t){return Object(r["a"])({url:"/operation/userOperation/"+t,method:"delete"})}function _(t){return Object(r["a"])({url:"/operation/userOperation",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/operation/dispatchOpHisChk",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/operation/createTraceOpHistory",method:"post",data:t})}function y(t,e){return Object(r["a"])({url:"/operation/getOpFailed",method:"get",params:{p_item_number:t,p_serial_number:e}})}function x(t,e,n){return Object(r["a"])({url:"/operation/repairHistoryView",method:"get",params:{item:t,serial:e,inspection:n}})}function O(t,e){return Object(r["a"])({url:"/operation/boxBarcodeCheck",method:"post",params:{p_barcode:t,p_lang:e}})}function k(t){return Object(r["a"])({url:"/operation/createRepairOperation",method:"post",params:t})}function C(t){return Object(r["a"])({url:"/operation/updateRepairOperation",method:"post",params:t})}function R(t){return Object(r["a"])({url:"/operation/defectcodelist",method:"get",params:{defect:t}})}function j(t){return Object(r["a"])({url:"/operation/repaircodelist",method:"get",params:{repair:t}})}},cf90:function(t,e,n){"use strict";var r=n("1633"),i=n.n(r);i.a}}]);