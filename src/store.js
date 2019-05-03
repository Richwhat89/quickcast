import  {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/userReducer';
import fishReducer from './ducks/fishReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const combinedReducer = combineReducers({
    userReducer,
    fishReducer
});

export default createStore(
    combinedReducer,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);