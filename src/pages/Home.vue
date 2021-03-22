<template>
  <q-page padding>

    <carousel />

    <div class="content">

      <p>
        Pensando nas mamães de primeira viagem, que não tiveram ou que não
        leram muito sobre a maternidade durante a gravidez a SONNE separou alguns
        conselhos que as mamães precisam saber!
      </p>

      <div>
        <p>
          <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
          <span class="text-subtitle2"> Os primeiros meses são bem cansativos</span>
        </p>
        <p>
          Nosso corpo não está acostumado a acordar no meio da noite e
          isso realmente nos deixa muito cansadas! Você acordará à noite para amamentar e muitas
          vezes essas noites serão eternas… Mas acredite: isso vai passar! Você vai demorar para
          dormir como antes, talvez nunca mais, rsrsrs… Mas seu corpo vai se acostumar a acordar mais
          cedo do que antes e parece que não precisará mais de tantas horas de sono. Calma, vai passar!
        </p>
      </div>

      <div>
        <p>
          <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
          <span class="text-subtitle2"> Curta intensamente cada momento do seu bebê</span>
        </p>
        <p>
          Vejo muitas mães querendo que passe logo a fase bebê para que a criança comece logo a interagir,
          mas tente aproveitar cada fase, pois passa tão rápido e é um tempo que nunca voltará. Seu bebê vai
          crescer em uma velocidade impressionante e você vai perceber isso também na quantidade de roupas que
          ele perderá, então, procure não comprar muitas coisas no enxoval.
        </p>
      </div>

      <div>
        <p>
          <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
          <span class="text-subtitle2"> Escolha um pediatra que lhe transmita confiança</span>
        </p>
        <p>
          Nós, mães, apesar no nosso instinto materno, temos várias inseguranças e dúvidas nos primeiros
          meses do bebê, por isso é importante que você escolha um pediatra que sinta confiança e que deixe você
          à vontade para ligar e perguntar tudo que quiser.
        </p>
      </div>

      <div>
        <p>
          <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
          <span class="text-subtitle2"> Crie uma rotina para o bebê</span>
        </p>
        <p>
          O bebê precisa sim de rotina! Tente criar uma rotina simples no início, colocando o mesmo horário
          para o banho, sonequinhas e hora de dormir. Isso gera confiança nele, o que faz com que fique mais
          calmo e menos irritado.
        </p>
      </div>

      <div>
        <p>
          <q-img src="~/assets/icons/favicon.png" class="img-favicon"/>
          <span class="text-subtitle2"> Suas prioridades vão mudar e sua forma de pensar também</span>
        </p>
        <p>
          Filhos nos fazem seres humanos melhores. O que um filho faz por você nenhuma outra experiência faz.
          Nada a modificará de forma tão permanente como um filho.
        </p>
      </div>

    </div>

  </q-page>
</template>

<script>

import Carousel from 'src/components/Carousel.vue'

export default {
  components: { Carousel },
  name: 'PageHome'
}
</script>

<style scoped>
  .text-subtitle2 {
    vertical-align: middle;
  }
  .content {
    margin-top: 30px
  }
</style>
