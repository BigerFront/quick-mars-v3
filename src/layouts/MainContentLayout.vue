<template>
  <v-container fluid class="px-0 py-0">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </v-container>
</template>

<script>
export default {
  name: 'Q3MainContentLayout',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style></style>
