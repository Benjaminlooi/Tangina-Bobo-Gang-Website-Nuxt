<template>
  <div>
    <div class="hero">
      <div class="hero-text-container">
        <h1 class="hero-text uppercase">Tangina Bobo Gang</h1>
      </div>

      <HeroSlider />
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
  mounted() {},
}
</script>

<style lang="scss" scoped>
.hero-text-container {
  left: 0;
  position: absolute;
  top: 50%;
  display: block;
  height: 80px;
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
