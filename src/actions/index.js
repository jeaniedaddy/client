import {SIGN_IN, SIGN_OUT, CREATE_STREAM} from './types';
import streams from '../apis/streams';


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => async dispatch => {
    const res = await streams.post('/streams', formValues);
    console.log(res);

    dispatch({
        type: CREATE_STREAM,
        payload: res.data
    });
};