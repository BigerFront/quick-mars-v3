import * as types from './mutation-types';

export const initModState = async ({ commit }, uiState = {}) => {
  // init module state
};

export const toggleFullscreen = ({ commit }, { fullState }) => {
  commit(types.UPD_FULLSCREEN_SHOW, fullState);
};
