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
    	<div class="tenor-gif-embed" data-postid="10308184" data-share-method="host" data-width="100%" data-aspect-ratio="1.0353430353430353"><a href="https://tenor.com/view/astronaut-art-gif-10308184">Astronaut Art GIF</a> from <a href="https://tenor.com/search/astronaut-gifs">Astronaut GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script> 	    
		<div className="giphy">
		</div>
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
