import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../../components/Header';

import { message, Button, Row, Col, Modal, Tabs, LocaleProvider } from 'antd';// ant组件库
import zhCN from 'antd/lib/locale-provider/zh_CN';
import cookies from 'react-cookies';
import './index.css';
import RightMenu from '../../components/RightMenu/index';
import ComponyNews from './components/ComponyNews/index.js';



class ComponyIntroduce extends Component {

	render(){

        const childRoutes = this.props.routes;
        console.log(this.props);

        return <Route render={
                props =>  cookies.load('accessToken') ? 
                <LocaleProvider locale={zhCN}>
                    <div id="home-container">
                        <Header />
                        <div id="content">
                           <div id="left_content_nav">
                                <ComponyNews childRoutes={childRoutes}/>
                            </div>
                            <div id="right-menu">
                            	<RightMenu />
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
export default connect( mapStateToProps)(ComponyIntroduce);

