<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <q-card class="my-card col-12">
        <q-card-section>
          <q-form @submit.prevent.stop="onSubmit" class="q-gutter-md">
            <div class="text-h4">{{ $t('contact') }}</div>
            <div class="text-caption">{{ $t('formContactMessage') }}</div>

            <q-separator />

            <q-input
              ref="name"
              filled
              v-model="name"
              :label="this.$t('fullName') + '*'"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'O nome é obrigatório']"
            />

            <q-input
              ref="email"
              v-model="email"
              :label="this.$t('email') + '*'"
              filled
              type="email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'O e-mail é obrigatório']"
            />

            <q-input
              ref="phone"
              filled
              v-model="phone"
              :label="this.$t('phone')"
              mask="(##) ##### - ####"
              fill-mask
              type="tel"
            />

            <q-input
              ref="subject"
              filled
              v-model="subject"
              :label="this.$t('subject') + '*'"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'O assunto é obrigatório']"
            />

            <q-input
              v-model="message"
              filled
              :label="this.$t('message') + '*'"
              type="textarea"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'A mensagem é obrigatória' ]"
            />

            <q-card-actions>
              <q-btn
                glossy
                color="green"
                class="full-width"
                :label="this.$t('send')"
                :type="type"
                target="_blank"
                :href="'mailto:' + sendEmail"
                :disable="!disableButton"
              />
            </q-card-actions>

          </q-form>
        </q-card-section>
      </q-card>
    </div>

    <div class="row">
      <q-card class="my-card row onde-estamos col-12">
        <q-card-section class="col-12">
          <q-item-label class="text-h4">{{ $t('whereUsAre') }}</q-item-label>
        </q-card-section>
        <q-card-section class="col-12">
          <iframe
            width="100%" height="400" frameborder="0" style="border:0" allowfullscreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.455727069382!2d-46.62381158502376!3d-23.480089284723345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef6459045b333%3A0x1f3d3e4df07978f9!2sRua+Corneteiro+Jesus%2C+370+-+%C3%81gua+Fria%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1520517408330">
          </iframe>
        </q-card-section>

        <q-card-section class="col-12">
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle2">{{ this.$t('address') }}</q-item-label>
              <q-item-label>Rua Corneteiro de Jesus, 370</q-item-label>
              <q-item-label>Água Fria / São Paulo-SP</q-item-label>
              <q-item-label>CEP: 02336-030</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle2">{{ this.$t('phones') }}</q-item-label>
              <q-item-label>
                +55 (11) 9 9706-4004 <img src="~/assets/icons/whatsapp.png" style="with: 1em; height: 1em" />
              </q-item-label>
              <q-item-label>+55 (11) 2204-3004</q-item-label>
              <q-item-label>+55 (11) 2204-1153</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle2">{{ this.$t('emails') }}</q-item-label>
              <q-item-label>vendas.sonne@gmail.com</q-item-label>
              <q-item-label>hazimebaby@terra.com.br</q-item-label>
              <q-item-label>sac.sonne@hotmail.com</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFaleConosco',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  },
  computed: {
    type () {
      if (this.subject && this.name && this.email && this.message) {
        return 'a'
      }

      return ''
    },
    disableButton () {
      if (this.subject && this.name && this.email && this.message) {
        return true
      }

      return false
    },
    sendEmail () {
      return `
        ${process.env.EMAIL}
        ?subject=${escape(this.subject)}
        &body=<p><b>Nome:</b> ${this.name}</p>
        <p><b>Telefone:</b> ${this.phone}</p>
        <p><b>Email:</b> ${this.email}</p>
        <p><b>Mensagem:</b></p>
        <p>${escape(this.message)}</p>
        <br><br>
        <p><b>Site: ${window.location.origin}</b></p>`
    }
  },
  methods: {
    onSubmit () {
      console.log('Form Subimitted')
    }
  }
}
</script>

<style scoped>
  .my-card {
    background: radial-gradient(circle, #ffff 0%, #ffff 100%);
  }

  .onde-estamos {
    margin-top: 20px;
  }
</style>
