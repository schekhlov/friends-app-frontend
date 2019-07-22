<template>
  <div>
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
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"/>
      </button>
    </nav>

    <div class="container pt-4">
      <div class="row">
        <div class="col col-12">
          <!-- Content will be placed here -->
          <slot/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
  data() {
    return {
      menuCollapsed: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
  },
};
</script>
