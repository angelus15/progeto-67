import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
apiKey: "AIzaSyCmX1Ypoy-qPF2dj26OpxZLxOHGBBLG2GY",
  authDomain: "projeto-67-da37a.firebaseapp.com",
  projectId: "projeto-67-da37a",
  storageBucket: "projeto-67-da37a.appspot.com",
  messagingSenderId: "952652103584",
  appId: "1:952652103584:web:964286d95fbae4b1a12ec5"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();