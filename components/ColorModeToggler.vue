<template>
  <div class="absolute top-6 right-6">
    <div class="relative">
      <input
        id="darkModeToggler"
        v-model="darkModeEnabled"
        type="checkbox"
        class="checkbox"
        @change="toggleDarkMode"
      />
      <label class="label" for="darkModeToggler">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-solid fa-sun"></i>
        <div class="ball"></div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    darkModeEnabled: false,
  }),
  mounted() {
    const darkmode = require('~/static/scripts/darkmode')

    if (darkmode.isDarkMode()) {
      this.darkModeEnabled = true
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.darkModeEnabled) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('color-theme')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.checkbox {
  opacity: 0;
  position: absolute;

  &:checked + .label .ball {
    transform: translateX(24px);
  }
}

.label {
  background-color: #111;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  transform: scale(1);

  .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}
</style>
