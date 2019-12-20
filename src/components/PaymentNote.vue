<template>
  <div class="note">
    <p>注意事項</p>
    <ul>
      <li>假文字假文字假文字假文字假文字，假文字假文字假文字假文字。 </li>
      <li>這也是假文字假文字假文字，假文字假文字假文字。 </li>
      <li>這還是假文字假文字，假文字假文字假文字有夠多的假文字。 </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaymentNote'
}
</script>

<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'

$max-width: 930px

.note
  width: 100%
  +width-size($max-width)
  padding: 15px 0px 20px 0px
  @include medium
    padding: 15px 13px 20px 13px
  p, ul
    margin: 0px
    text-align: left
    font-size: 14px
    color: $color-gray
  li
    font-size: 12px
</style>
