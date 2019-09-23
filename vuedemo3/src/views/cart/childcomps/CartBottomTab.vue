<template>
  <div class="cart-bottom">
    <div class="bottom-left">
      <div class="check-area">
        <check-button @click.native="checkChange()" :is-checked="isSelectAll"></check-button>
        <span>全选</span>
      </div>
      <div class="account">
        <p class="sum">
          合计：
          <span class="sum-num">￥{{sum}}</span>
        </p>
        <p class="count">
          共
          <span class="count-num">{{count}}</span>件商品
        </p>
      </div>
    </div>
    <div class="pay-click" @click="payClick">去付款</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomTab",
  props: {},
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    sum: function() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((total, item) => {
          // console.log(total);
          return total + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    count: function() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((total, item) => {
          return total + item.count;
        }, 0);
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.some(item => !item.checked);
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    checkChange() {
      // 条件必须在外面
        if (this.isSelectAll) {
          this.cartList.forEach(item => {
          item.checked = false;})
        } else {
            this.cartList.forEach(item => {
          item.checked = true;
        })
      }
    },
    payClick() {
      console.log(this.$toast);
      if(!this.isSelectAll){
        this.$toast.show('请选择商品',2000);
      }
    }
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
