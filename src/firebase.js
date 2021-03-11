import firebase from "firebase";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBzOnD3MYcgbH3BkREdSAxFzl5Sw7qRwI",
  authDomain: "project-6917f.firebaseapp.com",
  databaseURL: "https://project-6917f-default-rtdb.firebaseio.com",
  projectId: "project-6917f",
  storageBucket: "project-6917f.appspot.com",
  messagingSenderId: "766628732538",
  appId: "1:766628732538:web:2c2db9bde82bc19af625c3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
