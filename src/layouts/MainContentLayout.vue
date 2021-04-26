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
    return {
      drawerPosi: 'left',
      cliped: true,
    };
  },
  computed: {
    clipedLeft() {
      return this.position !== 'right' && this.cliped;
    },
    clipedRight() {
      return this.position !== 'right' && this.cliped;
    },
  },
  methods: {},
};
</script>
<style></style>
