import Vue from 'vue'

Vue.filter('fillWhiteSpace', (value) => {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.replace(' ', '_')
})
