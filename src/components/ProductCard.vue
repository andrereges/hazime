<template>
  <q-card class="my-card col-sm-3">

    <img
      :ratio="1"
      :src="getImage"
    >

    <q-card-section>
      <div class="text-h6">{{ name }}</div>
      <div class="text-caption">{{ reference }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ description }}
    </q-card-section>

  </q-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    reference: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    getImage () {
      return this.image ? require(`../assets/product-images/${this.image}`) : ''
    }
  }
}
</script>

<style scoped>
  .my-card {
    background-color: white
  }
</style>
