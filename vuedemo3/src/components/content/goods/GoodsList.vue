<template>
  <div class="goods">
    <goods-list-item v-for = "item in goods" :key="item.id" :goodsItem = "item">

    </goods-list-item>
    {{goods}}
  </div>
</template>
<script>
import GoodsListItem from "components/content/goods/GoodsListItem"
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>
<style lang="scss" scoped>
</style>