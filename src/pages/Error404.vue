<template>
  <div class="fullscreen bg-purple text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Página não encontrada...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        glossy
        text-color="blue"
        unelevated
        to="/"
        label="Ir para Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
