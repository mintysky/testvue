<template>
  <div id="detail">
   <detail-nav-bar></detail-nav-bar>
   <detail-swiper :top-img = "topImg"></detail-swiper>
   
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
export default {
  props: {},
  data() {
    return {
      iid: null,
      topImg:[],
      goodsDetail: {}
    }
  },
  components: {
   DetailNavBar,
   DetailSwiper
  },
  computed: {},
  created() {
    this.iid = this.$route.params.id;
    this.getGoodDetail()
  },
  mounted() {},
  watch: {},
  methods: {
    getGoodDetail() {
      this.axios.get('/detail',{params:{iid: this.iid}}).then(res => {
        this.topImg = res.data.result.itemInfo.topImages;
        // console.log(res.data);
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
