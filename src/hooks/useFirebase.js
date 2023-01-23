
import { getAuth,
     signInWithPopup, 
     GoogleAuthProvider,
     GithubAuthProvider ,
     FacebookAuthProvider,
     onAuthStateChanged, 
     signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import app from "../firebase/firebase.config";
import { } from "firebase/auth";

const auth = getAuth(app)


// providers

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState(' ')



    //  Google Signin

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)

            })
            .catch((err) => {
                setError(err.message)
            })


    }


    // Github Sign in 

    const signInWithgitHub=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)

        })
        .catch((err) => {
            setError(err.message)
        })
        



    }


    // sign in with facebook 

    const signInWithFacebook=()=>{
        signInWithPopup(auth,facebookProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)

        })
        .catch((err) => {
            setError(err.message)
        })
        



    }

    //   google signout 
    const logOut = () => {
        signOut(auth)
            .then(()=>{
                setUser({})
                
            })
            .catch(err => setError(err.message))

    }


    //   Get the currently signed-in user

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
              

            }

        })


        return () => unsubscribe;

    }, [])



    return {
        signInWithGoogle,
        signInWithgitHub,
        signInWithFacebook,
        user,
        error,
        logOut
    }


};

export default useFirebase;