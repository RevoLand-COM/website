<!--
 * @Author: your name
 * @Date: 2022-03-26 14:39:17
 * @LastEditTime: 2022-04-16 15:16:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-portale:\demo\revoland\src\view\home.vue
-->
<template>
  <div class="home">
    <SreenIntro :info="block"></SreenIntro>
    <SreenVideo :info="block"></SreenVideo>
    <SreenGoods :info="block"></SreenGoods>
    <SreenPlaying :info="block"></SreenPlaying>
    <SreenGroup :info="block"></SreenGroup>
    <SreenTeam :info="block"></SreenTeam>
    <SreenGame :info="block"></SreenGame>
    <SreenDevelop :info="block"></SreenDevelop>
    <Drawer :info="block"></Drawer>
  </div>
</template>
<script>
// 项目简介-1
import SreenIntro from "@/components/sreen/intro";
// 视频播放-2
import SreenVideo from "@/components/sreen/video";
// 游戏商品-3
import SreenGoods from "@/components/sreen/goods";
// 游戏玩法-4
import SreenPlaying from "@/components/sreen/playing";
// 社区-5
import SreenGroup from "@/components/sreen/group";

// 合作伙伴-7
import SreenTeam from "@/components/sreen/team";
// 游戏介绍-8
import SreenGame from "@/components/sreen/game";
//新闻

// 开发商-6
import SreenDevelop from "@/components/sreen/develop";
// 侧边栏

import Drawer from "@/components/drawer";

export default {
  components: {
    SreenIntro,
    SreenVideo,
    SreenGoods,
    SreenPlaying,
    SreenGroup,
    SreenDevelop,
    SreenTeam,
    SreenGame,
    Drawer,
  },
  data() {
    return {
      block: {},
    };
  },
  watch: {
    "$store.state.lang": function () {
      this.init();
    },
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      let lang = this.$store.state.lang;
      var that = this;
      this.$ajax
        .post(this.$env.BASEURL + "/addons/cms/api/block", {
          apikey: "ladfdddfdfd",
          lang: lang,
        })
        .then((res) => {
          console.log(res);
          that.block = res.data.data;
        });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  color: #fff;
}
</style>