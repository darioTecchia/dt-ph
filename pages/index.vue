<template>
  <div id="home">
    <div class="content">
      <VueSlickCarousel v-bind="slickSettings">
        <div v-for="(image, n) in images" :key="image.id" class="portfolio-slide">
          <div class="portfolio-image responsive-bg" :style="{ background: 'url(' + image.download_url + ')' }" />
          <nuxt-link class="portfolio-title txt--uppercase" :to="'/' + n">
            {{ n+1 }}_{{ image.author }}
          </nuxt-link>
        </div>

        <template #prevArrow="">
          <div class="custom-arrow">
            INDIETRO
          </div>
        </template>

        <template #nextArrow="">
          <div class="custom-arrow">
            AVANTI
          </div>
        </template>

        <template #customPaging="page">
          <div class="custom-dot">
            {{ page + 1 }}
          </div>
        </template>
      </VueSlickCarousel>
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
    return {
      slickSettings: {
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        speed: 500
      },
      portfolios: [
        {
          title: 'custom'
        }
      ]
    }
  },
  head: {
    title: 'CORRADO MASCOLO'
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
    /* margin: 0px var(--double-pad); */
    padding: var(--pad) var(--pad) 0px var(--pad);
    display: flex;
    flex-direction: column;
  }

  .portfolio-image {
    height: 90%;
  }

  .portfolio-title {
    height: 10%;
  }

  .slick-active .custom-dot {
    font-family: var(--font-family-serif);
    font-style: italic;
    font-weight: bold;
  }

  .slick-prev::before, .slick-next::before {
    display: none !important;
  }

  .custom-arrow {
    color: #000;
    font-size: unset;
    top: unset;
    bottom: -30px;
    line-height: 30px;
    width: unset;
    z-index: 1;
  }

  .slick-next {
    right: 0px;
    left: unset;
  }

  .slick-prev {
    left: 0px;
    right: unset;
  }
</style>
