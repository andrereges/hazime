<template>
  <q-page padding>

    <carousel />

    <div class="content">

      <div class="row">
        <div :class="divText">

          <p class="text-subtitle2">
            Pensando nas mamães de primeira viagem,separamos algumas dicas que possam ser úteis para as mamães.
          </p>

          <p>
            <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
            <span class="text-subtitle2"> Aceite ajuda</span>
          </p>

          <p>
            É muito comum que uma mãe de primeira viagem queira fazer tudo e queira ficar
            100% do tempo dedicada ao bebê.
          </p>

          <p>
            É importante entender, porém, que bebês dão trabalho, sendo necessário pedir e aceitar ajuda.
            Você acabou de sair do hospital com um recém nascido e sua  vida está prestes a mudar.
            Conte com seus familiares e o papai também pode ajudar para que você não sobrecarregue.
          </p>

          <p>
            <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
            <span class="text-subtitle2"> Crie uma rotina com o bebê</span>
          </p>

          <p>
            Criar uma rotina com o bebê é fundamental a fim de que você possa otimizar o seu tempo e
            consiga dar conta de tudo. Em função disso, é importante dormir quando o bebê dorme, definir
            horário de banho, refeições, passeios, sonecas e visitas familiares.
          </p>

          <p>
            <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
            <span class="text-subtitle2"> Cuide de você também</span>
          </p>

          <p>
            Lembre-se de que é fundamental cuidar de você também.
            Alimente-se corretamente, durma sempre que puder e procure separar um tempo para você.
          </p>

          <p>
            <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
            <span class="text-subtitle2"> Divida as responsabilidades com o pai</span>
          </p>

          <p>
            As responsabilidades de cuidar de um bebê não devem ser apenas da mãe. Engaje o pai do
            bebê nas atividades tanto para que você possa descansar, quanto para que o pai e o bebê
            possam criar um vínculo.
          </p>

          <p class="text-subtitle2">
            Bebês choram! Mas quando sorriem você esquece tudo.
          </p>

          <p class="text-subtitle2">
            Curta cada momento, pois eles são únicos e o tempo voa.
          </p>

        </div>

        <div :class="divVideo">

            <q-card class="my-card row q-mt-md">
              <q-video :src="getVideo('video1.mp4')" />
            </q-card>

            <q-card class="my-card row q-mt-md">
              <q-video :src="getVideo('video2.mp4')" />
            </q-card>

        </div>
      </div>
    </div>

  </q-page>
</template>

<script>

import Carousel from 'src/components/Carousel.vue'

export default {
  components: { Carousel },
  name: 'PageHome',
  data () {
    return {
      divText: 'col-8 q-mt-md',
      divVideo: 'col-4 flex flex-center'
    }
  },
  created () {
    if (this.$q.platform.is.mobile) {
      this.divText = 'col-12 q-mt-md'
      this.divVideo = 'col-12 flex flex-center'
    }
  },
  methods: {
    getVideo (name) {
      return require(`../assets/videos/${name}`)
    }
  }
}
</script>

<style scoped>
  .text-subtitle2 {
    vertical-align: middle;
  }
  .content {
    margin-top: 30px
  }
  .my-card {
    width: 20em;
    height: 20em;
  }
</style>
