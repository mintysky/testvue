import { debounce } from "./utils"
export const itemListenerMixin = {
  data(){
    return {
      itemListener:null,
      newRefresh:null
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