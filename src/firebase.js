//const firebaseConfig = {
//    apiKey: "AIzaSyA7yaXas-oT5mnKDq3iGHeVjBLraay4JUM",
//    authDomain: "todo-app-670c7.firebaseapp.com",
//    databaseURL: "https://todo-app-670c7.firebaseio.com",
//    projectId: "todo-app-670c7",
//    storageBucket: "todo-app-670c7.appspot.com",
//    messagingSenderId: "1063625929782",
//    appId: "1:1063625929782:web:d3f36c35a4573c2ad69497",
//    measurementId: "G-HLXSYTMKTF"
//  };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7yaXas-oT5mnKDq3iGHeVjBLraay4JUM",
    authDomain: "todo-app-670c7.firebaseapp.com",
    databaseURL: "https://todo-app-670c7.firebaseio.com",
    projectId: "todo-app-670c7",
    storageBucket: "todo-app-670c7.appspot.com",
    messagingSenderId: "1063625929782",
    appId: "1:1063625929782:web:d3f36c35a4573c2ad69497",
    measurementId: "G-HLXSYTMKTF"
});

const db = firebaseApp.firestore();

export default db;