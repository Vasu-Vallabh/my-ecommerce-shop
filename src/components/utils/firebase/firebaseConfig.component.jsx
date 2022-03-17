import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8Mk2mv0_xZKd9otFJ4YmPFnln2GiVlOI",
    authDomain: "my-cart-8e9c3.firebaseapp.com",
    projectId: "my-cart-8e9c3",
    storageBucket: "my-cart-8e9c3.appspot.com",
    messagingSenderId: "942013294706",
    appId: "1:942013294706:web:dc1333c37cb7ae71ebfaeb"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
