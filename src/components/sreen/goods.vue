<!--
 * @Author: 叹息桥
 * @Description: 
 * @Date: 2022-04-11 12:54:04
 * @LastEditTime: 2022-04-19 12:03:22
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="goods">
    <div class="goods_warp" v-if="info.sreen3">
      <div id="goods"></div>
      <div class="content" :class="[!isMobile ? 'pc_safe' : 'app_safe']">
        <div class="header">
          <h5 class="title">{{info.sreen3.title}}</h5>
          <p class="desc">
            {{info.sreen3.desc }}
          </p>
        </div>
        <div class="tab-box">
          <div
            class="tab-item"
            :class="selectTab == index ? 'active' : ''"
            v-for="(tab,index) in info.heronft"
            :key="tab.id"
            :data-key="index"
            @click="tabChange"
          >
            {{ tab.name }}
          </div>
        </div>
        <div class="banner-box">
          <div class="content">
            <div
              v-for="(item, i) in info.heronft[selectTab].list"
              :key="i"
              v-show="i + 1 > (page - 1) * limit && i < page * limit"
            >
              <img :src="item.image" />
            </div>
          </div>
        </div>
        <div class="page-box">
          <div class="page-left" data-page="left" @click="pageChange"></div>
          <div class="page-right" data-page="right" @click="pageChange"></div>
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
      selectTab: "0",      
      page: 1,
      limit: 12,
    };
  },

  computed: {
    isMobile() {
      const res = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
      if (res) this.limitChange();
      return res;
    },
  },
  methods: {
    tabChange(e) {
      this.selectTab = e.target.dataset.key;
      this.page = 1;
    },
    limitChange() {
      this.limit = 9;
    },
    pageChange(e) {
      const genre = e.target.dataset.page;
      const totalCont = this.info.heronft[this.selectTab].list.length;
      const totalPage = Math.ceil(totalCont / this.limit);
      if (genre == "left") {
        if (this.page === 1) {
          this.page = totalPage;
          return;
        }
        this.page--;
      } else {
        if (this.page === totalPage) {
          this.page = 1;
          return;
        }
        this.page++;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.goods {
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen3-bg1.png) no-repeat left bottom;
}
.goods .goods_warp {
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen3-bg2.png) no-repeat right top;
}
.goods_warp > .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}
.header .title {
  font-size: 50px;
  font-weight: bold;
  line-height: 90px;
}
.header .desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

.tab-box {
  display: flex;
  align-items: center;
}
.tab-box .tab-item {
  width: 256px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen3-tab.png) no-repeat;
  background-size: 100% 100%;
}
.tab-box .tab-item.active {
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen3-tab-active.png) no-repeat;
  background-size: 100% 100%;
}

.banner-box {
  width: 100%;
}
.banner-box .content {
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  overflow: hidden;
}
.banner-box img {
  width: 206px;
  padding: 10px;
}
.page-box {
  display: flex;
  justify-content: space-around;
  width: 375px;
  margin: 0 auto;
  margin-top: 30px;
}
.page-box > div {
  width: 50px;
  height: 50px;
}
.page-box .page-left {
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/page-left.png) no-repeat;
  background-size: 100% 100%;
}
.page-box .page-right {
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/page-right.png) no-repeat;
  background-size: 100% 100%;
}

@media screen and (max-width: 420px) {
  .goods {
    background-size: 50%;
  }
  .goods .goods_warp {
    background-size: 50%;
  }
  .goods_warp > .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .header {
    margin-bottom: 0.1rem;
  }
  .header .title {
    font-size: 0.26rem;
    font-weight: bold;
    line-height: 2;
  }
  .header .desc {
    font-size: 0.1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .tab-box {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.1rem;
    justify-content: space-between;
  }
  .tab-box .tab-item {
    width: 1rem;
    height: 0.25rem;
    line-height: 0.25rem;
    flex: 1;
  }

  .banner-box {
    width: 100%;
  }
  .banner-box .content {
    height: auto;
    width: 100%;
  }
  .banner-box .content > div {
    width: 33%;
    height: 1.6rem;
  }
  .banner-box img {
    width: 100%;
    padding: 0.05rem;
  }

  .page-box {
    width: 60%;
    margin-top: 0.3rem;
  }
  .page-box > div {
    width: 0.36rem;
    height: 0.36rem;
  }
}
</style>
