// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN1EvL8V_IeQjkEG_tf0mrmA7ominKGgk",
    authDomain: "react-auth-integration-f3137.firebaseapp.com",
    projectId: "react-auth-integration-f3137",
    storageBucket: "react-auth-integration-f3137.appspot.com",
    messagingSenderId: "39556877391",
    appId: "1:39556877391:web:476f3d63f26dc2a2722e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;