<template>
  <div>
     <Swiper>
      <SwiperItem v-for ="(item,i) in banner" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name:"HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
      Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
img{
  width: 100%;
}
</style>