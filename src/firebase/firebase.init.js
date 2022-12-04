// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAgrQ6tG1SfBC5Jlcl7_E7CsiN8hwQmfHs",
    authDomain: "the-school-web.firebaseapp.com",
    projectId: "the-school-web",
    storageBucket: "the-school-web.appspot.com",
    messagingSenderId: "81231357458",
    appId: "1:81231357458:web:fdac1e8e73b7ce53211acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;