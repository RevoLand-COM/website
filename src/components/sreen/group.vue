<!--
 * @Author: 叹息桥
 * @Description: 
 * @Date: 2022-04-11 12:54:04
 * @LastEditTime: 2022-04-20 14:10:40
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="group" v-if="info.sreen5" id="join">
    <div id="group"></div>
    <div class="group_warp">
      <div class="content " :class="[!isMobile?'pc_safe':'app_safe']">
        <div class="section">
          <div class="title">{{info.sreen5.title}}</div>
          <div class="desc">{{info.sreen5.desc}}</div>
          <div class="operation">
            <div v-for="item in info.sreen5_btn" :key="item.id">
            <a class="btn-a" :href="item.url"  target="_blank" v-if="item.url!=''" :style="{backgroundImage: 'url('+ item.image +')'}"> <img :src="item.ico" > <span>{{item.title}}</span></a>
            <a class="btn-a" @click="showNotify" v-else><img :src="item.ico" > <span>{{item.title}}</span></a>
             </div>

          </div>
        </div>
        <div class="group-box">
          <div class="group-item" :class="[{'zh-line':!isEN}]" v-for=" item in info.sreen5.list" :key="item.id" >
            <div class="group-item_warp">
              <div class="title"><img class="title_icon" :src="item.image"/>{{ item.title}}</div>

              <img class="image" :src="item.image"/>
              <div class="desc text-more">{{ item.content}}</div>
            </div>
          </div>
        </div>
      </div>
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
.group {background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen-5-bg.png) no-repeat;background-size: 100% 100%;}
.group_warp {background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen5.png) no-repeat;background-position: right top;}
.content {display: flex;flex-direction: column;justify-content: space-around;}
.section {width: 60%;text-align: center;}
.section .title {font-size: 46px;font-weight: bold;padding: 20px;}
.section .desc {font-size: 18px;font-weight: 400;line-height: 24px;}
.section .operation {margin-top: 30px;background-repeat: no-repeat; display: flex; justify-content: center;}
.operation img{ width: 30px;}
.operation .btn-a {background-size: cover;width: 180px;height: 49px;margin: 0 10px;}
.operation .btn-a:first-child {background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1-btn1.png);}
.operation .btn-a:last-child {background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1-btn2.png);}
.group-box {display: flex;justify-content: space-between;align-items: center;}
.group-box .group-item {width: 290px; 
  background: linear-gradient(-36deg,rgba(189, 59, 59, 0.1),rgba(73, 98, 229, 0.1));
  border-radius: 20px;flex-shrink: 1;}
.group-item_warp{ display: flex;flex-direction: column; background: linear-gradient(-36deg,rgba(189, 59, 59, 0.3),rgba(73, 98, 229, 0.3));border-radius: 20px;}
.group-box .group-item_warp:hover { transform: scale(1.05) translateY(-20px);background: linear-gradient(-36deg,rgba(189, 59, 59, 0.5),rgba(73, 98, 229, 0.5));};

.group-box .image {align-self: center;width: 160px;height: 160px;border-radius: 50%;background: rgba(99, 84, 166, 0.51);margin: 30px;}
.group-box img {width: 100%;height: 100%;}
.group-box .title {white-space:nowrap;font-size: 26px;font-weight: bold;text-align: center;padding-top: 20px;}
.group-box .title_icon {display: none;}
.group-box .desc { border-top: 1px solid #272727; font-size: 18px;font-weight: 400;  display: flex; align-items: center; height: 170px;line-height: 1.5;padding:0 20px;}
.group-item:last-child .desc { line-height: 1.1 }
@media screen and (max-width: 420px) { 
  // .group {background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen-5-bg.png) no-repeat;background-size: 100% 100%;}
  .group_warp {background-size: 100% ; background-position: right top;}
  .section {width: 100%; padding-top: 2rem; text-align: left;}
  .section .title {font-size: 0.2rem; padding:0.1rem 0;}
  .section .desc {font-size: 0.1rem;line-height: 1.5;}

  .section .operation {margin-top: 0.3rem; font-size: .12rem;}
  .operation img{ width: 0.21rem;}
  .operation .btn-a {width: 1.38rem;height: 0.36rem;margin: 0 10px;}

  .group-box {flex-wrap: wrap;justify-content: space-around;margin-top:0.2rem ;}
  .group-box .group-item {width: 1.65rem; border-radius: 0.1rem;margin: 0.1rem 0;}
  .group-box .group-item_warp:hover { transform:scale(1.05) translateY(-0.08rem);};

  .group-box .title_icon {display: block; width: 0.19rem;height:0.19rem;margin-right: 0.03rem;border-radius: 50%;background: rgba(99, 84, 166, 0.51); flex-shrink: 1;}
  .group-box img {display: none;}
  .group-box .title {font-size: 0.14rem;padding:0.1rem 0.05rem;flex-shrink: 1; display: flex; align-items:center;}
  .group-box .desc { font-size: 0.1rem;padding:0.08rem 0.05rem ;border-top: 1px solid #121212;height:1.5rem; line-height:1.5; align-items: flex-start;}
  .group-item:last-child .desc { line-height: 1.2 }

  .group-box .group-item.zh-line{ 
    .title{ padding: 0.1rem;}
    .title_icon{ margin-right: 0.05rem; }
    .desc{ padding: 0.1rem; line-height: 1.6; }
  }
}
</style>
