import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAePEoogY80nXZuRFQ_1HQW8tDboeefKok",
    authDomain: "animalfact-3534c.firebaseapp.com",
    databaseURL: "https://animalfact-3534c-default-rtdb.firebaseio.com",
    projectId: "animalfact-3534c",
    storageBucket: "animalfact-3534c.appspot.com",
    messagingSenderId: "233634186351",
    appId: "1:233634186351:web:043fc4e4f1df8ff89a799a"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
