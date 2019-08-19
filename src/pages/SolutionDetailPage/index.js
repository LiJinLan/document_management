import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import Title from '../../components/Header/index';
import RightMenu from '../../components/RightMenu/index';

class SolutionDetail extends Component {

	backSolutions() {
		this.props.history.push('/pages/zonghejiejue');
	}

	render() {
		const urlStr = window.location.href;
		const str = urlStr.split("/");
		const index = str[str.length - 1];
		console.log(index);
		const itemSolution = this.props.solutions[index];
		console.log(itemSolution);
		return (
			<div>
				<div className="header">
					<Title />
				</div>
				<div className="conten">
					<div className="content_left">
						<div className="content_title">
							<div className="content_title_left">
								<h2>{itemSolution.name}详细解决方案</h2>
							</div>
							<div className="content_title_right">
								<Button className="btn" onClick={ this.backSolutions.bind(this)}>返回案例总览</Button>
							</div>
						</div>
						<div className="content_info">
							<div className="content_img">
								<img src={itemSolution.picture} />
							</div>
							<div className="content_text">
								<p>{itemSolution.textDetail}</p>
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
const mapStateToProps = ( state ) => {
	return ({
		solutions: state.getSolutions
	});
}
export default connect( mapStateToProps )( SolutionDetail );