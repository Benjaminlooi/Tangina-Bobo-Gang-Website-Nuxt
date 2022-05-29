<template>
  <div>
    <p class>{{ gallery }}</p>
    <!-- <button @click="console.log('test')">Test</button> -->
    <!-- <button @click="loadImage()">Load image</button>
    <button @click="initiateMansory()">Initiate mansory</button>
    <button @click="refreshMasonry()">Refresh mansory</button> -->
    <div id="gallery" ref="gallery" class="masonry-grid">
      <div class="masonry-grid-col-sizer"></div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="masonry-grid-item"
      >
        <nuxt-img :src="`/images/${gallery}/${item}`" />
      </div>
    </div>
    <InfiniteScroll :enough="enough" class="h-[8rem]" @load-more="getData()"
      ><TheSpinner />
    </InfiniteScroll>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { tgnbbtripMin, rayymondmpp, gangphotoshoot } from '@/misc/galleryLinks'
let Masonry: any, imagesLoaded: any

export default Vue.extend({
  name: 'ThePhotoGrid',
  props: {
    gallery: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    grid: null as Element | null,
    msnry: null as any,
    imageLoadCount: 9,

    isLoading: false,
    enough: false,
  }),
  computed: {
    items(): string[] {
      switch (this.gallery) {
        case 'tgnbbtrip':
          return tgnbbtripMin.slice(0, this.imageLoadCount)
        case 'rayymondmpp':
          return rayymondmpp.slice(0, this.imageLoadCount)
        case 'gangphotoshoot':
          return gangphotoshoot.slice(0, this.imageLoadCount)
        default:
          return []
      }
    },
    totalItemsCount(): number {
      switch (this.gallery) {
        case 'tgnbbtrip':
          return tgnbbtripMin.length
        case 'rayymondmpp':
          return rayymondmpp.length
        case 'gangphotoshoot':
          return gangphotoshoot.length
        default:
          return 0
      }
    },
  },
  mounted() {
    Masonry = require('masonry-layout')
    imagesLoaded = require('imagesloaded')

    this.grid = document.querySelector('.masonry-grid')

    this.msnry = new Masonry(this.grid, {
      itemSelector: 'none', // select none at first
      columnWidth: '.masonry-grid-col-sizer',
      percentPosition: true,
      // stagger: 0,
      // visibleStyle: { transform: 'translateY(0)', opacity: 1 },
      // hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
    })

    // initial items reveal
    imagesLoaded(this.grid, () => {
      if (this.grid) {
        this.msnry.options.itemSelector = '.masonry-grid-item'
        const items = this.grid.querySelectorAll('.masonry-grid-item')
        this.msnry.appended(items)
        this.msnry.layout()
      }
    })
  },
  methods: {
    async getData() {
      if (!this.isLoading) {
        if (this.grid) {
          this.isLoading = true

          const totalItemsCount = this.totalItemsCount
          const itemsCount = this.imageLoadCount

          if (totalItemsCount > itemsCount) {
            const availableItemsCount = totalItemsCount - itemsCount
            if (availableItemsCount > 3) {
              this.imageLoadCount += 3
            } else {
              this.imageLoadCount += availableItemsCount
            }

            await this.imagesLoadedAndLayout(this.grid)
          }
        } else {
          // Stop scroll-loader
          this.enough = true
        }

        this.isLoading = false
      }
    },
    imagesLoadedAndLayout(elem: Element) {
      return new Promise<void>((resolve) => {
        imagesLoaded(elem)
          // .on('progress', (imgLoad, e) => {
          //   this.$nextTick(() => {
          //     // DOM updated
          //     this.msnry.reloadItems()
          //     this.msnry.layout()
          //   })
          // })
          .on('done', () => {
            this.msnry.reloadItems()
            this.msnry.layout()
            resolve()
          })
      })
    },
  },
})
</script>

<style lang="scss" scoped>
p {
  font-size: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1;
  margin: 0 auto 100px;
  font-weight: 500;
  position: relative;
}

.masonry-grid {
  /* min-height: 100vh; */

  .masonry-grid-col-sizer,
  .masonry-grid-item {
    width: calc((100% / 3) - 20px);
    margin: 0 10px 20px;
  }
}

@media (max-width: 768px) {
  p {
    font-size: 12px;
    margin-bottom: 24px;
  }

  .masonry-grid {
    .masonry-grid-col-sizer,
    .masonry-grid-item {
      width: calc((100% / 2) - 10px);
      margin: 0 5px 10px;
    }
  }
}
</style>
