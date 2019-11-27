export default function(state=null, action) {
	
	switch (action.type) {
		case 'FETCH_COORDINATES':
			return action.payload.iss_position; //objects cannot be children of react elements in jsx 
			//files so i had to access the iss_position object here in a js file 
		default:
			return state;
	}
}