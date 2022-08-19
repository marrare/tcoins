import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBr7xDG3FPEYPMaiOnMlJNxVJMnJ4-A12k",
    authDomain: "t-coins-a913f.firebaseapp.com",
    databaseURL:"https://t-coins-a913f-default-rtdb.firebaseio.com/",
    projectId: "t-coins-a913f",
    storageBucket: "t-coins-a913f.appspot.com",
    messagingSenderId: "590110810673",
    appId: "1:590110810673:web:32540c4b9bbe2b709fab10",
    measurementId: "G-G5VVCP0RKK"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
