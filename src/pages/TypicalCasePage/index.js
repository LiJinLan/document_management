import React, { Component } from 'react';

import Header from '../../components/Header';
import RightMenu from '../../components/RightMenu';
import TypicalCaseTitle from './components/TypicalCaseTitle';
import TypicalCaseContents from './components/TypicalCaseContents';
import './index.css';

class TypicalCase extends Component {
	render() {
		return (
			<div>
				<Header />
				<div id="case-content">
					<div id="left-content2">
						<TypicalCaseTitle />
						<TypicalCaseContents />
					</div>
				
					<div id="right-nav">
						<RightMenu />
						
					</div>
				</div>
					
			</div>

		);
	}
}
export default TypicalCase;