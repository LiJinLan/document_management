import React, { Component } from 'react';
import { Button } from 'antd';
import Title from '../../components/Header/index';
import RightMenu from '../../components/RightMenu/index';
import './index.css';
import { connect } from 'react-redux';

class WhiteBook extends Component {
	componentDidMount() {
		this.props.dispatch({ type: 'GETWHITEBOOK'});
	}

	showBookDetail(index) {
		this.props.history.push(`/pages/baipishu/${index}`);
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
								<h2>白皮书</h2>
							</div>
							<div className="content_title_right">
								<Button className="btn" >编辑案例</Button>
							</div>
						</div>
						<div className="content_info_whitebook">
							<ul>
								{
									this.props.whitebookText.map((itemBook, index) => {
										return ( 
											<li key={index} onClick={this.showBookDetail.bind(this, index)}>
												<img src={itemBook.picture}/>
												<div className="book_info">
													<p>{itemBook.name}</p>
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
		whitebookText: state.getWhiteBook
	});
}
export default connect( mapStateToProps )( WhiteBook );