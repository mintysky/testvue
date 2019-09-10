<template>
  <div class="goods">
    <goods-list-item v-for = "item in goods" :key="item.id" :goodsItem = "item" class="goods-items">

    </goods-list-item>
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
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  .goods-items{
    width: 49%;
    padding: 2px;
  }
}
</style>