<template>
  <div class="cart-bottom">
    <div class="bottom-left">
      <div class="check-area">
        <check-button @click.native="checkChange()" :is-checked="allCheck"></check-button>
        <span>全选</span>
      </div>
      <div class="account">
        <p class="sum">
          合计：
          <span class="sum-num">￥{{111}}</span>
        </p>
        <p class="count">
          共<span class="count-num">{{5}}</span>件商品
        </p>
      </div>
    </div>
    <div class="pay-click" @click="payClick">去付款</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
export default {
  name: "CartBottomTab",
  props: {},
  data() {
    return {
      allCheck: false
    };
  },
  components: {
    CheckButton
  },
  computed: {
    "sum":function(){

    },
    "count":function(){

    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    checkChange() {
      this.allCheck = !this.allCheck;
    }
  },
  payClick(){
console.log('aaa');
  }
};
</script>

<style scoped lang="scss">
.cart-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bottom-left {
    display: flex;
    align-items: center;
  }
  .check-area {
    display: flex;
    padding: 0 10px;
  }
  .account {
    display: flex;
    align-items: center;
    .sum {
      margin-right: 10px;
      .sum-num {
        color: #f56a9f;
      }
    }
    .count {
      position: relative;
      bottom: 2px;
      .count-num {
        margin: 0 2px;
        color: #e65a71;
        font-size: 18px;
      }
    }
  }
  .pay-click {
    height: 100%;
    line-height: 40px;
    padding: 0 20px;
    background: red;
    color: #fff;
  }
}
</style>
