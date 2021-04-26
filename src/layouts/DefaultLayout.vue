<template>
  <v-app>
    <top-toolbar :back-img="true" :prominent="false" />
    <nav-drawer-layout />
    <v-main>
      <main-layout />
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from './MainContentLayout';
import TopToolbar from './TopToolbarLayout';
import NavDrawerLayout from './NavDrawerLayout';

export default {
  name: 'Q3DefaultLayout',
  components: {
    MainLayout,
    TopToolbar,
    NavDrawerLayout,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style></style>
