<template>
  <div class="cart-box">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="cart-content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <cart-item></cart-item>
    </scroll>
    <!-- 底部汇总 -->
    <cart-bottom-tab></cart-bottom-tab>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import CartItem from "./childcomps/CartItem";
import CartBottomTab from "./childcomps/CartBottomTab";

import { backTopMixin } from "common/mixin";
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      posY: 0
    };
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  },
  components: {
    NavBar,
    CartItem,
    Scroll,
    CartBottomTab
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  created() {},
  mixins: [backTopMixin],
  methods: {
    contentScroll(postion) {
      this.posY = -postion.y;
      this.showBackTop();
    }
  }
};
</script>
<style lang="scss" scoped>
.cart-nav {
  background-color: #fa90a2;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
.cart-box {
  height: 100vh;
}
.cart-content {
  background-color: #fff;
  height: calc(100vh - 133px);
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>