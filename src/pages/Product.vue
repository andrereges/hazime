<template>
  <q-page>
    <div class="q-pa-md text-h3 text-center">{{ $t('products') }} - {{ category.name }}</div>
      <div class="q-pa-md justify-evenly row">
        <q-card
          class="my-card col-sm-3"
          v-model="products"
          v-for="product in products"
          :key="product.id"
          v-bind="product"
        >

        <img :ratio="1" :src="getImage(product.image)" height="350em">

        <q-card-section>
          <div class="text-h6" v-text="product.name"></div>
          <div class="text-caption" v-text="'REF: ' + product.reference"></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-item-label v-text="product.description"></q-item-label>
        </q-card-section>

      </q-card>
    </div>
  </q-page>
</template>

<script>

import dbProducts from '../assets/db-json/products.json'
import dbCategories from '../assets/db-json/categories.json'

export default {
  name: 'PageProduct',
  data () {
    return {
      products: [],
      category: []
    }
  },
  watch: {
    '$route.query.category': function () {
      this.getProducts()
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getImage (image) {
      return require(`../assets/product-images/${image}`)
    },
    getProducts () {
      let categoryId = 1

      if (this.$route.query.category) {
        categoryId = this.$route.query.category
      }

      this.category = dbCategories.filter(c => c.id === Number.parseInt(categoryId))[0]

      if (Number.parseInt(categoryId) !== 1) {
        this.products = dbProducts.filter(p => p.category === Number.parseInt(categoryId))
      } else {
        this.products = dbProducts
      }
    }
  }
}
</script>

<style scoped>
  .my-card {
    margin: 0  1px  20px  0;
    padding: 1px;
    background-color: white;
  }
  .my-card:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 1px 1px purple;
  }
</style>
