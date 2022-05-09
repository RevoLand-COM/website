<template>
  <div class="header">
    <div class="header-content">
      <!-- logo -->
      <img class="logo" :src="info.logo" alt/>
      <!-- 导航 -->
      <div class="menu">
        <div class="menu-item" v-for="(item, i) in info.navList" :key="i">
          <a v-if="item.son.length==0&&item.outlink==''" :href="'#'+item.diyname" > {{item.name}}</a>
          <a v-else-if="item.son.length==0&&item.outlink!=''" target="_blank" :href="item.outlink">{{item.name}}</a>
          <el-dropdown v-else>
            <a href="javascript:void(0)">
              {{item.name}}
            </a>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(items, key) in item.son" :key="i+'-'+key" >
                <a target="_blank" :href="items.outlink">
                  {{ items.name}}
                </a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!-- 操作 -->
      <div class="handle">
        <el-dropdown class="language"  @command="changeLanguage">
          <div class="language-btn">
            {{ $t("common.selectLanguage") }}
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, key) in languages"
              :key="key"
              :command="item.key"
            >
              {{ item.title }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a class="handle-btn btn-a"  target="_blank" href="http://nft.revoland.com/">
          <img
            src="https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/header/nav-btn-icon.png"
            class="handle-btn-icon"
          />{{$t('header.navBtn')}}
        </a>
        <i class="drawer el-icon-s-fold" @click="openDrawer"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 页面列表     
      info:"",
      // 语音列表
      languages: [
        { title: "繁體中文", key: "zh-cn" },
        { title: "English", key: "en" },
      ],
      // 默认中文
      classActive: false,
      drawer: false,
      direction: 'rtl',
    };
  },
   watch:{    
     "$store.state.lang":function(){
       this.init()
     }
  },
  
  mounted(){
     this.init()
  },
  methods: {
    init()
      {
        let lang=this.$store.state.lang
        var that=this;
        that.$ajax.post(this.$env.BASEURL+"/addons/cms/api2/getheader",{'apikey':'ladfdddfdfd','lang':lang})
        .then(res=>{         
          console.log(res)
          that.info=res.data.data

        })
      },  
    // 下拉框选择语言
    changeLanguage(item) {    
      if (item === this.$store.getters.getLang) {
          return;
      }
      this.$store.commit("updateLang", item);
      this.$i18n.locale = item;
    },
    openDrawer() {
      this.$store.commit("updateDrawer");
    },
    // 默认页面
    goAnchor(selector) {
      var anchor = document.querySelector(selector)
      console.log(anchor.offsetTop)
      document.documentElement.scrollTop = anchor.offsetTop
    }
  },
 
  created() {
    
  },
};
</script>
<style lang="less" scoped>
.el-dropdown-menu{ background-color: RGBA(56, 69, 86, 0.5); border: 0; }
.el-dropdown-menu__item{ color: #fff;}
.el-dropdown-menu__item:hover{ color: #fff; background-color: unset;}
.el-dropdown-menu .popper__arrow{ border-bottom-color: RGBA(56, 69, 86, 0.5) !important;}
.el-dropdown-menu .popper__arrow::after{ border-bottom-color: RGBA(56, 69, 86, 0.5) !important;}

.header {background: url(https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/header/header-bg.png) no-repeat;background-size: cover;height: 80px;position: fixed;top: 0; left:0; color: #fff;font-size: 14px;width: 100%;z-index: 1024;}
.header .header-content { min-width: 1080px; display: flex;align-items: center;justify-content: space-between;height: 80px;width: 100%;margin: 0 auto;padding: 0 30px;}
.logo {width: 104px;height: 62px;}
.drawer{display: none;}
.menu {display: flex;justify-content: space-around;align-items: center;width: 700px; color: #fff;}
a{color: #fff;}
.handle {display: flex;align-items: center;}
.handle .language-btn{font-size: 14px; margin-right: 20px; color: #FFD592;}
.handle .handle-btn {color: #fff;justify-content: space-around;height: 40px;background: rgba(61, 77, 233, 0.18);
background: url( https://revoland-gw-test.obs.ap-southeast-3.myhuaweicloud.com/images/header/nav-btn-bg.png) no-repeat; background-size: 100% 100%; display: flex; align-items: center; padding: 0 10px;}
.handle .handle-btn img{width: 27px;height: 24px;margin-right: 10px;}

@media screen and (max-width: 420px) {
  .header { height: 0.58rem;font-size: 0.1rem;}
  .header .header-content {height: 0.58rem;width: 100%;margin: 0 auto;padding: 0 0.2rem;min-width: unset;}
  .logo {width: 0.68rem;height: auto;}
  .menu {display: none;}
  .language{display: none;}
  .drawer{display: block; font-size: 0.2rem; margin-left: 0.2rem;}
  .handle .handle-btn {height: 0.3rem;font-size: 0.1rem;}
  .handle .handle-btn img{width: 0.2rem;height: 0.2rem;margin-right: 0.05rem;}
}
</style>
