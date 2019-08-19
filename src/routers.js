import Home from './pages/Home/index';
import Login from './pages/LoginPage/index';
import Register from './pages/RegisterPage/index';
import Counter from './pages/CounterPage/index';
import ComponyIntroduce from './pages/ComponyIntroducePage/index';
import TypicalCase from './pages/TypicalCasePage/index';
import Developer from './pages/ComponyIntroducePage/components/ComponyNews/components/Developer/index';
import Structure from './pages/ComponyIntroducePage/components/ComponyNews/components/Structure/index';
import Partners from './pages/ComponyIntroducePage/components/ComponyNews/components/Partners/index';
import Groups from './pages/ComponyIntroducePage/components/ComponyNews/components/Groups/index';
import ResoultDetail from './pages/ResoultDetail/index';
import Solution from './pages/SolutionPage/index';
import SolutionDetail from './pages/SolutionDetailPage/index';
import WhiteBook from './pages/WhiteBook/index';
import WhiteBookDetail from './pages/WhiteBookDetail/index';
import HomePage from './pages/HomePage/index';
import DevelopService from './pages/DevelopServicePage/index';

const routeConfig =[
	{
		path:'/',
	　　component: HomePage,
	　　childRoutes:[],
		exact: true
　　  },

	{ 
		path:'/user/login',
	　　component: Login,
	　　childRoutes:[]
　　  },
	{ 
		path:'/user/register',
	　　component: Register,
	　　childRoutes:[]
　　  },
	{
		path:'/pages/gongsijianjie',
	　　component: ComponyIntroduce,
	　　childRoutes:[
			{ 
				path:'/pages/gongsijianjie/',
			　　component: Developer,
			　　childRoutes:[]
		　　 },
			{ 
				path:'/pages/gongsijianjie/structure',
			　　component: Structure,
			　　childRoutes:[]
		　　 },
			{ 
				path:'/pages/gongsijianjie/partners',
			　　component: Partners,
			　　childRoutes:[]
		　　 },
			{ 
				path:'/pages/gongsijianjie/groups',
			　　component: Groups,
			　　childRoutes:[]
		　　 }

		]
　　 },
	{ 
		path:'/pages/dianxinganli',
	　　component: TypicalCase,
	　　childRoutes:[],
		exact: true
　　 },
	{ 
		path:'/pages/dianxinganli/:id',
	　　component: ResoultDetail,
	　　childRoutes:[],
　　 },
	{ 
		path:'/pages/zonghejiejue',
	　　component: Solution,
	　　childRoutes:[],
		exact: true
　　 },
	{ 
		path:'/pages/zonghejiejue/:id',
	　　component: SolutionDetail,
	　　childRoutes:[],
		
　　 },
	{ 
		path:'/pages/baipishu',
	　　component: WhiteBook,
	　　childRoutes:[],
		exact: true
　　 },
	{ 
		path:'/pages/baipishu/:id',
	　　component: WhiteBookDetail,
	　　childRoutes:[],
		
　　 },
	{ 
		path:'/counter',
	　　component: Counter,
	　　childRoutes:[],
		
　　 },
	{ 
		path:'/pages/kaifafuwu',
	　　component: DevelopService,
	　　childRoutes:[],
		exact: true
　　 },

];

export default routeConfig;
