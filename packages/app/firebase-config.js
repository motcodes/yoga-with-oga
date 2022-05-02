import * as firebase from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import { env } from '../../secrets'
import { EventEmitter } from 'react-native'

console.log(env.FIREBASE_API_KEY)

const app = firebase.initializeApp({
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID
})

export const db = getFirestore(app)
export const auth = getAuth(app)
