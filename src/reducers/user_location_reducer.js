export default function(state=null, action) {
	
	switch (action.type) {
		case 'FETCH_LOCATION':
			return action.payload;  
		default:
			return state;
	}
}