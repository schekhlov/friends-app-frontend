<template>
  <v-layout>
    <network
      class="network"
      ref="network"
      :nodes="nodes"
      :edges="edges"
      :options="options"
      @select-node="selectNode()">
    </network>
  </v-layout>
</template>

<script>

import VLayout from '@/layouts/Default.vue';

export default {

  name: 'HomeIndex',

  components: {
    VLayout,
  },

  computed: {
    nodes() {
      return this.$store.state.home.nodes
    },
    edges() {
      return this.$store.state.home.edges
    },
    options() {
      return this.$store.state.home.options
    }
  },

  methods: {
    selectNode() {
      const node = this.$refs.network.getSelection().nodes[0];
      this.$store.dispatch('home/selectNode', node);
    },
  },

  mounted() {
    this.$store.dispatch('home/init');
  },
};
</script>

<style>
  body, html {
    width: 100%;
    height: 100%;
  }
  .network {
    display: flex;
    height: 100%;
    width: 100%;
  }
</style>
