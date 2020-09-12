<template>
  <div id="portfolio_single">
    <div class="images-wrapper">
      <div v-for="(image, n) in images" :key="image.id" class="image">
        <img :src="image.download_url" alt="" srcset="">
        <span class="caption">{{ n+1 }}. {{image.author}}</span>
      </div>
    </div>
    <div class="slider-track">
      <div class="slider"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const images = await $axios.$get('https://picsum.photos/v2/list')
    return { images }
  },
  head: {
    title: 'CORRADO MASCOLO >> Portfolio'
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
#portfolio_single {
}
.images-wrapper {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
}
.image {
  width: 50%;
  margin-bottom: 50px;
}
.image img {
  width: 100%;
}
.caption {
}
.slider-track {
}
.slider {
}
</style>
