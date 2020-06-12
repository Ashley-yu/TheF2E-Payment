<template>
  <div>
    <PaymentStatusBar/>
    <PaymentComplete/>
  </div>
</template>

<script>
import PaymentStatusBar from '@/components/PaymentStatusBar.vue'
import PaymentComplete from '@/components/PaymentComplete.vue'

export default {
  name: 'OrderComplete',
  components: {
    PaymentStatusBar,
    PaymentComplete
  },
  mounted () {
    let stepCompleteActive = document.querySelector('#step1')
    stepCompleteActive.classList.add('complete-step')
    let stepCompleteActive2 = document.querySelector('#step2')
    stepCompleteActive2.classList.add('complete-step')
    let stepActive = document.querySelector('#step3')
    stepActive.classList.add('current-step')
  }
}
</script>
