<template>
  <div id="default-layout">
    <Nuxt />
    <TheNavbar />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
export default {
  components: { TheNavbar },
}
</script>

<style scoped>
#default-layout {
  overflow: hidden;
}
</style>
