<template>
  <div>
    <PaymentStatusBar/>
    <PaymentMethod/>
    <PaymentByCard/>
  </div>
</template>

<script>
import PaymentStatusBar from '@/components/PaymentStatusBar.vue'
import PaymentMethod from '@/components/PaymentMethod.vue'
import PaymentByCard from '@/components/PaymentByCard.vue'

export default {
  name: 'OrderByCard',
  components: {
    PaymentStatusBar,
    PaymentMethod,
    PaymentByCard
  },
  mounted () {
    let optionActive = document.querySelector('#optionCard')
    optionActive.classList.add('active')
    let stepCompleteActive = document.querySelector('#step1')
    stepCompleteActive.classList.add('complete-step')
    let stepActive = document.querySelector('#step2')
    stepActive.classList.add('current-step')
  }
}
</script>
