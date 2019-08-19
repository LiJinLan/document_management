import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

class LeftMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			menus: [
			    {
			        title:'开发服务',
			        icon:'mail',
			        lineTo:'/pages/kaifafuwu',
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
			        title:'计数器',
			        icon:'calendar',
			        lineTo:'/counter',

			    }
			] 
		}
	}

	
	render() {
		return (
			<div>
				<Menu className='menuIndex' style={{padding:'0 24px'}}>
			        {this.state.menus.map((menuItem,idx)=>{
			             return <Menu.Item
			             key={idx}
			             style={{
			                width:'168px',height:'64px',lineHeight:'64px',textAlign:'center',
			                backgroundImage: 'linear-gradient(-180deg, #6FE0FE 7%, #21A2FF 100%)',
			                borderRadius: '4px',
			                color:'#fff',
			                fontSize:'18px',
			                fontFamily: 'PingFangSC-Semibold',
			                marginBottom:'16px'
			             }}
			       
			             ><Link to={menuItem.lineTo} >
			                    <Icon type={menuItem.icon} style={{width:'32px',height:'32px',marginRight:'10px'}}/>
			                    {menuItem.title}
			                </Link> </Menu.Item >
			            })
			        }
		        </Menu>
    	
			</div>
		);
	}
}
export default LeftMenu;
