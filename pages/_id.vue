<template>
  <div id="portfolio_single">
    <div class="images-wrapper">
      <div v-for="(image) in images" :key="image.id" class="image" v-in-viewport>
        <img :src="image.download_url" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const images = await $axios.$get('https://picsum.photos/v2/list')
    images.title = 'Test'
    return { images }
  },
  data () {
    return {}
  },
  head () {
    return {
      title: 'DT PH >> ' + this.images.title
    }
  }
}
</script>

<style scoped>
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
  padding: 20px 20px 40px 20px;

  -webkit-transition: all 1s var(--f-transition);
  -moz-transition: all 1s var(--f-transition);
  -o-transition: all 1s var(--f-transition);
  transition: all 1s var(--f-transition);
}

.image.in-viewport {
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
}

.image img {
  width: 100%;

  -webkit-transition: all 1s var(--f-transition);
  -moz-transition: all 1s var(--f-transition);
  -o-transition: all 1s var(--f-transition);
  transition: all 1s var(--f-transition);
}

.lazyLoad {
  opacity: 0;
}

.isLoaded {
  opacity: 1;
}
</style>

<style scoped>
@media all and (max-width: 500px){
  .image {
    padding: 10px 10px 20px 10px;
    width: 80%;
  }
}
</style>
