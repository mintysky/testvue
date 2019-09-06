<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    
   
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
// import FeatureView from './childComps/FeatureView'


import { close } from "fs";
// import TabControl from 'components/content/tabControl/TabControl'
// import GoodList from 'components/content/goods/GoodsList'
// import Scroll from 'components/common/scroll/Scroll'
// import BackTop from 'components/content/backTop/BackTop'

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    // FeatureView,
    
  
    // TabControl,
    // GoodList,
    // Scroll,
    // BackTop
  },
  created() {
    this.getHomedata();
  },
  methods: {
    getHomedata() {
      this.axios.get("/home/multidata").then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/*.content {*/
/*height: calc(100% - 93px);*/
/*overflow: hidden;*/
/*margin-top: 44px;*/
/*}*/
</style>
