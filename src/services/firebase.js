import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-FMLHn-ko5kYNyou4eEfwpYZZyd2gTSc",
  authDomain: "emjb-25396.firebaseapp.com",
  projectId: "emjb-25396",
  storageBucket: "emjb-25396.appspot.com",
  messagingSenderId: "985820330830",
  appId: "1:985820330830:web:ea4db50895c0e6bbd03c1f",
  measurementId: "G-SZC5X3PH8X"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDb = getFirestore(firebaseApp);

setPersistence(firebaseAuth, browserLocalPersistence);

export {
  firebaseApp,
  firebaseAuth,
  firebaseDb
}
