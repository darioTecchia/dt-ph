<template>
  <div>
    <header>
      <div class="logo">
        <nuxt-link to="/">
          <div>
            CORRADO
            <br>
            MASCOLO
          </div>
        </nuxt-link>
      </div>

      <div class="page-title">
      </div>

      <div class="menu-button pointer">
        <div @click="isMenuOpened = !isMenuOpened">MENU</div>
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
