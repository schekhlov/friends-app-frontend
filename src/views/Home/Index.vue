<template>
  <v-layout>
    <network
      class="network"
      ref="network"
      :nodes="nodes"
      :edges="edges"
      :options="options">
    </network>
  </v-layout>
</template>

<script>

import VLayout from '@/layouts/Default.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
  },

  data() {
    return {
      nodes: [
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
      ],
      edges: [
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5},
      ],
      options: {
        nodes: {
          shape: 'circle',
        },
      },
    };
  },
};
</script>

<style>
  .network {
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    margin: 5px 0;
  }
</style>
