<template>
  <div>
    <div class="container">
      <div class="hero">
        <div class="hero-text-wrapper relative">
          <p class="text-xs uppercase" ref="subtitle">Diary</p>
          <h1 class="text-4xl font-bold uppercase" ref="title">
            Tanginabobo Gang
          </h1>
        </div>
        <div class="hero-img-wrapper">
          <img src="@/assets/img/hero.jpeg" alt ref="image" />
        </div>
      </div>
    </div>
    <div class="loading-screen" ref="loadingScreen"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tl: null,
  }),
  mounted() {
    const loadingScreenRef = this.$refs.loadingScreen
    const titleRef = this.$refs.title
    const subtitleRef = this.$refs.subtitle
    const imageRef = this.$refs.image

    this.tl = this.$gsap.timeline()

    this.tl
      .from(titleRef, {
        y: 130,
        opacity: 0,
        rotation: -15,
        duration: 1.5,
        ease: 'power1.out',
      })
      .from(titleRef, {
        right: 0,
        xPercent: 50,
        duration: 1.5,
        ease: 'power1.inOut',
      })
      .from(subtitleRef, { opacity: 0 }, '-=0.8')
      .to(loadingScreenRef, { height: 0, duration: 1.4 }, '-=1')
      .set(loadingScreenRef, { display: 'none' })
      .from(
        imageRef,
        { opacity: 0, duration: 1, ease: 'power1.inOut' },
        '-=0.8'
      )
  },
}
</script>

<style lang="scss" scoped>
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
}
</style>
