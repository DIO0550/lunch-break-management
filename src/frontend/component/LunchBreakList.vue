<template>
  <div>
      <div v-for="user in users" :key="user.id">
        <lunch-break-data 
          :id="user.id"
          :name="user.name"
          :startLunchBreak="'2018-01-01T02:00:00+09:00'"
        />
      </div>
  </div>
</template>

<script lang="ts">
import LunchBreakData from './LunchBreakData.vue'
export default {
  data() {
    return {
      // TODO: APIから取得した値
      users: [
        {
          id: "1",
          name: "斎藤太郎"
        },
        {
          id: "2",
          name: "加藤二郎"
        }
      ]
    }
  },
  components: {
    LunchBreakData
  },
  // TODO: API呼び出しなど
  computed: {
    
  },
}
</script>

<style>

</style>