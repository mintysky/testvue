<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="titles"
      class="tabfixed"
      v-show="isTabFixed"
      ref="tabcontrol1"
      @tabClick="tabClick"
    ></tab-control>
    <scroll
      class="home-content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImgLoad="swiperLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <Feature></Feature>
      <tab-control :titles="titles" ref="tabcontrol2" @tabClick="tabClick"></tab-control>
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

// import { debounce } from "common/utils";
// import { close } from "fs";
import { itemListenerMixin } from "common/mixin";

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
      isTabFixed: false,
      saveY: 0,
      posY: 0
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
    this.tabClick(0);
  },
    computed: {
    // 计算属性
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  mounted() {
    // // 监听item图片加载
    // const refresh = debounce(this.$refs.scroll.refresh, 200);
    // // 保存全局事件
    // this.itemListener = () => {
    //   refresh();
    // }
    // this.$bus.$on("itemImgLoad", this.itemListener );
  },
  mixins: [itemListenerMixin],
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = -this.posY;
    // console.log(this.saveY);
    this.$bus.$off("itemImgLoad", this.itemListener);
  },
  methods: {
    // 事件监听\
    // 吸顶
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
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
      // tabControl的currentIndex保持一致
      if(this.$refs.tabcontrol1 !== undefined){
        this.$refs.tabcontrol1.currentIndex = index;
        this.$refs.tabcontrol2.currentIndex = index;
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.posY = -position.y;
      //1 判断backtop是否显示
      this.isBack = this.posY > 500;
      // 2决定tabcontrol是否吸顶
      this.isTabFixed = this.posY > this.tabOffsetTop;
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
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 浏览器原生滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tabfixed {
  position: relative;
  z-index: 10;
}
.hide {
  display: none;
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
