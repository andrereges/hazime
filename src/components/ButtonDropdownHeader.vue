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

    <q-list>
        <q-item clickable v-close-popup @click="onClick('all')" >
          <q-item-section>
            <q-item-label>{{ $t('all') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onClick('food')" >
          <q-item-section>
            <q-item-label>{{ $t('food') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onClick('hygiene')" >
          <q-item-section>
            <q-item-label>{{ $t('hygiene') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onClick('accessories')" >
          <q-item-section>
            <q-item-label>{{ $t('accessories') }}</q-item-label>
          </q-item-section>
        </q-item>
    </q-list>

  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'Header',
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
    onClick (parameter) {
      this.$router.replace('/products?type=' + parameter)
    }
  }
}
</script>
