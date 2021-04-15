<template>
  <q-page>
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
        :class="$q.screen.width < '900' ? 'col-12' : 'col-5'"
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
        :class="$q.screen.width < '900' ? 'col-12' : 'col-5'"
        style="margin-bottom: 1em"
      />

    </div>

    <div class="q-pa-md justify-evenly row">
      <q-card
        :class="$q.screen.width < '900' ? 'my-card col-12' : 'my-card col-4'"
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
          :autoplay="product.autoplay"
          infinite
          arrows
          navigation
          :control-color="product.images.length > 1 ? 'purple-5' : 'transparent'"
        >

        <template v-slot:control v-if="product.images.length > 1">
          <q-carousel-control
            position="top-left"
            :offset="[18, 18]"
          >
            <q-toggle dense dark color="purple-5" v-model="product.autoplay" />
            <q-tooltip content-class="bg-accent">Auto Slide</q-tooltip>
          </q-carousel-control>
        </template>
          <q-carousel-slide
            :name="index"
            v-for="(image, index) in product.images"
            :key="index"
            v-bind="image"
          >
            <img :ratio="1" :src="getImage(image.name)" height="350em" width="100%" />
          </q-carousel-slide>

        </q-carousel>

        <q-card-section>
          <div class="text-h6" v-text="product.name"></div>
          <div class="text-caption row">
            <div class="col-6 text-left">
              <q-item-label>{{'REF: ' + product.reference }}</q-item-label>
            </div>
            <div class="col-6 text-right" v-if="product.sticker">
              <q-btn size="12px" glossy color="purple" @click="showDialog">Mais Opções</q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none" v-if="product.description">
          <q-item-label v-text="product.description"></q-item-label>
        </q-card-section>

      </q-card>
    </div>
    <div class="q-pa-md text-center">

      <p class="text-h6">Bicos de Mamadeira e Chupeta</p>

      <p>Prezado consumidor, a Sonne é fabricante de bicos e chupetas, porém a exibição desses produtos em nosso site é vedada conforme a LEI 11.265/06.</p>
      <p>Dúvidas ou informações sobre nossos produtos, solicitação de nosso catálogo estamos à disposição no fale conosco, whatsapp e instagram.</p>
      <p>A Sonne agradece sua preferência.</p>

      <div class="row justify-center">
        <div :class="$q.screen.width < '900' ? 'col-12' : 'col-6'">
          <q-img src="~/assets/others/ministeriodasaude.png" />
        </div>
      </div>

    </div>
    <q-dialog v-model="dialog">
      <q-card style="width: 100%">
        <q-carousel
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          v-model="dialogSlide"
          infinite
        >
          <q-carousel-slide name="sticker1-m">
            <img :ratio="1" src="~/assets/product-stickers/sticker1-m.jpeg" height="350em" width="100%" />
          </q-carousel-slide>
          <q-carousel-slide name="sticker2-m">
            <img :ratio="1" src="~/assets/product-stickers/sticker2-m.jpeg" height="350em" width="100%" />
          </q-carousel-slide>
          <q-carousel-slide name="sticker1-f">
            <img :ratio="1" src="~/assets/product-stickers/sticker1-f.jpeg" height="350em" width="100%" />
          </q-carousel-slide>
          <q-carousel-slide name="sticker2-f">
            <img :ratio="1" src="~/assets/product-stickers/sticker2-f.jpeg" height="350em" width="100%" />
          </q-carousel-slide>
        </q-carousel>

        <div class="row justify-center">
          <q-btn-toggle
            glossy
            v-model="dialogSlide"
            :options="[
              { label: 1, value: 'sticker1-m' },
              { label: 2, value: 'sticker2-m' },
              { label: 3, value: 'sticker1-f' },
              { label: 4, value: 'sticker2-f' }
            ]"
          />
        </div>
      </q-card>
    </q-dialog>
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
      dialog: false,
      dialogSlide: 'sticker1-m'
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
    showDialog () {
      this.dialogSlide = 'sticker1-m'
      this.dialog = !this.dialog
    },
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

      this.products = this.products.map(v => ({ ...v, slide: 0, autoplay: true }))
    }
  }
}
</script>

<style scoped>
  .my-card {
    margin: 0  1px  30px  0;
    background-color: white;
  }
</style>
