(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a89c0492"],{"09f4":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function a(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,n){var s=r(),l=e-s,o=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=o;var r=Math.easeInOutQuad(c,s,l,t);a(r),c<t?i(e):n&&"function"===typeof n&&n()};u()}},1538:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",[n("div",{staticClass:"components-container"},[n("aside",[n("strong",[e._v("Job Dispatches")])]),e._v(" "),n("div",{staticClass:"mixin-components-container"},[n("el-row",[n("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-row",{attrs:{gutter:10}},[n("el-form",{attrs:{"label-position":"top",inline:!0,model:e.listQuery}},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[n("el-form-item",{attrs:{id:"searchitem",label:"Item"}},[n("el-input",{staticClass:"filter-item",attrs:{placeholder:"Item"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.item,callback:function(t){e.$set(e.listQuery,"item",t)},expression:"listQuery.item"}})],1),e._v(" "),n("el-form-item",{attrs:{id:"searchline",label:"Line"}},[n("Searchselect",{attrs:{name:"line",placeholder:"Line"},on:{linelist:e.getLineList},model:{value:e.listQuery.line,callback:function(t){e.$set(e.listQuery,"line",t)},expression:"listQuery.line"}})],1),e._v(" "),n("el-form-item",{attrs:{id:"searchstatus",label:"Status"}},[n("Searchselect",{attrs:{name:"jobstatus",placeholder:"Status"},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}})],1),e._v(" "),n("el-form-item",{attrs:{id:"searchjobid",label:"ID"}},[n("el-input",{staticClass:"filter-item",attrs:{placeholder:"ID"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.id,callback:function(t){e.$set(e.listQuery,"id",t)},expression:"listQuery.id"}})],1),e._v(" "),n("el-form-item",{attrs:{id:"searchdate",label:"From-To Date"}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"Start date","end-placeholder":"End date"},model:{value:e.daterange,callback:function(t){e.daterange=t},expression:"daterange"}})],1),e._v(" "),n("el-form-item",{staticStyle:{"vertical-align":"bottom"}},[n("Btn",{attrs:{id:"searchbtn",name:"search"},on:{click:e.handleFilter}}),e._v(" "),n("Exportexcel",{attrs:{id:"exportjobs",data:e.list}})],1)],1)],1)],1)],1),e._v(" "),n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{id:"joblist",data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"ID",prop:"id","min-width":"50",fixed:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Line",align:"center","min-width":"90",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("el-input",{attrs:{autofocus:""},nativeOn:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateJob(i)},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;i.edit=!i.edit}]},model:{value:i.line,callback:function(t){e.$set(i,"line",t)},expression:"row.line"}})],1):n("span",{staticClass:"link-type",on:{click:function(t){return e.handleUpdateJob(i)}}},[e._v(e._s(i.line))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Family",align:"center","min-width":"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.family))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Item",align:"center","min-width":"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.item))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Date",align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.start_date))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Qty",align:"center","min-width":"70"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.qty))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"S/N Count",align:"center","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.serialcount))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Status",align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.status))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"W/O",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.wo))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Details",align:"center","min-width":"300","class-name":"small-padding fixed-width",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("Btn",{attrs:{name:"serial",icon:"el-icon-document-copy"},on:{click:function(t){return e.getSerialList(i)}}}),e._v(" "),n("Btn",{attrs:{name:"operation",icon:"el-icon-receiving"},on:{click:function(t){return e.getOperationList(i)}}})]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("el-row",{staticStyle:{"margin-top":"10px"},attrs:{justify:"end",type:"flex"}},[n("el-col",{attrs:{span:4}},[n("Btn",{attrs:{id:"createjobbtn",name:"create",value:"Create Dispatch Job"},on:{click:e.handleCreateJob}})],1)],1)],1)])],1),e._v(" "),n("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,"before-close":e.closeDialog,width:"90%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},["serial"===e.dialogStatus?[n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("el-col",{attrs:{span:12}},[n("Btn",{attrs:{name:"confirm",value:"create serial numbers"},on:{click:e.createSerial}}),e._v(" "),n("Btn",{attrs:{name:"cancel",value:"cancel serial numbers"},on:{click:e.cancelSerial}})],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("Exportexcel",{attrs:{data:e.seriallist}})],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.seriallistLoading,expression:"seriallistLoading"}],staticStyle:{width:"100%"},attrs:{data:e.seriallist,height:"500px",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"ID",type:"index","min-width":"60"}}),e._v(" "),n("el-table-column",{attrs:{label:"Item"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.item))])]}}],null,!1,2856917137)}),e._v(" "),n("el-table-column",{attrs:{label:"Serial"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.serial))])]}}],null,!1,36802756)}),e._v(" "),n("el-table-column",{attrs:{label:"Seq","min-width":"70"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.seq))])]}}],null,!1,4173231139)}),e._v(" "),n("el-table-column",{attrs:{label:"Status","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.status))])]}}],null,!1,3999849968)}),e._v(" "),n("el-table-column",{attrs:{label:"Barcode"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.barcode))])]}}],null,!1,3111229496)})],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("Btn",{attrs:{name:"close"},on:{click:e.closeDialog}})],1)]:e._e(),e._v(" "),"operation"===e.dialogStatus?[n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("el-col",{attrs:{span:12}},[n("Btn",{attrs:{name:"gn",value:"Generate Operations"},on:{click:e.generateOperation}}),e._v(" "),n("el-switch",{attrs:{"active-text":"All","inactive-text":"Active"},on:{change:e.changeOperation},model:{value:e.operationAll,callback:function(t){e.operationAll=t},expression:"operationAll"}})],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("Exportexcel",{attrs:{data:e.operationlist}})],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.operationlistLoading,expression:"operationlistLoading"}],staticStyle:{width:"100%"},attrs:{data:e.operationlist,height:"500px",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"Seq","min-width":"80",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("el-input",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateOperation(i)}},model:{value:i.seq,callback:function(t){e.$set(i,"seq",t)},expression:"row.seq"}})],1):n("span",[e._v(e._s(i.seq))])]}}],null,!1,1812670068)}),e._v(" "),n("el-table-column",{attrs:{label:"Operation","min-width":"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.optype))])]}}],null,!1,2848082403)}),e._v(" "),n("el-table-column",{attrs:{label:"Required","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("Searchselect",{attrs:{name:"yn"},model:{value:i.required,callback:function(t){e.$set(i,"required",t)},expression:"row.required"}})],1):n("span",[e._v(e._s(i.required))])]}}],null,!1,1662575556)}),e._v(" "),n("el-table-column",{attrs:{label:"Unique","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("Searchselect",{attrs:{name:"yn"},model:{value:i.uniquecheck,callback:function(t){e.$set(i,"uniquecheck",t)},expression:"row.uniquecheck"}})],1):n("span",[e._v(e._s(i.uniquecheck))])]}}],null,!1,2313886948)}),e._v(" "),n("el-table-column",{attrs:{label:"Part Item","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.partitem))])]}}],null,!1,4020165382)}),e._v(" "),n("el-table-column",{attrs:{label:"Op. Desc","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.opdesc))])]}}],null,!1,29059338)}),e._v(" "),n("el-table-column",{attrs:{label:"Type","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("el-input",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateOperation(i)}},model:{value:i.barcodetype,callback:function(t){e.$set(i,"barcodetype",t)},expression:"row.barcodetype"}})],1):n("span",[e._v(e._s(i.barcodetype))])]}}],null,!1,2642791988)}),e._v(" "),n("el-table-column",{attrs:{label:"Indicator","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("el-input",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateOperation(i)}},model:{value:i.indicator,callback:function(t){e.$set(i,"indicator",t)},expression:"row.indicator"}})],1):n("span",[e._v(e._s(i.indicator))])]}}],null,!1,2777815284)}),e._v(" "),e.operationAll?[n("el-table-column",{attrs:{label:"Disable Date","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.disabledate))])]}}],null,!1,2167797156)}),e._v(" "),n("el-table-column",{attrs:{label:"Operator","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.modifier))])]}}],null,!1,1853063827)})]:e._e(),e._v(" "),n("el-table-column",{attrs:{label:"Location","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("el-input",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateOperation(i)}},model:{value:i.location,callback:function(t){e.$set(i,"location",t)},expression:"row.location"}})],1):n("span",[e._v(e._s(i.location))])]}}],null,!1,1334014164)}),e._v(" "),n("el-table-column",{attrs:{label:"Length","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("el-input",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateOperation(i)}},model:{value:i.length,callback:function(t){e.$set(i,"length",t)},expression:"row.length"}})],1):n("span",[e._v(e._s(i.length))])]}}],null,!1,421016276)}),e._v(" "),n("el-table-column",{attrs:{label:"Actions",align:"center","min-width":"270","class-name":"small-padding fixed-width",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[i.edit?n("span",[n("Btn",{attrs:{name:"confirm"},on:{click:function(t){return e.updateOperation(i)}}}),e._v(" "),n("Btn",{attrs:{name:"cancel"},on:{click:function(e){i.edit=!i.edit}}})],1):n("span",[n("Btn",{attrs:{name:"edit"},on:{click:function(e){i.edit=!i.edit}}}),e._v(" "),n("Btn",{attrs:{name:"delete"},on:{click:function(t){return e.deleteConfirm(i)}}})],1)]}}],null,!1,1379310973)})],2),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("Btn",{attrs:{name:"close"},on:{click:e.closeDialog}})],1)]:e._e(),e._v(" "),"create"===e.dialogStatus?[n("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"150px"}},[n("el-form-item",{attrs:{label:"Item Number",prop:"item"}},[n("el-input",{ref:"createItem",model:{value:e.temp.item,callback:function(t){e.$set(e.temp,"item",t)},expression:"temp.item"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Line",prop:"line"}},[n("Searchselect",{attrs:{name:"line",placeholder:"Line"},on:{linelist:e.getLineList},model:{value:e.temp.line,callback:function(t){e.$set(e.temp,"line",t)},expression:"temp.line"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Start Date",prop:"start_date"}},[n("el-date-picker",{attrs:{type:"date",placeholder:"Please pick a date"},model:{value:e.temp.start_date,callback:function(t){e.$set(e.temp,"start_date",t)},expression:"temp.start_date"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Quantity",prop:"qty"}},[n("el-input-number",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createJob()}},model:{value:e.temp.qty,callback:function(t){e.$set(e.temp,"qty",t)},expression:"temp.qty"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("Btn",{attrs:{name:"confirm"},on:{click:function(t){return e.createJob()}}}),e._v(" "),n("Btn",{attrs:{name:"cancel"},on:{click:e.closeDialog}})],1)]:e._e()],2)],1)])])],1)},a=[],r=(n("ac6a"),n("5df3"),n("6762"),n("2fdb"),n("7514"),n("7f7f"),n("96cf"),n("1da1")),s=n("5530"),l=n("2f62"),o=n("dc66"),c=n("3b94"),u=n("6724"),d=n("ed08"),p=n("333d"),m=n("0143"),f=n("0ce0"),h=n("14e0"),g=n("83d6"),v=n.n(g),b=v.a.not_delete_operation,y={create:"Create W/O",operation:"Operations",serial:"Serial Numbers"},_={item:"",line:"",wo:"",page:1,limit:10,datestart:null,dateend:null},w=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),k={name:"JobDispatches",components:{Pagination:p["a"],Searchselect:m["a"],Exportexcel:f["a"],Btn:h["a"]},directives:{waves:u["a"]},data:function(){return{total:0,list:null,linelist:null,seriallist:null,operationlist:null,listQuery:_,daterange:[w.getTime()-6048e5,w.getTime()+864e5],testline:"",title:"",dialogFormVisible:!1,dialogStatus:"",textMap:y,listLoading:!1,seriallistLoading:!1,operationlistLoading:!1,operationAll:!1,currentjob:null,oldline:null,temp:{item:"",line:"",start_date:new Date,qty:""},rules:{item:[{required:!0,message:"item is required",trigger:"change"}],line:[{required:!0,message:"line is required",trigger:"change"}],qty:[{required:!0,message:"qty is required",trigger:"change"}]},createjdObj:{line_name:"",lang:"",item_number:"",start_date:"",qty:"",userid:"",site:""},detailjdObj:{dispatch_id:"",lang:"",userid:""}}},computed:Object(s["a"])({},Object(l["b"])(["lang","site","userid"])),methods:{getLineList:function(e){this.linelist=e},handleFilter:function(){this.listQuery.page=1,this.listQuery.item=this.fieldUpperCase(this.listQuery.item),this.getList()},closeDialog:function(){this.dialogFormVisible=!1,"create"!==this.dialogStatus&&this.getList()},handleCreateJob:function(){var e=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.title=this.textMap[this.dialogStatus],this.$nextTick((function(){e.$refs.dataForm.resetFields(),e.temp.line=e.listQuery.line}))},createSerial:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$confirm("Do you create serial numbers?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["d"])(t.detailjdObj);case 2:n=e.sent,"OK"===n.result?t.$notify({title:"Success",message:"Serial Generate Successfully, ID:"+n.dispatch_id,type:"success",duration:2e3}):t.$notify({title:"Error",message:n.message,type:"error",duration:2e3}),t.getSerialList(t.currentjob);case 5:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancelSerial:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$confirm("Do you cancel serial numbers?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])(t.detailjdObj);case 2:n=e.sent,"OK"===n.result?t.$notify({title:"Success",message:"Cancel Successfully, ID:"+n.dispatch_id,type:"success",duration:2e3}):t.$notify({title:"Error",message:n.message,type:"error",duration:2e3}),t.getSerialList(t.currentjob);case 5:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createJob:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["dataForm"].validate(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=10;break}return t.temp.item=t.fieldUpperCase(t.temp.item),i=t.linelist.find((function(e){return e.id===t.temp.line})).name,t.createjdObj={line_name:i,lang:t.lang,item_number:t.temp.item,start_date:Object(d["a"])(t.temp.start_date),qty:t.temp.qty,userid:t.userid,site:t.site},e.next=6,Object(o["b"])(t.createjdObj);case 6:a=e.sent,"OK"===a.result?(t.$notify({title:"Success",message:"Generate Successfully, ID:"+a.dispatch_id,type:"success",duration:2e3}),t.listQuery.item=t.temp.item,t.listQuery.line=t.temp.line,t.daterange=[t.temp.start_date,t.temp.start_date.getTime()+864e5]):t.$notify({title:"Error",message:a.message,type:"error",duration:2e3}),t.dialogFormVisible=!1,t.handleFilter();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleUpdateJob:function(e){e.edit=!e.edit,this.oldline=e.line},updateJob:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.line?t.line!==this.oldline&&(t.line=this.fieldUpperCase(t.line),this.$confirm("Do you change a line?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["i"])({line:t.line},t.id);case 2:n.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3});case 3:case"end":return e.stop()}}),e)})))).catch((function(){t.line=n.oldline}))):(this.$notify({title:"Error",message:"Please input a line",type:"error",duration:2e3}),t.line=this.oldline),t.edit=!1;case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),generateOperation:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.operationlist,e.next=3,Object(o["c"])(this.detailjdObj);case 3:if(n=e.sent,"OK"!==n.result){e.next=10;break}return e.next=7,this.getOperationList(this.currentjob);case 7:0===this.operationlist.length?this.$notify({title:"Warning",message:"No Registered Operation. ID:"+n.dispatch_id,type:"warning",duration:2e3}):JSON.stringify(this.operationlist)===JSON.stringify(t)?this.$notify({title:"Warning",message:"No Change Detected, ID:"+n.dispatch_id,type:"warning",duration:2e3}):this.$notify({title:"Success",message:"Operation Generate Successfully, ID:"+n.dispatch_id,type:"success",duration:2e3}),e.next=11;break;case 10:this.$notify({title:"Error",message:n.message,type:"error",duration:2e3});case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateOperation:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.lastupdatedby=this.userid,e.next=4,Object(o["j"])(t);case 4:this.getOperationList(this.currentjob),this.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$notify({title:"Error",message:"Invalid Value is updated.",type:"error",duration:2e3});case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),deleteConfirm:function(e){var t=this;b.includes(e.optype)?this.$notify({title:"Error",message:"Specific Operation is not deleted.",type:"error",duration:2e3}):this.$confirm("Do you delete this operation?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){t.deleteOperation(e)}))},deleteOperation:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["e"])(t.id);case 2:this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.getOperationList(this.currentjob);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getList:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,i,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,this.listQuery.datestart=Object(d["a"])(this.daterange[0]).substring(0,10),this.listQuery.dateend=Object(d["a"])(this.daterange[1]).substring(0,10),e.next=5,Object(o["g"])(this.listQuery);case 5:t=e.sent,n=t.items,i=t.total,this.total=i,this.listLoading=!1,this.list=n.map((function(e){return a.$set(e,"edit",!1),e}));case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getSerialList:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.detailjdObj={dispatch_id:t.id,lang:this.lang,fixed_prefix:void 0,fixed_prod:void 0,userid:this.userid},this.currentjob=t,this.seriallistLoading=!0,this.dialogStatus="serial",this.dialogFormVisible=!0,this.title="Job #"+t.id+" "+this.textMap[this.dialogStatus],e.next=8,Object(o["h"])(t.id);case 8:this.seriallist=e.sent,this.seriallistLoading=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getOperationList:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,i,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.detailjdObj={dispatch_id:t.id,lang:this.lang,userid:this.userid},this.operationlist=null,this.currentjob=t,this.operationlistLoading=!0,this.dialogStatus="operation",this.dialogFormVisible=!0,this.title="Job #"+t.id+" "+this.textMap[this.dialogStatus],n={id:t.id,flag:this.operationAll},e.next=10,Object(o["f"])(n);case 10:if(i=e.sent,this.operationlistLoading=!1,this.operationlist=i.map((function(e){return a.$set(e,"edit",!1),e})),!this.operationAll){e.next=16;break}return e.next=16,Promise.all(this.operationlist.map(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["B"])(t.lastupdatedby);case 2:n=e.sent,a.$set(t,"modifier",n.name);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),changeOperation:function(){this.getOperationList(this.currentjob)},fieldUpperCase:function(e){return e?e.toUpperCase().trim():null}}},x=k,O=n("2877"),S=Object(O["a"])(x,i,a,!1,null,null,null);t["default"]=S.exports},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),a=n("d2c8"),r="includes";i(i.P+i.F*n("5147")(r),"String",{includes:function(e){return!!~a(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var i=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}},"5df3":function(e,t,n){"use strict";var i=n("02f4")(!0);n("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})}))},6762:function(e,t,n){"use strict";var i=n("5ca1"),a=n("c366")(!0);i(i.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},d2c8:function(e,t,n){var i=n("aae3"),a=n("be13");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}}}]);