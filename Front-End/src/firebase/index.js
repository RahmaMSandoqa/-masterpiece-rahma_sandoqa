import firebase from "../../node_modules/@firebase/app";
import "../../node_modules/@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPLx-N6ST3WK64waetJVUZWmKCMI4dDyI",
  authDomain: "test-fc67e.firebaseapp.com",
  databaseURL: "https://test-fc67e.firebaseio.com",
  projectId: "test-fc67e",
  storageBucket: "test-fc67e.appspot.com",
  messagingSenderId: "1063840829526",
  appId: "1:1063840829526:web:8696545f3cd0182b076bf7",
  measurementId: "G-HH4CF7MYX0"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
