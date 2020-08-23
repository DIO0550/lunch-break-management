<template>
  <div class="header-bolock">
      Slack ステータス一覧
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style　lang="sass" scoped>
.header-bolock
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  border: 1px solid #3366FF;
  background-color: #6699FF;
  color: white;
  height: 50px;
  font-size: 20px;
  width: 100%;
  margin-bottom: 10px;
</style>