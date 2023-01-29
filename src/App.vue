<template>
  <div id="app">
    <strong>{{title}}</strong>
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      test: '321'
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
