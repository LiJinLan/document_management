import React, {Component } from 'react';
import './index.css';
import { Tabs } from 'antd';

import DocInfo from '../DocInfo/index.js';


const { TabPane } = Tabs;
class DocumentMana extends Component {

	callback = (key) =>{
  		console.log(key);
	}
	render() {
		return (
			<div>
				<div className="doc_title">
					<Tabs defaultActiveKey="1" onChange={this.callback}>
					    <TabPane tab="文档管理" key="1">
					    	<div className="doc_content">
					    		<DocInfo />
					    	</div>
					     
					    </TabPane>
					    <TabPane tab="空间树管理" key="2">
					      Content of Tab Pane 2
					    </TabPane>
					    <TabPane tab="进度管理" key="3">
					      Content of Tab Pane 3
					    </TabPane>
					</Tabs>
				</div>
				
			</div>
		);
	}
}
export default DocumentMana;