import * as types from './mutation-types';

export const initModState = async ({ commit }, accountState = {}) => {
  // init module state
  const { nickname } = accountState;
  commit(types.UPD_NICKNAME, nickname);
};
