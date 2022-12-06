import * as CONSTANT from './constants';

const initialState = {
	access_token: "",
	user: {
		id: 1,
		username: ""
	}
};

function authReducer(state = initialState, action) {
	switch (action.type) {
		case CONSTANT.GET_ACCESS_TOKEN:
			return {
				...state,
				access_token: state.access_token
			};
		case CONSTANT.SET_ACCESS_TOKEN:
			return {
				...state,
				access_token: action.access_token
			};
		case CONSTANT.REMOVE_ACCESS_TOKEN:
			return {
				...state,
				access_token: ""
			};
		case CONSTANT.GET_USER:
			return {
				...state,
				user: state.user
			};
		case CONSTANT.SET_USER:
			return {
				...state,
				user: {
					id: action.user?.id,
					username: action.user?.username
				}
			};
		case CONSTANT.REMOVE_USER:
			return {
				...state,
				user: {
					id: NaN,
					username: undefined
				}
			};
		case CONSTANT.REMOVE_ALL:
			return {
				...state,
				access_token: '',
				user: {
					id: NaN,
					username: undefined
				}
			};

		default:
			return state;
	}
}

export default authReducer;