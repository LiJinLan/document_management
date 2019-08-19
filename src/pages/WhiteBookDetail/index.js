import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import Title from '../../components/Header/index';
/*import RightNavMenu from '../../components/RightNavMenu/index';*/
import RightMenu from '../../components/RightMenu/index';

class WhiteBookDetail extends Component {

	backWhiteBook() {
		this.props.history.push('/pages/baipishu');
	}

	render() {
		const urlStr = window.location.href;
		const urlArray = urlStr.split("/");
		const index = urlArray[urlArray.length - 1];
		const itemBook = this.props.bookText[index];
		
		return (
			<div>
				<div className="header">
					<Title />
				</div>
				<div className="conten">
					<div className="content_left">
						<div className="content_title">
							<div className="content_title_left">
								<h2>{itemBook.name}</h2>
							</div>
							<div className="content_title_right">
								<Button className="btn" onClick={ this.backWhiteBook.bind(this)}>返回案例总览</Button>
							</div>
						</div>
						<div className="content_info">
							
							<div className="content_text" style={{ width: '100%'}}>
								<p>{itemBook.bookDetail}</p>
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
	return ({
		bookText: state.getWhiteBook
	});
}
export default connect( mapStateToProps )( WhiteBookDetail );