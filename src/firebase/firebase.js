import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBxTiEJo1gmjPP9lFsdgn5nutADg853J3M",
    authDomain: "expensify-5c041.firebaseapp.com",
    databaseURL: "https://expensify-5c041.firebaseio.com",
    projectId: "expensify-5c041",
    storageBucket: "expensify-5c041.appspot.com",
    messagingSenderId: "362025619013"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

