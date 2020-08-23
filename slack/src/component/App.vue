<template>
  <div id="App">
    <commonHeader></commonHeader>
    <lunch-break-list />
  </div>
</template>

<script lang="ts">

import LunchBreakList from './LunchBreakList.vue'
import CommonHeader from './CommonHeader.vue'
import Footer from './Footer.vue'

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    LunchBreakList,
    CommonHeader,
    Footer,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss" scoped>
</style>