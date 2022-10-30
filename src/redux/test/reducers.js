import { ADD_VALUE, GET_VALUE, REMOVE_VALUE } from './actions';

const initialState = {
  value: 0
};

function valueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VALUE:
      return {
        ...state,
        value: state.value 
      };
    case ADD_VALUE:
      return {
        ...state,
        value: state.value+1 
      };
    case REMOVE_VALUE:
      return {
        ...state,
        value: state.value-1
      };
    default:
      return state;
  }
}

export default valueReducer;