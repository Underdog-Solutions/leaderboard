// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueFire from 'vuefire'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VProgressCircular,
  VForm,
  VTextField,
  VAlert,
  VMenu,
  VProgressLinear,
  VSnackbar
} from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'

Vue.use(VueFire)
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VProgressCircular,
    VForm,
    VTextField,
    VAlert,
    VMenu,
    VProgressLinear,
    VSnackbar
  }
})

Vue.config.productionTip = false

Vue.filter('capitalize', function (val) {
  return val.charAt(0).toUpperCase() + val.slice(1)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
