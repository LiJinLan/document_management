import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TypicalCaseContents extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		this.props.dispatch({ type: "GETCASE"});
	}
	render() {
		console.log(this.props.cases);
		return (
			<div id="case-ontents">
				<ul>
					
					{ this.props.cases.map((item, index) => {
						return (
							<li key={index}>
								<Link to={`/pages/dianxinganli/${index}`}><img src={item.picture} /></Link>
								<h3>{ item.name }</h3>
								<p>{ item.date }</p>
							</li>
						);
					})}
				</ul>

			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return ({
		cases: state.getCase
	});
}
export default connect( mapStateToProps )( TypicalCaseContents );