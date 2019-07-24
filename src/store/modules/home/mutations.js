import { UPDATE_FRIENDS } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [UPDATE_FRIENDS](state, friends) {
    state.edges = friends.edges;
    state.nodes = friends.nodes;
  },
};
