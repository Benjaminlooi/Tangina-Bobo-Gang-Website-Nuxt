<template>
  <div>
    <button @click="test()">test</button>

    <div class="relative">
      <transition name="fade">
        <div v-if="isLoading" class="loader-wrapper">
          <div class="spinner"></div>
        </div>
      </transition>

      <div class="grid dark:(bg-black)" :class="{ 'is-loaded': !isLoading }">
        <div class="grid-sizer"></div>
        <div v-for="(item, index) in items" :key="index" class="grid-item">
          <nuxt-img :src="`/images/${gallery}/${item}`" class="image" />
        </div>
      </div>
    </div>

    <InfiniteScroll
      :enough="isLoading || isLoadingMoreItems"
      class="flex justify-center w-full h-24"
      @load-more="loadManual"
      ><TheSpinner
    /></InfiniteScroll>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { gangphotoshoot } from '~/misc/galleryLinks'

let ImagesLoaded: any

export default Vue.extend({
  data: () => ({
    tester: true as Boolean,
    isLoading: true as Boolean,
    isLoadingMoreItems: false as Boolean,
    msnry: null as any,
    itemsLoaded: 15 as number,

    gallery: 'gangphotoshoot',
  }),
  computed: {
    items() {
      switch (this.gallery) {
        // case 'tgnbbtrip':
        //   return tgnbbtripMin.slice(0, this.imageLoadCount)
        // case 'rayymondmpp':
        //   return rayymondmpp.slice(0, this.imageLoadCount)
        case 'gangphotoshoot':
          return gangphotoshoot.slice(0, this.itemsLoaded)
        default:
          return []
      }
    },
    totalItems() {
      switch (this.gallery) {
        // case 'tgnbbtrip':
        //   return tgnbbtripMin.length
        // case 'rayymondmpp':
        //   return rayymondmpp.length
        case 'gangphotoshoot':
          return gangphotoshoot.length
        default:
          return 0
      }
    },
  },
  mounted() {
    const Masonry = require('masonry-layout')
    ImagesLoaded = require('imagesloaded')

    const grid = document.querySelector('.grid')

    this.msnry = new Masonry(grid, {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true,
      stagger: 30,
      visibleStyle: { transform: 'translateY(0)', opacity: 1 },
      hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
    })

    ImagesLoaded(grid, () => {
      console.log('images loaded')

      this.msnry.layout()

      setTimeout(() => {
        this.isLoading = false
      }, 500)
    })
  },
  methods: {
    test() {
      console.log(this.totalItems)
    },
    loadManual() {
      console.log('loading more...')
      console.time('loading more')

      this.isLoadingMoreItems = true

      const itemsCount = this.items.length
      const totalItemsCount = this.totalItems

      if (totalItemsCount > itemsCount) {
        const availableItemsCount = totalItemsCount - itemsCount
        if (availableItemsCount > 5) {
          this.itemsLoaded += 5
        } else {
          this.itemsLoaded += availableItemsCount
        }

        const grid = document.querySelector('.grid')

        ImagesLoaded(grid, () => {
          console.log('images loaded')

          this.msnry.reloadItems()
          this.msnry.layout()

          setTimeout(() => {
            console.timeEnd('loading more')
            this.isLoadingMoreItems = false
          }, 3000)
        })
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.grid {
  .grid-sizer,
  .grid-item {
    width: 33.33%;
  }

  .grid-item {
    opacity: 0;
    transition: opacity 0.5s ease 0.5s;
    padding: 0 3px 6px;
  }

  &.is-loaded {
    .grid-item {
      opacity: 1;
    }
  }
}

.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid #ffffff;
    border-bottom-color: #565963;
    border-radius: 50%;
    animation: animLoader 0.8s linear infinite forwards;
  }
}

@keyframes animLoader {
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
