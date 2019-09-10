import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';
import { collectionData } from 'rxfire/firestore';
import { filter } from 'rxjs/operators';


const app = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
});

const firestore = firebase.firestore(app); // Initialize firestore
const auth = firebase.auth(app); // Initialize firebase auth
const loggedIn$ = authState(auth).pipe(filter(user => !!user)); // Observable only return when user is logged in.

export { app, auth, firestore, collectionData, loggedIn$ };

export default firebase;