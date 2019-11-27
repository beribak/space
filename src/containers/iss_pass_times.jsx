import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserLocation } from '../actions';
import { fetchPassTimes } from '../actions';

class IssPassTimes extends Component {

	

	handleSubmit = (event) => {
		// const inputValue = document.getElementById("input");
		// this.props.fetchUserLocation("barcelona");
		this.props.fetchPassTimes({
			// lat: this.props.user_location.results[0].geometry.lat,
			// lng: this.props.user_location.results[0].geometry.lng
		});

	}

	render() {

		if(this.props.peopleInSpace !== null) {		
			return(
					// <input type="text" id="input" className="input-field" />
				<div className="user-location">
					<h3>People currently in space</h3>
					<input type="submit" value="Submit" onClick={this.handleSubmit}/>
					<h3>Your results:</h3>
					<div>
						<p>{this.props.peopleInSpace.people.length}</p>
						{this.props.peopleInSpace.people.map( person => <h3>{person.name} {person.craft}</h3>)}
					</div>
				</div>
			);
		} else {
			return(
					// <input type="text" id="input" className="input-field" />
				<div className="user-location">
					<h3>Do you want to know how many peope are in space right now!!!</h3>
					<input type="submit" value="Yes" onClick={this.handleSubmit}/>
					<h3>Your results:</h3>
				</div>
			);
		}
	}
} 

function mapDispatchToProps(dispatch) {

	return bindActionCreators(
		{ fetchUserLocation, fetchPassTimes },
		dispatch
	)
}

function mapStateToProps(state) {

	return {
		user_location: state.user_location, 
		peopleInSpace: state.pass_times
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(IssPassTimes);