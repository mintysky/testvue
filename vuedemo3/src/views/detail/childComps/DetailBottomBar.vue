<template>
  <div class="bottom-bar ignore">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="txt">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="txt">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="txt">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">ADD to Cart</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  props: {},
  data() {
    return {};
  },
  components: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    addToCart(){
      // 点击添加到购物车
      this.$emit("addToCart")
    }
  }
};
</script>

<style scoped lang="scss">
.bottom-bar{
  position: fixed;
  bottom: 0;
  height: 58px;
  z-index: 100;
  width: 100vw;
  display: flex;
  text-align: center;
}
.bar-item{
  display: flex;
  flex: 1;
  div{
    flex:1;
  }
}
.bar-left{
  background-color: #fff;
  .txt{
    font-size: 14px;
  }
  .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .service{
    background-position: 0 -54px;
  }
  .shop{
    background-position: 0 -98px;
  }
}
.bar-right{
  font-size: 16px;
  color: #fff;
  line-height: 58px;
  .cart{
    background-color: #ffe817;
    color: #333;
  }
  .buy{
    text-align: center;
    background-color: #f69;
  }
}
</style>
