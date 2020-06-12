<template>
  <div>
    <PaymentStatusBar/>
    <PaymentMethod/>
    <PaymentByATM/>
  </div>
</template>

<script>
import PaymentStatusBar from '@/components/PaymentStatusBar.vue'
import PaymentMethod from '@/components/PaymentMethod.vue'
import PaymentByATM from '@/components/PaymentByATM.vue'

export default {
  name: 'OrderByATM',
  components: {
    PaymentStatusBar,
    PaymentMethod,
    PaymentByATM
  },
  mounted () {
    let optionActive = document.querySelector('#optionATM')
    optionActive.classList.add('active')
    let stepCompleteActive = document.querySelector('#step1')
    stepCompleteActive.classList.add('complete-step')
    let stepActive = document.querySelector('#step2')
    stepActive.classList.add('current-step')
  }
}
</script>
