import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuu6b7txhz8Gog6IyyuYCDI29s_kuNlY0",
  authDomain: "react-fb-clone-b0565.firebaseapp.com",
  databaseURL: "https://react-fb-clone-b0565.firebaseio.com",
  projectId: "react-fb-clone-b0565",
  storageBucket: "react-fb-clone-b0565.appspot.com",
  messagingSenderId: "443556313610",
  appId: "1:443556313610:web:4483ef936410a0f289fdf3",
  measurementId: "G-HHX8XEYPBB",
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref("users");

export const postRef = firebaseApp.database().ref("posts");
