<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/m_logo2.png">
    <Music/>
  </div>
</template>

<script>
import Music from './components/Music.vue'

export default {
  name: 'App',
  components: {
    Music
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
img { margin-top:-3% ;
      width: 18%;
          }
html{  background-image: url('./assets/bk1.jpg');}
</style>
