webpackJsonp([2],{Bq4i:function(e,a,t){"use strict";function n(e){t("snQ/")}Object.defineProperty(a,"__esModule",{value:!0});var l=t("bSBi"),o=t("6eRs"),i={components:{CustTitle:l.a,CustInput:o.a},data:function(){return{loanID:"",userName:"",outTime:"",callPhoneNum:"",daterange:[],trueFlag:!0,tableData:[{taskID:"201703232",userName:"王小虎",tel:"124234324",detailTime:"2017/10/26 17:11:00",taskType:"咨询"}],dialogFormVisible:!1,changeObj:""}},methods:{resetData:function(){this.loanID="",this.userName="",this.outTime="",this.callPhoneNum="",this.daterange=[]},handleChangeTask:function(){this.dialogFormVisible=!0},handleCommitTask:function(){}}},r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"task-center-cont"},[t("cust-title",{attrs:{titleName:"任务查询"}}),e._v(" "),t("el-form",{ref:"addForm",attrs:{inline:!0,"label-width":"80px",size:"small","label-position":"left"}},[t("el-row",[t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"ID:",prop:"loanID"}},[t("el-input",{attrs:{placeholder:"请输入ID"},model:{value:e.loanID,callback:function(a){e.loanID=a},expression:"loanID"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"客户姓名:",prop:"userName"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:7}},[t("el-form-item",{attrs:{label:"呼叫号码:",prop:"callPhoneNum"}},[t("el-input",{attrs:{placeholder:"请输入号码",disabled:e.trueFlag},model:{value:e.callPhoneNum,callback:function(a){e.callPhoneNum=a},expression:"callPhoneNum"}})],1)],1)],1)],1),e._v(" "),t("el-form",{staticClass:"margintop30",attrs:{inline:!0,"label-width":"80px",size:"small","label-position":"left"}},[t("el-form-item",{attrs:{label:"生成时间:"}},[t("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.daterange,callback:function(a){e.daterange=a},expression:"daterange"}})],1),e._v(" "),t("el-form-item",[t("el-button",{on:{click:e.resetData}},[e._v("重置")]),e._v(" "),t("el-button",{staticClass:"purple-btn",attrs:{type:"primary"}},[e._v("查询")])],1)],1),e._v(" "),t("cust-title",{attrs:{titleName:"待回复任务"}}),e._v(" "),t("div",{staticClass:"wrap-table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"taskID",label:"任务ID",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userName",label:"客户姓名",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tel",label:"呼叫号码"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticClass:"tel-txt"},[e._v(e._s(a.row.tel))]),e._v(" "),t("i",{staticClass:"tel-icon"})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"detailTime",label:"生成时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"taskType",label:"任务类型",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{label:"备注",width:"110"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-edit"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"small",plain:""},on:{click:function(a){e.handleChangeTask()}}},[e._v("转接")]),e._v(" "),t("el-button",{staticClass:"purple-btn",attrs:{size:"small",type:"primary"},on:{click:function(a){e.handleCommitTask()}}},[e._v("提交")])]}}])})],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"转接",visible:e.dialogFormVisible},on:{"update:visible":function(a){e.dialogFormVisible=a}}},[t("el-form",[t("el-form-item",{attrs:{label:"转接对象","label-width":"80px"}},[t("el-select",{attrs:{placeholder:"请选择转接对象"},model:{value:e.changeObj,callback:function(a){e.changeObj=a},expression:"changeObj"}},[t("el-option",{attrs:{label:"对象一",value:"zhouweihua"}}),e._v(" "),t("el-option",{attrs:{label:"对象二",value:"zhouweihue"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)},A=[],s={render:r,staticRenderFns:A},d=s,c=t("VU/8"),p=n,C=c(i,d,!1,p,"data-v-0ae8e154",null);a.default=C.exports},b3Ps:function(e,a,t){a=e.exports=t("FZ+f")(!0),a.push([e.i,".el-table th>.cell[data-v-0ae8e154]{text-align:center}.el-table .cell[data-v-0ae8e154]{text-align:center;padding-left:0!important;padding-right:0!important}.el-table__header tr[data-v-0ae8e154]{background:#f7f7f7}body[data-v-0ae8e154]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif}html[data-v-0ae8e154]{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-0ae8e154],[data-v-0ae8e154]:after,[data-v-0ae8e154]:before{-webkit-box-sizing:inherit;box-sizing:inherit}.no-padding[data-v-0ae8e154]{padding:0!important}a[data-v-0ae8e154]:active,a[data-v-0ae8e154]:focus{outline:none}a[data-v-0ae8e154],a[data-v-0ae8e154]:focus,a[data-v-0ae8e154]:hover{cursor:pointer;color:inherit;text-decoration:none}ul[data-v-0ae8e154]{margin:0;padding:0}ul li[data-v-0ae8e154]{list-style:none}input[data-v-0ae8e154]{background:none;outline:none;border:0}.fr[data-v-0ae8e154]{float:right}.fl[data-v-0ae8e154]{float:left}.pr-5[data-v-0ae8e154]{padding-right:5px}.pl-5[data-v-0ae8e154]{padding-left:5px}.block[data-v-0ae8e154]{display:block}.pointer[data-v-0ae8e154]{cursor:pointer}.svg-icon[data-v-0ae8e154]{width:32px;height:32px;fill:currentColor;overflow:hidden}.el-dialog[data-v-0ae8e154]{-webkit-transform:none;transform:none;left:0;position:relative;margin:0 auto}.task-center-cont[data-v-0ae8e154]{position:relative;height:100%;padding:0 0 40px 40px;overflow-x:hidden;overflow-y:scroll}.task-center-cont .wrap-table[data-v-0ae8e154]{position:absolute;margin-top:10px;width:1000px}.task-center-cont .wrap-table .tel-txt[data-v-0ae8e154]{margin-right:12px}.task-center-cont .purple-btn[data-v-0ae8e154]{background-color:#f60;border:none}.task-center-cont .margintop30[data-v-0ae8e154]{margin-top:10px}","",{version:3,sources:["D:/EastWork/pc/src/views/taskCenter/index.vue"],names:[],mappings:"AAEA,oCACE,iBAAmB,CACpB,AACD,iCACE,kBAAmB,AACnB,yBAA2B,AAC3B,yBAA4B,CAC7B,AACD,sCACE,kBAAoB,CACrB,AAGD,sBACE,kCAAmC,AACnC,mCAAoC,AACpC,kCAAmC,AACnC,kGAA0G,CAC3G,AACD,sBACE,8BAA+B,AACvB,qBAAuB,CAChC,AACD,mEAGE,2BAA4B,AACpB,kBAAoB,CAC7B,AACD,6BACE,mBAAwB,CACzB,AACD,mDAEE,YAAc,CACf,AACD,qEAGE,eAAgB,AAChB,cAAe,AACf,oBAAsB,CACvB,AACD,oBACE,SAAY,AACZ,SAAa,CACd,AACD,uBACE,eAAiB,CAClB,AACD,uBACE,gBAAiB,AACjB,aAAc,AACd,QAAY,CACb,AACD,qBACE,WAAa,CACd,AACD,qBACE,UAAY,CACb,AACD,uBACE,iBAAmB,CACpB,AACD,uBACE,gBAAkB,CACnB,AACD,wBACE,aAAe,CAChB,AACD,0BACE,cAAgB,CACjB,AAID,2BACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,eAAiB,CAClB,AACD,4BACE,uBAAwB,AAChB,eAAgB,AACxB,OAAQ,AACR,kBAAmB,AACnB,aAAe,CAChB,AAGD,mCACE,kBAAmB,AACnB,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,+CACI,kBAAmB,AACnB,gBAAiB,AACjB,YAAc,CACjB,AACD,wDACM,iBAAmB,CACxB,AACD,+CACI,sBAA0B,AAC1B,WAAa,CAChB,AACD,gDACI,eAAiB,CACpB",file:"index.vue",sourcesContent:['\n@charset "UTF-8";\n.el-table th > .cell[data-v-0ae8e154] {\n  text-align: center;\n}\n.el-table .cell[data-v-0ae8e154] {\n  text-align: center;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.el-table__header tr[data-v-0ae8e154] {\n  background: #F7F7F7;\n}\n\n/******************** 基本样式 ********************/\nbody[data-v-0ae8e154] {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;\n}\nhtml[data-v-0ae8e154] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*[data-v-0ae8e154],\n*[data-v-0ae8e154]:before,\n*[data-v-0ae8e154]:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n.no-padding[data-v-0ae8e154] {\n  padding: 0px !important;\n}\na[data-v-0ae8e154]:focus,\na[data-v-0ae8e154]:active {\n  outline: none;\n}\na[data-v-0ae8e154],\na[data-v-0ae8e154]:focus,\na[data-v-0ae8e154]:hover {\n  cursor: pointer;\n  color: inherit;\n  text-decoration: none;\n}\nul[data-v-0ae8e154] {\n  margin: 0px;\n  padding: 0px;\n}\nul li[data-v-0ae8e154] {\n  list-style: none;\n}\ninput[data-v-0ae8e154] {\n  background: none;\n  outline: none;\n  border: 0px;\n}\n.fr[data-v-0ae8e154] {\n  float: right;\n}\n.fl[data-v-0ae8e154] {\n  float: left;\n}\n.pr-5[data-v-0ae8e154] {\n  padding-right: 5px;\n}\n.pl-5[data-v-0ae8e154] {\n  padding-left: 5px;\n}\n.block[data-v-0ae8e154] {\n  display: block;\n}\n.pointer[data-v-0ae8e154] {\n  cursor: pointer;\n}\n\n/******************** 基本样式 ********************/\n/******************** 全局样式 ********************/\n.svg-icon[data-v-0ae8e154] {\n  width: 32px;\n  height: 32px;\n  fill: currentColor;\n  overflow: hidden;\n}\n.el-dialog[data-v-0ae8e154] {\n  -webkit-transform: none;\n          transform: none;\n  left: 0;\n  position: relative;\n  margin: 0 auto;\n}\n\n/******************** 全局样式 ********************/\n.task-center-cont[data-v-0ae8e154] {\n  position: relative;\n  height: 100%;\n  padding: 0 0 40px 40px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.task-center-cont .wrap-table[data-v-0ae8e154] {\n    position: absolute;\n    margin-top: 10px;\n    width: 1000px;\n}\n.task-center-cont .wrap-table .tel-txt[data-v-0ae8e154] {\n      margin-right: 12px;\n}\n.task-center-cont .purple-btn[data-v-0ae8e154] {\n    background-color: #FF6600;\n    border: none;\n}\n.task-center-cont .margintop30[data-v-0ae8e154] {\n    margin-top: 10px;\n}\n'],sourceRoot:""}])},"snQ/":function(e,a,t){var n=t("b3Ps");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("50a62f53",n,!0)}});
//# sourceMappingURL=2.d8aae41c5533542b0c56.js.map