<template>
  <div class="cart-box">
    <nav-bar class="cart-nav">
      <div slot = "center">购物车({{cartLength}})</div>
    </nav-bar>
    <div>{{cartList}}</div>
    <scroll class="detail-content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <cart-item :cart-list="cartList"></cart-item>
    </scroll>
  </div>
</template>
<script>

import NavBar from "components/common/navbar/NavBar";
import { backTopMixin } from "common/mixin";
import Scroll from "components/common/scroll/Scroll";
import CartItem from "./childcomps/CartItem"
import { mapGetters } from "vuex"
export default {
  name:'Cart',
  data() {
    return {
      posY:0
    }
  },
  computed: {
    ...mapGetters(['cartLength','cartList'])
  },
  components:{
    NavBar,
    CartItem,
    Scroll
  },
  created() {

  },
  mixins:[backTopMixin],
  methods: {
    contentScroll(postion){
      this.posY = - postion.y;
      this.showBackTop()
    }
  },
}
</script>
<style lang="scss" scoped>
.cart-nav{
  background-color: #fa90a2;
  color: #fff;
  font-size: 16px; 
  font-weight: bold;
}

</style>