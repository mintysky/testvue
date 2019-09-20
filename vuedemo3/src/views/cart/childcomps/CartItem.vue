<template>
  <div class="cart-list">
    <div class="cart-item" v-for="item in cartList" :key="item.iid">
      <check-button @click.native="checkChange(item.iid)" :is-checked="item.checked"></check-button>
      <div class="item-img">
        <img :src="item.image" alt="img" />
      </div>
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">${{item.price}}</div>
          <div class="item-count right">x {{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
import { mapGetters } from "vuex";
export default {
  name: "CartItem",
  props: {},
  data() {
    return {
    };
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"])
  },

  mounted() {},
  watch: {},
  methods: {
    checkChange(id) {
     let item = this.cartList.filter(val => { return val.iid === id})[0];
      item.checked = !item.checked;
      console.log(item.checked);   
    }
  }
};
</script>

<style scoped lang="scss">
.cart-list {
  .cart-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
 
  .item-img {
    margin-left: 16px;
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 2px;
    }
  }
  .item-info {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding: 8px 16px;
    .item-desc {
      font-size: 12px;
      color: #666;
      margin-top: 10px;
    }
    .item-title,
    .item-desc {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .info-bottom {
      margin-top: 10px;
      position: absolute;
      bottom: 10px;
      left: 30px;
      right: 10px;
      .item-price {
        color: orange;
      }
      .item-count {
        color: #000;
      }
    }
  }
}
</style>
