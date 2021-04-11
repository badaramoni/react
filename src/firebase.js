import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQy7XZlj6lY0_4eWQ20eVNLJ3dIZv0dv4",
    authDomain: "todo-app-9d33e.firebaseapp.com",
    projectId: "todo-app-9d33e",
    storageBucket: "todo-app-9d33e.appspot.com",
    messagingSenderId: "687561715885",
    appId: "1:687561715885:web:1cac6400c9018f119a5624",
    measurementId: "G-JYF3R5N5F7"


});

const db = firebaseApp.firestore();

export default db ;
