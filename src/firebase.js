import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCBF-jnto0YqEjwXUh3c7yp6dkydphlrIw",
  authDomain: "twittter-6c643.firebaseapp.com",
  projectId: "twittter-6c643",
  storageBucket: "twittter-6c643.appspot.com",
  messagingSenderId: "626532961474",
  appId: "1:626532961474:web:b8650c0e63952654d7ff5b",
  measurementId: "G-DC8EZZN71G"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;