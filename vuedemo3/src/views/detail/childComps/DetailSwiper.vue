<template>
  <div class="detail-swiper">
    <Swiper class="swiper-content">
      <SwiperItem v-for="(item,i) in topImg" :key="i">
        <img :src="item" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.detail-swiper {
  .swiper-content {
    height: 300px;
    overflow: hidden;
  }
}
</style>
