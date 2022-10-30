export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const GET_ACCESS_TOKEN = 'GET_ACCESS_TOKEN';
export const REMOVE_ACCESS_TOKEN = 'REMOVE_ACCESS_TOKEN';

export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const REMOVE_USER= 'REMOVE_USER';

export const getToken = () => {
    return {
        type: GET_ACCESS_TOKEN
    }
}
export const setToken = (token) => {
    return {
        type: SET_ACCESS_TOKEN,
        access_token: token
    }
}
export const rmToken = () => {
    return {
        type: REMOVE_ACCESS_TOKEN
    }
}

export const getUser = () => {
    return {
        type: GET_USER
    }
}
export const setUser = (user = {id,username}) => {
    return {
        type: SET_USER,
        user: user
    }
}
export const rmUser = () => {
    return {
        type: REMOVE_USER
    }
}