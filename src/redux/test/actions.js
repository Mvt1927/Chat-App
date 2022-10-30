export const ADD_VALUE = 'ADD_VALUE';
export const GET_VALUE = 'GET_VALUE';
export const REMOVE_VALUE = 'REMOVE_VALUE';

export const getValue = () => {
    return {type: GET_VALUE}
}
export const addValue = () => {
    return {type: ADD_VALUE}
}
export const rmValue = () => {
    return {type: REMOVE_VALUE}
}