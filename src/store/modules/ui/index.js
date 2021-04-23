import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

import { DEF_UI_DENSE } from '@ui/ui-cnsts.js';

export default {
  state: {
    dense: DEF_UI_DENSE,
  },
  namespaced: true,
  actions,
  getters: {
    ...getters,
  },
  mutations,
};
