import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

let firebaseConfig = {
    apiKey: "AIzaSyDhnU-yc6fyvm4Iq7QdFC7i5-QvePyxAs0",
    authDomain: "dashpago-aa787.firebaseapp.com",
    projectId: "dashpago-aa787",
    storageBucket: "dashpago-aa787.appspot.com",
    messagingSenderId: "63450766605",
    appId: "1:63450766605:web:f3a58c57abbf362ef12444"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase
