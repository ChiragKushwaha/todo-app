import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDDNXT1iNZ5NV7_E_eFWGPBweQ8GBhuYSs',
  authDomain: 'todo-app-c6c23.firebaseapp.com',
  databaseURL: 'https://todo-app-c6c23.firebaseio.com',
  projectId: 'todo-app-c6c23',
  storageBucket: 'todo-app-c6c23.appspot.com',
  messagingSenderId: '1031368493272',
  appId: '1:1031368493272:web:b8f9602afe7580374defad',
  measurementId: 'G-2VYCJS7ZG2',
});

const db = firebaseApp.firestore();

export default db;
