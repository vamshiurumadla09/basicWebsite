import {combineReducers} from 'redux';
import megaMenuReducer from './megaMenuReducer';
import TodoReducer from './todoReducer';
import Projects from './projectsReducer';

var reducer = combineReducers({megaMenu:megaMenuReducer, todoState:TodoReducer, projects:Projects})
export default reducer;
