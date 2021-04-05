<template>
  <q-btn flat @click="$router.replace(link)" v-show="isDesktop">
    <q-item-label>
      <img :src="getIcon" class="img-icon" />
    </q-item-label>
    <q-item-label class="uppercase">
      {{ $t(title) }}
    </q-item-label>
  </q-btn>
</template>

<script>
export default {
  name: 'ButtonHeader',
  props: {
    title: {
      type: String,
      required: true
    },

    iconName: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    },
    show: {
      type: String,
      default: ''
    }
  },
  computed: {
    getIcon () {
      return this.iconName ? require(`../assets/icons/${this.iconName}`) : ''
    },
    getTranslation () {
      return this.iconName ? require(`../assets/icons/${this.iconName}`) : ''
    },
    isDesktop () {
      switch (this.show) {
        case 'desktop':
          return this.$q.platform.is.desktop
        case 'mobile':
          return this.$q.platform.is.mobile
        default:
          return true
      }
    }
  }
}
</script>
