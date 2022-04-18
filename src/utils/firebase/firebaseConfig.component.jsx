import {initializeApp} from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, writeBatch} from 'firebase/firestore'

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })

    await batch.commit();
    console.log('done')
}

export const getCategoriesAndDocuments =  async () => {
    const collectionRef = collection(db, 'categories');
    const q =  query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    const usersDocRef = await doc(db, 'users', userAuth.uid);
    const usersSnapshot = await getDoc(usersDocRef);
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
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        return console.log(e.message);
    }
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
   try {
       return await signInWithEmailAndPassword (auth, email, password);
   } catch (e) {
       console.log(e.message);
   }
}

export const signOutAuth = async () => {
    return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);
