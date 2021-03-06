import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import home from './modules/home';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    home,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
