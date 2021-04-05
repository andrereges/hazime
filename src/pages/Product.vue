<template>
  <q-page>
    <div class="q-pa-md text-h3 text-center"></div>
    <div class="q-pa-md row justify-evenly">

      <q-input
        outlined
        filled
        bottom-slots
        v-model="search"
        maxlength="30"
        color="purple-12"
        :label="$t('typeSearch')"
        bg-color="white"
        :class="this.$q.screen.width  < '900' ? 'col-12' : 'col-5'"
      >

        <template v-slot:append>
          <q-icon v-if="search !== ''" name="close" @click="search = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>

      </q-input>

      <q-select
        clearable
        multiple
        filled
        outlined
        use-chips
        stack-label
        bg-color="white"
        color="purple-12"
        v-model="choiceCategories"
        :options="categories"
        :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : ''"
        :option-label="opt => Object(opt) === opt && 'name' in opt ? $t(opt.name) : ''"
        :label="$t('categories')"
        :class="this.$q.screen.width  < '900' ? 'col-12' : 'col-5'"
        style="margin-bottom: 1em"
      />

    </div>

    <div class="q-pa-md justify-evenly row">
      <q-card
        class="my-card col-sm-3"
        v-for="product in products"
        :key="product.reference"
        v-bind="product"
      >
        <q-carousel
          transition-prev="slide-right"
          transition-next="slide-left"
          v-model="product.slide"
          swipeable
          animated
          arrows
          navigation
          :control-color="product.images.length > 1 ? 'purple-5' : 'transparent'"
        >
          <q-carousel-slide
            :name="index"
            v-for="(image, index) in product.images"
            :key="index"
            v-bind="image"
          >
            <img :ratio="1" :src="getImage(image.name)" height="350em" width="100%" />
          </q-carousel-slide>

          <q-carousel-slide :name="product.images.length + 1" v-if="product.sticker">
            <img :ratio="1" src="~/assets/product-labels/sticker-male.jpeg" height="350em" width="100%" />
          </q-carousel-slide>
          <q-carousel-slide :name="product.images.length + 2" v-if="product.sticker">
            <img :ratio="1" src="~/assets/product-labels/sticker-female.jpeg" height="350em" width="100%" />
          </q-carousel-slide>
        </q-carousel>

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
      <div class="text-h6">
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
      products: dbProducts,
      categories: dbCategories,
      choiceCategories: [],
      search: '',
      dense: false,
      carousel: false
    }
  },
  watch: {
    choiceCategories: function () {
      this.filterProducts()
    },
    search: function () {
      this.filterProducts()
    }
  },
  created () {
    this.filterProducts()
  },
  methods: {
    getImage (image) {
      if (image) {
        return require(`../assets/product-images/${image}`)
      }
    },
    filterProducts () {
      this.products = dbProducts

      if (Array.isArray(this.choiceCategories) && this.choiceCategories.length) {
        this.products = dbProducts.filter(p => this.choiceCategories.map(item => item.id).includes(p.category))
      }

      if (this.search) {
        const text = this.search.toLocaleLowerCase()
        this.products = this.products.filter(p => p.name.toLocaleLowerCase().indexOf(text) > -1)
      }

      this.products = this.products.map(v => ({ ...v, slide: 0 }))
    }
  }
}
</script>

<style scoped>
  .my-card {
    margin: 0  1px  20px  0;
    background-color: white;
  }
  .my-card:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 1px 1px rgb(192, 192, 192);
  }
</style>
