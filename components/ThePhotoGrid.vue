<template>
  <div>
    <p class>{{ gallery }}</p>
    <!-- <button @click="console.log('test')">Test</button> -->
    <!-- <button @click="loadImage()">Load image</button>
    <button @click="initiateMansory()">Initiate mansory</button>
    <button @click="refreshMasonry()">Refresh mansory</button> -->
    <div id="gallery" ref="gallery" class="grid">
      <div class="grid-col-sizer"></div>
      <div v-for="(item, index) in items" :key="index" class="grid-item">
        <!-- <img
          v-if="index > 9"
          :src="`/images/${gallery}/${item}`"
          class="image"
        /> -->
        <nuxt-img :src="`/images/${gallery}/${item}`" class="image" />
      </div>
    </div>
    <InfiniteScroll v-if="!isLoading" :enough="enough" @load-more="getData()" />
  </div>
</template>

<script>
import { tgnbbtripMin, rayymondmpp, gangphotoshoot } from '@/misc/galleryLinks'
let Masonry, imagesLoaded

export default {
  name: 'ThePhotoGrid',
  props: {
    gallery: String,
  },
  data: () => ({
    grid: null,
    msnry: null,
    imageLoadCount: 9,

    isLoading: false,
    enough: false,
    page: 1,
  }),
  computed: {
    items() {
      switch (this.gallery) {
        case 'tgnbbtrip':
          return tgnbbtripMin.slice(0, this.imageLoadCount)
        case 'rayymondmpp':
          return rayymondmpp.slice(0, this.imageLoadCount)
        case 'gangphotoshoot':
          return gangphotoshoot.slice(0, this.imageLoadCount)
        default:
          return null
      }
    },
    totalItems() {
      switch (this.gallery) {
        case 'tgnbbtrip':
          return tgnbbtripMin.length
        case 'rayymondmpp':
          return rayymondmpp.length
        case 'gangphotoshoot':
          return gangphotoshoot.length
        default:
          return null
      }
    },
  },
  mounted() {
    if (process.browser) {
      Masonry = require('masonry-layout')
      imagesLoaded = require('imagesloaded')

      this.grid = document.querySelector('.grid')

      this.msnry = new Masonry(this.grid, {
        itemSelector: 'none', // select none at first
        columnWidth: '.grid-col-sizer',
        percentPosition: true,
        stagger: 30,
        visibleStyle: { transform: 'translateY(0)', opacity: 1 },
        hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
      })

      // initial items reveal
      imagesLoaded(this.grid, () => {
        this.msnry.options.itemSelector = '.grid-item'
        const items = this.grid.querySelectorAll('.grid-item')
        this.msnry.appended(items)
      })
    }
  },
  unmounted() {},
  methods: {
    async getData() {
      this.isLoading = true
      this.imageLoadCount += 3

      // Stop scroll-loader
      this.imageLoadCount >= this.totalItems && (this.enough = true)

      await this.imagesLoadedAndLayout(this.grid)
      this.isLoading = false
    },
    imagesLoadedAndLayout(elem) {
      return new Promise((resolve) => {
        imagesLoaded(elem)
          .on('progress', (imgLoad, e) => {
            this.$nextTick(() => {
              // DOM updated
              this.msnry.reloadItems()
              this.msnry.layout()
            })
          })
          .on('done', () => {
            this.msnry.once('layoutComplete', () => {
              this.msnry.reloadItems()
              this.msnry.layout()
              resolve()
            })
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
/* .grid#gallery {
  display: none;
} */

#loader {
  height: 1px;

  & .active {
    height: 30px;
  }
}

.image {
  /* opacity: 0; */
}

p {
  font-size: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1;
  margin: 0 auto 100px;
  font-weight: 500;
  position: relative;
}

.grid {
  min-height: 100vh;
}

.grid-col-sizer,
.grid-item {
  max-width: 33%;
  width: 33%;
  padding: 0 10px 20px;
  box-sizing: border-box;

  div:hover {
    opacity: 0.7;
  }

  div {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    width: 100%;
    display: block;
  }
}

@media (max-width: 768px) {
  p {
    font-size: 12px;
    margin-bottom: 24px;
  }
  .grid-col-sizer,
  .grid-item {
    max-width: 50%;
    width: 50%;
    padding: 0 5px 10px;
  }
}
</style>
