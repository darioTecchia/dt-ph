<template>
  <div>
    <header>
      <div class="logo">
        <nuxt-link to="/">
          <h1>CORRADO</h1>
          <h1>MASCOLO</h1>
        </nuxt-link>
      </div>

      <div class="page-title">
      </div>

      <div class="menu-button">
        <h1 @click="isMenuOpened = !isMenuOpened">MENU</h1>
      </div>
    </header>
    <transition name="slide">
      <Menu v-if="isMenuOpened" />
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isMenuOpened: false
    }
  }
}
</script>

<style scoped>
  header {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;

    color: #fff;
    mix-blend-mode: difference;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: var(--pad);
  }
</style>
