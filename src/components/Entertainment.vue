<template>
	
	<div>
     <h3>ENJOY YOUR TIME</h3>  
    <div class="container">   
       <category title="Symphony" >
			<iframe src="https://www.youtube.com/embed/fij0ASrJiKk" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
		</category>		

        <category title="Piano">
			<iframe   src="https://www.youtube.com/embed/hlWiI4xVXKY"   title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>
		</category>

		<category title="Movie">
			<iframe src="https://www.youtube.com/embed/mNIXRXikYDc" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
		</category>  

		<category title="Movie">
			<iframe src="https://www.youtube.com/embed/nCSx2BWGBNM" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
		</category> 
        
  </div>

</div>
</template>

<script>
    // import CategoryItem from './CategoryItem'
	export default {
		name:'Entertainment',
		// components:[CategoryItem,]
		
	}
</script>

<style scoped>
	h3{
		margin-top:-2%;
	}
        

    .container{
		display: flex;
        flex-direction: row;
		justify-content: space-around;
        flex-flow: row wrap;
        margin: 1% 2%;
	}
    iframe{
        width:99%;
    }

  


</style>