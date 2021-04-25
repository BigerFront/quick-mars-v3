/**
 * @description toast(options,type,duration,cb)
 * @param options: String |Object[message,duration,type,inlineMode,iconSize]
 * @property iconSize:[xsmall,small,medium,large,xlarge,or number of icon]
 * @property inlineMode:[boolean] the toast layout flex row or column ,default row
 *
 * @param type:[info,warn,fail,success,... extends icons] if options contains type , will override this parameter type
 * @param duration : <=0 allways show. duration > 0 will hide at duration ms later.
 * @param cb: [function], callback function
 *
 */

import vue from 'vue';

import QK3Toast from './QuickToast.vue';

const ToastConstructor = vue.extend(QK3Toast);

function showToast(options, type = 'info', duration = 2500, cb) {
  let _message = '';
  let _duration = duration;
  let _typ = type;
  let _iconSize = 'medium';
  let _iconName = '';

  if (typeof options === 'object') {
    typeof options.message === 'string' && (_message = options.message);
    typeof options.duration === 'number' && (_duration = options.duration);
    typeof options.type === 'string' && (_typ = options.type);

    (typeof options.iconSize === 'string' ||
      typeof options.iconSize === 'number') &&
      (_iconSize = options.iconSize);
    typeof options.iconName === 'string' && (_iconName = options.iconName);
  } else if (typeof options === 'string') {
    _message = options;
  } else {
    throw new Error('Toast first Parameter only accept String or Object');
  }

  const _toast = new ToastConstructor({
    data() {
      return {
        iconName: _iconName,
        show: true,
        type: _typ,
        duration: _duration,
        message: _message,
        iconSize: _iconSize,
      };
    },
  });

  //   console.log('>>>>>>>>>>>>>', options);
  if (typeof options === 'object' && typeof options.inlineMode === 'boolean') {
    _toast.inlineMode = options.inlineMode;
  }

  let $vm = _toast.$mount().$el;

  document.body.appendChild($vm);

  if (duration > 0) {
    setTimeout(() => {
      //   _toast.show = false;
      typeof cb === 'function' && cb();
    }, duration);
  } else {
    typeof cb === 'function' && cb();
  }
}

showToast.install = (Vue) => {
  Vue.prototype.$toast = showToast;
};

const requireAll = (requireCtx) => requireCtx.keys().map(requireCtx);
const req = require.context('./icons', false, /\.svg$/);

requireAll(req);

export default showToast;
