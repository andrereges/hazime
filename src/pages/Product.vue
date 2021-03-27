<template>
  <q-page>
    <div class="q-pa-md text-h3 text-center">{{ category[0].name }}</div>
    <div class="q-pa-md row justify-center">

       <q-input
        outlined
        bottom-slots
        v-model="search"
        label="Nome do Produto"
        counter
        maxlength="30"
        :dense="dense"
        bg-color="white"
        style="width: 100%"
      >

        <template v-slot:append>
          <q-icon v-if="search !== ''" name="close" @click="search = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>

      </q-input>

    </div>
    <div class="q-pa-md justify-evenly row">
      <q-card
        class="my-card col-sm-3"
        v-for="product in FiltedProducts"
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
    <div class="text-center">
      <div class="text-h6" v-show="categoryId != 5">
        <span>Bicos de Mamadeira e Chupeta</span>
      </div>
      <div class="text-bold">
        <p>Prezado consumidor, a Hazime é fabricante de bicos e chupetas, porém a exibição desses produtos em nosso site é vedada conforme a LEI 11.265/06.</p>
        <p>Qualquer informação ou dúvida sobre esses produtos Hazime, por favor, entrar em contato através do nosso serviço de atendimento ao consumidor.</p>
      </div>

      <q-img src="~/assets/others/ministeriodasaude.png" :style="this.$q.platform.is.desktop ? 'width: 50%' : ''" />

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
      category: [],
      categoryId: 1,
      search: '',
      dense: false
    }
  },
  computed: {
    FiltedProducts () {
      const text = this.search.toLocaleLowerCase()
      return this.products.filter(p => p.name.toLocaleLowerCase().indexOf(text) > -1)
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
      if (this.$route.query.category) {
        this.categoryId = this.$route.query.category
      }

      this.category = dbCategories.filter(c => c.id === Number.parseInt(this.categoryId))

      if (Number.parseInt(this.categoryId) !== 1) {
        this.products = dbProducts.filter(p => p.category === Number.parseInt(this.categoryId))
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
    box-shadow: 1px 1px 1px 1px rgb(192, 192, 192);
  }
</style>
