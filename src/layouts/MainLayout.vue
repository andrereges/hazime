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
    background-repeat: repeat;
    width: 100%;
    height: 100%;
  }

  .img-icon {
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }

  .img-favicon {
    width: 20px;
    height: 20px;
  }

  .uppercase {
    text-transform: uppercase;
  }

</style>
