// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Ttr0nd2RHj9m8TcPOVnipmJ8YDsSLX4",
  authDomain: "home-booking-48cf4.firebaseapp.com",
  projectId: "home-booking-48cf4",
  storageBucket: "home-booking-48cf4.firebasestorage.app",
  messagingSenderId: "228688729193",
  appId: "1:228688729193:web:a267b4ecba481395c4fef8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
