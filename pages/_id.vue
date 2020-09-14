<template>
  <div id="portfolio_single">
    <h1 class="title">
      {{ images[0].author }}
    </h1>
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in accusamus ipsa, sequi nihil accusantium recusandae corporis iure voluptatem, consequatur amet voluptates odio harum atque autem dicta aut iste delectus!
    </p>
    <div class="images-wrapper">
      <img v-for="(image) in images" :key="image.id" v-in-viewport class="image" :src="image.download_url">
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
      title: 'DT PH >> ' + this.images[0].author
    }
  }
}
</script>

<style scoped>
#portfolio_single {
  padding-top: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  width: 50%;
  margin-bottom: 50px;
}

.description {
  width: 50%;
  margin-bottom: 50px;
}

.images-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 50%;
  margin-bottom: 50px;
  border-radius: 8px;
  padding: 20px 20px 40px 20px;

  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);

  -webkit-transition: all 1s var(--f-transition);
  -moz-transition: all 1s var(--f-transition);
  -o-transition: all 1s var(--f-transition);
  transition: all 1s var(--f-transition);
}

.lazyLoad {
  transform: translateX(-200%);
}

.isLoaded {
  transform: translateX(0%);
}
</style>

<style scoped>
@media all and (max-width: 500px){
  .image {
    padding: 10px 10px 20px 10px;
    width: 80%;
  }

  .title {
    width: 80%;
  }

  .description {
    width: 80%;
  }
}
</style>
