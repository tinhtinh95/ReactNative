
import {ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE, UPDATE_TEXTINPUT} from '../actions/actionTypes';
import imgPlace from '../../imgs/pin.png';

const initialState = {
    placeName : '',
    places : [],
    selectedPlace : null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE :
            if(state.placeName == '') {
                return {
                    ...state,
                };
            } 
            return {
                ...state,
                places : state.places.concat({
                    key : Math.random(),
                    name : state.placeName,
                    image : imgPlace,
                })
            };
            break;
        case DELETE_PLACE : 
            return {
                ...state,
                places : state.places.filter( place => {
                    return place.key !== state.selectedPlace.key;
                })
            };
            break;
        case SELECT_PLACE :
            return {
                ...state,
                selectedPlace : state.places.find( place => {
                    return place.key == action.placeKey;
                })
            };
            break;
        case DESELECT_PLACE :
            return {
                ...state,
                selectedPlace : null,
            };
            break;
        case UPDATE_TEXTINPUT : 
            return {
                ...state,
                placeName : action.placeName,
            };
            break;
        default : 
            return state;    

    }
}

export default reducer;