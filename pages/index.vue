<template>
  <div id="home">
    <div class="content">
      <VueSlickCarousel v-bind="slickSettings" :arrows="true" :dots="true">
        <div v-for="n in 10" :key="n" class="portfolio-slide">
          <div class="portfolio-image" :style="{ background: 'url(https://w.wallhaven.cc/full/2e/wallhaven-2evglg.jpg' }"></div>
          <nuxt-link :to="'/portfolio/' + n">{{n}}. TITOLO_PORFOLIO</nuxt-link>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slickSettings: {
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        infinite: true,
        fade: false,
        // lazyLoad: 'ondemand',
        slidesToShow: 3,
        speed: 500
      }
    }
  }
}
</script>

<style scoped>
  #home {
    background-color: #fff;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: var(--pad);
  }

  .content {
    width: 100%;
  }

  .portfolio-slide {
    height: 45vh;
    margin: 0px var(--double-pad);
    padding: var(--pad) var(--pad) 0px var(--pad);
    display: flex;
    flex-direction: column;
  }

  .portfolio-image {
    height: 100%;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    background-position: center top;
  }
</style>
