// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD34PKZuhTjFueQpcz5UkobA1CKYccXq-k",
    authDomain: "dragon-news-1000b.firebaseapp.com",
    projectId: "dragon-news-1000b",
    storageBucket: "dragon-news-1000b.firebasestorage.app",
    messagingSenderId: "573758787948",
    appId: "1:573758787948:web:804c468e2f9dc14ca96349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 