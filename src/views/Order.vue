<template>
  <div>
    <PaymentTop/>
      <!-- <PaymentStatusBar/> -->
      <transition mode="out-in">
        <!-- <main role="main"> -->
        <router-view></router-view>
        <!-- </main> -->
      </transition>
    <paymentFooter/>
  </div>
</template>

<script>
import PaymentTop from '@/components/PaymentTop.vue'
import PaymentFooter from '@/components/PaymentFooter.vue'

export default {
  name: 'Order',
  components: {
    PaymentTop,
    PaymentFooter
  }
}
</script>

<style scoped lang="sass">
.v-leave
  opacity: 1
.v-leave-active
  transition: opacity .3s
.v-leave-to
  opacity: 0
.v-enter
  opacity: 0
.v-enter-active
  transition: opacity .3s
.v-enter-to
  opacity: 1
</style>
