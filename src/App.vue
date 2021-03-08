<template>
  <div id="q-app" class="bg-image">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>

  .bg-image {
    background-image: url('~assets/bg2.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

</style>
