<template>
  <q-btn flat @click="onClick" v-close-popup class="bg-purple glossy text-white q-my-md shadow-2 full-width">

    <q-item-label v-if="iconName">
      <img :src="getIcon" class="img-icon" />
    </q-item-label>

    <q-item-label>
      {{ $t(title) }}
    </q-item-label>

  </q-btn>
</template>

<script>
export default {
  name: 'ButtonMenu',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
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
    onClick () {
      this.$router.replace(this.link)
      this.$root.$emit('MenuRight')
    }
  }
}
</script>
