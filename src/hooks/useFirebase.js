
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import app from "../firebase/firebase.config";

const auth=getAuth(app)


// providers

const provider = new GoogleAuthProvider();


const useFirebase = () => {

    //  Google Signin

  const signInWithGoogle = () => {
    return signInWithPopup(auth,provider)
   
   
  }


    return {
        signInWithGoogle,
    }

   
};

export default useFirebase;