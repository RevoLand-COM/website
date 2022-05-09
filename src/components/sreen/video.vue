<!--
 * @Author: your name
 * @Date: 2022-03-26 14:39:17
 * @LastEditTime: 2022-04-20 14:54:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-portale:\demo\revoland\src\view\home.vue
-->
<template>
  <div class="sreenVideo" v-if="info.video">
    <div id="sreenVideo" ref="sreenVideo"></div>
    <div class="mask"></div>
    <video preload="auto" playsinline="" autoplay loop="" muted=""> 
      {{info.video.video1.video}}
      <source :src="info.video.video1.video" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playing:false
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
    handleScroll() {
        if(!this.playing){ 
          const windowHeight = document.documentElement.clientHeight //屏幕高度
          let scrollHeight = window.pageYOffset; //滚动高度
          let modelToTop = this.$refs.sreenVideo.getBoundingClientRect().top//距离顶部高度         
          if(scrollHeight>(windowHeight/2)){ 
              this.playing = true
          }
        }
    },

  },
  beforeDestroy(){
      window.removeEventListener("scroll",this.handleScroll)
  },

  mounted(){
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll); // 监听（绑定）滚轮滚动事件
    });
  }

  
};
</script>
<style lang="less" scoped>
  .sreenVideo{display: flex;align-items: center;justify-content: center;overflow: hidden;height: 100vh;position: relative;top: 0;left: 0}
  .sreenVideo  video { width:100%;  }
  .sreenVideo  .mask{
    position:absolute;width: 100%; 
    height: 101%;
    background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen2.png) no-repeat; background-size: 100% 100%;
  }
  @media screen and (max-width: 420px) {
    .sreenVideo{height: auto; margin: 0.5rem 0;}
  }
</style>
