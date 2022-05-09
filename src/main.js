/*
 * @Author: 叹息桥
 * @Description: 
 * @Date: 2022-04-11 10:43:17
 * @LastEditTime: 2022-04-21 10:25:20
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import {Dropdown,DropdownMenu,DropdownItem,Drawer,Notification,Message} from "element-ui";

import "./style/element-variables.scss";
import "element-ui/lib/theme-chalk/display.css";
import { i18n } from "./locals";

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

import env from "./config/env.js";
import axios from "axios";
import qs from "qs";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Drawer);

Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$ajax=axios;
Vue.prototype.$qs=qs;
Vue.config.productionTip = false;
Vue.prototype.$env=env;

let vue = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

i18n.locale = store.getters.getLang;
export default vue;
