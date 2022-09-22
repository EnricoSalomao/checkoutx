import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

let firebaseConfig = {
  apiKey: "AIzaSyCbs7mvLsHMbC8G3_AbWZ6QKXAdzEY9ZGY",
  authDomain: "checkoutx-150f0.firebaseapp.com",
  projectId: "checkoutx-150f0",
  storageBucket: "checkoutx-150f0.appspot.com",
  messagingSenderId: "20847169732",
  appId: "1:20847169732:web:59990ac64b7f876de47991"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase
