import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDS9C92nGlH0as-DeORr6UsgTaem58kgFI",
  authDomain: "crwn-db-1bc14.firebaseapp.com",
  databaseURL: "https://crwn-db-1bc14.firebaseio.com",
  projectId: "crwn-db-1bc14",
  storageBucket: "crwn-db-1bc14.appspot.com",
  messagingSenderId: "496106281339",
  appId: "1:496106281339:web:9c5d38671548a088e845de",
  measurementId: "G-K77TEPN44M"
};


// The function that we're trying to write is going to be one that allows us to take that user off object that we got back from our authentication library and then store inside of our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Check if we're getting back a valid object. If there is no user object
  if(!userAuth) {
    // if userAuth object does not exist
    return;
  }

  // const userRef = firestore.doc('users/128fdashadu');
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // if it does exist we're going to query inside a firestore of the document to see if it already exists
  // console.log(firestore.doc('users/128fdashadu'));

  console.log(snapShot); // using this snapshot we'll figure out whether or not there's data here

  // in the dev-tools we find DocumentSnapshot. It has the property exists.
  // THe exists property tells us whether there's any data there. The Id tells us of course the same document 
  // metadata -> gives us certain info about things like when it was created right whether or not its cached, whther not it is pendingRights, meaning if there's anything that needs to be updated right thsis snapshot


  // ref: DocumentReference object


  if(!snapShot.exists) {
    // if it doesn't exist we want to create a piece of data here
    // in order to create we have o use the documentRef object

      const { displayName,email } = userAuth;

      const createdAt = new Date(); // this tells us the current date,time when this was invoked

      try {
        // we check if there's any data
        // if there isn't create a new data using code below from our userAuth object
        await userRef.set({
          // .set() is the create method
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user, ' + error.message);
    }
  }


  return userRef; // ???





} 





firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
