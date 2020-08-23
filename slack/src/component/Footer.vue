<template>
  <div class="footer-block">
      Copyright (c) 2020 DIO0550
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Footer extends Vue {

}
</script>

<style lang="sass" scoped>
.footer-block
  background-color: rgb(60, 163, 231)
  color: white
  text-align: right
  height: 50px
  display: flex
  flex-direction: column
  align-items: right
  justify-content: center
  padding-right: 20px
  margin-top: 20px
</style>