import React, { Component } from 'react';
import { Button } from 'antd';
import './index.css'

class TypicalCaseTitle extends Component {
	render(){
		return (
			<div id="case-title">
				<div id="case-title-left">典型案例</div>
				<div id="case-title-right">
					<Button id="caseBtn">编辑案例</Button>
				</div>
			</div>
		);
	}
}
export default TypicalCaseTitle;