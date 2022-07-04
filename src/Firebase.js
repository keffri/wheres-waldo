import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqemAcZ6p1zTedxT3kqAltgWOJkuroO7g",
  authDomain: "findr-9a6e8.firebaseapp.com",
  projectId: "findr-9a6e8",
  storageBucket: "findr-9a6e8.appspot.com",
  messagingSenderId: "64463324607",
  appId: "1:64463324607:web:8ea79a8bb234c9e93e4d0a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
