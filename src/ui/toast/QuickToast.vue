<template>
  <div v-if="show" id="__QK3Toast__" class="qk3-toast">
    <div v-if="inlineMode" class="toast-row-wrap" :class="_typClz">
      <div class="left">
        <svg :class="'toast-icon ' + sizeClass" aria-hidden="true">
          <use :xlink:href="getIconName" />
        </svg>
      </div>
      <div class="right">
        <div class="content">{{ message }}</div>
      </div>
    </div>
    <div v-if="!inlineMode" class="toast-column-wrap"></div>
  </div>
</template>

<script>
export default {
  name: 'QuickToast',
  components: {},
  props: {
    inlineMode: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      iconName: '',
      show: true,
      duration: 1500,
      message: '',
      type: 'info',
      iconSize: 'medium',
    };
  },
  computed: {
    getIconName() {
      return `#icon-${this.iconName || this.type}`;
    },
    sizeClass() {
      let sizeClz = 'svg--size-medium';
      switch (this.size) {
        case 'xsmall':
          sizeClz = 'svg--size-xsmall';
          break;
        case 'small':
          sizeClz = 'svg--size-small';
          break;
        case 'large':
          sizeClz = 'svg--size-large';
          break;
        case 'xlarge':
          sizeClz = 'svg--size-xlarge';
          break;
        default:
          sizeClz = 'svg--size-medium';
          break;
      }

      return sizeClz;
    },
    typClz() {
      let _typClz = '';
      switch (this.type) {
        case 'info':
          _typClz = 'toast-theme-info';
          break;
        case 'warn':
          _typClz = 'toast-theme-warn';
          break;
        case 'fail':
          _typClz = 'toast-theme-fail';
          break;
        case 'success':
          _typClz = 'toast-theme-success';
          break;
        default:
          _typClz = '';
          break;
      }
      return _typClz;
    },
  },
  methods: {
    getIconSize() {},
  },
};
</script>
<style lang="scss" scoped>
.qk3-toast {
  position: fixed;
  z-index: 99999;
  min-width: calc(100% - 77px);
  max-width: calc(100% - 37px);
  left: 50%;
  top: 50%;
  background: rgb(233, 233, 235);
  padding: 8px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  animation: show-toast 0.2s;
  color: #909399;
  overflow: hidden;
  display: flex;
  align-items: center;
  word-break: break-all;

  @media only screen and (max-width: 600px) {
    min-width: calc(100% - 77px);
    max-width: calc(100% - 37px);
  }
  @media only screen and (min-width: 600px) {
    min-width: calc(70% - 130px);
    max-width: calc(70% - 30px);
  }

  @media only screen and (min-width: 768px) {
    min-width: calc(50% - 130px);
    max-width: calc(50% - 30px);
  }

  @media only screen and (min-width: 992px) {
    min-width: calc(40% - 30px);
    max-width: calc(40% - 30px);
  }
}

@keyframes show-toast {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

div.toast-row-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
}

div.toast-column-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toast-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;

  &.svg--size-xsmall {
    width: 1.05em;
    height: 1.05em;
    vertical-align: -0.15em;
  }

  &.svg--size-small {
    width: 1.4em;
    height: 1.4em;
    vertical-align: -0.15em;
  }

  &.svg--size-medium {
    width: 1.75em;
    height: 1.75em;
    vertical-align: -0.25em;
  }

  &.svg--size-large {
    width: 2.25em;
    height: 2.25em;
    vertical-align: -0.55em;
  }

  &.svg--size-xlarge {
    width: 2.75em;
    height: 2.75em;
    vertical-align: -0.75em;
  }
}
</style>
