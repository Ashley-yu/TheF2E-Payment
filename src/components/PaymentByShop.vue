<template>
  <div class="payment">
    <div class="payment-info">
      <p class="caption">需自行至超商機台輸入代碼，產生繳費單據後至櫃檯繳費。</p>
      <div class="info">
        <div class="info-content">
          <p class="text">應付金額</p>
          <span class="payable">
            <h4>$</h4>
            <h3>2,000</h3>
          </span>
        </div>
        <div class="info-content">
          <p class="text">選擇超商</p>
          <span>
              <img src="../assets/icon/icon_7-11@2x.png" alt="" :class="{'active':isActive=='711'}" @click="isActive='711'">
              <img src="../assets/icon/icon_FM@2x.png" alt="" :class="{'active':isActive=='FM'}" @click="isActive='FM'">
              <img src="../assets/icon/icon_OK@2x.png" alt="" :class="{'active':isActive=='OK'}" @click="isActive='OK'">
              <img src="../assets/icon/icon_Hilife@2x.png" alt="" :class="{'active':isActive=='Hilife'}" @click="isActive='Hilife'">
          </span>
        </div>
      </div>
      <PaymentNote/>
      <div class="buttons">
        <router-link to="/order/payment">
          <button class="btn-cancel">返回訂單</button>
        </router-link>
        <button class="btn-confirm" @click="confirmPayment">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentNote from '@/components/PaymentNote.vue'

export default {
  name: 'PaymentByShop',
  components: {
    PaymentNote
  },
  data () {
    return {
      hoverYM: false,
      hoverCode: false,
      isActive: '711'
    }
  },
  methods: {
    confirmPayment () {
      this.$router.push('/order/complete?type=2')
    }
  }
}
</script>

<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'
@import '@/assets/sass/_paymentContent.sass'
@import '@/assets/sass/_buttons.sass'

.text
  @include medium
    width: 20%
.payment-info
  width: 100%
  flex-direction: column
  padding: 25px 23.5px 25px 26px
  margin-top: 25px
  margin-bottom: 184px
  // margin-bottom: 28px
  @include medium
    flex-direction: row
    width: 96.5%
    margin-top: 20px
    padding: 20px 13px
  @include small
    padding: 18px 7px
    margin-bottom: 45px
  .caption
    width: 100%
    font-size: 16px
    font-weight: 500
    text-align: left
    color: $color-black
    @include medium
      margin: 0px
  .info
    +display_flex()
    @include medium
      flex-wrap: wrap
      width: 100%
    .info-content
      @include medium
        flex-wrap: wrap
        margin-bottom: 10px
      p
        margin-right: 10.5px
      span
        img
          +size(50px,50px)
          margin: 0px 10px
          cursor: pointer
          &:hover,&.active
           border: 2px solid $color-blue
          @include small
            margin-top: 15px
      .payable
        margin-left: 7.5px
        margin-right: 43px
.buttons
  padding-bottom: 15px
</style>
