<template>
  <div id="home" class="wrapper">
    <!-- <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar> -->
   
  </div>
</template>

<script>
  // import HomeSwiper from './childComps/HomeSwiper'
  // import RecommendView from './childComps/RecommendView'
  // import FeatureView from './childComps/FeatureView'

  // import Navbar from 'components/common/navbar/Navbar.vue'
  // import TabControl from 'components/content/tabControl/TabControl'
  // import GoodList from 'components/content/goods/GoodsList'
  // import Scroll from 'components/common/scroll/Scroll'
  // import BackTop from 'components/content/backTop/BackTop'

  // import { getHomeMultidata, getHomeGoods } from "network/home"

  export default {
    name: "Home",
    components: {
      // HomeSwiper,
      // RecommendView,
      // FeatureView,
      //  Navbar,
      // TabControl,
      // GoodList,
      // Scroll,
      // BackTop
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
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
