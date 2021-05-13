<template>
  <div id="index" ref="index">
    <div class="hero">
      <div class="hero-text-container">
        <h1 ref="heroText" class="hero-text uppercase">Tangina Bobo Gang</h1>
      </div>

      <HeroSlider class="hero-slider" />
    </div>

    <div class="section-container">
      <div class="cell">
        <div ref="firstSectionBgContext" class="bg-context">
          <div class="bg"></div>
        </div>
      </div>

      <div class="cell">
        <!--  -->
      </div>
    </div>

    <div class="section-container">
      <div class="cell"></div>

      <div class="cell">
        <div ref="secondSectionBgContext" class="bg-context">
          <div class="bg"></div>
        </div>
      </div>
    </div>

    <div style="height: 400px; background: #fff; position: relative">
      really long footer
    </div>
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
      .to('.hero-slider', {
        duration: 1,
        scale: 1,
        ease: 'power2.out',
      })
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

    this.$ScrollTrigger.defaults({
      markers: true,
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
  },
}
</script>

<style lang="scss" scoped>
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
  }

  .cell {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;

    &:first-child {
      left: 0;

      .bg {
        background-image: url('~/assets/img/hero/hero1.jpg');
      }
    }

    &:nth-child(2) {
      right: 0;

      .bg {
        background-image: url('~/assets/img/hero/hero2.jpg');
      }
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
  }
}
</style>
