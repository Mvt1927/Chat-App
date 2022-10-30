import { legacy_createStore as createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk" 

import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from "redux"
// import createSagaMiddleware from "@redux-saga/core";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import { persistStore, persistReducer } from 'redux-persist'
import authReducer from './auth/reducers'
import valueReducer from './test/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage'
 
// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, authReducer)

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
}
const reducer = combineReducers({
    value: valueReducer,
    auth: authReducer})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer,applyMiddleware(thunk))

export const persistor = persistStore(store)

export default store;