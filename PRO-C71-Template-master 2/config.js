import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {

    apiKey: "AIzaSyCdbkzR053lUFrF-h40MGJGdCTiH7PCWaM",
  
    authDomain: "e-ride-4-b539b.firebaseapp.com",
  
    projectId: "e-ride-4-b539b",
  
    storageBucket: "e-ride-4-b539b.appspot.com",
  
    messagingSenderId: "709332408618",
  
    appId: "1:709332408618:web:51b89ec0ba5a7b96d0e653"
  
  };
  
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
