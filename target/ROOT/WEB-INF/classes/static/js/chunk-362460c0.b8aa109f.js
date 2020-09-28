(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-362460c0"],{"028d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container"},[e._m(0),e._v(" "),r("el-row",[r("el-col",{attrs:{sm:24,md:24,lg:24}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("strong",[r("i",{staticClass:"el-icon-full-screen"}),e._v(" "),r("span",[e._v("Scan Assy Barcode")])])]),e._v(" "),r("div",{staticStyle:{"margin-bottom":"15px"},attrs:{id:"barcode"}},[r("el-row",[r("el-col",{staticClass:"text-center",attrs:{xs:24,sm:24,md:6}},[r("Btn",{attrs:{id:"reset",name:"reset",icon:"el-icon-setting"},on:{click:e.resetInfo}})],1),e._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:18}},[r("el-input",{ref:"config",staticClass:"toupper",attrs:{size:"large",placeholder:"Please input Config Label",clearable:"",autofocus:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.checkAssyInfo(t)}},model:{value:e.inputConfig,callback:function(t){e.inputConfig=t},expression:"inputConfig"}})],1)],1)],1),e._v(" "),r("div",{staticStyle:{"margin-bottom":"50px"}},[r("Resultbox",{attrs:{id:"result",data:e.data,placeholder:"Scan Result"},model:{value:e.out_message,callback:function(t){e.out_message=t},expression:"out_message"}}),e._v(" "),r("el-table",{ref:"tableData",staticClass:"maintab",staticStyle:{width:"100%"},attrs:{id:"repairlist",data:e.tableData,border:"","highlight-current-row":"","row-class-name":e.tableRowClassName}},[r("el-table-column",{attrs:{prop:"operation_desc",label:"Inspection Name",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"time_stamp",label:"Time Stamp",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"user_name",label:"User",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{label:"Actions",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return r("div",{},[[r("Btn",{attrs:{name:"create",value:"Create Repair"},on:{click:function(t){return e.createRepair(a.index)}}})]],2)}}])})],1)],1),e._v(" "),r("div",{staticStyle:{"margin-top":"-30px"},attrs:{id:"repairitem"}},[r("el-row",[r("el-col",{attrs:{lg:12}},[r("el-input",{staticClass:"resultbox toupper",staticStyle:{width:"100%"},attrs:{size:"large",placeholder:"Item Number",readonly:""},model:{value:e.itemNumber,callback:function(t){e.itemNumber=t},expression:"itemNumber"}})],1),e._v(" "),r("el-col",{attrs:{lg:12}},[r("el-input",{staticClass:"resultbox toupper",staticStyle:{width:"100%"},attrs:{size:"large",placeholder:"Serial Number",readonly:""},model:{value:e.serialNumber,callback:function(t){e.serialNumber=t},expression:"serialNumber"}})],1)],1)],1)])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dataForm",staticStyle:{"margin-left":"20px","margin-right":"20px"},attrs:{rules:e.repairrules,model:e.repairSet,"label-position":"right","label-width":"180px"}},[r("el-form-item",{attrs:{label:"Operation",prop:"inspection"}},[r("el-input",{staticClass:"toupper",attrs:{placeholder:"Inspection",required:"",readonly:""},model:{value:e.repairSet.inspection,callback:function(t){e.$set(e.repairSet,"inspection",t)},expression:"repairSet.inspection"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Defect Code",prop:"defectcode"}},[r("el-input",{staticClass:"toupper",attrs:{placeholder:"Defect code",required:"",readonly:""},model:{value:e.repairSet.defectcode,callback:function(t){e.$set(e.repairSet,"defectcode",t)},expression:"repairSet.defectcode"}}),e._v(" "),r("DefectCodeList",{attrs:{placeholder:"Defect Code",defaultvalue:e.repairSet.defectcode,required:""},on:{setDefectCode:e.setDefectCode},model:{value:e.repairSet.defectcode,callback:function(t){e.$set(e.repairSet,"defectcode",t)},expression:"repairSet.defectcode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Repair Code",prop:"repaircode"}},[r("el-input",{staticClass:"toupper",attrs:{placeholder:"Repair code",required:"",readonly:""},model:{value:e.repairSet.repaircode,callback:function(t){e.$set(e.repairSet,"repaircode",t)},expression:"repairSet.repaircode"}}),e._v(" "),r("RepairCodeList",{attrs:{placeholder:"Repair Code",defaultvalue:e.repairSet.repaircode,required:""},on:{setRepairCode:e.setRepairCode},model:{value:e.repairSet.repaircode,callback:function(t){e.$set(e.repairSet,"repaircode",t)},expression:"repairSet.repaircode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Severity",prop:"severity"}},[r("el-select",{attrs:{"value-key":"value",filterable:"",placeholder:"Severity"},model:{value:e.repairSet.severity,callback:function(t){e.$set(e.repairSet,"severity",t)},expression:"repairSet.severity"}},e._l([{value:"Minor",label:"Minor"},{value:"Major",label:"Major"},{value:"Critical",label:"Critical"}],(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Defect type",prop:"defectocdeflag"}},[r("el-select",{attrs:{"value-key":"value",filterable:"",placeholder:"Defect Type"},model:{value:e.repairSet.defecttype,callback:function(t){e.$set(e.repairSet,"defecttype",t)},expression:"repairSet.defecttype"}},e._l([{value:"Event"},{value:"Intervention"},{value:"Failure"}],(function(e){return r("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Repair Part Barcode",prop:"partbarcode"}},[r("el-input",{staticClass:"toupper",model:{value:e.repairSet.partbarcode,callback:function(t){e.$set(e.repairSet,"partbarcode",t)},expression:"repairSet.partbarcode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Comments",prop:"comments"}},[r("el-input",{model:{value:e.repairSet.comments,callback:function(t){e.$set(e.repairSet,"comments",t)},expression:"repairSet.comments"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("Btn",{attrs:{name:"confirm"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}}),e._v(" "),r("Btn",{attrs:{name:"cancel"},on:{click:function(t){e.dialogFormVisible=!1}}})],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{sm:24,md:24,lg:24}},[r("el-card",{staticClass:"box-card",attrs:{id:"history"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("strong",[r("span",[r("i",{staticClass:"el-icon-reading"}),e._v("Repair History")])])]),e._v(" "),r("el-table",{ref:"repairData",staticStyle:{width:"100%"},attrs:{data:e.repairData,border:"","highlight-current-row":"","row-class-name":e.tableRowClassName}},[r("el-table-column",{attrs:{prop:"inspection",label:"Inspection",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"defectcode",label:"Defect Code",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"repaircode",label:"Repair Code",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"severity",label:"Severity",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"defecttype",label:"Defect Type",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"partbarcode",label:"Part Barcode",width:"280"}}),e._v(" "),r("el-table-column",{attrs:{prop:"worker",label:"Worker",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"timestamp",label:"Time Stamp",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"comments",label:"Comments",width:"280"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"Actions",width:"180",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return r("div",{},[[r("Btn",{attrs:{name:"edit",value:"update"},on:{click:function(t){return e.updateRepair(a.index)}}})]],2)}}])})],1)],1)],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",[r("strong",[e._v("Inline Repair")])])}],n=(r("96cf"),r("1da1")),o=r("5530"),s=r("2f62"),l=r("c356"),c=r("e12e"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-select",{class:e.classProps,staticStyle:{width:"100%","font-size":"1rem"},attrs:{placeholder:e.placeholder,filterable:"",clearable:"",remote:"","remote-method":e.remoteMethod,loading:e.loading,"value-key":"defect_code"},on:{change:e.selectDefectCode},model:{value:e.defect_code,callback:function(t){e.defect_code=t},expression:"defect_code"}},e._l(e.defectCodeList,(function(t){return r("el-option",{key:t.defect_code+t.defect_name,attrs:{label:t.defect_name,value:t}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.defect_code))]),e._v(" "),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.defect_name))])])})),1)},p=[],d={name:"DefectCode",props:{defaultvalue:{type:String,default:null},placeholder:{type:String,default:null},classProps:{type:String,default:null}},data:function(){return{defect_code:"",defectCodeList:"",options:[],list:[],loading:!1}},watch:{defaultvalue:function(){void 0!==this.defaultvalue&&null!==this.defaultvalue&&""!==this.defaultvalue?this.getPropsData(this.defaultvalue):(this.defectCodeList=[],this.defect_code={})}},mounted:function(){void 0!==this.defaultvalue&&null!==this.defaultvalue&&""!==this.defaultvalue?this.getPropsData(this.defaultvalue):(this.defectCodeList=[],this.defect_code={})},methods:{getPropsData:function(e){var t=this;Object(l["l"])(e).then((function(e){t.list=e.map((function(e){return{value:"value:${item}"}})),console.log(e),t.defectCodeList=e,t.defect_code=e[0]}))},getDefectCode:function(e){var t=this;Object(l["l"])(e).then((function(e){t.list=e.map((function(e){return{value:"value:${item}"}})),t.defectCodeList=e}))},selectDefectCode:function(){console.log(this.defect_code),this.$emit("setDefectCode",this.defect_code)},remoteMethod:function(e){var t=this;console.log(e),""!==e?(this.loading=!0,this.getDefectCode(e),setTimeout((function(){t.loading=!1,t.options=t.list.filter((function(t){return t.value.indexOf(e)>-1}))}),200)):this.options=[]}}},f=d,m=r("2877"),_=Object(m["a"])(f,u,p,!1,null,null,null),h=_.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-select",{class:e.classProps,staticStyle:{width:"100%","font-size":"1rem"},attrs:{placeholder:e.placeholder,filterable:"",clearable:"",remote:"","reserve-keyword":"","remote-method":e.remoteMethod,loading:e.loading,"value-key":"repair_code"},on:{change:e.selectRepairCode},model:{value:e.repair_code,callback:function(t){e.repair_code=t},expression:"repair_code"}},e._l(e.repairCodeList,(function(t){return r("el-option",{key:t.repair_code+t.repair_name,attrs:{label:t.repair_name,value:t}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.repair_code))]),e._v(" "),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.repair_name))])])})),1)},v=[],g={name:"RepairCode",props:{defaultvalue:{type:String,default:null},placeholder:{type:String,default:null},classProps:{type:String,default:null}},data:function(){return{repair_code:"",repairCodeList:"",options:[],list:[],loading:!1}},watch:{defaultvalue:function(){void 0!==this.defaultvalue&&null!==this.defaultvalue&&""!==this.defaultvalue?this.getPropsData(this.defaultvalue):(this.repairCodeList=[],this.repair_code={})}},mounted:function(){void 0!==this.defaultvalue&&null!==this.defaultvalue&&""!==this.defaultvalue?this.getPropsData(this.defaultvalue):(this.repairCodeList=[],this.repair_code={})},methods:{getRepairCode:function(e){var t=this;Object(l["s"])(e).then((function(e){t.list=e.map((function(e){return{value:"value:${item}"}})),t.repairCodeList=e}))},selectRepairCode:function(){this.$emit("setRepairCode",this.repair_code)},getPropsData:function(e){var t=this;Object(l["s"])(e).then((function(e){t.list=e.map((function(e){return{value:"value:${item}"}})),t.repairCodeList=e,t.repair_code=e[0]}))},remoteMethod:function(e){var t=this;console.log(e),""!==e?(this.loading=!0,this.getRepairCode(e),setTimeout((function(){t.loading=!1,t.options=t.list.filter((function(t){return t.value.indexOf(e)>-1}))}),200)):this.options=[]}}},S=g,y=Object(m["a"])(S,b,v,!1,null,null,null),C=y.exports,x=r("14e0"),k={name:"OperationRepair",components:{Resultbox:c["a"],DefectCodeList:h,RepairCodeList:C,Btn:x["a"]},data:function(){return{inputConfig:"",itemNumber:"",serialNumber:"",out_message:"Scan Assy Barcode",tableData:[],repairData:[],resultDefault:!0,resultSuccess:!1,resultError:!1,data:null,total:0,listLoading:!1,dialogFormVisible:!1,downloadLoading:!1,dialogStatus:"",textMap:{update:"Repair Edit",create:"Repair Create"},repairrules:{defectcode:[{required:!0,message:"defect code is required",trigger:"change"}],repaircode:[{required:!0,message:"repair code is required",trigger:"change"}],severity:[{required:!0,message:"severity is required",trigger:"change"}]},repairSet:{}}},computed:Object(o["a"])({},Object(s["b"])(["userid","lang"])),methods:{setDefectCode:function(e){this.repairSet.defectcode=e.defect_code},setRepairCode:function(e){this.repairSet.repaircode=e.repair_code},resetInfo:function(){this.inputConfig="",this.itemNumber="",this.serialNumber="",this.out_message="",this.currentRow=0,this.tableData=[],this.selectedOperation=""},tableRowClassName:function(e){var t=e.row,r=e.rowIndex;return t.index=r,""},updateRepair:function(e){var t=this;this.repairSet=this.repairData[e],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["dataForm"].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return a={p_item_number:t.fieldUpperCase(t.itemNumber),p_repair_history_id:t.repairSet.id,p_qa_history_id:null,p_lang:t.lang,p_defect_type:t.repairSet.defecttype,p_degree:t.repairSet.severity,p_fault:t.repairSet.fault,p_serial_number:t.fieldUpperCase(t.serialNumber),p_defect_code:t.fieldUpperCase(t.repairSet.defectcode),p_repair_code:t.fieldUpperCase(t.repairSet.repaircode),p_item_barcode:t.fieldUpperCase(t.repairSet.partbarcode),p_subsystem_code:t.repairSet.subsystem,p_pagecount:t.repairSet.pagecount,p_comments:t.repairSet.comments,p_inspection:t.fieldUpperCase(t.repairSet.inspection),p_user_id:t.userid},e.next=4,Object(l["x"])(a);case 4:i=e.sent,"OK"===i.x_repair_result?(t.out_message="["+i.x_repair_result+"]",t.findRepairs(),t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})):(t.out_message="["+i.x_repair_result+"] "+i.x_repair_message,t.$notify({title:"Error",message:i.x_repair_message,type:"error",duration:2e3})),t.dialogFormVisible=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createRepair:function(e){var t=this;e<0?this.$notify({title:"Error",message:"There are no failed inspection.",type:"error",duration:2e3}):(this.resetSet(),this.repairSet.inspection=this.tableData[e].operation_desc,this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()})))},resetSet:function(){this.repairSet={defectcode:"",repaircode:"",comments:"",severity:"",defecttype:"",partboarcode:"",fault:"",subsystem:"",pagecount:"",inspection:"",id:""}},createData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["dataForm"].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return a={p_item_number:t.fieldUpperCase(t.itemNumber),p_repair_history_id:null,p_qa_history_id:null,p_lang:t.lang,p_defect_type:t.repairSet.defecttype,p_degree:t.repairSet.severity,p_fault:t.repairSet.fault,p_serial_number:t.fieldUpperCase(t.serialNumber),p_defect_code:t.fieldUpperCase(t.repairSet.defectcode),p_repair_code:t.fieldUpperCase(t.repairSet.repaircode),p_item_barcode:t.fieldUpperCase(t.repairSet.partbarcode),p_subsystem_code:t.repairSet.subsystem,p_pagecount:t.repairSet.pagecount,p_comments:t.repairSet.comments,p_inspection:t.fieldUpperCase(t.repairSet.inspection),p_user_id:t.userid},e.next=4,Object(l["f"])(a);case 4:i=e.sent,"OK"===i.x_repair_result?(t.out_message="["+i.x_repair_result+"]",t.findRepairs(),t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})):(t.out_message="["+i.x_repair_result+"] "+i.x_repair_message,t.$notify({title:"Error",message:i.x_repair_message,type:"error",duration:2e3})),t.dialogFormVisible=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),findRepairs:function(){var e=this;Object(l["w"])(this.itemNumber,this.serialNumber,this.selectedOperation).then((function(t){e.repairData=t.items}))},checkAssyInfo:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.inputConfig){e.next=20;break}return this.inputConfig=this.fieldUpperCase(this.inputConfig),e.next=4,Object(l["c"])(this.inputConfig,this.lang);case 4:if(t=e.sent,this.itemNumber=t.x_item_number,this.serialNumber=t.x_serial_number,this.data=t.x_box_chk_result,"OK"!==t.x_box_chk_result){e.next=17;break}return this.out_message="["+t.x_box_chk_result+"] "+this.serialNumber,e.next=12,Object(l["o"])(t.x_item_number,t.x_serial_number);case 12:r=e.sent,this.tableData=r,this.findRepairs(),e.next=18;break;case 17:this.out_message="["+t.x_box_chk_result+"] "+t.x_box_chk_message;case 18:e.next=21;break;case 20:this.out_message="Scan Barcode First";case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fieldUpperCase:function(e){return e?e.toUpperCase().trim():null}}},w=k,O=(r("7dea"),Object(m["a"])(w,a,i,!1,null,"244c0b32",null));t["default"]=O.exports},"7c26":function(e,t,r){},"7dea":function(e,t,r){"use strict";var a=r("7c26"),i=r.n(a);i.a},c356:function(e,t,r){"use strict";r.d(t,"r",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"m",(function(){return o})),r.d(t,"q",(function(){return s})),r.d(t,"u",(function(){return l})),r.d(t,"v",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"e",(function(){return p})),r.d(t,"g",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"p",(function(){return m})),r.d(t,"n",(function(){return _})),r.d(t,"t",(function(){return h})),r.d(t,"j",(function(){return b})),r.d(t,"i",(function(){return v})),r.d(t,"k",(function(){return g})),r.d(t,"h",(function(){return S})),r.d(t,"o",(function(){return y})),r.d(t,"w",(function(){return C})),r.d(t,"c",(function(){return x})),r.d(t,"f",(function(){return k})),r.d(t,"x",(function(){return w})),r.d(t,"l",(function(){return O})),r.d(t,"s",(function(){return R}));var a=r("b775");function i(e){return Object(a["a"])({url:"/operation/partStatus",method:"get",params:{id:e}})}function n(e,t){return Object(a["a"])({url:"/operation/assyBarcodeCheck",method:"post",params:{p_barcode:e,p_lang:t}})}function o(e,t){return Object(a["a"])({url:"/operation/getInLineList",method:"get",params:{p_item_number:e,p_serial_number:t}})}function s(e){return Object(a["a"])({url:"/operation/packing",method:"get",params:{packing_number:e}})}function l(e,t,r,i,n){return Object(a["a"])({url:"/operation/packing",method:"post",params:{scan_data:e,mfg_site_id:r,packing_number_in:t,userlang:i,user_id:n}})}function c(e,t,r){return Object(a["a"])({url:"/operation/packing",method:"put",params:{packing_id:e,user_id:t,userlang:r}})}function u(e,t,r){return Object(a["a"])({url:"/operation/packing",method:"delete",params:{packing_number:e,user_id:t,userlang:r}})}function p(e){return Object(a["a"])({url:"/operation/createInspectionOperation",method:"post",params:e})}function d(e,t,r,i,n,o,s,l){return Object(a["a"])({url:"/operation/solScanBarcode",method:"post",params:{p_barcode:e,p_lang:t,p_operation_desc:r,p_user_id:i,p_operation_chk:n,p_previous_operation_chk:o,p_work_station:s,p_comments:l}})}function f(e,t,r){return Object(a["a"])({url:"/operation/eolScanBarcode",method:"post",params:{p_barcode:e,p_lang:t,p_user_id:r}})}function m(e){return Object(a["a"])({url:"/operation/jobDispatchOpHistoriesView",method:"get",params:e})}function _(e){return Object(a["a"])({url:"/operation/operationSettingList",method:"get",params:e})}function h(e){return Object(a["a"])({url:"/operation/userOperation",method:"get",params:e})}function b(e){return Object(a["a"])({url:"/operation/userOperation/"+e,method:"delete"})}function v(e){return Object(a["a"])({url:"/operation/userOperation",method:"post",data:e})}function g(e){return Object(a["a"])({url:"/operation/dispatchOpHisChk",method:"post",data:e})}function S(e){return Object(a["a"])({url:"/operation/createTraceOpHistory",method:"post",data:e})}function y(e,t){return Object(a["a"])({url:"/operation/getOpFailed",method:"get",params:{p_item_number:e,p_serial_number:t}})}function C(e,t,r){return Object(a["a"])({url:"/operation/repairHistoryView",method:"get",params:{item:e,serial:t,inspection:r}})}function x(e,t){return Object(a["a"])({url:"/operation/boxBarcodeCheck",method:"post",params:{p_barcode:e,p_lang:t}})}function k(e){return Object(a["a"])({url:"/operation/createRepairOperation",method:"post",params:e})}function w(e){return Object(a["a"])({url:"/operation/updateRepairOperation",method:"post",params:e})}function O(e){return Object(a["a"])({url:"/operation/defectcodelist",method:"get",params:{defect:e}})}function R(e){return Object(a["a"])({url:"/operation/repaircodelist",method:"get",params:{repair:e}})}}}]);