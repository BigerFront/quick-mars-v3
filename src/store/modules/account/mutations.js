import * as types from './mutation-types';

export default {
  [types.UPD_NICKNAME](state, nickname = '') {
    state.nickname = nickname;
  },
};
