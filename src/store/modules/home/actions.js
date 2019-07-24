import io from 'socket.io-client';
import Friends from './Friends';
import * as types from './mutation-types';
const socket = io();

export const init = async ({ commit }) => {
  socket.emit('get friends', 251396370);
  socket.on('friends', (userId, data) => {
    Friends.update(userId, data);
    const friends = Friends.toJSON();
    commit(types.UPDATE_FRIENDS, friends);
    console.log('Returned friends:', userId, friends);
  });
};

export const selectNode = async ({ commit }, userId) => {
  socket.emit('get friends', userId);
};



export default {
  init,
  selectNode
};
