import * as types from './mutation-types';

export default {
  [types.UPD_THEME_DENSE](state, dense = false) {
    state.dense = dense;
  },
};
