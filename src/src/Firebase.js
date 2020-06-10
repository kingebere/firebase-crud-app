import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "input key ",
    authDomain: "input details",
    databaseURL: "input details",
    projectId: "input details",
    storageBucket: "input details",
    messagingSenderId: "input details",
    appId: "input details",
    measurementId: "input details"
  };
  firebase.initializeApp( firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
export default firebase