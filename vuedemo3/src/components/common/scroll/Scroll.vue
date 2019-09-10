<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  name: "Scroll",
  data() {
    return {
      // scroll: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      // if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          // pullUpLoad: true,
          probeType: 2
        })
        this.scroll.scrollTo(0,0)
      // }
    });
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    }
  },
};
</script>
<style lang="scss">
</style>



