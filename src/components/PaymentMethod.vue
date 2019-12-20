<template>
  <div class="method">
    <h3 class="method-title">選擇付款方式</h3>
    <div class="method-content">
      <div class="method-option">
        <iconPayByCard/>
      </div>
      <div class="method-option">
        <iconPayByATM/>
      </div>
      <div class="method-option">
        <iconPayByShop/>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import iconPayByCard from '@/components/iconPayByCard.vue'
import iconPayByATM from '@/components/iconPayByATM.vue'
import iconPayByShop from '@/components/iconPayByShop.vue'

export default {
  name: 'PaymentMethod',
  components: {
    iconPayByCard,
    iconPayByATM,
    iconPayByShop
  }
}
</script>

<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'

$max-width: 930px

.method
  +display_flex()
  flex-direction: column
  padding: 15px 0px 25px 0px
  .method-title
    width: 100%
    +width-size($max-width)
    margin: 0px
    font-size: 22px
    text-align: left
    color: $color-blue
    @include large
      padding: 0px 15px
    @include medium
      text-align: center
    @include small
      font-size: 14px
      font-weight: 500
      margin-bottom: 20px
  .method-content
    +display_flex()
    width: 100%
    +width-size($max-width)
    .method-option
      width: 100%
      margin: 15px
      @include medium
        margin: 10px
      @include small
        margin: 5px
</style>
