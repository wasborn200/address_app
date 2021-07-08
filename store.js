import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCtb9npVkJ6W94GZXd5PY51jM6EraZME0o",
  authDomain: "wasborn-reactapp1.firebaseapp.com",
  databaseURL: "https://wasborn-reactapp1-default-rtdb.firebaseio.com",
  projectId: "wasborn-reactapp1",
  storageBucket: "wasborn-reactapp1.appspot.com",
  messagingSenderId: "792384329558",
  appId: "1:792384329558:web:ad6286c9b4352b4f40a8f7"
};

var fireapp;
try {
  firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
}


// レデューサー
function fireReducer (state = initial, action) {
  switch (action.type) {
    case 'TESTACTION':
    default:
      return state;
  }
}

export function initStore(state = initial) {
  return createStore(fireReducer, state,
    applyMiddleware(thunkMiddleware))
}
