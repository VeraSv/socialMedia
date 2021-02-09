'use strict';

import {createStore} from 'redux';
import {combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let reducers = combineReducers ({
    postData:profileReducer,
    dialogsData:dialogsReducer
});
let store= createStore(reducers);

export default store;