<template>
  <div>
      <div v-for="user in users" :key="user.id">
        <lunch-break-data 
          :id="user.id"
          :name="user.name"
          :startLunchBreak="'2018-01-01T02:00:00+09:00'"
        />
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { User } from "../types/user"
import LunchBreakData from './LunchBreakData.vue'

@Component
export default class LunchBreakList extends Vue {
  user?: Array<User>
  
}
</script>

<style>

</style>