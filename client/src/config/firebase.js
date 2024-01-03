import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCIyqAXcpw4XlqaDHi89uZZZO3uMu7Wm4s",
    authDomain: "businessbuilder-ee68a.firebaseapp.com",
    projectId: "businessbuilder-ee68a",
    storageBucket: "businessbuilder-ee68a.appspot.com",
    messagingSenderId: "377937357137",
    appId: "1:377937357137:web:19746eb0e5a6e6a8244b70",
    measurementId: "G-G37ED6YK26"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

