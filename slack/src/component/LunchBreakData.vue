<template>
  <div class="table-block">
    <div class="table-data name-data">
      {{ display_name }}
    </div>
    <div class="table-data status-data">
      {{ status_text }}
    </div>
    <div div class="table-data end-time-data">
      {{ status_expiration }} 
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

.status-data
  width: $table-status-width;

.start-time-data
  width: $table-start-time-width;

.end-time-data
  width: $table-start-time-width;
  
</style>