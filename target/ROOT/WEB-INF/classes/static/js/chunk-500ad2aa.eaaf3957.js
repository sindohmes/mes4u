(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-500ad2aa"],{"0948":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",[a("div",{staticClass:"components-container"},[a("aside",[a("strong",[e._v("Label Print")])]),e._v(" "),a("div",{staticClass:"mixin-components-container"},[a("el-row",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-row",{attrs:{gutter:10}},[a("el-form",{attrs:{"label-position":"top",inline:!0,model:e.listQuery}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[a("el-form-item",{attrs:{id:"searchitem",label:"Item"}},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:"Item"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.item,callback:function(t){e.$set(e.listQuery,"item",t)},expression:"listQuery.item"}})],1),e._v(" "),a("el-form-item",{attrs:{id:"searchline",label:"Line"}},[a("Searchselect",{attrs:{name:"line",placeholder:"Line"},on:{linelist:e.getLineList},model:{value:e.listQuery.line,callback:function(t){e.$set(e.listQuery,"line",t)},expression:"listQuery.line"}})],1),e._v(" "),a("el-form-item",{attrs:{id:"searchjobid",label:"ID"}},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:"ID"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.id,callback:function(t){e.$set(e.listQuery,"id",t)},expression:"listQuery.id"}})],1),e._v(" "),a("el-form-item",{attrs:{id:"searchdate",label:"From-To Date"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"Start date","end-placeholder":"End date"},model:{value:e.daterange,callback:function(t){e.daterange=t},expression:"daterange"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"vertical-align":"bottom"}},[a("Btn",{attrs:{id:"searchbtn",name:"search"},on:{click:e.handleFilter}}),e._v(" "),a("Exportexcel",{attrs:{id:"exportjobs",data:e.list}})],1)],1)],1)],1)],1),e._v(" "),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%",overflow:"auto",height:"200px"},attrs:{id:"joblist",data:e.list,border:"",fit:"","highlight-current-row":""},on:{"current-change":e.selectedCurrentRow}},[a("el-table-column",{attrs:{label:"ID",prop:"id","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Line",align:"center","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.line))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Family",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.family))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Item",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.item))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Date",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.start_date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Qty",align:"center","min-width":"70"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.qty))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"From S/N",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.min_sn))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"To S/N",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.max_sn))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"W/O",align:"center","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.wo))])]}}])})],1)],1)])],1),e._v(" "),a("el-row",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{lg:20}},[a("el-form",{attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{id:"labeltype",label:"Label Type"}},[a("Searchselect",{attrs:{name:"printingjoblabel",itemid:e.selectedItemid},on:{labelList:e.getLabelContent,change:e.showLabelParameters},model:{value:e.labelType,callback:function(t){e.labelType=t},expression:"labelType"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:4}},[a("el-button",{staticStyle:{"vertical-align":"text-bottom"},attrs:{id:"serialguide",type:"primary",round:"",size:"mini"},on:{click:[e.guide,function(t){return t.preventDefault(),t.stopPropagation(),e.guide(t)}]}},[e._v("Guide")])],1)],1)],1),e._v(" "),a("el-row",{attrs:{id:"labelparams",gutter:10}},[a("el-form",{ref:"printForm",staticClass:"form-container",attrs:{model:e.printForm}},[e._l(e.labelViewParams,(function(t,l){return a("el-col",{key:l,attrs:{span:e.customspan}},[a("el-form-item",{attrs:{label:t.label}},[a("el-input",{model:{value:e.printForm.labelParams[l],callback:function(t){e.$set(e.printForm.labelParams,l,t)},expression:"printForm.labelParams[idx]"}})],1)],1)})),e._v(" "),a("el-col",{style:e.printbutton,attrs:{span:e.customspan}},[a("Btn",{attrs:{id:"labelprintbtn",name:"print",icon:"el-icon-printer"},on:{click:e.printLabel}})],1)],2)],1)],1)],1),e._v(" "),e.serialflag?a("el-row",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header",id:"serialnumberguide"},slot:"header"},[a("h2",[e._v("Serial Numbers")]),e._v(" "),a("h4",{staticStyle:{"margin-bottom":"-10px"}},[e._v("* If you select a serial number,")]),e._v(" "),a("h5",{staticStyle:{"margin-left":"10px","margin-bottom":"-10px"}},[e._v("First click: From S/N's value will be a selected serial number, To S/N's value will be interval serial number.")]),e._v(" "),a("h5",{staticStyle:{"margin-left":"10px","margin-bottom":"20px"}},[e._v("Second click: To S/N's value will be updated.")]),e._v(" "),a("h4",[e._v("* If you change a serial interval, when To S/N's value will be From S/N's value + interval.")]),e._v(" "),a("h4",[e._v("* Zebra Label is printed only Internet Explorer.")])]),e._v(" "),a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"200px"}},[a("el-form-item",{attrs:{id:"serialinterval",label:"Serial Interval"}},[a("el-row",{attrs:{gutter:10}},[a("el-input-number",{on:{input:e.changeInterval},model:{value:e.serialInterval,callback:function(t){e.serialInterval=t},expression:"serialInterval"}})],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.seriallistLoading,expression:"seriallistLoading"}],staticStyle:{width:"100%"},attrs:{id:"seriallist",data:e.seriallist,height:"500px",border:"",fit:"","highlight-current-row":""},on:{"current-change":e.selectedSerialCurrentRow}},[a("el-table-column",{attrs:{label:"ID",type:"index","min-width":"60"}}),e._v(" "),a("el-table-column",{attrs:{label:"Item"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.item))])]}}],null,!1,2856917137)}),e._v(" "),a("el-table-column",{attrs:{label:"Serial"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.serial))])]}}],null,!1,36802756)}),e._v(" "),a("el-table-column",{attrs:{label:"Seq","min-width":"70"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.seq))])]}}],null,!1,4173231139)}),e._v(" "),a("el-table-column",{attrs:{label:"Barcode"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.barcode))])]}}],null,!1,3111229496)})],1)],1)])],1):e._e()],1)])])],1)},r=[],n=(a("ac6a"),a("28a5"),a("7514"),a("96cf"),a("1da1")),i=a("5530"),s=a("2f62"),o=a("ed08"),c=a("6724"),u=a("0143"),p=a("0ce0"),d=a("14e0"),m=a("dc66"),h=a("fe63"),b=a("dec6"),f=a.n(b),g=a("c24c"),v=a.n(g),_=(a("01d7"),a("b9e9")),w=f.a.match_parameters,y=f.a.const_parameters,x={item:"",line:"",wo:"",page:1,limit:100,datestart:null,dateend:null},S=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),k={name:"LabelPrint",components:{Searchselect:u["a"],Exportexcel:p["a"],Btn:d["a"]},directives:{waves:c["a"]},data:function(){return{total:0,listQuery:x,daterange:[S.getTime()-3024e6,S],listLoading:!1,list:null,labelType:null,labelViewParams:[],labelList:null,labelContent:null,paramLength:0,printForm:{labelParams:[]},customspan:24,printbutton:{height:null,"padding-top":null},selectedItemid:null,selectedJob:null,oldItemId:null,serialflag:!1,seriallist:null,seriallistLoading:null,toggle:!1,currentSelectedSerial:null,serialInterval:0}},computed:Object(i["a"])({},Object(s["b"])(["lang","userid"])),methods:{guide:function(){if(this.labelList){var e=new v.a;this.serialflag?e.defineSteps(_["a"]["LabelPrintDetail1"]):e.defineSteps(_["a"]["LabelPrintDetail2"]),e.start()}else this.$notify({title:"Warning",message:"Please select a label type.",type:"warning",duration:2e3})},getLineList:function(e){this.linelist=e},handleFilter:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,this.listQuery.item=this.fieldUpperCase(this.listQuery.item),this.listQuery.datestart=Object(o["a"])(this.daterange[0]),this.listQuery.dateend=Object(o["a"])(this.daterange[1]),e.next=6,Object(m["g"])(this.listQuery);case 6:t=e.sent,a=t.items,l=t.total,this.total=l,this.listLoading=!1,this.list=a;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getLabelContent:function(e){this.labelList=e,this.showLabelParameters()},showLabelParameters:function(e){var t=this;if(this.labelList.length>0){this.labelContent=this.labelList.find((function(e){return e.id===t.labelType}));var a=this.labelContent.parameters.split(":"),l=this.labelContent.labels.split(":");this.labelViewParams=[],a.forEach((function(e,a){t.labelViewParams.push({param:e,label:l[a]})})),this.paramLength=a.length,this.paramLength>0&&(this.customspan=Math.floor(24/(this.paramLength+1))),"Y"===this.labelContent.serialflag?(this.serialflag=!0,this.getSerialList()):this.serialflag=!1,this.parameterMapping(),this.$nextTick((function(){var e=[];t.$refs.printForm.$children.forEach((function(t){e.push(t.$el.scrollHeight)}));var a=e.reduce((function(e,t){return Math.max(e,t)}));e=[],t.$refs.printForm.$children.forEach((function(t){e.push(t.$el.scrollHeight)}));var l=e.reduce((function(e,t){return Math.min(e,t)}));t.printbutton.height=a+"px",t.printbutton["padding-top"]=a-l-22+"px"}))}else this.labelContent=null,this.labelViewParams=null,this.serialflag=!1},parameterMapping:function(){var e=this;this.labelViewParams.forEach((function(t,a){e.printForm.labelParams[a]="";var l=t.param,r=w.label.find((function(e){return e.label===l}));if(r){var n=r.job;e.printForm.labelParams[a]=e.selectedJob[n]}else y[l]&&(e.printForm.labelParams[a]=y[l])})),this.handleParams()},selectedCurrentRow:function(e){e&&(this.selectedItemid=e.item_id,this.selectedJob=e,this.oldItemId===this.selectedItemid&&this.parameterMapping(),this.oldItemId=this.selectedItemid)},selectedSerialCurrentRow:function(e){var t=this;this.labelViewParams.forEach((function(a,l){t.toggle?"p_to_sn"===a.param&&(t.printForm.labelParams[l]=e.serial,t.handleParams()):"p_from_sn"===a.param&&(t.printForm.labelParams[l]=e.serial,t.handleParams(),t.currentSelectedSerial=e,t.changeInterval())})),this.toggle=!this.toggle},handleParams:function(){this.listLoading=!0,this.listLoading=!1},printLabel:function(){Object(h["a"])(this.labelContent,this.printForm.labelParams)},getSerialList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.seriallistLoading=!0,e.next=3,Object(m["h"])(this.selectedJob.id);case 3:this.seriallist=e.sent,this.toggle=!1,this.currentSelectedSerial=this.seriallist[0],this.serialInterval=this.seriallist.length-1,this.seriallistLoading=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),changeInterval:function(){var e=this;this.seriallist&&this.seriallist.forEach((function(t,a){if(t===e.currentSelectedSerial){var l=e.seriallist[a+e.serialInterval];l?e.labelViewParams.forEach((function(t,a){"p_to_sn"===t.param&&(e.printForm.labelParams[a]=l.serial,e.handleParams())})):e.$notify({title:"Warning",message:"Interval Value is out of range.",type:"warning",duration:2e3})}}))},fieldUpperCase:function(e){return e?e.toUpperCase().trim():null}}},L=k,C=a("2877"),P=Object(C["a"])(L,l,r,!1,null,null,null);t["default"]=P.exports},dec6:function(e,t){e.exports={procedure_parameters:{p_rexpert_run:["getter:token","getter:lang","MES","spring:db"],P_INSERT_ZPLCODE_FOR_EACH:["getter:mfgid"]},match_parameters:{label:[{job:"item",label:"p_item_number"},{job:"min_sn",label:"p_from_sn"},{job:"max_sn",label:"p_to_sn"},{job:"id",label:"p_job_number"}],EOL:[{info:"item",label:"p_item_number"},{info:"serial",label:"p_from_sn"},{info:"serial",label:"p_to_sn"}],PACKING:[{info:"packingNumber",label:"p_packing_number"}]},const_parameters:{p_count:1}}},fe63:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));a("7514"),a("7f7f"),a("28a5"),a("ac6a"),a("96cf");var l=a("1da1"),r=a("4360"),n=a("dec6"),i=a.n(n),s=a("8593"),o=i.a.procedure_parameters,c=i.a.match_parameters;function u(e,t){return p.apply(this,arguments)}function p(){return p=Object(l["a"])(regeneratorRuntime.mark((function e(t,a){var l,n,i,c,u,p,d,m,h,b,f,g,v,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["k"])(t.id);case 2:if(l=e.sent,n=[],o[l.callproc].slice().forEach((function(e,t){"getter:token"===e?n.push(r["a"].getters.token):"getter:lang"===e?n.push(r["a"].getters.lang):"getter:mfgid"===e?n.push(r["a"].getters.mfgid):n.push(e)})),"URL"!==l.calltype){e.next=15;break}return n.push(t.file),n.push(t.parameters),n.push(a.join(":")),e.next=11,Object(s["b"])(l.callproc,n);case 11:i=e.sent,window.open(i,"_blank"),e.next=38;break;case 15:if("FILE"!==l.calltype){e.next=38;break}return n.push(t.parameters),n.push(a.join(":")),e.next=20,Object(s["a"])(l.callproc,n);case 20:c=e.sent,u=l.callvalue.split("\\"),p=u.length,u.splice(p-1,1),d=u.join("\\")+"\\",m=d+l.name+".txt",h=new ActiveXObject("Scripting.FileSystemObject"),b=new ActiveXObject("WScript.Shell"),f=b.ExpandEnvironmentStrings(m),g=h.CreateTextFile(f),g.write(c),g.Close(),v=b.ExpandEnvironmentStrings(l.callvalue),_=h.CreateTextFile(v),_.write("CD "+d+"\n"),_.write("COPY "+l.name+".txt LPT1"),_.Close(),b.Run(l.callvalue);case 38:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e,t,a){return m.apply(this,arguments)}function m(){return m=Object(l["a"])(regeneratorRuntime.mark((function e(t,a,l){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],console.log(t),-1!==t.parameters.indexOf(":")?r=t.parameters.split(":"):r.push(t.parameters),n=[],r.forEach((function(e,t){var r=e,i=c[a].find((function(e){return e.label===r}));if(i){var s=i.info;n[t]=l[s]}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}}}]);