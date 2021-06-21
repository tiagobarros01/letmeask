import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAJOfAMaYecAK4hKlOX5pBQBCC8EO3N8U4",
  authDomain: "letmeask-64a97.firebaseapp.com",
  databaseURL: "https://letmeask-64a97-default-rtdb.firebaseio.com",
  projectId: "letmeask-64a97",
  storageBucket: "letmeask-64a97.appspot.com",
  messagingSenderId: "591257258830",
  appId: "1:591257258830:web:a02b031272a879351fac1f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
