// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxDw1tNutN6wRjt0yypgIjayFeAUNPgk0",
    authDomain: "instant-news-client.firebaseapp.com",
    projectId: "instant-news-client",
    storageBucket: "instant-news-client.appspot.com",
    messagingSenderId: "352031879549",
    appId: "1:352031879549:web:ab7c655a56d7daf7311c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;