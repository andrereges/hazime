<template>
  <q-layout class="q-pa-md bg-image">
    <q-toolbar class="justify-center">
      <img alt="Logo" src="~assets/logo.png" width="250px">
    </q-toolbar>

    <q-toolbar class="bg-primary glossy text-white q-my-md shadow-2">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-separator dark vertical inset />
      <q-btn stretch flat label="Home" icon="home" @click="$router.replace('/')" />

      <q-space />

      <q-btn-dropdown stretch flat label="Produtos" icon="star_purple500">
        <q-list>
          <q-item clickable v-close-popup tabindex="0" @click="$router.replace('/produtos/alimentacao')" >
            <q-item-section>
              <q-item-label>Alimentação</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="0" @click="$router.replace('/produtos/higiene')" >
            <q-item-section>
              <q-item-label>Higiene</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="0" @click="$router.replace('/produtos/acessorios')" >
            <q-item-section>
              <q-item-label>Acessórios</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-separator dark vertical />
      <q-btn stretch flat label="Quem Somos" icon="comment_bank" @click="$router.replace('/quem-somos')" />
      <q-separator dark vertical />
      <q-btn stretch flat label="Fale Conosco" icon="phone" @click="$router.replace('/fale-conosco')" />
    </q-toolbar>

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-fab
            glossy
            icon="share"
            color="primary"
            direction="up"
            v-model="fab"
          >
            <q-fab-action color="orange" @click="onClick" icon="mail" />
            <q-fab-action glossy color="green" @click="onClick" icon="room" />
            <q-fab-action glossy color="primary" @click="onClick" icon="facebook" />
            <q-fab-action color="red" @click="onClick" icon="phone" />
          </q-fab>
        </q-page-sticky>
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      fab: true
    }
  },
  methods: {
    onClick () {
      console.log(this.fab)
    }
  }
}
</script>

<style>

  .bg-image {
    background-image: url('~assets/bg2.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

</style>
