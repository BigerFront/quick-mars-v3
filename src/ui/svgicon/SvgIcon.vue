<template>
  <svg :class="'svg-icon ' + sizeClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      require: true,
    },
    className: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
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
    svgClass() {
      return !this.className ? '' : ` ${this.className}`;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
/** windows:96dp apple:72dp , zh use:pt ;en:em; 五号字:14px-->0.875em */
.svg-icon {
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
