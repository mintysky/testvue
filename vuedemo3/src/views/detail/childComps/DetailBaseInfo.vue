<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.cols[0]}}</span>
      <span>{{goods.cols[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
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
  methods: {}
};
</script>

<style scoped lang="scss">
.base-info {
  padding: 10px;
  border-bottom: 6px solid rgb(207, 205, 205);
  .info-title {
    font-size: 16px;
    font-weight: bold;
    color: #222;
    font-family: "microsoft yahei";
    line-height: 20px;
    margin-bottom: 8px;
  }
  .info-price {
    margin-bottom: 6px;
    .n-price {
      font-size: 16px;
      margin-right: 6px;
      color: #ff5777;
    }
    .o-price {
      text-decoration: line-through;
      color: red;
      font-size: 12px;
      margin-right: 6px;
    }
    .discount {
      font-size: 12px;
      position: relative;
      top: -6px;
      background-color: #ff5777;
      border-radius: 8px;
      color:#fff;
      padding: 2px 4px;
    }
  }
  .info-other {
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 14px;
      margin-right: 10px;
    }
  }
  .info-service {
    display: flex;
    justify-content: flex-start;
    .info-service-item {
      margin-right: 10px;
      font-size:14px;
    }
    img {
      width: 14px;
      height: 14px;
      margin-right: 6px;
      position: relative;
      top: 2px;
    }
  }
}
</style>
