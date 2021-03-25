<template>
  <q-btn-dropdown
    flat
    dropdown-icon="change_history"
    content-class="bg-purple text-white"
  >

    <template v-slot:label>
      <div class="row items-center no-wrap">
        <img :src="getIcon" class="img-icon" />
        <div class="text-center">
          {{ $t('products') }}
        </div>
      </div>
    </template>

    <q-list class="uppercase">
        <q-item
          v-for="category in categories"
          :key="category.id"
          v-bind="category"
          clickable
          v-close-popup
          @click="onClick(category.id)"
        >
          <q-item-section>
            <q-item-label v-text="category.name" />
          </q-item-section>
        </q-item>
    </q-list>

  </q-btn-dropdown>
</template>

<script>

import categories from '../assets/db-json/categories.json'

export default {
  name: 'Header',
  data () {
    return {
      categories: categories,
      category: 1
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      default: ''
    }
  },
  computed: {
    getIcon () {
      return this.iconName ? require(`../assets/icons/${this.iconName}`) : ''
    }
  },
  methods: {
    onClick (category) {
      this.$router.replace('/products?category=' + category)
    }
  }
}
</script>
