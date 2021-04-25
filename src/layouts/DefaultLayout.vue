<template>
  <v-app>
    <top-toolbar :back-img="false" />
    <v-main>
      <main-layout />
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from './MainContentLayout';
import TopToolbar from './TopToolbarLayout';

export default {
  name: 'Q3DefaultLayout',
  components: {
    MainLayout,
    TopToolbar,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style></style>
