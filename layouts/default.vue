<template>
  <div>
    <Splash />
    <Header />
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: Neue;
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/neue-montreal-regular.woff2');
}
@font-face {
  font-family: Saol;
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/saol-display-regular-italic.woff2');
}

:root {
  --pad: 32px;
  --double-pad: calc(var(--pad) * 2);

  --font-family-sans-serif: 'Neue', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  --font-family-serif: 'Saol', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;

  --normal-font: 13px/20px var(--font-family-sans-serif);
  --huge-font: 120px/160px var(--font-family-sans-serif);
}

html {
  font: var(--normal-font);
  letter-spacing: 3px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  background-color: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

*:focus {
  outline: none;
}

.responsive-bg {
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center top;
}

.pointer {
  cursor: pointer;
}

.txt--uppercase {
  text-transform: uppercase;
}

a,
a:visited {
  text-decoration: none;
  color: unset;
}

.slide-enter-active {
  transition: all .8s ease;
}
.slide-leave-active {
  transition: all .8s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
