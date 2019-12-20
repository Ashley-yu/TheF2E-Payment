<template>
  <div class="payment">
    <div class="payment-info">
      <div class="info-content">
        <p class="text">應付金額</p>
        <span class="payable">
          <h4>$</h4>
          <h3>2,000</h3>
        </span>
      </div>
      <div class="info-content">
        <p class="text">支援使用卡種類</p>
        <span>
            <img src="../assets/icon/icon_VISA.svg" alt="">
            <img src="../assets/icon/icon_Master.svg" alt="">
            <img src="../assets/icon/icon_JCB.svg" alt="">
        </span>
      </div>
    </div>
    <div class="card-info">
      <form class="card-content" @submit.prevent="confirmPayment">
        <div class="content">
          <label class="text" for="userCard">信用卡卡號</label>
          <input type="text" id="userCard" v-model="form.userCard" name="cardno" v-validate="'required|creditCard'" maxlength="19" placeholder="xxxx-xxxx-xxxx-xxxx">
          <div class="notice_message" v-show="errors.has('cardno')">
            <span class="notice">
              <img src="../assets/icon/icon_notice.svg" alt="">
              請輸入卡正面16位卡號
            </span>
          </div>
        </div>
        <div class="content">
          <label class="text" for="userName">持卡人英文姓名</label>
          <input type="text" id="userName" v-model="form.userName" name="name" v-validate="'required|alpha'">
          <div class="notice_message">
            <span class="notice" v-show="errors.has('name')">
              <img src="../assets/icon/icon_notice.svg" alt="">
              請輸入持卡人英文姓名
            </span>
          </div>
        </div>
        <div class="content">
          <label class="text" for="cardExpiry">有效年月</label>
          <input type="text" id="cardExpiry" v-model="form.cardExpiry" name="expiry" v-validate="'required|expiry'" maxlength="5" placeholder="MM / YY">
          <img class="icon-question" @mouseover="hoverYM=true" @mouseleave="hoverYM=false" src="../assets/icon/icon_question.svg" alt="">
          <img class="icon-hint" v-if="hoverYM" src="../assets/icon/Web_order_hit01@2x.png" alt="">
          <img class="icon-hint hint-m" v-if="hoverYM" src="../assets/icon/Mobile_order_hit01@2x.png" alt="">
          <div class="notice_message" v-show="errors.has('expiry')">
            <span class="notice">
              <img src="../assets/icon/icon_notice.svg" alt="">
              請輸入有效月年
            </span>
          </div>
        </div>
        <div class="content">
          <label class="text" for="cardCode">安全驗證碼</label>
          <input type="password" id="cardCode" v-model="form.cardCode" name="code" v-validate="'required|digits:3'" maxlength="3">
          <img class="icon-question" @mouseover="hoverCode=true" @mouseleave="hoverCode=false" src="../assets/icon/icon_question.svg" alt="">
          <img class="icon-hint" v-if="hoverCode" src="../assets/icon/Web_order_hit02@2x.png" alt="">
          <img class="icon-hint hint-m" v-if="hoverCode" src="../assets/icon/Mobile_order_hit02@2x.png" alt="">
          <div class="notice_message" v-show="errors.has('code')">
            <span class="notice">
              <img src="../assets/icon/icon_notice.svg" alt="">
              請輸入簽名欄旁三碼數字
            </span>
          </div>
        </div>
        <div class="content">
          <label class="text" for="userPhone">手機號碼</label>
          <input type="text" id="userPhone" v-model="form.userPhone" name="phone" v-validate="'required|cellphone'" maxlength="10">
          <div class="notice_message" v-show="errors.has('phone')">
            <span class="notice">
              <img src="../assets/icon/icon_notice.svg" alt="">
              請輸入手機號碼
            </span>
          </div>
        </div>
        <PaymentNote/>
        <div class="buttons">
          <router-link to="/order/payment">
            <button class="btn-cancel">返回訂單</button>
          </router-link>
          <button class="btn-confirm" type="submit">送出</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PaymentNote from '@/components/PaymentNote.vue'

export default {
  name: 'PaymentByCard',
  components: {
    PaymentNote
  },
  data () {
    return {
      hoverYM: false,
      hoverCode: false,
      form: {
        userCard: '',
        userName: '',
        cardCode: '',
        userPhone: ''
      }
    }
  },
  methods: {
    confirmPayment () {
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$router.push('/order/complete?type=1')
        }
      })
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
    width: 35%
.payment
  flex-direction: column
.payment-info
  +size(100%,95px)
  padding-left: 26px
  padding-right: 4.5px
  margin-top: 25px
  @include medium
    width: 96.5%
    margin-top: 20px
    padding-top: 12px
    padding-bottom: 19px
  @include small
    padding-left: 7px
  .info-content
    p
      margin-right: 12.5px
    span
      img
        margin: 0px 2.5px
        @include small
          +size(51px,35px)
    .payable
      margin-left: 7.5px
      margin-right: 88px
.card-info
  width: 100%
  padding-left: 24.5px
  padding-right: 24.31px
  margin-top: 10px
  margin-bottom: 38px
  @include medium
    width: 96.5%
  @include small
    padding-left: 9px
    margin-bottom: 45px
  .card-content
    width: 100%
    text-align: left
    .content
      +display_flex(flex-start)
      padding: 15px 0px
      border-bottom: 1px solid $color-light-gray
      position: relative
      @include medium
        display: block
      label
        width: 118px
        @include medium
          display: block
      input
        +size(100%,50px)
        max-width: 280px
        padding: 13px 15px
        border: 1px solid $color-gray
        border-radius: 5px
        font-size: 16px
        color: $color-black
        @include medium
          margin-top: 8px
          max-width: 60%
        @include small
          max-width: 100%
          // max-width: 270px
      input[type="password"]
        letter-spacing: 1px
        font-family: 微軟正黑體,Noto Sans TC,sans-serif
      .icon-question
        position: absolute
        left: 65%
        top: 50%
        transform: translateY(-50%)
        @include medium
          left: 53%
          top: calc(50% + 13px)
        @include small
          left: 85%
          top: 68PX
      .icon-hint
        width: 150px
        position: absolute
        left: 72%
        top: 50%
        transform: translateY(-50%)
        @include medium
          left: 62%
          top: 65%
        @include small
          display: none
        &.hint-m
          display: none
          @include small
            display: block
            left: calc(85% - 120px)
            top: 21px
      .notice_message
        @include medium
          display: inline-block
          margin-top: 5px
        .notice
          +display_flex()
          font-size: 12px
          color: $color-light-red
          img
            margin: 0px 4px 0px 7.5px
  padding-bottom: 32px
</style>
