import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCoordinates } from '../actions';

class Navbar extends Component {

	// componentWillMount() {
	// 	this.props.fetchCoordinates();
	// }

	render() {

		return(
			<div className="mynavbar">
				<div className="left">
					<p className="logo"><i class="fas fa-space-shuttle"></i></p>
					<a href="#articles"	>Articles</a>
					<a href="#iss"	>ISS</a>
				</div>
				<div className="right">
					
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);