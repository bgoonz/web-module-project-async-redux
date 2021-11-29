import {PULL_POKE_INITIAL, PULL_POKE_APPROVED, PULL_POKE_FAILED } from "../actions";

const initialState = {
    pokemon: [],
    error: '',
    isPulling: false,
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case PULL_POKE_INITIAL:
            return {
                ...state,
                error: '',
                isPulling: true,
            };
            case PULL_POKE_APPROVED:
                    return {
                        ...state,
                        error: '',
                        isPulling: false,
                        pokemon: action.payload
                    };
            case PULL_POKE_FAILED:
                return {
                    ...state,
                    error: action.payload,
                };
                
            default:
                return state;
    }
}

export default reducer;