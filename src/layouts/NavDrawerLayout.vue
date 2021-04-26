<template>
  <v-navigation-drawer
    app
    permanent
    expand-on-hover
    :right="rightPosi"
    :clipped="cliped"
  >
    <nav-menu-list />
  </v-navigation-drawer>
</template>

<script>
import NavMenuList from './navs/NavMenuList';
export default {
  name: 'NavDrawerLayout',
  props: {
    position: {
      type: String,
      default: 'left',
    },
    cliped: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    NavMenuList,
  },
  data() {
    return {};
  },
  computed: {
    rightPosi() {
      return this.position === 'right';
    },
  },
  methods: {},
};
</script>
<style scoped></style>
