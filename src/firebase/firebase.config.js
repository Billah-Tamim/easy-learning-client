// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1isSiyp3qzpOPkF6t-NAOCALVTFZ53xo",
  authDomain: "easy-learning-client.firebaseapp.com",
  projectId: "easy-learning-client",
  storageBucket: "easy-learning-client.appspot.com",
  messagingSenderId: "173553328313",
  appId: "1:173553328313:web:d1f5371267a4b14f3ffb68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;