<template>
  <div
    id="the-nav-bar"
    class="menu fixed before:(absolute inset-0 rounded-[12px] shadow-md z-1) bottom-[1.5rem] fixed left-[2rem] right-[2rem] rounded-[12px] sm:(bottom-[2rem] -translate-x-1/2 left-1/2 right-auto) transform z-30"
  >
    <div
      class="relative bg-black/40 rounded-[12px] dark:(bg-white/50) z-2 transition-colors"
    >
      <ul class="flex text-white dark:(text-gray-800) transition-colors">
        <li v-for="item in pageLinks" :key="item.label" class="flex-1">
          <NuxtLink
            :to="item.link"
            class="font-bold text-[14px] pb-[2px] px-[18px] flex items-center justify-center h-[50px] cursor-pointer relative"
            >{{ item.label }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    pageLinks: [
      {
        label: 'Home',
        link: '/',
      },
      {
        label: 'Photoshoot',
        link: '/photoshoot',
      },
      {
        label: 'Sabah',
        link: '/tanginabobo-trip',
      },
      {
        label: 'MPP',
        link: '/rayymondmpp',
      },
    ],
  }),
})
</script>

<style lang="scss" scoped>
.menu {
  backdrop-filter: blur(12px);
  &::before {
    content: '';
  }

  .nuxt-link-exact-active {
    &::before {
      content: '';
      border-radius: 9999px;
      background-color: white;
      height: 3px;
      width: calc(100% - (18px * 2));
      bottom: 12px;
      position: absolute;
      transition: background-color 150ms;
    }
  }
}
</style>
