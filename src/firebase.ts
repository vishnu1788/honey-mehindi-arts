// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTbo5F7ZdvoHhtTovPF7vJJIc6QaSkoC0",
  authDomain: "honey-mehindi-arts.firebaseapp.com",
  projectId: "honey-mehindi-arts",
  storageBucket: "honey-mehindi-arts.firebasestorage.app",
  messagingSenderId: "964709098112",
  appId: "1:964709098112:web:0d9d67ed933f8e2681fc65",
  measurementId: "G-WG84M4H7ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
