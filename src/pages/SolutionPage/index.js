import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css';
import Title from '../../components/Header/index';
import RightMenu from '../../components/RightMenu/index';
import { connect } from 'react-redux';


class Solution extends Component {
	constructor( props ) {
		super( props );
		
	}

	componentDidMount() {
		this.props.dispatch({ type: 'GETSOLUTION'});
	}

	showDetail( index ) {
		this.props.history.push(`/pages/zonghejiejue/${index}`);
	}

	render() {

		return (
			<div>
				<div className="header">
					<Title />
				</div>
				<div className="conten">
					<div className="content_left">
						<div className="content_title">
							<div className="content_title_left">
								<h2>综合解决方案</h2>
							</div>
							<div className="content_title_right">
								<Button className="btn" >编辑案例</Button>
							</div>
						</div>
						<div className="content_info_div">
							<ul>
								{
									this.props.solutions.map((item, index) => {
										return (
											<li key={ index } onClick={this.showDetail.bind(this, index)}>
												<div className="solution_img">
													<img src={item.picture} />
												</div>
												<div className="solution_info_right">
													<h4>{item.name}</h4>
													<p className="solution_date">{item.date}</p>
													<p>{item.briefText}</p>
												</div>
											</li>
										);
									})
								}
								
								
							</ul>
							
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
export default connect( mapStateToProps )( Solution );