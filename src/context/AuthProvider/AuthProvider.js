import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { signOut, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const addData = (userObj) => {
        return updateProfile(auth.currentUser, userObj);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser == null || currentUser.emailVerified){
                setUser(currentUser);
            }
            
        })

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        logIn,
        addData,
        logOut,
        emailVerification
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;