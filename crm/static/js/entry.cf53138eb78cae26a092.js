webpackJsonp([11],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"1dF+":function(e,t,n){"use strict";function o(e){n("JtMQ")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),u=n("NYxO"),i={data:function(){return{activeIndex:""}},computed:a()({},Object(u.b)(["routers","subroutes","mainNavRoute","subNavRoute"])),mounted:function(){this.activeIndex=this.subroutes[this.subNavRoute].name},methods:{handleRoute:function(e){var t=this,n=this.mainNavRoute,o=this.routers[n].path+"/"+this.routers[n].children[e].path;this.$store.dispatch("SetNavRoute",{mainNavRoute:n,subNavRoute:e}).then(function(){t.$router.push({path:o})})}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"subnavbar-main"},[n("el-menu",{staticClass:"subnav-el",attrs:{"default-active":e.activeIndex,mode:"horizontal"}},[e._l(e.subroutes,function(t,o){return[n("el-menu-item",{attrs:{index:t.name},on:{click:function(t){e.handleRoute(o)}}},[e._v(e._s(t.name))])]})],2)],1)},c=[],d={render:s,staticRenderFns:c},l=d,f=n("VU/8"),m=o,v=f(i,l,!1,m,"data-v-b57e057a",null);t.default=v.exports},"9fbG":function(e,t){},A66B:function(e,t,n){e.exports=function(e){return function(){return n("Opzk")("./"+e+".vue")}}},Agk2:function(e,t){},AkUR:function(e,t,n){"use strict";function o(e){n("SQF7")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("YPbV"),a={name:"layout",components:{Navbar:r.b,Sidebar:r.c,AppMain:r.a}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper"},[n("navbar"),e._v(" "),n("div",{staticClass:"main-container"},[n("sidebar"),e._v(" "),n("app-main")],1)],1)},i=[],s={render:u,staticRenderFns:i},c=s,d=n("VU/8"),l=o,f=d(a,c,!1,l,"data-v-e2729c98",null);t.default=f.exports},DEIv:function(e,t){},DOpt:function(e,t,n){"use strict";function o(e){n("9fbG")}Object.defineProperty(t,"__esModule",{value:!0});var r={computed:{},methods:{logout:function(){this.$store.dispatch("LogOut").then(function(){location.reload()})}}},a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"sidebar-container"},[e._v("\n\t\tsidebar\n")])},u=[],i={render:a,staticRenderFns:u},s=i,c=n("VU/8"),d=o,l=c(r,s,!1,d,"data-v-ebb42d36",null);t.default=l.exports},JtMQ:function(e,t){},NHnr:function(e,t,n){"use strict";function o(e){n("DEIv")}function r(e,t){return Q({url:"/login/login",method:"post",data:{username:e,password:t}})}function a(){return Q({url:"/login/logout",method:"post"})}function u(e,t){return!t.meta||!t.meta.role||e.some(function(e){return t.meta.role.indexOf(e)>=0})}function i(e,t){return e.filter(function(e){return!!u(t,e)&&(e.children&&e.children.length&&(e.children=i(e.children,t)),!0)})}function s(e,t){return e.indexOf("admin")>=0||(!t||e.some(function(e){return t.indexOf(e)>=0}))}Object.defineProperty(t,"__esModule",{value:!0});var c=(n("j1ja"),n("7+uW")),d=n("zL8q"),l=n.n(d),f=(n("tvR6"),{name:"APP"}),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},v=[],p={render:m,staticRenderFns:v},h=p,b=n("VU/8"),g=o,_=b(f,h,!1,g,null,null),R=_.exports,k=n("/ocq"),N=n("AkUR"),O=n("A66B");c.default.use(k.a);var x=[{path:"/login",component:O("login/index"),hidden:!0},{path:"/404",component:O("errorPage/404"),hidden:!0},{path:"/401",component:O("errorPage/401"),hidden:!0}],y=new k.a({scrollBehavior:function(){return{y:0}},routes:x}),E=[{path:"/infoQuery",component:N.default,redirect:"/infoQuery/index",name:"信息查询",children:[{path:"index",component:O("infoQuery/index"),name:"用户查询"},{path:"txtQuery",component:O("infoQuery/txtQuery"),name:"短信查询"},{path:"themeQuery",component:O("infoQuery/themeQuery"),name:"活动查询"}]},{path:"/taskCenter",component:N.default,redirect:"/taskCenter/index",name:"任务中心",children:[{path:"index",component:O("taskCenter/index"),name:"待回复任务"},{path:"outCall",component:O("taskCenter/outCall"),name:"外呼任务"},{path:"taskList",component:O("taskCenter/taskList"),name:"任务列表"},{path:"taskManage",component:O("taskCenter/taskManage"),name:"任务管理"}]},{path:"*",redirect:"/404",hidden:!0}],C=n("NYxO"),S={state:{},mutations:{},actions:{}},A=S,T=n("//Fk"),P=n.n(T),U=n("mtWM"),j=n.n(U),w=j.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:5e3});w.interceptors.request.use(function(e){return e},function(e){console.log(e),P.a.reject(e)}),w.interceptors.response.use(function(e){return e},function(e){return console.log("---------- err ----------"),console.log(e),P.a.reject(e)});var Q=w,M={state:{name:"",token:"",roles:[],routers:x,subroutes:[],mainNavRoute:0,subNavRoute:0},mutations:{SET_NAME:function(e,t){e.name=t},SET_TOKEN:function(e,t){e.token=t},SET_ROLES:function(e,t){e.roles=t},SET_ROUTERS:function(e,t){y.addRoutes(t),e.routers=x.concat(t);for(var n=0;n<e.routers.length;n++)if(!e.routers[n].hidden){e.mainNavRoute=n;break}e.subroutes=e.routers[e.mainNavRoute].children},SET_NAVROUTE:function(e,t){e.mainNavRoute=t.mainNavRoute,e.subNavRoute=t.subNavRoute,e.subroutes=e.routers[e.mainNavRoute].children}},actions:{LoginByUsername:function(e,t){var n=e.commit,o=t.username.trim();return new P.a(function(e,a){r(o,t.password).then(function(t){var o=t.data,r=o.roles;n("SET_NAME",o.name),n("SET_TOKEN",o.token),n("SET_ROLES",r);var a=void 0;a=r.indexOf("admin")>=0?E:i(E,r),n("SET_ROUTERS",a),e()}).catch(function(e){a(e)})})},LogOut:function(e){var t=(e.commit,e.state);return new P.a(function(e,n){a(t.token).then(function(){e()}).catch(function(e){n(e)})})},FedLogOut:function(e){e.commit;return new P.a(function(e){e()})},SetNavRoute:function(e,t){(0,e.commit)("SET_NAVROUTE",t)}}},D=M,L={name:function(e){return e.permission.name},roles:function(e){return e.permission.roles},token:function(e){return e.permission.token},routers:function(e){return e.permission.routers},subroutes:function(e){return e.permission.subroutes},mainNavRoute:function(e){return e.permission.mainNavRoute},subNavRoute:function(e){return e.permission.subNavRoute}},$=L;c.default.use(C.a);var F=new C.a.Store({modules:{app:A,permission:D},getters:$}),V=F,z=["/login"];y.beforeEach(function(e,t,n){V.getters.token?"/login"===e.path?n({path:"/"}):0!==V.getters.roles.length?s(V.getters.roles,e.meta.role)?n():n({path:"/401",query:{noGoBack:!0}}):V.dispatch("FedLogOut").then(function(){console.log("验证失败,请重新登录"),n({path:"/login"})}):-1!==z.indexOf(e.path)?n():n("/login")});var I=n("zNUS"),J=n.n(I),B={admin:{roles:["admin"],name:"Super Admin",token:"admin"},editor:{roles:["editor"],name:"Normal Editor",token:"editor"}},Y={loginByUsername:function(e){var t=JSON.parse(e.body),n=t.username;return B[n]},logout:function(){return"success"}};J.a.setup({timeout:"350-600"}),J.a.mock(/\/login\/login/,"post",Y.loginByUsername),J.a.mock(/\/login\/logout/,"post",Y.logout),J.a.mock(/\/user\/info\.*/,"get",Y.getUserInfo);J.a;c.default.use(l.a),c.default.config.productionTip=!1,new c.default({el:"#app",router:y,store:V,template:"<App/>",components:{App:R}})},Opzk:function(e,t,n){function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./errorPage/401.vue":["eRLo",9],"./errorPage/404.vue":["AejC",8],"./infoQuery/index.vue":["D3+U",7],"./infoQuery/themeQuery.vue":["lT2v",1],"./infoQuery/txtQuery.vue":["iGDJ",5],"./layout/AppMain.vue":["TAmc"],"./layout/Layout.vue":["AkUR"],"./layout/Navbar.vue":["kzJD"],"./layout/Sidebar.vue":["DOpt"],"./layout/Subnavbar.vue":["1dF+"],"./login/index.vue":["T+/8",0],"./taskCenter/index.vue":["Bq4i",3],"./taskCenter/outCall.vue":["AOwn",6],"./taskCenter/taskList.vue":["Rj0g",4],"./taskCenter/taskManage.vue":["ulOD",2]};o.keys=function(){return Object.keys(r)},o.id="Opzk",e.exports=o},SQF7:function(e,t){},TAmc:function(e,t,n){"use strict";function o(e){n("tXJP")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("YPbV"),a={name:"AppMain",components:{Subnavbar:r.d},computed:{key:function(){return void 0!==this.$route.name?this.$route.name+ +new Date:this.$route+ +new Date}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-main"},[n("subnavbar"),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{key:e.key})],1)],1)},i=[],s={render:u,staticRenderFns:i},c=s,d=n("VU/8"),l=o,f=d(a,c,!1,l,"data-v-32ca2e3b",null);t.default=f.exports},YPbV:function(e,t,n){"use strict";var o=n("kzJD");n.d(t,"b",function(){return o.default});var r=n("DOpt");n.d(t,"c",function(){return r.default});var a=n("1dF+");n.d(t,"d",function(){return a.default});var u=n("TAmc");n.d(t,"a",function(){return u.default})},kzJD:function(e,t,n){"use strict";function o(e){n("Agk2")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),u=n("NYxO"),i={data:function(){return{activeIndex:""}},computed:a()({},Object(u.b)(["routers","mainNavRoute","name"])),mounted:function(){this.activeIndex=this.routers[this.mainNavRoute].name},methods:{handleRoute:function(e){var t=this,n=this.routers[e].path+"/"+this.routers[e].children[0].path;this.$store.dispatch("SetNavRoute",{mainNavRoute:e,subNavRoute:0}).then(function(){t.$router.push({path:n})})},logout:function(){this.$store.dispatch("LogOut").then(function(){location.reload()})}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container"},[n("span",{staticClass:"main-web"},[e._v("小贷")]),e._v(" "),n("div",{staticClass:"nav-main"},[n("el-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#0a122b","active-text-color":"#ffffff"}},[e._l(e.routers,function(t,o){return[!t.hidden&&t.children.length>0?n("el-menu-item",{attrs:{index:t.name},on:{click:function(t){e.handleRoute(o)}}},[e._v(e._s(t.name))]):e._e()]})],2)],1),e._v(" "),n("div",{staticClass:"right-info"},[n("div",{staticClass:"logout"},[e._v("安全退出")]),e._v(" "),n("b",{staticClass:"divide-line"}),e._v(" "),n("span",{staticClass:"user-name"},[e._v("您好 "+e._s(e.name))])])])},c=[],d={render:s,staticRenderFns:c},l=d,f=n("VU/8"),m=o,v=f(i,l,!1,m,"data-v-56560902",null);t.default=v.exports},tXJP:function(e,t){},tvR6:function(e,t){}},[0]);
//# sourceMappingURL=entry.cf53138eb78cae26a092.js.map