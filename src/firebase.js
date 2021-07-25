import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU6gOceNx_vV-mh67IIv-d0JNsh1lgvW8",
  authDomain: "react-clone-43589.firebaseapp.com",
  projectId: "react-clone-43589",
  storageBucket: "react-clone-43589.appspot.com",
  messagingSenderId: "71768785840",
  appId: "1:71768785840:web:13d2c7b4a7c30d9a5fcc75",
  measurementId: "G-Y940XYE82Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
