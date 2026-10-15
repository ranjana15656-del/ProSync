const firebaseConfig = {
    apiKey: "AIzaSyC1Ctf65gv6Li9ejonvHh9RsEIm6RAgV6k",
    authDomain: "prosync-a15e4.firebaseapp.com",
    projectId: "prosync-a15e4",
    storageBucket: "prosync-a15e4.firebasestorage.app",
    messagingSenderId: "769120762738",
    appId: "1:769120762738:web:3cfc4e32afd59d75b8bbeb"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

console.log("Firebase connected:", firebase.app().name);