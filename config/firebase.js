// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import Firebase from 'firebase/app';
// // import 'firebase/auth';
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBRN1x_eb-44hfKmtGohJve-PcudWKUoro",
//     authDomain: "gigz-ke.firebaseapp.com",
//     projectId: "gigz-ke",
//     storageBucket: "gigz-ke.appspot.com",
//     messagingSenderId: "128783020749",
//     appId: "1:128783020749:web:afa78c12979728857caf84"
// };

// // Initialize Firebase
// // if a Firebase instance doesn't exist, create one
// // if (!firebase.apps.length) {
// const app = initializeApp(firebaseConfig);
// // }
// export default app;
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
if (typeof window !== "undefined") {
    firebase.initializeApp({
        apiKey: "AIzaSyBRN1x_eb-44hfKmtGohJve-PcudWKUoro",
        authDomain: "gigz-ke.firebaseapp.com",
        projectId: "gigz-ke",
        storageBucket: "gigz-ke.appspot.com",
        messagingSenderId: "128783020749",
        appId: "1:128783020749:web:afa78c12979728857caf84"
    });
}

export { firebase };
