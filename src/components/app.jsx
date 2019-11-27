import React from 'react';

import Position from '../containers/position';
import Map from '../containers/map';
import SpaceImage from '../containers/space_image';
import Articles from '../containers/articles';
import Navbar from '../containers/navbar';
import IssPassTimes from '../containers/iss_pass_times';

const App = () => {
  return (
    <div className=""> 	    
		<Navbar />
		<h1 className="heading">SPACE NEWS</h1>
		<div className="container-fluid">
		    <SpaceImage />
		    <div className="app row">
			    <div className="col-sm-8">
			    	<Articles />
			    </div>
			    
			    <div className="col-sm-4 iss-container-parent">	      
				    <div className="iss-container">
				      	<Position />
				      	<Map /> 		      	    
			      	</div>
		      	</div>
		      	<div className="astrounuts col-sm-4">
		      		<IssPassTimes />
		      	</div>
		    </div>
	    </div>

    </div>
  );
};

export default App;
