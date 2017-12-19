import {combineReducers} from 'redux';
import arrWordsReducer from './arrWordsReducer';
import isAddingReducer from './isAddingReducer';
import filterStatusReducer from './filterStatusReducer';



const reducer=combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer,
})

export default reducer;