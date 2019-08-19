import React, { Component } from 'react';
import structure from "../../images/structure.jpg";


class Structure extends Component {
	constructor(props) {
		super(props);
		
	}

    
	render() {
		return (
			<div id="develop_nav">
                <img src={structure} />
                
            </div>
		);
	}
}


export default Structure;