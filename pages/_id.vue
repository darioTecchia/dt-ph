<template>
  <div id="portfolio_single">
    <div class="images-wrapper">
      <div v-for="(image, n) in images" :key="image.id" class="image">
        <img :src="image.download_url" alt="" srcset="">
        <span class="caption txt--uppercase">{{ n+1 }}_{{ image.author | fillWhiteSpace }}.jpg</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const images = await $axios.$get('https://picsum.photos/v2/list')
    return { images }
  },
  data () {
    return {}
  },
  head: {
    title: 'CORRADO MASCOLO >> Portfolio'
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
  padding-top: 100px;
}
.image {
  width: 50%;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  padding: 20px 20px 40px 20px;
}
.image img {
  width: 100%;
}
</style>
