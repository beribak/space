export default function(state=null, action) {
	
	switch (action.type) {
		case 'FETCH_PASS_TIMES':
			return action.payload;
		default:
			return state;
	}
}