import React, { useEffect, useState } from 'react';
import { auth } from './firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateName = (info) =>{
        return updateProfile(auth.currentUser, info);
    }

    //login with google
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    // console.log(user)
    
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
        updateName,
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