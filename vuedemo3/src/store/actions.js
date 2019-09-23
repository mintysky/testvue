export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找是否有该商品
      let product = context.state.cartList.find(item => item.iid === payload.iid);
      // 判断product
      if (product) {
        context.commit('addCounter', product)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1;
        context.commit('addToCart', payload)
        resolve('添加了新的商品')
      }
    })
  }
}