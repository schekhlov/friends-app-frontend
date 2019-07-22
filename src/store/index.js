import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import account from './modules/account';
import auth from './modules/auth';
import friends from './modules/friends';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    account,
    auth,
    friends,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
