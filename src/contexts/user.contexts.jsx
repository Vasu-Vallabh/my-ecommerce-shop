import {createContext, useEffect, useState} from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebaseConfig.component";

export const UserContext = createContext( {
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    useEffect(() => {
        return onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
    },[])

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
