import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEAOhkYgMnDGUjF6ISbA2Mr1U8c14MX98",
  authDomain: "fir-tutorial-62a85.firebaseapp.com",
  projectId: "fir-tutorial-62a85",
  storageBucket: "fir-tutorial-62a85.appspot.com",
  messagingSenderId: "928190202937",
  appId: "1:928190202937:web:8155bb7bceb307447479e8",
  measurementId: "G-VR9513XWY2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
