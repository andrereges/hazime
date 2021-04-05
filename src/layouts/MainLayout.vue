<template>
  <q-layout class="bg-image" view="lHh Lpr lFf">

    <Header />

    <q-page-container>

      <router-view />

    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script>

import Header from 'src/components/Header.vue'
import Footer from 'src/components/Footer.vue'

export default {
  name: 'MainLayout',
  components: { Header, Footer }
}
</script>

<style>
  .bg-image {
    background-image: url('~assets/background/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .img-icon {
    margin-right: 0.5em;
    width: 2em;
    height: 2em;
  }

  .img-favicon {
    width: 1.5em;
    height: 1.5em;
  }

  .uppercase {
    text-transform: uppercase;
  }

</style>
