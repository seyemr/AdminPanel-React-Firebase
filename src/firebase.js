// firebase.js
import {
  initializeApp
} from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";
import {
  getStorage
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAitAp08B8NyrcCp0GXKpJ0G00B9ZzyHW8",
  authDomain: "coin-ae1ce.firebaseapp.com",
  projectId: "coin-ae1ce",
  storageBucket: "coin-ae1ce.appspot.com",
  messagingSenderId: "714516464971",
  appId: "1:714516464971:web:20252d683e7c48860bd4ce",
  measurementId: "G-E5LGC1K6LT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
  db,
  auth,
  storage,
  GoogleAuthProvider
};