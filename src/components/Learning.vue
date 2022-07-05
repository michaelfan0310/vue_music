<template>
	<div>        
        <button @click="addPlan">addPlan</button>
		<h4 >Week-Learning{{renew.Adding}}</h4> 
        
      
    <div class="container2" v-show="!renew.shownew">   

	<category class="category">
        <iframe src="https://www.youtube.com/embed/gyMwXuJrbJQ" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category>

    <category class="category">
            <iframe src="https://www.youtube.com/embed/xBxx7aceR1U"   title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category>  
    </div>
    <div class="container3" v-show="renew.shownew" >
    <category class="category">
        <iframe src="https://www.youtube.com/embed/gyMwXuJrbJQ" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category>

    <category class="category">
            <iframe src="https://www.youtube.com/embed/xBxx7aceR1U"   title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category> 
    <category  v-show="renew.shownew" class="mask">
            <iframe  src="https://www.youtube.com/embed/eUnlOsylxyo"   title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category> 
        
  </div>

</div>
</template>

<script>
    // import CategoryItem from './CategoryItem'
    import Vue from 'vue'
	export default {
		name:'Learning',
        data(){
            return{
                renew:{
                shownew: false,
        Adding:''
       
        }
        }
        },
		// components:[CategoryItem,],
        //为什么用了[]而不是{}，收到好的效果
        methods:{
            addPlan(){               
               Vue.set(this.renew,'Adding',': --  NewProject') 
               Vue.set(this.renew.shownew=true)              
            }
        }		
	}
</script>

<style scoped>
     h4{
        margin-top:-1%;
        color: rgb(88, 139, 169);
     }
     button{
        position: absolute;
        margin-top:-6%;
        margin-left: -44.5%;
     }
        
   
    .container2{
		display: flex;
        flex-direction: row;
		justify-content: space-around;
        flex-flow: row wrap;
        margin-top: -13%;
	}
    .container3{
		display: flex;
        flex-direction: row;
		justify-content: space-around;
        flex-flow: row wrap;       
	}
    iframe{
        width:99%;
    }

    /* .mask{
    position: absolute;
    top:0;bottom:0;left:0;right:0;
    background-color: rgba(0, 0, 0, 0.75);
} */
  


</style>