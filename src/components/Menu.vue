<template>
  <q-drawer
    v-model="drawer"
    v-show="drawer"
    side="right"
    bordered
  >
    <q-list class="bg-image">
      <q-item-label header />

      <q-toolbar class="justify-center">
        <img alt="Logo" src="~assets/sonne-logo.png" width="200px">
      </q-toolbar>

      <button-menu
        v-for="value in values"
        :key="value.title"
        v-bind="value"
      />

    </q-list>
  </q-drawer>
</template>

<script>

import ButtonMenu from './ButtonMenu.vue'

const values = [
  {
    title: 'aboutUs',
    iconName: 'information.svg',
    link: '/about-us'
  },
  {
    title: 'contact',
    iconName: 'customer-care.svg',
    link: '/contact'
  }
]

export default {
  name: 'Menu',
  components: { ButtonMenu },
  data () {
    return {
      values: values,
      drawer: false
    }
  },
  created () {
    this.$root.$on('MenuRight', () => {
      this.drawer = !this.drawer
    })
  }
}
</script>
