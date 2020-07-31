<template>
  <div class="container">
    <div>
      {{ name }}
    </div>
    <div>
      {{ startTime() }} 
    </div>
    <div>
      {{ endTime() }} 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LunchBreakData extends Vue {
  @Prop({ type: Number, required: true })
  id?: number;

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
.container
  background-color: red;
  
</style>