<template>
  <div>
    <header
      class="h-[calc(100vh-100px)] flex flex-col justify-center items-center"
    >
      <div class="relative">
        <h1 class="text-8xl dark:(text-white)">Photo shoot</h1>

        <div
          class="absolute pl-2 text-gray-800 capitalize text-xs dark:(text-gray-300)"
        >
          <p>We don't meet people by accident</p>
          <p>They are meant to cross path for a reason</p>
          <p class="mt-2">Date: 14/02/2022</p>
        </div>
      </div>
    </header>

    <main>
      <ThePhotoGridNew />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'new-default',
})
</script>
