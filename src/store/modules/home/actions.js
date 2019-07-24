import Friends from './Friends';
import * as types from './mutation-types';

export const init = async ({ commit }) => {
  try {
    await Friends.fetchByUserId(251396370);
    const friends = Friends.toJSON();
    commit(types.UPDATE_FRIENDS, friends);
  } catch (e) {
    console.log('Init error:', e.message);
  }
};

export const selectNode = async ({ commit }, userId) => {
  try {
    await Friends.fetchByUserId(userId);
    const friends = Friends.toJSON();
    commit(types.UPDATE_FRIENDS, friends);
  } catch (e) {
    console.log('Select node error:', e.message);
  }
};

export default {
  init,
  selectNode
};
