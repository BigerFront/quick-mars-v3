import Vue from 'vue';
import SvgIcon from './SvgIcon.vue';

Vue.component('svg-icon', SvgIcon);

const requireAll = (requireCtx) => requireCtx.keys().map(requireCtx);
const req = require.context('./icons', false, /\.svg$/);

requireAll(req);
