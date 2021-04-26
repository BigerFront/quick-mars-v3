<template>
  <div v-if="show" id="__QK3Toast__" class="qk3-toast" :class="typClz">
    <div v-if="inlineMode" class="toast-row-wrap">
      <div class="left">
        <svg :class="'toast-icon ' + sizeClass" aria-hidden="true">
          <use :xlink:href="getIconName" />
        </svg>
      </div>
      <div class="right">
        <div class="content">{{ message }}</div>
      </div>
      <div class="toast-border"></div>
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
    type: {
      type: String,
      default: 'info',
    },
    iconSize: {
      type: String,
      default: 'medium',
    },
    iconName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // iconName: '',
      // type: 'info',
      // iconSize: 'medium',

      show: true,
      duration: 1500,
      message: '',
    };
  },
  computed: {
    getIconName() {
      return `#icon-${this.iconName || this.type || 'default'}`;
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
      switch (this.type) {
        case 'info':
          return 'toast-theme-info';
        case 'alert':
          return 'toast-theme-warn outlined';
        case 'warn':
          return 'toast-theme-warn outlined';
        case 'fail':
          return 'toast-theme-fail';
        case 'error':
          return 'toast-theme-fail';
        case 'success':
          return 'toast-theme-success';

        default:
          return '';
      }
    },
  },
  mounted() {
    console.log('inlineMode>>', this.inlineMode);
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
  transform: translate(-50%, -50%);
  animation: show-toast 0.2s;
  color: #909399;
  overflow: hidden;
  display: flex;
  align-items: center;
  word-break: break-all;
  padding-left: $toast-border-width * 3;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: $toast-border-width * 1.5;
  border-bottom-left-radius: $toast-border-width * 1.5;

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

  &.toast-theme-info {
    color: $toast-info-color;
    background: rgba($toast-info-color, 0.1);

    &.outlined {
      border: thin solid rgba($toast-info-color, 0.26);
      border-left: 0px;
    }

    .toast-border {
      background: rgba($toast-info-color, 1);
    }
  }

  &.toast-theme-warn {
    color: $toast-warn-color;
    background: rgba($toast-warn-color, 0.1);

    &.outlined {
      border: thin solid rgba($toast-warn-color, 0.26);
      border-left: 0px;
    }

    .toast-border {
      background: rgba($toast-warn-color, 1);
    }
  }
  &.toast-theme-success {
    color: $toast-success-color;
    background: rgba($toast-success-color, 0.1);

    &.outlined {
      border: thin solid rgba($toast-success-color, 0.26);
      border-left: 0px;
    }

    .toast-border {
      background: rgba($toast-success-color, 1);
    }
  }

  &.toast-theme-fail {
    color: $toast-error-color;
    background: rgba($toast-error-color, 0.1);

    &.outlined {
      border: thin solid rgba($toast-error-color, 0.26);
      border-left: 0px;
    }

    .toast-border {
      background: rgba($toast-error-color, 1);
    }
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

  .right {
    flex: 1 1 auto;
    padding-left: 8px;
  }

  .toast-border {
    border: none;
    border-top-left-radius: $toast-border-width * 1.5;
    border-bottom-left-radius: $toast-border-width * 1.5;
    left: 0px;
    height: 100%;
    width: $toast-border-width * 1.5;
    content: '';
    position: absolute;
    background: transparent;
  }
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
