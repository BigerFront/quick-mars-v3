<template>
  <v-app>
    <v-main>
      <v-container dense class="px-0 py-0 mx-0">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
        <quick-dial-icon v-if="true" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import QuickDialIcon from '@ui/widgets/QuickDialIcon.vue';

export default {
  name: 'DashboradLayout',
  components: {
    QuickDialIcon,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeDestroy() {},
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

ol,
ul,
li {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

::-webkit-scrollbar {
  width: 4px;
  height: 0.3rem;
  background: hsla(0, 0%, 100%, 0.6);
}

::-webkit-scrollbar-track {
  border-radius: 0;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: rgba(95, 95, 95, 0.4);
  transition: all 0.2s;
  border-radius: 0.1rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(95, 95, 95, 0.7);
}

/* firefox */
* {
  scrollbar-width: thin;
  scrollbar-width: none;
}
/* #app * {
  font-size: 26px;
} */
</style>
