<template>
  <div class="q-pa-md">
    <div class="text-h4 glossy bg-white text-center">Produtos - Higiene</div>
    <div class="q-pa-md justify-evenly row">
      <q-card class="my-card col-sm-3" style="background-color: white" v-for="n in 10" :key="n">
        <img
          :ratio="1"
          src="~/assets/p1.jpg"
        >

        <q-card-section>
          <div class="text-h6">{{ nome }}</div>
          <div class="text-caption">{{ referencia }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ descricao }}
        </q-card-section>

      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageProdutosHigiene',
  data () {
    return {
      nome: 'MASSAGEADORA',
      referencia: 'REF 6004 – ESCOVA',
      descricao: 'Massageador de gengiva, em 100% silicone, macio e confortável. Que além de ajudar na higienização, massageia a gengiva causando o bem estar e estimula o aprendizado do bebê.'
    }
  }
}
</script>

<style scoped>
  .my-card {
    margin: 0  1px  20px  0;
    padding: 1px;
  }
</style>
