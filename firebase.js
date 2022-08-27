// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAty3OwYHGxigJDPm25ZqLQ_4dXbnNLQmY",
  authDomain: "team2-1358f.firebaseapp.com",
  projectId: "team2-1358f",
  storageBucket: "team2-1358f.appspot.com",
  messagingSenderId: "616147935493",
  appId: "1:616147935493:web:c97782315663cbed40d76c",
  measurementId: "G-073Q4CGSJR",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)
