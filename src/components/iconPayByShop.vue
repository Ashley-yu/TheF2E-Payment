<template>
  <div>
    <router-link class="option_link" to="/order/shop">
      <div class="option" id="optionShop">
        <img
          src="../assets/icon/icon_PayByShop.svg"
          alt=""
        >
        <p class="large_text">使用超商代碼付款</p>
        <p class="small_text">超商代碼付款</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'iconPayByShop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'
@import '@/assets/sass/_paymentOption.sass'
</style>
