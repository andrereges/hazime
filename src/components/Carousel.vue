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
    @mouseenter="autoplay = true"
    @mouseleave="autoplay = true"
    :height="$q.platform.is.desktop ? '35em' : '20em'"
    class="carousel shadow-2"
    control-color="purple-5"
  >

    <q-carousel-slide
      class="slide"
      :name="index + 1"
      v-for="(n, index) in 5"
      :key="index"
      :img-src="getImage(`${index + 1}.jpeg`)"
    />

  </q-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  },
  methods: {
    getImage (image) {
      if (image) {
        return require(`../assets/carousel/${image}`)
      }
    }
  }
}
</script>

<style scoped>
  .carousel {
    border: solid 1px;
    border-color: rgba(161, 147, 147, 0.863);
  }
  .slide {
    background-size: 100% 100%;
  }
</style>>
