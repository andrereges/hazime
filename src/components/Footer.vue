<template>
  <q-footer
    reveal
    elevated
    class="footer text-purple"
  >
    <q-toolbar class="row items-center no-wrap">

      <div class="col-2">
        <img src="~/assets/logo/hazime-logo.png" class="logo-footer"/>
      </div>

      <div class="col-10 text-right">

        <q-btn
          flat
          type="a"
          target="_blank"
          :href="'tel:' + phone"
        >
          <q-item-label>
            <img src="~/assets/icons/customer-care.svg" class="img-icon" />
          </q-item-label>
        </q-btn>

        <q-btn
          flat
          type="a"
          target="_blank"
          :href="'mailto:' + email"
        >
          <q-item-label>
            <img src="~/assets/icons/email.png" class="img-icon" />
          </q-item-label>
        </q-btn>

        <q-btn
          flat
          type="a"
          target="_blank"
          :href="whatsapp"
        >
          <q-item-label>
            <img src="~/assets/icons/whatsapp.png" class="img-icon" />
          </q-item-label>
        </q-btn>

        <q-btn
          flat
          type="a"
          target="_blank"
          :href="instagram"
        >
          <q-item-label>
            <img src="~/assets/icons/instagram.png" class="img-icon" />
          </q-item-label>
        </q-btn>

      </div>

    </q-toolbar>

  </q-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      instagram: process.env.INSTAGRAM,
      whatsapp: process.env.WHATSAPP,
      email: process.env.EMAIL,
      phone: process.env.PHONE
    }
  }
}
</script>

<style scoped>
  .footer {
    background-color: #fafafa
  }

  .logo-footer {
    width: 8em;
    height: 3em;
  }
</style>
