<template>
  <div>
    <v-tooltip v-if="Boolean(tip)" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          :size="size"
          v-bind="attrs"
          v-on="on"
          @click="toggleFullscreenHandle"
        >
          <v-icon :size="size">{{ fullIcon }}</v-icon>
        </v-btn>
      </template>
      <span>{{ tipText }}</span>
    </v-tooltip>
    <v-btn v-else :size="size" icon @click="toggleFullscreenHandle">
      <v-icon :size="size">{{ fullIcon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const toggleFullscreen = () => {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  const cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
    return true;
  }

  cancelFullScreen.call(doc);
  return false;
};

export default {
  name: 'FullscreenTipIcon',
  props: {
    tip: String,
    normalTip: String,
    size: {
      type: [String, Number],
      default: 'medium',
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('ui', ['fullscreenShow', 'icons']),
    fullIcon() {
      return this.fullscreenShow
        ? this.icons.fullscreenExit
        : this.icons.fullscreen;
    },
    tipText() {
      return this.fullscreenShow ? this.normalTip || '' : this.tip;
    },
  },
  methods: {
    toggleFullscreenHandle() {
      this.$store.dispatch('ui/toggleFullscreen', {
        fullState: toggleFullscreen(),
      });
    },
  },
};
</script>
<style scoped></style>
