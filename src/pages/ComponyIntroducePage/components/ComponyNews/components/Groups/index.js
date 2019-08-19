import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';


class Groups extends Component {
	constructor( props ) {
		super( props );
		
	}

	componentDidMount() {
		this.props.dispatch({ type: 'GET_GROUP_TEXT'});
		this.props.dispatch({ type: 'GET_PERSON_GROUPS'});
	}
	render() {
		console.log( this.props);
		return (
			<div id="develop_nav">
				<div id="groups">
					<div id="groups-text">
						{ this.props.textIntroduce }
					</div>
					<div className="groupPartners">
						<ul>
							{ 
								this.props.personGroups.map((item, index) => {
									return (
										<li key={index}>
											<div className="personIcon">
												<div className="icon">
												</div>
												<div className="jobPosition">{item.jobIcon}</div>
											</div>
											<h3 className="personName">{item.personName}</h3>
											<br />
											<p>{item.jobPosition}</p>
											<br />
											<p>{item.jobAges}</p>	
											<br />
											<p>{item.jobDuties}</p>	
										</li>
									);
								})
							}
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return ({
		textIntroduce: state.getTextIntroduce,
		personGroups: state.getPersonGroups
	});
}
export default connect( mapStateToProps )(Groups);