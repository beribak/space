import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchImage } from '../actions';

class SpaceImage extends Component {

	componentWillMount() {
		this.props.fetchImage();
	}

	render() {

		return(
				<div className="image-container">
					<img src={this.props.image.hdurl} className="image" />
					<div className="image-text-container">
						<p className="image-text">{this.props.image.explanation}</p>
					</div>
				</div>
		);
	}
} 

function mapDispatchToProps(dispatch) {

	return bindActionCreators(
		{fetchImage},
		dispatch
	)
}

function mapStateToProps(state) {

	return {
		image: state.image
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceImage);