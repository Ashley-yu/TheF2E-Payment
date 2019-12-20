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
// @ is an alias to /src
import PaymentTop from '@/components/PaymentTop.vue'
import PaymentStatusBar from '@/components/PaymentStatusBar.vue'
// import PaymentConfirmOrder from '@/components/PaymentConfirmOrder.vue'
import PaymentFooter from '@/components/PaymentFooter.vue'
import PaymentMethod from '@/components/PaymentMethod.vue'
import PaymentNote from '@/components/PaymentNote.vue'

export default {
  name: 'OrderInfo',
  components: {
    PaymentTop,
    PaymentStatusBar,
    // PaymentConfirmOrder,
    PaymentFooter,
    PaymentMethod,
    PaymentNote
  }
}
</script>
