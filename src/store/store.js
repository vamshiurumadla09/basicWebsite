import {createStore} from 'redux';
import reducer from './reducers/combineReducer';
var store = createStore(reducer);
export default store;