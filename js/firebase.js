import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1rHUMZNYMZmZjmnPnBGnt4c_ZfQpz7RQ",
  authDomain: "smithackathon-e9643.firebaseapp.com",
  projectId: "smithackathon-e9643",
  storageBucket: "smithackathon-e9643.appspot.com",
  messagingSenderId: "169324835741",
  appId: "1:169324835741:web:8df0e8981ca319b13d7574",
  measurementId: "G-00W1DRLGZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export {app,auth,db,storage};