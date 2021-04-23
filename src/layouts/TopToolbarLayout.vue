<template>
  <v-app-bar app :dense="toolbarDense" prominent dark flat></v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TopToolbarLayout',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('ui', ['toolbarDense']),
  },
  methods: {},
};
</script>
<style></style>
