<template>
  <div class="header">
    <div class="block block1"></div>
    <div class="block block2"></div>
    <div class="block block3"></div>
    <div class="block block4"></div>
    <div class="block block5"></div>
    <div class="block block6"></div>
  </div>
</template>

<script>
export default {
  name: 'PaymentTop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
// 改使用比例分配寬度
.header
  width: 100%
  display: flex
  justify-content: flex-start
  .block
    height: 15px
  .block1
    background-color: $color-gray
    width: 13.7%
  .block2
    background-color: $color-orange
    width: 21.5%
  .block3
    background-color: $color-dark-blue
    width: 9.3%
  .block4
    background-color: $color-light-red
    width: 22.5%
  .block5
    background-color: $color-red
    width: 18.5%
  .block6
    background-color: $color-blue
    width: 14.5%
</style>
