<template>
  <div>
      <div class="table-header-block">
        <div class="table-header-name table-header-cell">名前</div>
        <div class="table-header-status table-header-cell">ステータス</div>
        <div class="table-header-start-time table-header-cell">ステータス開始時間</div>
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
  }

  failedCallUserListAPI(err: any) {
    console.log(err)
  }

  successCallUsersProfileAPI(userID: string, response: any) {
    let result: boolean = response.ok
    if (!result) {
      return;
    }

    let profile: UserProfile = response.profile
    if (profile.display_name == undefined || profile.display_name.length == 0) {
      profile.display_name = "test";
      //return;
    }

    if (this.isIgonoreUser(profile.display_name)) {
      return;
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

  isIgonoreUser(displayName: string): boolean {
    let ignoreUsers:Array<string> = slackConfig["ignore-users"];
    return ignoreUsers.includes(displayName)
  }

  // mouted
  mounted() {
    callUserListAPI(this.successCallUsersListAPI, this.failedCallUserListAPI)
  }
}
</script>

<style lang="sass" scoped>
@import './style/common.sass'

.table-header-block
  display: table;
  width: $table-width;

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
  width: $table-name-width;

.table-header-status
  width: $table-status-width;

.table-header-start-time 
  width: $table-start-time-width;

.table-header-end-time
  width: $table-start-time-width;

</style>