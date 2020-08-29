import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDS9C92nGlH0as-DeORr6UsgTaem58kgFI", // this is my API_KEY
  authDomain: "crwn-db-1bc14.firebaseapp.com",
  databaseURL: "https://crwn-db-1bc14.firebaseio.com",
  projectId: "crwn-db-1bc14",
  storageBucket: "crwn-db-1bc14.appspot.com",
  messagingSenderId: "496106281339",
  appId: "1:496106281339:web:9c5d38671548a088e845de",
  measurementId: "G-K77TEPN44M"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
