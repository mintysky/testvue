export default {
  // mutation中的每个方法尽可能完成的时间比较单一
  // 可以跟踪调试的数据
  addCounter(state, payload) {
    payload.count++;
  },
  addToCart(state, payload) {
    state.cartList.push(payload)
  }
}