<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    height="20em"
    class="carousel shadow-2"
  >
    <q-carousel-slide class="slide" :name="1" img-src="~/assets/carousel/car1.jpg" />
    <q-carousel-slide class="slide" :name="2" img-src="~/assets/carousel/car2.jpg" />
    <q-carousel-slide class="slide" :name="3" img-src="~/assets/carousel/car3.jpg" />
    <q-carousel-slide class="slide" :name="4" img-src="~/assets/carousel/girafas.jpeg" />
  </q-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 1,
      autoplay: true,
      video1: 'video1.mp4'
    }
  },
  computed: {
    getVideo () {
      return this.video1 ? require(`../assets/carousel/${this.video1}`) : ''
    }
  }
}
</script>

<style scoped>
  .carousel {
    border: solid 1px;
    border-color: purple;
  }
  .slide {
    background-size: 100% 100%;
  }
</style>>
