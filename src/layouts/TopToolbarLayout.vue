<template>
  <v-app-bar app :dense="toolbarDense" prominent light flat>
    <v-app-bar-title class="qk3-title-wrap">
      <div class="app-title">
        {{ appName }}
      </div>
    </v-app-bar-title>
    <template v-if="backImg" v-slot:img="{ props }">
      <v-img v-bind="props" :src="toolbarBgImg"></v-img>
    </template>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import toolbarBgImg from '@img/hurcan-tag-banner.jpg';
export default {
  name: 'TopToolbarLayout',
  components: {},
  props: {
    backImg: {
      type: [Boolean],
      default: true,
    },
  },
  data() {
    return {
      toolbarBgImg: toolbarBgImg,
    };
  },
  computed: {
    ...mapGetters(['appName']),
    ...mapGetters('ui', ['toolbarDense']),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.qk3-title-wrap {
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .app-title {
    font-size: 2.75rem;
  }
}
</style>
