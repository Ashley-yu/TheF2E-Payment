<template>
  <div>
    <router-link class="option_link" to="/order/atm">
      <div class="option" id="optionATM">
        <img
          src="../assets/icon/icon_PayByATM.svg"
          alt=""
        >
        <p class="large_text">使用WebATM付款</p>
        <p class="small_text">WebATM付款</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'iconPayByATM'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'
@import '@/assets/sass/_paymentOption.sass'
</style>
