<!--
 * @Author: your name
 * @Date: 2022-03-26 14:39:17
 * @LastEditTime: 2022-04-20 18:59:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-portale:\demo\revoland\src\view\home.vue
-->
<template>
    <div class="intro" v-if="info.sreen1">
        <div id="intro"></div>
        <div class="content" :class="[!isMobile?'pc_safe':'app_safe']">
          <img class="title"  src="https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1/title.png"/>
          <div class="gif_box">
            <div class="gif_item" style="'animation: show 1s 1'"  v-for="item in info.screen1_pre_sell" v-bind:key="item.id">
              <div class="gif_item_shade"></div>            
              <img :src="item.image">
            </div>
           
          </div>
          <h3>
            <span>{{info.sreen1.title}}</span>
            <span> 
              <a style="animation: slide-right 5s 1" target="blank" :href="info.sreen1.title_sub.url">{{info.sreen1.title_sub.title}}</a>
              <img src="https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1/jt.png">
              <img src="https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1/jt.png">
            </span>
          </h3>
          
          <p>{{info.sreen1.desc}}</p>
          <div class="btn_box">

             <div v-for="item in info.sreen1_btn" :key="item.id">
            <a class="btn-a" :href="item.url"  target="_blank" v-if="item.url!=''" :style="{backgroundImage: 'url('+ item.image +')'}"> <img :src="item.ico" > <span>{{item.title}}</span></a>
            <a class="btn-a" @click="showNotify" v-else><img :src="item.ico" > <span>{{item.title}}</span></a>
             </div>
          </div>
        </div>
     </div>
</template>
<script>
export default {
  data() {
    return {
       
    };
  },
  props:[
    'info'
  ],
  computed: {
    
    isMobile() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    },
  },    
  methods: {
    showNotify(){ 
      this.$message({
        message: this.$t('common.message'),
        center: true,
        duration:1000
      });
    },
  }
};
</script>
<style lang="less" scoped>

    @keyframes lamp {
        0% {
            opacity: 1;
            transform: translateX(0%)
        }
        100% {
            opacity: 1;
            transform: translateX(100%)
        }
    }
    .intro{background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1/sreen1-bg.png) no-repeat; background-size: 100% 100%;}
    .intro .content{display: flex; flex-direction: column; align-items: center;font-size: 18px;overflow: hidden;
      max-width: unset;
      background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1/sreen1-bg2.png) no-repeat; background-size: 100% 70%;background-position: 50% 60%; 
    }
    .content .title { width: 630px; height: 350px; margin-top: -20px; }
    .content .gif_box { display: flex;}
    .content .gif_item { width: 250px; height: 250px; margin:0 10px; border-radius: 40px; position: relative; top: 0; overflow: hidden;}
    .content .gif_item_shade { width: 100%; height: 100%; position: absolute; top: 0;left: 0; z-index: 99; box-shadow: 0px 0px 80px #000 inset;}
    .content .gif_item img{width: 100% ; height: 100%; }
    .content h3{font-size: 24px;font-weight: 400;font-style: italic; margin: 10px 0 60px; display: flex; align-items: center; justify-content: center;}
    .content h3 a{ font-size: 22px; 
      background-image:-webkit-linear-gradient(left,#0a7aeb,#da1d23);
      -webkit-background-clip:text; 
      -webkit-text-fill-color:transparent;
      font-weight: 800;margin-top: -3px; line-height: 1; margin: 0 10px;padding-right:5px ;
      border-image: -webkit-linear-gradient(-36deg,#0a7aeb,#da1d23) 0 0 100 0;
      border-bottom:2px solid;
    }
    .content h3  img{ width: 20px; margin-bottom: -1px; animation: lamp 2s infinite;}
    .content p{font-size: 18px;line-height: 24px; width: 60%;text-align: center; margin-bottom: 30px;}
    .btn_box{ display: flex; }
    .btn_box img{ width: 24px;  margin-right: 10px; }
    .btn-a{ height: 48px ; width: 180px; font-size: 16px;margin: 0 20px; color: #fff}
    .btn-a:first-child{ background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1-btn1.png);background-size: 100% 100%;}
    .btn-a:last-child{ background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1-btn2.png);background-size: 100% 100%;}
@media screen and (max-width: 420px) {
    .intro{ background-size: 100% 100%;}
    .intro .content{  background-size: 120% 50%;background-position: 50% 60%; }
    .content .title { width: 3.2rem; height: auto; margin: 0.2rem 0 0 0.2rem;}
    .content .gif_box { display: flex; width: 100%; justify-content: space-between; margin-top: 0.2rem;}
    .content .gif_item { width: 1.1rem; height: 1.1rem;  border-radius:0.2rem; margin: 0;}
    .content .gif_item_shade { box-shadow: 0px 0px 0.2rem #000 inset;}
    .content h3{font-size: 0.12rem; margin: 0.1rem 0 0.4rem; width: 100%; display: flex; flex-direction: column; line-height: 1.8;margin-bottom: 0.2rem;}
    .content h3 a{ 
      font-size: 0.12rem;
    }
    .content h3 img{ width: 0.13rem;}
    .content p{font-size: 0.1rem;line-height: 1.5; width: 100%;text-align: center; margin-bottom: 0.2rem;}
    .btn_box img{ width: 0.15rem;  margin-right: 0.1rem; }
    .btn-a{ height: 0.3rem;width:1.3rem; font-size: 0.1rem;margin: 0 20px;}
}
</style>
