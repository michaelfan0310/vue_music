<template>
  <div>
      
      <ul class="list">
            <li v-for="(c,index) in collections" :key="index"><span>{{c}}</span></li>           
      </ul>
      <div class="box3">
      <input type="text" v-model="newCollect"/>
      <button @click="addNew">add new</button>
      </div>
      
     <div class="container">

       
       <category-item title="Symphony" >
			<iframe src="https://www.youtube.com/embed/qVA1ieo9Js4" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
		</category-item>		

        <category-item title="Piano">
			<iframe   src="https://www.youtube.com/embed/XMJbOC_2DME"   title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>
		</category-item>

		<category-item title="Movie">
			<iframe src="https://www.youtube.com/embed/0iKyAK6BVuM" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
		</category-item>

        <category-item title="Singing">
			<iframe src="https://www.youtube.com/embed/cKWreZDK9es" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
		</category-item>

        <category-item title="BackGround">
            <iframe src="https://www.youtube.com/embed/hlWiI4xVXKY" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
        </category-item>

        <category-item title="Study">
            <iframe src="https://www.youtube.com/embed/9F880xaDVEY"   title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </category-item>


    <category-item title="Special">
        <iframe src="https://www.youtube.com/embed/FS6o3qFimsc" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category-item>

    <category-item title="Piano2">
        <iframe src="https://www.youtube.com/embed/MuxB2zACza0" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </category-item>
        
    <category-item title="Sonata" >
			<ul class="sonata" >
				<li v-for="(s,index) in sonatas" :key="index"><span>{{ s }} </span> </li>
			</ul>
	</category-item>

</div>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem'
export default {
    name:'MusicItem',
    components:{CategoryItem},
    data() {
			return {				
				sonatas:['Mozart: Allegro','Beethoven "Moonlight" Sonata','Chopin: Sonata No.3','J.S. Bach','Béla Bartók','Schumann'],
				collections:['Symphony','Sonata','Piano','Singing','Movie']
			}
    },
    methods:{
        addNew(){
               console.log(this.newCollect)
               this.collections.unshift(this.newCollect)
        }
    }
}
</script>

<style scoped>
    li {
        text-align: left; 
        display: list-item;
        font-size: 1.3rem; 
        float: left;
        width: 15%;        
        }
    li span{
        position: relative;
        left: 2px;         
    }
        

    .container{
		display: flex;
        flex-direction: row;
		justify-content: space-around;
        flex-flow: row wrap;
        margin: 2% 2%;
	}
    iframe{
        width:99%;
    }

    .sonata {
        margin-top: 3%;
    }
    .sonata li{
        text-align: left; 
        width: 85%;
    }

    .sonata li span{
        position: relative;
        left: 10%; 
    }

   h1,li {
        color: rgb(142, 139, 135);
        
    }
   .box3 {
       position: static;
   }

  
 

</style>