import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD76zrIgtRftr_rlDvrPrp2No_IKoOR2-A",
    authDomain: "facebook-clone-v.firebaseapp.com",
    projectId: "facebook-clone-v",
    storageBucket: "facebook-clone-v.appspot.com",
    messagingSenderId: "1030860807360",
    appId: "1:1030860807360:web:cc81c26625afdcfd622125",
    measurementId: "G-MWGWZRWN3Z"
  };

  const firebasApp = firebase.initializeApp(firebaseConfig)
  const db = firebasApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export { auth, provider}
  export default db;