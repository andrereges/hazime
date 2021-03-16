<template>
  <q-btn flat @click="$router.replace(link)" v-close-popup class="bg-purple glossy text-white q-my-md shadow-2 full-width">
    <q-item-label v-if="iconName">
      <img :src="getIconPath" class="img-icon" />
    </q-item-label>
    <q-item-label>
      {{ title }}
    </q-item-label>
  </q-btn>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
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
    getIconPath () {
      return this.iconName ? require(`../assets/icons/${this.iconName}`) : ''
    }
  }
}
</script>
