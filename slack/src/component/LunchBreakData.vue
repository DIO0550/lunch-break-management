<template>
  <div class="table-block" :class="rowClass()">
    <div class="table-data name-data">
      {{ display_name }}
    </div>
    <div class="table-data status-data">
      {{ $sanitize(emojiCharCode(status_emoji)) }} {{ status_text }}
    </div>
    <div div class="table-data end-time-data">
      {{ statusEndTime() }} 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const emojiData = require('emoji-datasource')

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

  /**
   * 列のクラスを返す
   */
  rowClass(): string {
    if (this.row == undefined) {
      return ""
    } 

    if (this.row % 2 == 0) {
      return "even-number-row"
    }

    return "odd-number-row"
  }


  /**
   * ステータスの終了時間を返す
   */
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

  /**
   * 絵文字の文字コードを返す
   */
  emojiCharCode(statusEmoji: string): string {
    let emojiStr = statusEmoji.slice(1).slice(0, -1);
    var filterResult: Array<any> = emojiData.filter( function( value: any ) { 
      let shortName: string = value.short_name
      return shortName == emojiStr;
    });

    if (filterResult.length < 1) {
      return ""
    }

    let unified = filterResult[0].unified
  
    return `&#x${unified};`.replace(/-/g, ";&#x")
  }

}
</script>

<style lang="sass" scoped>
@import './style/common.sass'

.table-block
  display: table;
  width: 100%;

.table-data
  display: table-cell;
  border: 1px solid #3366FF;
  padding-left: 10px;
  height: 50px;
  font-size: 20px;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;

.odd-number-row
  background-color: #CCFFFF;

.even-number-row
  background-color: #EEFFFF;

.name-data
  min-width: $table-name-width;
  width: 33%;

.status-data
  min-width: $table-status-width;
  width: 33%;

.end-time-data
  min-width: $table-start-time-width;
  width: 33%;
  
</style>