import { initializeApp } from 'firebase/app'
import {
   getDatabase,
   get,
   ref,
   push,
   set,
   remove,
   update
} from 'firebase/database'
import { GoogleAuthProvider, getAuth ,onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
   apiKey: process.env.FIREBASE_API_KEY,
   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.FIREBASE_DATABASE_URL,
   projectId: process.env.FIREBASE_PROJECT_ID,
   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.FIREBASE_APP_ID
}

initializeApp(firebaseConfig)

const database = getDatabase()
const googleAuthProvider = new GoogleAuthProvider()
const auth = getAuth()

export {
   push,
   get,
   ref,
   set,
   remove,
   update,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
   auth,
   googleAuthProvider,
   database as default
}
