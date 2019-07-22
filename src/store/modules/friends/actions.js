import axios from 'axios';
// import Vue from 'vue';
// import store from '@/store';
// import * as types from './mutation-types';

export const init = async ({ commit }) => {
  try {
    const response = await axios.get('http://91.206.14.34/api/v1/friends');
    if (response.data && response.data.items) {
      const friends = response.data.items;
      console.log('>>> friends:', friends);
      // commit(types.CHECK);
    }
  } catch (e) {
    console.log('Error:', e.message);
  }
};

export default {
  init,
};
