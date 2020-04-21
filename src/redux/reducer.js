import UPDATE_INPUT from './action'
import {combineReducers} from 'redux';

// Reducer

const addtodoReducer = (state = [], action)=> {
  switch(action.type) {
    case 'ADD_TODO':
        const newData = [...state, action.payload];
        return newData;
    case 'REMOVE_TODO': 
        const removedDate = state.filter(el => el == action.payload.id);
        return removedDate;
      default:
        return state
  }
}

const rootReducer = combineReducers({
  addtodoReducer
});

export default rootReducer;