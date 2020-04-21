<template>
  <div id="app">
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
}
ul {
  list-style: none;
}
</style>
