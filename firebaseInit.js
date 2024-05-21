// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUdUYxdSD7tu6KB1-7mylhFFMNqn7oNkU",
  authDomain: "blogging-app-5ae89.firebaseapp.com",
  projectId: "blogging-app-5ae89",
  storageBucket: "blogging-app-5ae89.appspot.com",
  messagingSenderId: "804788381498",
  appId: "1:804788381498:web:dbf292480181f02c765203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//To initialize firestore as firebase offers two service so we need to specify 
//which service we want to use by initializing it
export const db = getFirestore(app);