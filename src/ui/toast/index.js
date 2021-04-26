/**
 * Quick3 Toast
 * @description
 */
import vue from 'vue';

import QK3Toast from './QuickToast.vue';

const ToastConstructor = vue.extend(QK3Toast);

const DEF_OPTS = {
  type: 'default',
  iconName: '', // must icon
  duration: 2500,
  iconSize: 'medium',
};

const types = ['default', 'info', 'warn', 'success', 'fail', 'error'];
const iconSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];

const requireAll = (requireCtx) => requireCtx.keys().map(requireCtx);
const req = require.context('./icons', false, /\.svg$/);

requireAll(req);

const ToastPlugin = {
  name: 'quick-toast',
  /**
   *
   * @param {*} Vue
   * @param {Object} options
   */
  install(Vue, options) {
    this.config = initToastConfig(options);
    Vue.prototype.$toast = showToast.bind(this);

    Vue.component(ToastPlugin.name, QK3Toast);
  },
};

function initToastConfig(options) {
  let opts = Object.assign({}, DEF_OPTS);
  if (typeof options === 'string') {
    // set type
    types.includes(options) && (opts.type = options);
  } else if (typeof options === 'number') {
    opts.duration = options;
  } else if (typeof options === 'object') {
    const { type, duration, iconSize, iconName } = options;
    !!type && types.includes(type) && (opts.type = type);
    typeof duration === 'number' && (opts.duration = duration);
    !!iconName &&
      iconName.trim().length > 0 &&
      (opts.iconName = iconName.trim());

    !!iconSize && iconSizes.includes(iconSize) && (opts.iconSize = iconSize);
  }

  return opts;
}

function showToast(message, type = '', duration, cb) {
  let _type = this.config.type,
    _iconSize = this.config.iconSize,
    _iconName = this.config.iconName,
    _duration = this.config.duration,
    _message = '';

  if (typeof message === 'string') {
    _message = message;

    if (!!type && types.includes(type)) {
      _type = type;
      _iconName = type;
    }

    typeof duration === 'number' && (_duration = duration);
  } else if (typeof message === 'object') {
    typeof message.message === 'string' && (_message = message.message);

    typeof message.duration === 'number' && (_duration = message.duration);

    if (typeof message.type === 'string' && types.includes(message.type)) {
      _type = message.type;
      _iconName = message.type;
    }

    typeof message.iconName === 'string' && (_iconName = message.iconName);

    typeof message.iconSize === 'string' &&
      iconSizes.includes(message.iconSize) &&
      (_iconSize = message.iconSize);
    typeof message.iconSize === 'number' &&
      message.iconSize > 0 &&
      (_iconSize = message.iconSize);
  } else {
    throw new Error('Toast first parameter must string or object.');
  }

  const _toast = new ToastConstructor({
    props: {
      inlineMode: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String,
        default: _type,
      },
      iconSize: {
        type: String,
        default: _iconSize,
      },
      iconName: {
        type: String,
        default: _iconName,
      },
    },
    data: {
      // iconName: _iconName,
      // iconSize: _iconSize,
      // type: _type,
      show: true,
      duration: _duration,
      message: _message,
    },
  });

  let $vm = _toast.$mount().$el;

  document.body.appendChild($vm);
  if (_duration > 0) {
    setTimeout(() => {
      _toast.show = false;
      typeof cb === 'function' && cb(_toast);
    }, _duration);
  } else {
    typeof cb === 'function' && cb(_toast);
  }
}

export default ToastPlugin;
