import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

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

export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    const usersDocRef = await doc(db, 'users', userAuth.uid);
    const usersSnapshot = await getDoc(usersDocRef);
    console.log(userAuth);
    const { displayName, email, } = userAuth;
    const createdAt = new Date();
    if(!usersSnapshot.exists()) {
        try {
          await setDoc(usersDocRef, {
              displayName, email, createdAt, ...additionalInfo
          })
        } catch (e) {
            console.log("error in setting the data is: ",e.message());
        }
    }
    return usersDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
        return console.log(e.message);
    }
}

