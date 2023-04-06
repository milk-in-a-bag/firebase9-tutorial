import { initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAh4t_IptjN3dIvbGQe7sAnesNISnGlmeY",
    authDomain: "fir-9-tutorial-9282a.firebaseapp.com",
    projectId: "fir-9-tutorial-9282a",
    storageBucket: "fir-9-tutorial-9282a.appspot.com",
    messagingSenderId: "890997476989",
    appId: "1:890997476989:web:1a5c063e70b9d67ee3eb14"
  };

  initializeApp(firebaseConfig);

  //initialize service - firestore
  const db = getFirestore();

  //collection ref
  const colRef = collection(db, "books");

  //get collection data
  getDocs(colRef).then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })