<template>
  <div>
    <PaymentTop/>
    <PaymentStatusBar/>
    <!-- <PaymentConfirmOrder/> -->
    <PaymentMethod>
      <PaymentNote/>
    </PaymentMethod>
    <paymentFooter/>
  </div>
</template>

<script>
import PaymentTop from '@/components/PaymentTop.vue'
import PaymentStatusBar from '@/components/PaymentStatusBar.vue'
import PaymentFooter from '@/components/PaymentFooter.vue'
import PaymentMethod from '@/components/PaymentMethod.vue'
import PaymentNote from '@/components/PaymentNote.vue'

export default {
  name: 'OrderInfo',
  components: {
    PaymentTop,
    PaymentStatusBar,
    PaymentFooter,
    PaymentMethod,
    PaymentNote
  }
}
</script>
