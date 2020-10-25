<template>
  <div>
      <div class="table-header-block">
        <div class="table-header-name table-header-cell">名前</div>
        <div class="table-header-status table-header-cell">ステータス</div>
        <div class="table-header-end-time table-header-cell">ステータス終了時間</div>
      </div>
      <LunchBreakData v-for="(user, index) in users" :key="user.id"
        :id="user.id"
        :display_name="user.display_name"
        :status_text="user.status_text"
        :status_emoji="user.status_emoji"
        :status_expiration="user.status_expiration"
        :row="index"
      />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { User, UserProfile } from "../types/user"
import LunchBreakData from './LunchBreakData.vue'

import slackConfig from '../configration/slackConfig.json';
import { callUserListAPI,  callUsersProfileAPI } from '../ts/api.ts'; 
import { component } from 'vue/types/umd';

@Component({
  components: {
    LunchBreakData,
  },
})
export default class LunchBreakList extends Vue {
  users: Array<User> = []

  successCallUsersListAPI(response: any) {

    for (var member of response.members) {
      callUsersProfileAPI(member.id, this.successCallUsersProfileAPI, this.failedCallUsersProfileAPI)
    }

    this.users.sort(this.compareUserDisplayName)
  }

  failedCallUserListAPI(err: any) {
    console.log(err)
  }

  /**
   * 表示名でソート
   */
  compareUserDisplayName(a: User, b: User): number {
    if (a.display_name == undefined || b.display_name == undefined) {
      return 0;
    }

    if (a.display_name < b.display_name) {
      return 1
    } 
    if (a.display_name == b.display_name) {
      return 0
    }

    return -1

  }

  /**
   * ユーザープロファイルAPI呼び出し成功時
   */
  successCallUsersProfileAPI(userID: string, response: any) {
    let result: boolean = response.ok
    if (!result) {
      return;
    }

    let profile: UserProfile = response.profile
    if (profile.display_name == undefined || profile.display_name.length == 0) {
      return;
    }

    if (this.isIgonoreUser(profile.display_name)) {
      return;
    }

    // 含まれていれば、ステータスのみ更新する
    if (this.isContainUser(userID)) {
      this.updateStatus(userID, profile.status_text, profile.status_emoji, profile.status_expiration)
      return
    }

    let user: User = {
      id: userID,
      display_name: profile.display_name,
      status_text: profile.status_text,
      status_emoji: profile.status_emoji,
      status_expiration: profile.status_expiration
    }
    this.users.push(user)
  }


  failedCallUsersProfileAPI(err: any) {
    console.log(err)
  }

  /** 
   * 無視するユーザーか 
   */
  isIgonoreUser(displayName: string): boolean {
    let ignoreUsers:Array<string> = slackConfig["ignore-users"];
    return ignoreUsers.includes(displayName)
  }

  /**
   * すでに含まれているユーザーか
   */
  isContainUser(userId: string): boolean {
    return this.users.some(value => value.id == userId)
  }

  updateStatus(userId: string, status_text?: string, status_emoji?: string, status_expiration?: number) {
    for (var user of this.users) {
      if (user.id != userId) {
        continue
      }
      user.status_text = status_text
      user.status_emoji = status_emoji
      user.status_expiration = status_expiration
      break
    }
  }

  // mouted
  mounted() {
    callUserListAPI(this.successCallUsersListAPI, this.failedCallUserListAPI)

    setInterval(() => {
      callUserListAPI(this.successCallUsersListAPI, this.failedCallUserListAPI)
    }, 1000);
  }


}
</script>

<style lang="sass" scoped>
@import './style/common.sass'

.table-header-block
  display: table;
  width: 100%;

.table-header-cell
  box-sizing: border-box;
  display: table-cell;
  border: 1px solid #3366FF;
  background-color: #6699FF;
  color: white;
  text-align: center;
  height: 50px;
  font-size: 20px;
  vertical-align: middle; 

.table-header-name
  min-width: $table-name-width;
  width: 33%;

.table-header-status
  min-width: $table-status-width;
  width: 33%;

.table-header-end-time
  min-width: $table-start-time-width;
  width: 33%;

</style>