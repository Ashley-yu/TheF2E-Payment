<template>
  <div class="payment">
    <div class="payment-info">
      <div class="info">
        <div class="info-content">
          <p class="text">應付金額</p>
          <span class="payable">
            <h4>$</h4>
            <h3>2,000</h3>
          </span>
        </div>
        <div class="info-content">
          <p class="text">選擇銀行</p>
          <div class="select-arrow">
            <select>
              <option v-for="(bank, id) in banks" :key="id" :value="bank.value">{{ bank.name }}</option>
              <!-- <option value="" disabled selected>請選擇銀行</option> -->
            </select>
          </div>
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
  name: 'PaymentByATM',
  components: {
    PaymentNote
  },
  data () {
    return {
      total: '',
      hoverYM: false,
      hoverCode: false,
      banks: [
        {
          value: 'BKTW',
          name: '台灣銀行'
        },
        {
          value: 'HNBK',
          name: '華南銀行'
        },
        {
          value: 'FCBK',
          name: '第一銀行'
        },
        {
          value: 'LBOT',
          name: '土地銀行'
        }
      ]
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
  margin-bottom: 252px
  @include medium
    flex-direction: row
    width: 96.5%
    margin-top: 20px
    padding: 20px 13px
  @include small
    padding: 18px 7px
    margin-bottom: 45px
  .info
    +display_flex()
    @include medium
      flex-wrap: wrap
    .info-content
      @include medium
        flex-wrap: wrap
        margin-bottom: 10px
      p
        margin-right: 20px
      .select-arrow
        position: relative
        /* custom arrow */
        &::after
         content: ''
         position: absolute
         +size(0px,0px)
         border-right: 8.5px solid transparent
         border-left: 8.5px solid transparent
         border-top: 12px solid $color-black
         right: 13px
         top: 50%
         transform: translateY(-50%)
         /* let the click pass trough */
         pointer-events: none
        select
          +size(269px,50px)
          border: 1px solid $color-gray
          border-radius: 5px
          padding: 13px 17px
          font-size: 14px
          color: $color-gray
          /* reset */
          -webkit-appearance: none
          -moz-appearance: none
          appearance: none
          @include small
            width: 275px
            margin-top: 13px
      .payable
        margin-right: 43px
.buttons
  padding-bottom: 3px
</style>
