import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate, { Validator } from 'vee-validate'
import messages from 'vee-validate/dist/locale/zh_TW'
import currencyFilter from './filters/currency'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Validator.localize('zh_TW', messages)

Vue.filter('currency', currencyFilter)

const cellphone = {
  validate: (value, args) => {
    const reg = /^09[0-9]{8}$/
    return reg.test(value)
  }
}
const expiry = {
  validate: (value, args) => {
    const MMYY = value.split('/')
    const inputMonth = MMYY[0]
    const inputYear = MMYY[1]

    const monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const nowDate = new Date()
    const nowYear = nowDate.getFullYear().toString()

    if (monthArray.indexOf(inputMonth) < 0) {
      return false
    } else if (inputYear < nowYear.substring(2, 4)) {
      return false
    } else {
      return true
    }
  }
}
const creditCard = {
  validate: (value, args) => {
    const reg = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    return reg.test(value)
  }
}

Validator.extend('cellphone', cellphone)
Validator.extend('expiry', expiry)
Validator.extend('creditCard', creditCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
