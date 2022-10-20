// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNXJtlqQgzmbDSfWF4EUYr5IeLSsmjjDc",
  authDomain: "daisy-ui-with-context.firebaseapp.com",
  projectId: "daisy-ui-with-context",
  storageBucket: "daisy-ui-with-context.appspot.com",
  messagingSenderId: "455376616312",
  appId: "1:455376616312:web:ca931559ded4e773b7668d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;