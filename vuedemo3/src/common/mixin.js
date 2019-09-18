import { debounce } from "./utils"
import BackTop from "components/content/backtop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImgLoad", this.itemListener);
    // console.log('混入内容');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBack: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    showBackTop() {
      this.isTabFixed = this.posY > this.tabOffsetTop;
    }
  }
}