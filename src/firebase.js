// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAcNPu-sebWAvRoaMqwwF_27MukFUy64vs",
    authDomain: "twitter-clone-9f2b2.firebaseapp.com",
    projectId: "twitter-clone-9f2b2",
    storageBucket: "twitter-clone-9f2b2.appspot.com",
    messagingSenderId: "447374366220",
    appId: "1:447374366220:web:2c9a125aa1708b08c48029",
    measurementId: "G-JP4P94HDQS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);



  const db=firebaseApp.firestore();

  export default db;