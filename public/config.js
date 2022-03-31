import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCTeCoxESh4lY3zIC482-h9viWKEy9h7E",
    authDomain: "imagestock-bp.firebaseapp.com",
    projectId: "imagestock-bp",
    storageBucket: "imagestock-bp.appspot.com",
    messagingSenderId: "821183989236",
    appId: "1:821183989236:web:b119de68dfea799137e5a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };