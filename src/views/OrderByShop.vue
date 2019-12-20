<template>
  <div>
    <PaymentStatusBar/>
    <PaymentMethod/>
    <PaymentByShop/>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentStatusBar from '@/components/PaymentStatusBar.vue'
import PaymentMethod from '@/components/PaymentMethod.vue'
import PaymentByShop from '@/components/PaymentByShop.vue'

export default {
  name: 'OrderByShop',
  components: {
    PaymentStatusBar,
    PaymentMethod,
    PaymentByShop
  },
  mounted () {
    let optionActive = document.querySelector('#optionShop')
    optionActive.classList.add('active')
    let stepCompleteActive = document.querySelector('#step1')
    stepCompleteActive.classList.add('complete-step')
    let stepActive = document.querySelector('#step2')
    stepActive.classList.add('current-step')
  }
}
</script>
