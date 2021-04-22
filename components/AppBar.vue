<template>
  <nav id="nav">
    <nuxt-link exact to="/">Home</nuxt-link> |
    <nuxt-link exact to="/photoshoot">Photoshoot</nuxt-link> |
    <nuxt-link exact to="/tanginabobo-trip">Sabah Trip</nuxt-link> |
    <nuxt-link exact to="/rayymondmpp">Rayymond MPP</nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.nuxt-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
