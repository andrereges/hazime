<template>
  <q-layout class="bg-image" view="lHh Lpr lFf">

    <Header />

    <q-page-container>

      <router-view />

      <button-float v-show="this.$q.platform.is.mobile" />

      <Footer />
    </q-page-container>

  </q-layout>
</template>

<script>

import Header from 'src/components/Header.vue'
import ButtonFloat from 'src/components/ButtonFloat.vue'
import Footer from 'src/components/Footer.vue'

export default {
  name: 'MainLayout',
  components: { Header, ButtonFloat, Footer }
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

</style>
