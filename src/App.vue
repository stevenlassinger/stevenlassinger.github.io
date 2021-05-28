<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/resume"></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
      document.title = this.$route.meta.title
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Your Website";
    },
  },
};
</script>