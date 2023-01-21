import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAl6LouWNIiBXrXyD8dZ9v5t1iJtFXHtdU",
    authDomain: "yyh-worldcup.firebaseapp.com",
    projectId: "yyh-worldcup",
    storageBucket: "yyh-worldcup.appspot.com",
    messagingSenderId: "939411289428",
    appId: "1:939411289428:web:86023be1d64362989244c1"
};

const firebaseApp = initializeApp(firebaseConfig)  //1차 정보 접근
const database = getFirestore(firebaseApp)  //정보가 올바르면 아래 파이어스토어 접근


export { database }