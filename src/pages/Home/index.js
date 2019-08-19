import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { message, Button, Modal, Tabs, LocaleProvider } from 'antd';// ant组件库
import zhCN from 'antd/lib/locale-provider/zh_CN';

import LeftMenu from './components/LeftMenu/LeftMenu.js';// 左侧导航组件
import Banner from './components/Banner/Banner.js';// 首页Banner播图轮组件
import cookies from 'react-cookies';// cookie包
import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			test: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			test: true
		})
	}

	handleSaga() {
		this.props.dispatch({type: "gg"});
	}

	componentDidMount() {
		this.interval = setInterval(this.handleClick, 5000000000000000);
	}

	componentWillUnmount() {
	  	
	    clearInterval(this.interval);
	}

	render(){
        return <Route render={
                props =>  cookies.load('accessToken') ? 
                <LocaleProvider locale={zhCN}>
                    <div id="home-container">
                        <Header />
                        <div >
                            <div className="left-menu">
                               <LeftMenu leftMenuArray={this.props.leftMenuArray}/>
                            </div>
                            <div className="right-content">
                                <Banner />
                                <div className="home-introduce">
                                    <p>XXXX公司，一直以服务于基础设施行业为主要方向，以软件销售、工程
                                    项目服务、软件和培训为主营业务，覆盖民用建筑、土木交通、工业建筑、水处理、勘察测绘、环保、石化、冶金
                                    、电力等行业，提供从设计、施工到运维的软件和技术服务。
                                    </p>
                                    <p>团队专业技术人员占比85%。技术能力与服务得到大公司的认可，近年事业绩蓬勃与中建、
                                    中交、中水、中铁、中冶等中字头企业均有长期合伙。</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </LocaleProvider> :
                <Redirect to={{pathname: '/user/login', state: {from: props.location.pathname}}}/>
            } />
    }
}

const mapStateToProps = ( state ) => {
	console.log( state );
	return ({
		leftMenuArray: state.getLeftMenuArray
	});
}
export default connect( mapStateToProps)(Home);

