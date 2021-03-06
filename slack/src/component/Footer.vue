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
@import './style/common.sass'

.footer-block
  background-color: rgb(60, 163, 231)
  color: white
  text-align: right
  box-sizing: border-box
  width: 100%
  max-width: 100%;
  height: 50px
  display: flex
  flex-direction: column
  align-items: right
  justify-content: center
  padding-right: 20px
  position: absolute
  bottom: 0
  left: 0
  min-width: $contents-min-width
</style>