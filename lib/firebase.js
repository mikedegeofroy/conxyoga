// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, where, limit, query, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsBVWkyed1Pgw5te_tboXK988W3N06a2g",
  authDomain: "conxyoga-e4db9.firebaseapp.com",
  projectId: "conxyoga-e4db9",
  storageBucket: "conxyoga-e4db9.appspot.com",
  messagingSenderId: "902296720491",
  appId: "1:902296720491:web:25610bf54f058447330d2e"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

export const firestore = getFirestore(firebaseApp);

// export const firestore = firebase.firestore();
// export const storage = firebase.storage();