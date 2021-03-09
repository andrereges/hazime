<template>
  <div class="q-pa-md">
    <q-card
      class="my-card text-black"
      style="background: radial-gradient(circle, #ffff 0%, #eeee 100%)"
    >
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="text-h4">Fale Conosco</div>
            <q-input
            ref="nome"
            filled
            v-model="nome"
            label="Nome Completo*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'O nome é obrigatório']"
          />

          <q-input
            ref="email"
            v-model="email"
            label="E-mail*"
            filled
            type="email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'O e-mail é obrigatório']"
          />

          <q-input
            ref="celular"
            filled
            v-model="celular"
            label="Celular*"
            mask="(##) ##### - ####"
            fill-mask
            type="tel"
          />

          <q-input
            ref="assunto"
            filled
            v-model="assunto"
            label="Assunto*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'O assunto é obrigatório']"
          />

          <q-input
            v-model="mensagem"
            filled
            label="Mensagem*"
            type="textarea"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'A mensagem é obrigatória']"
          />

          <q-card-actions align="right">
            <q-btn glossy label="Enviar" color="green" class="full-width" type="submit" />
          </q-card-actions>

        </q-form>
      </q-card-section>
    </q-card>

    <q-card
      class="my-card text-black"
      style="background: radial-gradient(circle, #ffff 0%, #eeee 100%); margin-top: 50px;"
    >
      <q-card-section>
        <div class="text-h4">Onde Estamos</div>
        <iframe
          width="100%" height="350" frameborder="0" style="border:0" allowfullscreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.455727069382!2d-46.62381158502376!3d-23.480089284723345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef6459045b333%3A0x1f3d3e4df07978f9!2sRua+Corneteiro+Jesus%2C+370+-+%C3%81gua+Fria%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1520517408330">
        </iframe>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'PageFaleConosco',
  data () {
    return {
      nome: '',
      email: '',
      celular: '',
      assunto: '',
      mensagem: ''
    }
  },
  methods: {
    onSubmit (evt) {}
  }
}
</script>
