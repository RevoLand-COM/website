<!--
 * @Author: your name
 * @Date: 2022-03-26 14:39:17
 * @LastEditTime: 2022-05-06 17:37:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-portale:\demo\revoland\src\view\home.vue
-->
<template>
  <div class="team" v-if="info.logolink">
    <div id="team"></div>
    <!-- <div class="team_warppr"></div> -->
    <div class="content" :class="[!isMobile ? 'pc_safe' : 'app_safe']">
      <div class="tab_group">
        <div
          class="tab_item"
          v-for="(item, index) in channel"
          :key="item.id"
          :class="[index == show ? 'cur' : '']"
          @click="changeindex(index)"
        >
          {{ item.name }}
        </div>
      </div>
       <!-- <%= BASE_URL %>  -->
      <!-- --------------==============================------------- -->
      <div
        class="team_group"
        v-for="(item, index) in channel"
        :key="item.id"
        :class="[index == show ? '' : 'hide']"
      >
        <div
          class="team_item"
          v-for="item2 in channelItem[show]"
          :key="item2.name"
        >
        <a :href="item2.href" target="_black" >
          <img :src="'/team/'+item2.image" :key="item2.name" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: 0,
      channel: [],
      channelItem: [
        // INVESTORS
        // GameGuilds
        // Investors
        // PARTNERS
        [
          { image:'Investors1.png', name:'Haskey Capital', href: "https://www.hashkey.com/" },
          { image:'Investors2.png', name:'One Block Capital Advisory', href: "https://www.oneblockcapital.com/" },
          { image:'Investors6.png', name:'Arcanum Capital	', href: "https://www.arcanum.capital/" },
          { image:'Investors4.png', name:'Linkvc', href: "http://www.linkvc.com/" },
          { image:'Investors5.png', name:'A.K.G Ventures', href: "http://www.akgvc.com/" },
          { image:'Investors3.png', name:'Atlas Capital', href: "https://www.atlascapital.org/" },
          { image:'Investors7.png', name:'Crypto Nord', href: "https://www.cryptonord.com/" },
x
        ],
        
        [
          { image: 'PARTNERS1.png', name:'SEAGM', href: "https://www.seagm.com/	" },
          { image: 'PARTNERS2.png', name:'SEM9', href: "https://www.sem9.gg/	" },
          { image: 'PARTNERS3.png', name:'SIGMA', href: "https://www.sigma-global.com/en/	" },
          { image: 'PARTNERS4.png', name:'ICEBURGER', href: "http://www.iceburger.net/	" },
          { image: 'PARTNERS5.png', name:'EARNATHON', href: "https://earnathon.com/" },
          { image: 'PARTNERS6.png', name:'HUAWEI', href: "https://www.huawei.com/en/" },
          { image: 'PARTNERS7.png', name:'KHALASPAY', href: "https://khalaspay.net/" },
        ],
        [
           { image: 'GameGuilds1.png', name:'INDIGG', href: "https://indi.gg/" },
           { image: 'GameGuilds2.png', name:'ABEY', href: "https://www.abey.com/" },
           { image: 'GameGuilds3.png', name:'YIELD GUILD', href: "https://yieldguild.io/" },
           { image: 'GameGuilds4.png', name:'PACCLUB', href: "https://t.co/o6MsHWlRMa/" },
           { image: 'GameGuilds5.png', name:'AVOCADO', href: "https://avocadoguild.com/" },
        ],
      ],
    };
  },
  props: ["info"],
  computed: {
    isMobile() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    },
  },
  mounted() {
    console.log(this.info.logolink.channel);
    this.channel = this.info.logolink.channel;
  },
  methods: {
    changeindex(index) {
      console.log(index);
      this.show = index;
    },

    inveLink(index) {
      this.show = index;
    },
  },
};
</script>
<style lang="less" scoped>
.team {
  position: relative;
  top: 0;
}
.team_warppr {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen7.png)
    no-repeat;
  background-size: 100% 100%;
}
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.tab_group {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  width: 60%;
  position: relative;
  z-index: 999;
}
.tab_group .tab_item {
  border-right: 2px solid #6f6f6f;
  flex: 1;
  font-size: 36px;
  text-align: center;
}
.tab_group .tab_item:last-child {
  border: unset;
}
.team_group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.team_item {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 40px;
}
.team_item img {
  width: 100%;
}
.content .team_group:nth-child(2) .team_item {
  width: 25%;
}

.content .team_group:nth-child(3) .team_item:nth-child(4) {
  width: 50%;
  margin-bottom: 0;
}
.content .team_group:nth-child(3) .team_item:nth-child(4) img {
  margin-right: -220px;
}
.content .team_group:nth-child(3) .team_item:nth-child(5) img {
  margin-left: -220px;
}
.content .team_group:nth-child(3) .team_item:nth-child(5) {
  width: 50%;
  margin-bottom: 0;
}
.content .team_group:nth-child(3) img {
  width: 350px;
}
.content .team_group:nth-child(4) img {
  width: 280px;
}
.tab_item {
  color: #6f6f6f;
}
.cur {
  color: #fff;
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/logolink2/caiyun.png)
    no-repeat;
  background-size: 100% 100%;
}
.hide {
  display: none;
}
@media screen and (max-width: 420px) {
  .team {
    height: auto;
  }
  .team_warppr {
    width: 100%;
    height: 100%;
  }
  .content {
    height: 100%;
  }
  .tab_group {
    padding: 0.2rem;
    justify-content: space-around;
    width: 100%;
  }
  .tab_group .tab_item {
    border-right: 2px solid #fff;
    font-size: 0.14rem;
    flex: 1;
  }
  .tab_group .tab_item:last-child {
    border: unset;
  }

  .team_item {
    width: 100%;
    margin: 0;
    height: 100px;
  }
  .team_item img {
    width: 50% !important;
  }

  .content .team_group:nth-child(4) .team_item {
    margin-bottom: 30px;
  }
  .content .team_group:nth-child(4) .team_item img {
    height: 100%;
    width: auto;
  }
}
</style>
