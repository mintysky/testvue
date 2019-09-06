<template>
  <div class="recommend">
    <div v-for="(item,i) in recommend" :key="i">
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
<style>

</style>