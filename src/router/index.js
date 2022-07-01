// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Entertainment from '../components/Entertainment'
import Learning from '../components/Learning'


//创建并暴露一个路由器
const router= new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/Entertainment',
			component:Entertainment,		
		},
		{   name:'zhuye',
			path:'/Learning',
			component:Learning,
			
	    },	]
	})
	
export default router
