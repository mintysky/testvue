<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { close } from "fs";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      let wrapper = this.$refs.wrapper;
      // if (!this.scroll) {
      this.scroll = new BScroll(wrapper, {
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType,
        click: true, //用户控制div点击
        hasVerticalScroll: true
        // scrollbar:true
      });
      console.log(this.scroll);
      //  监听滚动位置
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
      // 监听上拉事件
      this.scroll.on('pullingUp', () => {
        console.log('上拉更多');
        this.$emit("pullingUp");
      });
      // }
    });
  
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  }
};
</script>
<style lang="scss">
</style>



