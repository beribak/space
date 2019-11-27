import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCoordinates } from '../actions';

class Position extends Component {

	componentWillMount() {
		this.props.fetchCoordinates();
	}

	render() {

		return(
			<div className="position">
				<div>
					<h2 className="">ISS location</h2>
					<h4>{this.props.coordinates.latitude}</h4>
					<h4>{this.props.coordinates.longitude}</h4>
				</div>
				<img src="https://www.universetoday.com/wp-content/uploads/2019/08/space_tourism_commercialization_-_resize.jpg" className="image-iss" />
			
			</div>
		);
	}
} 

function mapDispatchToProps(dispatch) {

	return bindActionCreators(
		{fetchCoordinates},
		dispatch
	)
}

function mapStateToProps(state) {

	return {
		coordinates: state.coordinates
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Position);