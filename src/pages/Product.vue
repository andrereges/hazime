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

const foodProducts = [
  {
    id: 1,
    name: 'Kit Alimentação',
    referencia: 'REF 5601',
    description: 'Kit alimentação para seu bebê.',
    image: 'p2.jpg'
  }
]

const hygieneProducts = [
  {
    id: 2,
    name: 'Massageadora',
    referencia: 'REF 6004',
    description: 'Massageador de gengiva, em 100% silicone, macio e confortável. Que além de ajudar na higienização, massageia a gengiva causando o bem estar e estimula o aprendizado do bebê.',
    image: 'p1.jpg'
  }
]

const acessoryProducts = [
  {
    id: 3,
    name: 'Escova e Pente',
    referencia: 'REF 6600',
    description: 'Escova e pente para seu bebê.',
    image: 'p3.jpg'
  },
  {
    id: 4,
    name: 'Prendedor de Chupeta',
    referencia: 'REF 5603',
    description: 'Prendedor de chupeta branco e rosa.',
    image: 'p5.jpg'
  },
  {
    id: 5,
    name: 'Kit Banho(Escova, Pente, Saboneteira e Prendedor)',
    referencia: 'REF 6601',
    description: 'Kit banho com vários itens.',
    image: 'p4.jpg'
  }
]

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
      this.updateProduct()
    }
  },
  created () {
    this.updateProduct()
  },
  methods: {
    updateProduct () {
      this.products = []
      this.title = this.$route.query.type

      switch (this.title) {
        case 'food':
          this.products = foodProducts
          break
        case 'hygiene':
          this.products = hygieneProducts
          break
        case 'accessories':
          this.products = acessoryProducts
          break
        default:
          this.products = foodProducts.concat(hygieneProducts).concat(acessoryProducts)
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
