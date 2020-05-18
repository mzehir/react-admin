import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfigStorage = {
    apiKey: "AIzaSyD_XIODCYyGzJF8npyeKRhFKZrxjJwqxSI",
    authDomain: "test-54288.firebaseapp.com",
    databaseURL: "https://test-54288.firebaseio.com",
    projectId: "test-54288",
    storageBucket: "test-54288.appspot.com",
    messagingSenderId: "596746487626",
    appId: "1:596746487626:web:0a0cdf1fa79d43c405a3b3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfigStorage);

const storage = firebase.storage();

export {
    storage, firebase as default
}