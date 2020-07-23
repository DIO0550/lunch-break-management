<template>
  <div>
      <div v-for="user in users" :key="user.id">
        {{ user.name }}
      </div>
  </div>
</template>

<script lang="ts">
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
  // TODO: API呼び出しなど
  computed: {
    
  },
}
</script>

<style>

</style>