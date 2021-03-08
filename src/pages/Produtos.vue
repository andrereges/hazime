<template>
  <q-page style="padding-top: 20px">
    <div class="justify-between text-center">
      <q-tabs
        v-model="tab"
        narrow-indicator
      >
        <q-tab class="text-black" name="food" label="Alimentação" />
        <q-tab class="text-black" name="hygiene" label="Higiene" />
        <q-tab class="text-black" name="accessory" label="Acessórios" />
      </q-tabs>

      <q-tab-panels v-model="tab" class="bg-transparent">
        <q-tab-panel name="food">
          <div class="q-pa-md row items-start q-gutter-md col-md-6">
            <q-card class="my-card">
              <img src="~/assets/p1.jpg">

              <q-card-section>
                <div class="text-h6">MASSAGEADORA</div>
                <div class="text-subtitle2">REF 6004 – ESCOVA</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Massageador de gengiva, em 100% silicone , macio e confortável. Que além de ajudar na higienização, massageia a gengiva causando o bem estar e estimula o aprendizado do bebê.
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="hygiene">
          <div class="text-h6">Higiene</div>
        </q-tab-panel>

        <q-tab-panel name="accessory">
          <div class="text-h6">Acessórios</div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageProdutos',
  data () {
    return {
      tab: 'food'
    }
  }
}
</script>
