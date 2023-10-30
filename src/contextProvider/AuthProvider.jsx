import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firbase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [looding, setLooding] = useState(true)


// crete user via register 
const creteUsers = (email,password) =>{
    setLooding(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
//  Signed in exgesting user

const singnInUser = (email,password) =>{
    setLooding(true)
    return signInWithEmailAndPassword(auth,email,password);
}

// logout user

const logOut = () =>{
    setLooding(true)
    return signOut(auth);
}

// set ovserver 
useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth , (Cuser =>{
        setUser(Cuser);
        setLooding(false)
    }))
    return () =>{
        unSubscribe()
    }
},[])


const AuthInfo = {
    creteUsers,singnInUser,user,logOut,looding
}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;