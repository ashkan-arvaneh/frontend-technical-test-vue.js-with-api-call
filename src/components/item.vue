<template>
  <div>{{ data }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "item",

  data() {
    return {
      loading: true
    };
  },

  computed: {
    ...mapState("newReleases", ["data"])
  },

  created() {
    this.$store.dispatch("newReleases/GET_LIST").then(() => {});
  }
};
</script>

<style lang="scss" scoped></style>
