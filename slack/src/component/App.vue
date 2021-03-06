<template>
  <div id="App">
    <Header />
    <LunchBreakList />
    <Footer />
  </div>
</template>

<script lang="ts">

import LunchBreakList from './LunchBreakList.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

import Vue from 'vue'
import Component from 'vue-class-component'
import sanitizeHTML from 'sanitize-html';
Vue.prototype.$sanitize = sanitizeHTML;

@Component({
  components: {
    LunchBreakList,
    Header,
    Footer
  },
})
export default class App extends Vue {
}
</script>

<style lang="sass" scoped>
</style>