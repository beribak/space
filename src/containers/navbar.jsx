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
					<a href="#"	>Articles</a>
					<a href="#"	>ISS</a>
				</div>
				<div className="right">
					<a href="#">Link</a>
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