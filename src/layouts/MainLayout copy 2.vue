<template>
  <q-layout class="q-pa-md bg-image">

    <q-toolbar class="justify-center" >
      <img alt="Logo" src="~assets/logo.png" width="300px">
    </q-toolbar>

    <div class="q-pa-md" style="padding-top: 20px">
      <q-btn-group spread flat rounded>
        <q-btn icon="home" label="Home" @click="$router.replace('/')" />
        <q-btn icon="comment_bank" label="Quem Somos" @click="$router.replace('/quem-somos')" />
        <q-btn icon="star_purple500" label="Produtos" @click="$router.replace('/produtos')" />
        <q-btn icon="phone" label="Fale Conosco" @click="$router.replace('/fale-conosco')" />
      </q-btn-group>
    </div>

    <div class="q-pa-md">
      <q-tab-panels v-model="menuTab" class="bg-transparent">
        <q-tab-panel name="home">
          <div class="text-h6" style="padding-top: 20px">
            <p>Descrição...</p>
          </div>
        </q-tab-panel>

        <q-tab-panel name="aboutUs">
          <div class="container">
            <div class="text-h6">Quem Somos</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </q-tab-panel>

        <q-tab-panel name="product">

          <div class="q-pa-md">
            <q-tabs
              v-model="productTab"
              narrow-indicator
              dense
              align="justify"
            >
              <q-tab class="text-black" name="food" label="Alimentação" />
              <q-tab class="text-black" name="hygiene" label="Higiene" />
              <q-tab class="text-black" name="accessory" label="Acessórios" />
            </q-tabs>
          </div>

        </q-tab-panel>

        <q-tab-panel name="contact">
          <div class="text-h6">Fale Conosco</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

      </q-tab-panels>
    </div>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      slide: 1,
      autoplay: true,
      menuTab: 'product',
      productTab: 'food',
      splitterModel: 20
    }
  },
  methods: {
    isMobile () {
      return this.$q.platform.is.mobile
    }
  }
}
</script>

<style>
  .bg-image {
    background-image: url('../assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

</style>
