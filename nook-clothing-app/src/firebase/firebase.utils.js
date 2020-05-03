import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyAV5ry1TfMASKeMYvJ3PtDnQtJY4JIf4dM",
    authDomain: "crown-db-e017b.firebaseapp.com",
    databaseURL: "https://crown-db-e017b.firebaseio.com",
    projectId: "crown-db-e017b",
    storageBucket: "crown-db-e017b.appspot.com",
    messagingSenderId: "379010931932",
    appId: "1:379010931932:web:f3d61b9f93ab61c3332819",
    measurementId: "G-ZD7SCN8FLX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;