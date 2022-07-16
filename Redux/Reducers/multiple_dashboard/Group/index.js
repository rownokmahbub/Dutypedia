// main reducer state 
import { combineReducers } from 'redux';

// after delete this reducers 
const CountReducer = (state = 0, action) => {
   switch (action.type) {
      case "ADD":
         return state + 1;
      default:
         return state;
   }
};
const group = combineReducers({ count: CountReducer });

export default group;