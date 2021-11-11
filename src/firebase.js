import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYmDv9u2x19r8M6MQrLjgfl6lAMFb90lM",
    authDomain: "netflix-clone-1976c.firebaseapp.com",
    projectId: "netflix-clone-1976c",
    storageBucket: "netflix-clone-1976c.appspot.com",
    messagingSenderId: "376507993945",
    appId: "1:376507993945:web:35484dc61cffcc40040648"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  export {auth};
  export default db;