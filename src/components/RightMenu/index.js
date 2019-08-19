import React, { Component } from 'react';
import { Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import './index.css';
import Home from '../../pages/Home/index';
import ComponyIntroduce from '../../pages/ComponyIntroducePage/index';

class RightMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	
	
	render() {
		const urlStr = window.location.href;
		const urlarr = urlStr.split("/");
		console.log(urlarr);
		const ietmMenu = urlarr[4];
		console.log(ietmMenu);
		return (			
				<div id="rightmenu">
					<ul>
						<Link to="/">
							<li>
								<Icon type="home" />
							</li>
						</Link>

						<Link to="/h">
							<li>开发服务</li>
						</Link>

						<Link to="/pages/gongsijianjie">
							<li className={ ietmMenu == 'gongsijianjie' ? 'activeMenu' : ''}>公司简介</li>
						</Link>

						<Link to="/pages/dianxinganli">
							<li className={ ietmMenu == 'dianxinganli' ? 'activeMenu' : ''}>典型案例</li>
						</Link>

						<Link to="/pages/zonghejiejue">
							<li className={ ietmMenu == 'zonghejiejue' ? 'activeMenu' : ''}>综合解决</li>
						</Link>

						<Link to="/pages/baipishu">
							<li className={ ietmMenu == 'baipishu' ? 'activeMenu' : ''}>白皮书</li>
						</Link>

					</ul>
					
				</div>
				
			
		);
	}
}
export default RightMenu;