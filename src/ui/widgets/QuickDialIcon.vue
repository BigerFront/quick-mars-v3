<template>
  <v-speed-dial
    v-model="fab"
    :absolute="true"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue light-2" dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-menu</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="green" @click="toggleFullscreenHandle">
      <v-icon>{{ fullIcon }}</v-icon>
    </v-btn>
    <v-btn fab dark small color="indigo" @click="gobackHome">
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-speed-dial>
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
  name: 'QuickDialIcon',
  components: {},
  data() {
    return {
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    };
  },
  computed: {
    ...mapGetters('ui', ['fullscreenShow', 'icons']),
    fullIcon() {
      return this.fullscreenShow
        ? this.icons.fullscreenExit
        : this.icons.fullscreen;
    },
  },
  methods: {
    gobackHome() {
      this.$router.replace({ path: '/' });
    },
    toggleFullscreenHandle() {
      this.$store.dispatch('ui/toggleFullscreen', {
        fullState: toggleFullscreen(),
      });
    },
  },
};
</script>
<style scoped></style>
