'use strict';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import message from './message';

export const reducers = combineReducers<any, any>({
  form: formReducer,
  message
});

