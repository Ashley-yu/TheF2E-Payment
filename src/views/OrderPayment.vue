<template>
  <div>
    <PaymentStatusBar/>
    <PaymentConfirmOrder/>
    <PaymentMethod>
      <PaymentNote/>
    </PaymentMethod>
  </div>
</template>

<script>
import PaymentStatusBar from '@/components/PaymentStatusBar.vue'
import PaymentConfirmOrder from '@/components/PaymentConfirmOrder.vue'
import PaymentMethod from '@/components/PaymentMethod.vue'
import PaymentNote from '@/components/PaymentNote.vue'

export default {
  name: 'OrderPayment',
  components: {
    PaymentStatusBar,
    PaymentConfirmOrder,
    PaymentMethod,
    PaymentNote
  },
  mounted () {
    let stepActive = document.querySelector('#step1')
    stepActive.classList.add('current-step')
  }
}
</script>
