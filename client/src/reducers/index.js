import { combineReducers } from 'redux';
import materialReducer from './materialReducer';

export default combineReducers({
  materials: materialReducer,
});
