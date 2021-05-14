<template>
  <div id="index" ref="index">
    <div ref="hero" class="hero">
      <div ref="heroTextContainer" class="hero-text-container">
        <h1 ref="heroText" class="hero-text uppercase">Tangina Bobo Gang</h1>
      </div>

      <HeroSlider class="hero-slider" />
    </div>

    <div class="section-container sabah-trip">
      <div class="cell left">
        <div ref="firstSectionBgContext" class="bg-context">
          <div class="bg"></div>
        </div>
      </div>

      <div class="cell right">
        <nuxt-link exact to="/tanginabobo-trip" class="gallery-showcase">
          <div class="visual-context">
            <h2 class="visual-text">
              <p>Sabah trip</p>
              <button>View gallery</button>
            </h2>
            <div class="visual"></div></div
        ></nuxt-link>
      </div>
    </div>

    <div class="section-container photoshoot">
      <div class="cell left">
        <nuxt-link exact to="/photoshoot" class="gallery-showcase">
          <div class="visual-context">
            <h2 class="visual-text">
              <p>Photoshoot</p>
              <button>View gallery</button>
            </h2>
            <div class="visual"></div></div
        ></nuxt-link>
      </div>

      <div class="cell right">
        <div ref="secondSectionBgContext" class="bg-context">
          <div class="bg"></div>
        </div>
      </div>
    </div>

    <div class="section-container mpp">
      <div class="cell left">
        <div ref="thirdSectionBgContext" class="bg-context">
          <div class="bg"></div>
        </div>
      </div>

      <div class="cell right">
        <nuxt-link exact to="/rayymondmpp" class="gallery-showcase">
          <div class="visual-context">
            <h2 class="visual-text">
              <p>Jerome MPP</p>
              <button>View gallery</button>
            </h2>
            <div class="visual"></div></div
        ></nuxt-link>
      </div>
    </div>

    <!-- 3 -->
  </div>
</template>

<script>
import HeroSlider from '~/components/HeroSlider.vue'
export default {
  components: { HeroSlider },
  data: () => ({
    landingTl: null,
    indexTl: null,
  }),
  mounted() {
    this.landingTl = this.$gsap.timeline()

    this.landingTl
      .to(
        '.hero-slider',
        {
          duration: 1,
          scale: 1,
          ease: 'power2.out',
        },
        '+=0.3'
      )
      .to(
        '.hero-slider',
        {
          duration: 2,
          opacity: 1,
          ease: 'power2.inOut',
        },
        '-=1.5'
      )
      .to(this.$refs.heroText, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      })
      .to(this.$refs.heroTextContainer, {
        y: '300%',
        scrollTrigger: {
          trigger: this.$refs.hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
          markers: false,
        },
      })

    this.$ScrollTrigger.defaults({
      markers: false,
    })

    this.indexTl = this.$gsap.timeline()

    this.indexTl.fromTo(
      '.bg',
      { scale: 1.4 },
      {
        scale: 1,
        ease: 'cubic.out',
        scrollTrigger: {
          id: 'bg',
          trigger: this.$refs.index,
          start: 'top top',
          scrub: 3,
          markers: false,
        },
      }
    )

    this.$ScrollTrigger.create({
      trigger: this.$refs.firstSectionBgContext,
      pin: true,
      scrub: 0,
      markers: false,
      pinSpacing: false,
    })

    this.$ScrollTrigger.create({
      trigger: this.$refs.secondSectionBgContext,
      pin: true,
      scrub: 0,
      markers: false,
      pinSpacing: false,
    })

    this.$ScrollTrigger.create({
      trigger: this.$refs.thirdSectionBgContext,
      pin: true,
      scrub: 0,
      markers: false,
      pinSpacing: false,
    })
  },
}
</script>

<style lang="scss" scoped>
#index {
  overflow-x: hidden;
}

.hero {
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.hero-text-container {
  left: 0;
  position: absolute;
  top: 50%;
  display: block;
  height: 50px;
  overflow: hidden;
  text-align: center;
  transform: translateY(-50%);
  will-change: transform;
  width: 100%;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }

  @media only screen and (max-width: 600px) {
    height: 25px;
  }
}

.hero-text {
  color: #fff;
  font-size: 50px;
  transform: translateY(80px);
  opacity: 0;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
}

.hero-slider {
  transform: scale(1.06);
  opacity: 0;
}

.section-container {
  display: flex;
  position: relative;
  background: #fff;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
    width: 100%;

    @media only screen and (max-width: 600px) {
      padding-top: unset;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  &.sabah-trip {
    .bg {
      background-image: url('~/assets/img/gallary-showcase/sabah-trip.jpg');
    }

    .visual {
      background-image: url('~/assets/img/gallary-showcase/sabah-trip-2.jpg');
    }
  }

  &.photoshoot {
    right: 0;

    .visual-text {
      color: #fff !important;
    }

    .bg {
      background-image: url('~/assets/img/gallary-showcase/photoshoot.jpg');
    }

    .visual {
      background-image: url('~/assets/img/gallary-showcase/photoshoot-2.jpg');
    }
  }

  &.mpp {
    right: 0;

    .visual-text {
      color: #fff !important;
    }

    .bg {
      background-image: url('~/assets/img/gallary-showcase/jerome-mpp.jpg');
    }

    .visual {
      background-image: url('~/assets/img/gallary-showcase/jerome-mpp.jpg');
    }
  }

  .cell {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;

    &:first-child {
      left: 0;
    }

    &:nth-child(2) {
      right: 0;
    }

    @media only screen and (max-width: 600px) {
      width: 100%;
      position: static;
    }

    .bg-context {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;

      .bg {
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
    }

    .gallery-showcase {
      align-items: flex-end;
      display: flex;
      height: 100%;
      padding: 110px;
      position: relative;
      width: 100%;

      @media only screen and (max-width: 768px) {
        padding: 70px;
      }

      @media only screen and (max-width: 600px) {
        padding: 25px;
      }

      .visual-context {
        width: 100%;
        position: relative;

        &::before {
          display: block;
          content: '';
          width: 100%;
          padding-top: 114.2405063291%;
        }

        .visual-text {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          color: #000;
          z-index: 1;
          text-align: center;

          p {
            font-weight: bold;
            text-transform: uppercase;
          }

          button {
            margin-top: 30px;
            text-decoration: underline;
          }
        }

        .visual {
          top: 0;
          left: 0;
          position: absolute;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50%;
          display: block;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
