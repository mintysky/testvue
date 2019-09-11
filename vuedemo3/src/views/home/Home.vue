<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="home-content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImgLoad ="swiperLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <Feature></Feature>
      <tab-control :titles="titles" :class="{ fixed: isTabFixed }" ref="tabcontrol" class="tab-control" @tabClick="tabClick"></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isBack"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
import { clearTimeout, setTimeout } from "timers";

import { debounce } from "common/utils";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isBack: false,
      tabOffsetTop: 0,
      isTabFixed:false
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomedata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听item图片加载
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
    
    
  },
  computed: {
    // 计算属性
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // 事件监听\
    // 吸顶
    swiperLoad(){
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
      console.log(this.$refs.tabcontrol.$el.offsetTop);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      let y = -position.y;
      //1 判断backtop是否显示
      this.isBack = y > 500;
      // 2决定tabcontrol是否吸顶
      this.isTabFixed = y > this.tabOffsetTop 

    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    // 网络请求
    getHomedata() {
      this.axios.get("/home/multidata").then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      this.axios
        .get("/home/data", { params: { type: type, page: page } })
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
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
.fixed{
  position: fixed;
  top:44px;
  left: 0;
  right: 0;
}
.home-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
