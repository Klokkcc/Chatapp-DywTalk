import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBell5OSAOtrkHnZDN-HIBcIij1POGvLYE",
  authDomain: "chatyeeah-3bf91.firebaseapp.com",
  databaseURL: "https://chatyeeah-3bf91-default-rtdb.firebaseio.com",
  projectId: "chatyeeah-3bf91",
  storageBucket: "chatyeeah-3bf91.appspot.com",
  messagingSenderId: "564945430800",
  appId: "1:564945430800:web:1b214b3afeb02f03361d95"
};
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const getdata=getDatabase();
export const db=getFirestore();