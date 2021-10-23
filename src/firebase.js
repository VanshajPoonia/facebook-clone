import firebase, { firestore } from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6AaFjC6z9bfKEZl1L7gcEniLoIHK6uFI",
  authDomain: "facebook-react-e146d.firebaseapp.com",
  databaseURL:
    "https://facebook-react-e146d.asia-southeast2.firebasedatabase.app",
  projectId: "facebook-react-e146d",
  storageBucket: "facebook-react-e146d.appspot.com",
  messagingSenderId: "546854961927",
  appId: "1:546854961927:web:bee115de00f760d336bba2",
  measurementId: "G-D3B9QQTSG0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
