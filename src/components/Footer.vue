<template>
  <q-footer
    reveal
    elevated
    class="footer text-purple"
  >
    <q-toolbar class="row justify-around">

      <div class="col-7">
        <img src="~/assets/logo/hazime-logo.png" class="logo-footer"/>
        &copy; 2021 - V1.0
      </div>

      <div class="col-5 text-right">
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
      whatsapp: process.env.WHATSAPP
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
