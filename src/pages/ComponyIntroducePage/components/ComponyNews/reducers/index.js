
export function getComponeEvent ( state = [], action ) {
	console.log( action.data );
	switch( action.type) {
		case "showEvent" : 
			return action.data;
		default: 
			return state;
	}
}


const textIntroduce = "我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发";

export function getTextIntroduce( state = "", action ) {
	switch( action.type) {
		case 'GET_GROUP_TEXT':
			return textIntroduce;
		default:
			return state;
	}
}


const personGroups = 
	[
		{
			jobIcon: '经理',
			personName: '李文志',
			jobPosition: '开发部经理、二次开发工程师',
			jobAges: '3年工龄',
			jobDuties: '主要负责新积水工厂项目、高速项目'
		},
		{
			jobIcon: '人事主任',
			personName: '张小明',
			jobPosition: '人事部主任，招聘主管',
			jobAges: '6年工龄',
			jobDuties: '主要负责招聘人员、团建'
		},
		{
			jobIcon: '技术主管',
			personName: '王光',
			jobPosition: '技术主管、二次开发工程师',
			jobAges: '2年工龄',
			jobDuties: '主要负责研发产品、解决技术难题'
		},
		{
			jobIcon: '员工',
			personName: '李梓宏',
			jobPosition: '开发部经理、二次开发工程师',
			jobAges: '3年工龄',
			jobDuties: '主要负责新积水工厂项目、高速项目'
		},
		{
			jobIcon: '助理',
			personName: '黄文中',
			jobPosition: '开发部经理、二次开发工程师',
			jobAges: '3年工龄',
			jobDuties: '主要负责新积水工厂项目、高速项目'
		},
	]
		
export function getPersonGroups( state = [], action) {
	switch(action.type){
		case 'GET_PERSON_GROUPS':
			return personGroups;
		default:
			return state;
	}
}