import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../../../firebase.config';

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 

    // regiset 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    // login 
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password); 
    }


    const userInfo = {
        user, 
        createUser,
        logInUser



    };
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;