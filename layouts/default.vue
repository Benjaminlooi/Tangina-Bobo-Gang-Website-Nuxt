<template>
  <div
    id="default-layout"
    class="min-h-[100vh] dark:(bg-black text-white) transition-colors"
  >
    <ColorModeToggler />
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
