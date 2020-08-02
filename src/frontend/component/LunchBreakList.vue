<template>
  <div>
      <div class="table-header-block">
        <div class="table-header-name table-header-cell">名前</div>
        <div class="table-header-start-time table-header-cell">開始時間</div>
        <div class="table-header-end-time table-header-cell">開始時間</div>
      </div>
      <LunchBreakData v-for="user in users" :key="user.id"
        :id="user.id"
        :name="user.name"
        :startLunchBreak="'2018-01-01T05:00:00'"
      />
      <div>
        <button>追加</button>
      </div>
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

<style lang="sass" scoped>
@import './style/common.sass'

.table-header-block
  display: block
  width: $table-width;

.table-header-cell
  display: table-cell

.table-header-name
  width: $table-name-width;

.table-header-start-time 
  width: $table-start-time-width;

.table-header-end-time
  width: $table-start-time-width;

</style>