<template>
  <div id="default-layout">
    <AppBar />
    <Nuxt />
  </div>
</template>

<script>
import AppBar from '~/components/AppBar.vue'
export default {
  components: { AppBar },
}
</script>

<style scoped>
#default-layout{
  overflow: hidden;
}
</style>
