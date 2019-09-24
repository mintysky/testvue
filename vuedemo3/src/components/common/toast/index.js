import Toast from "./Toast.vue";
const obj = {}
obj.install = function (Vue) {
  // 创建组件构造器
  const toastConstrutor = Vue.extend(Toast)
  //创建组件对象
  const toast = new toastConstrutor();
  //将组件对象挂载到一个元素上
  toast.$mount(document.createElement('div'))
  // toast.$el对应就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast;

}

export default obj