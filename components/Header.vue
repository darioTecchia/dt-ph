<template>
  <div>
    <header>
      <div class="logo">
        <nuxt-link to="/">
          <div>
            DT
            <br>
            PH
          </div>
        </nuxt-link>
      </div>

      <div class="menu-button pointer">
        <div @click="isMenuOpened = !isMenuOpened">
          MENU
        </div>
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
    height: 120px;
    z-index: 2;

    color: #fff;
    mix-blend-mode: difference;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: var(--pad);
  }
</style>
