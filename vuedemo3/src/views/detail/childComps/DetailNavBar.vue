<template>
  <div class="detail-bar">
    <nav-bar class="detail-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,i) in titles"
          :key="i"
          class="title-item"
          @click="titleClick(i)"
          :class="{active: i === currentIndex}"
        >
        {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name:'DetailNavBar',
  props: {
    
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    titleClick(i) {
      this.currentIndex = i;
      this.$emit('titleClick',i)
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
.detail-bar{
  position: relative;
  background-color: #fff;
  z-index: 10;
}
.active {
  color: var(--color-high-text);
}
.back img {
  position: relative;
  top: 6px;
  padding-left: 20px;
}
.title {
  display: flex;
  .title-item {
    flex: 1;
  }
}
</style>
