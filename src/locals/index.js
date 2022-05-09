import Vue from "vue";
import VueI18n from 'vue-i18n'

import { langs } from "./langs";

import axios from "axios";
import qs from "qs";
let messages = {};


// const get12 =async function () {
//   await axios.post("http://land.mkcoffeelove.club/addons/cms/api/block", { 'apikey': 'ladfdddfdfd' })
//     .then(res => {
//       /*
//       langs.forEach((lang) => {
//         messages[lang] = res.data.data[lang]
//       });*/    
//       console.log(res.data.data)
//       messages = res.data.data
//     })
// }
// get12();


// let time = setTimeout(()=>{
//   console.log( messages )
  
// })
 
langs.forEach((lang) => {
  messages[lang] = require(`./${lang}.json`);
});

Vue.use(VueI18n);


export const i18n = new VueI18n({
  locale: "en", // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  fallbackLocale: "en",
  messages,
});

export function $t(args) {
  return i18n.tc.call(i18n, args);
}

//使用链接
//https://kazupon.github.io/vue-i18n/zh/guide/directive.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%AF%AD%E6%B3%95

//使用链接
//https://kazupon.github.io/vue-i18n/zh/guide/directive.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%AF%AD%E6%B3%95

/*
langs.forEach((lang) => {
  messages[lang] = require(`./${lang}.json`);
});
*/
