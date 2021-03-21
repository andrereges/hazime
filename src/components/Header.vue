<template>
  <q-header class="header">

    <q-toolbar class="justify-center">
      <img alt="Logo" src="~assets/sonne-logo.png" width="200px">
    </q-toolbar>

    <q-toolbar class="bg-purple glossy text-white q-my-md shadow-2">

      <button-header
        title="home"
        iconName='home.svg'
        link='/'
      />

      <q-space />

      <button-dropdown-header
        title="products"
        iconName='product-lauch.svg'
      />

      <button-header
        v-for="item in itens"
        :key="item.title"
        v-bind="item"
      />

      <q-btn-toggle 
        flat
        color="white"
        toggle-color="yellow"
        v-model='locale'
        @input="setLocale"
        :options="[{ label: 'Pt', value: 'pt-br'},
                  { label: 'En', value: 'en-us'}]" 
        v-show="this.$q.platform.is.desktop"
      />

    </q-toolbar>

  </q-header>
</template>

<script>
import ButtonDropdownHeader from './ButtonDropdownHeader.vue'
import ButtonHeader from './ButtonHeader.vue'

const itens = [
  {
    title: 'aboutUs',
    iconName: 'information.svg',
    link: '/about-us',
    show: 'desktop'
  },
  {
    title: 'contact',
    iconName: 'customer-care.svg',
    link: '/contact',
    show: 'desktop'
  }
]

export default {
  name: 'Header',
  components: { ButtonHeader, ButtonDropdownHeader },
  data () {
    return {
      itens: itens,
      isDesktop: this.$q.platform.is.desktop,
      locale: process.env.IDIOM
    }
  },
  methods: {
    setLocale (locale) {
      this.$i18n.locale = locale
      import(`quasar/lang/${locale}`).then(({ default: messages }) => {
        this.$q.lang.set(messages)
      })
    }
  }

}
</script>

<style scoped>
  .header {
    background-image: url('~assets/background/bg.jpg');
    background-repeat: no-repeat;
    padding-top: 20px;
  }
</style>
