<template>
  <div class="table-block" :class="rowClass()">
    <div class="table-data name-data">
      {{ display_name }}
    </div>
    <div class="table-data status-data">
      {{ status_text }}
    </div>
    <div div class="table-data start-time-data">
      {{ statusStartTime() }} 
    </div>
    <div div class="table-data end-time-data">
      {{ statusEndTime() }} 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LunchBreakData extends Vue {
  @Prop({ type: String, required: true })
  id?: string;

  @Prop({ type: String, required: true })
  display_name?: string;

  @Prop({ type: String, required: false })
  status_text?: string;

  @Prop({ type: String, required: false })
  status_emoji?: string;

  @Prop({ type: Number, required: false })
  status_expiration?: number;

  @Prop({ type: Number, required: true})
  row?: number;


  rowClass(): string {
    if (this.row == undefined) {
      return ""
    } 

    if (this.row % 2 == 0) {
      return "even-number-row"
    }

    return "odd-number-row"
  }

  // statusStartTime(): string {
  //   if (this.status_expiration == undefined) {
  //     return "-"
  //   }

  //   if (this.status_expiration == 0) {
  //     return "-"
  //   }

  //   if (this.isMaxEndTime()) {
  //     return "-"
  //   } 

  //   let endDateTime = new Date(this.status_expiration * 1000);
  //   // １時間後
  //   endDateTime.setHours(endDateTime.getHours() - 1);
  //   let startTime: string = endDateTime.toLocaleTimeString('ja-JP')

  //   return endDateTime.getHours().toString()
  // }

  statusEndTime(): string {

    if (this.status_expiration == undefined) {
      return "-"
    }

    if (this.status_expiration == 0) {
      return "-"
    }

    let endDateTime = new Date(this.status_expiration * 1000);
    let endTime: string = endDateTime.toLocaleString('ja-JP')

    return endTime
  }
  
  isMaxEndTime(): boolean {
    if (this.status_expiration == undefined) {
      return false
    }

    if (this.status_expiration == 0) {
      return false
    }

    let endDateTime = new Date(this.status_expiration * 1000);
    
    return (endDateTime.getHours() == 23 && endDateTime.getMinutes() == 59 && endDateTime.getSeconds() == 59);
  }

}
</script>

<style lang="sass" scoped>
@import './style/common.sass'

.table-block
  display: table;
  width: $table-width;

.table-data
  display: table-cell;
  border: 1px solid #3366FF;
  padding-left: 10px;
  height: 50px;
  font-size: 20px;
  vertical-align: middle;
  box-sizing: border-box;

.odd-number-row
  background-color: #CCFFFF;

.even-number-row
  background-color: #EEFFFF;

.name-data
  width: $table-name-width;

.status-data
  width: $table-status-width;

.start-time-data
  width: $table-start-time-width;

.end-time-data
  width: $table-start-time-width;
  
</style>