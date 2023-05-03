
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore" 
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDvcmTJw39AJf7TuSMZg6I2DN3I9zlApT8",
  authDomain: "chat-app-262b4.firebaseapp.com",
  projectId: "chat-app-262b4",
  storageBucket: "chat-app-262b4.appspot.com",
  messagingSenderId: "948650919247",
  appId: "1:948650919247:web:b7b404843b91337d45313a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth=getAuth(app);
let db=getFirestore(app);
let storage=getStorage(app)

export {auth,db,storage}