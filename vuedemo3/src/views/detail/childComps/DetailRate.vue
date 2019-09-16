<template>
  <div class="rate-info" v-if="Object.keys(rate).length!==0">
    <div class="rate-header">
      <div class="rate-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-user">
      <img :src="rate.user.avatar" alt />
      <span>{{rate.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{rate.content}}</p>
      <div class="info-other">
        <span class="date">{{rate.created}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,i) in rate.images" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
// import { formatDate } from "common/utils"
export default {
  name: "DetailRate",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      }
    }
  }
  // filters:{
  //   showDate(value){
  //     let date = new Date(value*1000);
  //     return formatDate(date,"yyyy-MM-DD")
  //   }
  // }
};
</script>

<style scoped lang="scss">
.rate-header {
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  border-bottom: 1px solid #ccc;
}
.info-user {
  display: flex;
  justify-content: flex-start;
  padding:10px 20px;
  align-items:center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
.info-detail{
  padding:10px;
  font-size:14px;
  line-height: 20px;
}
</style>
