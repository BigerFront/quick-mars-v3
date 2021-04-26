<template>
  <v-list dense>
    <v-list-item v-for="item in navmenus" :key="item.title" link>
      <v-list-item-icon @click.stop="handlerRoute(item.path)">
        <v-icon size="1.35em">{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content @click.stop="handlerRoute(item.path)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavMenuList',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['navmenus']),
    ...mapGetters('ui', ['navDense', 'icons']),
  },
  methods: {
    handlerRoute(path) {
      console.log('>>>>>>', this.$route);
      if (this.$route.fullPath !== 'path') {
        this.$router.push({ path: path });
      }
    },
  },
};
</script>
<style scoped></style>
