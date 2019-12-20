<template>
  <div class="order">
    <h3 class="order-title">確認訂單金額</h3>
    <div class="order-content">
      <h4 class="content-title">訂單編號 {{ order.orderNo }}</h4>
      <ul>
        <li v-for="(product, id) in order.products" :key="id">
          <div class="product-info">
            <div class="list-top">
              <img :src="`${product.img}`" alt=""/>
              <div class="product">
                <h4 class="product-name">{{ product.name }}</h4>
                <p class="product-description">
                  {{ product.description }}
                </p>
              </div>
            </div>
            <div class="list-bottom">
              <div class="product-count">
                <div class="count-minus" @click="countNumber(product,-1)">
                  <iconMinus/>
                </div>
                <input type="text" class="count-number" v-model="product.number"/>
                <div class="count-add" @click="countNumber(product,1)">
                  <iconAdd/>
                </div>
              </div>
              <div class="product-sum">$ {{ product.sum | currency }}</div>
              <div class="product-del">
                <iconDelete/>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="order-total">
        <div class="total-text">Total</div>
        <div class="total">$ {{ countTotal | currency}}</div>
        <!-- <div class="total">$ {{ order.total | currency}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import iconMinus from '@/components/iconMinus.vue'
import iconDelete from '@/components/iconDelete.vue'
import iconAdd from '@/components/iconAdd.vue'

export default {
  name: 'PaymentConfirmOrder',
  data () {
    return {
      order: {
        orderNo: '201907310111',
        products: [
          {
            name: '商品名稱商品名稱商品名稱商品名稱',
            description: '商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明...',
            img: require('../assets/img/ipadpro-9_TP_V4@2x.png'),
            number: 1,
            price: 1000,
            sum: 1000
          },
          {
            name: '商品名稱商品名稱商品名稱商品名稱',
            description: '商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明商品說明...',
            img: require('../assets/img/headphoneIMGL4494_TP_V4@2x.png'),
            number: 1,
            price: 1000,
            sum: 1000
          }
        ]
      }
    }
  },
  methods: {
    countNumber (item, num) {
      const newCount = parseInt(item.number) + num
      if (newCount > 0 && newCount <= 10) {
        item.number = newCount
        item.sum = item.price * newCount
      }
    }
  },
  computed: {
    countTotal () {
      // 計算總金額
      let newTotal = 0
      for (let i = 0; i < this.order.products.length; i++) {
        newTotal += this.order.products[i].sum
      }
      // 設值
      // th is.$set(this.order, 'finalTotal', newTotal)
      return newTotal
    }
  },
  components: {
    iconMinus,
    iconAdd,
    iconDelete
  }
}
</script>

<style scoped lang="sass">
@import '@/assets/sass/_variable.sass'
@import '@/assets/sass/_mixin.sass'

$max-width: 930px

input
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
.order
  +display_flex()
  flex-direction: column
  margin: 15px 0px 35px 0px
  @include small
    margin-bottom: 15px
  .order-title
    width: 100%
    max-width: $max-width
    margin: 0px
    font-size: 22px
    text-align: left
    color: $color-blue
    @include medium
      text-align: center
    @include small
      padding-bottom: 10px
      font-size: 14px
  .order-content
    width: 100%
    +width-size($max-width)
    border: 2px solid $color-blue
    border-radius: 10px
    position: relative
    @include small
      max-width: 100%
      border: none
      border-top: 2px solid $color-blue
      border-bottom: 2px solid $color-blue
      border-radius: 0px
      padding: 9px 14px
    &::after
      content: ''
      position: absolute
      border-right: 15px solid transparent
      border-left: 15px solid transparent
      border-top: 10px solid $color-blue
      bottom: -10px
      left: 50%
      transform: translateX(-50%)
    h4
      width: 100%
      max-width: 882.5
      margin: 0px
      padding: 20px
      padding-bottom: 2px
      font-size: 18px
      font-weight: 500
      text-align: left
      color: $color-black
    .content-title
      @include small
        padding: 0px
        padding-bottom: 9px
        font-size: 14px
        font-weight: 500
        border-bottom: 1px solid rgba($color-gray,0.5)
    ul
      margin: 0px
      padding: 3px 27.5px 20px 20px
      @include small
        padding: 0px
      li
        list-style: none
        height: 120px
        border-bottom: 1px solid rgba($color-gray,0.5)
        @include large
          height: 100%
          padding-bottom: 10px
        @include small
          padding-bottom: 21px
        .product-info
          height: 100px
          +display_flex()
          padding-top: 21px
          @include large
            flex-direction: column
            height: 100%
          @include small
            padding-top: 15px
          .list-top
            +display_flex(flex-start)
            width: 100%
            img
              width: 150px
              @include large
                width: 20%
            .product
              width: 420px
              padding-left: 30px
              text-align: left
              @include large
                width: 100%
              .product-name
                padding: 0px
                font-size: 18px
                font-weight: 500
                color: $color-black
                @include small
                  font-size: 12px
              .product-description
                width: 351px
                padding: 0px
                font-size: 14px
                color: $color-gray
                @include large
                  width: 100%
                @include small
                  font-size: 10px
                  margin-top: 2px
          .list-bottom
            +display_flex()
            width: 100%
            @include large
              justify-content: flex-start
              padding-left: 20%
            @include medium
              padding-left: 18%
            @include small
              padding-left: 30%
            .product-count
              +display_flex()
              width: 200px
              padding: 0px 30px
              @include small
                width: 83px
                padding: 0px
              .count-minus, .count-add
                border: 1px solid $color-gray
                +size(30px,30px)
                cursor: pointer
                @include small
                  +size(22px,22px)
                &:hover
                  background-color: rgba($color-gray,0.3)
              .count-minus
                border-radius: 2px 0px 0px 2px
              .count-add
                border-radius: 0px 2px 2px 0px
              .count-number
                +size(80px,30px)
                text-align: center
                font-size: 12px
                border: 1px solid $color-gray
                @include medium
                  width: 40%
                @include small
                  +size(40px,22px)
                  font-size: 9px
            .product-sum
              +display_flex()
              width: 61px
              font-size: 18px
              color: $color-black
              white-space: pre
              @include medium
                font-size: 16px
              @include small
                width: 40px
                margin-left: 16px
                font-size: 12px
            .product-del
              +display_flex()
              padding-left: 10px
              @include large
                padding-left: 53px
              @include small
                padding-left: 33px
    .order-total
      padding: 2px 29px 22px 20px
      +display_flex(flex-end)
      @include small
        padding: 14px 0px 1px 0px
      .total-text
        font-size: 18px
        color: $color_blue
        margin-right: 85px
        @include medium
          margin-right: 35px
        @include small
          font-size: 14px
          margin-right: 10px
      .total
        font-size: 24px
        font-weight: 600
        color: $color_blue
        @include small
          font-size: 18px
</style>
