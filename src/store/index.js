import Vue from 'vue';
import Vuex from 'vuex';

// Root
import * as getters from './getters';

// Modules
import account from './modules/account';
import ui from './modules/ui';

import { APP_NAME, APP_VERSION } from '@lib/global-inject.js';
import { DEFAULT_LOCALE } from './def-cnsts';

import { navmenus } from '@/router/nav-menus.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: DEFAULT_LOCALE,
    appName: APP_NAME,
    appVersion: APP_VERSION,
    navmenus: navmenus,
  },
  mutations: {},
  getters: {
    appName: (state) => state.appName || '',
    navmenus: (state) => state.navmenus || [],
    ...getters,
  },
  actions: {},
  modules: {
    acc: account,
    ui,
  },
});
