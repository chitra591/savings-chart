import {combineReducers} from 'redux';
import totalSavingsReducer from './savings/reducer';

export default combineReducers({
    total_savings: totalSavingsReducer
});