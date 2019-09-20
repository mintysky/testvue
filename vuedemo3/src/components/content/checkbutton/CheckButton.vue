<template>
  <div class="selector">
      <img src="~assets/img/cart/tick.svg" alt="img" :class="{tick:isChecked}" />
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  props: {
    isChecked:{
      type:Boolean,
      default(){
        return true
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {

  }
};
</script>

<style scoped lang="scss">
 .selector {
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #aaa;
    }
    .tick{
      background-color: #f1788c;
      border: 2px solid #f1788c;
    }
  }
</style>
