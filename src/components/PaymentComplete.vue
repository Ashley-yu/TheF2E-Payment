<template>
  <div class="complete">
    <div class="complete-content">
        <h4 v-if="$route.query.type==1">付款完成！</h4>
        <h4 v-if="$route.query.type==2">訂單成立！</h4>
        <p v-if="$route.query.type==1">感謝您的訂購，我們將盡快為您處理您的訂單:)</p>
        <p v-if="$route.query.type==2">訂單請於兩天內完成匯款，逾期店家將有權取消訂單。</p>
        <router-link to="/order/payment">
          <button>回首頁</button>
        </router-link>
     </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentComplete'
}
</script>

<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'

$max-width: 610px

.complete
  +display_flex()
  background-color: rgba($color-gray,0.2)
.complete-content
  width: 100%
  +width-size($max-width)
  margin: 75px 0px 491px 0px
  padding: 30px 0px
  border-radius: 10px
  background-color: $color-white
  @include medium
    margin: 20px
    margin-bottom: 267px
  @include small
    margin: 20px 14px 63px 14px
    +display_flex()
    flex-direction: column
  h4
    margin: 0px
    font-size: 22px
    color: $color-blue
  p
    margin: 15px 0px 25px 0px
    font-size: 18px
    font-weight: 500
    color: $color-black
    @include small
      width: 60%
      font-size: 14px
  button
    border: 0
    +size(180px, 50px)
    border-radius: 28px
    padding: 0
    font-size: 16px
    color: $color-white
    background-color: $color-orange
    cursor: pointer
    transition: 0.3s
    @include small
      width: 125px
      margin: 0px 5px 7px 5px
    &:hover
      background-color: darken($color-orange,15%)
</style>
