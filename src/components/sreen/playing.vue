<!--
 * @Author: 叹息桥
 * @Description: 
 * @Date: 2022-04-11 12:54:04
 * @LastEditTime: 2022-04-16 15:12:29
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="playing" v-if="info.sreen4">
    <div id="playing"></div>
    <div class="content " :class="[!isMobile?'pc_safe':'app_safe']">
      <h2>{{info.sreen4.title}}</h2>
      <section class="section">
        <div class="section-item" v-for="item in info.sreen4.step" :key='item.id'>
          <div class="label">{{item.title }}</div>
          <div class="desc" :class="[{'zh-line':!isEN}]">{{item.content }}</div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {  
  props:[
    'info'
  ],
  data() {
    return {
      isEN:true,
    };
  },

  computed: {
    isMobile() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    },
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.playing {background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen4.png) no-repeat;background-size: 100% 100%;}
.playing .content{ display: flex; align-items: center;flex-direction: column;}
.content h2{ font-size: 50px;font-weight: bold;color: #FFFFFF;line-height: 100px; }
.section { margin-top:60px; background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen4-pc.png) no-repeat;background-size: 100% 100%; width: 814px; height: 600px; position: relative;top: 0; left: 0;}
.section .section-item{ text-align: center; 
  background-image:linear-gradient(-36deg,rgba(149,78,175,0.6),rgba(122,81,156,0.6),rgba(83,80,204,0.6));
  border-radius: 10px;width: 300px; height: 140px; position: absolute;
  display: flex; flex-direction: column;
}
.section-item:nth-child(1) { left: -150px; top: 97px;}
.section-item:nth-child(2) { left: 252px; top: -50px; }
.section-item:nth-child(3) { left: 252px; top: 250px; }
.section-item:nth-child(4) { left: 645px; top: 96px; }
.section-item:nth-child(5) { left: 645px; top: 378px; }
.section-item:nth-child(6) { left: 252px; top: 520px; }
.section-item .label{font-size: 24px;font-weight: bold;line-height: 48px;border-bottom:1px solid #121212 ;}
.section-item .desc{flex:1;font-size: 18px;line-height: 1.1; padding: 10px; height: 76px;display: flex; align-items: center; justify-content: center;}

@media screen and (max-width: 420px) {
  .playing { background-size: cover; background-position: -3rem 0.5rem; }
  .playing .content{ padding:0.5rem 0 1rem ;}
  .content h2{ font-size: 0.26rem;line-height: 1rem; }
  .section { margin-top:60px; width: 2.24rem; height: 4.9rem; background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen4-app.png) no-repeat;background-size: 100% 100%;}
  .section .section-item{ width: 1.5rem; height: 0.7rem; border-radius: 0.05rem; }
  .section-item .label{font-size: 0.12rem;font-weight: bold;line-height: 0.3rem;}
  .section-item .desc{flex:1; font-size: 0.1rem;line-height: 1.2; padding: 0.05rem; height: 0.6rem;}
  .section-item:nth-child(1) { left: 0.32rem; top: -0.45rem; width: 1.6rem; height: 1rem;}
  .section-item:nth-child(2) { left: -0.55rem; top: 0.9rem; width: 1.5rem; height: 0.85rem;}
  .section-item:nth-child(3) { left: 1.3rem; top: 0.9rem;width: 1.5rem; height: 0.85rem;}
  .section-item:nth-child(4) { left: 0.37rem; top: 2.02rem;width: 1.5rem; height: 1rem;}
  .section-item:nth-child(5) { left: 0.37rem; top: 3.52rem;width: 1.5rem; height: 0.75rem; }
  .section-item:nth-child(6) { left: 0.37rem; top: 4.9rem;width: 1.5rem; height: 0.8rem; }
  .section-item .desc.zh-line{ line-height: 1.5; padding:0.2rem; }
}
</style>
