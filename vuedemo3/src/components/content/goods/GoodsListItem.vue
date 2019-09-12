<template>
  <div class="goods-item" @click="itemClick">
      <img :src="goodsItem.show.img" alt="" @load="imgLoad"/>
      <div class="goods-info">
        <p class="goods-title">{{goodsItem.title}}</p>
        <span class="goods-price">{{goodsItem.price}}</span>
        <span class="collection">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      this.$router.push(`/detail/${this.goodsItem.iid}`)
    }
  },
};
</script>
<style lang="scss" scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    text-align: center;
  }
  .goods-title {
    padding: 4px 10px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .goods-price {
    padding-left: 20px;
    color: var(--color-high-text);
  }
  .collection {
    position: relative;
    margin-left: 20px;
  }
}
</style>