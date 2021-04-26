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

#app * {
  font-size: 16px;
}
</style>
