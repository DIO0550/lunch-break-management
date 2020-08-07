<template>
  <div class="table-block">
    <div class="table-data name-data">
      {{ name }}
    </div>
    <div div class="table-data start-time-data">
      {{ startTime() }} 
      <button>開始</button>
    </div>
    <div div class="table-data end-time-data">
      {{ endTime() }} 
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
  name?: string;

  @Prop({ type: String, required: false })
  startLunchBreak?: string;

  startTime(): string {

    if (this.startLunchBreak == undefined) {
      return "休憩前"
    }

    return this.startLunchBreak!
  }
  
  endTime(): string {
    if (this.startLunchBreak == undefined) {
      return "休憩前"
    }
    let endDate = new Date(this.startLunchBreak);
    // １時間後
    endDate.setHours(endDate.getHours() + 1);
    let endTime: string = ('0' + endDate.getHours()).slice(-2) + ':' + ('0' + endDate.getMinutes()).slice(-2) + ':' + ('0' + endDate.getSeconds()).slice(-2)

    return endTime
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

.name-data
  width: $table-name-width;

.start-time-data
  width: $table-start-time-width;

.end-time-data
  width: $table-start-time-width;
  
</style>