
import {ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE, UPDATE_TEXTINPUT} from './actionTypes';

export const addPlace = () => {
    return {
        type : ADD_PLACE,
    }
}

export const selectPlace = (key) => {
    return {
        type : SELECT_PLACE,
        placeKey : key,
    }
}

export const deletePlace = () => {
    return {
        type : DELETE_PLACE,
    }
}

export const deselectPlace = () => {
    return {
        type : DESELECT_PLACE,
    }
}

export const updateTextInput = (placeName) => {
    return {
        type : UPDATE_TEXTINPUT,
        placeName : placeName,
    }
}