import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKsqpF9QPCEMxr2TVGl8t5dy7Wt5cENBs",
    authDomain: "messengerapp-79c42.firebaseapp.com",
    databaseURL: "https://messengerapp-79c42-default-rtdb.firebaseio.com",
    projectId: "messengerapp-79c42",
    storageBucket: "messengerapp-79c42.appspot.com",
    messagingSenderId: "713650007579",
    appId: "1:713650007579:web:0ace068daf2978bb4212be",
    measurementId: "G-ZYGQ153HN1"
  };

  firebase.initializeApp(config);

  export default firebase;