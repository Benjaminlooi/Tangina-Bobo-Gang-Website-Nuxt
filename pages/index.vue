<template>
  <div>
    <div class="hero">
      <div class="hero-text-container">
        <h1 ref="heroText" class="hero-text uppercase">Tangina Bobo Gang</h1>
      </div>

      <HeroSlider ref="slider" class="hero-slider" />
    </div>
  </div>
</template>

<script>
import HeroSlider from '~/components/HeroSlider.vue'
export default {
  components: { HeroSlider },
  data: () => ({
    tl: null,
  }),
  mounted() {
    this.tl = this.$gsap.timeline()

    this.tl
      .to('.hero-slider', {
        duration: 2,
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      })
      .to(this.$refs.heroText, {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power3.out',
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
}

.hero-text {
  color: #fff;
  font-size: 50px;
  transform: translateY(80px);
  opacity: 0;
}

.hero-slider {
  transform: scale(1.06);
  opacity: 0;
}
/*
.loading-screen {
  width: 100%;
  height: 100%;
  background-color: rgb(154, 155, 148);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}
.container {
  width: 100%;
  height: 95vh;
  margin: auto;
  padding: 0 3%;
  box-sizing: border-box;
}

.hero {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  letter-spacing: 0.12em;
  position: relative;

  @media only screen and (max-width: 768px) {
    align-items: flex-end;
  }
}

.hero-text-wrapper {
  width: 50%;
  z-index: 6;

  @media only screen and (max-width: 640px) {
    width: 100%;
  }

  h1 {
    display: inline-block;
  }
}

.hero-img-wrapper {
  width: 50%;
  position: absolute;
  right: 0;

  @media only screen and (max-width: 640px) {
    position: relative;
    width: 100%;
  }
} */
</style>
