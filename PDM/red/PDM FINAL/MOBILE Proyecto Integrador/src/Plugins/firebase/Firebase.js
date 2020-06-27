import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdlACS_tc23cj6yIEKRIzMpuuiOpgvPcc",
  authDomain: "pdm2020-c2151.firebaseapp.com",
  databaseURL: "pdm2020-c2151.firebaseio.com",
  projectId: "pdm2020-c2151",
  storageBucket: "pdm2020-c2151.appspot.com",
  messagingSenderId: "618108963310",
  appId: "1:618108963310:web:af23d75a5ed51c32db66ff",
  measurementId: "G-WT83QRWNHQ",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
