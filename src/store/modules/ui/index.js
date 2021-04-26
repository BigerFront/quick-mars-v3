import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

import { DEF_UI_DENSE } from '@ui/ui-cnsts.js';
import { MDI_ICONS } from '../../def-cnsts';

export default {
  state: {
    dense: DEF_UI_DENSE,
    navDense: DEF_UI_DENSE,
    icons: MDI_ICONS,
    fullscreenShow: false,
    drawerPosition: 'left', // left or right
    drawerCliped: true,
  },
  namespaced: true,
  actions,
  getters: {
    navDense: (state) => !!state.navDense,
    icons: (state) => state.icons,
    fullscreenShow: (state) => state.fullscreenShow,
    drawerPosition: (state) => state.drawerPosition,
    toolbarClipedLeft: (state) =>
      state.drawerPosition !== 'right' && state.drawerCliped,
    toolbarClipedRight: (state) =>
      state.drawerPosition === 'right' && state.drawerCliped,
    ...getters,
  },
  mutations,
};
