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

class CounterPage extends Component {
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
		this.interval = setInterval(this.handleClick, 5000000000000);
	}

	componentWillUnmount() {
	  	
	    clearInterval(this.interval);
	}

	handleAdd(){
		this.props.dispatch({ type: "add", number: 1});
	}
	handleSub(){
		this.props.dispatch({ type: "sub", number: 1});
	}

	render(){
		console.log(this.props.counterSagaData)
        return <Route render={
                props =>  cookies.load('accessToken') ? 
                <LocaleProvider locale={zhCN}>
                    <div id="home-container">
                        <Header />
                        <div >
                            <h1>{this.props.couter}</h1>
                            <Button onClick={this.handleAdd.bind(this)}>加一</Button>
                            <Button onClick={this.handleSub.bind(this)}>减一</Button>
                            <p>第一条saga数据:</p>
                            <p>{this.props.couterSagaData.data.length > 0 ? this.props.couterSagaData.data[0].name : "无"}</p>
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
		couter: state.couter,
		couterSagaData: state.couterSagaData
	});
}
export default connect( mapStateToProps)(CounterPage);

