import {createStore} from 'redux';

const initialState = {
    username: '',
    favShow: ''
}

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_SHOW = 'UPDATE_SHOW';

const reducer = (state=initialState, action) => {
    console.log(action);
    switch(action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload
            }

        case UPDATE_SHOW:
            return{
                ...state,
                favShow: action.payload
            }
        default: return state;
    }
}

export default createStore(reducer);