<template>
  <div>
    <p class>{{ gallery }}</p>
    <div class="grid" id="gallery" ref="gallery">
      <div class="grid-item" v-for="(item, index) in items" :key="index">
        <img
          v-if="index > 8"
          data-aos="fade-up"
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
  </div>
</template>

<script>
// import Masonry from 'masonry-layout'
// import imagesLoaded from 'imagesloaded'
// import AOS from 'aos'
import { tgnbbtripMin, rayymondmpp, gangphotoshoot } from '@/misc/galleryLinks'

export default {
  name: 'ThePhotoGrid',
  props: {
    gallery: String,
  },
  data: () => ({
    msnry: null,
    imgLoad: null,
  }),
  computed: {
    items() {
      switch (this.gallery) {
        case 'tgnbbtrip':
          return [...tgnbbtripMin]
        case 'rayymondmpp':
          return [...rayymondmpp]
        case 'gangphotoshoot':
          return [...gangphotoshoot]
        default:
          return null
      }
    },
  },
  mounted() {
    if (process.browser) {
      const AOS = require('aos')
      const imagesLoaded = require('imagesloaded')
      const Masonry = require('masonry-layout')

      const galleryRef = this.$refs.gallery

      this.msnry = new Masonry(galleryRef, {
        itemSelector: '.grid-item',
      })

      this.imgLoad = imagesLoaded(galleryRef, () => {
        this.refreshMasonry()
        // galleryRef.style.display = 'block'
        AOS.refresh()
      })

      this.imgLoad.on('progress', (instance, image) => {
        this.refreshMasonry()
      })
    }
  },
  methods: {
    refreshMasonry() {
      if (this.msnry) {
        this.msnry.layout()
      }
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
