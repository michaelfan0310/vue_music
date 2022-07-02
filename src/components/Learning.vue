<template>
	<div>
        <div class="box1" >
		<h4 >Week-Learning{{renew.Adding}}</h4> 
        <button @click="addPlan">addPlan</button>
        </div>
    <div class="container2">   

	<category >
        <iframe src="https://www.youtube.com/embed/gyMwXuJrbJQ" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category>

    <category >
            <iframe src="https://www.youtube.com/embed/9F880xaDVEY"   title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category>  

    <category  v-show="renew.shownew">
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
        margin-top:-2%;
        color: rgb(236, 228, 228);
     }
     button{
        margin-top:1%;
        margin-right: 86%;
     }
        
   
    .container2{
		display: flex;
        flex-direction: row;
		justify-content: space-around;
        flex-flow: row wrap;
        margin-top: -17%;
	}
    iframe{
        width:99%;
    }
  


</style>