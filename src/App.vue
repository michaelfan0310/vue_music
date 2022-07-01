<template>
  <div id="app">
    <img class="michael_favicon" src="./images/favicon2.png" >
    <img alt="Music logo" src="./images/m_logo.png">
    <MusicItem />
  </div>
</template>

<script>
import MusicItem from './components/MusicItem.vue'

export default {
  name: 'App',
  components: {
    MusicItem
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
img { 
  margin-top:-2%;
      /* margin-left: -50%; */
      width: 18%;
          }
 .michael_favicon{ 
  margin-top:-3%;
      /* margin-left: -50%; */
      width: 10%;
          }
html{  background-image: url('./images/bk1.jpg');}
</style>
