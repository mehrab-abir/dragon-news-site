import React, { useEffect, useState } from 'react';
import { auth } from './firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signOutUser = ()=>{
        return signOut(auth);
    }

    //login with google
    const googleLogIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    console.log(user)
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        googleLogIn,
        user,
        loading
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;