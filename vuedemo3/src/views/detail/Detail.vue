<template>
  <div id="detail" class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="detail-content">
      <detail-swiper :top-img="topImg"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-item-info :item-info = "detailInfo"></detail-item-info>
      <DetailParams :param-info="paramInfo"></DetailParams>
      <detail-rate :rate = "rate"></detail-rate>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailItemInfo from "./childComps/DetailItemInfo"
import DetailParams from "./childComps/DetailParams"
import DetailRate from "./childComps/DetailRate"

import Scroll from "components/common/scroll/Scroll";
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
      shopInfo:{},
      detailInfo:{},
      paramInfo:{},
      rate:{}
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
    Scroll
    
  },
  computed: {},
  created() {
    this.iid = this.$route.params.id;
    this.getGoodDetail();
  },
  mounted() {},
  watch: {},
  methods: {
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
        if(data.rate.cRate!==0){
          this.rate = data.rate.list[0];
        }
       console.log(this.paramInfo);
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
.detail-content{
  background-color: #fff;
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
