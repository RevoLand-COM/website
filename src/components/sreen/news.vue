<!--
 * @Author: your name
 * @Date: 2022-03-26 14:39:17
 * @LastEditTime: 2022-04-19 09:54:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-portale:\demo\revoland\src\view\home.vue
-->
<template>
  <div class="game" v-if="info.sreen8">
    <div id="news"></div>
    <div class="content" :class="[!isMobile ? 'pc_safe' : 'app_safe']">
      <div class="collapse">
        <div
          class="collapse-item"
          v-for="(item, index) in info.news"
          :key="item.id"
          :data-key="index"
          @click="changeActive"
        >
          <a :href="item.outlink">
            <div class="img">
              <img :src="item.image" />
            </div>
            <div class="right">
              <h5 :data-key="index">{{ index + 1 }}.{{ item.title }}</h5>
              <div>
                <div class="desc">{{ item.description }}</div>
              </div>
            </div>
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
      listAcitve: 1,
    };
  },
  props: ["info"],
  computed: {
    isMobile() {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
    },
  },
  methods: {
    changeActive(e) {
      this.listAcitve = e.target.dataset.key;
    },
  },
};
</script>
<style lang="less" scoped>
.game {
  background-position: center;
  background-position-x: 80%;
  background-size: 800px;
  margin-bottom: 50px;
}
.content {
  display: flex;
  height: 100%;
  align-items: center;
}
.content .collapse {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.content a {
  color: #fff;
  text-decoration: none;
}
.content h5 {
  font-size: 26px;
  line-height: 1.5;
  margin-bottom: 20px;
  font-weight: bold;
}
.content h5 img {
  width: 10px;
  height: 10px;
}
.collapse-item {
  margin-bottom: 40px;
}
.collapse-item a .img{width: 20%;float: left;}
.collapse-item a .img img{width: 100%;}
.collapse-item a .right{width: 75%;float: right;}
.collapse-item > div {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  transition: all 0.1s ease-in-out 0s;
  height: 0px;
  transform: scale(1, 0);
}
.collapse-item > div.ative {
  height: auto;
  transition: all 0.6s ease-in-out 0s;
  transform: scale(1, 1);
}
.collapse-item.btn {
  display: flex;
  justify-content: center;
}
.content .btn-a {
  background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen1-btn2.png)
    no-repeat;
  background-size: 100% 100%;
  height: 50px;
  width: 240px;
}

@media screen and (max-width: 420px) {
  .collapse-item a .img{width: 100%;}
.collapse-item a .img img{width: 100%;}
.collapse-item a .right{width: 100%;}
  .game {
    background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/sreen8-app.png)
      no-repeat;
    background-position: 0 0.58rem;
    background-size: 100%;
    height: auto;
  }
  .content {
    flex-direction: column;
    justify-content: flex-start;
  }
  .content .collapse {
    width: 100%;
    margin-top: 3rem;
  }
  .desc {
   
    overflow: hidden;
    font-size: 14px;
  }
  .content h5 {
    font-size: 0.18rem;
  }
  .content h5 img {
    width: 0.05rem;
    height: 0.05rem;
  }
  .collapse-item > div {
    font-size: 0.1rem;
    height: 50px;
    transition: all 0.1s ease-in-out 0s;
    transform: translateX(-500%);
    overflow: hidden;
  }
  .collapse-item > div {
    height: auto;
    transition: all 0.4s ease-in-out 0s;
    transform: translateX(0%);
    margin: 0.1rem 0;
  }
  .content .btn-a {
    display: flex;
    height: 0.3rem;
    width: 1.2rem;
    font-size: 0.12rem;
    margin: 0 0.1rem;
  }
}
</style>