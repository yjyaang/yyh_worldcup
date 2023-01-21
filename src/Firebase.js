import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"


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

// //////////권한 관련 내용//////////
// const auth = getAuth()  //권한

// auth.onAuthStateChanged( user=>{  //사용가능한 유저인지 확인
//     if(user){  //사용가능한 유저이면
//         signInWithEmailAndPassword(auth, 'mail_address', 'password')  //정보를 토대로 로그인
//         .then((userCredential) => {
//             const user = userCredential.user
//             console.log(user)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     } else {  //사용가능한 유저가 아니면
//         createUserWithEmailAndPassword(auth, 'mail_address', 'password')  .then((userCredential) => { //사용자를 추가
//                 signInWithEmailAndPassword(auth, 'mail_address', 'password') //추가된 사용자를 토대로 로그인
//                 .then((userCredential) => {
//                     const user = userCredential.user
//                     console.log(user)
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                 })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }
// })

export { database }