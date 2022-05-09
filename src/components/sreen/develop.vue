<!--
 * @Author: 叹息桥
 * @Description: 
 * @Date: 2022-04-11 12:54:04
 * @LastEditTime: 2022-04-19 11:36:42
 * @LastEditors: Please set LastEditors
-->
<template>
  <div class="develop" v-if="info.sreen6">
    <div id="news"></div>
    <div id="develop"></div>

    <div class="newstitle">NEWS</div>
    <img
      src="https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/news/news_bottom.png"
      class="news_bottom"
    />

    <div class="swiper-container" v-if="!isMobile">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in info.news" :key="item.id">
          <a :href="item.outlink">
            <img :src="item.image" />
          </a>
          <span class="ge"></span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="newslist">
        <a :href="item.outlink" v-for="item in info.news" :key="item.id">
          <img :src="item.image" />
        </a>
      </div>
    </div>

    <div class="content" :class="[!isMobile ? 'pc_safe' : 'app_safe']">
      <div class="title">{{ info.sreen6.title }}</div>
      <div class="desc">{{ info.sreen6.desc }}</div>
      <div class="operation">
        <a target="_blank" :href="info.sreen6.btn.url" class="btn-a"
          ><img :src="info.sreen6.btn.ico" />
          <span>{{ info.sreen6.btn.title }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  mounted() {
    if (!this.isMobile) {
      new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        slidesPerView: 3,
        autoplay: 2000,
      });
    }
  },
  updated() {
    if (!this.isMobile) {
      new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        slidesPerView: 3,
        autoplay: 2000,
      });
    }
  },
  props: ["info"],
  computed: {
    isMobile() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    },
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.develop {
  padding-top: 250px;
}
.swiper-container {
  width: 100%;
  margin-top: 50px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 33%;
}
.swiper-slide a {
  width: 100%;
}
.swiper-slide img {
  width: 80%;
}
.newstitle {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
}
.news_bottom {
  width: 60%;
  display: block;
  margin: 0 auto;
}
.pc_safe {
  height: 800px;
}
.ge {
  background: #fff;
  width: 2px;
  height: 20px;
}
.develop {
  height: 100vh;
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen6.png)
    no-repeat;
  background-size: cover;
  position: relative;
  z-index: 999;
}
.content {
  display: flex;
  height: 200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-size: 50px;
  font-weight: bold;
  line-height: 150px;
  text-align: center;
}
.desc {
  font-size: 26px;
  font-weight: 400;
  line-height: 40px;
}
.operation {
  margin-top: 100px;
}
.operation img {
  width: 28px;
  margin-right: 20px;
}
.operation a > span {
  flex: 1;
}
.operation a {
  text-align: center;
  padding: 0 20px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen6-btn.png)
    no-repeat;
  background-size: cover;
  width: 183px;
  height: 48px;
  color: #fff;
}
@media screen and (max-width: 420px) {
  .develop {
    padding-top: 100px;
  }
  .newslist {
    width: 60%;
    margin: 0 auto;
    font-size: 0;
    margin-top: 30px;
  }

  .newslist img {
    width: 100%;
    margin-bottom: 20px;
  }
  .app_safe {
    height: auto;
  }
  .develop {
    height: auto;
    background-size: 180%;
    background-position: center center;
  }
  .content {
    padding: 0.5rem 0;
  }
  .newstitle {
    font-size: 0.26rem;
    line-height: 0.55rem;
  }
  .news_bottom {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  .title {
    font-size: 0.26rem;
    line-height: 0.75rem;
  }
  .desc {
    font-size: 0.1rem;
    line-height: 1.3;
    text-align: center;
    width: 90%;
  }
  .operation {
    margin-top: 0.3rem;
    height: auto;
    display: flex;
  }
  .operation img {
    width: 0.2rem;
    margin-right: 0.1rem;
  }

  .operation a {
    font-size: 0.12rem;
    width: 1.38rem;
    height: 0.36rem;
  }
}
</style>
