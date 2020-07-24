<template>
  <div class="container">
    <div>
      {{ name }}
    </div>
    <div>
      {{ startTime }} 
    </div>
    <div>
      {{ endTime }} 
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    name: {
      type: String,        
      default: 'No Name',  
      required: true,       
    },
    startLunchBreak: {
      type: String,
      defalt: null,
      required: false
    }
  },
  methods: {
    startTime() {
      if (this.startLunchBreak) {
        return "休憩前"
      }

      return this.name
    },
    endTime() {
      if (this.startLunchBreak) {
        return "休憩前"
      }
      let endDate = new Date(this.startLunchBreak);
      // １時間後
      endDate.setHours(endDate.getHours() + 1);
      let endTime = ('0' + endDate.getHours()).slice(-2) + ':' + ('0' + endDate.getMinutes()).slice(-2) + ':' + ('0' + endDate.getSeconds()).slice(-2)
    }
  },
}
</script>

<style lang="sass" scoped>
  .container
    border: medium dashed green;
    display: flexbox;
</style>