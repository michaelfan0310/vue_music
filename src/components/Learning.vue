<template>
	<div>
		<h3>Week-Learning</h3>
    <div class="container2">   

	<category-item title="Special">
        <iframe src="https://www.youtube.com/embed/gyMwXuJrbJQ" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category-item>


        <category-item title="Study">
            <iframe src="https://www.youtube.com/embed/9F880xaDVEY"   title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </category-item>  
        
  </div>

</div>
</template>

<script>
    import CategoryItem from './CategoryItem'
	export default {
		name:'Learning',
		components:[CategoryItem,]
		
	}
</script>

<style scoped>
	h3{
		margin-top:-2%;
	}
        

    .container2{
		display: flex;
        flex-direction: row;
		justify-content: space-around;
        flex-flow: row wrap;
        margin-top: -11%;
	}
    iframe{
        width:99%;
    } 


</style>