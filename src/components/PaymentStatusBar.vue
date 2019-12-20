<template>
  <div class="container">
    <h1 class="title">訂單資訊</h1>
    <div class="status">
      <ul class="status-bar">
        <li id="step1"><div class="text">Step1 選定支付方式</div></li>
        <li id="step2"><div class="text">Step2 輸入信用卡資訊或取得支付代碼</div></li>
        <li id="step3"></li>
      </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentStatusBar'
}
</script>

<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'

$max-width: 680px

.container
  +display_flex()
  flex-direction: column
  h1
    width: 100%
    +width-size($max-width)
    margin: 15px 0px
    font-size: 30px
    color: $color-dark-blue
    @include medium
      text-align: left
      padding: 0px 15px
    @include small
      font-size: 20px
  .status
    width: 100%
    +width-size($max-width)
  .status-bar
    display: flex
    justify-content: space-between
    padding: 0
    position: relative
    margin-top: 0px
    margin-bottom: 39px
    @include medium
      margin-bottom: 15px
      padding: 0px 15px
    li
      list-style-type: none
      +size(20px,20px)
      border-radius: 50%
      background-color: $color-gray
      // 製作li之間的bar
      &::after
        content: ""
        position: absolute
        width: calc(50% - 10px)
        height: 3px
        top: calc(100% - 11.5px)
        background-color: $color-gray
        z-index: -1
        @include medium
          width: calc(50% - 15px)
    // 不顯示最後一條線
    li:last-child::after
      content: none
    .text
      position: absolute
      width: calc(50%)
      top: calc(50% + 8.5px)
      font-size: 14px
      color: $color-gray
      @include medium
        display: none
// 流程狀態顏色
.status-bar li.current-step
  background-color: $color-blue
.status-bar li.complete-step
  background-color: $color-blue
  &::after
    background-color: $color-blue
  .text
    color:  $color-blue
</style>
