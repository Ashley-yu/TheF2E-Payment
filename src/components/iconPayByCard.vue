<template>
  <div>
    <router-link class="option_link" to="/order/card">
      <div class="option" id="optionCard">
        <img
          src="../assets/icon/icon_PayByCard.svg"
          alt=""
        >
        <p class="large_text">使用信用卡付款</p>
        <p class="small_text">信用卡付款</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'iconPayByCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'
@import '@/assets/sass/_paymentOption.sass'
</style>
