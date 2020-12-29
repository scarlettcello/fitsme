import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCxbZqAMYWUJXXJkEtilLC6NMxbYQKxu5Y",
  authDomain: "fitsme-69f05.firebaseapp.com",
  databaseURL: "https://fitsme-69f05-default-rtdb.firebaseio.com",
  projectId: "fitsme-69f05",
  storageBucket: "fitsme-69f05.appspot.com",
  messagingSenderId: "749099065989",
  appId: "1:749099065989:web:db8d1682c9813c471d3fec",
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.addScope("user_birthday");
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
githubAuthProvider.addScope("repo");

export {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider,
  database as default,
};

// database.ref("eatenFood").set({
//   foodName: "apple",
//   caloriesPerAmount: 51,
//   amount: "90g",
// });

// database.ref("eatenFood").set({
//   foodName: "banana",
//   caloriesPerAmount: 81,
//   amount: "100g",
// });
