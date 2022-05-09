/*
 * @Author: 叹息桥
 * @Description: 
 * @Date: 2022-04-11 10:43:17
 * @LastEditTime: 2022-04-18 14:10:04
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import Vuex from "vuex";
import {langs} from "../locals/langs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "en",
    web3js: null,
    metaMaskAccount: "",
    drawer:false,
  },
  getters: {
    getWeb3js(state) {
      return state.web3js;
    },
    getMetaMaskAccount(state) {
      return state.metaMaskAccount;
    },
    getDrawer(state){ 
      return state.drawer
    },
    getLang(state){ 
      return state.lang
    }
  },
  mutations: {
    updateLang(state, lang) {
      //检查是否在翻译, 有的话切换,没的话忽略
      if (langs.includes(lang)) {
        state.lang = lang;
      }
    },
    updateDrawer(state) {
      state.drawer = !state.drawer;
    },
    setWe3Js(state, object) {
      state.web3js = object;
    },
    setMaskAccount(state, account) {
      state.metaMaskAccount = account;
    },
  },
  actions: {},
  modules: {},
});
