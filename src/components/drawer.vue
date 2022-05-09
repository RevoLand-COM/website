<!--
 * @Author: your name
 * @Date: 2022-03-26 14:39:17
 * @LastEditTime: 2022-04-21 10:42:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-portale:\demo\revoland\src\view\home.vue
-->
<template>
  <div class="home" v-if="info.header">
    <el-drawer
      :visible.sync="$store.state.drawer"
      direction="rtl"
      :before-close="handleClose"
      size="100%"
    >
      <div slot="title" class="title">
        <img class="logo" :src="info.header.logo" alt />
      </div>
      <div class="content">
        <div class="menu">
          <div v-for="(item, i) in info.header.navList" :key="i">
            <a
              v-if="item.son.length == 0 && item.outlink == ''"
              class="nemu-item"
              :href="'#'+item.diyname" @click="closeDrawer"
            >
              {{ item.name }}
            </a>
            <a
              v-else-if="item.son.length == 0 && item.outlink != ''"
              class="nemu-item"
              :href="item.outlink"
            >
              {{ item.name }}
            </a>
            <div v-else>
              <div
                class="nemu-item"
                :href="'#'+item.diyname" @click="closeDrawer"
              >
                {{ item.name }}
                <img
                  v-if="!listAcitve"
                  src="https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/jt.png"
                />
              </div>
              <div
                class="sub-menu"
                :class="[{ show: listAcitve == item.diyname }]"
              >
                <p class="" v-for="(item2, sub) in item.son" :key="sub">
                  <a :href="item2.outlink" target="_blank">{{ item2.name }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="link">
          <a
            :href="item.url"
            target="_blank"
            v-for="(item, idx) in info.bottom_link1"
            :key="idx"
            @click="iconClick"
          >
            <img class="link-icon" :src="item.image" alt />
          </a>
        </div>
        <div class="btn-box">
          <div @click="changeLanguage">{{ info.common.selectLanguage }}</div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "Drawer",
  data() {
    return {
      listAcitve: "",
    };
  },
  props: ["info"],
  methods: {
    change(name) {
      if (this.listAcitve != "") {
        this.listAcitve = "";
      } else {
        this.listAcitve = name;
      }
    },
    handleClose(done) {
      done();
    },
    changeLanguage() {
      const item = this.$store.getters.getLang === "en" ? "zh-cn" : "en";
      this.$store.commit("updateLang", item);
      this.$i18n.locale = item;
      this.$store.commit("updateDrawer");
    },
    closeDrawer() {
      this.$store.commit("updateDrawer");
    },
    menuClick(selector) {
      var anchor = document.querySelector(selector);
      document.documentElement.scrollTop = anchor.offsetTop;
      this.closeDrawer();
    },
    iconClick() {
      this.closeDrawer();
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-drawer {
  background-image: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/drawer-bg.png);
  background-size: 100% 100%;
  background-color: #121212;
  color: #ffffff;
  padding: 0.2rem;
  font-size: 0.3rem;
  .el-drawer__header {
    color: #ffffff;
    line-height: 1;
    padding: 0;
  }
  .el-drawer__close-btn {
    font-size: 0.2rem;
    min-width: unset;
  }
}
.logo {
  width: 0.67rem;
  height: 0.4rem;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.nemu-item {
  color: #ffffff;
  font-size: 0.3rem;
  line-height: 0.5rem;
  text-align: center;
}
.sub-menu {
  transform: scale(1, 0);
  transition: all 0.1s ease-in-out 0s;
  height: 0px;
  font-size: 0.24rem;
  text-align: center;
  margin-bottom: 10px;
}
.sub-menu a {
  color: #fff;
}
.sub-menu.show {
  transform: scale(1, 1);
  transition: all 0.1s ease-in-out 0s;
  height: auto;
}

.link-icon {
  width: 0.3rem;
}
.link {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  height: 1rem;
}
.btn-box {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;

  > * {
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.16rem;
  }
  > a {
    flex: 1;
    background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/drawer-btn1.png)
      no-repeat;
    background-size: 100% 100%;
  }
  > div:last-child {
    flex-shrink: 1;
    width: 1rem;
    margin-left: 0.1rem;
    background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/drawer-btn2.png)
      no-repeat;
    background-size: 100% 100%;
  }
}
</style>