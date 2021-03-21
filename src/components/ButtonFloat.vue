<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-fab
      glossy
      icon="menu"
      color="purple"
      direction="up"
    >
      <q-fab-action flat label-class="text-purple" label-position="top" label="Pt-BR" @click="setLocale('pt-br')" >
        <q-item-label>
          <img src="~/assets/icons/brazil.png" class="img-icon" />
        </q-item-label>
      </q-fab-action>

      <q-fab-action flat label-class="text-purple" label-position="top" label="En-US" @click="setLocale('en-us')" >
        <q-item-label>
          <img src="~/assets/icons/usa.png" class="img-icon" />
        </q-item-label>
      </q-fab-action>

      <q-fab-action flat label-class="text-purple" label-position="top" :label="$t('contact')" @click="onClick('/contact')" >
        <q-item-label>
          <img src="~/assets/icons/customer-care.svg" class="img-icon" />
        </q-item-label>
      </q-fab-action>

      <q-fab-action flat label-class="text-purple" label-position="top" :label="$t('aboutUs')" @click="onClick('/about-us')" >
        <q-item-label>
          <img src="~/assets/icons/information.svg" class="img-icon" />
        </q-item-label>
      </q-fab-action>

    </q-fab>
  </q-page-sticky>
</template>

<script>
export default {
  name: 'ButtonFloat',
  data () {
    return {
      fab: false,
      locale: process.env.IDIOM
    }
  },
  methods: {
    onClick (link) {
      this.$router.replace(link)
    },
    setLocale (locale) {
      this.$i18n.locale = locale
      import(`quasar/lang/${locale}`).then(({ default: messages }) => {
        this.$q.lang.set(messages)
      })
    }
  }
}
</script>
