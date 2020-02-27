import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
//  connectins to firebase
const firebaseConfig = {
   apiKey: "AIzaSyDkiNVc2imQRpUp3yel4fH9kfYd1nf5OqM",
   authDomain: "soccer-club-app.firebaseapp.com",
   databaseURL: "https://soccer-club-app.firebaseio.com",
   projectId: "soccer-club-app",
   storageBucket: "soccer-club-app.appspot.com",
   messagingSenderId: "948060254494",
   appId: "1:948060254494:web:7ee678be317079e52ad90f",
   measurementId: "G-7CC89BF3F9"
};

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();

firebaseDB.ref('matches').once('value').then((SnapShot) => {
   console.log(SnapShot.val())

})