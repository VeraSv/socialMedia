'use strict';

import {createStore} from 'redux';
import {combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth_reducer'

let reducers = combineReducers ({
    postData:profileReducer,
    dialogsData:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
});
let store= createStore(reducers);

export default store;