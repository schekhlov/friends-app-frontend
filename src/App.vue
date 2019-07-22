<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'FriendsApp',

  mounted() {
    // if (this.$store.state.auth.authenticated) {
    //   this.$store.dispatch('account/find');
    // }
  },
};
</script>
