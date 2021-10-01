import { initializeApp } from 'firebase/app'
import {
   getDatabase,
   ref,
   push,
   set,
   onValue,
   onChildRemoved,
   onChildChanged,
   onChildAdded,
   off,
   remove,
   update
} from 'firebase/database'

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

export {
   push,
   ref,
   set,
   onValue,
   onChildRemoved,
   onChildChanged,
   onChildAdded,
   off,
   remove,
   update,
   database as default
}
