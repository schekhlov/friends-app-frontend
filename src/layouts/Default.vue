<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link
        :to="{ name: 'home.index' }"
        class="navbar-brand"
      >
        Friends App
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
      >
        <span class="navbar-toggler-icon"/>
      </button>
    </nav>

    <slot/>

  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
};
</script>

<style>
  .wrapper {
    height: 100%;
    width: 100%;
  }
</style>
