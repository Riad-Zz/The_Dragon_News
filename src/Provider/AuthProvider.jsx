import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Login from '../Components/Login/Login';


//step 01 of auth Context -> Create Contetxt ;
export const AuthContext = createContext() ;
const auth = getAuth(app) ;
const googleprovider = new GoogleAuthProvider() ; 
const gitProvider = new GithubAuthProvider() ;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null) ;
    const [loading,setLoading] = useState(true) ;


    //----------Creating new User with Email and password------------------ 
    const createUser = (email,password) => {
        setLoading(true) ;
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    //----------Create User with Gmail ----------------------------
    const gogleLogin = () => {
        setLoading(true) ;
        return signInWithPopup(auth,googleprovider) ; 
    }

    //Create a user with Github ------------------------
    const githubLogin = () => {
        // setLoading(true) ;
        // console.log("okkk")
        return signInWithPopup(auth,gitProvider) ;
    }

    //----------An observer to track logged in User --------------------
    useEffect(()=>{
        const tracking = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser) ;
            setLoading(false) ;
        })
        return()=>{
            tracking() ;
        }
    },[])

    //------------Login functionaluty for email and password-----------------------
    const logIn = (email,password) => {
        setLoading(true) ;
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
        loading,
        gogleLogin,
        githubLogin,
    }

    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;