import React, { Component } from 'react';
import './index.css';
import { Button } from 'antd';
import { connect } from 'react-redux';
import Title from '../../components/Header/index';
import RightMenu from '../../components/RightMenu/index';

class ResoultDetail extends Component {

	constructor( props ) {
		super(props);
		this.state = {
			tag: 'result'
		}
	}

	addActive = ( text ) => {
		return this.state.tag == text ? "active" : "";
	}

	backCase() {
		console.log(this.props);
		this.props.history.push('/pages/dianxinganli');
	}

	render() {
		console.log( this.props);
		const urlString = window.location.href;
		const a = urlString.split("/")
		const index = a.length - 1;
		const id = a[index];
		console.log( id);
		const itemCase = this.props.caseDetail[id];
		const showText = 'itemCase.' + this.state.tag;
		console.log(showText);
		return (
			<div>
				<div className="header">
					<Title />
				</div>
				<div className="conten">
					<div className="content_left">
						<div className="content_title">
							<div className="content_title_left">
								<h2>{ itemCase.name}</h2>
							</div>
							<div className="content_title_right">
								<Button className="btn" onClick={ this.backCase.bind(this)}>返回案例总览</Button>
							</div>
						</div>
						<div className="content_info">
							<div className="content_img">
								<img src={itemCase.picture} />
							</div>
							<div className="content_message">
								<div onClick={() => {this.setState({ tag: "solution" })}} className={ this.addActive("solution")} >解决方案</div>
								<div onClick={() => {this.setState({ tag: "result"})}} className={ this.addActive("result")}>案例成果</div>
							</div>
							<div className="content_text">
								<p>{this.state.tag == 'result' ? itemCase.result : itemCase.solution}</p>
							</div>
						</div>
					</div>
					<div className="content_right">
						<RightMenu />
					</div>
				</div>

			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state);
	return ({
		caseDetail: state.getCase
	});
}
export default connect( mapStateToProps )( ResoultDetail );