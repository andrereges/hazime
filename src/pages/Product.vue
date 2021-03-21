<template>
  <q-page>
    <div class="text-h3 text-center">{{ $t('products') }} - {{ $t(title) }}</div>
    <div class="q-pa-md justify-evenly row">
      <product-card
        v-model="products"
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </q-page>
</template>

<script>

import ProductCard from 'src/components/ProductCard.vue'
import food from '../assets/products-json/food'
import hygiene from '../assets/products-json/hygiene'
import accessories from '../assets/products-json/accessories'

export default {
  components: { ProductCard },
  name: 'PageProduct',
  data () {
    return {
      products: [],
      title: ''
    }
  },
  watch: {
    '$route.query.type': function () {
      this.getProducts()
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.products = []
      this.title = this.$route.query.type

      switch (this.title) {
        case 'food':
          this.products = food
          break
        case 'hygiene':
          this.products = hygiene
          break
        case 'accessories':
          this.products = accessories
          break
        default:
          this.products = food.concat(hygiene).concat(accessories)
          break
      }
    }
  }
}
</script>

<style scoped>
  .my-card {
    margin: 0  1px  20px  0;
    padding: 1px;
  }
  .my-card:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 1px 1px purple;
  }
</style>
