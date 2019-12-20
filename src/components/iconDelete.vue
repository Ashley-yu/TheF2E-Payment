<template>
  <div>
    <img
      src="../assets/icon/order_btn_delete_normal.svg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'iconDelete'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/assets/sass/_mixin.sass'

img
  +size(40px,40px)
  cursor: pointer
  @include small
    +size(25px,25px)
</style>
