import * as types from './mutation-types';

export default {
  [types.UPD_THEME_DENSE](state, dense = false) {
    state.dense = dense;
  },
  [types.UPD_FULLSCREEN_SHOW](state, isFull) {
    state.fullscreenShow = Boolean(isFull);
  },
};
