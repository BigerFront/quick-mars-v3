import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

import { DEF_UI_DENSE } from '@ui/ui-cnsts.js';
import { MDI_ICONS } from '../../def-cnsts';

export default {
  state: {
    dense: DEF_UI_DENSE,
    icons: MDI_ICONS,
  },
  namespaced: true,
  actions,
  getters: {
    icons: (state) => state.icons,
    ...getters,
  },
  mutations,
};
