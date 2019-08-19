import React, { Component } from 'react';
import './index.css';
import HomeTitle from '../../components/Header/index';
import LeftMenu from './components/leftMenu/index';
import Banner from './components/Banner/index';

class HomePage extends Component {
	render() {
		return (
			<div>
				<div className="home_title">
					<HomeTitle />
				</div>
				<div className="left_Menu">
					<LeftMenu />
				</div>
				<div className="right_info">
					<div className="banner">
						<Banner />
					</div>
					<div className="home_text">
						<p>广州君和信息技术有限公司，一直以服务于基础设施行业为主要方向，以软件销售、工程 项目服务、软件和培训为主营业务，覆盖民用建筑、土木交通、工业建筑、水处理、勘察测绘、环保、石化、冶金 、电力等行业，提供从设计、施工到运维的软件和技术服务。</p>
						<br />
						<p>团队专业技术人员占比85%。技术能力与服务得到大公司的认可，近年事业绩蓬勃与中建、 中交、中水、中铁、中冶等中字头企业均有长期合伙。</p>
					</div>
				</div>
			</div>
		);
	}
}
export default HomePage;