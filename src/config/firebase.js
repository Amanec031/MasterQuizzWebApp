import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHKcPg9zx9yizcAfR86tB8FA1aFwke6_0",
  authDomain: "masterquiz-f868a.firebaseapp.com",
  projectId: "masterquiz-f868a",
  storageBucket: "masterquiz-f868a.appspot.com",
  messagingSenderId: "277310493304",
  appId: "1:277310493304:web:3ad429f6d7fc65aae2538d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);