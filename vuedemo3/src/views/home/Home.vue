<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <Feature></Feature>
    <tab-control :titles="titles" class="tab-control"></tab-control>

    <good-list :goods = "goods['pop'].list"></good-list>
    <ul>
      <li>列表1个</li>
      <li>列表2个</li>
      <li>列表3个</li>
      <li>列表4个</li>
      <li>列表5个</li>
      <li>列表6个</li>
      <li>列表7个</li>
      <li>列表8个</li>
      <li>列表9个</li>
      <li>列表10个</li>
      <li>列表11个</li>
      <li>列表12个</li>
      <li>列表13个</li>
      <li>列表14个</li>
      <li>列表15个</li>
      <li>列表16个</li>
      <li>列表17个</li>
      <li>列表18个</li>
      <li>列表19个</li>
      <li>列表20个</li>
      <li>列表21个</li>
      <li>列表22个</li>
      <li>列表23个</li>
      <li>列表24个</li>
      <li>列表25个</li>
      <li>列表26个</li>
      <li>列表27个</li>
      <li>列表28个</li>
      <li>列表29个</li>
      <li>列表30个</li>
      <li>列表31个</li>
      <li>列表32个</li>
      <li>列表33个</li>
      <li>列表34个</li>
      <li>列表35个</li>
      <li>列表36个</li>
      <li>列表37个</li>
      <li>列表38个</li>
      <li>列表39个</li>
      <li>列表40个</li>
      <li>列表41个</li>
      <li>列表42个</li>
      <li>列表43个</li>
      <li>列表44个</li>
      <li>列表45个</li>
      <li>列表46个</li>
      <li>列表47个</li>
      <li>列表48个</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from 'components/content/goods/GoodsList'
// import Scroll from 'components/common/scroll/Scroll'
// import BackTop from 'components/content/backTop/BackTop'

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
      }
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,

    TabControl,
    GoodList,
    // Scroll,
    // BackTop
  },
  created() {
    this.getHomedata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    getHomedata() {
      this.axios.get("/home/multidata").then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page+1
      this.axios
        .get("/home/data", { params: { type: type, page: page } })
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);
          console.log(this.goods.pop.list)
          this.goods[type].page += 1
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
