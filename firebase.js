
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLLCTdsZ2ctpKQR9dYQmwiqCz76ay6LbA",
  authDomain: "twitter-clone-45770.firebaseapp.com",
  projectId: "twitter-clone-45770",
  storageBucket: "twitter-clone-45770.appspot.com",
  messagingSenderId: "199871363978",
  appId: "1:199871363978:web:20f0a91e3870d59862e673"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app)

export default db
