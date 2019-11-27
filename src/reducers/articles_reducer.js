export default function(state=[], action) {

	switch (action.type) {
		case 'FETCH_ARTICLES':
			return [action.payload]; //objects cannot be children of react elements in jsx 
			//files so i had to access the iss_position object here in a js file 
		default:
			return state;
	}
}