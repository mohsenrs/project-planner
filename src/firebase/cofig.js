import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFXIGnxb4TFIFo8StZnqTk44PgWonA_Z0",
  authDomain: "project-planner-mohsen.firebaseapp.com",
  projectId: "project-planner-mohsen",
  storageBucket: "project-planner-mohsen.appspot.com",
  messagingSenderId: "418843120089",
  appId: "1:418843120089:web:3df125dc2431ede9e409c8",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
