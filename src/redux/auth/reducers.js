import { GET_ACCESS_TOKEN, GET_USER, REMOVE_ACCESS_TOKEN, REMOVE_USER, SET_ACCESS_TOKEN, SET_USER } from './actions';

const initialState = {
  access_token: "adadad",
  user: {
    id: 1,
    username: "hahdh"
  }
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: state.access_token
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.access_token
      };
    case REMOVE_ACCESS_TOKEN:
      return {
        ...state,
        access_token: ""
      };
    case GET_USER:
      return {
        ...state,
        user: state.user
      };
    case SET_USER:
      return {
        ...state,
        user: {
          id: action.user?.id,
          username: action.user?.username
        }
      };
    case REMOVE_USER:
      return {
        ...state,
        user: {
          id:NaN,
          username:undefined
        }
      };

    default:
      return state;
  }
}

export default authReducer;