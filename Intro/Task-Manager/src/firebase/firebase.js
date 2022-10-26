// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW8RKjYliUyiXWs9_tjBVOcJGZwqlOyQ8",
  authDomain: "task-manager-e163d.firebaseapp.com",
  databaseURL: "https://task-manager-e163d-default-rtdb.firebaseio.com",
  projectId: "task-manager-e163d",
  storageBucket: "task-manager-e163d.appspot.com",
  messagingSenderId: "1055310341155",
  appId: "1:1055310341155:web:4e1af183f8d80922c93d96",
  measurementId: "G-650SV4RG6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export default db;
export { db };
