import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-FMLHn-ko5kYNyou4eEfwpYZZyd2gTSc",
  authDomain: "emjb-25396.firebaseapp.com",
  projectId: "emjb-25396",
  storageBucket: "emjb-25396.appspot.com",
  messagingSenderId: "985820330830",
  appId: "1:985820330830:web:8fa3705df96923e5d03c1f",
  measurementId: "G-G0BL8CV4Q9"
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
