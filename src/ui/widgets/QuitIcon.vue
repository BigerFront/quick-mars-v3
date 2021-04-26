<template>
  <div>
    <v-tooltip v-if="Boolean(tip)" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          :size="size"
          v-bind="attrs"
          v-on="on"
          @click="logoutHandler"
        >
          <v-icon :size="size">{{ icons.logout }}</v-icon>
        </v-btn>
      </template>
      <span>{{ tip }}</span>
    </v-tooltip>
    <v-btn v-else :size="size" icon @click="logoutHandler">
      <v-icon :size="size">{{ icons.logout }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'QuitIcon',
  props: {
    tip: String,
    size: {
      type: [String, Number],
      default: 'medium',
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('ui', ['icons']),
  },
  methods: {
    logoutHandler() {
      console.log('logout');
    },
  },
};
</script>
<style scoped></style>
