(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-069a688b"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,n){var i=o(),u=t-i,l=20,s=0;e="undefined"===typeof e?500:e;var c=function t(){s+=l;var o=Math.easeInOutQuad(s,i,u,e);a(o),s<e?r(t):n&&"function"===typeof n&&n()};c()}},"15b3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",[n("div",{staticClass:"components-container"},[n("aside",[n("strong",[t._v("User Management")])]),t._v(" "),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{xs:24,sm:24,md:24}},[n("div",{staticClass:"mixin-components-container"},[n("el-row",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"filter-container clearfix",attrs:{slot:"header"},slot:"header"},[n("el-row",[n("el-col",{attrs:{xs:24,sm:24,md:24}},[n("Searchselect",{attrs:{id:"roles",name:"roles",placeholder:"Roles"},model:{value:t.listQuery.role,callback:function(e){t.$set(t.listQuery,"role",e)},expression:"listQuery.role"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{id:"username",placeholder:"Name"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{id:"userorg",placeholder:"Organization"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.organization,callback:function(e){t.$set(t.listQuery,"organization",e)},expression:"listQuery.organization"}}),t._v(" "),n("Btn",{attrs:{id:"searchbtn",name:"search"},on:{click:t.handleFilter}}),t._v(" "),n("Btn",{attrs:{id:"createbtn",name:"create"},on:{click:t.handleCreate}}),t._v(" "),n("Exportexcel",{attrs:{id:"exportexcel",data:t.list}})],1)],1)],1),t._v(" "),n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{id:"linelist",data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{label:"Role","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.role_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Username",prop:"username",sortable:"custom",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.username))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Name",prop:"name",sortable:"custom","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"E-mail",align:"center","min-width":"250"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.email))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Organization",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.organization))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Language",align:"center","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.lang))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Registered Date",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.registeredDate))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Disable Date",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.disableDate))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Actions",align:"center",width:"130","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("Btn",{attrs:{name:"edit"},on:{click:function(e){return t.handleUpdate(r)}}})]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)])],1)],1)])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("p",{staticStyle:{"margin-bottom":"20px"}},[t._v("Username is required at least 4 characters, and Password is required at leat 6 characters.")]),t._v(" "),n("el-form",{ref:"registerForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.registerRules,model:t.temp,"label-position":"left","label-width":"200px"}},[n("el-form-item",{attrs:{label:"Role",prop:"role"}},["create"===t.dialogStatus?n("span",[n("Searchselect",{attrs:{name:"roles",placeholder:"Role"},model:{value:t.temp.selectedRole,callback:function(e){t.$set(t.temp,"selectedRole",e)},expression:"temp.selectedRole"}})],1):n("span",[t._v(t._s(t.temp.role_name))])]),t._v(" "),n("el-form-item",{attrs:{label:"Username",prop:"username"}},["create"===t.dialogStatus?n("span",[n("el-input",{model:{value:t.temp.username,callback:function(e){t.$set(t.temp,"username",e)},expression:"temp.username"}})],1):n("span",[t._v(t._s(t.temp.username))])]),t._v(" "),n("el-form-item",{attrs:{label:"Password",prop:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:t.temp.password,callback:function(e){t.$set(t.temp,"password",e)},expression:"temp.password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Confirm Password",prop:"confirmpassword"}},[n("el-input",{attrs:{type:"password"},model:{value:t.temp.confirmpassword,callback:function(e){t.$set(t.temp,"confirmpassword",e)},expression:"temp.confirmpassword"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"First Name",prop:"firstname"}},["create"===t.dialogStatus?n("span",[n("el-input",{model:{value:t.temp.firstname,callback:function(e){t.$set(t.temp,"firstname",e)},expression:"temp.firstname"}})],1):n("span",[t._v(t._s(t.temp.firstname))])]),t._v(" "),n("el-form-item",{attrs:{label:"Last Name",prop:"lastname"}},["create"===t.dialogStatus?n("span",[n("el-input",{model:{value:t.temp.lastname,callback:function(e){t.$set(t.temp,"lastname",e)},expression:"temp.lastname"}})],1):n("span",[t._v(t._s(t.temp.lastname))])]),t._v(" "),n("el-form-item",{attrs:{label:"E-mail",prop:"email"}},[n("el-input",{model:{value:t.temp.email,callback:function(e){t.$set(t.temp,"email",e)},expression:"temp.email"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Organization",prop:"organization"}},[n("el-input",{model:{value:t.temp.organization,callback:function(e){t.$set(t.temp,"organization",e)},expression:"temp.organization"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("Btn",{attrs:{name:"confirm"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}}),t._v(" "),n("Btn",{attrs:{name:"cancel"},on:{click:function(e){t.dialogFormVisible=!1}}})],1)],1)],1)],1)},a=[],o=(n("96cf"),n("1da1")),i=n("61f7"),u=n("c24f"),l=n("6724"),s=n("333d"),c=n("0143"),d=n("0ce0"),m=n("14e0"),p={name:"Register",components:{Pagination:s["a"],Searchselect:c["a"],Exportexcel:d["a"],Btn:m["a"]},directives:{waves:l["a"]},data:function(){var t=this,e=function(t,e,n){Object(i["c"])(e)?n():n(new Error("Please enter the correct user name"))},n=function(t,e,n){Object(i["b"])(e)?n():n(new Error("Please enter the correct email"))},r=function(e,n,r){"create"===t.dialogStatus&&n.length<6?r(new Error("The password can not be less than 6 digits")):r()},a=function(e,n,r){n!==t.temp.password?r(new Error("Passwords are not equal, please re-input the password.")):"create"===t.dialogStatus&&n.length<6?r(new Error("The password can not be less than 6 digits")):r()};return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,sort:"ascending",sortprop:"name",role:void 0,name:void 0,organization:void 0},roleOptions:null,temp:{id:void 0,role:[],username:"",password:"",confirmpassword:"",firstname:"",lastname:"",email:"",organization:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},registerRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:r}],confirmpassword:[{required:"create"===this.dialogStatus,trigger:"blur",validator:a}],email:[{required:"create"===this.dialogStatus,trigger:"blur",validator:n}]}}},created:function(){this.getList()},methods:{getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(u["b"])(this.listQuery);case 3:e=t.sent,this.list=e.items.content,this.total=e.total,this.listLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleFilter:function(){this.listQuery.page=1,this.getList()},sortChange:function(t){var e=t.prop,n=t.order;this.listQuery.sortprop=e,this.listQuery.sort=n,this.handleFilter()},resetTemp:function(){this.temp={id:void 0,role:[this.listQuery.role],username:"",password:"",confirmpassword:"",firstname:"",lastname:"",email:"",organization:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["registerForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["registerForm"].validate((function(e){e&&(t.temp.role[0]=t.temp.selectedRole,t.$store.dispatch("user/register",t.temp).then((function(e){t.$notify({title:"Success",message:e,type:"success",duration:2e3}),t.handleFilter(),t.dialogFormVisible=!1})).catch((function(t){console.log(t)})))}))},handleUpdate:function(t){var e=this;console.log(t),this.temp=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["registerForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["registerForm"].validate((function(e){e&&t.$store.dispatch("user/update",t.temp).then((function(e){t.$notify({title:"Success",message:e,type:"success",duration:2e3}),t.handleFilter(),t.dialogFormVisible=!1})).catch((function(t){console.log(t)}))}))}}},f=p,h=n("2877"),b=Object(h["a"])(f,r,a,!1,null,null,null);e["default"]=b.exports},"3b94":function(t,e,n){"use strict";n.d(e,"L",(function(){return a})),n.d(e,"C",(function(){return o})),n.d(e,"D",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"X",(function(){return l})),n.d(e,"F",(function(){return s})),n.d(e,"G",(function(){return c})),n.d(e,"E",(function(){return d})),n.d(e,"A",(function(){return m})),n.d(e,"u",(function(){return p})),n.d(e,"H",(function(){return f})),n.d(e,"I",(function(){return h})),n.d(e,"g",(function(){return b})),n.d(e,"Z",(function(){return g})),n.d(e,"J",(function(){return v})),n.d(e,"h",(function(){return w})),n.d(e,"ab",(function(){return O})),n.d(e,"q",(function(){return y})),n.d(e,"w",(function(){return j})),n.d(e,"O",(function(){return _})),n.d(e,"e",(function(){return k})),n.d(e,"W",(function(){return x})),n.d(e,"x",(function(){return S})),n.d(e,"k",(function(){return C})),n.d(e,"db",(function(){return R})),n.d(e,"t",(function(){return F})),n.d(e,"v",(function(){return $})),n.d(e,"j",(function(){return E})),n.d(e,"cb",(function(){return L})),n.d(e,"s",(function(){return Q})),n.d(e,"z",(function(){return z})),n.d(e,"y",(function(){return T})),n.d(e,"i",(function(){return V})),n.d(e,"bb",(function(){return D})),n.d(e,"r",(function(){return I})),n.d(e,"B",(function(){return N})),n.d(e,"S",(function(){return P})),n.d(e,"d",(function(){return q})),n.d(e,"c",(function(){return B})),n.d(e,"M",(function(){return U})),n.d(e,"P",(function(){return H})),n.d(e,"n",(function(){return M})),n.d(e,"N",(function(){return A})),n.d(e,"Q",(function(){return J})),n.d(e,"o",(function(){return W})),n.d(e,"K",(function(){return X})),n.d(e,"T",(function(){return Y})),n.d(e,"U",(function(){return G})),n.d(e,"l",(function(){return K})),n.d(e,"R",(function(){return Z})),n.d(e,"a",(function(){return tt})),n.d(e,"b",(function(){return et})),n.d(e,"V",(function(){return nt})),n.d(e,"Y",(function(){return rt})),n.d(e,"m",(function(){return at})),n.d(e,"p",(function(){return ot}));var r=n("b775");function a(){return Object(r["a"])({url:"/mdm/sites",method:"get"})}function o(t){return Object(r["a"])({url:"/mdm/lines",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/mdm/lines/"+t,method:"get"})}function u(t){return Object(r["a"])({url:"/mdm/lines",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/mdm/lines",method:"put",data:t})}function s(t){return Object(r["a"])({url:"/mdm/operationType",method:"get",params:{site:t}})}function c(t){return Object(r["a"])({url:"/mdm/operations",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/mdm/operationParts",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/mdm/items",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/mdm/item/"+t,method:"get"})}function f(t){return Object(r["a"])({url:"/mdm/productFamily/"+t,method:"get"})}function h(t){return Object(r["a"])({url:"/mdm/mtlRoutings",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/mdm/mtlRoutings",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/mdm/mtlRoutings",method:"put",data:t})}function v(t){return Object(r["a"])({url:"/mdm/mtlRoutingDetails",method:"get",params:{id:t}})}function w(t){return Object(r["a"])({url:"/mdm/mtlRoutingDetails",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/mdm/mtlRoutingDetails",method:"put",data:t})}function y(t){return Object(r["a"])({url:"/mdm/mtlRoutingDetails",method:"delete",data:t})}function j(t){return Object(r["a"])({url:"/mdm/itemView",method:"get",params:t})}function _(t){return Object(r["a"])({url:"/mdm/itemSelectList",method:"get",params:{name:t}})}function k(t){return Object(r["a"])({url:"/mdm/createItem",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/mdm/updateItem/",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/mdm/itempackView",method:"get",params:t})}function C(t){return Object(r["a"])({url:"/mdm/createpackingItem",method:"post",data:t})}function R(t){return Object(r["a"])({url:"/mdm/updatepackingItem",method:"post",data:t})}function F(t,e){return Object(r["a"])({url:"/mdm/deletepackingItem/"+e,method:"post",data:t})}function $(t){return console.log(t),Object(r["a"])({url:"/mdm/itemlabelView",method:"get",params:t})}function E(t){return Object(r["a"])({url:"/mdm/createlabelItem",method:"post",data:t})}function L(t){return Object(r["a"])({url:"/mdm/updatelabelItem",method:"post",data:t})}function Q(t,e){return Object(r["a"])({url:"/mdm/deletelabelItem/"+e,method:"post",data:t})}function z(t){return Object(r["a"])({url:"/mdm/itemSerialRules",method:"get",params:t})}function T(t){return Object(r["a"])({url:"/mdm/itemSerialRuleItems",method:"get",params:t})}function V(t){return Object(r["a"])({url:"/mdm/serialRules/",method:"post",data:t})}function D(t){return Object(r["a"])({url:"/mdm/serialRules",method:"put",data:t})}function I(t){return Object(r["a"])({url:"/mdm/serialRules/"+t,method:"delete"})}function N(t){return Object(r["a"])({url:"/mdm/lastUpdatedByName/"+t,method:"get"})}function P(t){return Object(r["a"])({url:"/mdm/serialruleList",method:"get",params:t})}function q(t){return Object(r["a"])({url:"/mdm/copyfromPacking/",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/mdm/copyfromLabel/",method:"post",data:t})}function U(t){return Object(r["a"])({url:"/mdm/operations",method:"post",data:t})}function H(t){return Object(r["a"])({url:"/mdm/operations",method:"put",data:t})}function M(t){return Object(r["a"])({url:"/mdm/operations",method:"delete",data:{opid:t}})}function A(t){return Object(r["a"])({url:"/mdm/operationParts",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/mdm/operationParts",method:"put",data:t})}function W(t){return Object(r["a"])({url:"/mdm/operationParts",method:"delete",data:t})}function X(t){return Object(r["a"])({url:"/mdm/routings",method:"get",params:{itemid:t}})}function Y(t){return Object(r["a"])({url:"/mdm/topLevelDefectCodes",method:"get",params:{level:t}})}function G(t){return Object(r["a"])({url:"/mdm/topLevelRepairCodes",method:"get",params:{level:t}})}function K(t){return Object(r["a"])({url:"/mdm/defectCodes",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"/mdm/repairCodes",method:"get",params:t})}function tt(t){return Object(r["a"])({url:"/mdm/defectCodes",method:"post",data:t})}function et(t){return Object(r["a"])({url:"/mdm/repairCodes",method:"post",data:t})}function nt(t){return Object(r["a"])({url:"/mdm/defectCodes",method:"put",data:t})}function rt(t){return Object(r["a"])({url:"/mdm/repairCodes",method:"put",data:t})}function at(t){return Object(r["a"])({url:"/mdm/defectCodes",method:"delete",data:{defectCodeId:t}})}function ot(t){return Object(r["a"])({url:"/mdm/repairCodes",method:"delete",data:{repairCodeId:t}})}},"456d":function(t,e,n){var r=n("4bf8"),a=n("0d58");n("5eda")("keys",(function(){return function(t){return a(r(t))}}))},"5eda":function(t,e,n){var r=n("5ca1"),a=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",i)}},6724:function(t,e,n){"use strict";n("8d41");var r="@@wavesContext";function a(t,e){function n(n){var r=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),o=a.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var i=o.getBoundingClientRect(),u=o.querySelector(".waves-ripple");switch(u?u.className="waves-ripple":(u=document.createElement("span"),u.className="waves-ripple",u.style.height=u.style.width=Math.max(i.width,i.height)+"px",o.appendChild(u)),a.type){case"center":u.style.top=i.height/2-u.offsetHeight/2+"px",u.style.left=i.width/2-u.offsetWidth/2+"px";break;default:u.style.top=(n.pageY-i.top-u.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",u.style.left=(n.pageX-i.left-u.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return u.style.backgroundColor=a.color,u.className="waves-ripple z-active",!1}}return t[r]?t[r].removeHandle=n:t[r]={removeHandle:n},n}var o={bind:function(t,e){t.addEventListener("click",a(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[r].removeHandle,!1),t.addEventListener("click",a(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[r].removeHandle,!1),t[r]=null,delete t[r]}},i=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(i)),o.install=i;e["a"]=o},"8d41":function(t,e,n){}}]);