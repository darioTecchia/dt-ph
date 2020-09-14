<template>
  <div id="home">
    <div v-for="(image, n) in images" :key="image.id" v-in-viewport class="portfolio">
      <div class="images-wrapper">
        <img :src="image.download_url" alt="" srcset="">
        <img :src="image.download_url" alt="" srcset="">
        <img :src="image.download_url" alt="" srcset="">
      </div>
      <div class="caption">
        {{ n+1 }}_{{ image.author | fillWhiteSpace }}.jpg
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const images = await $axios.$get('https://picsum.photos/v2/list?limit=20')
    return { images }
  },
  data () {
    return {}
  },
  head: {
    title: 'CORRADO MASCOLO'
  }
}
</script>

<style scoped>
  #home {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: calc(120px + var(--pad)) var(--pad);
  }

  .portfolio {
    width: 600px;
    height: 600px;
    margin-bottom: 240px;
    text-align: center;
  }

  .images-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .images-wrapper img {
    position: absolute;
    width: auto;
    height: 100%;
    top: 0px;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
    padding: 20px 20px 40px 20px;
    background-color: #fff;

    -webkit-transition: all 1s var(--f-transition);
    -moz-transition: all 1s var(--f-transition);
    -o-transition: all 1s var(--f-transition);
    transition: all 1s var(--f-transition);
  }

  .caption {
    margin-top: 100px;
  }

  .in-viewport img:nth-child(1) {
    transform: rotate(10deg);
  }
  .in-viewport img:nth-child(2) {
    transform: rotate(-10deg);
  }
</style>

<style scoped>
@media all and (max-width: 425px){
  .portfolio {
    width: 100%;
    height: 200px;
    margin-bottom: 240px;
    text-align: center;
  }

  .images-wrapper img {
    padding: 10px 10px 20px 10px;
  }
}
</style>
