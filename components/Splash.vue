<template>
  <transition name="slide">
    <div v-if="!loaded" class="splash">
      <div>
        CORRADO
        <br>
        MASCOLO
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    setInterval(() => {
      this.loaded = true
    }, 500)
  }
}
</script>

<style scoped>
  .splash {
    position: fixed;
    z-index: 3;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;

    background-color: black;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
