<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="left"></slot></div>
    
  </div>
</template>
<script>
export default {
  name:"Navbar"
  
}
</script>
<style lang="scss" scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
    .left, .right{
      width: 60px;
      background:pink;
    }
    .center{
      flex: 1;
      background:#ff5;
    }
}

</style>