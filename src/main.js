import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    //创建一个事务总线，vue的原型可以被任何一个vc和vm看见，并且可以调用$on $off $emit三个方法
    Vue.prototype.$bus = this
  }
})
