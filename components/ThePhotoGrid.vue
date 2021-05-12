<template>
  <div>
    <p class>{{ gallery }}</p>
    <!-- <button @click="loadImage()">Load image</button>
    <button @click="initiateMansory()">Initiate mansory</button>
    <button @click="refreshMasonry()">Refresh mansory</button> -->
    <div class="grid" id="gallery" ref="gallery">
      <div class="grid-item" v-for="(item, index) in items" :key="index">
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

    <div ref="loader"></div>
  </div>
</template>

<script>
import { tgnbbtripMin, rayymondmpp, gangphotoshoot } from '@/misc/galleryLinks'

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
      this.initiateMansory()

      const loaderRef = this.$refs.loader

      const scene = this.$scrollmagic
        .scene({
          triggerElement: loaderRef,
          triggerHook: 'onEnter',
          offset: -50,
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
        this.msnry.layout()
      }
    },
    loadImage() {
      this.imageLoadCount += 3
      setTimeout(() => {
        this.initiateMansory()
      }, 0)
    },
    initiateMansory() {
      const Masonry = require('masonry-layout')
      const AOS = require('aos')
      const imagesLoaded = require('imagesloaded')

      const galleryRef = this.$refs.gallery

      this.msnry = new Masonry(galleryRef, {
        itemSelector: '.grid-item',
      })

      this.imgLoad = imagesLoaded(galleryRef, () => {
        console.log('done')
        this.refreshMasonry()
        AOS.refresh()
      })

      this.imgLoad.on('progress', (instance, image) => {
        console.log('loaded')
        this.refreshMasonry()
        AOS.refresh()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
/* .grid#gallery {
  display: none;
} */

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
