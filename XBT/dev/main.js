// var Vue = require('./lib/vue.js');
// var Router = require('./lib/director.js').Router;
//
// var header = require('./component/header.vue');
// var leftFilter = require('./component/leftFilter.vue');
//
//
// var router = new Router();
// var default_route = 'home';
//
// var app = new Vue(require('./component/app.vue'));
//
// // 路由相关
// function toRoute(route) {
//     window.location.hash = route;
//     app.view.current_route = route;
// }
// function toDefaultRoute() {
//     toRoute(default_route);
// }
// var root = './index.html';
// routes.forEach(function (route) {
//     router.on(route, function () {
//        toRoute(route);
//     });
// });
//
// router.configure({
//     notfound: toDefaultRoute
// });
//
// router.init();
// module.exports = {
//
// };
window.com = {};

require('./jsx/common').myExtends();

//组件
com.header = require('./jsx/utils/my_header');
com.left_filter = require('./jsx/utils/left_filter');
com.user_modal = require('./jsx/utils/user_modal');

//页面控制器
com.select_major = require('./jsx/page/home/select_major');
com.select_school = require('./jsx/page/home/select_school');
com.batch = require('./jsx/page/home/batch.js');

com.school_intro = require('./jsx/page/home/school_intro');
com.school_majors = require('./jsx/page/home/school_majors');
com.school_colleges = require('./jsx/page/home/school_colleges');

com.school_video = require('./jsx/page/home/school_video');

com.user_center = require('./jsx/page/home/user_center');

com.index_page = require('./jsx/page/home/index_page');
//@ sourceMappingURL=all.js.map
