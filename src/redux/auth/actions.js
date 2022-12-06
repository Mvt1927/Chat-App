import * as CONSTANT from './constants'


export const getToken = () => {
    return {
        type: CONSTANT.GET_ACCESS_TOKEN
    }
}
export const setToken = (token) => {
    return {
        type: CONSTANT.SET_ACCESS_TOKEN,
        access_token: token
    }
}
export const rmToken = () => {
    return {
        type: CONSTANT.REMOVE_ACCESS_TOKEN
    }
}

export const getUser = () => {
    return {
        type: CONSTANT.GET_USER
    }
}
export const setUser = (user = {id,username}) => {
    return {
        type: CONSTANT.SET_USER,
        user: user
    }
}
export const rmUser = () => {
    return {
        type: CONSTANT.REMOVE_USER
    }
}
export const rmAll = () => {
    return {
        type: CONSTANT.REMOVE_ALL
    }
}