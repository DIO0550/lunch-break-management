<template>
  <div>
      <div class="table-header-block">
        <div class="table-header-name table-header-cell">名前</div>
        <div class="table-header-status table-header-cell">ステータス</div>
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

// dummyのjsonファイルを読み込む
// TODO: API呼び出し
import user_list from '../dummy/user_list_dummy.json';

@Component({
  components: {
    LunchBreakData,
  },
})
export default class LunchBreakList extends Vue {
  users?: Array<User> = [
    {
      id: user_list.members[0].id,
      name: user_list.members[0].name,
      startLunch: "1999-12-31T23:59:59"
    },
    {
      id: user_list.members[1].id,
      name: user_list.members[1].name,
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

.table-header-status
  width: $table-status-width;

.table-header-start-time 
  width: $table-start-time-width;

.table-header-end-time
  width: $table-start-time-width;

</style>