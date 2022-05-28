export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // https://medium.com/@jpoechill/access-your-nuxt-js-development-server-on-mobile-a4d67ac88bc6
  server: {
    port: 3060, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tangina-Bobo-Gang-Website-Nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap',
      },
    ],
    script: [
      {
        src: 'js/darkmode.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://yasminzy.com/nuxt/aos/#steps
    '@/plugins/aos.client',

    // https://splidejs.com/integration-vue-splide/
    '@/plugins/splide.client',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/ivodolenc/nuxt-gsap-module
    'nuxt-gsap-module',

    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://windicss.org/
    'nuxt-windicss',

    '@nuxt/image',

    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/nuxt-lazy-load/v/latest
    // 'nuxt-lazy-load',

    // https://www.npmjs.com/package/@forked-prs/nuxt-infinite-scroll-module
    '@forked-prs/nuxt-infinite-scroll-module',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@splidejs/vue-splide'],
  },

  // https://github.com/ivodolenc/nuxt-gsap-module
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
}
