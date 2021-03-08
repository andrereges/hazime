<template>
  <q-layout class="q-pa-md bg-image">
    <q-toolbar class="justify-center">
      <img alt="Logo" src="~assets/logo.png" width="300px">
    </q-toolbar>
    <q-toolbar class="justify-center" style="padding-top: 20px">
      <div class="q-gutter-sm">
        <q-btn glossy align="left" class="btn-fixed-width" color="accent" label="Home" icon="home" @click="$router.replace('/')" />
        <q-btn glossy align="right" class="btn-fixed-width" color="green" label="Quem Somos" icon="comment_bank" @click="$router.replace('/quem-somos')" />
        <q-btn glossy align="between" class="btn-fixed-width" color="primary" label="Produtos" icon="star_purple500" @click="$router.replace('/produtos')" />
        <q-btn glossy align="around" class="btn-fixed-width" color="deep-orange" label="Fale Conosco" icon="phone" @click="$router.replace('/fale-conosco')"/>
      </div>
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {}
  }
}
</script>
