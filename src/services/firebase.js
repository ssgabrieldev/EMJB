import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgHzKsXftbagPlBukx1tlFG4fOvzhkanY",
  authDomain: "gabriel-43edd.firebaseapp.com",
  projectId: "gabriel-43edd",
  storageBucket: "gabriel-43edd.appspot.com",
  messagingSenderId: "274746733416",
  appId: "1:274746733416:web:7416ad7f48ccedba325cdd"
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
