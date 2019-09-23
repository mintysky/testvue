<!--
  Author:Min
  Date：2019年09月23日 11:34:10
-->
<template>
  <div class="toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {},
  data() {
    return {
      msg: "",
      isShow: false
    };
  },
  methods: {
    show(msg, duration=2000) {
      this.isShow = true;
      this.msg = msg;
      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
      }, duration);
    }
  }
};
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  z-index: 999;
}
</style>
