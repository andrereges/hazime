<template>
  <q-header class="header">

    <q-toolbar class="justify-center">
      <img alt="Logo" src="~assets/logo/sonne-logo.png" width="200em">
    </q-toolbar>

    <q-toolbar class="bg-purple glossy text-white q-mt-md shadow-2 justify-center">

      <button-header
        title="home"
        iconName='home.svg'
        link='/'
      />

      <q-space v-show="this.$q.platform.is.mobile" />

      <button-dropdown-header
        title="products"
        iconName='product-lauch.svg'
      />

      <button-header
        title="aboutUs"
        iconName='information.svg'
        link='/about-us'
        show="desktop"
      />

      <button-header
        title="contact"
        iconName='customer-care.svg'
        link='/contact'
        show="desktop"
      />

      <q-btn-toggle 
        flat
        color="white"
        toggle-color="yellow"
        v-model='locale'
        @input="setLocale"
        :options="[{ label: 'Pt', value: 'pt-br'},
                  { label: 'En', value: 'en-us'}]" 
        v-show="false"
      />

      <q-space v-show="this.$q.platform.is.mobile" />

      <q-btn flat icon="menu" class="" v-show="this.$q.platform.is.mobile">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
          content-class="bg-purple text-white"
          auto-close
        >
          <q-list>

            <q-item clickable @click="onClick('/about-us')">
              <div class="row no-wrap q-pa-md">
                <q-img src="~/assets/icons/information.svg" class="img-icon col-6" />
                <span class="col-6 uppercase">{{ $t('aboutUs') }}</span>
              </div>
            </q-item>

            <q-item clickable @click="onClick('/contact')">
              <div class="row no-wrap q-pa-md">
                <q-img src="~/assets/icons/customer-care.svg" class="img-icon col-6" />
                <span class="col-6 uppercase">{{ $t('contact') }}</span>
              </div>
            </q-item>

          </q-list>
        </q-menu>
      </q-btn>

    </q-toolbar>

  </q-header>
</template>

<script>
import ButtonDropdownHeader from './ButtonDropdownHeader.vue'
import ButtonHeader from './ButtonHeader.vue'

export default {
  name: 'Header',
  components: { ButtonHeader, ButtonDropdownHeader },
  data () {
    return {
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
    },
    onClick (link) {
      this.$router.replace(link)
    }
  }

}
</script>

<style scoped>
  .header {
    background-image: url('~assets/background/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 20px;
  }
</style>
