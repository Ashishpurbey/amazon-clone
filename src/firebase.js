// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCMq5ubuAE8YxoaszY0Dx9LOiAYS4-HkW4",
    authDomain: "challange-a397d.firebaseapp.com",
    projectId: "challange-a397d",
    storageBucket: "challange-a397d.appspot.com",
    messagingSenderId: "908585287965",
    appId: "1:908585287965:web:ba5ea1842d64b6596d21f4",
    measurementId: "G-M0GB3W7CDV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //it is like a database in firebase
  const db = firebaseApp.firestore();

  //gives us a variable ,through which we can deal with all th stuff like signin and login etc...
  const auth = firebase.auth();


  export {db,auth};