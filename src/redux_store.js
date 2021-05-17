import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux';
import profileReducer from './Profile/profile-reducer';
import dialogsReducer from './Dialogs/dialogs-reducer';
import usersReducer from './Users/users-reducer';
import authReducer from './auth_reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers ({
    postData:profileReducer,
    dialogsData:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
});
let store= createStore(reducers, applyMiddleware(thunk));

export default store;