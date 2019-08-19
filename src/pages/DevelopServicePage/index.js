import React, { Component } from 'react';
import Title from '../../components/Header/index';
import RightMenu from '../../components/RightMenu/index';
import DocumentMana from './components/DocumentMana/index';

class DevelopService extends Component {
	render() {
		return (
			<div>
				<div className="header">
						<Title />
				</div>
				<div className="conten">
					<div className="content_left">
						<div className="content_info_div">
							<DocumentMana />
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
export default DevelopService;