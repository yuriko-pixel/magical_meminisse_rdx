import inputreducer from './reducer'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const {createStore} = require('redux');

const store= createStore(inputreducer, applyMiddleware(thunk));

store.subscribe(function(){console.log(store.getState())})
export default store;