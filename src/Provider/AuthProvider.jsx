import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Login from '../Components/Login/Login';

//step 01 of auth Context -> Create Contetxt ;
export const AuthContext = createContext() ;
const auth = getAuth(app) ;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null) ;


    //----------Creating new User with Email and password------------------ 
    const createUser = (email,password) => {
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    //----------An observer to track logged in User --------------------
    useEffect(()=>{
        const tracking = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser) ;
        })
        return()=>{
            tracking() ;
        }
    },[])

    //------------Login functionaluty for email and password-----------------------
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password) ;
    } 

    
    //-------------Logout functionality---------------------------
    const logout = () => {
        return  signOut(auth) 
    }


    //----------Step 02 -> Auth Data and return auth context--------------------
    const authData = {
        user,
        setUser,
        createUser,
        logout,
        logIn,
    }

    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;