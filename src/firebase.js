import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDB82dKZYxYKQh9PRgJaWRv7S6RJ5noOds",
  authDomain: "todo-59863.firebaseapp.com",
  projectId: "todo-59863",
  storageBucket: "todo-59863.appspot.com",
  messagingSenderId: "361023997384",
  appId: "1:361023997384:web:a10751acded6361de06cfd",
  measurementId: "G-0RR2B0JX15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



export { app , auth };  