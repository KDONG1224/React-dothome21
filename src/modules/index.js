import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { all, fork } from 'redux-saga/effects';
import { alcholcup } from '../lib/alchol';


export function* saga() {
  yield all([fork(alcholcup)]);
}

const reducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    alcholcupState: alcholcup
  });

export default reducer;
