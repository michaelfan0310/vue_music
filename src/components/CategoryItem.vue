<template>
	<div class="categoryItem card">
		<h3>{{title}}</h3>
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
	</div>
</template>

<script>
	export default {
		name:'categoryItem',
		
		props:['title']
	}
</script>

<style scoped>
	.categoryItem{
		/* border-radius: 12px;
		background-color: skyblue; */
		width: 30%;
		height: 33%;
		margin: 1%;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 99%;
	}
	img{
		width: 100%;
	}
	.card{
  position:relative;  
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255,255,255,0.1);
  overflow: hidden;
  display: center;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(5px);  
}

 .card:hover .content{
  transform: translateY(0px);
}
 .card .content a{
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: rgba(255, 255, 255, 0.301);
  color: rgb(41, 39, 39);
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(10, 10, 10, 0.486);
}
</style>