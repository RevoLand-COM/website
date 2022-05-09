<!--
 * @Author: your name
 * @Date: 2022-03-26 14:39:17
 * @LastEditTime: 2022-04-21 10:26:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \revlandPresalee:\demo\revoland\src\components\footer.vue
-->
<template>
  <div class="footer" v-if="info.footer">
    <div class="content" :class="[!isMobile ? 'pc_safe' : 'app_safe']">
      <div class="link">
        <div class="logo">Revoland</div>
        <div>
          <span class="gray">{{info.footer.develop}}</span>
          <span class="blod">Chain X Game Tech</span>
        </div>
      </div>
      <div class="link">
        <div>
          <span class="blod">{{info.footer.dev_team1 }}</span>
          <span class="gray">({{info.footer.dev_team1_desc }})</span>
        </div>
        <div>
          <span class="blod">{{info.footer.dev_team2 }}</span>
          <span class="gray">({{info.footer.dev_team2_desc}})</span>
        </div>
        <div>
          <span class="blod">{{info.footer.dev_team3}}</span>
          <span class="gray">({{info.footer.dev_team3_desc }})</span>
        </div>
      </div>
      <div class="link" >
        <div v-for="item in info.footer_link3" :key="item.id">
        <a
          target="_blank"
          :href="item.url"
          >{{item.title}}</a
        >
        </div>
      </div>
      <div class="link">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, idx) in info.bottom_link1"
          :key="idx"
        >
          <img :src="item.image" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    },
  },
  watch: {
    "$store.state.lang": function () {
      this.init();
    },
  },

  mounted() {
    this.init();
  },
  data() {
    return { 
      info:"",
    };
  },

  methods: {
    init() {
      let lang = this.$store.state.lang;
      var that = this;
      this.$ajax
        .post(this.$env.BASEURL+"/addons/cms/api/getfooter", {
          apikey: 'ladfdddfdfd',
          lang: lang,
        })
        .then((res) => {          
          that.info = res.data.data;
        });
    },
  },
};
</script>
<style lang="less" scoped>
.blod {
  font-weight: bold;
}
.gray {
  color: #b2b2b2;
}
.footer {
  background-color: #000;
  color: #fff;
  //05.05
  // height: 100px;
  // width: 100%;
  // position: fixed;
  // bottom: 0;  
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.footer .content {
  height: 360px;
  display: flex;
  justify-content: space-between;
  line-height: 3;
  align-items: center;
  padding: 100px 0;
}
.content .link {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
}
.content .link a {
  color: #fff;
}
.content .link:last-child {
  display: flex;
  width: 120px;
  height: 120px;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}
.content .link:last-child img {
  margin: 10px;
  width: 34px;
}
@media screen and (max-width: 420px) {
  .footer {
    font-size: 0.1rem;
    background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/footer/foot-bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .logo {
    font-size: 0.16rem;
  }
  .footer .content {
    height: 3rem;
    line-height: 1;
    padding: 0.3rem;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
  }
  .content .link {
    line-height: 1.5;
    height: auto;
  }
  .content .link:last-child {
    display: flex;
    width: 50%;
    justify-content: space-around;
    flex-direction: row;
    height: auto;
  }
  .content .link:last-child img {
    margin: 0;
    margin-right: 0.1rem;
    width: 0.2rem;
  }
}
</style>