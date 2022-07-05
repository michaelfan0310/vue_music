<template>
  <div id="app">    

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div>
					<!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link class="list-group" active-class="active" to="/Learning">Learning</router-link>
					<router-link class="list-group" active-class="active" to="/Entertainment">Entertainment</router-link>
         
        </div>
        <HeaderItem />
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
						<!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    
   
    <MusicItem />

    
  </div>
</template>

<script>
import MusicItem from './components/MusicItem.vue'
import HeaderItem from './components/HeaderItem.vue'

export default {
  name: 'App',
  components: {
    MusicItem,
    HeaderItem
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
  margin-top: 80px;  
}


.list-group{ 
  margin-right: 75%; 
  color: skyblue;  
  margin-left: 5%;
  margin-top: -23%;
}
html{  background-image: url('./images/bk1.jpg');}

 h1 {
        color: rgb(142, 139, 135);
        
    }
</style>
