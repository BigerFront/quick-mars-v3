import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export default {
  namespaced: true,
  actions,
  getters: {
    ...getters,
  },
  mutations,
  state: {},
};
