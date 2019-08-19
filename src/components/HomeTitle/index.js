import React, { Component } from 'react';
import './index.css';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

 class HomeTitle extends Component {
 	constructor(props) {
 		super(props);
 		this.state = {
 			tag: 'none'
 			
 		};
 	}

 	loginOut() {
 		cookie.remove("accessToken", {domain: 'localhost', path: '/'});
 		cookie.remove("modelDb", {domain: 'localhost', path: '/'});
 		cookie.remove("userInfo", {domain: 'localhost', path: '/'});

 	}


 	render() {

 		return (
 			<div>
 				<div className="title_left">
 					<h1>我的文档管理</h1>
 				</div>
 				<div className="title_right">
 					<div className="icon_border" onMouseOver={() => {this.setState( {tag: 'block'})}} onMouseLeave={() => {this.setState( {tag: 'none'})}}>
 						<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />	
 						<div className="userChoice" style={{ display: this.state.tag}}>
 							<ul>
 								<Link >
 									<li>用户管理</li>
 								</Link>
 									<li onClick={this.loginOut.bind(this)}>注销</li>

 							</ul>
 						</div>
 					</div>
 					
 				</div>
 			</div>
 		);
 	}
 }
 export default HomeTitle;