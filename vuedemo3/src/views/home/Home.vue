<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="home-content" ref="scroll">
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <Feature></Feature>
      <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native = "backTop"></back-top>
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
import BackTop from 'components/content/backtop/BackTop'

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
      currentType: "pop"
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
  computed: {
    // 计算属性
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // 事件监听
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
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
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
  position: -webkit-sticky;
  position: sticky;
  top: 44px;
  left: 0;
  z-index: 9;
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
