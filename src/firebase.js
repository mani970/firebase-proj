import firebase from "firebase";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgYB9PmiawndVeE4KXjzQiKp0abTTWD8",
  authDomain: "fir-auth-8adb0.firebaseapp.com",
  projectId: "fir-auth-8adb0",
  storageBucket: "fir-auth-8adb0.appspot.com",
  messagingSenderId: "310046372282",
  appId: "1:766628732538:web:72f3aa08e86b111f6ced83",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
