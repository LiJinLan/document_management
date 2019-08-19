import React, { Component } from 'react';
import { Carousel } from 'antd';
import './banner.css';
import pic1 from './images/1.jpg';
import pic2 from './images/2.jpg';
import pic3 from './images/4.jpg';
import pic4 from './images/5.jpg';

class Banner extends Component {
	render() {
		return (
			<div>
				<Carousel autoplay>
				    <div>
				      <img src={pic1} />
				    </div>
				    <div>
				       <img src={pic2} />
				    </div>
				    <div>
				       <img src={pic3} />
				    </div>
				    <div>
				       <img src={pic4} />
				    </div>
			  	</Carousel>

			</div>
		);
	}
}
export default Banner;