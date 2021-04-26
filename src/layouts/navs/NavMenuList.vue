<template>
  <v-list dense>
    <v-list-item v-for="item in navmenus" :key="item.title" link>
      <v-list-item-icon>
        <v-icon size="1.35em">{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
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
  methods: {},
};
</script>
<style scoped></style>
