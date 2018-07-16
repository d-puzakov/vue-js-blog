<template>
  <div id="app">
  <NavComp></NavComp>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import NavComp from '@/components/parts/Nav'
export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
