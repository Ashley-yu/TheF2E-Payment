<template>
  <div class="footer">
    <p>Copy right Hello I'm Footer :)</p>
  </div>
</template>

<script>
export default {
  name: 'PaymentFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'

.footer
  +display_flex()
  +size(100%,50px)
  background-color: $color-dark-blue
  p
    font-size: 12px
    color: $color-gray
    margin: 0px
</style>
