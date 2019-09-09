<template>
  <div class="recommend">
    <div v-for="(item,i) in recommend" :key="i" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:"RecommendView",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    
  }
}
</script>
<style lang="scss">
.recommend{
  display: flex;
  text-align:center;
  font-size:12px;
  padding:10px 0 16px;
  border-bottom:  8px solid #ccc;
  .recommend-item{
    flex:1;
    text-align:center;
  }
  img{
    width: 70px;
    height: 70px;
    margin-bottom: 6px;
  }

}
</style>