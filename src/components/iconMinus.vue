<template>
  <div class="count">
    <img
      src="../assets/icon/icon_less.svg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'iconMinus'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/assets/sass/_mixin.sass'

.count
  height: 100%
  +display-flex()
img
  +size(14px,14px)
  vertical-align: middle
  @include small
    +size(10px,10px)
</style>
