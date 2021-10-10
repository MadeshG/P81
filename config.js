import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyC9ryAFUi1kGVd26Ge5mjJXT6gVUmJudKc",
    authDomain: "buzzer-app-285ba.firebaseapp.com",
    databaseURL: "https://buzzer-app-285ba-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-285ba",
    storageBucket: "buzzer-app-285ba.appspot.com",
    messagingSenderId: "347142751622",
    appId: "1:347142751622:web:5288a54d5f96a16d0c5807"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()