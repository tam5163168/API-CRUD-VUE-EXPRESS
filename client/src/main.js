import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import interceptors from './utilities/interceptor';
import './mixin/loadingGlobal';
import './mixin/constant'

export const eventBus = new Vue();

Vue.filter('moneyFormat', function (value) {
  return new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(value)
})

Vue.config.productionTip = false
import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "tamdeptrai123" },
  components: {
    CldImage,
    CldTransformation
  }
});

interceptors();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
