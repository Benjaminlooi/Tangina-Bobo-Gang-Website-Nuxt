<template>
  <div>
    <p class>{{ gallery }}</p>
    <button @click="console.log('test')">Test</button>
    <!-- <button @click="loadImage()">Load image</button>
    <button @click="initiateMansory()">Initiate mansory</button>
    <button @click="refreshMasonry()">Refresh mansory</button> -->
    <div id="gallery" ref="gallery" class="grid">
      <div v-for="(item, index) in items" :key="index" class="grid-item">
        <img
          v-if="index > 9"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          :src="require('@/assets/img/' + gallery + '/' + item)"
          class="image"
        />
        <img
          v-else
          data-aos="fade-up"
          data-aos-offset="50"
          :src="require('@/assets/img/' + gallery + '/' + item)"
          class="image"
        />
      </div>
    </div>

    <div ref="loader">Loading...</div>
  </div>
</template>

<script>
import { tgnbbtripMin, rayymondmpp, gangphotoshoot } from '@/misc/galleryLinks'
let Masonry, AOS, imagesLoaded

export default {
  name: 'ThePhotoGrid',
  props: {
    gallery: String,
  },
  data: () => ({
    msnry: null,
    imgLoad: null,
    imageLoadCount: 9,
  }),
  computed: {
    items() {
      switch (this.gallery) {
        case 'tgnbbtrip':
          return [...tgnbbtripMin]
        case 'rayymondmpp':
          return [...rayymondmpp]
        case 'gangphotoshoot':
          return gangphotoshoot.slice(0, this.imageLoadCount)
        default:
          return null
      }
    },
  },
  mounted() {
    if (process.browser) {
      Masonry = require('masonry-layout')
      AOS = require('aos')
      imagesLoaded = require('imagesloaded')

      this.initiateMansory()

      const loaderRef = this.$refs.loader

      const scene = this.$scrollmagic
        .scene({
          triggerElement: loaderRef,
          triggerHook: 'onEnter',
          offset: -30,
        })
        .on('enter', (e) => {
          this.loadImage()
        })

      this.$scrollmagic.addScene(scene)
    }
  },
  methods: {
    refreshMasonry() {
      if (this.msnry) {
        console.log('resetting Mansory...')
        this.msnry.reloadItems()
        this.msnry.layout()
      }
    },
    loadImage() {
      console.log('Loading images...')
      this.imageLoadCount += 3
      setTimeout(() => {
        this.imgLoad.off('always')
        this.checkImagesLoaded()
      }, 0)
    },
    initiateMansory() {
      const galleryRef = this.$refs.gallery

      this.msnry = new Masonry(galleryRef, {
        itemSelector: '.grid-item',
      })

      this.checkImagesLoaded()
    },
    checkImagesLoaded() {
      const galleryRef = this.$refs.gallery

      this.imgLoad = imagesLoaded(galleryRef)

      this.imgLoad.on('always', () => {
        console.log('done')
        this.refreshMasonry()
        AOS.refresh()
      })

      // this.imgLoad.on('update', (instance, image) => {
      //   console.log('loaded')
      //   this.refreshMasonry()
      //   AOS.refresh()
      // })
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
  opacity: 0;
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
  .grid-item {
    max-width: 50%;
    width: 50%;
    padding: 0 5px 10px;
  }
}
</style>
