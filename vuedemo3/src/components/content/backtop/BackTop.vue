<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>
<script>
export default {
  name: "BackTop",
  methods: {
  
  },
};
</script>
<style lang="scss">
.back-top {
  position: fixed;
  bottom: 60px;
  right: 10px;
  z-index: 10;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>



