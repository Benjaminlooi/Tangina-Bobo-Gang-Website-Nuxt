module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'warn',
  },
}
