import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDuzCza4TDXZgZD7E0P5ixZW2mbRgxG9Gw",
  authDomain: "portfolioproject-d59d2.firebaseapp.com",
  projectId: "portfolioproject-d59d2",
  storageBucket: "portfolioproject-d59d2.appspot.com",
  messagingSenderId: "265467290483",
  appId: "1:265467290483:web:ea4db24ef771886818db06",
  measurementId: "G-TYPPB2RWM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export { auth, db, storage };
