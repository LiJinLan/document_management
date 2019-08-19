const action = {type: "add"}

export function todoApp(state = 0, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    default:
      return state;
  }
}


const aaa = [
    {
        title:'开发服务',
        icon:'mail',
        lineTo:'/h',
    },{
        title:'公司简介',
        icon:'mail',
        lineTo:'/pages/gongsijianjie',

    },{
        title:'典型案例',
        icon:'mail',
        lineTo:'/pages/dianxinganli',

    },{
        title:'综合解决',
        icon:'mail',
        lineTo:'/pages/zonghejiejue',

    },{
        title:'白皮书',
        icon:'calendar',
        lineTo:'/pages/baipishu',

    },{
        title:'2342',
        icon:'calendar',
        lineTo:'/2342',

    }
] ;
export function getLeftMenuArray(state = aaa, action) {
  switch (action.type) {
    case "add12212":
      return state;
    default:
      return state;
  }
}

