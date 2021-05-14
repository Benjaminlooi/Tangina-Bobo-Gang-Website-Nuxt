<template>
  <splide :options="options" :transition="transition">
    <splide-slide v-for="slide in slides" :key="slide.src">
      <div class="visual-context">
        <div
          :src="slide.src"
          alt="slide.alt"
          :style="{ backgroundImage: `url(${slide.src})` }"
          class="splide-image"
        />
      </div>
    </splide-slide>
  </splide>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      options: {
        type: 'fade',
        autoplay: true,
        rewind: true,
        interval: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        height: '100vh',
        width: '100vw',
      },
      slides: this.createSlides(),
      sliderTimeline: null,
    }
  },

  methods: {
    createSlides(length = 3, sig = 0) {
      return Array.apply(null, Array(length)).map((value, index) => {
        index = sig || index

        return {
          src: require(`~/assets/img/hero/hero${index + 1}.jpg`),
          alt: `Tangina Bobo Image ${index}`,
        }
      })
    },
    transition(Splide, Components) {
      let slides
      const vm = this
      return {
        /**
         * Optional. Called when the component is mounted.
         */
        mount() {
          slides = Components.Elements.slides
        },

        /**
         * Required. Called just before the transition starts.
         */
        start(destIndex, newIndex, prevIndex, coord, done) {
          let clipFrom, clipTo
          const DIRECTION = 1
          const $slidePrev = slides[prevIndex]
          const $slideNext = slides[newIndex]
          const $slideNextVisual = $slideNext.querySelector('.visual-context')

          const coordinates = $slidePrev.getBoundingClientRect()

          if (DIRECTION > 0) {
            clipFrom = `rect(0px,0px,${coordinates.height}px,0px)`
            clipTo = `rect(0px,${coordinates.width}px,${coordinates.height}px,0px)`
          } else {
            clipFrom = `rect(0px,${coordinates.width}px,${coordinates.height}px,${coordinates.width}px)`
            clipTo = `rect(0px,${coordinates.width}px,${coordinates.height}px,0px)`
          }

          vm.sliderTimeline = vm.$gsap.timeline()

          vm.sliderTimeline
            .set($slideNext, {
              opacity: 1,
              zIndex: 3,
              clip: clipFrom,
            })
            .set($slideNextVisual, { scale: 1.14 })
            .set($slidePrev, { opacity: 1, zIndex: 1 })
            .to($slideNext, {
              duration: 0.7,
              clip: clipTo,
              ease: 'power3.inOut',
              delay: 0.05,
            })
            .to(
              $slideNextVisual,
              {
                duration: 1.2,
                scale: 1,
                ease: 'power2.out',
              },
              '<'
            )
            .set($slideNext, {
              opacity: 1,
              zIndex: 1,
              clearProps: 'clip',
            })
            .set($slideNextVisual, { clearProps: 'scale' })
            .set($slidePrev, {
              opacity: 0,
              zIndex: 0,
              clearProps: 'clip',
            })
            .call(() => {
              done()
            })
        },

        /**
         * Optional. Called when Splide is destroyed.
         */
        destroy() {},
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.splide-image {
  left: 0;
  position: absolute;
  top: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  display: block;
  height: 100%;
  width: 100%;
}

.visual-context {
  height: 100%;
  position: relative;
  transform-origin: center center;
  will-change: transform;
}
</style>
