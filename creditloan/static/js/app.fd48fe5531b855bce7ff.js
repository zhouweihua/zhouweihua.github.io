webpackJsonp([8],{HzVJ:function(t,n,e){"use strict";e.d(n,"e",function(){return a}),e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return u});var a="SET_RANDOMNUM",o="LAYER_STATECHANGE",i="SPINWHEEL_STATECHANGE",r="SPINWHEEL_OPTIONDATAS",u="SPINWHEEL_RESULT"},IVsi:function(t,n,e){"use strict";var a={pageDirection:"fade",routeChain:[]},o={addRouteChain:function(t,n){t.routeChain.push(n)},popRouteChain:function(t){t.routeChain.pop()},setPageDirection:function(t,n){t.pageDirection=n}};n.a={namespaced:!0,state:a,mutations:o}},IcnI:function(t,n,e){"use strict";var a=e("7+uW"),o=e("NYxO"),i=e("UjVw"),r=e("J2U9"),u=e("ekJp"),c=e("LiTS"),s=e("IVsi");a.a.use(o.c),n.a=new o.c.Store({modules:{firstPage:r.a,secondPage:u.a,routeCtro:s.a,compCtro:c.a},getters:i.a})},J2U9:function(t,n,e){"use strict";var a=e("bOdI"),o=e.n(a),i=e("//Fk"),r=e.n(i),u=e("HzVJ"),c=e("P9l9"),s={randomNum:""},p={fetchRandomNum:function(t){var n=t.commit;return new r.a(function(t,a){e.i(c.a)().then(function(e){"ERROR"===e.data.code||(n(u.e,e.data.token_random_number),t())}).catch(function(t){a("网络出现问题")})})}},f=o()({},u.e,function(t,n){t.randomNum=n});n.a={namespaced:!0,state:s,actions:p,mutations:f}},LiTS:function(t,n,e){"use strict";var a,o=e("bOdI"),i=e.n(o),r=e("HzVJ"),u={layerFlag:!1,spinWheelFlag:!1,spinWheelOptions:{},spinWheelResult:[]},c={changeLayerState:function(t){return(0,t.commit)(r.a)},changeSpinWheelState:function(t){return(0,t.commit)(r.b)},setSpinWheelOptionsDatas:function(t,n){return(0,t.commit)(r.c,n)},setSpinWheelResult:function(t,n){return(0,t.commit)(r.d,n)}},s=(a={},i()(a,r.a,function(t){t.layerFlag=!t.layerFlag}),i()(a,r.b,function(t){t.spinWheelFlag=!t.spinWheelFlag}),i()(a,r.c,function(t,n){t.spinWheelOptions=n}),i()(a,r.d,function(t,n){t.spinWheelResult=n}),a);n.a={namespaced:!0,state:u,actions:c,mutations:s}},M93x:function(t,n,e){"use strict";function a(t){e("nf7t")}var o=e("xJD8"),i=e("cNlb"),r=e("VU/8"),u=a,c=r(o.a,i.a,u,null,null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o=e("IcnI"),i=e("YaEn"),r=e("M93x"),u=e("9JMe"),c=(e.n(u),e("pxwZ"));a.a.prototype.$axios=c.a,e.i(u.sync)(o.a,i.a),a.a.config.productionTip=!1,i.a.beforeEach(function(t,n,e){var a=o.a.state.routeCtro.routeChain.length;if(0===a)o.a.commit("routeCtro/setPageDirection","fade"),t.path===n.path&&"/"===t.path?o.a.commit("routeCtro/addRouteChain",t):(o.a.commit("routeCtro/addRouteChain","/"),o.a.commit("routeCtro/addRouteChain",t));else if(1===a)o.a.commit("routeCtro/setPageDirection","slide-left"),o.a.commit("routeCtro/addRouteChain",t);else{var i=o.a.state.routeCtro.routeChain[a-2];i.path===t.path?(o.a.commit("routeCtro/popRouteChain"),o.a.commit("routeCtro/setPageDirection","slide-right")):(o.a.commit("routeCtro/addRouteChain",t),o.a.commit("routeCtro/setPageDirection","slide-left"))}e()}),new a.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:r.a}})},P9l9:function(t,n,e){"use strict";function a(){console.log("axios api getRandomNumber");var t="loan"+Date.parse(new Date),n=o({api_key:"sGiRNxDi-jiLAK_JtZrt3guCRK-1mYxy",api_secret:"41dQ0Leyl6yvPhunwZex64u3K_JLPRsW",biz_no:t});return i.a.post("https://api.megvii.com/faceid/lite/raw/get_random_number",n)}function o(t){var n="",e=[],a=0;for(var o in t)!function(n){if(t[n]instanceof Array){var o="";t[n].forEach(function(t,e,a){o=0!=e?o+"&"+n+"="+t:n+"="+t}),a++,e[a]=o}else a++,e[a]=n+"="+t[n]}(o);return e.sort(),e.map(function(t,e){0!=e?n=n+"&"+t:n+=t}),n}n.a=a;var i=e("pxwZ")},UjVw:function(t,n,e){"use strict";var a={GrandomNum:function(t){return t.firstPage.randomNum},Gcount:function(t){return t.secondPage.count},Gnumb:function(t){return t.secondPage.numb}};n.a=a},YaEn:function(t,n,e){"use strict";var a=e("7+uW"),o=e("/ocq"),i=function(t){return e.e(1).then(function(){var n=[e("cDYQ")];t.apply(null,n)}.bind(this)).catch(e.oe)},r=function(t){return e.e(3).then(function(){var n=[e("DxDx")];t.apply(null,n)}.bind(this)).catch(e.oe)},u=function(t){return e.e(0).then(function(){var n=[e("3OS+")];t.apply(null,n)}.bind(this)).catch(e.oe)},c=function(t){return e.e(5).then(function(){var n=[e("7KJ4")];t.apply(null,n)}.bind(this)).catch(e.oe)},s=function(t){return e.e(2).then(function(){var n=[e("vJ5q")];t.apply(null,n)}.bind(this)).catch(e.oe)},p=function(t){return e.e(4).then(function(){var n=[e("IrXm")];t.apply(null,n)}.bind(this)).catch(e.oe)},f=function(t){return e.e(6).then(function(){var n=[e("witd")];t.apply(null,n)}.bind(this)).catch(e.oe)},m=[{path:"/",name:"firstPage",component:i},{path:"/secondPage",name:"secondPage",component:r},{path:"/thirdPage",name:"thirdPage",component:u,children:[{path:"/thirdPage",name:"componentA",component:f}]},{path:"/fourPage",name:"fourPage",component:c},{path:"/fivePage",name:"fivePage",component:s},{path:"*",component:p}];a.a.use(o.a),n.a=new o.a({mode:"history",routes:m})},cNlb:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("transition",{attrs:{name:t.pageDirection}},[e("keep-alive",[e("router-view",{staticClass:"child-view"})],1)],1)],1)])},o=[],i={render:a,staticRenderFns:o};n.a=i},ekJp:function(t,n,e){"use strict";var a={count:10,numb:10086},o={actionA:function(t){return(0,t.commit)("increment")}},i={increment:function(t){t.count+=2,t.numb+=2}};n.a={namespaced:!0,state:a,actions:o,mutations:i}},nf7t:function(t,n){},pxwZ:function(t,n,e){"use strict";var a=e("//Fk"),o=e.n(a),i=e("mtWM"),r=e.n(i),u=(e("YaEn"),r.a.create({timeout:5e3}));u.interceptors.request.use(function(t){return t},function(t){return o.a.reject(err)}),u.interceptors.response.use(function(t){return t},function(t){return o.a.reject(t)}),n.a=u},xJD8:function(t,n,e){"use strict";var a=e("Dd8w"),o=e.n(a),i=e("NYxO");n.a={name:"app",data:function(){return{}},mounted:function(){},computed:o()({},e.i(i.a)({pageDirection:function(t){return t.routeCtro.pageDirection}}))}}},["NHnr"]);
//# sourceMappingURL=app.fd48fe5531b855bce7ff.js.map