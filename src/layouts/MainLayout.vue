<template>
  <q-layout class="bg-image" view="lHh Lpr lFf">
    <q-header class="header">
      <q-toolbar class="justify-center">
        <img alt="Logo" src="~assets/logo.png" width="200px">
      </q-toolbar>

      <q-toolbar class="bg-purple glossy text-white q-my-md shadow-2">

        <q-btn flat @click="$router.replace('/')">
          <q-item-label>
            <img src="~/assets/icons/home.svg" class="img-icon" />
          </q-item-label>
          <q-item-label>
            Home
          </q-item-label>
        </q-btn>

        <q-space />

        <q-btn-dropdown flat dropdown-icon="change_history">

          <template v-slot:label>
            <div class="row items-center no-wrap">
              <img src="~/assets/icons/product-lauch.svg" class="img-icon" />
              <div class="text-center">
                Produtos
              </div>
            </div>
          </template>

          <q-list>
              <q-item clickable v-close-popup @click="$router.replace('/produtos/alimentacao')" >
                <q-item-section>
                  <q-item-label>Alimentação</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="$router.replace('/produtos/higiene')" >
                <q-item-section>
                  <q-item-label>Higiene</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="$router.replace('/produtos/acessorios')" >
                <q-item-section>
                  <q-item-label>Acessórios</q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-separator dark vertical v-show="this.$q.platform.is.desktop" />

        <q-btn flat @click="$router.replace('/quem-somos')" v-show="this.$q.platform.is.desktop">
          <q-item-label>
            <img src="~/assets/icons/information.svg" class="img-icon" />
          </q-item-label>
          <q-item-label>
            Quem Somos
          </q-item-label>
        </q-btn>

        <q-separator dark vertical v-show="this.$q.platform.is.desktop" />

        <q-btn flat @click="$router.replace('/fale-conosco')" v-show="this.$q.platform.is.desktop">
          <q-item-label>
            <img src="~/assets/icons/customer-care.svg" class="img-icon" />
          </q-item-label>
          <q-item-label>
            Fale Conosco
          </q-item-label>
        </q-btn>

        <q-separator dark vertical inset v-show="this.$q.platform.is.mobile" />

        <q-btn flat round dense icon="menu" class="q-mr-sm" @click="rightDrawerOpen = !rightDrawerOpen" v-show="this.$q.platform.is.mobile" />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      v-show="rightDrawerOpen"
      side="right"
      bordered
      content-class="bg-grey-1"
    >
      <q-list class="bg-image">
        <q-item-label header class="text-grey-8" />

        <q-toolbar class="justify-center">
          <img alt="Logo" src="~assets/logo.png" width="200px">
        </q-toolbar>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
          glossy
          icon="share"
          color="purple"
          direction="up"
        >
          <q-fab-action flat clickable tag="a" target="_blank" href="https://www.instagram.com/sonne.baby2021/">
            <q-item-label>
              <img src="~/assets/icons/instagram.png" class="img-icon" />
            </q-item-label>
          </q-fab-action>
          <q-fab-action flat clickable tag="a" target="_blank" href="https://wa.me/5511997064004?text=Eu%20tenho%20interesse%20em%20saber%20mais%20sobre%20a%20Hazime">
            <q-item-label>
              <img src="~/assets/icons/whatsapp.png" class="img-icon" />
            </q-item-label>
          </q-fab-action>
        </q-fab>
      </q-page-sticky>
    </q-page-container>

  </q-layout>
</template>

<script>

import EssentialLink from 'components/EssentialLink.vue'
const linksData = [
  {
    title: 'Quem Somos',
    caption: '',
    iconName: 'information.svg',
    link: '/quem-somos'
  },
  {
    title: 'Fale Conosco',
    caption: '',
    iconName: 'customer-care.svg',
    link: '/fale-conosco'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      fab: false,
      essentialLinks: linksData,
      rightDrawerOpen: false
    }
  },
  methods: {}
}
</script>

<style>

  .bg-image {
    background-image: url('~assets/bg.jpg');
    background-repeat: repeat;
    width: 100%;
    height: 100%;
  }

  .header {
    background-image: url('~assets/bg.jpg');
    background-repeat: no-repeat;
    padding-top: 20px;
  }

  .img-icon {
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }

</style>
