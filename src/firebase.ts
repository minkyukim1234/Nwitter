import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbcWb9F_J5UpiY_9mL445rlpiSJ5WQr-s",
  authDomain: "nwitter-7c62e.firebaseapp.com",
  projectId: "nwitter-7c62e",
  storageBucket: "nwitter-7c62e.firebasestorage.app",
  messagingSenderId: "757390922295",
  appId: "1:757390922295:web:b1d0efc61544c70c7de5b2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
