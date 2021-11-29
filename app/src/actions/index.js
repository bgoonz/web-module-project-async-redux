import axios from 'axios';

export const PULL_POKE_INITIAL = 'PULL_POKE_INITIAL';
export const PULL_POKE_APPROVED = 'PULL_POKE_APPROVED';
export const PULL_POKE_FAILED = 'PULL_POKE_FAILED';

export const getPoke = () => dispatch => {
    dispatch({type: PULL_POKE_INITIAL});
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
        dispatch({type: PULL_POKE_APPROVED, payload: res.data.results})
    })
    .catch(err => {
        console.log('error', err.response);
        dispatch({type: PULL_POKE_FAILED, 
            payload: `${err.response.status} ${err.response.data}`});
    });
};