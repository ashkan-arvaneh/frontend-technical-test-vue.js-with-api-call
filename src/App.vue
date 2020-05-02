<template>
  <div id="app" class="fadeIn">
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
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*:after,
*:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root {
  font-size: 62.5%;
  body {
    margin: 0;
    // Body font size 16px
    font-size: 1.6rem;
  }
}
body {
  background: #ddd url(./assets/egg_shell.jpg) repeat top left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1,
  a,
  p {
    margin-bottom: 20px;
  }
}
ul {
  list-style: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 0.8s;
}
</style>
