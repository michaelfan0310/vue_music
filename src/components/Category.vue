<template>
	<div class="category">
		<h3>{{title}}</h3>
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title']
	}
</script>

<style scoped>
	.category{
		border-radius: 12px;
		background-color: skyblue;
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
</style>