<template>
  <div>
      <LunchBreakData v-for="user in users" :key="user.id"
        :id="user.id"
        :name="user.name"
        :startLunchBreak="'2018-01-01T05:00:00'"
      />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { User } from "../types/user"
import LunchBreakData from './LunchBreakData.vue'

@Component({
  components: {
    LunchBreakData,
  },
})
export default class LunchBreakList extends Vue {
  users?: Array<User> = [
    {
      id: 1,
      name: "斎藤一郎",
      startLunch: "1999-12-31T23:59:59"
    },
    {
      id: 2,
      name: "斎藤二郎",
      startLunch: "1999-12-31T23:59:59"
    },
  ]
  
}
</script>

<style>

</style>