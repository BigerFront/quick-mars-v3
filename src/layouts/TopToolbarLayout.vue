<template>
  <v-app-bar
    app
    :dense="toolbarDense"
    :prominent="prominent"
    :clipped-left="toolbarClipedLeft"
    :clipped-right="toolbarClipedRight"
    color="indigo accent-3"
    flat
  >
    <v-app-bar-nav-icon>
      <svg-icon icon-class="fastlane" size="large" />
    </v-app-bar-nav-icon>
    <v-app-bar-title
      class="qk3-title-wrap"
      :class="backImg ? 'justify-center' : ''"
    >
      <div class="app-title">
        {{ appName }}
      </div>
    </v-app-bar-title>

    <fullscreen-icon :tip="fullScreen" :normal-tip="normalScreen" />
    <quit-icon tip="退出" />
    <template v-if="backImg" v-slot:img="{ props }">
      <v-img v-bind="props" :src="toolbarBgImg"></v-img>
    </template>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

import FullscreenIcon from '@ui/widgets/FullscreenTipIcon';
import toolbarBgImg from '@img/head_bg2.png';
import QuitIcon from '@ui/widgets//QuitIcon.vue';
export default {
  name: 'TopToolbarLayout',
  components: {
    FullscreenIcon,
    QuitIcon,
  },
  props: {
    backImg: {
      type: [Boolean],
      default: true,
    },
    prominent: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      fullScreen: '全屏',
      normalScreen: '退出全屏',
      toolbarBgImg: toolbarBgImg,
    };
  },
  computed: {
    ...mapGetters(['appName']),
    ...mapGetters('ui', [
      'toolbarDense',
      'drawerPosition',
      'toolbarClipedLeft',
      'toolbarClipedRight',
    ]),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.qk3-title-wrap {
  width: 100%;
  display: flex;
  align-items: center;

  &.justify-center {
    color: #fff;
    justify-content: center;
  }

  .app-title {
    font-size: 2.75rem;
  }
}
</style>
