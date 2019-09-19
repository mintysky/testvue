<template>
  <div class="cart-item">
      <div v-for="(item,i) in cartList" :key="i">
          <div>
              <img :src="item.image" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.cart-item {
    height: 80px;
    background:pink;
    img{
        width: 80px;
        height: 100px;
    }
}
</style>
