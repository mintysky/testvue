<template>
  <div id="detail" class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <Scroll class="detail-content" ref="scroll" :probe-type="3"
    @scroll="detailScroll">
      <detail-swiper :top-img="topImg"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-item-info :item-info="detailInfo" @detailImgLoad="detailImgLoad"></detail-item-info>
      <DetailParams ref="params" :param-info="paramInfo"></DetailParams>
      <detail-rate ref="rate" :rate="rate"></detail-rate>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </Scroll>
    <detail-bottom-bar>

    </detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailItemInfo from "./childComps/DetailItemInfo";
import DetailParams from "./childComps/DetailParams";
import DetailRate from "./childComps/DetailRate";
import DetailBottomBar from "./childComps/DetailBottomBar"

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import { debounce } from "common/utils";

import { itemListenerMixin } from "common/mixin";
class Goods {
  constructor(itemInfo, cols, service) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.cols = cols;
    this.services = service;
  }
}

export default {
  props: {},
  data() {
    return {
      iid: null,
      topImg: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      rate: {},
      recommend: [],
      topY: [],
      getTopY: null,
      currentIndex:0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailItemInfo,
    DetailParams,
    DetailRate,
    GoodsList,
    Scroll,
    DetailBottomBar
  },
   mixins: [itemListenerMixin],
  created() {
    // 获取iid
    this.iid = this.$route.params.id;
    // 请求详情页数据
    this.getGoodDetail();
    // 请求推荐数据
    this.getRecommend();
    this.getTopY = debounce(() => {
      this.topY = [];
      this.topY.push(0);
      this.topY.push(this.$refs.params.$el.offsetTop);
      this.topY.push(this.$refs.rate.$el.offsetTop);
      this.topY.push(this.$refs.recommend.$el.offsetTop);
      this.topY.push(Number.MAX_VALUE);
      console.log(this.topY);
    },100);
  },
  updated() {

  },
 
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemListener);
  },
  methods: {
    detailScroll(position){
      // console.log(position);
      const posY = -position.y;
      const l = this.topY.length - 1;
      for( let i =0; i<l;i++ ){
        if(this.currentIndex !== i && (posY >=this.topY [i] && posY < this.topY[i+1])){
            console.log(i);
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

    },
    titleClick(index) {
      // console.log(index);
      let y = -this.topY[index];
      this.$refs.scroll.scrollTo(0, y, 200);
    },
    detailImgLoad() {
      this.newRefresh();
      this.getTopY();
    },
    getGoodDetail() {
      this.axios.get("/detail", { params: { iid: this.iid } }).then(res => {
        let data = res.data.result;
        this.topImg = data.itemInfo.topImages;
        // console.log(res.data.result);
        this.goodsInfo = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shopInfo = data.shopInfo;
        this.detailInfo = data.detailInfo;
        this.paramInfo = data.itemParams;
        if (data.rate.cRate !== 0) {
          this.rate = data.rate.list[0];
        }
        // console.log(this.paramInfo);

     
      });
    },
    getRecommend() {
      this.axios.get("/recommend").then(res => {
        let data = res.data.data;
        this.recommend = data.list;
        // console.log(this.recommend);
      });
    }
  }
};
</script>

<style lang="scss">
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.detail-content {
  background-color: #fff;
  height: calc(100vh - 102px);
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
