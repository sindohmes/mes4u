(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dff4c71"],{"5df3":function(t,e,a){"use strict";var r=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=r(e,a),this._i+=t.length,{value:t,done:!1})}))},d142:function(t,e,a){"use strict";var r=a("f557"),n=a.n(r);n.a},ef6f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",[a("div",{staticClass:"components-container"},[a("aside",[a("strong",[t._v("부품 투입")])]),t._v(" "),a("div",{staticClass:"mixin-components-container"},[a("el-row",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",[a("el-row",[a("el-col",{attrs:{span:12}},[t._v("\n                  공정 상태: "+t._s(t.status)+"\n                  "),a("Btn",{attrs:{name:"reset",icon:"el-icon-setting"},on:{click:t.resetStatus}})],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[a("i",{staticClass:"el-icon-full-screen"}),t._v(" "),a("span",[t._v("Scan Assy Barcode")])])]),t._v(" "),a("div",[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-input",{ref:"assy",staticClass:"input-required-yellow",staticStyle:{"font-size":"1rem"},attrs:{size:"large",placeholder:"Please enter an Assy Barcode",autofocus:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleAssyBarcodeScan(e)}},model:{value:t.assybarcode,callback:function(e){t.assybarcode=e},expression:"assybarcode"}})],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[a("i",{staticClass:"el-icon-full-screen"}),t._v(" "),a("span",[t._v("Part Scan List")])])]),t._v(" "),a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"parttable",attrs:{data:t.list,border:"",fit:"","highlight-current-row":"","row-class-name":t.tableRowClassName},on:{select:t.handleSelect}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{label:"Seq",type:"index",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"Part Item",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.part))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Description",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.description))])]}}])},[t._v("\n                      >\n                      ")]),t._v(" "),a("el-table-column",{attrs:{label:"Scan Part Barcode",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row,n=e.$index;return[r.edit?[a("el-input",{ref:"partdata"+r.index,staticClass:"edit-input",attrs:{size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handlePartScan(r,n)}},model:{value:r.barcode,callback:function(e){t.$set(r,"barcode",e)},expression:"row.barcode"}})]:a("span",[t._v(t._s(r.barcode))])]}}])})],1)],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",[a("resultbox",{attrs:{data:t.data,placeholder:"Scan Result"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)])],1),t._v(" "),a("el-row",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[a("span",[a("i",{staticClass:"el-icon-reading"}),t._v(" Operation Histories\n                ")])]),t._v(" "),a("historytable",{ref:t.historyData,attrs:{data:t.historyData,listLoading:t.listLoading,cols:t.cols}}),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.historyQuery.page,limit:t.historyQuery.limit},on:{"update:page":function(e){return t.$set(t.historyQuery,"page",e)},"update:limit":function(e){return t.$set(t.historyQuery,"limit",e)},pagination:t.getOpHistories}})],1)])],1)],1)]),t._v(" "),a("el-dialog",{attrs:{title:"부품투입 공정 설정",visible:t.dialogFormVisible,width:"90%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-input",{staticStyle:{"font-size":"1rem"},attrs:{size:"large",readonly:""},model:{value:t.settingbarcode,callback:function(e){t.settingbarcode=e},expression:"settingbarcode"}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("Btn",{attrs:{name:"confirm",value:"set"},on:{click:t.setOperation}})],1)],1),t._v(" "),a("el-table",{ref:"settingtable",staticStyle:{width:"100%"},attrs:{data:t.settinglist,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.dispatch_operation_id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Seq"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.operation_seq_num))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Operation Desc"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.operation_desc))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.required_flag))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Part Item"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.part_item_number))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Indicator"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("span",[t._v(t._s(r.barcode_indicator))])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("Btn",{attrs:{name:"close"},on:{click:t.dialogFormVisible}})],1)],1)],1)],1)},n=[],s=(a("5df3"),a("ac6a"),a("96cf"),a("1da1")),i=a("5530"),o=a("2f62"),l=a("83d6"),c=a.n(l),u=a("c356"),d=a("d9b2"),p=a("333d"),h=a("e12e"),f=a("14e0"),m=c.a.op_trace,b=[{prop:"id",label:"ID",width:null},{prop:"line_name",label:"Line",width:null},{prop:"interfaced_wo_num",label:"W/O",width:null},{prop:"config_indicator",label:"Assy Barcode",width:null},{prop:"item_number",label:"Item",width:null},{prop:"serial_number",label:"Serial",width:null},{prop:"timestamp_str",label:"Timestamp",width:null},{prop:"operation_desc",label:"Desc",width:null},{prop:"part_item_number",label:"Part Item",width:null},{prop:"result_value",label:"Part Barcode",width:null}],g=["설정 중","미설정"],v={name:"partscan",components:{Historytable:d["a"],Pagination:p["a"],Resultbox:h["a"],Btn:f["a"]},data:function(){return{assybarcode:null,status:"",list:null,settinglist:null,result:null,dialogFormVisible:!1,settingbarcode:"",scanitem:"",scanserial:"",listLoading:!1,data:null,dispatchoperationid:null,cols:b,total:0,historyData:new Array,historyQuery:{userid:null,optype:m,date_flag:"Today",page:1,limit:10,sort:0}}},computed:Object(i["a"])({},Object(o["b"])(["token","lang"])),mounted:function(){this.getStatus(),this.getOpHistories()},methods:{getStatus:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getPartStatus(this.token);case 2:this.$refs["parttable"].toggleAllSelection(),this.setAssyFocus(),this.list.forEach((function(t){e.$set(t,"edit",!0)}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPartStatus:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["q"])(this.token);case 2:e=t.sent,e.length>0?(this.status=g[0],this.list=e,this.scanitem=e[0].assy):this.status=g[1];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),resetStatus:function(){this.status=g[1],this.assybarcode="",this.list=null,this.setAssyFocus()},getOpHistories:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,this.historyQuery.userid=this.token,t.next=4,Object(u["o"])(this.historyQuery);case 4:e=t.sent,this.historyData=e.items,this.total=e.total,this.listLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setOperation:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$refs["settingtable"].selection,a=1,t.next=4,e.reduce(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.then(Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={userid:r.token,seq:a++,opid:n.operation_id,item:n.assy_item_number},t.next=3,Object(u["i"])(e);case 3:case"end":return t.stop()}}),t)})))));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),Promise.resolve());case 4:t.sent,this.dialogFormVisible=!1,this.resetStatus(),this.getStatus();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setAssyFocus:function(){this.$refs["assy"].focus()},handleSelect:function(t,e){!0===e.edit?e.edit=!1:e.edit=!0},resultMessage:function(t,e,a){this.data=t,this.result="OK"===t?"["+t+"] "+a:"["+t+"] "+e},handleAssyBarcodeScan:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.assybarcode=this.fieldUpperCase(this.assybarcode),t.next=3,Object(u["b"])(this.assybarcode,this.lang);case 3:e=t.sent,a=this.scanitem,this.scanitem=e.x_item_number,this.scanserial=e.x_serial_number,this.status===g[0]?(this.resultMessage(e.x_result,e.x_message,this.assybarcode),"OK"===e.x_result?a!=e.x_item_number?(r=this.getUserOperation(),this.$nextTick((function(){"NG"===r?n.handleOperationSetting():(n.resetStatus(),n.getStatus())}))):(this.getRecentPartBarcode(),this.$refs["partdata0"].focus()):(this.assybarcode="",this.$refs["assy"].focus())):this.handleOperationSetting();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getRecentPartBarcode:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.list.map(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$set(a,"barcode",""),r={opid:a.operation_id,lang:e.lang,item:e.scanitem,serial:e.scanserial},t.next=4,Object(u["j"])(r);case 4:return n=t.sent,e.$set(a,"barcode",n),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getUserOperation:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={userid:this.token,item:this.scanitem},t.next=3,Object(u["s"])(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleOperationSetting:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dialogFormVisible=!0,this.settingbarcode=this.assybarcode,e={item:this.scanitem,serial:this.scanserial},t.next=5,Object(u["m"])(e);case 5:a=t.sent,this.settinglist=a;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handlePartScan:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.barcode=this.fieldUpperCase(e.barcode),r={item:this.scanitem,lang:this.lang,serial:this.scanserial,partbarcode:e.barcode,opid:e.operation_id,userid:this.token},t.next=4,Object(u["h"])(r);case 4:n=t.sent,this.resultMessage(n.result,n.message,e.barcode),"OK"===n.result?this.nextPart(e):(e.barcode="",this.$refs["partdata"+a].focus());case 7:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),nextPart:function(t){var e=this,a=!1,r=null;this.$refs["parttable"].selection.forEach((function(e,n){!0===a&&(r=e,a=!1),t===e&&(a=!0)})),r?this.$refs["parttable"].data.forEach((function(t,a){t===r&&e.$refs["partdata"+a].focus()})):(this.resetStatus(),this.getStatus(),this.getOpHistories())},tableRowClassName:function(t){var e=t.row,a=t.rowIndex;e.index=a},fieldUpperCase:function(t){return t?t.toUpperCase().trim():null}}},_=v,y=(a("d142"),a("2877")),w=Object(y["a"])(_,r,n,!1,null,null,null);e["default"]=w.exports},f557:function(t,e,a){}}]);