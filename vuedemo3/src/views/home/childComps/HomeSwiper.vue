<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,i) in banner" :key="i">
        <a :href="item.link">
          <img :src="item.image"  @load="imgLoad" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad")
        this.isLoad = true
      }
    }
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>