import React, {Component } from 'react';
import './index.css';
import { Button } from 'antd';

class DocInfo extends Component {
	render() {
		return (
			<div>
				<div className="catalog">
					<div className="catalog_tit">
						文档管理
					</div>
				</div>
				<div className="doc_opetation">
					<div className="ope_btn">
						<Button>导入文档</Button>
						<Button>新增文件夹</Button>
						<Button>删除</Button>
						<Button>下载</Button>
					</div>
				</div>
				
			</div>
		);
	}
}
export default DocInfo;