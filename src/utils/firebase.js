
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvyRPkz3PWYv84XYfZhuGuib44A8YCsKA",
    authDomain: "todo-app-5e182.firebaseapp.com",
    projectId: "todo-app-5e182",
    storageBucket: "todo-app-5e182.appspot.com",
    messagingSenderId: "363683749155",
    appId: "1:363683749155:web:ef7a4c86f15c4f1638c096"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()

// Use Firebase authentication
export const auth = getAuth(app)

export default db