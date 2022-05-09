<!--
 * @Author: your name
 * @Date: 2022-04-11 10:38:20
 * @LastEditTime: 2022-04-20 18:21:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \revlandPresalef:\workSpace\website\src\App.vue
-->
<template>
  <div id="app" :class="[!isMobile ? 'pc' : '']">
    <Header></Header>
    <router-view id="main" />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: {
    isMobile() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    },
  },
};
</script>

<style lang="less">
@import "assets/less/index.css";
@import "assets/less/animation.css";


</style>
