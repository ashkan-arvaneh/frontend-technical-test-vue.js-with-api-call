<template>
  <div class="home" v-on:click="ClosePopup(true)">
    <h1>A Frontend Technical Task - VueJS</h1>
    Public Repo:
    <a
      target="_blank"
      href="https://github.com/ashkan-arvaneh/frontend-technical-test-vue.js-with-api-call"
      >Here</a
    >
    <p>
      This is a VueJS component displaying a list of items from a public API
    </p>
    <p>
      The API call is made via an action in Vuex.
    </p>
    <person-list></person-list>
  </div>
</template>

<script>
// @ is an alias to /src
import personList from "@/components/person-list";
export default {
  name: "Home",
  data() {
    return {
      popupOpen: false
    };
  },
  components: { personList },
  methods: {
    ClosePopup(state) {
      this.$store.dispatch("personsModule/UPDATE_POPUP", state);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 2rem 1rem;
  overflow: hidden;
}
</style>
