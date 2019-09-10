<template>
  <div class="goods-item">
    <a href="baidu.com">
      <img :src="goodsItem.show.img" alt="">
    </a>
  </div>
</template>
<script>
export default {
  name:"GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return []
      }
    }
  }
  
}
</script>
<style lang="scss" scoped>
  
</style>